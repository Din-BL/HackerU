let studentList = [];

function makeObj() {
  const obj = {
    student: document.querySelector("#student").value,
    field: document.querySelector("#field").value,
    grade: document.querySelector("#grade").value,
    car: document.querySelector("#car").value,
  };
  studentList.push(obj.student);
  studentList.push(obj.field);
  studentList.push(obj.grade);
  studentList.push(obj.car);
}

function printObj() {
  let textContainer = document.querySelector(".textContainer");
  textContainer.innerHTML = "<ul>";
  for (let singleStudent of studentList) {
    textContainer.innerHTML += "<li>" + singleStudent + "</li>";
  }
  textContainer.innerHTML += "</ul>";
}
