var mainDiv = document.querySelector('.sent-message-area');
var button = document.querySelector("button")

button.onclick = function () {
    var findText = document.querySelector("form input");
    var newParagraph = document.createElement('p');
    var text = document.createTextNode(findText.value);
    newParagraph.appendChild(text)
    mainDiv.appendChild(newParagraph);
    document.querySelector("input").value = "";
}


