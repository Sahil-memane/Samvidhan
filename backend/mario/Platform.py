import pygame as pg
import time
import csv
import threading
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
        if self.bonus == 'coin':
            core.get_sound().play('coin', 0, 0.5)
            core.get_map().spawn_debris(self.rect.x + 8, self.rect.y - 32, 1)
            core.get_map().get_player().add_coins(1)
            core.get_map().get_player().add_score(200)
        self.trigger_quiz(core)

    def trigger_quiz(self, core):
        global qNo
        qNo += 1
        with open('quiz.csv', mode='r') as file:
            reader = csv.DictReader(file)
            quiz_data = list(reader)
        for entry in quiz_data:
            if entry['SrNo'] == str(qNo):
                question = entry['Question']
                options = [entry['Option1'], entry['Option2'], entry['Option3'], entry['Option4']]
                correct_answer_text = entry['CorrectAnswer']
                try:
                    correct_option_index = options.index(correct_answer_text)
                except ValueError:
                    print(f"Error: Correct answer '{correct_answer_text}' not found in options.")
                    return
                duration = 10
                self.display_quiz(core, question, options, correct_option_index, duration)
                return

    def display_quiz(self, core, question, options, correct_option_index, duration=10):
        font = pg.font.Font(None, 30)
        option_font = pg.font.Font(None, 25)
        answer_rects = []
        background_color = (255, 253, 242)
        box_color = (0, 0, 0)
        text_color = (0, 0, 0)
        feedback_color = (0, 255, 0)
        feedback_color_wrong = (255, 0, 0)
        question_text = font.render(question, True, text_color)
        question_rect = question_text.get_rect(center=(core.screen.get_width() // 2, 150))
        for i, option in enumerate(options):
            option_text = option_font.render(option, True, text_color)
            option_rect = option_text.get_rect(center=(core.screen.get_width() // 2, 200 + i * 50))
            answer_rects.append(option_rect)
        end_time = pg.time.get_ticks() + (duration * 1000)
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
                            end_time = pg.time.get_ticks()
                            break
                    if selected_option is not None:
                        break
            core.screen.fill(background_color)
            core.screen.blit(question_text, question_rect)
            for i, option_rect in enumerate(answer_rects):
                pg.draw.rect(core.screen, box_color, option_rect.inflate(10, 10), 2)
                option_text = option_font.render(options[i], True, text_color)
                core.screen.blit(option_text, option_rect)
            if selected_option is not None:
                if selected_option == correct_option_index:
                    feedback_text = font.render("Correct!", True, feedback_color)
                    threading.Thread(target=self.update_firestore_score).start()
                else:
                    feedback_text = font.render("Wrong!", True, feedback_color_wrong)
                    global qNo
                    qNo -= 1
                feedback_rect = feedback_text.get_rect(center=(core.screen.get_width() // 2, core.screen.get_height() - 70))
                core.screen.blit(feedback_text, feedback_rect)
            pg.display.flip()
            pg.time.delay(2000)
            core.clock.tick(60)

    def update_firestore_score(self):
        username = get_username()
        if username:
            user_docs = db.collection("users").where("username", "==", username).stream()
            for doc in user_docs:
                doc_id = doc.id
                previous_score = doc.to_dict().get("score", 0)
                updated_score = previous_score + 10
                db.collection("users").document(doc_id).update({"score": updated_score, "timestamp": firestore.SERVER_TIMESTAMP})
                break
    
    def destroy(self, core):
        core.get_map().spawn_debris(self.rect.x, self.rect.y, 0)
        core.get_map().remove_object(self)
    
    def render(self, core):
        if self.typeID == 22:
            if not self.isActivated:
                self.update()
            elif self.shaking:
                self.shake()
            core.screen.blit(self.image[self.currentImage], core.get_map().get_camera().apply(self))
        elif self.typeID == 23 and self.shaking:
            self.shake()
            core.screen.blit(self.image, core.get_map().get_camera().apply(self))
        else:
            core.screen.blit(self.image, core.get_map().get_camera().apply(self))