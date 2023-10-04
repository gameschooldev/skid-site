const carouselText = [
  {text: "BOZO THOUGHT YOU COULD SKID LMFAO! GO TO ORIGINAL HTTPS://GAMEHUB100.VERCEL.APP THX FOR UR SITE JASON WHAT U GONNA DO?!?!", color: "rgb(0, 255, 200)"},
]

// use this a a templete  {text: "text", color: "red"}

$( document ).ready(async function() {
  carousel(carouselText, "#feature-text")
});

async function typeSentence(sentence, eleRef, delay = 15 ){
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
    $(eleRef).append("<br>");
  }

async function carousel(carouselList, eleRef) {
    var i = 0;
    while(true) {
      updateFontColor(eleRef, carouselList[i].color)
      await typeSentence(carouselList[i].text, eleRef);
      await waitForMs(250);
      await deleteSentence(eleRef);
      i++
      if(i >= carouselList.length) {return;}
    }
}

function updateFontColor(eleRef, color) {
  $(eleRef).css('color', color);
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
