def display_quiz(quiz_data):
    for i, entry in enumerate(quiz_data):
        print(f"Question {i+1}:")
        print(f"  SrNo: {entry['SrNo']}")
        print(f"  Question: {entry['Question']}")
        print(f"  Option 1: {entry['Option1']}")
        print(f"  Option 2: {entry['Option2']}")
        print(f"  Option 3: {entry['Option3']}")
        print(f"  Option 4: {entry['Option4']}")
        print(f"  Correct Answer: {entry['CorrectAnswer']}")
        print()  # Print a newline for better readability

def main():
    import csv

    # Replace 'quiz_data.csv' with the path to your CSV file
    with open('quiz.csv', mode='r') as file:
        reader = csv.DictReader(file)
        quiz_data = list(reader)

    display_quiz(quiz_data)

if __name__ == "__main__":
    main()
