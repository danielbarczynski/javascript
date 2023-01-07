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

const distance = (x1, x2) => Math.hypot(x2 - x1);

for (let i = 5; i < 15; i++) {
    newCirle = new Circle(Math.floor(Math.random() * 300), Math.floor(Math.random() * 300), 15, Math.floor(Math.random() < 0.5 ? -1 : 1) * i / 7, Math.floor(Math.random() < 0.5 ? -1 : 1) * i / 7);
    circles.push(newCirle);
}

function drawCircle() {
    circles.forEach(el => {
        ctx.beginPath();
        ctx.arc(el.x, el.y, el.size, 0, Math.PI * 2);
        ctx.fillStyle = 'coral';
        ctx.fill();
        ctx.closePath();
        el.x += el.dx;
        el.y += el.dy;
        drawLine();

        if (el.x + el.size > canvas.width || el.x - el.size < 0)
            el.dx *= -1;
        else if (el.y + el.size > canvas.height || el.y - el.size < 0)
            el.dy *= -1;
    });
}

function drawLine() {
    ctx.strokeStyle = 'coral';
    circles.forEach(el => {
        circles.some(el2 => {
            if (distance(el.x, el2.x) < 10 || distance(el.y, el2.y) < 10) {
                ctx.moveTo(el.x, el.y);
                ctx.lineTo(el2.x, el2.y);
                ctx.stroke();
            }
        });
    })
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle();
    requestAnimationFrame(update);
}

update();