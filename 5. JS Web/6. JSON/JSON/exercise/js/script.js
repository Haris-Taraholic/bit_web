var createImg = document.createElement('img');

var getRandomImg = function () {
    var request = new XMLHttpRequest();
    var dogBreed = document.querySelector('select');

    request.open('GET', 'https://dog.ceo/api/breed/' + dogBreed.value + '/images/random', true);

    request.onload = function () {
        var data = JSON.parse(request.responseText);

        createImg.setAttribute('src', data.message);

        var body = document.querySelector('body');
        body.appendChild(createImg);
    };
    request.send();
}

var result = document.querySelector('select');
result.addEventListener('change', getRandomImg);

setInterval(getRandomImg, 3000);