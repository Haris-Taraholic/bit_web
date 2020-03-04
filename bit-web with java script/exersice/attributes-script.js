
// var formEl = document.querySelector("form");


// function addFormElement(typeEl, nameEl) {


//     var labelEl = document.createElement('label');

//     var input = document.createElement('input');

//     var text = document.createTextNode(nameEl);

//     labelEl.appendChild(text);

//     input.setAttribute(typeEl, name);

//     labelEl.appendChild(input);

//     formEl.appendChild(labelEl);

// }

// addFormElement("type", "Name");
// addFormElement("password", "Password");
// addFormElement("mail", "E-mail");

// function addFormInput(type, label, required) {
//     var inputEl = document.createElement('input');
//     var labelEl = document.createElement('label');
//     var textNode = document.createTextNode(label);

//     inputEl.setAttribute("type", type);
//     if (required) {
//         inputEl.setAttribute("required", 'required');
//     }
//     labelEl.appendChild(textNode);

//     labelEl.appendChild(inputEl);
//     formEl.appendChild(labelEl);
// }

// addFormInput('text', "Name: ", true);
// addFormInput('number', "Number: ", true);
// addFormInput('email', "Email: ", true);
// addFormInput('password', "Password: ", true);



function addImages(filePath) {
    for (var i = 0; i < filePath.length; i++) {
        var mainDiv = document.querySelector("div");
        var image = document.createElement('img');
        image.setAttribute('src', filePath[i]);
        mainDiv.appendChild(image);
    }
    document.querySelector("div img").classList.add("active");
}

var images = ["apple.jpg", "peach.jpg", "pear.jpg", "olives.jpg"];
addImages(images);



function slideImg() {
    var active = document.querySelector(".active");
    active.classList.remove("active");
    if (active.nextElementSibling) {
        active.nextElementSibling.classList.add("active");
    } else {
        document.querySelector("div img").classList.add("active");
    }
}



setInterval(slideImg, 2000);