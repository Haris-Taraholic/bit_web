let showVideo = $('.showVideo');
let listVideo = $('.listVideo');
let button = $('button');
let input = document.querySelector(".search")
let key = 'AIzaSyBGhNuxbm_30VB26bn2GhDZ2iwujf1k1Gs'
let sendReq = function (query, key, loadFunction) {

    $.ajax({
        url: `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${key}`
    }).done(loadFunction);
}
let sendReqRelated = function (query, key, loadFunction) {
    console.log(key);
    console.log(query);

    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&\maxResults=6&type=video&relatedToVideoId=' + query + '&key=' + key,
        // url: `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${query}&key=${key}`,
        method: "GET"
    }).done(loadFunction);
}
let listVideos = function (data) {
    listVideo.html('');
    console.log(data);
    for (let i = 0; i < data.items.length; i++) {
        let imgUrl = data.items[i].snippet.thumbnails.medium.url;
        let title = data.items[i].snippet.title;
        let desc = data.items[i].snippet.description;

        let someDiv = $('<div>').addClass('searchResult').attr('data-id', data.items[i].id.videoId);
        let thumbnail = $('<img>').addClass('thumbnail').attr('src', imgUrl);
        let videoTitle = $('<h2>').text(title);
        let videoDesc = $('<p>').text(desc);
        $(someDiv).append(thumbnail);
        $(someDiv).append(videoTitle);
        $(someDiv).append(videoDesc);
        $(listVideo).append(someDiv);
    }
    waitForCreation();
}
function handler1(event) {
    let inputValue = input.value;
    if (event.keyCode) {
        if (event.keyCode === 13) {
            sendReq(inputValue, key, listVideos);
        }
    } else { sendReq(inputValue, key, listVideos); }

}
$(button).on('click', handler1);
$('body').on('keypress', handler1);

const playVideo = function (video) {
    let iframe = $("<iframe>");
    iframe.attr("width", 560).attr("height", 315).attr("src", `https://www.youtube.com/embed/${video}`).attr("frmeborder", 0).attr("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture").attr("allowfullscreen");
    showVideo.append(iframe);
    $(showVideo).display
    iframe.addClass("iframe");
}
function waitForCreation() {
    function handler2(event) {
        $(showVideo).html('');
        let vid = event.currentTarget;
        console.log(event.currentTarget);
        let video = vid.getAttribute("data-id");
        playVideo(video);
        sendReqRelated(video, key, listVideos);
    }
    $(".searchResult").on("click", handler2);
}

