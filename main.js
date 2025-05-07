let numOfCell = 20;
document.querySelector("#buttonSetPixel").addEventListener("click", function (){
  numOfCell = Number(prompt("How many squares?"));

makeCell();

});

function makeCell(){

 const existing = document.querySelector('#gridContainer');
 if (existing) existing.remove();

// Grid container
const container = document.createElement('div');
 container.id = "gridContainer";

// Container styles
container.style.display = "grid";
container.style.width = "50%";     
container.style. height = "510px";     
container.style. gridTemplateColumns = `repeat(${numOfCell}, 1fr)`;  
container.style.gridTemplateRows = `repeat(${numOfCell}, 1fr)`; 
container.style. gap = "1px";     
container.style. margin = "auto";       
container.style.marginTop = "5vmin";       
container.style.border = "2px solid #333";

// Cells
for (let i=0; i<numOfCell*numOfCell; i++) {
  const cell = document.createElement('div'); 
  cell.style.backgroundColor = "#ddd";
  cell.style.width = "100%";
  cell.style.height = "100%";
  cell.addEventListener("mouseover", function () {
  cell.style.backgroundColor = randomColor();
  });
  container.appendChild(cell);
}

document.body.appendChild(container);

document.body.style.margin = "0";                
document.body.style.backgroundColor = "#f0f0f0"; 

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  console.log(`rgb(${r},${g},${b})`);
  return `rgb(${r},${g},${b})`;
  }
}
