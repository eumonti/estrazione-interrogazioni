var names = [];
var picked = [];

function pickRandom() {
    let string = document.getElementById("input").value;
    names = string.split("\n");
    randomItem = names[Math.floor(Math.random() * names.length)];
    if (picked.length !== names.length) {
        if (!picked.includes(randomItem)) {
            picked.push(randomItem);
            console.log(randomItem);
            document.getElementById("picked").value += randomItem + '\n';
        } else {
            pickRandom(names);
        }
    } else window.alert("Finito!");
}
