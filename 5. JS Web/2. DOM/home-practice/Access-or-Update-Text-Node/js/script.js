//////////////////////// DOM PRACTICE ////////////////////////

///// Access/Update Text Node /////
/*
Create an unordered list containing <li> items that represent navigation.

Create a function that takes text from one of the <li> elements and presents it on screen using alert.
  
Create one more function.
The function should take some text as an argument.
The function should select the last <li> element in the list and replace its text with text passed as the function argument.
 */

function alertText() {
    var getText = document.querySelector('.first-list ul li:nth-child(3)').textContent;
    alert(getText);
}

alertText();


//
function addNewText(addSomeText) {

    var selectLastChild = document.querySelector('.first-list ul li:nth-child(4)');
    selectLastChild.textContent = addSomeText;
}

addNewText('Hello!')