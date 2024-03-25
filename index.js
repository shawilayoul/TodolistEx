//const task = document.querySelector("#task");
const form = document.querySelector("#form");
const list = document.querySelector("#list");

let lists = [];
form.addEventListener("submit", (e) => {
    e.preventDefault()
  let task = document.querySelector("#task").value.trim();
  if(task !== ''){
    const template = `
    <div class="flex gap-2">
    <div>${task}</div>
    <button class="delete bg-red-400 text-white p-1 rounded">Delete</button>
    <button class="update bg-blue-400 text-white p-1 rounded">Update</button>
    </div>
    `
    list.innerHTML += template
    localStorage.setItem('task',JSON.stringify(todos))
    task = '';
  }else{
    alert('please enter a valid task')
  }
  document.querySelector("#task") = ""
});

list.addEventListener('click',(e)=>{
 if(e.target.classList.contains('delete')){
    e.target.parentNode.remove();
 }
})

list.addEventListener('click',(e)=>{
    task = document.querySelector("#task").value.trim();
    if(e.target.classList.contains('update')){
       task =   e.target.parentNode;
    }
   })
