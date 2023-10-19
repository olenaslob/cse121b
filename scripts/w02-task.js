/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
// 2.1. Declare and instantiate a variable to hold your name. Identify the variable as "fullName"
let fullName = 'Olena Slobodeniuk';

//2.2. Declare and instantiate a variable to hold the current year. Identify the variable as "currentYear".
const currentYear = new Date().getFullYear();

/*2.3. Declare and instantiate a variable to hold the file path (location) and file name of the image that you placed in the images folder as a string. 
Identify the variable as "profilePicture".
Example path: 'images/yourprofileimagename.png'
The file path will be relative to the location of the HTML document and the name and type of image matches your own image.*/
const profilePicture = "images/placeholder.png";

/* Step 3 - Element Variables */
/*3.1 Use the document.getElementById() method to get the HTML element with the id of name and store it in a const variable named "nameElement".
Check Your Understanding: const nameElement = document.getElementById('name'); */
const nameElement = document.getElementById('name');

/* 3.2 Use the document.getElementById() method to get the HTML element with the id of food and store it in a const variable named "foodElement".*/
const foodElement = document.getElementById('food');

/* 3.3 Use the document.querySelector() method to get the element with the id of "year" and store it in a variable named "yearElement".
Check Your Understanding: const yearElement = document.querySelector('#year');*/
const yearElement = document.querySelector('#year');

/* 3.4 Use any viable method to get the profile image element stored into a variable named "imageElement".
Do NOT edit the HTML markup in the HTML page.*/
const imageElement = document.querySelector('#image');

/* Step 4 - Adding Content */
/* 4.1 Assign the nameElement's innerHTML property the fullName variable value.*/
//nameElement.innerHTML = fullName;

/*4.2 Surround the fullName value with <strong> tags.
Use a template literal to create the string with HTML tags.
Check Your Understanding: nameElement.innerHTML = `<strong>${fullName}</strong>`;*/
nameElement.innerHTML = `<strong>${fullName}</strong>`;

/* 4.3 Use the textContent property to set the value of the element to the value of the variable currentYear.*/
yearElement.textContent = currentYear;

/*4.4 Use the setAttribute method to set the src property of the image element and set its value to the file path variable set in Step 2.
Check Your Understanding: imageElement.setAttribute('src', profilePicture);
Alternatively, you can use the src property directly to set the value of the image element's src property.*/
imageElement.setAttribute('src', profilePicture);

/*4.5 Use the setAttribute method to set the alt property of the image element and set its value to equal 'Profile image of [Insert Name Variable]'
 where the name variable comes from Step 2. Always use a template literal to create the string.*/
const altText = `Profile image of ${fullName}`;
imageElement.setAttribute("alt", altText);

/* Step 5 - Array */

/*5.1 Declare an array variable to hold your favorite foods*/
const favoriteFoods = ["Pizza", "Sushi", "Chocolate", "Burger"];

/*5.2 Modify the HTML element with the id of food to display your favorite foods array. 💡Remember that you set a variable named foodElement 
in Step 3 to reference the element with the id of food.*/
foodElement.textContent = favoriteFoods.join('<br>');

/*5.3 Declare and instantiate a variable to hold another single favorite food item.*/
const newFavoriteFood = "Icecream";

/*5.4 Add the value stored in this new variable to your favorite food array.
Hint: Use the array push() method to add the new item to the array.*/
favoriteFoods.push(newFavoriteFood);

/*5.5 Append the new array values onto the displayed content of the HTML element with the id of food using a += operator and a <br> (line break character) to provide a line break as shown in Figure 2.
Check Your Understanding: foodElement.innerHTML += `<br>${favFoods}`;*/
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;

/*5.6 Remove the first element in the favorite food array.*/
favoriteFoods.shift();

/*5.7 Again, append the array output showing the modified array, using a line break as shown in step 5.5.*/
foodElement.innerHTML += '`<br>${favoriteFoods.join('<br>')}`;

/*5.8 Remove the last element in the favorite food array.*/
favoriteFoods.pop();

/*5.9 Append the array output with this final modified favorite foods array. Hint: Step 5.5.*/
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;
