// import & call "carousel-script.js" function
import { carousel } from "./carousel-script.js";
carousel();
// import { imageDisplay } from "./image-display.js";
// imageDisplay();


let boxA = document.getElementById("boxA");
let chaser = document.getElementsByClassName("chaser")[0];

boxA.addEventListener("mousemove", function (e) {

    let x = e.offsetX-25;
    let y = e.offsetY-25;


    chaser.style.left = x + "px";
    chaser.style.top = y + "px";    

});

// chaser.addEventListener("mousemove", function (e) {

//     let x = e.offsetX-25;
//     let y = e.offsetY-25;

//     chaser.style.left = x + "px";
//     chaser.style.top = y + "px";    

// });
