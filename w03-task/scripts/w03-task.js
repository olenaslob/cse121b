/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* 2. Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
  }

  function addNumbers() {
    // Get the values of the HTML form controls and convert them to numbers
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
  }    
    // Add a click event listener to the button with ID 'addNumbers'
    document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
// Define a subtract function expression
function substract(number1, number2) {
    return number1 - number2;
  };

function subtractNumbers() {
    // Get the values of the HTML form controls and convert them to numbers
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = substract(subtractNumber1, subtractNumber2);
  };

// Add a click event listener to the button with ID 'subtractNumbers'
    document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
 // Define an arrow function for multiplication
 const multiply = (number1, number2) => number1 * number2;

 // Define an arrow function for multiplying numbers
 const multiplyNumbers = () => {
     // Get the values of the HTML form controls and convert them to numbers
     let factor1Value = Number(document.querySelector('#factor1').value);
     let factor2Value = Number(document.querySelector('#factor2').value);

     // Call the 'multiply' arrow function and assign the result to an HTML form element
     document.querySelector('#product').value = multiply(factor1Value, factor2Value);
 };

 // Add a "click" event listener to the HTML button with an ID of 'multiplyNumbers'
 document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
// Define a function declaration for division
function divide(number1, number2) {
    if (number2 === 0) {
        return "Cannot divide by zero";
    }
    return number1 / number2;
}

// Define an arrow function for dividing numbers
const divideNumbers = () => {
    // Get the values of the HTML form controls and convert them to numbers
    const dividendValue = Number(document.querySelector('#dividend').value);
    const divisorValue = Number(document.querySelector('#divisor').value);

    // Call the 'divide' function and assign the result to an HTML form element
    const result = divide(dividendValue, divisorValue);
    
    if (typeof result === 'number') {
        document.querySelector('#quotient').value = result;
    } else {
        document.querySelector('#quotient').value = result;
        alert(result); // Display an alert for division by zero
    }
};

// Add a "click" event listener to the HTML button with an ID of 'divideNumbers'
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
// Step 1: Declare and instantiate a variable to store the current date
const currentDate = new Date();

// Step 2: Declare a variable to hold the current year
let currentYear;

// Step 3: Get the current year using the getFullYear() method
currentYear = currentDate.getFullYear();

// Step 4: Assign the current year variable to the HTML form element with an ID of 'year'
document.querySelector('#year').value = currentYear;

/* ARRAY METHODS - Functional Programming */

  /* Output Source Array */
  // Step 1: Declare and instantiate an array variable with numbers 1 through 13
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  // Step 2: Assign the array variable to the HTML element with an ID of 'array'
  document.querySelector('#array').textContent = numbersArray;

  /* Output Odds Only Array */
  // Step 3: Use the filter() method to find and assign odd numbers to the HTML element with an ID of 'odds'
  const oddNumbers = numbersArray.filter(number => number % 2 === 1);
  document.querySelector('#odds').textContent = oddNumbers;

  /* Output Evens Only Array */
  // Step 4: Use the filter() method to find and assign even numbers to the HTML element with an ID of 'evens'
  const evenNumbers = numbersArray.filter(number => number % 2 === 0);
  document.querySelector('#evens').textContent = evenNumbers;

  /* Output Sum of Org. Array */
  // Step 5: Use the reduce() method to sum the array elements and assign the result to the HTML element with an ID of 'sumOfArray'
  const sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  document.querySelector('#sumOfArray').textContent = sum;

  /* Output Multiplied by 2 Array */
  // Step 6: Use the map() method to multiply each element by 2 and assign the result to the HTML element with an ID of 'multiplied'
  const multipliedArray = numbersArray.map(number => number * 2);
  document.querySelector('#multiplied').textContent = multipliedArray;
  
  /* Output Sum of Multiplied by 2 Array */
  // Step 7: Use the map() and reduce() methods to sum the array elements after multiplication and assign the result to the HTML element with an ID of 'sumOfMultiplied'
  const sumOfMultiplied = multipliedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  document.querySelector('#sumOfMultiplied').textContent = sumOfMultiplied;












