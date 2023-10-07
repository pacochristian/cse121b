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
    placeLived: [],
};


/* Populate Profile Object with placesLive objects */


myProfile.placeLived.push(
    {
        place: 'Pointe Noire, (Congo Brazzaville)',
        length: '30 years',
        place: 'Brazzaville, (Congo Brazzaville)',
        length: '1 week',
    }
);


/* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;

const imageElement = document.querySelector('img');

// let photo = document.querySelector('#photo');
photo.setAttribute('src', myProfile.photo);
name.tAttribute('alt', myProfile.name);

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


