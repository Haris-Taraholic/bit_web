
function searchYouTube() {
    const key = 'AIzaSyBmGeI3xjTi3scCeDWbR4HcVyti4IKrIv4';
    const searchBox = document.querySelector('input');
    const inputValue = searchBox.value;
    const fullUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=' + inputValue + '&key=' + key;

    const request = $.ajax({
        url: fullUrl,
        method: "GET",
    });

    request.done(function (response) {
        let array = response.items;

        for (let i = 0; i < array.length; i++) {
            let image = document.createElement('img');
            let title = document.createElement('h1');
            let desc = document.createElement('p');
            let divSingleVideo = document.createElement('div');
            let videoGallery = document.querySelector('#videoGallery');
            let getIframe = document.querySelector('iframe');

            divSingleVideo.className = 'divSingleVideo';
            divSingleVideo.setAttribute('data-id', array[i].id.videoId);

            image.setAttribute('src', array[i].snippet.thumbnails.high.url);
            title.textContent = array[i].snippet.title;
            desc.textContent = array[i].snippet.description;
            divSingleVideo.appendChild(image);
            divSingleVideo.appendChild(title);
            divSingleVideo.appendChild(desc);
            divSingleVideo.addEventListener('click', function (event) {
                let video = event.target.closest('div').dataset.id;
                console.log(event.target.closest('div'));

                getIframe.setAttribute('src', 'https://www.youtube.com/embed/' + video);
            });
            videoGallery.appendChild(divSingleVideo);

        }
    })
}




const button = document.querySelector('button');
button.addEventListener('click', searchYouTube);
