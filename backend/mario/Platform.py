import pygame as pg
import time
import csv
qNo = 0

# Initialize Firebase Firestore
import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Firebase with a unique name
cred = credentials.Certificate("./credentials.json")  # Update with your Firebase credentials file
default_app = firebase_admin.initialize_app(cred, name='app1')

# Get Firestore client
db = firestore.client(default_app)


def get_username():
    try:
        with open("username.txt", "r") as file:
            return file.read().strip()
    except FileNotFoundError:
        print("username.txt not found")
        return None

class Platform(object):
    def __init__(self, x, y, image, type_id):
        self.image = image
        self.rect = pg.Rect(x, y, 32, 32)

        # 22 - question block
        # 23 - brick block
        self.typeID = type_id

        self.type = 'Platform'

        self.shaking = False
        self.shakingUp = True
        self.shakeOffset = 0

        if self.typeID == 22:
            self.currentImage = 0
            self.imageTick = 0
            self.isActivated = False
            self.bonus = 'coin'

        #---------------------------------------------------------------------
        self.qNo = 0

    def update(self):
        if self.typeID == 22:
            self.imageTick += 1
            if self.imageTick == 50:
                self.currentImage = 1
            elif self.imageTick == 60:
                self.currentImage = 2
            elif self.imageTick == 70:
                self.currentImage = 1
            elif self.imageTick == 80:
                self.currentImage = 0
                self.imageTick = 0

    def shake(self):
        if self.shakingUp:
            self.shakeOffset -= 2
            self.rect.y -= 2
        else:
            self.shakeOffset += 2
            self.rect.y += 2
        if self.shakeOffset == -20:
            self.shakingUp = False
        if self.shakeOffset == 0:
            self.shaking = False
            self.shakingUp = True

    def spawn_bonus(self, core):
        self.isActivated = True
        self.shaking = True
        self.imageTick = 0
        self.currentImage = 3

        if self.bonus == 'mushroom':
            print('Mushroom in Platform.py file spawn bonus class')
            core.get_sound().play('mushroom_appear', 0, 0.5)
            if core.get_map().get_player().powerLVL == 0:
                core.get_map().spawn_mushroom(self.rect.x, self.rect.y)
            else:
                core.get_map().spawn_flower(self.rect.x, self.rect.y)

        elif self.bonus == 'coin':
            print('Coin in Platform.py file spawn bonus class')
            core.get_sound().play('coin', 0, 0.5)
            core.get_map().spawn_debris(self.rect.x + 8, self.rect.y - 32, 1)
            core.get_map().get_player().add_coins(1)
            core.get_map().get_player().add_score(200)

        self.trigger_quiz(core)



#----------------------------------------------------------------------------
    def trigger_quiz(self, core):
        global qNo 
        qNo += 1
        # Replace 'quiz_data.csv' with the path to your CSV file'
        with open('quiz.csv', mode='r') as file:
            reader = csv.DictReader(file)
            quiz_data = list(reader)

        # Define the quiz parameters
        for entry in quiz_data:
            if entry['SrNo'] == str(qNo):
                question = entry['Question']
                options = [entry['Option1'], entry['Option2'], entry['Option3'], entry['Option4']]
                
                # Find the correct option index by comparing with the actual answer
                correct_answer_text = entry['CorrectAnswer']
                try:
                    correct_option_index = options.index(correct_answer_text)
                except ValueError:
                    print(f"Error: Correct answer '{correct_answer_text}' not found in options.")
                    return

                duration = 10  # Duration in seconds

                # Call the display_quiz method with the defined parameters
                self.display_quiz(core, question, options, correct_option_index, duration)
                return

#-----------------------------------------------------------------------------
 #-----------------------------------------------------------------------------

    def display_quiz(self, core, question, options, correct_option_index, duration=10):
        # Initialize Pygame font
        font = pg.font.Font(None, 30)
        option_font = pg.font.Font(None, 25)  # Smaller font for options
        answer_rects = []

        # Set colors
        background_color = (255, 253, 242)  # Light cream for background
        box_color = (0, 0, 0)  # Black for box outline
        text_color = (0, 0, 0)  # Black for text
        feedback_color = (0, 255, 0)  # Green for correct feedback
        feedback_color_wrong = (255, 0, 0)  # Red for wrong feedback

        # Render question text
        question_text = font.render(question, True, text_color)
        question_rect = question_text.get_rect(center=(core.screen.get_width() // 2, 150))

        # Define box dimensions
        box_width = max(question_rect.width, max(option_font.size(opt)[0] for opt in options)) + 140
        box_height = 100 + len(options) * 50
        box_rect = pg.Rect((core.screen.get_width() // 2 - box_width // 2, 100), (box_width, box_height))

        # Render options
        for i, option in enumerate(options):
            option_text = option_font.render(option, True, text_color)
            option_rect = option_text.get_rect(center=(core.screen.get_width() // 2, 200 + i * 50))  # Position options
            answer_rects.append(option_rect)

        # Load and resize the cloud image
        cloud_image = pg.image.load('images/cloud.png').convert_alpha()
        cloud_image = pg.transform.scale(cloud_image, (box_rect.width, box_rect.height))

        end_time = pg.time.get_ticks() + (duration * 1000)  # Convert seconds to milliseconds
        selected_option = None

        while pg.time.get_ticks() < end_time:
            for event in pg.event.get():
                if event.type == pg.QUIT:
                    core.run = False
                    return

                if event.type == pg.MOUSEBUTTONDOWN:
                    mouse_pos = pg.mouse.get_pos()
                    for i, rect in enumerate(answer_rects):
                        if rect.collidepoint(mouse_pos):
                            selected_option = i
                            end_time = pg.time.get_ticks()  # Set end_time to current time to exit loop
                            break
                    if selected_option is not None:
                        break

            # Clear the screen with the background color
            core.screen.fill(background_color)

            # Blit the cloud image onto the screen at the position of the box
            core.screen.blit(cloud_image, box_rect.topleft)

            # Draw the question text inside a black box
            question_box_rect = pg.Rect(box_rect.x, box_rect.y, box_rect.width, 80)  # Define question box
            pg.draw.rect(core.screen, box_color, question_box_rect, 2)  # Draw box outline
            core.screen.blit(question_text, question_rect)

            # Draw the quiz interface
            for i, option_rect in enumerate(answer_rects):
                pg.draw.rect(core.screen, box_color, option_rect.inflate(10, 10), 2)  # Draw box outline for options
                option_text = option_font.render(options[i], True, text_color)  # Black text
                core.screen.blit(option_text, option_rect)

            if selected_option is not None:
                # Provide feedback on the selected option
                if selected_option == correct_option_index:  # Check if the selected option is correct                   
                    feedback_text = font.render("Correct!", True, feedback_color)
                    username = get_username()
                    if username:
                    # Query Firestore for the document with the matching username
                        user_docs = db.collection("users").where("username", "==", username).stream()

                        doc_found = False
                        for doc in user_docs:
                            doc_id = doc.id  # Get the document ID
                            doc_data = doc.to_dict()  # Get the document data

                            # Get the previous score, default to 0 if not found
                            previous_score = doc_data.get("score", 0)
                            updated_score = previous_score + 10

                            # Update the Firestore document with the new score
                            db.collection("users").document(doc_id).update({
                                "score": updated_score,
                                "timestamp": firestore.SERVER_TIMESTAMP,  # Optionally update timestamp
                            })
                            print(f"Updated Firestore: Username={username}, Previous Score={previous_score}, New Score={updated_score}")
                            doc_found = True
                            break  # Exit loop after updating the first matching document

                        if not doc_found:
                            print(f"No existing document found for username: {username}")
                    else:
                        print("Failed to update Firestore: Username not found")

                else:
                    feedback_text = font.render("Wrong!", True, feedback_color_wrong)
                    global qNo 
                    qNo -= 1

                feedback_rect = feedback_text.get_rect(center=(core.screen.get_width() // 2, core.screen.get_height() - 70))
                core.screen.blit(feedback_text, feedback_rect)
    
            # Update the display to show the feedback
            pg.display.flip()

            # Pause for one second to allow the user to see the feedback
            pg.time.delay(1000)

            core.clock.tick(60)



 #-----------------------------------------------------------------------------


    def destroy(self, core):
        core.get_map().spawn_debris(self.rect.x, self.rect.y, 0)
        core.get_map().remove_object(self)

    def render(self, core):

        # Question block
        if self.typeID == 22:
            if not self.isActivated:
                self.update()
            elif self.shaking:
                self.shake()
            core.screen.blit(self.image[self.currentImage], core.get_map().get_camera().apply(self))

        # Brick block
        elif self.typeID == 23 and self.shaking:
            self.shake()
            core.screen.blit(self.image, core.get_map().get_camera().apply(self))

        else:
            core.screen.blit(self.image, core.get_map().get_camera().apply(self))

