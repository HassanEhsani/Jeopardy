const game = document.getElementById("game");
const scoreDisplay = document.getElementById("score");

const jeopardyCategories = [
  {
    genre: "WHO",
    questions: [
      {
        question: "who wrote Harry Patter?",
        answer: ["JK Rowling", "JRR Tolkien"],
        correct: "JK Rowling",
        level: "easy",
      },
      {
        question: "who was born on krypton",
        answer: ["Aquaman", "Superman"],
        correct: "Superman",
        level: "medium",
      },
      {
        question: "who designed the first car ?",
        answer: ["Karl Benz", "Henry Ford"],
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
    gendre: "HOW MANY",
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

function addCategory(Category) {
  const column = document.createElement("div");
  column.classList.add("genre-column");

  const genreTitle = document.createElement("div");
  genreTitle.classList.add("genre-title");
  genreTitle.innerText = Category.genre;

  column.appendChild(genreTitle)
  game.append(column)
}
jeopardyCategories.forEach((Category) => addCategory(Category));
