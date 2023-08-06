const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//Starting color
document.body.style.backgroundColor = "#B3ECFF";
color.textContent = "#B3ECFF";

btn.addEventListener('click', function() {
    const currentHex = color.textContent;
    const newHexColor = getDifferentHexColor(currentHex);
    document.body.style.backgroundColor = newHexColor;
    color.textContent = newHexColor;
})

function getDifferentHexColor(currentHex) {
    const hexColors = new Set();
    hexColors.add(currentHex);
    while(hexColors.size !== 2) {
        hexColors.add(createRandomHexColor());
    }
    return [...hexColors][1];
}

function createRandomHexColor() {
    //Generate a string that consists of a # followed by 6 items of the hex array above
    let hexColor = '#';
    for(let i = 0; i < 6; i++) {
        hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    return hexColor;
}