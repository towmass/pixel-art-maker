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
  const inputHeight = document.getElementById("inputHeight").value;
  const inputWidth = document.getElementById("inputWidth").value;
  for (let m = 1 ; m < inputHeight; m++) {
    const addHeight = document.createElement("tr");
    for (let n = 1 ; n < inputWidth; n++) {
      const addWidth = document.createElement("td");
      addWidth.addEventListener("click", function(){
        const colorPicker = document.getElementById("colorPicker").value;
        addWidth.style.backgroundColor = colorPicker;
      });
      /*
      addWidth.addEventListener("mousedown", function(){
        addWidth.addEventListener("mousemove", function(){
          const colorPicker = document.getElementById("colorPicker").value;
          addWidth.style.backgroundColor = colorPicker;
        })
      });
      */
      addWidth.addEventListener("dblclick", function(){
        const colorPicker = document.getElementById("colorPicker").value;
        addWidth.style.background = "";
      });
      addHeight.appendChild(addWidth);
    }
    table.appendChild(addHeight);
  }
};
