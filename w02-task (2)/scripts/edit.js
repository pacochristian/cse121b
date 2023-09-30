// // /* W02-Task - Profile Home Page */

// // /* Step 1 - Setup type tasks - no code required */

// // /* Step 2 - Variables */

// // let fullName = "Paco KIFOUETO";
// // let currentYear = new Date().getFullYear();
// // profilePicture = "images/Paco.jpg";

// // /* Step 3 - Element Variables */

// // const nameElement = document.getElementById("name");
// // // document.getElementById("name").innerHTML = "<strong>${fullName}</strong>";
// // // document.getElementById("name").innerHTML = "<strong>${fullName}</strong>";
// // const foodElement = document.getElementById("food");
// // const yearElement = document.querySelector("#year")
// // const imageElement = document.querySelector("img['images/Paco.jpg']");
// // // document.createElement("img");
// // // img.src = scr;
// // // img.src = "images/Paco.jpg";
// // // document.body.appendChild(img);


// // /* Step 4 - Adding Content */

// // nameElement.innerHTML = "<strong>${fullName}</strong>";
// // currentYear.textcontent = currentYear;
// // imageElement.setAttribute("src", profilePicture);
// // imageElement.setAttribute("alt", 'Profile image of {fullName}');

// // /* Step 5 - Array */

// // const favoriteFood = ["Saka saka", "Beans and rice"];
// // const favoriteFoods = ["Saka saka", "Beans and rice"];
// // const favoite = favoriteFoods.push(favoriteFoods);


// let fullName = 'Paco KIFOUETO';
// // let currentYear = new Date().getFullYear();
// let currentYear = "2023";
// let profilelPicture = 'images/Paco.jpg';


// const nameElement = document.getElementById('name');
// const foodElement = document.getElementById('food');
// const yearElement = document.querySelector('#year');
// // const imageElement = document.querySelector("img[src = 'images/Paco.jpg']");
// const imageElement = document.querySelector('img');


// nameElement.innerHTML = '<strong>${fullName}</strong>';
// currYear.textcontent = currentYear;
// img.setAttribute('src', profilelPicture);
// img.setAttribute('alt', 'Profile image of ${fullName}');


// let favoriteFood = ['Saka saka', 'Beans and rice'];
// // let favoriteFoods = ['Peanut sauce'];
// let favoriteFoods = 'Peanut sauce';
// const favorites = favoriteFood.joint(',');
// favoriteFood.push(favoriteFoods);
// foodElement.innerHTML += '<br>${favoriteFood}';
// favoriteFood.splice(0, 1);
// const removeFirst = favoriteFood.shift();
// favoriteFood.push(favoriteFoods);
// foodElement.innerHTML += '<br>${favoriteFood}';
// favoriteFood.pop();
// favoriteFood.push(favoriteFoods);






/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
// let fullName = 'Paco KIFOUETO';
// let currentYear = "2023";
// let profilePicutre = `images/Paco.jpg`;

// /* Step 3 - Element Variables */
// const nameElement = document.getElementById('name');
// const foodElement = document.getElementById('food');
// const yearElement = document.querySelector('#year');
// const imageElement = document.querySelector('img');

// /* Step 4 - Adding Content */
// nameElement.innerHTML = `<strong>${fullName}</strong>`;
// yearElement.textContent= currentYear;
// imageElement.setAttribute('src', profilePicutre);
// imageElement.setAttribute('alt', `Profile image of ${fullName}`);


// /* Step 5 - Array */
// let favoriteFoods = ['Saka saka', 'Beans', 'rice']
// let favFood = ['Peanut sauce'];
// favoriteFoods.push(favFood);
// foodElement.innerHTML += `<br>${favoriteFoods}`;
// favoriteFoods.splice(0, 1);
// foodElement.innerHTML += `<br>${favoriteFoods}`;
// favoriteFoods.pop();
// foodElement.innerHTML += `<br>${favoriteFoods}`;


// The edited one trying to understand what was wrong with my code.


let fullName = 'Paco KIFOUETO';
// let currentYear = new Date().getFullYear();
let currentYear = "2023";
let profilelPicture = 'images/Paco.jpg';
// let profilelPicture = 'Paco.jpg';


const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
// const imageElement = document.querySelector("img[src = 'images/Paco.jpg']");
const imageElement = document.querySelector('img');


nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textcontent = currentYear;
imageElement.setAttribute('src', profilelPicture);
// imageElement.setAttribute('alt', 'Profile image of ${fullName}');


let favoriteFood = ['Saka saka', 'Beans and rice', 'eggs'];
// let favoriteFoods = ['Peanut sauce'];
let favoriteFoods = 'Peanut sauce';
// const favorites = favoriteFood.joint(',');
favoriteFood.push(favoriteFoods);
foodElement.innerHTML += `<br>${favoriteFood}`;
foodElement.innerHTML += `<br>${favoriteFoods}`;
// favoriteFood.splice(0, 1);
const removeFirst = favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.push(favoriteFoods);
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood}`;

// favoriteFood.push(favoriteFoods);