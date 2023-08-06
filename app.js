const colors = ["Purple", "LightBlue", "Green", "Yellow", "Orange", "Red", "Pink", "White"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//Starting color
document.body.style.backgroundColor = "Pink";
color.textContent = "Pink";

btn.addEventListener('click', function() {
    //Find the index of the current background color
    const currentColor = color.textContent;
    const currentNumber = colors.indexOf(currentColor);
    //Find a different random index number
    const randomNumber = getDifferentRandomNumer(currentNumber);
    const randomColor = colors[randomNumber];
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
})

function getDifferentRandomNumer(currentNumber) {
    //Check current color and find a different random number, to prevent getting the same color twice
    const nums = new Set();
    nums.add(currentNumber);
    while(nums.size !== 2) {
        nums.add(Math.floor(Math.random() * colors.length));
    }
    return [...nums][1];
}