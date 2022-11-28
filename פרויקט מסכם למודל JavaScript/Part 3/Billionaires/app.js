import { json_ar } from "./vipObj.js";

let container = document.querySelector(".container");
let json_ar_2 = json_ar;

function renderVip() {
  if (container.hasChildNodes()) {
    container.innerHTML = "";
  }
  json_ar_2.map((item) => {
    let billionaire = document.createElement("div");
    billionaire.classList.add("billionaire");
    let name = document.createElement("h1");
    let worth = document.createElement("h3");
    let source = document.createElement("h3");
    let image = document.createElement("img");

    name.innerText = item.name;
    name.classList.add("h2");
    name.classList.add("remove");

    worth.innerText = item.worth;
    worth.classList.add("h4");

    source.innerText = item.source;
    source.classList.add("lead");

    image.src = item.image;
    image.classList.add("img-thumbnail");

    billionaire.append(name, worth, source, image);
    container.append(billionaire);
  });
}
renderVip();

window.addEventListener("click", () => {
  let people = document.querySelectorAll("img");
  people.forEach((person) => {
    person.addEventListener("click", (e) => {
      json_ar_2 = json_ar_2.filter((item) => {
        return item.image !== e.target.src;
      });
      renderVip();
    });
  });
});
