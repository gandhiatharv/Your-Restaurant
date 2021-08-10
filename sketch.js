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

var chef1, chef2, chef3, chef4, chefs;

//add code to play sounds from restaurant sound options when gamestate is PLAY and to stop them when needed

var pizza, burger, fries, burrito, taco, spaghetti, bread, maccheese, nachos;
var water, fanta, sprite, coke, gingerale, fruitpunch, lemonade, orangejuice, applejuice;
var cookie, muffin, cake, applepie, pudding, icecream, brownie;

var customer1, customer2, customer3, manyCustomers;
var food, customer, chef, foodGroup, customerGroup;
var form, player, game;
var table, tableimg, chef, chefimg;

function preload(){
  pizza = loadImage("images/food1.png");
  burger = loadImage("images/food2.png");
  fries = loadImage("images/food3.png");
  burrito = loadImage("images/food4.png");
  taco = loadImage("images/food5.png");
  spaghetti = loadImage("images/food6.png");
  bread = loadImage("images/food7.png");
  maccheese = loadImage("images/food8.png");
  nachos = loadImage("images/food9.png");

  water = loadImage("images/drink1.png");
  fanta = loadImage("images/drink2.png");
  sprite = loadImage("images/drink3.png");
  coke = loadImage("images/drink4.png");
  gingerale = loadImage("images/drink5.png");
  fruitpunch = loadImage("images/drink6.png");
  lemonade = loadImage("images/drink7.png");
  orangejuice = loadImage("images/drink8.png");
  applejuice = loadImage("images/drink9.png");

  cookie = loadImage("images/dessert1.png");
  muffin = loadImage("images/dessert2.png");
  cake = loadImage("images/dessert3.png");
  applepie = loadImage("images/dessert4.png");
  pudding = loadImage("images/dessert5.png");
  icecream = loadImage("images/dessert6.png");
  brownie = loadImage("images/dessert7.png");

  customer1 = loadImage("images/customer1.png");
  customer2 = loadImage("images/customer2.png");
  customer3 = loadImage("images/customer3.png");
  manyCustomers = loadImage("images/customergroup.png");

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

  tableimg = loadImage("images/tablebg.png");
  chefimg = loadAnimation("images/frontchef.png", "images/frontchef.png", "images/frontchef.png", "images/leftchef.png", "images/leftchef.png", "images/leftchef.png", "images/rightchef.png", "images/rightchef.png", "images/rightchef.png");
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  foodGroup = createGroup();
  customerGroup = createGroup();
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
if(gameState === 1){
  clear();
  game.play();
  spawnCustomers();
}
  if(gameState === 1 && tries2 === 2){
    lobbysound.stop();
    rank1sound.stop();
    rank2sound.stop();
    rank3sound.stop();
    rank4sound.stop();
    playsound.play();
    tries2 = 1;
  }
}

function spawnCustomers(){
  if(frameCount%200 === 0 && gameState === 1){
    customer = createSprite(Math.round(random(600, displayWidth/1.2)), 375, 200, 200);
    var rand = Math.round(random(1, 4));
    if(rand === 1){
      customer.addImage(customer1);
      customer.scale = 0.9;
    } else if(rand === 2){
      customer.addImage(customer2);
      customer.scale = 1.75;
    } else if(rand === 3){
      customer.addImage(customer3);
      customer.scale = 0.94;
    } else{
      customer.addImage(manyCustomers);
      customer.scale = 2;
    }
    customer.depth = 1;
    customerGroup.add(customer);
  }
}