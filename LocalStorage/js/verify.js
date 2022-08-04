let root = document.querySelector("#root");
root.classList = "text-center";

// NavBar

let nav = document.createElement("nav");
root.append(nav);
nav.classList = "navbar navbar-expand bg-dark";

let ul = document.createElement("ul");
ul.classList = "navbar-nav";
nav.append(ul);

let li = document.createElement("li");
li.classList = "nav-item";
ul.append(li);

let a = document.createElement("a");
a.href = "http://127.0.0.1:5500/index.html";
a.text = "Entry Page";

a.classList = "navbar-brand text-white";
li.append(a);

// Title

let title = document.createElement("h1");
title.innerText = "Verify Page";
title.classList = "display-4 my-4";
root.append(title);

// Form

let form = document.createElement("form");
// form.action =
// form.method =
root.append(form);

// Inputs

let userName = document.createElement("input");
userName.type = "text";
userName.placeholder = "user name";

let email = document.createElement("input");
email.type = "email";
email.placeholder = "email";

let password = document.createElement("input");
password.type = "password";
password.placeholder = "password";

// Button

let button = document.createElement("button");
button.innerText = "submit";
button.type = "button";

form.append(userName, email, password, button);

button.addEventListener("click", () => {
  let userValue = userName.value;
  let emailValue = email.value;
  let passwordValue = password.value;

  let localName = localStorage.getItem("userName");
  let jName = JSON.parse(localName);

  let localEmail = localStorage.getItem("email");
  let jEmail = JSON.parse(localEmail);

  let localPassword = localStorage.getItem("password");
  let jPassword = JSON.parse(localPassword);

  if (
    userValue === jName &&
    emailValue === jEmail &&
    passwordValue === jPassword
  ) {
    location.assign("http://127.0.0.1:5500/color.html");
  } else prompt("Try Again");
});
