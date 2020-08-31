const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo (event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    // 👇 array.filter(callback[, thisArg]) : 리턴값이 true인 요소들만 array로 반환한다.
    const cleanToDos =  toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id); // parseInt : string을 number로 변환
    });

    toDos = cleanToDos;
    saveToDos();
}

function saveToDos (){
    // JSON.stringify() : object를 string 으로 변환
    localStorage.setItem("TODOS_LS", JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const newId = toDos.length + 1;
    delBtn.innerText ="❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit (event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos (){
    const loadedToDos = localStorage.getItem("TODOS_LS");
    if (loadedToDos!==null){
        const parsedToDos = JSON.parse(loadedToDos); // JSON.parse() : string을 object로 변환

        // 👇 arr.forEach(callback(currentvalue[, index[, array]])[, thisArg]) : 배열의 각 요소를 순서대로 한 번씩 함수를 호출한다.
        parsedToDos.forEach(function(toDo){ // thisArg -> parsedToDos에 있는 것들을 각각 한번씩 실행해 주므로 toDo라고 지칭한다.
            paintToDo(toDo.text);
        });
    }
}

function init (){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();