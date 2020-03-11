var divUser;
function OnKey() {
    var input = document.querySelector("input");
    var inputValue = input.value;
    var urlReq = "https://api.github.com/search/users?q=" + inputValue;

    var request = $.ajax({
        url: urlReq,
        method: "GET"
    });
    console.log(request);

    request.done(function (response) {
        var respo = response.items
        for (var i = 0; i < respo.length; i++) {
            var div = document.createElement("div");
            div.classList.add("select")
            var image = document.createElement("img");
            var par = document.createElement("p");
            image.setAttribute("src", respo[i].avatar_url);
            var upper = respo[i].login
            par.append(upper);
            div.appendChild(image);
            div.appendChild(par);
            var maindiv = document.querySelector("#main");
            maindiv.appendChild(div);
        }
    })
}
var a = document.querySelector("button");
a.addEventListener("click", OnKey);














// function repos() {
//     var $user = event.target;
//     var p = document.querySelector("p");
//     var request = $.ajax({
//         url: "https://api.github.com/users/:" + +"/repos",
//         method: "GET"
//     });
// }
// eventclick.addEventListener("click", repos);