var canvas, backgroundImage;

var gameState = 0;
var playerCount, finishedPlayers;
var allPlayers;
var database, passedFinish;
var playsound, lobbysound, endsound;
var food1, food2, food3, food4, food5, food6, food7, food8, food9, food10, food11, food12, food13, food14, food15, food16, food17, food18, food19, food20, food21, food22, food23, food24, food25;
var food, customer, chef, foodGroup, customerGroup;
var form, player, game;

function preload(){

}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  finishedPlayers = 0;
  foodGroup = createGroup();
}



function draw(){
  if(playerCount === 4 && finishedPlayers === 0){
    game.update(1);
  }

if(finishedPlayers === 4){
  game.update(2);
}

  if(gameState === 1){
    clear();
    game.play();
  }
}