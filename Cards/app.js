// Elements

let root = document.querySelector("#root");
root.classList = "container text-center";

let title = document.createElement("h1");
title.innerText = "Random Cards";
title.classList = "display-3 m-5";
root.append(title);

let button = document.createElement("button");
button.innerText = "Click";
button.classList = "btn btn-dark";
root.append(button);

// Arrays

const Cards = [];

const myCards = ["Hearts", "Clubs", "Diamonds", "Spades"];

// Class

class Card {
  constructor(type, number) {
    this.type = type;
    this.number = number;
  }
  render() {
    let container = document.createElement("div");
    container.classList = "lead m-3";
    root.append(container);
    container.innerText += `${this.type}  ${this.number}`;
  }
}

// Random Card Function

function randomCard() {
  let num = Math.floor(Math.random() * myCards.length);
  return myCards[num];
}

// Random Number Function

function randomNum() {
  let num = Math.floor(Math.random() * 13) + 1;
  return num;
}

// addEventListener

button.addEventListener("click", () => {
  for (let i = 0; i < 52; i++) {
    let card = new Card(randomCard(), randomNum());
    Cards.push(card);
    card.render();
  }
  // console.log(Cards);
});
