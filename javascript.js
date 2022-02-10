const button = document.querySelector(".hamburger-nav-container");
const hamburger = document.querySelector(".hamburger");
const overlayNav = document.querySelector(".nav-bar");
const beGone = document.querySelector("onClick");
let overlayOpen = false;


button.addEventListener("click", openOverlay);
function openOverlay(){
    if(overlayOpen === false){
        overlayNav.classList.add("open");
        hamburger.classList.add("X");
        overlayOpen = true;
    }else{
        overlayNav.classList.remove("open");
        hamburger.classList.remove("X");
        overlayOpen = false;
    }

}