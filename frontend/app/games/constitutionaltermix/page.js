"use client";
import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuJT54xuL7_r5YEDg3AUJhEyGRVIWbulE",
  authDomain: "samvidhan-67220.firebaseapp.com",
  projectId: "samvidhan-67220",
  storageBucket: "samvidhan-67220.appspot.com",
  messagingSenderId: "322714689868",
  appId: "1:322714689868:web:c1817f095febb4075f2fe9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const constitutionWords = [
  { word: "Preamble", hint: "Introduction to the Constitution" },
  { word: "Sovereign", hint: "A state with full control over its affairs" },
  { word: "Secular", hint: "A country without an official religion" },
  { word: "Democratic", hint: "System of government where people elect leaders" },
  { word: "Republic", hint: "A state where the head is elected, not a monarch" },
  { word: "FundamentalRights", hint: "Basic human rights guaranteed by the Constitution" },
  { word: "DirectivePrinciples", hint: "Guidelines for the framing of laws" },
  { word: "Amendment", hint: "A formal change to the Constitution" },
  { word: "Parliament", hint: "The supreme legislative body in a country" },
  { word: "Judiciary", hint: "System of courts that interprets and applies the law" },
];

export default function ConstitutionHangman() {
  const [totalChances, setTotalChances] = useState(10);
  const [randomConstitutionWord, setRandomConstitutionWord] = useState(null);
  const [checkStatusGlobal, setCheckStatusGlobal] = useState(0);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  useEffect(() => {
    chooseRandomConstitutionWord();
  }, []);

  function getRandomNumber(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
  }

  function chooseRandomConstitutionWord() {
    const randomNumber = getRandomNumber(0, constitutionWords.length);
    const chosenWord = constitutionWords[randomNumber];
    setRandomConstitutionWord(chosenWord.word.toUpperCase());
  }

  function updateChancesText() {
    return `Chances Left: ${totalChances}`;
  }

  async function handleButtonClick(letterClicked) {
    let checkStatus = 0;
    const allLettersEls = document.getElementsByTagName("span");

    for (let index = 0; index < allLettersEls.length; index++) {
      const spanEl = allLettersEls[index];

      if (letterClicked === spanEl.textContent) {
        spanEl.parentElement.textContent = letterClicked;
        checkStatus++;
        setCheckStatusGlobal((prev) => prev + 1);
      }
    }

    if (checkStatus !== 0) {
      document.getElementById(letterClicked).classList.add("greenBtn");
    } else {
      setTotalChances((prev) => prev - 1);
      document.getElementById(letterClicked).classList.add("redBtn");
    }

    document.getElementById(letterClicked).setAttribute("disabled", "disabled");

    if (totalChances - 1 === 0) {
      alert("You Lost the Game");
      location.reload();
    }

    if (checkStatusGlobal + checkStatus === randomConstitutionWord.length) {
      const username = localStorage.getItem("username");
      console.log("Username from localStorage:", username);

      if (!username) {
        console.error("Username not found in localStorage");
        alert("Username not found. Please login again.");
        location.reload();
        return;
      }

      try {
        const usersCollection = collection(db, "users");
        const q = query(usersCollection, where("username", "==", username));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0];
          const userDocRef = userDoc.ref;

          const currentScore = userDoc.data().score || 0;

          await updateDoc(userDocRef, { score: currentScore + 10 });
          console.log("Score updated successfully!");
        } else {
          const newUserDocRef = doc(usersCollection, username);
          await setDoc(newUserDocRef, {
            username: username,
            score: 10,
            email: "",
            password: "",
          });
          console.log("New user document created.");
        }
      } catch (error) {
        console.error("Error updating Firestore:", error);
      }

      alert("You won the Game!");
      location.reload();
    }
  }

  return (
    <div>
      <NavBar />
      <div id="root">
        <div className="content">
          <div className="chances-counter">
            <p id="chances-text">{updateChancesText()}</p>
          </div>
          <div className="hint-container">
            <div className="hint">
              Hint: {constitutionWords.find((word) => word.word.toUpperCase() === randomConstitutionWord)?.hint}
            </div>
          </div>
          <div className="blanks_parent">
            {randomConstitutionWord &&
              randomConstitutionWord.split("").map((letter, index) => (
                <p key={index}>
                  <span>{letter}</span>
                </p>
              ))}
          </div>
          <div className="buttons-parent">
            {alphabet.map((letter) => (
              <button
                id={letter}
                key={letter}
                onClick={() => handleButtonClick(letter)}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
        <style jsx>{`
         html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: wheat;
          }

          #root {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100vw;
          }

          .content {
            text-align: center;
          }

          .buttons-parent {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            gap: 10px;
            justify-content: center;
            margin: 20px 0;
          }

          button {
            background-color: #ff9933;
            border: none;
            font-size: 1.5rem;
            font-weight: 600;
            border-radius: 5px;
            width: 50px;
            height: 50px;
            color: white;
            cursor: pointer;
          }

          button:hover {
            background-color: #e67e22;
          }

          .greenBtn {
            background-color: #138808;
            color: white;
          }

          .redBtn {
            background-color: #e03131;
            color: white;
          }

          .blanks_parent {
            height: 20vh;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px 0;
          }

          p {
            font-size: 2rem;
            color: navy;
            margin: 0 5px;
            border-bottom: 2px solid navy;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          span {
            display: none;
          }

          .chances-counter {
            margin-bottom: 20px;
          }

          #chances-text {
            font-size: 1.5rem;
            font-weight: bold;
            color: navy;
            width: 100%;
          }

          .hint-container .hint {
            font-size: 1.2rem;
            font-weight: 300;
            color: #ffffff;
            background-color: rgba(0, 0, 0, 0.7);
            padding: 10px 20px;
            border-radius: 10px;
            display: inline-block;
            max-width: 80%;
            margin: 10px 0;
          }
        `}</style>
      </div>
    </div>
  );
}
