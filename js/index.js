console.log("Script loaded!");

const cards = document.querySelectorAll(".rule-card");

cards.forEach((card) => {
  const check = card.querySelector(".rule-button");
  const answer = card.querySelector(".rule-answer-hide, .rule-answer-show");

  check.addEventListener("click", () => {
    answer.classList.remove("rule-answer-hide");
    answer.classList.add("rule-answer-show");
  });
});
