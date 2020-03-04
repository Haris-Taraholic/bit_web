var marioImages = document.querySelectorAll("img");
var active = document.querySelector("img");
active.classList.add("active");
var main = document.querySelector("body");
var interval;
var counter = 0;

function movingBackground() {
    main.style.backgroundPosition = value + "px";
}

main.addEventListener("keydown", function (event) {
    if (event.keyCode === 39) {
        document.querySelector("img").classList.remove("active")
        active.nextElementSibling.classList.add("active");
        document.querySelector("img").classList.remove("activeLeft")
        value = counter -= 10;
        interval = setInterval(movingBackground, 10);
    }
    if (event.keyCode === 37) {
        active.classList.remove("active");
        document.querySelector("img").classList.remove("activeLeft")
        active.nextElementSibling.classList.add("activeLeft");
        value = counter -= 10;
        interval = setInterval(movingBackground, 10);
    }
})

main.addEventListener("keyup", function (event) {
    if (event.keyCode === 39) {
        document.querySelector("img").classList.add("active")
        active.nextElementSibling.classList.remove("active");
        clearInterval(interval);
    }
    if (event.keyCode === 37) {
        document.querySelector("img").classList.add("activeLeft")
        active.nextElementSibling.classList.remove("activeLeft");
        clearInterval(interval);
    }

})

