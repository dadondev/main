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
function renderMean() {
  wordTitle.textContent = inPut.value;
  let html = "";
  responseWord.meanings.forEach((obj) => {
    // console.log(obj.partOfSpeech);
    obj.definitions.forEach((obj1) => {
      if (obj1.definition !== undefined) {
        html += `<div>
        <div class="flex items-center gap-2 overflow-x-hidden mb-8">
          <span id="mean" class="italic font-bold">noun</span
          ><img src="./images/pattern.svg" alt="pattern" class="grow" />
        </div>
        <div>
          <span class="text-base text-[#757575]">Meaning</span>
          <ul class="pt-4">
            <li>
              (etc.) A set of keys used to operate a typewriter, computer etc.
            </li>
          </ul>
        </div>
      </div>`;
      }
    });
  });
}
