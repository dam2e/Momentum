const clockContainer = document.querySelector(".js-colck"),
    colckTitle = clockContainer.querySelector("h1");

function getTime (){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    colckTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init (){
    getTime();
}

init();