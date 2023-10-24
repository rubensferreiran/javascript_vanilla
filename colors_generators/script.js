const hexGenerator = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexdecimal = "#";
  for (let i = 0; i < 6; i++) {
    hexdecimal += hexGenerator[generatorHex()];
  }
  color.textContent = hexdecimal;
  document.body.style.backgroundColor = hexdecimal;
});

function generatorHex() {
  return Math.floor(Math.random() * hexGenerator.length);
}
