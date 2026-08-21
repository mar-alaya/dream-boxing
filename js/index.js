console.log("Script loaded!");

const check = document.querySelector(".rule-button");
const answer = document.querySelector(".rule-answer-hide");

check.addEventListener("click", () => {
  answer.classList.remove("rule-answer-hide");
  answer.classList.add("rule-answer-show");
});
