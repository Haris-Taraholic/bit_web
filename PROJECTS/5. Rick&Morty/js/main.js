import { getCharacters } from "./getCharacters.js"
import { creating } from "./createCharacterDiv.js"

getCharacters.then((data) => {
    creating(data.results);
}).catch((error) => {
    alert(error.message)
});

