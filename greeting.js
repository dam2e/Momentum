const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_LS = "사용자",
    SHOWING_CN = "showing";

// 로컬 스토리지에 이름 저장
function saveName (text){
    localStorage.setItem(USER_LS, text);
}

// 이름 전송 이벤트
function handleSubmit (event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

// 로컬 스토리지에 등록된 이름이 없을 경우
function askForName (){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

// 로컬 스토리지에 등록된 이름이 있을 경우
function paintGreeting (text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName (){
    const currentUser = localStorage.getItem(USER_LS); // 사용자가 입력한 이름
    if (currentUser === null){
        // 로컬 스토리지에 등록된 이름이 없을 경우
        askForName();
    } else{
        paintGreeting(currentUser);
    }
}

loadName();
