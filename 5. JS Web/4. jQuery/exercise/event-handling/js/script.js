$(function () {

    var playerImg = $('<img>');
    $(playerImg).attr('src', 'img/player.png');
    $(playerImg).css('width', '100px');

    $('body').append(playerImg);

    $('body').on('mousemove', function (event) {
        $('img').css('position', 'absolute')
        $('img').css('left', event.clientX + "px")
        $('img').css('top', event.clientY + "px")
    });

});