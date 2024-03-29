# Snake - Jogo da Cobrinha

Esse jogo fiz como parte de treinamento para javascript, desenvolvendo melhor minha habilidades com canvas.

## Índice

- [Overview](#overview)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Construído com](#construído-com)
  - [O que aprendi](#o-que-aprendi)
  - [Desenvolvimento contínuo](#desenvolvimento-contínuo)
- [Autor](#autor)
- [Agradecimento](#agradecimento)

## Overview

### Links

- URL da solução: [Repositório](https://github.com/maiarasteffen/snake)

## Meu Processo

### Construído com

- Canvas;
- Eixo X e Y;
- Style dentro do Javascript para colisão;
- Atributo Keydown para configurar as setas;

### O que aprendi

Aprendi sobre como fazer um direcionamento adicionando uma função onde chamava o evento: 'keydown', nele se criava as cordenadas das setas para conseguir fazer a cobrinha se movimentar. Também foi feito a função de colisão com a cobrinha e a frutinha.

Códigos utilizados:

- Parte da criação do fundo:

```javascript
export const gameboard = document.getElementById('game-board');

export const BOARD_SIZE = 21; 

 export function generateRandomBoardPosition(){
    return {
        x: Math.floor(Math.random() * BOARD_SIZE) + 1,
        y: Math.floor(Math.random() * BOARD_SIZE) + 1,
    }
}

export function isOutsideBoard(position) {
    return position.x > BOARD_SIZE || position.x < 1 ||
    position.y > BOARD_SIZE || position.y < 1;
}

```
- Parte da criação da maçã:
```javascript
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
```
- Parte da criação da cobrinha:
```javascript
import { getInputDirection } from './input.js'
import { gameboard } from '../Board/index.js'

export const SNAKE_SPEED = 5;

let newSegments = 0;

const snakeBody = [
    {x: 11, y: 11},
]

export function update(){
    addSegments();

    const inputDirection = getInputDirection();

    for(let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i + 1] = {...snakeBody[i]};
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
};

export function draw() {

    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');

        snakeElement.classList.add('snake')

        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;

        gameboard.appendChild(snakeElement)
    });
};

export function collision(position) {
    return snakeBody.some(segment => {
        return position.x === segment.x &&
        position.y === segment.y;
    })
};

export function expandSnake(amount) {
    newSegments = amount;
};

function addSegments() {
    if(newSegments > 0) {
        snakeBody.push({
            ...snakeBody[snakeBody.length - 1]
        });

        newSegments -= 1;
    }
};

export function getSnakeHead() {
    return snakeBody[0];
}

export function hasSelfCollision(){
    const snakehead = snakeBody[0];

    return snakeBody.some((segment, index) => {
        if(index === 0) return false;

        return snakehead.x === segment.x &&
        snakehead.y === segment.y;
    }) 
};

```
```javascript
const inputDirection = {
    x: 0,
    y: 0
}

let lastInputDirection = {
    x: 0,
    y: 0
}

window.addEventListener('keydown', e => {
    console.log(e.key);
    switch (e.key) {
        case'ArrowUp':
            if(lastInputDirection.y !== 0) break;
            inputDirection.x = 0;
            inputDirection.y = -1;
            break;
        case'ArrowDown':
            if(lastInputDirection.y !== 0) break;
            inputDirection.x = 0;
            inputDirection.y = 1;
            break;
        case'ArrowLeft':
            if(lastInputDirection.x !== 0) break;
            inputDirection.x = -1;
            inputDirection.y = 0;
            break;
        case'ArrowRight':
            if(lastInputDirection.x !== 0) break;
            inputDirection.x = 1;
            inputDirection.y = 0;
            break;
    }
    console.log(inputDirection);
});

export function getInputDirection(){
    lastInputDirection = inputDirection;
    return inputDirection;
}
```

### Desenvolvimento contínuo

Já desenvolvo em frontend e backend, mas as atualizações em responsividades e tags novas tags ajudam a melhorar cada vez mais meu aprendizado e o raciocínio para o meu serviço.

## Autor

- LinkedIn - [@maiarasteffen](https://www.linkedin.com/in/maiara-steffen/)
- Instagram - [@maiara_steffen](https://www.instagram.com/maiara_steffen/)


## Agradecimento

Sou muito grata a todos que estão vendo esse código nesse momento, isso mostra que meu desempenho está sendo reconhecido.


[def]: ./images/jogo-da-cobrinha.mp4
