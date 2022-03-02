const inputBox = document.querySelector(".add input");
const addButton = document.querySelector(".add button");
const todolist = document.querySelector(".list") 
const deleteAll = document.querySelector(".clear button")

inputBox.onkeyup = ()=> {
    let userData = inputBox.value;
    if(userData.trim() != 0) {
        addButton.classList.add("active"); 
    }
    else{
        addButton.classList.remove("active");
    }
}

addButton.onclick = ()=>{
    let userData = inputBox.value;
    if(userData != '') {
        let userData = inputBox.value;
        let getLocalStorage = localStorage.getItem("New Todo");
        if(getLocalStorage == null) {
            listArr = [];
        }else{
            listArr = JSON.parse(getLocalStorage);
        }
        listArr.push(userData);
        localStorage.setItem("New Todo", JSON.stringify(listArr));
        showTasks();
        addButton.classList.remove("active");
    }else{
    }

}

function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo"); 
    if(getLocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    } 
    const reste = document.querySelector(".reste");
    reste.textContent = listArr.length;

    if(listArr.length > 0){
        deleteAll.classList.add("active");
    }else{
        deleteAll.classList.remove("active");
    }


    let newList = '';
    listArr.forEach((element, index) => {
        newList += `<li> ${element} <i onclick="deleteTask(${index})"; class="fas fa-minus-circle"></i> </li>`;
    });
    todolist.innerHTML = newList;
    inputBox.value = "";
}

function deleteTask(index) {
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}

deleteAll.onclick = () => {
    listArr = [];
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();

}

showTasks();
