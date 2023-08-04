const hex = [0, 1, 2, 3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//Starting color
document.body.style.backgroundColor = "#B3ECFF";
color.textContent = "#B3ECFF";

btn.addEventListener('click', function() {
    //Generate a string that consists of a # followed by 6 items of the hex array above
    let hexColor = '#';
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumer()]
    };
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})

function getRandomNumer() {
    return Math.floor(Math.random() * hex.length);
}