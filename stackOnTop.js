let innerContent = document.querySelector('.inner-content');
let question = document.querySelector('.question');
let questionHeader = document.querySelector('#question-header');
let mainBar = document.querySelector('#mainbar');
let sideBar = document.querySelector('#sidebar');
let feedLink = document.querySelector('#feed-link');

innerContent.style.margin = 0;
innerContent.style.width = "100%";
innerContent.style.display = "flex";
innerContent.style.paddingLeft = 0;
innerContent.style.paddingRight = 0;

question.style.overflow = "scroll";
question.style.height = "100vh";
question.style.clear = "none";
question.style.paddingLeft = "15px";

mainBar.style.float = "none";
mainBar.style.overflow = "scroll"
mainBar.style.height = "100vh";

innerContent.insertBefore(question, innerContent.firstChild);
question.insertBefore(questionHeader, question.firstChild);

sideBar.remove();
feedLink.remove();
