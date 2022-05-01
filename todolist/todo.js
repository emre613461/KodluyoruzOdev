// selectors
const todoInput = document.querySelector("#task");
const todoButton = document.querySelector("#liveToastBtn");
const todoList = document.querySelector("#list");
// var toastLiveExample = document.getElementById('liveToast')
//events
todoList.addEventListener("click", deleteCheck);
//  todoButton.addEventListener("click", newElement());

var success = document.querySelector(".success");
var error = document.querySelector(".error");

//functions

function newElement() {
  const isEmpty = (str) => !str.trim().length;
  if (isEmpty(todoInput.value)) {
    var toast = new bootstrap.Toast(error);
    toast.show();
    //clear input
    todoInput.value = "";
  } else {
    var toast = new bootstrap.Toast(success);
    toast.show();
    //create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("d-flex", "align-items-center", "todoClose");
    todoList.appendChild(todoDiv);
    //cehck
    const todoChecked = document.createElement("div");
    todoChecked.classList.add("form-check");
    todoDiv.append(todoChecked);

    //checkedinput
    const checkedInput = document.createElement("INPUT")
    checkedInput.classList.add("form-check-input","border-0")
    checkedInput.setAttribute("type", "checkbox");
    todoChecked.append(checkedInput)
    
    //create todo li
    const todoLi = document.createElement("li");
    todoLi.classList.add("d-flex", "justify-content-between");
    todoLi.innerText = todoInput.value;
    todoDiv.appendChild(todoLi);

    //closed
    const closedButton = document.createElement("button");
    closedButton.classList.add("btn-close", "closed");
    todoDiv.appendChild(closedButton);
    

    //clear input
    todoInput.value = "";
  }
}
function deleteCheck(e) {
  const item = e.target;

  // delete todo
  if (item.classList[0] === "btn-close") {
    const todo = item.parentElement;
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  // check mark

  if (item.classList[0] === "form-check") {
    const todo = item.parentElement;
    todo.classList.toggle("completed")
  }
}
