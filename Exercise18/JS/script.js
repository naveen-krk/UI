const videoLink="https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0";
const posterLink="https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346";
$.when(
    $.getJSON(videoLink),
    $.getJSON(posterLink),
).done(function(a,b)
{
    const video=a[0];
    const poster=b[0];
    const videoRoll=$(`<video class="video"></video> `);
    videoRoll.attr('src',video.videoUrl);
    videoRoll.prop('controls',true);
    $('.video').append(videoRoll);
    $('.title').append(video.title);
    $('.description').append(video.description);
    for(let index in video.comments)
    {
    let wholeComments=$(`<div class="whole-comments"></div>`);
    let imagePoster=$(`<div class="image-poster"></div>`);
    let image=$(`<img class="image"></img>`);
    image.attr('src',video.comments[index].image);
    imagePoster.append(image);
    wholeComments.append(imagePoster);
    let imageComment=$(`<div class="image-comment"></div>`);
    let imageName=$(`<h3 class="image-name"></h3>`);
    imageName.append(video.comments[index].name);
    imageComment.append(imageName);
    let imageReview=$(`<p class="image-review"></p>`);
    imageReview.append(video.comments[index].comment);
    imageComment.append(imageReview);
    wholeComments.append(imageComment);
    $('.comment-container').append(wholeComments)
    }
    for(let i in poster){
        let bannerImage=$(`<img>`);
        bannerImage.attr('src',poster[i].imageUrl);
        $('.posters').append(bannerImage);
    }
});