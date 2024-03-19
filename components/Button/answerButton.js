const answerButton = document.querySelector(`[data-js="answer-button"]`);
const answer = document.querySelector(`[data-js="answer"]`);
const bookmark = document.querySelector(`[data-js="bookmark"]`);
const bookmarkIcon = document.querySelector(`[data-js="bookmark-icon"]`);

answer.hidden = true;
answerButton.addEventListener("click", () => {
  if (answer.hidden === false) {
    answer.hidden = true;
    answerButton.textContent = "Show answer";
  } else if (answer.hidden === true) {
    answer.hidden = false;
    answerButton.textContent = "Hide answer";
  }
});

bookmark.addEventListener("click", () => {
  bookmarkIcon.classList.toggle("bookmark__active");
});
