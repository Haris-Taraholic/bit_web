

let request = new XMLHttpRequest();
request.open("GET", "http://api.tvmaze.com/shows");
request.send();

request.onload = function () {
    let res = JSON.parse(request.responseText);

    for (let i = 0; i < 50; i++) {
        let image = document.createElement('img');
        image.setAttribute('src', res[i].image.medium);
        let link = document.createElement('a');
        link.setAttribute("href", 'movieInfo.html?id=' + res[i].id);
        link.textContent = res[i].name;
        let singleMovieDiv = document.createElement('div');
        singleMovieDiv.appendChild(image);
        singleMovieDiv.appendChild(link);
        singleMovieDiv.className = 'singleMovieDiv';
        let mainDiv = document.querySelector('#container');
        mainDiv.appendChild(singleMovieDiv);

    };
}

let input = document.querySelector('input');
input.innerHTML = '';
input.addEventListener('keyup', function () {
    let inputSearch = document.querySelector('input').value;
    $('ul').html('');
    $('ul').addClass('activeUl');
    let requestSingleSearch = new XMLHttpRequest();
    requestSingleSearch.open("GET", "http://api.tvmaze.com/search/shows?q=" + inputSearch);
    requestSingleSearch.send();
    requestSingleSearch.onload = function () {
        let result = JSON.parse(requestSingleSearch.responseText);
        let list = document.querySelector('ul');
        for (var j = 0; j < result.length; j++) {
            let singleShow = document.createElement('a');
            singleShow.textContent = result[j].show.name;
            singleShow.setAttribute('href', 'movieInfo.html?id=' + result[j].show.id);
            let listItem = document.createElement('li');
            listItem.appendChild(singleShow);
            list.appendChild(listItem);

        }
    }
});




