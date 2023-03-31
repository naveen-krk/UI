function openNew() {
  document
    .getElementsByClassName("add-notes")[0]
    .setAttribute("style", "display: block");
  document
    .getElementsByClassName("left-side")[0]
    .setAttribute("style", "display:block");
    document
    .getElementsByClassName("data")[0]
    .setAttribute("style", "display:none");
}

document
  .getElementsByClassName("title")[0]
  .addEventListener("click", displayForm);
document
  .getElementsByClassName("content")[0]
  .addEventListener("click", displayForm);
document
  .getElementsByClassName("input-form")[0]
  .addEventListener("click", displayInput1);
document
  .getElementsByClassName("input-form")[1]
  .addEventListener("click", displayInput2);
  document
  .getElementsByClassName("close")[0]
  .addEventListener("click", backToHome);
  document
  .getElementsByClassName("left-side")[0]
  .addEventListener("click", backToHome);
  // to open content page
  // document
  // .getElementsByClassName("data")[0]
  // .addEventListener("click", function() {
  //   openNewPage(newpageid);
  // });
  document
  .getElementsByClassName("delete")[0]
  .addEventListener("click", function() {
    window.open("confirm.html")
  });
  function openNewPage(newpageid){
    
  }

function displayForm() {
  document
    .getElementsByClassName("form")[0]
    .setAttribute("style", "display: block");
  document
    .getElementsByClassName("title")[0]
    .setAttribute("style", "display: none");
  document
    .getElementsByClassName("content")[0]
    .setAttribute("style", "display: none");
}
function displayInput1() {
  document
    .getElementsByClassName("input-form")[0]
    .setAttribute("style", "display:none");
  document
    .getElementsByTagName("input")[0]
    .setAttribute("style", "display: block");
}
function displayInput2() {
  document
    .getElementsByClassName("input-form")[1]
    .setAttribute("style", "display:none");
  document
    .getElementsByTagName("input")[1]
    .setAttribute("style", "display: block");
}
let bgColors;
let colorNames;
document
  .getElementsByClassName("pink")[0]
  .addEventListener("click", function () {
    color("#ebccec","pink");
  });
document
  .getElementsByClassName("white")[0]
  .addEventListener("click", function () {
    color("#fcfcfc","white");
  });
document
  .getElementsByClassName("orange")[0]
  .addEventListener("click", function () {
    color("#ffca72","orange");
  });
document
  .getElementsByClassName("green")[0]
  .addEventListener("click", function () {
    color("#e4ed91","green");
  });
document
  .getElementsByClassName("peach")[0]
  .addEventListener("click", function () {
    color("#e9b4b4","peach");
  });
function color(bgcolors,colorname){
    bgColors=bgcolors;
    colorNames=colorname;
    document.getElementsByClassName("pink")[0].childNodes[0].style.display="none";
    document.getElementsByClassName("white")[0].childNodes[0].style.display="none";
    document.getElementsByClassName("green")[0].childNodes[0].style.display="none";
    document.getElementsByClassName("orange")[0].childNodes[0].style.display="none";
    document.getElementsByClassName("peach")[0].childNodes[0].style.display="none";
    document.getElementsByClassName(colorNames)[0].childNodes[0].style.display="inline-block";

}
function backToHome(){
    document
    .getElementsByClassName("add-notes")[0]
    .setAttribute("style", "display: none");
  document
    .getElementsByClassName("left-side")[0]
    .setAttribute("style", "display:none");
    document
    .getElementsByClassName("data")[0]
    .setAttribute("style", "display:block");
}

document
  .getElementsByClassName("yes-close")[0]
  .addEventListener("click", yesClose());
function yesClose(){
    document
    .getElementsByClassName("confirm")[0]
    .setAttribute("style", "display: none");
    document
    .getElementsByClassName("add-notes")[0]
    .setAttribute("style", "display: none");
  document
    .getElementsByClassName("left-side")[0]
    .setAttribute("style", "display:none");
}

document.getElementsByClassName("add")[0].addEventListener("click", addContent);
function addContent(){
  let title=document.getElementById("title").value;
  let content=document.getElementById("content").value;
}
// for (let i = 0; i < localStorage.length; i++) {
//   const noteKey = localStorage.key(i);
//   createNoteElement(noteKey);
// }
// let dataTemp=JSON.parse(localStorage.getItem("data"));
// const tempLength=dataTemp.length ;
// let modtemp=10;
// if(tempLength<=10){
// for(var i=0;i<tempLength;i++){
//   createNoteElement(i);
// }
// }else{
//   for(var i=0;i<(tempLength%modtemp);i++){
//     createNoteElement(i);
//   }
// }
let dataTemp=JSON.parse(localStorage.getItem("data"));
const tempLength=dataTemp.length ;
let modtemp=10;
if(tempLength<=10){
  for(var i=0;i<tempLength;i++){
    createNoteElement(i);
  }
  }else{
    for(var i=0;i<modtemp;i++){
      createNoteElement(i);
    }
  }
  // if(tempLength>10){
  //   document
  //   .getElementsByClassName("data")[0]
  //   .setAttribute("style", "display:none");
  // }
// for(var i=0;i<(tempLength%modtemp);i++){
//       createNoteElement(i);
//     }
let data = {
  current_date:"",
  bgColors:"",
  contentText:"",
  titleText:"",
  key:""
}
var value = [];
let localData = {};
// var keynum=1;
document.getElementsByClassName("add")[0].addEventListener('click', () => {
  document
  .getElementsByClassName("data")[0]
  .setAttribute("style", "display:block");
  const titleText = document.getElementById("title").value;
  const contentText = document.getElementById("content").value;
  var today = new Date();
  var year = today.getFullYear();
var date=today.getDate();
let ms = today.getMilliseconds();
let month=today.toLocaleString('default', { month: 'short' });
let localData = JSON.parse(localStorage.getItem("data"));
console.log(localData)

if(localData == null){
  localStorage.setItem("data", JSON.stringify(value));
}else{
  value =localData;
}
  var current_date = month+" "+date+","+year;
    keynum=(current_date+month+ms);
  // value.unshift(current_date);
  // value.unshift(bgColors);
  // value.unshift(contentText);
  // value.unshift(titleText);
  data.current_date = current_date;
  data.bgColors = bgColors;
  data.contentText = contentText;
  data.titleText = titleText;
  data.key=keynum;
  value.unshift(data);

localStorage.setItem("data", JSON.stringify(value));
  titleText.value = ''; 
  // createNoteElement(keynum);
  contentText.value = ''; 
  location.reload();
  // keynum=keynum+1;
  // buttonDiv_del.setAttribute('diaplay','block');
});

function createNoteElement(keynum) {
  let items=localStorage.getItem("data")
  const temp = JSON.parse(items);
const noteElement = document.createElement('div');
noteElement.classList.add('article-title');
noteElement.innerText = temp[keynum].titleText;
const contentElement= document.createElement('div');
contentElement.classList.add('article-content');
contentElement.innerText = temp[keynum].contentText;
const article = document.createElement('div');
article.classList.add('article');
// article.setAttribute(‘id’,‘para-1’);
let temparticle=temp[keynum].key;
article.id=temparticle;
const timeElement = document.createElement('div');
timeElement.classList.add('time');
// const articleContainer = document.createElement('div');
// let temparticle=temp[keynum].key;
// articleContainer.classList.add("temparticle");
timeElement.innerText = temp[keynum].current_date;
article.appendChild(noteElement);
article.appendChild(timeElement);
article.appendChild(contentElement);
// articleContainer.appendChild(article);
article.style.backgroundColor=temp[keynum].bgColors;
document.getElementsByClassName("data")[0].appendChild(article);

console.log("call");



// const deleteButton = document.createElement('button');
// deleteButton.setAttribute('id','delete');
// deleteButton.innerText = 'Delete';
// deleteButton.addEventListener('click', () => {
// localStorage.removeItem(key);
// localStorage.removeItem(contentkey);
// firstSectionDiv.removeChild(noteElement);
// });
// noteElement.appendChild(deleteButton);


}

document.querySelectorAll(".article").forEach(element => {
  console.log(element);
  element.addEventListener("click" , (e) => {
let id = e.target.id;
console.log(id);


JSON.parse(localStorage.getItem("data")).forEach((i , index)=> {
  if(i.key == id){
    localData = i;
    localData.index = index;
  }
})
console.log(localData);
document.getElementsByClassName("articletitle")[0].innerHTML=localData.titleText;
document.getElementsByClassName("articletime")[0].innerHTML=localData.current_date;
document.getElementsByClassName("articlecontent")[0].innerHTML=localData.contentText;
document
    .getElementsByClassName("data")[0]
    .setAttribute("style", "display:none");
    document
    .getElementsByClassName("articleData")[0]
    .setAttribute("style", "display:block");
});

document
    .getElementsByClassName("edit-article")[0]
    .setAttribute("style", "display:block");
    document
    .getElementsByClassName("delete")[0]
    .setAttribute("style", "display:none");
    document
    .getElementsByClassName("new")[0]
    .setAttribute("style", "display:none");
    document
    .getElementsByClassName("delete-article")[0]
    .setAttribute("style", "display:block");
// console.log(localData);
  })
  

// const newpageid=0;
//   const buttonGroup = document.getElementsByClassName("data")[0];
//   const result = document.getElementById("result");
  
//   const buttonGroupPressed = e => { 
    
//     const isButton = e.target.nodeName === 'DIV';
    
//     if(!isButton) {
//       return
//     }
    
//     newpageid=e.target.id
    
//   }
//   buttonGroup.addEventListener("click", buttonGroupPressed);
  

// const deleteSingle = () => {
//   let value =JSON.parse( localStorage.getItem("data"));
//   value  = value.splice(index , 1);
//   localStorage.setItem("data" , JSON.stringify(value));


// }

document.getElementsByClassName("article-delete")[0].addEventListener("click" , () => {
  console.log(localData.index);
  let value =JSON.parse( localStorage.getItem("data"));
  value.splice(localData.index , 1);
  localStorage.setItem("data" , JSON.stringify(value));
  document
    .getElementsByClassName("edit-article")[0]
    .setAttribute("style", "display:none");
    document
    .getElementsByClassName("delete")[0]
    .setAttribute("style", "display:block");
    document
    .getElementsByClassName("new")[0]
    .setAttribute("style", "display:block");
    document
    .getElementsByClassName("delete-article")[0]
    .setAttribute("style", "display:none");
    document
    .getElementsByClassName("data")[0]
    .setAttribute("style", "display:block");
    document
    .getElementsByClassName("articleData")[0]
    .setAttribute("style", "display:none");
})