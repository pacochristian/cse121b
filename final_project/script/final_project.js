
var img = [
    `/Images/Cat.jpg`,
    `/Images/Paco.jpg`,
    `/Images/forest.jpg`,
]


var random = document.getElementById('pic');
var imCount = img.length
var number = Math.floor(Math.random() * imCount);

window.onload = function(){
    random.style.backgroundImage = `url(`+img[number]+`)`
}

function resize(){
    var resize_width = 600;
}
// function getImages(){
//     // document.getElementById(`pic`).src = img[2];
//     window.location.reload();
// alert(number);
// }