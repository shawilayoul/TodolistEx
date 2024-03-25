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
    task.value = '';
  }else{
    alert('please enter a valid task')
  }
  /*lists.push(task);
  lists.forEach((item)=>{
   const template = `
   <div class="flex gap-2">
   <div>${item}</div>
   <button class="delete bg-red-400 text-white p-1 rounded">Delete</button>
   <button class="update bg-blue-400 text-white p-1 rounded">Update</button>
   </div>
   `
   list.innerHTML += template
document.querySelector('.delete').addEventListener('click',()=>{
    list.innerText = ""
})
document.querySelector('.update').addEventListener('click',()=>{
    console.log('updated')
})
  })*/
  document.querySelector("#task") = ""
});

document.querySelector('.delete').addEventListener('click',()=>{
    console.log()
})
document.querySelector('.update').addEventListener('click',()=>{
    console.log('updated')
})
