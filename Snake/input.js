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