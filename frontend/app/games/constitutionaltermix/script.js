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
  { word: "Federalism", hint: "A system where power is divided between central and regional governments" },
  { word: "UnionTerritories", hint: "Regions directly governed by the central government" },
  { word: "Bicameralism", hint: "A legislative body with two chambers or houses" },
  { word: "Secularism", hint: "Principle of separation of government institutions from religious institutions" },
  { word: "Justice", hint: "Fair treatment and behavior under the law" },
  { word: "Equality", hint: "The state of being equal, especially in rights and opportunities" },
  { word: "Liberty", hint: "Freedom from oppressive restrictions imposed by authority" },
  { word: "Fraternity", hint: "Brotherhood and mutual support within a group" },
  { word: "Independence", hint: "Freedom from external control or influence" },
  { word: "Citizenship", hint: "The status of being a legal member of a country" },
];


let totalChances = 10;
let randomConstitutionWord = null;

function getRandomNumber(min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
}

function giveMeButtonsOnScreen() {
  const rootEl = document.querySelector(".buttons-parent");
  let buttonsDataArray = Array(26).fill(null);
  let i = 65;
  buttonsDataArray = buttonsDataArray.map(() => String.fromCharCode(i++));

  buttonsDataArray.forEach((el) => {
    const btn = document.createElement("button");
    btn.textContent = el;
    rootEl.appendChild(btn);
  });
}

function chooseRandomConstitutionWord() {
  const blankParentEl = document.querySelector(".blanks_parent");
  const hintEl = document.querySelector(".hint");

  const randomNumber = getRandomNumber(0, constitutionWords.length);
  const chosenWord = constitutionWords[randomNumber];
  randomConstitutionWord = chosenWord.word.toUpperCase();

  hintEl.textContent = `Hint: ${chosenWord.hint}`;

  for (let index = 0; index < randomConstitutionWord.length; index++) {
    const letter = randomConstitutionWord[index];
    const alpha = document.createElement("p");
    const para = document.createElement("span");
    para.textContent = letter;
    alpha.appendChild(para);
    blankParentEl.appendChild(alpha);
  }
}

function updateChancesText() {
  const chancesTextEl = document.getElementById("chances-text");
  chancesTextEl.textContent = `Chances Left: ${totalChances}`;
}

giveMeButtonsOnScreen();
chooseRandomConstitutionWord();
updateChancesText();

const buttonsParentEl = document.querySelector(".buttons-parent");

let checkStatusGlobal = 0;
const buttonParentClickFunction = function (e) {
  let checkStatus = 0;
  if (e.target.textContent.length === 1) {
    const letterClicked = e.target.textContent;

    const allLettersEls = document.getElementsByTagName("span");

    for (let index = 0; index < allLettersEls.length; index++) {
      const spanEl = allLettersEls[index];

      if (letterClicked == spanEl.textContent) {
        spanEl.parentElement.textContent = letterClicked;

        checkStatus++;
        checkStatusGlobal++;
      }
    }

    if (checkStatus !== 0) {
      e.target.classList.add("greenBtn");
    } else {
      totalChances--;
      updateChancesText();
      e.target.classList.add("redBtn");
    }

    e.target.setAttribute("disabled", "disabled");
  }

  if (totalChances === 0) {
    alert("You Lost the Game");
    location.reload();
  }

  if (checkStatusGlobal === randomConstitutionWord.length) {
    alert("You won the Game!");
    location.reload();
  }
};

buttonsParentEl.addEventListener("click", buttonParentClickFunction);
