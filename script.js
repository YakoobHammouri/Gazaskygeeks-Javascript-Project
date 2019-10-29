function ChangeDivColor(obj) {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgbcolor = "rgb(" + r + "," + g + "," + b + ")";
    obj.setAttribute('style', 'background:' + rgbcolor);
}

function ClearGrid() {
    const mainDiv = document.querySelector('#MainDiv');
    while (mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.firstChild);
    }
}

function CreateGrid(squaresPerSide) {

    const mainDiv = document.querySelector('#MainDiv');

    // convert the variable to number , to make sure that the Val in variable it is Number
    let temp = Number(squaresPerSide.toString())
    let count = temp * temp;
    let gridTemplateColumns = "";

    for (let j = 0; j < temp; j++) {
        gridTemplateColumns += "auto "
    }
    mainDiv.setAttribute('style', 'grid-template-columns:' + gridTemplateColumns + ';');

    for (let i = 0; i < count; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.setAttribute('onmouseover', 'ChangeDivColor(this)');
        mainDiv.appendChild(div);



    }

}

function ClearAndNewCreateGrid() {
    let temp = prompt("Please enter the number of squares per Row  to make the new grid", "16");
    if (temp != null) {
        ClearGrid();
        CreateGrid(temp);
    }
}

