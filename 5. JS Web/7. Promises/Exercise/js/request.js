// export const getJoke = function () {

// let joke = new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.open("GET", "https://api.chucknorris.io/jokes/random");
//     request.onload = () => {
//         if (request.status === 200) {
//             resolve(JSON.parse(request.responseText));
//         } else {
//             reject(JSON.parse(request.responseText).message);
//         }
//     }
//     request.send();
// });
// return joke;

//////////////////FETCH/////////////////////////

export const getJoke = function () {
    return fetch("https://api.chucknorris.io/jokes/random")
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error(response.json().message)
            }
        })
}

