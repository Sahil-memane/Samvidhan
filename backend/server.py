from flask import Flask, render_template, request, jsonify, send_file
from gradio_client import Client
from flask import Flask, request, jsonify
from gradio_client import Client as GradioClient
import google.generativeai as genai
import json
import os
from flask_cors import CORS
from gemini import GiveGeminiOutput
from admin.markdown_converter import convert_to_markdown
from dotenv import load_dotenv
from admin.dataset_creator import create_dataset
from flask import Flask, request, jsonify, send_file
import threading
import cv2
import csv
import time
from cvzone.HandTrackingModule import HandDetector
import cvzone
import os
import json
from mario.main import Core
from vr_convertor import vr_convertor
from moviepy.editor import VideoFileClip, clips_array
from firebase_admin import credentials, firestore, initialize_app

app = Flask(__name__)
CORS(app)

# Load environment variables
load_dotenv()

# File to store chat history
history_file = "chat_history.json"

if os.path.exists(history_file):
    with open(history_file, "r") as f:
        chat_history = json.load(f)
else:
    chat_history = []

@app.route('/')
def hello_world():
    return 'Server is running!'

@app.route("/get_scenario", methods=["POST"])
def get_scenario():
    data = request.json
    message = data["message"]

    response = GiveGeminiOutput(message)

    return jsonify({"response": response})

@app.route("/get_response", methods=["POST"])
def get_response():
    data = request.get_json()
    message = data["message"]
    user_feedback = data.get("feedback", "")
    language = data["language"]

    # Configure the Gemini API key
    genai.configure(api_key="AIzaSyBTviMTxz0Jqu6UVYChQvCKDuWvf26LbI4")

    # Set up safety settings
    safety_settings = [
        {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
        {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
        {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
        {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
    ]

    # Initialize the model with safety settings
    model = genai.GenerativeModel(
        model_name="gemini-1.5-pro",
        safety_settings=safety_settings
    )

    # Start the conversation with a contextual prompt
    convo = model.start_chat(history=[])
    convo.send_message(
        f"You are a knowledgeable assistant specializing in the Constitution of India. Answer only questions related to the Constitution in {language}. "
        f"If the answer does not contain relevant constitutional keywords, inform the user accordingly: {message}"
    )

    # Get the last response from the conversation
    result = convo.last.text

    # Update chat history
    chat_history.append({
        "user_message": message,
        "response": result,
        "feedback": user_feedback
    })

    # Save chat history
    with open(history_file, "w") as f:
        json.dump(chat_history, f, indent=4)

    # Return the generated response along with conversation history
    return jsonify({"response": result, "conversation": chat_history})



# main driver function
@app.route('/generate-story', methods=['POST'])
def generate_story():
    data = request.get_json()
    text = data['text']

    # Initialize the API key and configure the Generative AI model
    genai.configure(api_key="AIzaSyBTviMTxz0Jqu6UVYChQvCKDuWvf26LbI4")
    

    # Set up the model with generation configuration and safety settings

    safety_settings = [
        {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
        {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
        {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
        {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
    ]

    # Initialize and use the model to generate the story
    model = genai.GenerativeModel(
        model_name="gemini-1.5-pro",
        safety_settings=safety_settings
    )

    convo = model.start_chat(history=[])
    convo.send_message(f"Give me a very short and simple story to understand this article: {text}")

    # Return the generated story
    return jsonify({"story": convo.last.text})

def run_game_1():
    oCore = Core()
    oCore.main_loop()
    return "Game 1 finished"




# Initialize Firebase Firestore
cred = credentials.Certificate("./credentials.json")  # Update with your Firebase credentials file
initialize_app(cred)
db = firestore.client()

def get_username():
    try:
        with open("username.txt", "r") as file:
            return file.read().strip()
    except FileNotFoundError:
        print("username.txt not found")
        return None

def run_game_2():
    cap = cv2.VideoCapture(0)
    cap.set(3, 1280)
    cap.set(4, 720)
    detector = HandDetector(detectionCon=0.8)

    class MCQ():
        def __init__(self, data):
            self.question = data[0]
            self.choice1 = data[1]
            self.choice2 = data[2]
            self.choice3 = data[3]
            self.choice4 = data[4]
            self.answer = int(data[5])
            self.userAns = None

        def update(self, cursor, bboxs):
            for x, bbox in enumerate(bboxs):
                x1, y1, x2, y2 = bbox
                if x1 < cursor[0] < x2 and y1 < cursor[1] < y2:
                    self.userAns = x + 1
                    cv2.rectangle(img, (x1, y1), (x2, y2), (0, 255, 0), cv2.FILLED)

    pathCSV = "Mcqs.csv"
    with open(pathCSV, newline='\n') as f:
        reader = csv.reader(f)
        dataAll = list(reader)[1:]

    mcqList = [MCQ(q) for q in dataAll]

    qNo = 0
    qTotal = len(dataAll)

    while True:
        success, img = cap.read()
        img = cv2.flip(img, 1)
        hands, img = detector.findHands(img, flipType=False)

        if qNo < qTotal:
            mcq = mcqList[qNo]
            img, bbox = cvzone.putTextRect(img, mcq.question, [100, 100], 2, 2, offset=50, border=5)
            img, bbox1 = cvzone.putTextRect(img, mcq.choice1, [100, 250], 2, 2, offset=50, border=5)
            img, bbox2 = cvzone.putTextRect(img, mcq.choice2, [400, 250], 2, 2, offset=50, border=5)
            img, bbox3 = cvzone.putTextRect(img, mcq.choice3, [100, 400], 2, 2, offset=50, border=5)
            img, bbox4 = cvzone.putTextRect(img, mcq.choice4, [400, 400], 2, 2, offset=50, border=5)

            if hands:
                lmList = hands[0]['lmList']
                if len(lmList) >= 13:
                    cursor = lmList[8]
                    length, info, img = detector.findDistance(lmList[8][:2], lmList[12][:2], img)
                else:
                    cursor = None
                    length, info = 0, ""
                if length < 60:
                    mcq.update(cursor, [bbox1, bbox2, bbox3, bbox4])
                    if mcq.userAns is not None:
                        time.sleep(0.3)
                        qNo += 1
        else:
            correct_answers = sum(mcq.answer == mcq.userAns for mcq in mcqList)
            score_in_marks = correct_answers * 10  # 10 marks per correct answer

            img, _ = cvzone.putTextRect(img, "Quiz is completed", [250, 300], 2, 2, offset=50, border=5)
            img, _ = cvzone.putTextRect(img, f'Your Marks: {score_in_marks}', [700, 300], 2, 2, offset=16, border=5)

            # Update Firestore with the score
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
                    updated_score = previous_score + score_in_marks

                    # Update the Firestore document with the new score
                    db.collection("users").document(doc_id).update({
                        "score": updated_score,
                        "timestamp": firestore.SERVER_TIMESTAMP,  # Optionally update timestamp
                    })
                    print(f"Updated Firestore: Username={username}, Previous Score={previous_score}, Added Score={score_in_marks}, New Score={updated_score}")
                    doc_found = True
                    break  # Exit loop after updating the first matching document

                if not doc_found:
                    print(f"No existing document found for username: {username}")
            else:
                print("Failed to update Firestore: Username not found")

            cv2.imshow("Img", img)
            time.sleep(5)
            break


        barValue = 150 + (950 // qTotal) * qNo
        cv2.rectangle(img, (150, 600), (barValue, 650), (0, 255, 0), cv2.FILLED)
        cv2.rectangle(img, (150, 600), (1100, 650), (255, 0, 255), 5)
        img, _ = cvzone.putTextRect(img, f'{round((qNo / qTotal) * 100)}%', [1130, 635], 2, 2, offset=16, border=5)

        cv2.imshow("Img", img)

        key = cv2.waitKey(1)
        if key == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()
    return "Game 2 finished"


@app.route('/start-game-1', methods=['POST'])
def start_game_1():
    data = request.get_json()
    username = data.get('username')  # Retrieve the username from the request body

    if not username:
        return jsonify({"error": "Username is required"}), 400
    
    # store the username in the file
    with open("username.txt", "w") as f:
        f.write(username)

    print(f"Starting Game 1 for user: {username}")
    game_thread = threading.Thread(target=run_game_1)
    game_thread.start()
    return jsonify({"message": "Game 1 started!", "username": username})

@app.route('/start-game-2', methods=['POST'])
def start_game_2():
    data = request.get_json()
    username = data.get('username')  # Retrieve the username from the request body

    if not username:
        return jsonify({"error": "Username is required"}), 400
    with open("username.txt", "w") as f:
        f.write(username)
    print(f"Starting Quiz Game for user: {username}")
    quiz_thread = threading.Thread(target=run_game_2)
    quiz_thread.start()
    return jsonify({"message": "Quiz game started!", "username": username})
@app.route('/game-status', methods=['GET'])
def game_status():
    status = request.args.get('status', 'unknown')
    return jsonify({"status": status})

# accept the video call the vrconvertor function and return the video
@app.route('/vr-convertor', methods=['POST'])
def vr_convertor():
    file = request.files['file']
    if file:
        try:
            # Ensure temp directory exists
            if not os.path.exists("temp"):
                os.makedirs("temp")

            # Save the uploaded file to the temp directory
            file_extension = os.path.splitext(file.filename)[1]
            input_path = os.path.join("temp", "input" + file_extension)
            file.save(input_path)

            # Load the original video using MoviePy
            clip = VideoFileClip(input_path)

            # Create the side-by-side video (duplicate the original clip)
            side_by_side = clips_array([[clip, clip]])

            # Optionally resize to a specific resolution
            final_clip = side_by_side.resize(height=1080)

            # Save the final VR video with verbose logging
            output_video = os.path.join("temp", "vr_video.mp4")
            final_clip.write_videofile(output_video, codec='libx264', verbose=True, threads=4)

            # Close the video clips to release resources
            clip.close()
            final_clip.close()

            # Send the converted video file as response
            return send_file(output_video, as_attachment=True, download_name="vr_video.mp4")
        
        except Exception as e:
            print(f"Error during conversion: {e}")
            return jsonify({"response": "Failed", "error": str(e)})
    
    return jsonify({"response": "Failed"})


if __name__ == '__main__':
    app.run(port=5000, debug=True)
