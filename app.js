var lotto_number = prompt("Type your lotto number");
var numran = Math.floor(Math.random() * 1000000);
if (lotto_number == numran) {
  document.getElementById("tru").innerHTML = "You are the winner";
} else {
  document.getElementById("fal").innerHTML = "You are the loser";
}
document.getElementById("result").innerHTML = lotto_number;
document.getElementById("random").innerHTML = numran;
console.log(numran);
console.log(lotto_number);
