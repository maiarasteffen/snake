import {gameboard, generateRandomBoardPosition} from '../Board/index.js';
import {collision as snakecollision, expandSnake} from '../Snake/index.js';

const EXPANSION_RATE = 2;

let foodPosition = generateRadomPosition();

export function update(){
    if(snakecollision(foodPosition)) {
        expandSnake(EXPANSION_RATE);
        foodPosition = generateRadomPosition();
    }
};
export function draw() {
    const foodElement = document.createElement('div');

    foodElement.classList.add('food')

    foodElement.style.gridRowStart = foodPosition.y;
    foodElement.style.gridColumnStart = foodPosition.x;

    gameboard.appendChild(foodElement)
};
function generateRadomPosition(){
    let newFoodPosition;

    while(newFoodPosition === undefined || snakecollision(newFoodPosition)) {
        newFoodPosition = generateRandomBoardPosition();
    }
    return newFoodPosition
}