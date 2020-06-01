
function createImg(Path) {
    for (var i = 0; i < Path.length; i++) {
        var mainDiv = document.querySelector('div');
        var imageElement = document.createElement('img');
        imageElement.setAttribute('src', Path[i]);
        mainDiv.appendChild(imageElement);
    }
    document.querySelector('div img').classList.add('active');
}

images = ['img/phone-one.jpg', 'img/phone-two.jpg', 'img/phone-three.jpg']

createImg(images);


function createSlider() {
    var active = document.querySelector('.active');
    document.querySelector(".active").classList.remove("active");

    if (active.nextElementSibling) {
        active.nextElementSibling.classList.add('active');
    } else {
        document.querySelector('div img').classList.add('active');
    }
}

setInterval(createSlider, 2000);

