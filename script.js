const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const randomDirection = Math.floor(Math.random() < 0.5 ? -1 : 1) * 1;
const randomX = Math.floor(Math.random() * 300);
const randomY = Math.floor(Math.random() * 300);
const circles = [];
canvas.width = 500;
canvas.height = 500;

const circle = {
    x: randomX,
    y: randomY,
    size: 15,
    dx: randomDirection,
    dy: randomDirection
}

for (let i = 0; i < 5; i++) {
    circles.push(circle);
}
function drawCircle() {
    i = 10;
    circles.forEach(element => {
        i *= 1.5;
        ctx.arc(i, element.y, element.size, 0, Math.PI * 2);
        ctx.fillStyle = 'grey';
        ctx.fill();        
    });
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    drawCircle();
    circle.x += circle.dx;
    circle.y += circle.dy;
    ctx.closePath();
    requestAnimationFrame(update);

    if (circle.x >= canvas.width - circle.size || circle.x <= 0 + circle.size)
        circle.dx *= -1;
    else if (circle.y >= canvas.height - circle.size || circle.y <= 0 + circle.size)
        circle.dy *= -1;
}

update();