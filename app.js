const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.getElementById('color');

btn.addEventListener('click', function() {
    //Get random number between 0 - 3
    const randomNumber = getRandomNumer();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumer() {
    return Math.floor(Math.random()*colors.length);
}