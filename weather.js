const API_KEY = "7821e2976e3f1e09fdff6c5b814483fd"; // 날씨 정보 API : openweathermap.org
const COORDS = "coords";

function saveCoords (coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSucces (position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
}

function handleGeoError (){
    console.log("Cant access geo location");
}

function askForCoords (){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function  loadCoords (){
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null){
       askForCoords();
    } else {
        // getWeather
    }
}

function init (){
    loadCoords();
}

init();