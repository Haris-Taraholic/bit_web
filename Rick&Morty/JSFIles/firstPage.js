function getData() {
    let url = "https://rickandmortyapi.com/api/character";
    let request = new XMLHttpRequest;
    request.open("GET", url);
    request.send();
    request.onload = function() {
        let response = JSON.parse(request.response);
        console.log(response);
        let mainDiv = document.querySelector(".mainDiv");
        for (var i = 0; i < response.results.length; i++) {
            let div = document.createElement("div");
            div.classList.add("divSection");
            let createImage = document.createElement("img");
            let urlImg = response.results[i].image;
            let text = response.results[i].name;
            let para = document.createElement("p");
            para.textContent = text;


            console.log(urlImg);
            createImage.setAttribute('src', urlImg);
            div.appendChild(createImage);
            div.appendChild(para);
            mainDiv.appendChild(div);
        }
    }
}
getData();