let div = document.getElementById("div");
let btn1 = document.getElementById("increase");
let btn2 = document.getElementById("decrease");
let count = 0;
div.innerText = count;

function increase() {
  if (count < 5) {
    count++;
    div.innerText = count;
    btn1.style.backgroundColor = colorChange();
    btn1.style.color = colorChange();
  }
}

function decrease() {
  if (count !== 0) {
    count--;
    div.innerText = count;
    btn2.style.backgroundColor = colorChange();
    btn2.style.color = colorChange();
  }
}

function colorChange() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
