"use client";
import React, { useState } from "react";

// Updated scenarios with 25 real-life situations and 5 options each
const scenarios = [
  {
    question: "A shopkeeper refuses to serve you based on your caste. What action should you take?",
    options: [
      "Ignore it",
      "Report the shopkeeper to the police",
      "File a complaint under Article 15",
      "Publicly shame the shopkeeper",
      "Approach the National Human Rights Commission"
    ],
    correct: 2,
    explanation:
      "Article 15 of the Indian Constitution prohibits discrimination based on religion, race, caste, sex, or place of birth."
  },
  {
    question: "Your employer forces you to work extra hours without compensation. What is your legal remedy?",
    options: [
      "Agree and take the overtime pay later",
      "Complain to the labor commissioner",
      "Report to the Ministry of Labour and Employment",
      "File a case under Article 23",
      "Accept it as part of the job"
    ],
    correct: 3,
    explanation:
      "Article 23 of the Constitution prohibits forced labor, and employers must provide fair compensation for overtime."
  },
  {
    question: "You are denied admission to a public university because of your religion. Which article of the Constitution protects your rights?",
    options: [
      "Article 15",
      "Article 21",
      "Article 29",
      "Article 19",
      "Article 51A"
    ],
    correct: 0,
    explanation:
      "Article 15 prohibits discrimination on the grounds of religion, race, caste, sex, or place of birth in public institutions."
  },
  {
    question: "A police officer demands a bribe to register your complaint. What should you do?",
    options: [
      "Pay the bribe",
      "Report the officer to the Anti-Corruption Bureau",
      "Try to negotiate a lower amount",
      "File a case with the local police station",
      "Go to a higher officer for help"
    ],
    correct: 1,
    explanation:
      "Bribery is prohibited under the Prevention of Corruption Act. You should report the police officer to the Anti-Corruption Bureau."
  },
  {
    question: "You are a journalist writing about corruption in a state. Your life is threatened by unknown persons. What should you do?",
    options: [
      "Stop writing the article for safety",
      "Report the threats to the police",
      "Inform the National Human Rights Commission",
      "File a writ petition under Article 32",
      "Go into hiding"
    ],
    correct: 1,
    explanation:
      "Under Article 21, every citizen has the right to life and personal liberty, which includes protection from threats and violence."
  },
  {
    question: "A private school denies admission to a student based on their economic background. What constitutional provision protects against such actions?",
    options: [
      "Article 14",
      "Article 15",
      "Article 21A",
      "Right to Education Act",
      "Directive Principles of State Policy"
    ],
    correct: 2,
    explanation:
      "Article 21A mandates free and compulsory education for children between the ages of 6 to 14, and discrimination based on economic status is prohibited."
  },
  {
    question: "You are falsely accused of a crime and arrested. What is your right under the Constitution?",
    options: [
      "Right to remain silent",
      "Right to a fair trial under Article 21",
      "Right to legal representation under Article 22",
      "Right to bail under Article 22",
      "Right to appeal"
    ],
    correct: 1,
    explanation:
      "Article 21 guarantees the right to life and personal liberty, and anyone falsely accused has the right to a fair trial."
  },
  {
    question: "Your landlord refuses to rent you an apartment because of your religion. What should you do?",
    options: [
      "Ignore it and find another place",
      "Report to the local police",
      "File a complaint under Article 15",
      "Seek legal advice",
      "Approach the Human Rights Commission"
    ],
    correct: 2,
    explanation:
      "Under Article 15, discrimination based on religion, race, caste, sex, or place of birth is prohibited in housing."
  },
  {
    question: "Your employer asks you to work in hazardous conditions without adequate safety measures. What action should you take?",
    options: [
      "Agree and work carefully",
      "File a complaint with the labor ministry",
      "Report the issue to the Health and Safety Authority",
      "File a petition under Article 21",
      "Quit the job immediately"
    ],
    correct: 3,
    explanation:
      "Under Article 21, the right to life includes the right to live in a healthy and safe environment, which includes workplace safety."
  },
  {
    question: "You are facing domestic violence in your home. Which constitutional provision helps protect you?",
    options: [
      "Article 15",
      "Article 21",
      "The Protection of Women from Domestic Violence Act",
      "Article 32",
      "Article 14"
    ],
    correct: 2,
    explanation:
      "The Protection of Women from Domestic Violence Act, 2005, provides legal protection to women facing domestic violence."
  },
  {
    question: "You have been denied a passport because of your political affiliations. What should you do?",
    options: [
      "Accept it and move on",
      "File a writ petition under Article 32",
      "Approach the Ministry of External Affairs",
      "File a complaint with the Human Rights Commission",
      "Publicly protest the denial"
    ],
    correct: 1,
    explanation:
      "Under Article 21, the right to life includes the right to travel freely, and denial of a passport based on political beliefs is unconstitutional."
  },
  {
    question: "Your right to protest peacefully is being disrupted by police force. What constitutional protection do you have?",
    options: [
      "Article 21 - Right to Life",
      "Article 19 - Right to Freedom of Speech",
      "Article 14 - Right to Equality",
      "Article 32 - Right to Constitutional Remedies",
      "Article 25 - Right to Freedom of Religion"
    ],
    correct: 1,
    explanation:
      "Article 19 guarantees the right to freedom of speech and peaceful assembly, and any police force disrupting a peaceful protest is unconstitutional."
  },
  {
    question: "You receive threatening phone calls from a powerful business tycoon. What should you do according to the Constitution?",
    options: [
      "Ignore the threats",
      "Report to the police under Article 21",
      "Contact the National Commission for Human Rights",
      "File a complaint with the Telecom Regulatory Authority",
      "Call for media attention"
    ],
    correct: 1,
    explanation:
      "Under Article 21, every individual has the right to personal security, and threats must be reported to the authorities for action."
  },
  {
    question: "A state government imposes a curfew without any legal justification. What can citizens do under the Constitution?",
    options: [
      "Accept it as lawful",
      "Challenge it in the court under Article 32",
      "File a complaint to the Governor",
      "Protest against the curfew",
      "Consult a political leader"
    ],
    correct: 1,
    explanation:
      "Article 32 allows individuals to approach the Supreme Court for enforcement of their fundamental rights, including protection against arbitrary state action."
  },
  {
    question: "You are facing harassment due to your sexual orientation at a workplace. What constitutional remedy do you have?",
    options: [
      "Ignore it and continue working",
      "Report the issue to the police",
      "File a complaint under Article 14",
      "Approach the Human Rights Commission",
      "File a lawsuit under Section 377"
    ],
    correct: 3,
    explanation:
      "Harassment based on sexual orientation is against Article 14 (Right to Equality), and one can approach the Human Rights Commission for redressal."
  },
  {
    question: "A municipal corporation refuses to provide you with basic amenities like water and electricity. What should you do?",
    options: [
      "Report the issue to the government",
      "File a complaint with the consumer court",
      "Approach the High Court for intervention",
      "Protest outside the corporation office",
      "Consult a lawyer for legal remedies"
    ],
    correct: 2,
    explanation:
      "Basic amenities like water and electricity are essential services, and failure to provide them can be challenged in the High Court under Article 21."
  },
  {
    question: "You are a public servant and have been wrongly accused of misconduct. How can you defend yourself?",
    options: [
      "Publicly defend your actions",
      "Resign immediately",
      "File a petition under Article 226",
      "Appeal to the President",
      "Wait for the government inquiry"
    ],
    correct: 2,
    explanation:
      "Public servants have the right to challenge accusations in a court of law under Article 226 of the Constitution."
  },
  {
    question: "You were stopped at an airport due to a mistaken identity and your dignity was harmed. What constitutional right do you have?",
    options: [
      "Article 14 - Right to Equality",
      "Article 19 - Right to Freedom of Speech",
      "Article 21 - Right to Life and Personal Liberty",
      "Article 25 - Right to Religion",
      "Article 15 - Prohibition of Discrimination"
    ],
    correct: 2,
    explanation:
      "Article 21 protects an individual from violations of their personal dignity and liberty, which includes unjustified detentions."
  },
  // Add more questions as needed
];

export default function Page() {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
    setShowExplanation(true);

    if (index === scenarios[currentScenario].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowExplanation(false);

    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
    } else {
      alert(`Game Over! Your final score: ${score}/${scenarios.length}`);
      setCurrentScenario(0);
      setScore(0);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex flex-col items-center justify-center p-6"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Game Section */}
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg w-full max-w-lg text-black">
        <h1 className="text-3xl font-bold text-center mb-4">"Empower Yourself, Know Your Rights!"</h1>
        <h2 className="text-xl font-bold">{scenarios[currentScenario].question}</h2>
        <div className="mt-4">
          {scenarios[currentScenario].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              className={`block w-full p-3 my-2 border rounded-lg transition-colors duration-200 ${
                selectedOption !== null
                  ? index === scenarios[currentScenario].correct
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : "bg-blue-500 text-white"
              }`}
              disabled={selectedOption !== null}
            >
              {option}
            </button>
          ))}
        </div>
        {showExplanation && (
          <div className="mt-4 text-sm text-gray-700">
            <strong>Explanation: </strong>
            {scenarios[currentScenario].explanation}
          </div>
        )}
        <div className="mt-4 flex justify-between">
          <span>Score: {score}/{scenarios.length}</span>
          <button onClick={handleNext} className="bg-yellow-500 text-black py-2 px-4 rounded-lg">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
