// var b = function () {
//     console.log(navigator.platform);
//     console.log(navigator.appVersion);
//     console.log(navigator.vendor);
// }///////////////////////////////////////////////////////
// var isOnline = function () {
//     if (navigator.onLine) {
//         console.log("ONLINE");
//     } else {
//         console.log("DINOSAUR GAME");
//     }
// }////////////////////////////////////////////////////////////////////////////////
// var screenInfo = function () {
//     console.log('Current height : ' + screen.availHeight + 'px\t' + 'Current width : ' + screen.availWidth + 'px');
//     console.log('Max Height is ' + screen.height + 'px');
// }
/////////////////////////////////////////////////////////////////////////
// var locationFile = function () {
//     console.log(location.href);
//     console.log(location.hostname);
//     console.log(location.protocol);
//     console.log(location.search);
// }
// locationFile();
//////////////////////////////////////////////////////////////
// var reload = function () {
//     for (var i = 0; i < 100000; i++) {
//         console.log(i);

//         if (i = 99999) {
//             console.log('Now its gonna reload');

//             location.reload();
//         }
//     }
// }
// reload();
// console.log('DID IT RELOAD?');
//////////////////////////////////////////////////////////////////////////
// var forward = function () {
//     history.forward();


// }
// var goBack = function () {
//     history.back();
// }
// 
///////////////////////////////////////////////////////////////////
// var gotoPage = function () {
//     location.href = 'https://www.google.rs';
// }
// gotoPage();
/////////////////////////////////////////////////////////////
// var store = function (name, surname) {
//     localStorage.setItem('name', name);
//     localStorage.setItem('surname', surname)
// }
// var read = function () {
//     if (localStorage.getItem('name')) {
//         console.log(localStorage.getItem('name'));
//     }
//     else {
//         console.log('THERE IS NO SUCH ITEM');

//     }
//     console.log(localStorage.getItem('surname'));



// }
// var remove = function (item) {
//     localStorage.removeItem(item);
// }
// store('Aleksa', 'Djukic');
// read();
// console.log(localStorage.length);
// remove('name');
// read();
// console.log(localStorage.length, localStorage.getItem('surname'));

var message = function () {
    alert('WELCOME TO OUR HUMBLE PAGE');
    var answer = prompt('What are you doing on our page?');
    var check = confirm('We will submit this answer now : ' + answer);
    if (check) {
        alert('SUCCESS');
    } else setTimeout(message())
}

setTimeout(message, 3000);




// //NAVIGATION
// b();
// //Online status
// isOnline();
// //SCREAN INFO
// screenInfo();
//Location
// locationFile();
//HISTORY
// goBack();
// forward();