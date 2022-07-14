let bookList = [];
let input = document.querySelector("#input");
let div = document.querySelector(".div");

function addFunc() {
  let val = input.value;
  bookList.push(val);
  input.value = "";
}
function displayFunc() {
  div.innerHTML = "<ul>";
  for (let book of bookList) {
    div.innerHTML += "<li > " + book + "</li>";
  }
  div.innerHTML += "</ul>";
}

function mark() {
  book.style.textDecoration = "line-through";
}
