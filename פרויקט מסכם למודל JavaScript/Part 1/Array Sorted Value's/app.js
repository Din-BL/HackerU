const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");
let arr = [];

btn.addEventListener("click", () => {
  ul.classList.add("border");
  createArr();
  sortArr(arr);
  smallNum(arr);
  mediumNum(arr);
  largeNum(arr);
});

const createArr = () => {
  arr = [];
  for (let i = 0; i < 5; i++) {
    let rand = Math.floor(Math.random() * 100);
    arr.push(rand);
  }
  li[0].innerText = `Unsorted: ${arr}`;
};

function sortArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  li[1].innerText = `Sorted: ${arr}`;
}

const smallNum = (array) => {
  const small = array.filter((num) => num <= 30);
  if (small.length === 0) li[2].innerText = "Empty";
  else li[2].innerHTML = `Small: ${small}`;
};
const mediumNum = (array) => {
  const medium = array.filter((num) => num > 30 && num < 61);
  if (medium.length === 0) li[2].innerText = "Empty";
  else li[3].innerText = `Medium: ${medium}`;
};
const largeNum = (array) => {
  const large = array.filter((num) => num > 60);
  if (large.length === 0) li[2].innerText = "Empty";
  else li[4].innerText = `Large: ${large}`;
};
