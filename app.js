const game = document.getElementById("game");
const scoreDisplay = document.getElementById("score");

const jeopardyCategories = [
  {
    genre: "WHO",
    questions: [
      {
        question: "who wrote Harry Patter?",
        answers: ["JK Rowling", "JRR Tolkien"],
        correct: "JK Rowling",
        level: "easy",
      },
      {
        question: "who was born on krypton",
        answers: ["Aquaman", "Superman"],
        correct: "Superman",
        level: "medium",
      },
      {
        question: "who designed the first car ?",
        answers: ["Karl Benz", "Henry Ford"],
        correct: "Karl Benz",
        level: "hard",
      },
    ],
  },
  {
    genre: "WHERE",
    questions: [
      {
        question: "where is Buckingham Palace?",
        answers: ["Richmon", "London"],
        correct: "London",
        level: "easy",
      },
      {
        question: "where is the Colosseum",
        answers: ["Rome", "Milan"],
        correct: "Rome",
        level: "medium",
      },
      {
        question: "where is Mount Kilamanjiaro",
        answers: ["Zimbabwe", "Tanzania"],
        correct: "Tanzania",
        level: "hard",
      },
    ],
  },
  {
    genre: "WHEN",
    questions: [
      {
        question: "when is Christmas?",
        answers: ["30th Dec", "24th/25th Dec"],
        correct: "24th/25th Dec",
        level: "easy",
      },
      {
        question: "when was JFK Shot?",
        answers: ["1963", "1961"],
        correct: "1963",
        level: "hard",
      },
      {
        question: "when was WW2?",
        answers: ["1932", "1941"],
        correct: "1941",
        level: "medium",
      },
    ],
  },
  {
    genre: "WHAT",
    questions: [
      {
        question: "what is the capital of Saudi Arabia?",
        answers: ["Jeddah", "Riyadh"],
        correct: "Riyadh",
        level: "hard",
      },
      {
        question: "what is kg short for",
        answers: ["kilo", "Kilogram"],
        correct: "Kilogram",
        level: "easy",
      },
      {
        question: "what do Koalas eat?",
        answers: ["Straw", "Eucalypt"],
        correct: "Eucalypt",
        level: "medium",
      },
    ],
  },
  {
    genre: "HOW MANY",
    questions: [
      {
        question: "how many players in a football team?",
        answers: ["15", "11"],
        correct: "11",
        level: "easy",
      },
      {
        question: "how many people in China?",
        answers: ["1.1 bil", "1.4 bil"],
        correct: "1.4 bil",
        level: "hard",
      },
      {
        question: "how many seconds in an hour?",
        answers: ["36000", "3600"],
        correct: "3600",
        level: "medium",
      },
    ],
  },
];

let score = 0;
function addCategory(Category) {
  const column = document.createElement("div");
  column.classList.add("genre-column");

  const genreTitle = document.createElement("div");
  genreTitle.classList.add("genre-title");
  genreTitle.innerHTML = Category.genre;

  column.appendChild(genreTitle);
  game.append(column);

  Category.questions.forEach((question) => {
    const card = document.createElement("div");
    card.classList.add("card");
    column.append(card);

    if (question.level === "easy") {
      card.innerHTML = 100;
    }
    if (question.level === "medium") {
      card.innerHTML = 200;
    }
    if (question.level === "hard") {
      card.innerHTML = 300;
    }

    card.setAttribute("data-question", question.question);
    card.setAttribute("data-answer-1", question.answers[0]);
    card.setAttribute("data-answer-2", question.answers[1]);
    card.setAttribute("data-correct", question.correct);

    card.setAttribute("data-value", card.getInnerHTML());

    card.addEventListener("click", flipCard);
  });
}
jeopardyCategories.forEach((Category) => addCategory(Category));

function flipCard() {
  this.innerHTML = "";
  this.style.fontSize = "15px";
  this.style.lineHeight = "30px";
  const textDisplay = document.createElement("div");
  textDisplay.classList.add("card-text");
  textDisplay.innerHTML = this.getAttribute("data-question");
  const firstButton = document.createElement("button");
  const secondButton = document.createElement("button");

  firstButton.classList.add("first-button");
  secondButton.classList.add("second-button");

  firstButton.innerHTML = this.getAttribute("data-answer-1");
  secondButton.innerHTML = this.getAttribute("data-answer-2");
  firstButton.addEventListener("click", getResult);
  secondButton.addEventListener("click", getResult);
  this.append(textDisplay, firstButton, secondButton);

  const allCards = Array.from(document.querySelectorAll(".card"));
  allCards.forEach((card) => card.removeEventListener("click", flipCard));
}

function getResult() {
  const allCards = Array.from(document.querySelectorAll(".card"));
  allCards.forEach((card) => card.addEventListener("click", flipCard));

  const cardOfButton = this.parentElement;

  if (cardOfButton.getAttribute("data-correct") == this.innerHTML) {
    score = score + parseInt(cardOfButton.getAttribute("data-value"));
    scoreDisplay.innerHTML = score;
    cardOfButton.classList.add("correct-answer");
    setTimeout(() => {
      while (cardOfButton.firstChild) {
        cardOfButton.removeChild(cardOfButton.lastChild);
      }
      cardOfButton.innerHTML = cardOfButton.getAttribute("data-value");
    }, 100);
  } else {
    cardOfButton.classList.add("wrong-answer");
    setTimeout(() => {
      while (cardOfButton.firstChild) {
        cardOfButton.removeChild(cardOfButton.lastChild);
      }
      cardOfButton.innerHTML = 0;
    }, 100);
  }
  cardOfButton.removeEventListener("click", flipCard);
  //    console.log('cardPfButton',cardOfButton)
}
