import { rgb, random, countries } from "./helper.js";

let root = document.querySelector("#root");
root.classList = "root";

// Title
let title = document.createElement("h1");
title.innerText = "Change My Color";
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

// Button
let button = document.createElement("button");
button.type = "button";
button.innerText = "Click Me";
form.append(button);

button.addEventListener("click", () => {
  let value_1 = Number(input_1.value);
  let value_2 = Number(input_2.value);
  let value_3 = Number(input_3.value);

  title.style.backgroundColor = rgb(value_1, value_2, value_3);
  title.style.color = random();

  input_1.value = "";
  input_2.value = "";
  input_3.value = "";
});

// Select

let select = document.createElement("select");
root.append(select);
select.classList = "select";

// for (let country of countries) {
//   var option = document.createElement("option");
//   option.text = country;
//   option.value = country;
//   select.add(option);
// }

select.addEventListener("click", () => {
  countries.forEach((country) => {
    let option = document.createElement("option");
    option.text = country;
    option.value = country;
    select.add(option);
    title.innerText = option.text;
  });
});
