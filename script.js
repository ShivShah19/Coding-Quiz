import { data } from "./question.js";

const quiz = {
  currentQuestion: 0,
  score: 0,
  attempt: 0,
  idContainer: document.querySelector("#question_id"),
  questionContainer: document.querySelector("#question"),
  submitButton: document.getElementById("submit"),
  optionsContainer: document.querySelectorAll(".option"),

  timer: {
    duration: 100, // Set the initial duration in seconds
    intervalId: null,

    start() {
      quiz.startQuiz();
      this.duration = 100; // Set the duration in seconds for second time quiz
      this.intervalId = setInterval(() => {
        this.duration--;

        const timerDisplay = document.getElementById("timer");
        timerDisplay.textContent = this.formatTime(this.duration);

        // console.log(this.duration);
        if (this.duration <= 0) {
          this.stop(); // Reset the intervalId when the timer reaches zero
          quiz.finishQuiz();
        }
      }, 1000);
    },

    stop() {
      clearInterval(this.intervalId);
      this.intervalId = null; // Reset the intervalId
    },

    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}:${
        remainingSeconds < 10 ? "0" : ""
      }${remainingSeconds}`;
    },
  },

  questionIndex: [],
  id: 0,
  getQuestionIndex() {
    let index;
    do {
      index = Math.floor(Math.random() * 11);
    } while (this.questionIndex.includes(index));

    this.questionIndex.push(index);
    return index;
  },

  startQuiz() {
    this.id = this.getQuestionIndex();
    console.log(this.id);
    const { question, options } = data[this.id];
    this.idContainer.textContent = ++this.currentQuestion;
    this.questionContainer.textContent = question;

    this.optionsContainer.forEach((optionElement, i) => {
      optionElement.innerHTML = options[i];
      optionElement.classList.remove("selected");
      optionElement.addEventListener("click", () => {
        this.optionsContainer.forEach((otherOption) =>
          otherOption.classList.remove("selected")
        );
        optionElement.classList.add("selected");
      });
    });
  },

  onSubmitClick() {
    const selectedOption = document.querySelector(".option.selected");
    if (selectedOption) this.checkAnswer(selectedOption.innerHTML);
  },

  checkAnswer(answer) {
    this.attempt++;
    const { correct } = data[this.id];
    // console.log(answer, correct);
    this.score += answer === correct ? 10 : 0;
    this.currentQuestion < 10 ? this.startQuiz() : this.finishQuiz();
  },

  finishQuiz() {
    this.currentQuestion = 0;
    this.submitButton.removeEventListener("click", () => this.onSubmitClick());
    console.log("Quiz Finished. Score:", this.score);
    document.querySelector(".quiz-box").classList.add("end");
    document.querySelector("#total_Questions").innerHTML = 10;
    document.querySelector("#attempt").innerHTML = this.attempt;
    document.querySelector("#result").innerHTML = this.score;

    var msg = document.querySelector(".final-msg");
    if (this.score >= 80) {
      msg.innerHTML = "Congratulations 🥇🥇";
    } else if (this.score < 80 && this.score > 40) {
      msg.innerHTML = "Well done 🥳🥳";
    } else {
      msg.innerHTML = "Try again ⚠️⚠️";
    }
  },
};

quiz.submitButton.addEventListener("click", () => quiz.onSubmitClick());
// quiz.startQuiz();

document.querySelector("#startBtn").addEventListener("click", () => {
  document.querySelector(".quiz-box").classList.remove("start");
  quiz.timer.start();
});

document.querySelector("#retake").addEventListener("click", () => {
  document.querySelector(".quiz-box").classList.remove("end");
  document.querySelector(".quiz-box").classList.add("start");
});
