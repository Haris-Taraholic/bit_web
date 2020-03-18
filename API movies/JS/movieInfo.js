
let a = window.location.search;

let urlId = (function index() {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === "=") {
            return a.slice(i + 1);
        }
    }
})();
console.log(urlId);



let request = new XMLHttpRequest();

request.open("GET", 'http://api.tvmaze.com/shows/' + urlId);
request.send();

request.onload = function () {
    let response = JSON.parse(request.responseText);
    console.log(response);

    let title = document.createElement('h1');
    title.textContent = response.name;
    let container = document.querySelector('#container');
    container.appendChild(title);
    let image = document.createElement('img');
    image.setAttribute("src", response.image.original);
    let showDetailsTitle = document.createElement('h3');
    showDetailsTitle.textContent = 'Show Details';
    let details = document.createElement('div');
    $(details).html(response.summary);
    console.log(details);
    let imageDiv = document.createElement('div');
    imageDiv.appendChild(image);
    imageDiv.appendChild(showDetailsTitle);
    imageDiv.appendChild(details);
    container.appendChild(imageDiv);


}

let requestTwo = new XMLHttpRequest();
requestTwo.open("GET", ' http://api.tvmaze.com/shows/' + urlId + '/seasons');
requestTwo.send();

requestTwo.onload = function () {
    let seasons = JSON.parse(requestTwo.responseText);
    console.log(seasons);
    let listOfSeasons = document.createElement('ul');
    let seasonsTitle = document.createElement('h3');
    let seasonsDiv = document.createElement('div');
    let container = document.querySelector('#container');
    seasonsDiv.className = 'seasonsDiv';
    seasonsTitle.textContent = "Seasons(" + seasons.length + ")";
    for (let i = 0; i < seasons.length; i++) {
        let singleSeason = document.createElement('li');
        singleSeason.textContent = seasons[i].premiereDate + " - " + seasons[i].endDate;
        listOfSeasons.appendChild(singleSeason);
        seasonsDiv.appendChild(seasonsTitle);
        seasonsDiv.appendChild(listOfSeasons);
        container.appendChild(seasonsDiv);
    }
}

let requestThree = new XMLHttpRequest();
requestThree.open("GET", ' http://api.tvmaze.com/shows/' + urlId + '/cast');
requestThree.send();


requestThree.onload = function () {
    let cast = JSON.parse(requestThree.responseText);
    console.log(cast);
    let castDiv = document.createElement('div');
    castDiv.className = 'castDiv';
    let fullCast = document.createElement('ul');
    let castTitle = document.createElement('h3');
    castTitle.textContent = 'Cast';
    for (let i = 0; i < 10; i++) {
        let actor = document.createElement('li');
        actor.textContent = cast[i].person.name;
        fullCast.appendChild(actor);
        castDiv.appendChild(castTitle);
        castDiv.appendChild(fullCast);
        let container = document.querySelector('#container');
        container.appendChild(castDiv);
    }
}
