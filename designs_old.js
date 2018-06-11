const startingTime = performance.now();
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
  
  for (let m = 1 ; m < inputHeight; m++) {
    const addHeight = document.createElement("tr");
    for (let n = 1 ; n < inputWidth; n++) {
      const addWidth = document.createElement("td");
      const colorPicker = document.getElementById("colorPicker").value;
      
      // test of flags boolean
      var mouseIsDown = false;
      addWidth.onmousedown = function() {
        mouseIsDown = true;
      }
      addWidth.onmouseup = function() {
        mouseIsDown = false;
      }
      addWidth.addEventListener("mouseover", function(event){
        let colorPicker = document.getElementById("colorPicker").value;
        if(mouseIsDown == true && event.target.nodeName === "TD") {
          addWidth.style.backgroundColor = colorPicker;
        }
      });

      addWidth.addEventListener("click", function(event){
        event.target.style.backgroundColor = colorPicker;
      });

      addWidth.addEventListener("dblclick", function(event){
        event.target.style.background = "";
      });
      addHeight.appendChild(addWidth);
    };
    table.appendChild(addHeight);
  };
  const endingTime = performance.now();
  console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');
};

