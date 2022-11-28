let root = document.querySelector("#root");
root.classList = "root";
let hexadicDisplay = document.createElement("h1");
hexadicDisplay.style.color = "white";
let hexadicDisplay2 = document.createElement("h1");
hexadicDisplay2.style.color = "white";
let favoriteList = [];

// Title
let title = document.createElement("h1");
title.innerText = "Change Me!";
root.prepend(title);
title.className = "display-4 w-100 text-center";

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

let input_4 = document.createElement("input");
input_4.type = "text";
input_4.placeholder = "Choose a name";

form.append(input_1, input_2, input_3, input_4);

// Buttons
let button = document.createElement("button");
button.type = "button";
button.innerText = "Top";
button.classList.add("btn-secondary");
form.append(button);

let button2 = document.createElement("button");
button2.type = "button";
button2.innerText = "Button";
button2.classList.add("btn-dark");
form.append(button2);

let button3 = document.createElement("button");
button3.type = "button";
button3.innerText = "Favorite";
button3.classList.add("btn-secondary");
form.append(button3);

// Title2
let title2 = document.createElement("h1");
title2.innerText = "Now Change Me!";
title2.className = "display-4 w-100 text-center";
root.append(title2);

button.addEventListener("click", () => {
  let value_1 = Number(input_1.value);
  let value_2 = Number(input_2.value);
  let value_3 = Number(input_3.value);
  let value_4 = input_4.value;

  if (value_1 === 0 && value_2 === 0 && value_3 === 0) {
    title.style.backgroundColor = "white";
    title.innerText = "Change Me!";
    title.style.color = "black";
    hexadicDisplay.innerText = "";
  } else {
    title.style.backgroundColor = rgb(value_1, value_2, value_3);
    title.innerText = "";
    hexadicDisplay.innerText = hexadic(value_1, value_2, value_3);
    title.append(hexadicDisplay);
    let favName = favorite(rgb(value_1, value_2, value_3), value_4);
    favoriteList.push(favName);

    input_1.value = "";
    input_2.value = "";
    input_3.value = "";
    input_4.value = "";
  }
});
button2.addEventListener("click", () => {
  let value_1 = Number(input_1.value);
  let value_2 = Number(input_2.value);
  let value_3 = Number(input_3.value);
  let value_4 = input_4.value;

  if (value_1 === 0 && value_2 === 0 && value_3 === 0) {
    title2.style.backgroundColor = "white";
    title2.style.color = "black";
    title2.innerText = "Now Change Me!";
    hexadicDisplay2.innerText = "";
  } else {
    title2.style.backgroundColor = rgb(value_1, value_2, value_3);
    title2.innerText = "";
    hexadicDisplay2.innerText = hexadic(value_1, value_2, value_3);
    title2.append(hexadicDisplay2);
    let favName = favorite(rgb(value_1, value_2, value_3), value_4);
    favoriteList.push(favName);

    input_1.value = "";
    input_2.value = "";
    input_3.value = "";
    input_4.value = "";
  }
});

button3.addEventListener("click", () => {
  favTitle.innerText = "My Favorite List:";
  for (let index of favoriteList) {
    let color = document.createElement("div");
    let name = document.createElement("span");
    color.style.padding = "10px";
    color.classList.add("lead");
    name.style.padding = "10px";
    color.innerText = `Color Value: ${index.color}`;
    name.innerText = `Nickname: ${index.name}`;
    favContainer.append(color);
    favContainer.style.display = "flex";
    color.append(name);
    favoriteList = [];
  }
});

const favContainer = document.createElement("div");
favContainer.classList.add("fav_container");
const favTitle = document.createElement("h1");
favContainer.append(favTitle);
favTitle.classList.add("display-6");
favTitle.style.height = "70px";
root.append(favContainer);

let rgb = (r, g, b) => {
  return `rgb(${r},${g},${b})`;
};

let hexadic = (r, g, b) => {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

const favorite = (color, name) => {
  const obj = {};
  (obj.color = color), (obj.name = name);
  return obj;
};
