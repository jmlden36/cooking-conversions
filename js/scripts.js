function conGalToLiter(promptanswer) {
  return answer * 3.785;
}

const answer = parseInt(prompt("How many gallons?"));
const result = conGalToLiter(answer);
alert(result);