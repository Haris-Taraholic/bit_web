var allPlayers = [
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

function getRandomNumber(limit) {
    return Math.round((limit - 1) * Math.random());
}


function createListsOfPlayers(players) {
    var mixed = [];

    while (mixed.length < players.length) {
        var randomNumber = getRandomNumber(players.length);
        if (mixed.indexOf(randomNumber) === -1) {
            mixed.push(randomNumber);
        }
    }

    var onField = [];
    var onBench = [];
    for (var i = 0; i < players.length; i++) {
        if (i < 11) {
            onField.push(players[mixed[i]]);
        } else {
            onBench.push(players[mixed[i]]);
        }
    }

    return {
        onField: onField,
        onBench: onBench
    };
}

function createPlayer(player) {
    var $playerImage = document.createElement("img");
    $playerImage.src = player.img;

    var $bio = document.createElement("p");
    $bio.textContent = player.name + " " + player.lastname + " " + player.number;

    var $frame = document.createElement("div");
    $frame.appendChild($playerImage);
    $frame.appendChild($bio);

    return $frame;
}


function printPlayers(players, $element) {
    for (var i = 0; i < players.length; i++) {
        var $player = createPlayer(players[i]);
        $element.appendChild($player);
    }
}

function print(players) {
    printPlayers(players.onField, $field);
    printPlayers(players.onBench, $bench);
}

var $field = document.querySelector(".firstSection");
var $bench = document.querySelector(".secSection");

var players = createListsOfPlayers(allPlayers);
print(players);

// change player 
// print




// getPlayer(allPlayers);

// function swapPlayer(players) {
//     var firstSec = document.querySelectorAll(".firstSection div");
//     var randomNum = getRandomNumber(firstSec.length);
//     var player = firstSec[randomNum];
//     secSection.appendChild(player);
//     //////////////////////////////////
//     var secoundSection = document.querySelectorAll(".secSection div");
//     var randomNum2 = getRandomNumber(secoundSection.length);
//     var playerTwo = secoundSection[randomNum2];
//     $field.appendChild(playerTwo);
// }

// setInterval(swapPlayer, 1000);
