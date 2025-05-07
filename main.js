let numOfCell = 50;

function makeSquares() {
    for(let j=1; j<=numOfSquares; j++){
        const container = document.createElement('div');
        container.style.display = "flex";
    
        for(let i=1; i<=numOfSquares; i++){
            const square = document.createElement('div');
            square.style.width = '30px';
            square.style.height = '30px';
            square.style.backgroundColor = '#e9e9e9';
            square.style.margin = '1px';
            square.addEventListener('mouseover', function () {
            square.style.backgroundColor = "red";
      });
      container.appendChild(square);
    }
    document.body.appendChild(container);
    }
    
}
// makeSquares();

// Grid container
const container = document.createElement('div');

// Container styles
container.style.display = "grid";
container.style.width = "50%";     
container.style. height = "535px";     
container.style. gridTemplateColumns = `repeat(${numOfCell}, 1fr)`;  
container.style.gridTemplateRows = `repeat(${numOfCell}, 1fr)`; 
container.style. gap = "1px";     
container.style. margin = "auto";       
container.style.marginTop = "5vmin";       
container.style.border = "2px solid #333";


for (let i=0; i<numOfCell*numOfCell; i++) {
  const cell = document.createElement('div'); 

  cell.style.backgroundColor = "#ddd";
  cell.style.width = "90%";
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
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }

