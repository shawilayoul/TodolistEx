//const task = document.querySelector("#task");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#form");
  const list = document.querySelector("#list");
  const lists = JSON.parse(localStorage.getItem("task")) || [];
  let editMode = false;

  function display() {
    list.innerHTML = "";
    lists.forEach((element) => {
      const template = `
    <div class="flex gap-2">
    <div>${element}</div>
    <button class="delete bg-red-400 text-white p-1 rounded">Delete</button>
    <button class="update bg-blue-400 text-white p-1 rounded">Update</button>
    </div>
    `;
      list.innerHTML += template;
    });
  }
  display();
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let task = document.querySelector("#task").value.trim();
    if (task !== "") {
      if (editMode) {
        lists.push(task);
        editMode = false;
      } else {
        lists.push(task);
      }
    } else {
      alert("please enter a valid task");
    }
    localStorage.setItem("task", JSON.stringify(lists));
    display();
    task.value = "";
  });

  list.addEventListener("click", (e) => {
    let task = document.querySelector("#task").value;
    if (e.target.classList.contains("delete")) {
      const index = lists.indexOf(e.target.parentNode.textContent);
      lists.splice(index, 1);
      localStorage.setItem("task", JSON.stringify(lists));
      display();
    } else if (e.target.classList.contains("update")) {
      updateTheList(task)
    }
  });
});
function updateTheList(task){
    lists.push(task);
    localStorage.setItem("task", JSON.stringify(lists));
    display();  
}