function toggleBackground() {
    document.querySelector("body").classList.toggle("active");
}

function toggleBackgroundOff() {
    document.querySelector("body").classList.remove("active");
    document.querySelector("button").removeAttribute("onclick");
}