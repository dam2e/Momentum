const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage (imgNumber){
    const image = new Image(); // 이미지 객체 생성
    image.src = `images/${imgNumber + 1}.jpg`;
    body.appendChild(image);
    image.classList.add("bgImage");
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER); // floor : 내림
    return number;

}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();