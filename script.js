//DRAPEAU

var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

ctx.beginPath();
    ctx.lineCap = "round";
    ctx.lineWidth = 10;
    ctx.moveTo(50, 50);
    ctx.lineTo(50, 350);
    ctx.stroke();
ctx.closePath();

ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.fillStyle = "black";
    ctx.rect(50, 50, 90, 205);
    ctx.fill();
ctx.closePath();

ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.rect(140, 50, 120, 215);
    ctx.fill();
ctx.closePath();

ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.rect(260, 50, 90, 195);
    ctx.fill();
ctx.closePath();

ctx.beginPath();
    ctx.fillStyle = "white";

    ctx.moveTo(50, 50);
    ctx.bezierCurveTo(180, 180, 330, 0, 350, 50);

    ctx.moveTo(50, 200);
    ctx.bezierCurveTo(175, 330, 330, 150, 350, 200);

    ctx.moveTo(140, 98);
    ctx.lineTo(140, 245);
    ctx.moveTo(260, 75);
    ctx.lineTo(260, 220);

    ctx.moveTo(350, 50);
    ctx.lineTo(350, 200);
    ctx.fill();
    ctx.stroke();
ctx.closePath();

//BATEAU

var c = document.getElementById("mon_canvas2");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.lineWidth = 2;
    ctx.fillStyle = "lightgrey";
    ctx.bezierCurveTo(200, 80, 290, 200, 300, 300);
    ctx.lineTo(215, 300);
    ctx.lineTo(200, 100);

    ctx.moveTo(200, 100);
    ctx.lineTo(130, 300);
    ctx.lineTo(190, 300);
    ctx.lineTo(200, 100);

    ctx.fill();
    ctx.stroke();
ctx.closePath();

ctx.beginPath();
    ctx.lineCap = "round";
    ctx.lineWidth = 7;
    ctx.moveTo(200, 50);
    ctx.lineTo(200, 300);
    ctx.stroke();
ctx.closePath();

ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = "red";
    ctx.moveTo(200, 50);
    ctx.lineTo(240, 60);
    ctx.lineTo(200, 80);
    ctx.fill();
    ctx.stroke();
ctx.closePath();

ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.bezierCurveTo(140, 305, 200, 400, 290, 305);
    ctx.lineTo(140, 305);
    ctx.fill();
    ctx.stroke();
ctx.closePath();

ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = "lightblue";
    ctx.fillStyle = "lightblue";
    ctx.moveTo(50, 350);
    ctx.bezierCurveTo(100, 300, 400, 400, 400, 340);
    ctx.stroke();
    ctx.fill();
ctx.closePath();

//MAISON

var c = document.getElementById("mon_canvas3");
var ctx = c.getContext("2d");

ctx.beginPath();
    ctx.fillStyle = "grey";
    ctx.moveTo(40, 390);
    ctx.lineTo(80, 340);
    ctx.lineTo(370, 340);
    ctx.lineTo(390, 390);
    ctx.lineTo(40, 390);
    ctx.stroke();
    ctx.fill();
ctx.closePath();

ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.fillStyle = "darksalmon";
    ctx.rect(100, 200, 250, 150);
    ctx.stroke();
    ctx.fill();
ctx.closePath();

ctx.beginPath();
    ctx.lineWidth = 8;
    ctx.fillStyle = "grey";
    ctx.strokeStyle = "grey";
    ctx.moveTo(315, 20);
    ctx.bezierCurveTo(360, 10, 300, 50, 312, 63);
    ctx.stroke();
    ctx.fill();
ctx.closePath();

ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.fillStyle = "cornsilk";
    ctx.rect(300, 70, 20, 100);
    ctx.stroke();
    ctx.fill();
ctx.closePath();

ctx.beginPath();
    ctx.fillStyle = "brown";
    ctx.moveTo(70, 200);
    ctx.lineTo(140, 120);
    ctx.lineTo(310, 120);
    ctx.lineTo(380, 200);
    ctx.lineTo(70, 200);
    ctx.stroke();
    ctx.fill();
ctx.closePath();

ctx.beginPath();
    ctx.fillStyle = "brown";
    ctx.moveTo(180, 350);
    ctx.bezierCurveTo(180, 280, 220, 280, 220, 350);
    ctx.stroke();
    ctx.fill();
ctx.closePath();

ctx.beginPath();
    ctx.fillStyle = "cornsilk";
    ctx.rect(120, 230, 40, 50);
    ctx.rect(240, 230, 80, 50);
    ctx.stroke();
    ctx.fill();
ctx.closePath();

ctx.beginPath();

    ctx.moveTo(120, 255);
    ctx.lineTo(160, 255);

    ctx.moveTo(140, 230);
    ctx.lineTo(140, 280);

    ctx.stroke();
    ctx.fill();
ctx.closePath();