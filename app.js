const colors = ["Purple", "LightBlue", "Green", "Yellow", "Orange", "Red", "Pink", "White"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//Starting color
document.body.style.backgroundColor = "Pink";
color.textContent = "Pink";

btn.addEventListener('click', function() {
    //Get random number between 0 - 3
    const randomNumber = getRandomNumer();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumer() {
    return Math.floor(Math.random()*colors.length);
}