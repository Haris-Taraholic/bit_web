//////////////////////// DOM PRACTICE ////////////////////////

///// InnerHTMl /////
/*
Do the following exercise in two ways: using DOM manipulation methods and using innerHTML.
Create a function that is used for building a dropdown/select element.
It first builds a dropdown and then adds it to the DOM.
The function takes two arguments: the first is an array of strings and the second is a DOM node to which the dropdown will be added.
Create options that correspond to items in the passed array and add them to the select element.
Add the whole dropdown list to DOM .

Use this function to create two selects on the page.
The first select should be appended to the first div on the page.
The second select should be appended to the last div on the page.
*/

//First dropdown
function createDropdown(arrayOfStrings) {
    var getFirstDiv = document.querySelector('.first-div');

    var createSelect = document.createElement('select');
    getFirstDiv.appendChild(createSelect);

    for (var i = 0; i < arrayOfStrings.length; i++) {
        var createOption = document.createElement('option');
        createOption.append(arrayOfStrings[i]); //with append()
        createSelect.appendChild(createOption);
    }

}

createDropdown(['Volvo', 'BMW', 'Audi', 'Volkswagen']);


//Second dropdown
function createSecondDropdown(arrayOfStrings) {
    var getSecondDiv = document.querySelector('.second-div');

    var createSecondSelect = document.createElement('select');
    getSecondDiv.appendChild(createSecondSelect);

    for (var i = 0; i < arrayOfStrings.length; i++) {
        var createSecondOption = document.createElement('option');
        createSecondOption.innerHTML = arrayOfStrings[i]; //with innerHTML
        createSecondSelect.appendChild(createSecondOption);
    }

}

createSecondDropdown(['Cake', 'Juice', 'Fruit', 'Meat']);