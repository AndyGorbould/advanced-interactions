// import & call "carousel-script.js" function
import { carousel } from "./carousel-script.js";
carousel();
// import { imageDisplay } from "./image-display.js";
// imageDisplay();

////////////////////////////////////////////
// Chaser
////////////////////////////////////////////
let boxA = document.getElementById("boxA");
let chaser = document.getElementsByClassName("chaser")[0];

boxA.addEventListener("mousemove", function (e) {

    let x = e.offsetX - 25;
    let y = e.offsetY - 25;


    chaser.style.left = x + "px";
    chaser.style.top = y + "px";

});

////////////////////////////////////////////
// Runner
////////////////////////////////////////////
let boxB = document.getElementById("boxB");
let runner = document.getElementsByClassName("runner")[0];


boxB.addEventListener("mousemove", function (e) {


    let rect = boxB.getBoundingClientRect();

    let x = boxB.clientWidth - (e.offsetX - rect.x) - 250;
    let y = boxB.clientHeight - (e.offsetY - rect.y) - 1200;


    runner.style.left = x + "px";
    runner.style.top = y + "px";

});