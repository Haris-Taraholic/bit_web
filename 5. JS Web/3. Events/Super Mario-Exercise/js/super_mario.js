var static = document.querySelector('.mario');
var body = document.querySelector('body');
var counter = 0;
var interval;

/////////// Right Key /////////////
//Running

function running(event) {
    if (event.keyCode === 39) {
        static.classList.add('running');
        interval = setInterval(moveBackground, 10);
        counter -= 5;
    }
}

body.addEventListener("keydown", running);

//Stop running
function stopRunning(event) {
    static.classList.remove('running');
    static.classList.remove('reverse');
    clearInterval(interval);
}

body.addEventListener("keyup", stopRunning);
// Move Background
function moveBackground(event) {
    body.style.backgroundPositionX = counter + "px";
}

///////////// Left Key /////////////
function reverse(event) {
    if (event.keyCode === 37) {
        static.classList.add('reverse');
        static.classList.add('running');

        interval = setInterval(moveBackground, 10);
        counter += 5;
    }
}

body.addEventListener("keydown", reverse);
// body.addEventListener("keyup", stopRunning);


///////////////////////// jumping ///////////////////////
function jumping(event) {
    if (event.keyCode === 32) {
        console.log("aa");

        static.classList.add('jump');
    }
}
body.addEventListener("keydown", jumping);

function landing(event) {
    static.classList.remove('jump');
}
body.addEventListener("keyup", landing);