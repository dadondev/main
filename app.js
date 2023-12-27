const formEl = document.getElementById("form");
const inPut = document.getElementById("inPutWord");
const submitBtn = document.getElementById("submit");
const wordTitle = document.getElementById("word");
const wordSpeak = document.getElementById("wordSpeak");
const wordPlayer = document.getElementById("player");
const wordMeanList = document.getElementById("List");
(formEl || submitBtn).addEventListener("submit", (e) => {
  e.preventDefault();
  getResponse(inPut.value);
});
