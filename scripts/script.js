// https://www.w3schools.com/howto/howto_js_sticky_header.asp
// W3schools gebruikt hoe ik de header van sticky naar normaal kan laten gaan
// Dit omdat ik niet precies wist hoe het moest, code is wel duidelijk beetje aangepast om hetn aar m'n eigen stijl te doen

window.onscroll = function () {
    fixedHeader()
};

let header = document.querySelector(".fixedNav");
let sticky = header.offsetTop;

function fixedHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}