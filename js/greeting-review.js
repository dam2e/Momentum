const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_LS = "사용자",
    SHOWING_CN =  "showing";

function greetings (text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text} 🤍`;
}

function handleSubmit (event){
    event.preventDefault();
    const currentValue = input.value;
    localStorage.setItem(USER_LS,currentValue);
    greetings(currentValue);
}

function askForName (){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function init (){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){
        askForName(); // 로컬 스토리지에 등록 된 사용자 없음
    } else {
        greetings(currentUser);
    }
}

init ();
