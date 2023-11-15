// NUMBER 1
const button = document.querySelector('button');

button.addEventListener('click', function () {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

// NUMBER 2
function showCoords(event) {
    let cX = event.clientX;
    let cY = event.clientY;
    let sX = event.screenX;
    let sY = event.screenY;
    let coords1 = "clientX: " + cX + ", clientY: " + cY;
    let coords2 = "screenX: " + sX + ", screenY: " + sY;
    document.getElementById("coordinates").innerHTML = coords1 + "<br>" + coords2;
  }


// NUMBER 3
const input = document.getElementById("anything");
input.addEventListener('change', function (e) {
        alert('CHANGES MADE!')
    })