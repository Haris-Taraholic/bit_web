var players = [
    {
        name: "Robert",
        lastname: "Lewandowski",
        number: 9,
        img: "img/lewandovski.jpg"
    }
    ,
    {
        name: "Philippe",
        lastname: "Coutinho",
        number: 10,
        img: "img/kutinjo.jpg"
    }
    ,
    {
        name: "Manuel",
        lastname: "Noer",
        number: 1,
        img: "img/noer.jpg"
    }
    ,
    {
        name: "Tomas",
        lastname: "Miler",
        number: 25,
        img: "img/miler.jpg"
    }
    ,
    {
        name: "Alfonso",
        lastname: "Dejvis",
        number: 39,
        img: "img/dejvis.jpg"
    }
    ,
    {
        name: "Jérôme",
        lastname: "Boateng",
        number: 17,
        img: "img/botenk.jpg"
    }
    ,
    {
        name: "Kingsli",
        lastname: "Koman",
        number: 29,
        img: "img/koman.jpg"
    }
    ,
    {
        name: "Ivan",
        lastname: "Perisic",
        number: 14,
        img: "img/perisic.jpg"
    }
    ,
    {
        name: "Havi",
        lastname: "Martinez",
        number: 8,
        img: "img/martinez.jpg"
    }
    ,
    {
        name: "David",
        lastname: "Alba",
        number: 27,
        img: "img/davidalba.jpg"
    }
    ,
    {
        name: "Josua",
        lastname: "Kimih",
        number: 78,
        img: "img/kimih.jpg"
    }
    ,
    {
        name: "Leon",
        lastname: "Gorzega",
        number: 8,
        img: "img/leon.jpg"
    }
    ,
    {
        name: "Oliver",
        lastname: "Batista",
        number: 69,
        img: "img/oliver.jpg"
    }
    ,
    {
        name: "Serz",
        lastname: "Gnabri",
        number: 68,
        img: "img/serz.jpg"
    }
    ,
    {
        name: "Josua",
        lastname: "Zirkizee",
        number: 67,
        img: "img/zirkze.jpg"
    }
]
function createPlayer(player) {
    var img = document.createElement("img");
    var imgUrl = player.img;
    img.src = imgUrl + "";
    var div = document.createElement("div");

    var name = player.name;
    var lastName = player.lastname;
    var number = player.number;

    var p = document.createElement("p");
    var text = name + "\n" + lastName + "\n" + number;
    text = document.createTextNode(text);

    p.appendChild(text);
    div.appendChild(img);
    div.appendChild(p);
    return div;
}


function getRandomNumber(limit) {
    var number = (limit - 1) * Math.random();
    number = Math.round(number);
    return number;
}

function getPlayer(players) {
    while (players.length) {
        var ranNum = getRandomNumber(players.length);
        var player = players[ranNum];
        var div = createPlayer(player);
        if (players.length > 4) {
            firstSection.appendChild(div);
        } else {
            secSection.appendChild(div);
        }
        players.splice(ranNum, 1);
    }
}

var firstSection = document.querySelector(".firstSection");
var secSection = document.querySelector(".secSection");

getPlayer(players);

function swapPlayer(players) {
    var firstSec = document.querySelectorAll(".firstSection div");
    var randomNum = getRandomNumber(firstSec.length);
    var player = firstSec[randomNum];
    secSection.appendChild(player);
    //////////////////////////////////
    var secoundSection = document.querySelectorAll(".secSection div");
    var randomNum2 = getRandomNumber(secoundSection.length);
    var playerTwo = secoundSection[randomNum2];
    firstSection.appendChild(playerTwo);
}

setInterval(swapPlayer, 1000);
