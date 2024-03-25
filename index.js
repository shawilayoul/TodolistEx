//const task = document.querySelector("#task");

document.addEventListener('DOMContentLoaded', function() {
const form = document.querySelector("#form");
const list = document.querySelector("#list");
const lists = JSON.parse(localStorage.getItem('task')) || [];
function display (){
    list.innerHTML = ''
    lists.forEach(element => {
        const template = `
    <div class="flex gap-2">
    <div>${element}</div>
    <button class="delete bg-red-400 text-white p-1 rounded">Delete</button>
    <button class="update bg-blue-400 text-white p-1 rounded">Update</button>
    </div>
    `
    list.innerHTML += template
    });
    
}
display()
form.addEventListener("submit", (e) => {
    e.preventDefault()
  let task = document.querySelector("#task").value.trim();
  if(task !== ''){
    lists.push(task)
    localStorage.setItem('task',JSON.stringify(lists))
    display()
    task.value = '';
  }else{
    alert('please enter a valid task')
  }
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
})