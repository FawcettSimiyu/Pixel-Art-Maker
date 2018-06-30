// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//Defining variable
let canvas = document.getElementById("pixelCanvas");
let height = document.getElementById("inputHeight");
let width = document.getElementById("inputWeight");
let sizePicker = document.getElementById("sizePicker");
let color = document.getElementById("colorPicker");

color.addEventListener("click", function(){});
//select size input
sizePicker.onsubmit = function(event){
    event.preventDefault();
    clearGrid();
    makeGrid();
};
//building the table (Rows and Columns)

function makeGrid() {
    for (let r=0; r<height.value; r++){
        const row = canvas.insertRow(r);
        for (let c=0; c<width.value; c++){
            const cell = row.insertCell(c);
            cell.addEventListener("click", fillSquare);
        }
    }
}

function clearGrid(){
    while (canvas.firstChild){
         canvas.removeChild(canvas.firstChild);
    }
}
//Selecting color input as required by the user
function fillSquare () {
    this.setAttribute("style", `background-color: ${color.value}`);
}