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
async function renderMean() {
  wordTitle.textContent = inPut.value;
  let html1 = "";
  await responseWord.meanings.forEach((obj) => {
    html1 += `<div class="mb-8">
      <div class="flex items-center gap-2 overflow-x-hidden mb-6">
        <span id="mean" class="italic font-bold">${obj.partOfSpeech}</span
        ><img src="./images/pattern.svg" alt="pattern" class="grow" />
      </div>
      <div>
        <span class="text-base text-[#757575]">Meaning</span>
        <ul class="pt-4" class="ulList">
        ${mean(obj)}
        </ul>
      </div>
    </div>`;
    wordMeanList.innerHTML = html1;
  });
}
function mean(obj) {
  const ulList = document.getElementsByClassName("ulList");
  console.log(obj);
  let html = "";
  obj.definitions.forEach((obj1) => {
    if (obj1.definition !== undefined) {
      html += `<li>${obj1.definition}</li>`;
    }
  });
  // ulList.innerHTML = html;
  return html;
}
//   html1 += `<div>
//   <div class="flex items-center gap-2 overflow-x-hidden mb-8">
//     <span id="mean" class="italic font-bold">noun</span
//     ><img src="./images/pattern.svg" alt="pattern" class="grow" />
//   </div>
//   <div>
//     <span class="text-base text-[#757575]">Meaning</span>
//     <ul class="pt-4" >
//       <li>
//         (etc.) A set of keys used to operate a typewriter, computer etc.
//       </li>
//     </ul>
//   </div>
// </div>`;
function errorMes (){
  
}