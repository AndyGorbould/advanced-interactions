export function imageDisplay() {

let pokePigeot = document.getElementById('poke-pigeot')
let pokePigeotHidden = document.getElementsByClassName("poke-hidden")[0];

////////////////////////////////////////////////////////////
pokePigeot.addEventListener("mouseenter", hoverImg1);
pokePigeot.addEventListener("mouseleave", hoverImgLeave1);

function hoverImg1() {

    pokePigeotHidden.style.opacity = 1;
};
function hoverImgLeave1() {

    pokePigeotHidden.style.opacity = 0;
};
////////////////////////////////////////////////////////////
let pokeMagikarp = document.getElementById('poke-magikarp')
let pokeMagikarpHidden = document.getElementsByClassName("poke-hidden")[1];

pokeMagikarp.addEventListener("mouseenter", hoverImg2);
pokeMagikarp.addEventListener("mouseleave", hoverImgLeave2);

function hoverImg2() {

    pokeMagikarpHidden.style.opacity = 1;
};
function hoverImgLeave2() {

    pokeMagikarpHidden.style.opacity = 0;
};
////////////////////////////////////////////////////////////
let pokeSlowpoke = document.getElementById('poke-slowpoke')
let pokeSlowpokeHidden = document.getElementsByClassName("poke-hidden")[2];

pokeSlowpoke.addEventListener("mouseenter", hoverImg3);
pokeSlowpoke.addEventListener("mouseleave", hoverImgLeave3);

function hoverImg3() {

    pokeSlowpokeHidden.style.opacity = 1;
};
function hoverImgLeave3() {

    pokeSlowpokeHidden.style.opacity = 0;
};
////////////////////////////////////////////////////////////
let pokeFarfetchd = document.getElementById('poke-farfetchd')
let pokeFarfetchdHidden = document.getElementsByClassName("poke-hidden")[3];

pokeFarfetchd.addEventListener("mouseenter", hoverImg4);
pokeFarfetchd.addEventListener("mouseleave", hoverImgLeave4);

function hoverImg4() {

    pokeFarfetchdHidden.style.opacity = 1;
};
function hoverImgLeave4() {

    pokeFarfetchdHidden.style.opacity = 0;
};
}