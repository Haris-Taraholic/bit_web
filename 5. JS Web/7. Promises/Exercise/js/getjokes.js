export const createJoke = function (joke) {

    const selectBody = document.querySelector('body');

    const createParagraph = document.createElement('p');

    createParagraph.classList.add("paragraph-class");

    const text = document.createTextNode(joke);

    createParagraph.appendChild(text);

    selectBody.appendChild(createParagraph);


};
