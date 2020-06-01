/////////// First <div> ///////////
// $("body").append("<div id='first-div'></div>");

// var divOne = $("div#first-div")

// var imgArray = ["./img/picOne.jpg",
//     "./img/picTwo.jpg",
//     "./img/picThree.jpg",
//     "./img/picFourth.jpg",
//     "./img/picFive.jpg",
//     "./img/picSix.jpg",
// ];

// for (var i = 0; i < imgArray.length - 3; i++) {
//     divOne.append('<img>');
//     var image = $('img:last');
//     image.attr("src", imgArray[i]);
// }


// //////////// Second <div> ////////////
// $("body").append("<div id='second-div'></div>");

// var divTwo = $("div#second-div")

// for (var i = 3; i < imgArray.length; i++) {
//     divTwo.append('<img>');
//     var image = $('img:last');
//     image.attr("src", imgArray[i]);
// }

document.getElementById("myBtn").addEventListener("click", createInput);

function createInput() {

    var getInput = $('input').value;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://www.geoplugin.net/xml.gp?ip=" + getInput);
    xmlhttp.send();

    xmlhttp.onload = function () {

        var getCountry = xmlhttp.responseXML.querySelector("geoplugin_countryName").textContent;
        $("body").append("<h1></h1>");
        $("h1").append(getCountry);
    }

}

