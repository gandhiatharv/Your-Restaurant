var canvas, backgroundImage;

var gameState = 0;
var playerCount = 0;
var finishedPlayers = 0;
var tries = 2;
var tries2 = 2;
var allPlayers;
var database, passedFinish;
var playsound, lobbysound, rank1sound, rank2sound, rank3sound, rank4sound, servecustomersound;
var playsound2, playsound3, playsound4, playsound5, playsound6, playsound7, playsound8;

//add code to play sounds from restaurant sound options and to stop them when needed

//Which set should we take? The food names or numbers?

//names
var pizza, burger, fries, burrito, taco, spaghetti, bread, maccheese, nachos;
var water, fanta, sprite, coke, gingerale, fruitpunch, lemonade, orangejuice, applejuice;
var cookie, muffin, cake, applepie, pudding, icecream, brownie;
//numbers
var food1, food2, food3, food4, food5, food6, food7, food8, food9;
var drink1, drink2, drink3, drink4, drink5, drink6, drink7, drink8, drink9;
var dessert1, dessert2, dessert3, dessert4, dessert5, dessert6, dessert7;

var food, customer, chef, foodGroup, customerGroup;
var form, player, game;

function preload(){
  food1 = loadImage("images/food1.png");
  food2 = loadImage("images/food2.png");
  food3 = loadImage("images/food3.png");
  food4 = loadImage("images/food4.png");
  food5 = loadImage("images/food5.png");
  food6 = loadImage("images/food6.png");
  food7 = loadImage("images/food7.png");
  food8 = loadImage("images/food8.png");
  food9 = loadImage("images/food9.png");

  drink1 = loadImage("images/drink1.png");
  drink2 = loadImage("images/drink2.png");
  drink3 = loadImage("images/drink3.png");
  drink4 = loadImage("images/drink4.png");
  drink5 = loadImage("images/drink5.png");
  drink6 = loadImage("images/drink6.png");
  drink7 = loadImage("images/drink7.png");
  drink8 = loadImage("images/drink8.png");
  drink9 = loadImage("images/drink9.png");

  dessert1 = loadImage("images/dessert1.png");
  dessert2 = loadImage("images/dessert2.png");
  dessert3 = loadImage("images/dessert3.png");
  dessert4 = loadImage("images/dessert4.png");
  dessert5 = loadImage("images/dessert5.png");
  dessert6 = loadImage("images/dessert6.png");
  dessert7 = loadImage("images/dessert7.png");

  playsound = loadSound("sound/playsound.mp3");
  lobbysound = loadSound("sound/lobbysound.mp3");
  servecustomersound = loadSound("sound/servecustomer.wav");
  rank1sound = loadSound("sound/1.wav");
  rank2sound = loadSound("sound/2.wav");
  rank3sound = loadSound("sound/3.wav");
  rank4sound = loadSound("sound/4.wav");
  playsound2 = loadSound("sound/playsound2.mp3");
  playsound3 = loadSound("sound/playsound3.mp3");
  playsound4 = loadSound("sound/playsound4.mp3");
  playsound5 = loadSound("sound/playsound5.mp3");
  playsound6 = loadSound("sound/playsound6.mp3");
  playsound7 = loadSound("sound/playsound7.mp3");
  playsound8 = loadSound("sound/playsound8.mp3");
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  foodGroup = createGroup();
}



function draw(){

if(gameState === 0 && tries === 2){
  rank1sound.stop();
  rank2sound.stop();
  rank3sound.stop();
  rank4sound.stop();
  servecustomersound.stop();
  playsound.stop();
  playsound2.stop();
  playsound3.stop();
  playsound4.stop();
  playsound5.stop();
  playsound6.stop();
  playsound7.stop();
  playsound8.stop();
  lobbysound.play();
  tries = 1;
}

  if(playerCount === 4 && finishedPlayers === 0){
    game.update(1);
  }

if(finishedPlayers === 4){
  game.update(2);
}

  if(gameState === 1 && tries2 === 2){
    clear();
    game.play();
    lobbysound.stop();
    rank1sound.stop();
    rank2sound.stop();
    rank3sound.stop();
    rank4sound.stop();
    playsound.play();
    tries2 = 1;
  }
}
