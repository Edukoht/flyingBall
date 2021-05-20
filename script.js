let canv = document.querySelector("canvas");
let c = canv.getContext("2d");
canv.width =  window.innerWidth;
canv.height = window.innerHeight;
let circleX = 100;
let circleY = 75;
let speedX = 15;
let speedY = 10;
let circleRadius = 50;
setInterval(function(){
    c.fillStyle = "rgba(0,0,0,0.04)";
    c.fillRect(0,0, canv.width, canv.height);
    c.fillStyle = "red";
    c.fill();
    c.beginPath();
},10)