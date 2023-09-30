/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers () {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2)
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

function substract (number1, number2) {
    return number1 - number2;
}

function substractNumbers () {
    let substractNumber1 = Number(document.querySelector('#subtract1').value);
    let substractNumber2 = Number(document.querySelector('#subtract2').value);
    let substractNumber3 = Number(document.querySelector('#substractNumbers').value);
    let substractNumber4 = Number(document.querySelector('#difference').value);
    document.querySelector('#subtractNumbers').value = substractNumbers(substractNumber1, substractNumber2)
    document.querySelector('#subtractNumbers').value = substractNumbers(substractNumber3, substractNumber4)
}
document.querySelector('#substractNumbers').addEventListener('click', substractNumbers);
/* Arrow Function - Multiply Numbers */


/* Open Function Use - Divide Numbers */


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
