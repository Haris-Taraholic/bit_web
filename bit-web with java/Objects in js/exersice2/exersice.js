
// var element = document.getElementById("second");
// element.className = "new-class"

// var a = document.documentElement.querySelectorAll("li");

// for (var i = 0; i < a.length; i++) {
//     a[i].className = "list-items";
// }
// var b = document.querySelectorAll("#third li");

// for (var i = 0; i < b.length; i++) {
//     b[i].className = "upper-case";
// }

// document.getElementById("second").firstElementChild.className = "active";

// document.getElementById("second").firstElementChild.className = "";

// document.getElementById("first").firstChild.nextSibling.className = "active";


// function adc() {
//     var a = document.querySelector(".active");
//     a.className = "";
//     a.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.className = "active";
// }

// adc();
// function text() {
//     var a = document.querySelector(".ul").firstElementChild.textContent;
//     alert(a);
// }
// text()
// function replace() {
//     var b = document.querySelector(".ul").lastElementChild.textContent = "Uros";
// }
// replace();

function build(array) {
    var selectTag = document.createElement('select');

    for (var i = 0; i < array.length; i++) {
        var opinion = document.createElement("option");
        var textOpinion = document.createTextNode(array[i]);

        opinion.appendChild(textOpinion);

        selectTag.appendChild(opinion);
    }
    document.querySelector("body").appendChild(selectTag);

}
var a = ["BMW", "audi", "PORSHE", "FIAT", "UROS", "STEFAN"];
build(a);

