let countryList = [];

// Add Countries
let input = document.querySelector("#input");
let btnAdd = document.getElementById("add");

// Show Countries
let search = document.querySelector("#search");
let dropMenu = document.querySelector(".dropMenu");
let allCountries = document.querySelector(".allCountries");
let listContainer = document.querySelector(".listContainer");
let reset = document.querySelector(".reset");

class CountryMaker {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}

// Save country user
btnAdd.addEventListener("click", () => {
  let countryName = input.value;
  let countryColor = color.value;
  if (countryName === "" || countryColor.value === "") {
    return;
  } else {
    const newCountry = new CountryMaker(countryName, countryColor);
    countryList.push(newCountry);
    input.value = "";
    color.value = "";
  }
});

let newCountryList = [];

// Show results
search.addEventListener("input", (e) => {
  if (e.target.value) {
    newCountryList = countryList
      .filter((sub) => sub.name.toLocaleLowerCase().includes(e.target.value))
      .map((sub) => `<li class = "country">${sub.name}</li>`);
  }
  displaySubjectsArray(newCountryList);
  displayOption();
});

function displaySubjectsArray(subjectsArray) {
  const html = !subjectsArray.length ? "" : subjectsArray.join("");
  dropMenu.innerHTML = html;
  if ((subjectsArray.length = "")) {
    dropMenu.innerHTML = "";
  }
}

function displayOption() {
  let countryOption = document.querySelectorAll(".country");
  countryOption.forEach((country) => {
    country.addEventListener("click", (e) => {
      selected.classList.add("active");
      selected.innerHTML = country.innerText;
    });
  });
}

let selected = document.querySelector(".selected");
allCountries.addEventListener("click", () => {
  if (listContainer.childElementCount < 1) {
    selected.innerHTML = "";
    search.value = "";
    dropMenu.innerHTML = "";
    let nameCountry = countryList.map((country) => country.name);
    let sortedList = nameCountry.sort();
    for (let i = 0; i < sortedList.length; i++) {
      let title = document.createElement("li");
      title.innerText = sortedList[i];
      title.id = "list";
      listContainer.append(title);
      title.addEventListener("click", (e) => {
        title.style.color = findColor(e.target.innerText);
      });
    }
  } else return;
});

reset.addEventListener("click", () => {
  while (listContainer.firstChild) {
    listContainer.removeChild(listContainer.firstChild);
    countryList = [];
  }
});

function findColor(countryName) {
  let myColor = countryList.find((country) => country.name === countryName);
  let colorDisplay = myColor.color;

  return colorDisplay;
}
