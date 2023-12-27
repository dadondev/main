let responseWord;

async function getResponse(text) {
  const request = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`
  );
  if (request.status == 200) {
    const response = await request.json();
    responseWord = response[0];
    renderMean();
  }else{
    
  }
}
