const main = document.querySelector(`[data-js="main"]`);
const formField = document.querySelector(`[data-js="form-field"]`);
const questionField = document.querySelector(`[data-js="question-field"]`);
const charactersLeftQuestion = document.querySelector(
  `[data-js="characters-left__question"]`
);
const answerField = document.querySelector(`[data-js="answer-field"]`);
const charactersLeftAnswer = document.querySelector(
  `[data-js="characters-left__answer"]`
);

const outputCharacters = (charactersLeft, field) => {
  charactersLeft.innerText = `${150 - field.value.length} characters left`;
};

questionField.addEventListener("input", () => {
  outputCharacters(charactersLeftQuestion, questionField);
});

answerField.addEventListener("input", () => {
  outputCharacters(charactersLeftAnswer, answerField);
});

formField.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;

  const list = document.createElement("ul");
  list.classList.add("card-list");
  main.append(list);

  const listItem = document.createElement("li");
  listItem.classList.add("quizcard");
  list.append(listItem);

  const headline = document.createElement("h2");
  headline.classList.add("headline");
  headline.textContent = formElements.question.value;
  listItem.append(headline);

  const button = document.createElement("button");
  button.classList.add("button");
  button.setAttribute("data-js", "answer");
  button.textContent = "Show answer";
  listItem.append(button);

  const answer = document.createElement("p");
  answer.classList.add("answer");
  answer.setAttribute("data-js", "answer-button");
  answer.textContent = formElements.answer.value;
  listItem.append(answer);

  const tagContainer = document.createElement("div");
  tagContainer.classList.add("tag-container");
  listItem.append(tagContainer);

  const tag1 = document.createElement("p");
  tag1.classList.add("tag");
  tag1.textContent = formElements.tag.value;
  tagContainer.append(tag1);

  const bookmark = document.createElement("button");
  bookmark.classList.add("bookmark");
  bookmark.setAttribute("data-js", "bookmark");
  bookmark.setAttribute("aria-label", "bookmark");
  bookmark.setAttribute("type", "button");
  listItem.append(bookmark);

  const bookmarkIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  bookmarkIcon.classList.add("bookmark-icon");
  bookmarkIcon.setAttribute("data-js", "bookmark-icon");
  bookmarkIcon.setAttribute("viewbox", "0 0 24 24");
  bookmark.append(bookmarkIcon);

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
  );
  bookmarkIcon.append(path);
});
