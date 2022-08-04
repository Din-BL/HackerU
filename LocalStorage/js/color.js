let root = document.querySelector("#root");
root.classList = "root";

let random = (r, g, b) => {
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

let rgb = (r, g, b) => {
  return `rgb(${r},${g},${b})`;
};

// Title
let title = document.createElement("h1");
title.innerText = "Change Me!";
root.prepend(title);
title.classList = "title";

// Form
let form = document.createElement("form");
form.method = "get";
root.append(form);
form.classList = "form";

// Inputs
let input_1 = document.createElement("input");
input_1.type = "number";
input_1.placeholder = "Choose a number";

let input_2 = document.createElement("input");
input_2.type = "number";
input_2.placeholder = "Choose a number";

let input_3 = document.createElement("input");
input_3.type = "number";
input_3.placeholder = "Choose a number";

form.append(input_1, input_2, input_3);

// Button Display
let button = document.createElement("button");
button.type = "button";
button.innerText = "Display";
form.append(button);

// Button Save

let btnSave = document.createElement("button");
btnSave.type = "button";
btnSave.innerText = "Save";
root.append(btnSave);

// Display Button Function

button.addEventListener("click", () => {
  let value_1 = Number(input_1.value);
  let value_2 = Number(input_2.value);
  let value_3 = Number(input_3.value);

  if (value_1 === 0 && value_2 === 0 && value_3 === 0) {
    title.style.backgroundColor = "white";
    title.style.color = "black";
  } else {
    title.style.backgroundColor = rgb(value_1, value_2, value_3);
    title.style.color = random();

    input_1.value = "";
    input_2.value = "";
    input_3.value = "";

    // Save Button Function

    btnSave.addEventListener("click", () => {
      let jValue_1 = JSON.stringify(value_1);
      let jValue_2 = JSON.stringify(value_2);
      let jValue_3 = JSON.stringify(value_3);

      localStorage.setItem("num_1", jValue_1);
      localStorage.setItem("num_2", jValue_2);
      localStorage.setItem("num_3", jValue_3);
    });
  }
});

// Button Repeat

let btnRepeat = document.createElement("button");
btnRepeat.type = "button";
btnRepeat.innerText = "Repeat";
root.append(btnRepeat);

// Repeat Button Function
btnRepeat.addEventListener("click", () => {
  let local_1 = localStorage.getItem("num_1");
  let local_2 = localStorage.getItem("num_2");
  let local_3 = localStorage.getItem("num_3");

  let pValue_1 = JSON.parse(local_1);
  let pValue_2 = JSON.parse(local_2);
  let pValue_3 = JSON.parse(local_3);

  console.log(pValue_1, pValue_2, pValue_3);
  title.style.backgroundColor = rgb(pValue_1, pValue_2, pValue_3);
  title.style.color = random();
});
