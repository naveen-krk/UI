import {Details} from "./friends.js";
const output = document.getElementById('output');
const divList = document.createElement('div');
divList.classList.add('section');
for (let temp of Details) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('article');
  const img = document.createElement('img');
  img.setAttribute('src', temp.img);
  const detailsDiv = document.createElement('div');
  detailsDiv.classList.add('info');
  const nameParagraph = document.createElement('p');
  nameParagraph.classList.add('name');
  const nameText = document.createTextNode(temp.first_name + ' ' + temp.last_name);
  nameParagraph.appendChild(nameText);
  const emailParagraph = document.createElement('p');
  emailParagraph.classList.add('mail');
  const emailText = document.createTextNode(temp.email);
  emailParagraph.appendChild(emailText);
  detailsDiv.appendChild(nameParagraph);
  detailsDiv.appendChild(emailParagraph);
  cardDiv.appendChild(img);
  cardDiv.appendChild(detailsDiv);
  divList.appendChild(cardDiv);
}
output.appendChild(divList);
