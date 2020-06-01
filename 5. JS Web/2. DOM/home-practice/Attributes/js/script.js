//////////////////////// DOM PRACTICE ////////////////////////

///// Attributes /////
/*
Create a form that contains multiple input elements with labels.
Some of those elements should be required.

Create a function that validates the form.
The function checks each input element that belongs to the form.
If the element has the required attribute and no data, it should get red borders.
*/

function addBorder() {

    for (var i = 0; i < 4; i++) {

        var getInput = document.querySelector('input');
        var getRequired = getInput.hasAttribute('required');

        if (getRequired) {
            getInput.setAttribute('id', 'active');

        }
    }
}

addBorder();