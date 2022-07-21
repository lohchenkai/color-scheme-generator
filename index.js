/*
https://www.thecolorapi.com/scheme?hex=0047AB
count = 6 ??
*/

//getting DOM elements
const form = document.querySelector("form");
const colorInput = document.querySelector(".form-color-input");
const modeInput = document.querySelector(".form-mode-input");
const colorContainer = document.querySelector(".color-container");

//function to return color div elements from an array of colors
function getColoredDiv(arr){
    return arr.map(color =>  `<div class="color-div" style="background-color:${color}"}> <div class="color-div-text">${color}</div></div>`).join("");
}

function render(element){
    colorContainer.innerHTML = element;
}

function handleSubmit(event) {
    //prevent form from refreshing upon submit
    event.preventDefault();
    //query parameters for api call
    const choosenColor = colorInput.value.slice(1);
    const colorCount = 5;
    const mode = modeInput.value;

    //fetching data from color api
    fetch(`https://www.thecolorapi.com/scheme?hex=${choosenColor}&count=${colorCount}&mode=${mode}`)
        .then(response => response.json())
        .then(data => {
            //colors container
            const colorContainer = [];
            //populating colorContainer with an array of returned color from api
            data.colors.map(color => colorContainer.push(color.hex.value))
            //converting colorContainer to DOM elements
            const element = getColoredDiv(colorContainer);
            //render all colors
            render(element);
        })
}

form.addEventListener("submit", handleSubmit);