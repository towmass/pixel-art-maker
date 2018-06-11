// Define global variables and access them in DOM
const submitButton = document.getElementById("submitButton");
const table = document.getElementById("pixelCanvas");
const sizePicker = document.getElementById("sizePicker");

// When size is submitted by the user, call makeGrid()
submitButton.addEventListener("click", submitProcess);

function submitProcess(){
  table.innerHTML= "";
  makeGrid();
}

function makeGrid() {
  const startingTime = performance.now();

  const inputHeight = document.getElementById("inputHeight").value;
  const inputWidth = document.getElementById("inputWidth").value;
  const colorPicker = document.getElementById("colorPicker").value;
  const addHeight = document.createElement("tr");
  const addWidth = document.createElement("td");
  // test of flags boolean
  var mouseIsDown = false;
  table.onmousedown = function() {
    mouseIsDown = true;
  }
  table.onmouseup = function() {
    mouseIsDown = false;
  }
/*   table.addEventListener("mouseover", function(event){
    if(event.target && event.target.nodeName === "TD") {
      let colorPicker = document.getElementById("colorPicker").value;
      if(mouseIsDown == true && event.target.nodeName === "TD") {
      let colorPicker = document.getElementById("colorPicker").value;
      table.style.backgroundColor = colorPicker;
    }
  }}); */

  table.addEventListener("click", function(event){
    if(event.target && event.target.nodeName == "TD") {
    let colorPicker = document.getElementById("colorPicker").value;
    event.target.style.backgroundColor = colorPicker; }
  });

  table.addEventListener("dblclick", function(event){
    if(event.target && event.target.nodeName === "TD") {
    event.target.style.background = ""; }
  });

  for (let m = 0 ; m < inputHeight; m++) {
    const addHeight = document.createElement("tr");
    for (let n = 0 ; n < inputWidth; n++) {
      const addWidth = document.createElement("td");
      addWidth.addEventListener("mouseover", function(event){
        let colorPicker = document.getElementById("colorPicker").value;
        if(mouseIsDown == true && event.target.nodeName === "TD") {
          addWidth.style.backgroundColor = colorPicker;
        }
      });
      addHeight.appendChild(addWidth);
    };
    table.appendChild(addHeight);
  };
  const endingTime = performance.now();
  console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');
};
