//<<<<<<< HEAD
/* LESSON 4 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Olena Slobodeniuk", // Replace with your name
    photo: "images/placeholder.png", // Replace with the image's path and name
    favoriteFoods: [
      'Rice',
      'Banana bread',
      'Ravioli'
    ],
    hobbies: [
      'Reading',
      'Coding',
      'Watching movies'
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
  {
    place: 'Rivne, Ukraine',
    length: '41 years'
  },
  // Adding more places here
  {
    place: 'Thoiry, France',
    length: '1 year'
  },

  {
    place: 'Calgary, Canada',
    length: '1 year'
  },

);
//=======
/* LESSON 3 - Programming Tasks */

/* Profile Object  */




/* Populate Profile Object with placesLive objects */



//>>>>>>> d5c822e72a35a05c02bb9bacaaee56f20fa47301

/* DOM Manipulation - Output */

/* Name */
//<<<<<<< HEAD
// Assign the value of the name property to the HTML element with ID 'name'
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
// Assign the value of the photo property to the src attribute of the HTML <img> element
document.querySelector('#photo').src = myProfile.photo;

// Assign the value of the name property as the alt attribute of the HTML <img> element
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
// Create and append list items for favorite foods
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
// Create and append list items for hobbies
myProfile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
// Create and append list items for places lived
myProfile.placesLived.forEach(place => {
  let dt = document.createElement('dt');
  dt.textContent = place.place;
  let dd = document.createElement('dd');
  dd.textContent = place.length;
  
  let dl = document.querySelector('#places-lived');
  dl.appendChild(dt);
  dl.appendChild(dd);
});
//=======

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */

//>>>>>>> d5c822e72a35a05c02bb9bacaaee56f20fa47301