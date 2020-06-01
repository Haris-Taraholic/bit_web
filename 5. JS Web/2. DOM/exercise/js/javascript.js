////////////////// Selecting One/Multiple Elements //////////////////
// document.getElementById("first-list").className = "first-bg-color";

//////////////////
// var a = document.querySelectorAll("#second-list li");
// function selector() {
//     for (var i = 0; i < a.length; i++) {
//         a[i].className = "second-bg-color";
//     }
// }
// selector();

//////////////////
// var b = document.querySelectorAll("#third-list li");
// function selectOnlyLi() {
//     for (var i = 0; i < b.length; i++) {
//         b[i].className = "third-bg-color";
//     }
// }
// selectOnlyLi();

/////////////////////////////////////////

// function remove() {
//     var x = document.querySelector('.active');

//     x.className = "";
//     var res = x.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild;
//     res.className = "green";
// }
// remove();


/////////////////////////////////////////

// var select = document.querySelector(".home-btn").textContent;
// alert(select);

// function addText() {
//     var select = document.querySelector(".home-btn").textContent = "Some random text";
// }
// addText()



//////////////////// DROPDOWN /////////////////////

// var section = document.getElementsByTagName('section');
// var select = document.createElement('select');

// var array = ['Volvo', 'Saab', 'Opel', 'Audi'];

// for (var i = 0; i < array.length; i++) {
//     option[i] = array[i]
// }

////////////////// ATTRIBUTES //////////////////

var formElement = document.querySelector('form');

function createForm(type, text, required) {
    var inputElement = document.createElement('input');
    var labelElement = document.createElement('label');
    var textElement = document.createTextNode(text);

    inputElement.setAttribute("type", type);

    labelElement.appendChild(textElement);
    labelElement.appendChild(inputElement);

    formElement.appendChild(labelElement);

    if (required) {
        inputElement.setAttribute('required', required);
    }

}

createForm('name', 'Username:');
createForm('password', 'Password:', true);
createForm('email', 'E-mail:')
