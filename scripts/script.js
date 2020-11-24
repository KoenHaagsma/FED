// https://www.w3schools.com/howto/howto_js_sticky_header.asp

window.onscroll = function () {
    fixedHeader();
};

let header = document.querySelector(".fixedNav");
let sticky = header.offsetTop;
let hamburgerButton = document.querySelector(".fullHamburger");
let hamburgerDiv = document.querySelector(".hamburgerMenu");
let closeButton = document.querySelector(".closeButton");

hamburgerButton.addEventListener("click", displayHamburgerDiv);
closeButton.addEventListener("click", undisplayHamburgerDiv);

console.log(hamburgerButton);
console.log(closeButton);

function displayHamburgerDiv() {
    hamburgerDiv.classList.add("hamburgerShow");
};

function undisplayHamburgerDiv() {
    hamburgerDiv.classList.remove("hamburgerShow");
};

function fixedHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};