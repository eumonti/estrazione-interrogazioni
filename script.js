let input;
let output = document.getElementById("output");
let names;

function getData() {
  input = document.getElementById("input");
  names = input.value.split("\n");
}

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
