var acceptedQuestion = document.getElementsByClassName('accepted-answer')[0];
var header = document.getElementById('question-header')
header.parentNode.insertBefore(acceptedQuestion,header.nextSibling);
