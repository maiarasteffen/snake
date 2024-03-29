import { gameboard, isOutsideBoard } from './Board/index.js';
import { SNAKE_SPEED, draw as snakeDraw, update as snakeUpdate, getSnakeHead, hasSelfCollision as snakeSelfCollision} from './Snake/index.js';
import {draw as foodDraw, update as foodUpdate} from './food/index.js'

let lestTimeRender = 0;

let gameOver = false;

function main(currentTime){

    if(gameOver){
        alert('Você perdeu o jogo!')
    }

    window.requestAnimationFrame(main);
    
    const secondsSinceLastRender = (currentTime - lestTimeRender) / 1000;
    
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return;

    lestTimeRender = currentTime;

    update();

    draw();
}

function update() {
     gameboard.innerHTML = '';
     snakeUpdate();
     foodUpdate();
     checkGamerOver();
};

function draw() {
     snakeDraw();
     foodDraw();
};

function checkGamerOver(){
    if(isOutsideBoard(getSnakeHead()) || snakeSelfCollision()) {
        gameOver = true;
    }
};

window.requestAnimationFrame(main);