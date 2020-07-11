const mainBar = document.querySelector("#mainbar");
const question = document.querySelector(".question");
const answer = document.querySelector(".answer.accepted-answer");

mainBar.insertBefore(answer, question);
