const title = document.querySelector("#title");

// Window Resize
function handleResize (event){
    console.log(event);
    console.log("I have been resized.");
}

window.addEventListener("resize", handleResize); // 이벤트를 다룰 함수 추가
// handleResize() -> 즉시 실행
// handleResize -> 윈도우 사이즈 변경 시 실행

function handleClick (){
    title.style.color = "blue";
}

// Click Event
title.addEventListener("click", handleClick);