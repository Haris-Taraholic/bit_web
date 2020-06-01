$(function () {//Wrapper for the whole JS file.
    var mainDiv = $('<div>');
    $('body').append(mainDiv);

    var mainTitle = $('<h1>Gallery</h1>');
    $(mainDiv).append(mainTitle);

    var imgArray = ['img/first-pic.jpg', 'img/second-pic.jpg', 'img/third-pic.jpg', 'img/forth-pic.jpg', 'img/fifth-pic.jpg'];

    for (var i = 0; i < imgArray.length; i++) {
        var imgElement = $('<img>');
        $(imgElement).attr('src', imgArray[i]);
        $(mainDiv).append(imgElement);
    }

    $('img').each(function (index, element) {
        var randomNum = 500 * Math.random();
        $(element).css('width', randomNum + 'px');
        if (randomNum < 200) {
            $(this).css('border', '1px solid green');
        } else {
            return false;
        }
    })

    // $('img').each(function (index, element) {
    //     var randomNum = 500 * Math.random();
    //     $(element).css('width', randomNum + 'px');
    //     if (randomNum > 200) {
    //         $(this).css('border', '1px solid green');
    //     }
    // })

}); //Wrapper end.