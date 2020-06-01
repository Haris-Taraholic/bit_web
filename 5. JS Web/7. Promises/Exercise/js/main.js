import { getJoke } from "./request.js";
import { createJoke } from "./getjokes.js";

const btn = document.querySelector("button");

const postJoke = function () {
    getJoke().then((data) => {
        createJoke(data.value)
    }).catch((error) => {
        alert(error)
    });
};

btn.addEventListener('click', postJoke);

const removeP = function () {
    const para = document.querySelector('p');
    para.remove();
}
btn.addEventListener('click', removeP);
