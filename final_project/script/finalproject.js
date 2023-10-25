// random [
//     "cat.jpg",
//     "forest.jpg",
//     "Paco.jpg",
//     "The_lion_king.jpeg"
// ]


const index = document.getElementById("pic");
const btn = document.getElementById('btn');

const random = [ 
    `cat.jpg`,
    `forest.jpg`,
    `Paco.jpg`,
    `The_lion_king.jpeg`,
];

btn.addEventListener('click', () => {
    window.location.reload();
});

randomImage();
function randomImage(){
    const random_index = Math.floor(Math.random() * random.length);
    
    if (random_index !== Number(localStorage.getItem(`index`))) {
        index.src = random[random_index];

        localStorage.setItem(`index`, randomImage);
    } else{
        randomImage();
    }
}
// function random_pic(){
//     index_images = Math.floor(Math.random() * random.length);
//     image = random[index_images]
//     document.getElementById("images").src =`/Images/${image}`
// }

// function random_pic(){
//     index_images = document.getElementById('pic');
//     img.src = "Paco.jpg";

//     index_images = Math.floor(Math.random() * random.length);
//     image = random[index_images]
//     document.getElementById("pic").src =`/Images/${image}`
// }