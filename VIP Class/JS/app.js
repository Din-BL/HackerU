let root = document.querySelector("#root");
root.classList = "container";

// Form

let form = document.createElement("form");
form.method = "get";
root.prepend(form);

// Inputs

let input_1 = document.createElement("input");
input_1.type = "text";
input_1.placeholder = "Choose Name";
input_1.classList = "form-control";

let input_2 = document.createElement("input");
input_2.type = "text";
input_2.placeholder = "Choose Worth";
input_2.classList = "form-control";

let input_3 = document.createElement("input");
input_3.type = "url";
input_3.placeholder = "Paste URL imag";
input_3.classList = "form-control";

form.append(input_1, input_2, input_3);

// Button 1

let button = document.createElement("button");
button.type = "button";
button.innerText = "Save Vip";
button.classList = "btn btn-primary";
form.append(button);

// Button 2

let display = document.createElement("button");
display.type = "button";
display.innerText = "Show Vip";
display.classList = "btn btn-danger";
form.append(display);

let title = document.createElement("h1");
title.innerText = "VIP List";
title.classList = "display-6 text-center mb-5";
root.prepend(title);

// Array

let vipList = [];

// Class

class Vip {
  constructor(name, worth, image) {
    this.name = name;
    this.worth = worth;
    this.image = image;
  }
  render() {
    root.innerHTML += `<div class = "text-center mb-3">
    <h1 class = 'display-4'>${this.name}</h1>
    <p class = 'lean'>${this.worth}</p>
    <img src='${this.image}'> 
    </div> `;
  }
}

// EventListener

button.addEventListener("click", () => {
  let value_1 = input_1.value;
  let value_2 = input_2.value;
  let value_3 = input_3.value;

  let myVip = new Vip(value_1, value_2, value_3);

  vipList.push(myVip);

  console.log(vipList);

  input_1.value = "";
  input_2.value = "";
  input_3.value = "";
});

display.addEventListener("click", () => {
  vipList.map((vip) => {
    vip.render();
  });
});
