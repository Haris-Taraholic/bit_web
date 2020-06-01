////////////// .then() //////////////////
// const getData = new Promise((resolve, reject) => {
//     if (2 < 1) {
//         resolve("Success");
//     } else {
//         reject("Error");
//     }
// });

// getData.then((data) => {
//     console.log(data);
// }, (error) => {
//     console.log(error);
// });

/////////////// .catch() ///////////////

// const getData = new Promise((resolve, reject) => {
//     if (2 < 1) {
//         resolve("Success");
//     } else {
//         reject("Error");
//     }
// });

// getData.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// });

/////////////////// Promise //////////////////////

const getData = new Promise((resolve, reject) => {

    const req = new XMLHttpRequest();

    req.open("GET", "https://api.chicknorris.io/jokes/random");

    req.onload = () => {
        if (req.status === 200) {

        }

        // console.log(JSON.parse(req.responseText));
    }

});

getData.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});





req.send();