// var imgOne = $("<img>");
// imgOne.attr("src", "galery/slika_1.jpg");
// $("#containerOne").append(imgOne);

// var imgTwo = $("<img>");
// imgTwo.attr("src", "galery/slika_2.jpg");
// $("#containerOne").append(imgTwo);

// var imgThree = $("<img>");
// imgThree.attr("src", "galery/slika_3.jpg");
// $("#containerOne").append(imgThree);

// var imgFour = $("<img>");
// imgFour.attr("src", "galery/slika_4.jpg");
// $("#containerTwo").append(imgFour);


// var imgFifth = $("<img>");
// imgFifth.attr("src", "galery/slika_5.jpg");
// $("#containerTwo").append(imgFifth);

// var imgSixth = $("<img>");
// imgSixth.attr("src", "galery/slika_6.jpg");
// $("#containerTwo").append(imgSixth);

var images = ["galery/slika_1.jpg", "galery/slika_2.jpg", "galery/slika_3.jpg", "galery/slika_4.jpg", "galery/slika_5.jpg", "galery/slika_6.jpg"];

for (var i = 0; i < images.length; i++) {
    var image = $("<img>");
    image.attr("src", images[i]);
    if (i < 3) {
        $("#containerOne").append(image);
    } else {
        $("#containerTwo").append(image);
    }
}

var b = $("#containerOne img:first-child");
b.addClass("selected");

function changeImgBorder() {
    $(".selected").removeClass("selected");
    var c = $("#containerTwo img:eq(1)");
    c.addClass("selected");
}

setInterval(changeImgBorder, 1000)

setInterval(function () {
    $(".selected").removeClass("selected");
    var b = $("#containerOne img:first-child");
    b.addClass("selected");
}, 2000);

