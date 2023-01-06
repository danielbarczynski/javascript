const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const circles = [];
canvas.width = 500;
canvas.height = 500;

class Circle {
    constructor(x, y, size, dx, dy) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.dx = dx;
        this.dy = dy;
    }
}
//? random color from the array?

for (let i = 5; i < 15; i++) {
    newCirle = new Circle(Math.floor(Math.random() * 300), Math.floor(Math.random() * 300), 15, Math.floor(Math.random() < 0.5 ? -1 : 1) * 1, Math.floor(Math.random() < 0.5 ? -1 : 1) * 1);
    circles.push(newCirle);
}

function drawCircle() {
    circles.forEach(el => {
        ctx.beginPath();
        ctx.arc(el.x, el.y, el.size, 0, Math.PI * 2);
        ctx.fillStyle = 'grey';
        ctx.fill();        
        ctx.closePath();
        el.x += el.dx;
        el.y += el.dy;

        if (el.x + el.size > canvas.width || el.x - el.size < 0)
            el.dx *= -1;
        else if (el.y + el.size > canvas.height || el.y - el.size < 0)
            el.dy *= -1;
    });
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle();
    requestAnimationFrame(update);
}

update();