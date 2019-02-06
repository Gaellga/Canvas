
//DRAPEAU

var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo(50, 49);
    ctx.lineTo(50, 200);
    ctx.stroke();
ctx.closePath();

ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.bezierCurveTo(48, 50, 90, 90, 140, 98);
    ctx.lineTo(140, 98);
    ctx.lineTo(140,245);
    ctx.bezierCurveTo(140, 245, 100, 250, 48, 200);
    ctx.fill();
ctx.closePath();

ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.bezierCurveTo(140, 98, 200, 110, 270, 65);
    ctx.lineTo(270, 73);
    ctx.lineTo(270,215);
    ctx.bezierCurveTo(270, 215, 180, 260, 140, 245);
    ctx.fill();
ctx.closePath();

ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.bezierCurveTo(260, 73, 350, 20, 350, 50);
    ctx.lineTo(350, 50);
    ctx.lineTo(350,200);
    ctx.bezierCurveTo(350, 200, 348, 175, 260, 220);
    ctx.fill();
ctx.closePath();

ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.bezierCurveTo(180, 180, 330, 0, 350, 50);

    ctx.moveTo(50, 200);
    ctx.bezierCurveTo(175, 330, 330, 150, 350, 200);

    ctx.moveTo(140, 98);
    ctx.lineTo(140, 247);
    ctx.moveTo(260, 73);
    ctx.lineTo(260, 220);

    ctx.moveTo(350, 50);
    ctx.lineTo(350, 200);

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
var x = 120;
var y = 160;

//sol
ctx.beginPath();
    ctx.fillStyle = "olivedrab";
    ctx.moveTo(40, 390);
    ctx.lineTo(80, 340);
    ctx.lineTo(370, 340);
    ctx.lineTo(390, 390);
    ctx.lineTo(40, 390);
    ctx.fill();
ctx.closePath();

//batiment
ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.fillStyle = "darksalmon";
    ctx.rect(100, 200, 250, 150);
    ctx.stroke();
    ctx.fill();
ctx.closePath();

//cheminée
ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.fillStyle = "wheat";
    ctx.rect(300, 70, 20, 100);
    ctx.stroke();
    ctx.fill();
ctx.closePath();

//toit
ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.fillStyle = "brown";
    ctx.moveTo(71, 201);
    ctx.lineTo(140, 120);
    ctx.lineTo(310, 120);
    ctx.lineTo(380, 200);
    ctx.lineTo(70, 200);
    ctx.stroke();
    ctx.fill();
ctx.closePath();

//porte
ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.fillStyle = "brown";
    ctx.moveTo(180, 350);
    ctx.bezierCurveTo(180, 280, 220, 280, 220, 350);
    ctx.stroke();
    ctx.fill();
ctx.closePath();

//fenêtres
ctx.beginPath();
    ctx.fillStyle = "wheat";
    ctx.rect(120, 230, 40, 50);
    ctx.rect(240, 230, 80, 50);
    ctx.stroke();
    ctx.fill();
ctx.closePath();

//rideaux
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "indianred";
    ctx.bezierCurveTo(120, 210, 155, 235, 120, 260);
    ctx.moveTo(120, 260);
    ctx.bezierCurveTo(120, 260, 135, 280, 120, 290);
    ctx.moveTo(160, 210);
    ctx.bezierCurveTo(160, 210, 125, 235, 160, 260);
    ctx.moveTo(160, 260);
    ctx.bezierCurveTo(160, 260, 145, 280, 160, 290);
    ctx.fill();
    ctx.stroke();
ctx.closePath();

//rideaux2
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "indianred";
    ctx.bezierCurveTo(120+x, 210, 155+x, 235, 120+x, 260);
    ctx.moveTo(120+x, 260);
    ctx.bezierCurveTo(120+x, 260, 135+x, 280, 120+x, 290);
    ctx.moveTo(160+y, 210);
    ctx.bezierCurveTo(160+y, 210, 125+y, 235, 160+y, 260);
    ctx.moveTo(160+y, 260);
    ctx.bezierCurveTo(160+y, 260, 145+y, 280, 160+y, 290);
    ctx.fill();
    ctx.stroke();
ctx.closePath();

//fenetres croix
ctx.beginPath();
ctx.lineWidth = 2.5;
    ctx.moveTo(120, 255);
    ctx.lineTo(160, 255);

    ctx.moveTo(140, 230);
    ctx.lineTo(140, 280);

    ctx.moveTo(240, 255);
    ctx.lineTo(320, 255);

    ctx.moveTo(265, 230);
    ctx.lineTo(265, 280);

    ctx.moveTo(295, 230);
    ctx.lineTo(295, 280);

    ctx.stroke();
    ctx.fill();
ctx.closePath();

//cacherideau
ctx.beginPath();
ctx.lineWidth = 2;
    ctx.fillStyle = "darksalmon";
    ctx.rect(100, 202, 250, 26);
    ctx.rect(100, 282, 250, 10);
    ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.rect(119, 229, 42, 52);
ctx.rect(239, 229, 82, 52);
ctx.stroke();
ctx.closePath();

//soleil
ctx.beginPath();
    ctx.fillStyle = "orange";
    ctx.arc(80, 60, 30, 0, 2 * Math.PI);
    ctx.fill();
ctx.closePath();

//porte poignée
ctx.beginPath();
    ctx.fillStyle = "wheat";
    ctx.arc(210, 325, 3, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
ctx.closePath();



//MAISON

var c = document.getElementById("mon_canvas4");
var ctx = c.getContext("2d");
var x = 70;


//forme visage
ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineCap ="round";
    ctx.fillStyle = "black";
    ctx.moveTo(100, 180);
    ctx.bezierCurveTo(100, 100, 270, 30, 260, 190);
    ctx.moveTo(100, 180);
    ctx.bezierCurveTo(70, 370, 200, 400, 260, 230);
    ctx.stroke();
ctx.closePath();

//oreilles
ctx.beginPath();
    ctx.moveTo(100, 180);
    ctx.bezierCurveTo(70, 100, 50, 30, 95, 250);
    ctx.moveTo(260, 190);
    ctx.bezierCurveTo(350, 100, 370, 60, 250, 270);
    ctx.lineTo(250,260);
    ctx.stroke();
ctx.closePath();

//nez
ctx.beginPath();
    ctx.moveTo(150, 200);
    ctx.lineTo(130, 250);
    ctx.lineTo(150, 250);
    ctx.lineTo(148, 240);
    ctx.stroke();
ctx.closePath();

//yeux
ctx.beginPath();
    ctx.moveTo(110, 180);
    ctx.bezierCurveTo(120, 170, 140, 170, 145, 180);
    ctx.moveTo(110, 180);
    ctx.bezierCurveTo(100, 200, 130, 250, 130, 175);
    ctx.stroke();
ctx.closePath();

ctx.beginPath();
    ctx.moveTo(110+x, 180);
    ctx.bezierCurveTo(120+x, 170, 140+x, 170, 145+x, 180);
    ctx.moveTo(110+x, 180);
    ctx.bezierCurveTo(100+x, 200, 130+x, 250, 130+x, 175);
    ctx.stroke();
ctx.closePath();

ctx.beginPath();
    ctx.ellipse(115, 190, 10, 5, 80, 90, 100);
    ctx.ellipse(115+x, 190, 10, 5, 80, 90, 100);
    ctx.fill();
ctx.closePath();



//bouche
ctx.beginPath();
    ctx.ellipse(150, 300, 30, 10, 0, 100, 300);
    ctx.moveTo(130,305);
    ctx.bezierCurveTo(160, 290, 170, 300, 180, 300);
    ctx.stroke();
ctx.closePath();



//SYSTEME SOLAIRE
var c = document.getElementById("mon_canvas5");
var ctx = c.getContext("2d");
var x = 20;
var y = 20;

//anneaux route
ctx.beginPath();
    ctx.strokeStyle = "wheat";
    //mercure
    ctx.moveTo(0, 210);
    ctx.bezierCurveTo(10, 210/*stay*/, 510, 270, 0, 310);
    //venus
    ctx.moveTo(0, 193);
    ctx.bezierCurveTo(150, 210/*stay*/, 550, 290, 0, 327);
    //terre
    ctx.moveTo(0, 175);
    ctx.bezierCurveTo(250, 210/*stay*/, 670, 310, 0, 345);
    //mars
    ctx.moveTo(0, 160);
    ctx.bezierCurveTo(500, 210/*stay*/, 690, 330, 0, 360);
    //jupiter
    ctx.moveTo(0, 145);
    ctx.bezierCurveTo(770, 210/*stay*/, 710, 350, 0, 375);
    //saturne
    ctx.moveTo(0, 127);
    ctx.bezierCurveTo(1100, 210/*stay*/, 730, 370, 0, 387);
    //uranus
    ctx.moveTo(0, 117);
    ctx.bezierCurveTo(1450, 210/*stay*/, 750, 390, 0, 397);
    //neptune
    ctx.moveTo(0, 110);
    ctx.bezierCurveTo(1800, 200/*stay*/, 770, 410, 0, 405);


    ctx.stroke(); 
ctx.closePath();

//mercure
ctx.beginPath();
    ctx.fillStyle = "grey";
    ctx.arc(225, 240+x, 12, 0, 2 * Math.PI);
    ctx.fill(); 
ctx.closePath();

//venus
ctx.beginPath();
    ctx.fillStyle = "chocolate";
    ctx.arc(280, 230+x, 30, 0, 2 * Math.PI);
    ctx.fill(); 
ctx.closePath();

//terre
ctx.beginPath();
    ctx.fillStyle = "#004d99";
    ctx.arc(355, 240+x, 25, 0, 2 * Math.PI);
    ctx.fill(); 
ctx.closePath();

//mars
ctx.beginPath();
    ctx.fillStyle = "brown";
    ctx.arc(445, 250+x, 15, 0, 2 * Math.PI);
    ctx.fill(); 
ctx.closePath();

//jupiter
ctx.beginPath();
    ctx.fillStyle = "burlywood";
    ctx.arc(540, 210+x, 60, 0, 2 * Math.PI);
    ctx.fill(); 
ctx.closePath();

//saturne
ctx.beginPath();
ctx.strokeStyle = "slategrey";
ctx.lineWidth = 1;
ctx.lineCap = "round";
ctx.moveTo(635-y, 210+x);
ctx.bezierCurveTo(600-y, 195+x, 780-y, 190+x, 770-y, 210+x);
ctx.stroke();
ctx.beginPath();
    ctx.fillStyle = "LightSalmon";
    ctx.arc(700-y, 210+x, 50, 0, 2 * Math.PI);
    ctx.fill(); 
ctx.closePath();
ctx.beginPath();
ctx.moveTo(635-y, 210+x);
ctx.bezierCurveTo(615-y, 200+x, 690-y, 250+x, 770-y, 210+x);
ctx.stroke();
ctx.closePath();

//uranus
ctx.beginPath();
    ctx.fillStyle = "lightblue";
    ctx.arc(840, 220+x, 30, 0, 2 * Math.PI);
    ctx.fill(); 
ctx.closePath();

//neptune
ctx.beginPath();
    ctx.fillStyle = "royalblue";
    ctx.arc(990, 220+x, 28, 0, 2 * Math.PI);
    ctx.fill(); 
ctx.closePath();

//pluton
ctx.beginPath();
    ctx.fillStyle = "dimgrey";
    ctx.arc(1100, 230+x, 8, 0, 2 * Math.PI);
    ctx.fill(); 
ctx.closePath();

//soleil
ctx.beginPath();
    ctx.fillStyle = "orangered";
    ctx.shadowBlur = 40;
    ctx.shadowColor = "orangered";
    ctx.arc(30, 110, 180, 0, 2 * Math.PI);
    ctx.fill(); 
ctx.closePath();

