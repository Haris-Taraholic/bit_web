
/////////////////////// PLAYERS ////////////////////////
var players = [
    { name: 'Milan ', lastName: 'Borjan ', number: 82, playerImg: 'img/players/Milan_Borjan_82.png' },
    { name: 'Zoran ', lastName: 'Popovic ', number: 1, playerImg: 'img/players/Zoran_Popovic_1.png' },
    { name: 'Branko ', lastName: 'Jovicic ', number: 3, playerImg: 'img/players/Branko_Jovicic_3.png' },
    { name: 'Dusan ', lastName: 'Jovancic ', number: 29, playerImg: 'img/players/Dusan_Jovancic_29.png' },
    { name: 'El-Fardu ', lastName: 'Ben ', number: 31, playerImg: 'img/players/El_Fardu_Ben_31.png' },
    { name: 'Marko ', lastName: 'Gobeljic ', number: 77, playerImg: 'img/players/Marko_Gobeljic_77.png' },
    { name: 'Milan ', lastName: 'Pavkov ', number: 9, playerImg: 'img/players/Milan_Pavkov_9.png' },
    { name: 'Milan ', lastName: 'Rodic ', number: 23, playerImg: 'img/players/Milan_Rodic_23.png' },
    { name: 'Milos ', lastName: 'Degenek ', number: 5, playerImg: 'img/players/Milos_Degenek_5.png' },
    { name: 'Nemanja ', lastName: 'Milunovic ', number: 19, playerImg: 'img/players/Nemanja_Milunovic_19.png' },
    { name: 'Njegos ', lastName: 'Petrovic ', number: 20, playerImg: 'img/players/Njegos_Petrovic_20.png' },
    { name: 'Radovan ', lastName: 'Pankov ', number: 6, playerImg: 'img/players/Radovan_Pankov_6.png' },
    { name: 'Ricmond ', lastName: 'Boaci ', number: 14, playerImg: 'img/players/Ricmond_Boaci_14.png' },
    { name: 'Srdjan ', lastName: 'Babic ', number: 15, playerImg: 'img/players/Srdjan_Babic_15.png' },
    { name: 'Veljko ', lastName: 'Nikolic ', number: 22, playerImg: 'img/players/Veljko_Nikolic_22.png' }
];

var firstSquad = document.getElementById('sectionOne');
var substitutes = document.getElementById('sectionTwo');



function createPlayer(player) {
    var div = document.createElement('div');
    var img = document.createElement('img');


    img.setAttribute('src', player.playerImg);

    //Setting Classes
    div.className = 'div-class';
    img.className = 'img-class';


    //
    var name = document.createTextNode(player.name);
    var lastName = document.createTextNode(player.lastName);
    var number = document.createTextNode(player.number);

    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(lastName);
    div.appendChild(number);

    return div;
}

function getRandomNumber(limit) {
    var number = limit * Math.random();
    number = Math.floor(number);
    return number;
}


function getPlayer(players) {
    while (players.length) {
        var ranNum = getRandomNumber(players.length);
        var player = players[ranNum];

        if (players.length > 4) {
            firstSquad.appendChild(createPlayer(player))
        } else {
            substitutes.appendChild(createPlayer(player))
        }

        players.splice(ranNum, 1);
    }
}


getPlayer(players);