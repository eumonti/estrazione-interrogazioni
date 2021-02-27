let input = document.getElementById("input");
let output = document.getElementById("output");
var names = input.value.split("\n");

function pickRandom() {
  if (!names.length) {
    alert("Fine");
    return;
  }
  let index = Math.floor(Math.random() * names.length);
  output.value += names[index] + "\n";
  names.splice(index, 1);
  console.log(names);
}
