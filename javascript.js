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

window.addEventListener("scroll", function(e){

    const target = document.querySelector(".sample-img2");

    var scrolled = window.pageYOffset;
    var rate = scrolled * -0.1;

    target.style.transform = "translate3d(2vmax,"+rate+"px, 0)";

});

window.addEventListener("scroll", function(e){

    const target = document.querySelector(".diamond-casino-img");

    
    var scrolled = window.pageYOffset;
    var rate = scrolled * 0.1;

    target.style.transform = "translate3d(0vmax,"+rate+"px, 0)";
});


function showBody(){
    setTimeout(function(){
        document.querySelector(".show-body").style.display = "block";
    }, 7000);
}
showBody();