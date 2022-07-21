// First Part

const herosList = [];

const firstHero = {
  name: "Goku",
  power: "Super Saiyan",
};
const secondHero = {
  name: "Eren",
  power: "Attack Titan",
};
const thirdHero = {
  name: "Naruto",
  power: "Nine Tail Fox",
};

herosList.push(firstHero);
herosList.push(secondHero);
herosList.push(thirdHero);

herosList[1].age = "19";

// Second Part

const herosList = [];

const heros = {
  firstHero: {
    name: "Goku",
    power: "Super Saiyan",
  },
  secondHero: {
    name: "Eren",
    power: "Attack Titan",
  },
  thirdHero: {
    name: "Naruto",
    power: "Nine Tail Fox",
  },
};

function callHero(obj) {
  herosList.push(obj);
  console.log(herosList);
}
