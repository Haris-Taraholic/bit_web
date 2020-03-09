// $(document).ready(function () {
//     console.log("Hello, World");

// $('li:first').addClass('bottom');
// $('li').addClass('transform');
// $('li.active').addClass('activeColor');
// $('li:eq(2)').addClass('middle');
// var images = ['img/Branko_Jovicic_3.png', 'img/Dusan_Jovancic_29.png', 'img/El_Fardu_Ben_31.png', 'img/Marko_Gobeljic_77.png', "img/Milan_Rodic_23.png"];

// for (var i = 0; i < images.length; i++) {
//     var body = $("body");
//     var image = $("<img>");
//     image.attr("src", images[i]);
//     body.append(image);
// }
// $("img").each(function (index, element) {
//     var ranNum = 650 - 200 * Math.random();
//     $(element).css("width", ranNum + "px");
//     if (ranNum < 500) {
//         $(this).css("border", "solid 2px red");
//     }


$("body").on("click", function (event) {
    $("img").css("left", event.clientX + "px");
    $("img").css("top", event.clientY + "px");
})

