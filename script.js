function generateDrawingArea(squarePerSide) {
    const canvas = document.querySelector('.canvas');

    if (canvas.hasChildNodes) {
        clearCanvas();
    }
    
    const canvas_w = parseInt(getComputedStyle(canvas).width);
    const canvas_h = parseInt(getComputedStyle(canvas).height);

    for (let i = 0; i < (squarePerSide * squarePerSide); i++) {
        const new_div = document.createElement('div');
        new_div.style.width = canvas_w / squarePerSide + 'px';
        new_div.style.height = canvas_h / squarePerSide + 'px';

        canvas.appendChild(new_div);
    }
}

function clearCanvas() {
    const canvas = document.querySelector('.canvas');
    
    let child = canvas.lastElementChild;
    while (child) {
        canvas.removeChild(child);
        child = canvas.lastElementChild;
    }
}


function initPainter() {
    const canvas = document.querySelector('.canvas');
    const canvasTiles = Array.from(canvas.children);

    canvasTiles.forEach((tile) => {
        tile.addEventListener('mouseenter', () => {
            tile.style.background = 'black'; 
        });
    });
}

generateDrawingArea(16);
initPainter();
