/* W05: Programming Tasks */

/* Declare and initialize global variables */


/* async displayTemples Function */




/* async getTemples Function using fetch()*/


/* reset Function */


/* sortBy Function */




/* Event Listener */
// Step 1: Declare global variables
const templesElement = document.querySelector('#temples');
const templeList = [];

// Step 2: Define the displayTemples function
const displayTemples = (temples) => {
  templesElement.innerHTML = ''; // Clear the templesElement

  temples.forEach((temple) => {
    // Create an HTML article element
    const article = document.createElement('article');

    // Create an HTML h3 element and add the temple's name
    const h3 = document.createElement('h3');
    h3.textContent = temple.templeName;

    // Create an HTML img element and set src and alt attributes
    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.location;

    // Append the h3 and img elements to the article
    article.appendChild(h3);
    article.appendChild(img);

    // Append the article to the global templesElement
    templesElement.appendChild(article);
  });
};

// Step 3: Define the getTemples function
const getTemples = async () => {
  try {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList.push(...await response.json()); // Convert response to JSON and push to templeList
    displayTemples(templeList);
  } catch (error) {
    console.error("Error fetching temple data:", error);
  }
};

// Step 4: Define the reset function
const reset = () => {
  templesElement.innerHTML = ''; // Clear the templesElement
};

// Step 5: Define the sortBy function
const sortBy = (temples) => {
  reset();

  const filter = document.querySelector('#sortBy').value;
  
  switch (filter) {
    case 'utah':
      displayTemples(temples.filter(temple => temple.location.includes('Utah')));
      break;
    case 'nonutah':
      displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
      break;
    case 'older':
      displayTemples(temples.filter(temple => new Date(temple.dedication) < new Date(1950, 0, 1)));
      break;
    case 'all':
    default:
      displayTemples(temples);
  }
};

// Step 6: Add a change event listener for the sortBy element
document.querySelector("#sortBy").addEventListener("change", () => {
  sortBy(templeList);
});

// Step 7: Call getTemples to fetch and display the temple data
getTemples();
