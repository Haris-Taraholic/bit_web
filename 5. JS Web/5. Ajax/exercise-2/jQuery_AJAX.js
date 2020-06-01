


function gitHubSearch() {

    var searchBox = document.querySelector('input');
    var inputValue = searchBox.value;
    var fullUrl = "https://api.github.com/search/users?q=" + inputValue;

    var request = $.ajax({
        url: fullUrl,
        method: "GET",
    });

    request.done(function (response) {

        var array = response.items;
        for (var i = 0; i < array.length; i++) {
            var div = document.createElement('div');
            var divParent = document.querySelector("#divParent");
            div.className = 'divWrap';
            var avatar = document.createElement('img');
            var userName = document.createElement('p');
            var body = document.querySelector('body');
            avatar.setAttribute("src", array[i].avatar_url);
            userName.append(array[i].login);
            div.appendChild(avatar);
            div.appendChild(userName);
            divParent.appendChild(div);
            body.appendChild(divParent);
        }
    })



}

var button = document.querySelector('button');
button.addEventListener('click', gitHubSearch);
