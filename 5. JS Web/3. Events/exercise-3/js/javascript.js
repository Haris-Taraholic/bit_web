
var body = document.querySelector("body");

body.addEventListener('mousemove', function (event) {
    var player = document.querySelector("#player-img");
    player.style.left = event.clientX + "px";
    player.style.top = event.clientY + "px";
})
