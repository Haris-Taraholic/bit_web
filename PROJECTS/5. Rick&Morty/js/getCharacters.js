export const getCharacters = function () {
    return fetch("https://rickandmortyapi.com/api/character")
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error(response.json().message)
            }
        })
}();

