const clockContainer = document.querySelector(".js-colck"),
    colckTitle = clockContainer.querySelector("h1");

function getTime (){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    colckTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}
    `;
    // 👆 10보다 작을 경우 실행 (참:거짓)
}

function init (){
    getTime();
    setInterval(getTime,1000) // 파라미터 : 함수, 실행 시간 간격
}

init();

