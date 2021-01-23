var polarBear,polarBearImg;
var bg;
var player;
var p1, p2, p3, p4, p5;
var level;
var game, player, form;

function preload(){
polarBearImg = loadImage("images/PolarBear.png");

p1 = loadImage("images/p1.png");
p2 = loadImage("images/p2.png");
p3 = loadImage("images/p3.png");
p4 = loadImage("images/p4.png");
p5 = loadImage("images/p5.png");
}

function setup(){
    createCanvas(displayWidth-15,displayHeight-120);
   
}

function draw(){
    if(gameState === 0){
        game = new Game();
        game.start();
    }
    drawSprites();
}

