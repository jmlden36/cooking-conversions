function conGalToLiter(promptanswer) {
  return answer * 3.785;
}

function conLiterToGal(promptanswer) {
  return answer / 3.785;
}
 
function conCupToQuart(promptanswer) {
  return answer / 4;
}

function conQuartToCup(promptanswer) {
  return answer * 4;
}


const answer = parseInt(prompt("How many cups?"));
const result = conCupToQuart(answer);
alert(result);