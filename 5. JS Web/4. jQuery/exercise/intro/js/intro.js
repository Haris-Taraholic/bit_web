$(function () { //Wrapper for the whole JS file.
    ///////////// Intro //////////////

    // $(console.log("Hello World!"));

    // $('h1').click(function () {
    //     $(this).remove();
    // });


    /////////////// Selecting ////////////////

    $('ul li:first').addClass('about');
    $('ul li').addClass('to-upper-case');
    $('ul li:last').addClass('active');
    $('ul li:eq(2)').addClass('bg-color')


}); //Wrapper end.