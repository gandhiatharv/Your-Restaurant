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
var orders;
var chef1, chef2, chef3, chef4, chefs;

 //add code to play sounds from restaurant sound options when gamestate is PLAY and to stop them when needed

var pizza, burger, fries, burrito, taco, spaghetti, bread, maccheese, nachos;
var water, fanta, sprite, coke, gingerale, fruitpunch, lemonade, orangejuice, applejuice;
var cookie, muffin, cake, applepie, pudding, icecream, brownie;

var customer1, customer2, customer3, manyCustomers;
var food, customer, chef, foodGroup, customerGroup;
var form, player, game;
var table, tableimg, chef, chefimg;

var pizzaimg, burgerimg, friesimg, burritoimg, tacoimg, spaghettiimg, breadimg, maccheeseimg, nachosimg;
var waterimg, fantaimg, spriteimg, cokeimg, gingeraleimg, fruitpunchimg, lemonadeimg, orangejuiceimg, applejuiceimg;
var cookieimg, muffinimg, cakeimg, applepieimg, puddingimg, icecreamimg, brownieimg;



var currentorder;

var orders = 0;
var deliveries = 0;

function preload(){
  pizzaimg = loadImage("images/food1.png");
  burgerimg = loadImage("images/food2.png");
  friesimg = loadImage("images/food3.png");
  burritoimg = loadImage("images/food4.png");
  tacoimg = loadImage("images/food5.png");
  spaghettiimg = loadImage("images/food6.png");
  breadimg = loadImage("images/food7.png");
  maccheeseimg = loadImage("images/food8.png");
  nachosimg = loadImage("images/food9.png");

  waterimg = loadImage("images/drink1.png");
  fantaimg = loadImage("images/drink2.png");
  spriteimg = loadImage("images/drink3.png");
  cokeimg = loadImage("images/drink4.png");
  gingeraleimg = loadImage("images/drink5.png");
  fruitpunchimg = loadImage("images/drink6.png");
  lemonadeimg = loadImage("images/drink7.png");
  orangejuiceimg = loadImage("images/drink8.png");
  applejuiceimg = loadImage("images/drink9.png");

  cookieimg = loadImage("images/dessert1.png");
  muffinimg = loadImage("images/dessert2.png");
  cakeimg = loadImage("images/dessert3.png");
  applepieimg = loadImage("images/dessert4.png");
  puddingimg = loadImage("images/dessert5.png");
  icecreamimg = loadImage("images/dessert6.png");
  brownieimg = loadImage("images/dessert7.png");


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
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  console.log(displayWidth);
  console.log(displayHeight);
  game = new Game();
  game.getState();
  game.start();
  foodGroup = createGroup(); 
  customerGroup = createGroup();
  makeFood();
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

  if(mousePressedOver(pizza)){
    // pizza.depth = 1.5;
    pizza.x = mouseX;
    pizza.y = mouseY+displayHeight/6.17142857143;
  }
    if(mousePressedOver(burger)){
   //  burger.depth = 1.5;
    burger.x = mouseX;
    burger.y = mouseY+displayHeight/6.17142857143;
  }
    if(mousePressedOver(burrito)){
   //    burrito.depth = 1;
    burrito.x = mouseX;
    burrito.y = mouseY+displayHeight/6.17142857143;
  }
    if(mousePressedOver(taco)){
    taco.x = mouseX;
    taco.y = mouseY+displayHeight/6.17142857143;
  }
    if(mousePressedOver(fries)){
    fries.x = mouseX;
    fries.y = mouseY+displayHeight/6.17142857143;
  }
    if(mousePressedOver(spaghetti)){
    spaghetti.x = mouseX;
    spaghetti.y = mouseY+displayHeight/6.17142857143;
  }
    if(mousePressedOver(bread)){
    bread.x = mouseX;
    bread.y = mouseY+displayHeight/6.17142857143;
  }
    if(mousePressedOver(maccheese)){
    maccheese.x = mouseX;
    maccheese.y = mouseY+displayHeight/6.17142857143;
  }
    if(mousePressedOver(nachos)){
    nachos.x = mouseX;
    nachos.y = mouseY+displayHeight/6.17142857143;
  }
    if(mousePressedOver(sprite)){
    sprite.x = mouseX;
    sprite.y = mouseY+displayHeight/6.17142857143;
  }
    if(mousePressedOver(coke)){
    coke.x = mouseX;
    coke.y = mouseY+displayHeight/6.17142857143;
  }
    if(mousePressedOver(fanta)){
    fanta.x = mouseX;
    fanta.y = mouseY+displayHeight/6.17142857143;
  }
    if(mousePressedOver(gingerale)){
    gingerale.x = mouseX;
    gingerale.y = mouseY+displayHeight/6.17142857143;
  }
    if(mousePressedOver(fruitpunch)){
    fruitpunch.x = mouseX;
    fruitpunch.y = mouseY+displayHeight/6.17142857143;
  }
    if(mousePressedOver(lemonade)){
    lemonade.x = mouseX;
    lemonade.y = mouseY+displayHeight/6.17142857143;
  }
    if(mousePressedOver(orangejuice)){
    orangejuice.x = mouseX;
    orangejuice.y = mouseY+displayHeight/6.17142857143;
  }
    if(mousePressedOver(applejuice)){
    applejuice.x = mouseX;
    applejuice.y = mouseY+displayHeight/6.17142857143;
  }
    if(mousePressedOver(water)){
    water.x = mouseX;
    water.y = mouseY+displayHeight/6.17142857143;
  }
    if(mousePressedOver(cookie)){
    cookie.x = mouseX;
    cookie.y = mouseY+displayHeight/6.17142857143;
  }
    if(mousePressedOver(muffin)){
    muffin.x = mouseX;
    muffin.y = mouseY+displayHeight/6.17142857143;
  }
    if(mousePressedOver(cake)){
    cake.x = mouseX;
    cake.y = mouseY+displayHeight/6.17142857143;
  }
    if(mousePressedOver(applepie)){
    applepie.x = mouseX;
    applepie.y = mouseY+displayHeight/6.17142857143;
  }
    if(mousePressedOver(pudding)){
    pudding.x = mouseX;
    pudding.y = mouseY+displayHeight/6.17142857143;
  }
    if(mousePressedOver(brownie)){
    brownie.x = mouseX;
    brownie.y = mouseY+displayHeight/6.17142857143;
  }
    if(mousePressedOver(icecream)){
    icecream.x = mouseX;
    icecream.y = mouseY+displayHeight/6.17142857143;
  }

}

function spawnCustomers(){
  if(frameCount%400 === 0 && gameState === 1){
    customer = createSprite(0, displayHeight/2.815);
    var rand = Math.round(random(1, 4));
    var rand2 = Math.round(random(1, 25));
    if(rand === 1){
      customer.addImage(customer1);
      customer.scale = displayWidth/2100;
      customer.x = random(displayWidth/4.2, displayWidth/1.07);
    } else if(rand === 2){
      customer.addImage(customer2);
      customer.scale = displayWidth/1092.857142857;
            customer.x = random(displayWidth/4.2, displayWidth/1.08);
    } else if(rand === 3){
      customer.addImage(customer3);
      customer.scale = displayWidth/2000.91489362;
      customer.x = random(displayWidth/3.2, displayWidth/1.17);
    } else{
      customer.addImage(manyCustomers);
      customer.scale = displayWidth/930;
      customer.x = random(displayWidth/2.35, displayWidth/1.35);
    }
    if(rand2 === 1){
      currentorder = "Pizza";
    } else if (rand2 === 2){
      currentorder = "Burger";
    } else if (rand2 === 3){
      currentorder = "Fries";
    } else if (rand2 === 4){
      currentorder = "Spaghetti";
    } else if (rand2 === 5){
      currentorder = "Macaroni & Cheese";
    } else if (rand2 === 6){
      currentorder = "Burger";
    } else if (rand2 === 7){
      currentorder = "Spaghetti";
    } else if (rand2 === 8){
      currentorder = "Bread";
    } else if (rand2 === 9){
      currentorder = "Nachos";
     } else if (rand2 === 10){
        currentorder = "Sprite";
      } else if(rand2 === 11){
      currentorder = "Water";
    } else if (rand2 === 12){
      currentorder = "Coke";
    } else if (rand2 === 13){
      currentorder = "Fanta";
    } else if (rand2 === 14){
      currentorder = "Gingerale";
    } else if (rand2 === 15){
      currentorder = "Lemonade";
    } else if (rand2 === 16){
      currentorder = "Orange Juice";
    } else if (rand2 === 17){
      currentorder = "Apple Juice";
    } else if (rand2 === 18){
      currentorder = "Fruit Punch";
    } else if (rand2 === 19){
      currentorder = "Cookies";
    } else if (rand2 === 20){
      currentorder = "Cake";
    } else if (rand2 === 21){
      currentorder = "Muffin";
    } else if (rand2 === 22){
      currentorder = "Brownie";
    } else if (rand2 === 23){
      currentorder = "Ice Cream";
    }else if (rand2 === 24){
      currentorder = "Apple Pie";
    } else if (rand2 === 25){
      currentorder = "Pudding";
    }
    customer.depth = 1;
    customerGroup.add(customer);
  }
}

function pizz(){
  pizza = createSprite(width/1.2, height/1.65);
    pizza.addImage(pizzaimg);
    pizza.scale = displayWidth/2057.14285714; 
       pizza.depth = 1.5;
              foodGroup.add(pizza);
  }
  function burge(){
      burger = createSprite(width/12, height/1.76);
    burger.addImage(burgerimg);
    burger.scale = displayWidth/5760; 
       burger.depth = 1.5;
              foodGroup.add(burger);
  }
  function frie(){
        fries = createSprite(width/6, height/1.8);
    fries.addImage(friesimg);
    fries.scale = displayWidth/5760; 
       fries.depth = 1.5;
              foodGroup.add(fries); 
  }
  function burrit(){
       burrito = createSprite(width/12, height/1.5);
    burrito.addImage(burritoimg);
    burrito.scale = displayWidth/4800;
       burrito.depth = 1.5;
              foodGroup.add(burrito);
  }
  function tac(){
     taco = createSprite(width/5.6, height/1.5);
    taco.addImage(tacoimg);
    taco.scale = displayWidth/7200;
       taco.depth = 1.5;
              foodGroup.add(taco);
  }
  function spaghett(){
       spaghetti = createSprite(width/4, height/1.7);
    spaghetti.addImage(spaghettiimg);
    spaghetti.scale = displayWidth/5760;
       spaghetti.depth = 1.5;
              foodGroup.add(spaghetti);
  }
  function brea(){
     bread = createSprite(width/3.8, height/1.48);
    bread.addImage(breadimg);
    bread.scale = displayWidth/7200;
       bread.depth = 1.5;
              foodGroup.add(bread);
  }
  function macchees(){
     maccheese = createSprite(width/3, height/1.7);
    maccheese.addImage(maccheeseimg);
    maccheese.scale = displayWidth/7200;
       maccheese.depth = 1.5;
              foodGroup.add(maccheese);
  }
  function nacho(){
       nachos = createSprite(width/2.9, height/1.48);
    nachos.addImage(nachosimg);
    nachos.scale = displayWidth/11076.9230769;
       nachos.depth = 1.5;
              foodGroup.add(nachos);
  }
    function wate(){
         water = createSprite(width/55, height/1.85);
    water.addImage(waterimg);
    water.scale = displayWidth/11076.9230769;
         water.depth = 1.5;
                foodGroup.add(water);
  }
  function sprit(){
         sprite = createSprite(width/20, height/2.35);
    sprite.addImage(spriteimg);
    sprite.scale = displayWidth/9000;
       sprite.depth = 1.5;
              foodGroup.add(sprite);
  }
  function fant(){
           fanta = createSprite(width/12, height/2.35);
    fanta.addImage(fantaimg);
    fanta.scale = displayWidth/10285.7142857;
       fanta.depth = 1.5;
              foodGroup.add(fanta);
  }
    function cok(){
     coke = createSprite(width/55, height/2.35);
    coke.addImage(cokeimg);
                foodGroup.add(coke);
         coke.depth = 1.5;
    coke.scale = displayWidth/9000;
  }
  function gingeral(){
         gingerale = createSprite(width/8, height/2.35);
    gingerale.addImage(gingeraleimg);
              foodGroup.add(gingerale);
       gingerale.depth = 1.5;
    gingerale.scale = displayWidth/9000;
  }
  function fruitpunc(){
           fruitpunch = createSprite(width/55, height/2.02);
    fruitpunch.addImage(fruitpunchimg);
    fruitpunch.scale = displayWidth/11076.9230769;
       fruitpunch.depth = 1.5;
              foodGroup.add(fruitpunch);
          water.depth = fruitpunch.depth+1;
  }
    function lemonad(){
             lemonade = createSprite(width/21, height/2.04);
    lemonade.addImage(lemonadeimg);
    lemonade.scale = displayWidth/3600; 
         lemonade.depth = 1.5;
                foodGroup.add(lemonade);
  }
  function orangejuic(){
     orangejuice = createSprite(width/13, height/2.06);
    orangejuice.addImage(orangejuiceimg);
    orangejuice.scale = displayWidth/11076.9230769;  
       orangejuice.depth = 1.5;
              foodGroup.add(orangejuice);
  }
  function applejuic(){
     applejuice = createSprite(width/8, height/2.04);
    applejuice.addImage(applejuiceimg);
    applejuice.scale = displayWidth/14400;
       applejuice.depth = 1.5;
              foodGroup.add(applejuice);
  }  
    function browni(){
         brownie = createSprite(width/1.73, height/2.08);
    brownie.addImage(brownieimg);
    brownie.scale = displayWidth/4800;
         brownie.depth = 1.5;
                foodGroup.add(brownie);
  }
    function icecrea(){
         icecream = createSprite(width/1.55, height/2.08);
    icecream.addImage(icecreamimg);
    icecream.scale = displayWidth/18000;
         icecream.depth = 1.5;
            foodGroup.add(icecream);
  }
  function puddin(){
    pudding = createSprite(width/2.25, height/2.08);
    pudding.addImage(puddingimg);
pudding.scale = displayWidth/9600;
  pudding.depth = 1.5;
   foodGroup.add(pudding);
}
function applepi(){
    applepie = createSprite(width/1.4, height/2.08);
applepie.addImage(applepieimg);
applepie.scale = displayWidth/4800;
  applepie.depth = 1.5;
   foodGroup.add(applepie);
}
    function cak(){
         cake = createSprite(width/2.6, height/2.08);
    cake.addImage(cakeimg);
    cake.scale = displayWidth/9600;
         cake.depth = 1.5;
          foodGroup.add(cake);
  }
  function muffi(){
         muffin = createSprite(width/3.35, height/2.08);
    muffin.addImage(muffinimg);
    muffin.scale = displayWidth/9600;
       muffin.depth = 1.5;
      foodGroup.add(muffin);
  }
  function cooki(){
          cookie = createSprite(width/4.5, height/2.08);
    cookie.addImage(cookieimg);
    cookie.scale = displayWidth/14400;
     cookie.depth = 1.5;
    foodGroup.add(cookie);
  }
  
  function makeFood(){
    pizz();
    burge();
    frie();
    burrit();
    tac();
    spaghett();
    brea();
    macchees();
    nacho();
    wate();
    sprit();
    fant();
    cok();
    gingeral();
    fruitpunc();
    lemonad();
    orangejuic();
    applejuic();
    browni();
    icecrea();
    puddin();
    applepi();
    cak();
    muffi();
    cooki();
  }
  
  function mouseReleased(){
    foodGroup.destroyEach();
    makeFood();
  }

  function keyPressed(){
    if (keyCode === 13 && gameState === 0) {
      form.enter();
    }
    if (keyCode === 36 && gameState === 0) {
      form.enter();
    }
  }