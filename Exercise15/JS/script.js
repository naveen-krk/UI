import videoData from "../video.json" assert { type: "json" };
import posterData from "../posters.json" assert { type: "json" };
let videoContainer = document.getElementById("video");
let videoTitle = document.getElementById("title");
let videoDescription = document.getElementById("description");
let commentDescription = document.querySelector(".comment-container");
let video = document.createElement("video");
video.src = videoData.videoUrl;
video.setAttribute("width", "100%");
video.controls = true;
video.poster =
  "https://www.slashcam.de/images/news/sprite_fright1-16857_PIC1.jpg";
videoContainer.appendChild(video);
let title = document.createElement("span");
title.setAttribute("class", "video-title");
title.innerText = videoData.title;
videoTitle.appendChild(title);
let description = document.createElement("p");
description.setAttribute("class", "title-description");
description.innerText = videoData.description;
videoDescription.appendChild(description);

//comments
let commentMainContainer = document.getElementById("commentContainer");
//iterating to display comments
for (let index of videoData.comments) {
  let wholeComments = document.createElement("div");
  wholeComments.setAttribute("class", "whole-comments");
  let imagePoster = document.createElement("div");
  imagePoster.setAttribute("class", "image-poster");
  let image = document.createElement("img");
  image.setAttribute("class", "image");
  image.setAttribute("src", index.image);
  imagePoster.append(image);
  wholeComments.append(imagePoster);
  let imageComment = document.createElement("div");
  imageComment.setAttribute("class", "image-comment");
  let imageName = document.createElement("h3");
  imageName.setAttribute("class", "image-name");
  imageName.append(index.name);
  imageComment.append(imageName);
  let imageReview = document.createElement("p");
  imageReview.setAttribute("class", "image-review");
  imageReview.append(index.comment);
  imageComment.append(imageReview);
  wholeComments.append(imageComment);
  commentDescription.append(wholeComments);
}
//iterating to display upcoming projects
let projectContainer = document.getElementById("posters");
posterData.forEach((data) => {
  let image = document.createElement("img");
  image.src = data.imageUrl;
  image.alt = data.title;
  projectContainer.appendChild(image);
});
