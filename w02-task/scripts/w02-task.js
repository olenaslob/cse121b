/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Olena Slobodeniuk';
const currentYear = new Date().getFullYear();
const profilePicture = "images/me.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('[data-profile-image="yourAttributeValue"]');

/* Step 4 - Adding Content */
nameElement.innerHTML = '<strong>${fullName}</strong>';
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);

const altText = `Profile image of ${fullName}`;
imageElement.setAttribute("alt", altText);

/* Step 5 - Array */






