const quizdata = [
  {
    question: "Who is the father of Computers?",
    options: [
      " James Gosling",
      "Charles Babbage",
      "Dennis Ritchie",
      "Bjarne Stroustrup",
    ],
    answer: "Charles Babbage",
  },
  {
    question: "What is the full form of CPU?",
    options: [
      "Computer Processing Unit",
      "Computer Principle Unit",
      " Central Processing Unit",
      "Control Processing Unit",
    ],
    answer: " Central Processing Unit",
  },
  {
    question:
      " Which of the following is not a type of computer on the basis of operation?",
    options: ["Digital", "Hybrid", "Analog", "Remote"],
    answer: "Remote",
  },
  {
    question:
      "Which of the following type of computer is mostly used for automatic operations?",
    options: ["Digital", "Hybrid", "Analog", "Remote"],
    answer: "Hybrid",
  },
  {
    question:
      "Which of the following computer language is written in binary codes only?",
    options: ["Pascal", "Machine language", "C", "C#"],
    answer: "Machine language",
  },
  {
    question: "Which of the following is not a characteristic of a computer?",
    options: ["Versatility", "Accuracy", "Diligence", "I.Q."],
    answer: "I.Q.",
  },
  {
    question:
      "Which of the following is the smallest unit of data in a computer?",
    options: ["Bit", "KB", "Nibble", "Byte"],
    answer: "Bit",
  },
  {
    question: "Which of the following is not a type of computer code?",
    options: ["EDIC", "ASCII", "BCD", "EBCDIC"],
    answer: "EDIC",
  },
  {
    question:
      "Which of the following is designed to control the operations of a computer?",
    options: [
      "User",
      "Application Software",
      "System Software",
      "Utility Software",
    ],
    answer: "System Software",
  },
  {
    question: "Which of the following can access the server?",
    options: ["Web Client", "User", "Web Browser", "Web Server"],
    answer: "Web Client",
  },
];

let currentquestion = 0;
let marks = 0;
let timeleft = 220;
const timer = document.getElementById("time");
const timeinterval = setInterval(function () {
  timeleft--;
  timer.textContent = timeleft;

  if (timeleft <= 0) {
    clearInterval(timeinterval);
    alert("time is over");
  }
}, 1000);

const lenght = quizdata.length;
// console.log(lenght);

// console.log(quizdata.length);
function loadquestion() {
  const question_conatiner = document.getElementById("question_conatiner");
  const option_container = document.getElementById("option_container");
  const number = document.getElementById("number");

  question_conatiner.innerHTML = quizdata[currentquestion].question;

  option_container.innerHTML = "";
  quizdata[currentquestion].options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.addEventListener("click", () => {
      button.style.backgroundColor = "rgb(63, 197, 241)";
      button.style.color = "white";
    });
    button.addEventListener("click", () => selectanswer(option));
    option_container.appendChild(button);
  });

  number.innerHTML = `${[currentquestion + 1]} / ${lenght}`;
}

function selectanswer(selectedoption) {
  const answer = quizdata[currentquestion].answer;

  if (selectedoption === answer) {
    display.innerHTML = selectedoption + ": <h4>your answer is correct</h4>";
    marks++;
    const mark = (document.getElementById("marks").innerHTML = `${marks} / 10`);
  } else {
    display.innerHTML =
      selectedoption +
      ":<h4> answer is wrong </h4> <br> The correct Answer is :" +
      answer;
  }
  const answerButtons = document.querySelectorAll("#option_container button");
  answerButtons.forEach((button) => {
    button.disabled = true;
  });

  currentquestion++;
}

const click = document.getElementById("click");
click.addEventListener("mouseover", () => {
  click.style.backgroundColor = "rgb(63, 197, 241)";
  click.style.color = "white";
});

click.addEventListener("mouseout", () => {
  click.style.backgroundColor = "white";
  click.style.color = "rgb(63, 197, 241)";
});

function nextquestion() {
  display.innerHTML = "";
  if (currentquestion < quizdata.length) {
    loadquestion();
  } else {
    submitanswer();
  }
}

function submitanswer() {
  const printscore = document.getElementById("result");
  printscore.innerhtml = `<h4> your total marks is ${score} out of 10 </h4>`;

  // alert('your total marks is = ', score);
}

loadquestion();
