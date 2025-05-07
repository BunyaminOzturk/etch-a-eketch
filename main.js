let numOfSquares = 16;

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



