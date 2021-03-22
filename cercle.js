let canvas = document.getElementById('trait');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(150,20);
ctx.lineTo(150, 150);
ctx.strokeStyle = 'black';
ctx.lineWidth = 1;
ctx.closePath();
ctx.stroke();

