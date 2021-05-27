  const add= document.querySelector(".add");
  const input = document.querySelector(".newtodo"); 
  const todoList = document.querySelector(".todo");
const check = document.querySelectorAll("input[name=checkbox");
console.log(check);
  showTasks();
  add.onclick = ()=>{ 
    let Value=input.value;
  let getLSData = localStorage.getItem("NewTodo"); //getting localstorage
  if(getLSData == null){ //if localstorage has no data
    listArray = []; //create a blank array
  }else{
    listArray = JSON.parse(getLSData);  //transforming json string into a js object
  }
  let obj ={ 'task':Value,'status':'pending' } ;
  listArray.push(obj) //pushing or adding new value in array

  localStorage.setItem("NewTodo", JSON.stringify(listArray)); //transforming js object into a json string
  input.value="";
  showTasks(); 
}
function showTasks(){
  let getLocalStorageData = localStorage.getItem("NewTodo");

  if(getLocalStorageData == null){
    listArray = [];
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    if(element.status=="pending"){
      newLiTag += `<li id="${index}"><input type="checkbox" id="checkbox${index}" onchange="change(${index})">${element.task}<button class="ui inverted red mini right floated button" onClick="deleteTask(${index})">DELETE</button><button class="ui inverted primary mini right floated button">EDIT</button></li >`;
    }
    else{
      newLiTag += `<li id="${index}"><input type="checkbox" class="check" checked id="checkbox${index}">${element.task}<button class="ui inverted red mini right floated button" onClick="deleteTask(${index})">DELETE</button>`;
    }
 
  });
  todoList.innerHTML = newLiTag;
}
function deleteTask(index){
  let getLSData = localStorage.getItem("NewTodo");
  listArray = JSON.parse(getLSData);
  listArray.splice(index, 1); //delete or remove the li
  localStorage.setItem("NewTodo", JSON.stringify(listArray));
  showTasks(); //call the showTasks function
}
function change(id){
var li = document.getElementById(id);
li.classList.add("done");
}