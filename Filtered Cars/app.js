const CarList = [];

function addCars() {
  let company = document.querySelector("#company");
  let color = document.querySelector("#color");
  let age = document.querySelector("#age");

  const List = {
    name: company.value,
    style: color.value,
    year: age.value,
  };
  CarList.push(List);

  console.log(CarList);

  company.value = "";
  color.value = "";
  age.value = "";
}

let textContainer = document.querySelector(".textContainer");

let newList = () => {
  let inputNum = document.querySelector("#num");
  let newList = CarList.filter((car) => car.year > inputNum.value);
  console.log(newList);

  newList.map((item) => {
    textContainer.innerHTML += `
  <div>
  <div> Car's Company Name Is : ${item.name}</div>
  <div> Car's Color Is : ${item.style}</div>
  <div> Car's Year Is : ${item.year}</div>
</div>
  `;
  });
};
