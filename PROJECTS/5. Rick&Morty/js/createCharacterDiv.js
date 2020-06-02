
const createImage = (imgUrl) => {
    const image = document.createElement('img');
    image.setAttribute('src', imgUrl.image);
    return image;
}
const createName = (charraName) => {
    const name = document.createElement("h3");
    const textName = document.createTextNode(charraName.name);
    name.appendChild(textName);
    return name;
}
const liked = (event) => {
    const button = document.querySelector('button')
    event.target.classList.add('active')
    let allDivs = document.querySelectorAll(".charachterDiv");
    setLike(event.target)

}

const setLike = (likeDiv) => {
    const likedItems = localStorage.getItem('liked');
    JSON.stringify(likedItems);
    const likedData = likedItems || [];
    JSON.parse(likedData);
    localStorage.setItem('liked', likedData)
}
const createButton = () => {
    const textBtn = document.createTextNode("Like");
    const btn = document.createElement('button');
    btn.appendChild(textBtn);
    btn.classList.add("likeBtn");
    btn.addEventListener('click', liked)
    return btn
}

export const creating = function (charachter) {
    const mainDiv = document.querySelector('.characters');
    for (let i = 0; i < charachter.length; i++) {
        const charaDiv = document.createElement('div')
        charaDiv.classList.add('charachterDiv');
        charaDiv.appendChild(createImage(charachter[i]));
        charaDiv.appendChild(createName(charachter[i]));
        charaDiv.appendChild(createButton());
        charaDiv.setAttribute("data-id", charachter[i].id);
        mainDiv.appendChild(charaDiv);

    }
}