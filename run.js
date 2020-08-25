const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

/*
function handleClick (){
    const hassClass = title.classList.contains(CLICKED_CLASS);
    if (!hassClass){
        title.classList.add(CLICKED_CLASS);
    } else {
        title.classList.remove(CLICKED_CLASS);
    }
}
*/

function handleClick (){
    title.classList.toggle(CLICKED_CLASS); // toggle 함수 안에 있는 값을 체크 함.
}

// Color Toggle

function init(){
    title.addEventListener("click", handleClick);
}

init();