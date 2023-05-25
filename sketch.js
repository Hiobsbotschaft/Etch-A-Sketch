
function assambleGrid(gridSize) {
    grid.style.gridTemplateColumns =`repeat( ${Math.sqrt(gridSize)}, 1fr)`;
    grid.style.gridTemplateRows =`repeat( ${Math.sqrt(gridSize)}, 1fr)`;
    for ( let i=0; i<gridSize; i++) {
        let square = document.createElement("div");
        grid.appendChild(square);
        square.classList.add ("tinys")
        square.addEventListener('mouseover', () => square.classList.add("blackout"));


    }

}

assambleGrid(256);

button.addEventListener("click",() => {
    let gridSizeInput = prompt("Wie groß soll das Feld sein?","");

    if (gridSizeInput>100 || gridSizeInput == 0) {
        alert("ACHTUNG! Bitte nur Zahlen zwischen 1 und 100 sind möglich");    
    }
    grid.textContent = "";
    assambleGrid(gridSizeInput*gridSizeInput);
    
}) 



