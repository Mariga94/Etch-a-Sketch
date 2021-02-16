const container = document.querySelector('#container');

let squareGrid = function (grid){
    const square = grid * grid;
    container.style.setProperty('--grid-rows',grid);
    container.style.setProperty('--grid-cols', grid);

    for (i = 0; i < square; i++){
        let cell = document.createElement('div');
        // cell.className='grid-item'
        cell.textContent = (i+1);
        container.appendChild(cell).className='cell';                 

    }
}  

squareGrid(4);

let resetGrid = function() {

    
    let gridR = prompt("Input number of grid ");
   
    if(gridR>100){

        prompt("Enter a number between 1-100.");

    }else{

           const squareR = gridR * gridR;
    container.style.setProperty('--grid-rows',gridR);
    container.style.setProperty('--grid-cols', gridR);

    for (i = 0; i < squareR; i++){
        let cellR = document.createElement('div');
        // cellR.className='grid-item'
        cellR.textContent = (i+1);
        cellR.className='cell';
        container.appendChild(cellR);                 

    }
}
}

const cell = document.querySelector('cell');



const setCellBg = function(target){
const randomColor =Math.floor(Math.random()*16777215);
target.style.backgroundColor='#'+ randomColor;


}


container.addEventListener('mouseover',function(e){
let target =e.target;

if(target.matches('.cell')){
    setCellBg(target);
}
});
    

let btn = document.querySelector('#btn');

btn.addEventListener('click',resetGrid);    
