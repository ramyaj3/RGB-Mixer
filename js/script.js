const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");
const redValue = document.getElementById("redValue");
const greenValue = document.getElementById("greenValue");
const blueValue = document.getElementById("blueValue");
const colorDisplay = document.getElementById("colorDisplay");

function updateColorDisplay() {
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;

    redValue.textContent = red;
    greenValue.textContent = green;
    blueValue.textContent = blue;

    colorDisplay.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

redSlider.addEventListener("input", updateColorDisplay);
greenSlider.addEventListener("input", updateColorDisplay);
blueSlider.addEventListener("input", updateColorDisplay);

updateColorDisplay();
