/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Paco KIFOUETO",
    photo: "Images/Paco.jpg",
    favoriteFoods: [
        'Saka saka', 
        'Beans',
        'rice'
    ],
    hobbies: [
        'listening to music',
        'watching movies',
        'playing the piano'
    ],
    placesLived: [],
};


/* Populate Profile Object with placesLive objects */


myProfile.placesLived.push(
    {
        place: 'Pointe Noire, (Congo Brazzaville)',
        length: '30 years',
        place: 'Brazzaville, (Congo Brazzaville)',
        length: '1 week',
    }
);


/* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;

// const imageElement = document.querySelector('img');

// let photo = document.querySelector('#photo');
photo.setAttribute('src', myProfile.photo);
photo.setAttribute('alt', myProfile.name);

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});
myProfile.hobbies.forEach(hobbies => {
    let li = document.createElement('li');
    li.textContent = hobbies;
    document.querySelector('#hobbies').appendChild(li);
});

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


