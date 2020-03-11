// var btn = document.querySelector("#btn");
// function xmlhttp() {
//     var xmlhttp = new XMLHttpRequest();
//     var ipAddress = document.querySelector('input').value;
//     xmlhttp.open("GET", "http://www.geoplugin.net/xml.gp?ip=" + ipAddress);
//     xmlhttp.send();
//     console.log(xmlhttp);

//     var shk = document.createElement("div")
//     var body = document.querySelector("body");
//     body.appendChild(shk);


//     xmlhttp.onload = function () {

//         xmlDoc = xmlhttp.responseXML;
//         console.log(xmlDoc);

//         var a = xmlDoc.querySelector("geoplugin_request");
//         shk.appendChild(a);
//     }
// }
// var btn = document.querySelector('button')
// btn.addEventListener("click", xmlhttp)




// var dog = function () {
//     var request = new XMLHttpRequest();
//     request.open('GET', 'https://dog.ceo/api/breeds/image/random');
//     request.send();

//     request.onload = function () {
//         var response = JSON.parse(request.responseText);
//         console.log(response);
//         var imageUrl = response.message;
//         var image = document.createElement("img");
//         image.setAttribute("src", imageUrl);
//         var body = document.querySelector('body');
//         body.appendChild(image);
//     }
// }

// btn.addEventListener('click', dog);
var image = document.createElement('img');
var dog = function () {
    var request = new XMLHttpRequest();
    var dogBreed = document.querySelector('select');
    request.open('GET', 'https://dog.ceo/api/breed/' + dogBreed.value + '/images/random');
    request.send();

    request.onload = function () {
        var response = JSON.parse(request.responseText);
        console.log(response);
        var imageUrl = response.message;
        console.log(imageUrl);

        image.setAttribute('src', imageUrl);
        var body = document.querySelector('body');
        body.appendChild(image);
    }
}

// var select = document.querySelector('select');
// select.addEventListener('change', dog);

setInterval(dog, 2000);