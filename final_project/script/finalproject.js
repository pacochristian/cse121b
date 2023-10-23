im_array = [
    "cat.jpg",
    // "dinosaure.png",
    "forest.jpg",
    "Paco.jpg"
];

function random_image(){
    random = Math.floor(Math.random() * im_array.length);
    imges = im_array[random]
    document.getElementById("images").src = `/Images/${imges}`
}