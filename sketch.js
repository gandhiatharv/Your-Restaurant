/*NOTES:
1. paus & play game, someone has ended game, make sure deliveries does not go off screen
2. sweetalert, tutorial, chat, freeze
3. have pause and resume game features on games, have leave button and rename reset button to end game button, when someone pauses or resumes the game a notifcation comes up, when someone end the game a swal notification comes up, have tutorial on all multiplayer games
4. have tutorial in all games, update tutorials with all the different featyures
5. sound
6. other stuff on gmail agendas
powerups, pause and play, different views, coin system, last minute edits
7. freezing can be used only twice and does not reduce deliveries; add play and pause features on it; update rules of tutorial with these regulations
8. add these features on all multiplayer games
hide stuff when people finish the level and in the begining
have imgs in swal for powerups, hide and show poerups when necessary, put pause feature through database, when game is paused or ended, or frozen, chef should also be frozen
hhave chat feature, play and pause feature, different views, and different powerups, all the sound stuff, and displaying everyone's results together on all my games
9. pls wait for others to be ready & deliveries overflow, when it doesnt show current order you can serve pizza fix that glitch, pause and resume sound button
*/

var canvas, backgroundImage;

var gameState = 0;
var playerCount = 0;
var finishedPlayers = 0;
var tries = 2;
var tries2 = 2;
var tries3 = 2;
var tries4 = 2;
var tries5 = 2;
var tries6 = 2;
var tries7 = 2;
var tries8 = 2;
var tries9 = 2;
var tries10 = 2;
var tries11 = 2;
var tries12 = 2;
var alert = 0;
var chefsAtEnd = 0;
var allPlayers;
var database, passedFinish;
var playsound, lobbysound, rank1sound, rank2sound, rank3sound, rank4sound, servecustomersound, clapsound;
var playsound2, playsound3, playsound4, playsound5, playsound6, playsound7, playsound8;
var orders;
var chef1, chef2, chef3, chef4, chefs;
var tutorialtext = "Enter your nickname and join the game. Begin playing when 4 players have joined. There will be various levels in the game. Every couple moments you will lose $10.00 and customers will come to your restaurant at a rate that increases as you progress through levels and earn more money. Serve customers by checking the current order and dragging that respective food up to them. Whenever a customer arrives at your restaurant, your orders will increment by 1 and whenever you serve a customer, your deliveries will increment by 1. You can see all the other players' orders and deliveries at the top left and right sides of the screen respectively. You have to reach the target number of deliveries before anyone else to get 1st place. When you complete a level, your rank will be displayed. When everyone is ready for the next level, the next level of the game will begin. Every level, you have to deliver more orders than the previous one. You can play a sound you would like for your restaurant, and you may mute the game if you would like. You can use the freeze powerup by clicking the 'Freeze' button. If you use this powerup, you lose 5 deliveries and everyone on your team, including you, gets frozen for 10 seconds until a notification comes up telling you that time is up. You can also send messages in the group chat. You can press 'Tutorial' to view this tutorial again. Have fun!";

var levelnumber = 1;
var deliveryremovalnumber = 1000;

var pizza, burger, fries, burrito, taco, spaghetti, bread, maccheese, nachos;
var water, fanta, sprite, coke, gingerale, fruitpunch, lemonade, orangejuice, applejuice;
var cookie, muffin, cake, applepie, pudding, icecream, brownie;

var customer1, customer2, customer3, manyCustomers;
var food, customer, chef, foodGroup, customerGroup;
var form, player, game;
var table, tableimg, chefimg, dollarimg;

var message3 = "Pick A Sound For Your Restaurant";

var gameState2 = 2;

var framecountnumber, timer, variable3;

var muted = 0;

var pizzaimg, burgerimg, friesimg, burritoimg, tacoimg, spaghettiimg, breadimg, maccheeseimg, nachosimg;
var waterimg, fantaimg, spriteimg, cokeimg, gingeraleimg, fruitpunchimg, lemonadeimg, orangejuiceimg, applejuiceimg;
var cookieimg, muffinimg, cakeimg, applepieimg, puddingimg, icecreamimg, brownieimg;

var target = 100;

var message2 = "Winning Score: $" + target + ".00";

var playerNameCheck;

var currentorder = " ";

var message = " ";

var paused = "false";

var triesValue = 2;

var seconds = 0;
var minutes = 0;
var hours = 0;

var s = 0;
var w = 0;

var variable = 1;

var result;

var backimg;

var orders = 0;
var welcome;
var deliveries = 0;

var soundNumber = 1;

var multiplier = 2;

var multiplier2 = 1;

var price;

var songtitle, variable2;

var readyfornextlevel = 0;

var chatmessage1, chatmessage2, chatmessage3, chatmessage4, chatmessage5, multipliercost;

var firstPlace, secondPlace, thirdPlace, fourthPlace, name1, name2, name3, name4;

var chatphase = 1;

var gameended = "";

var oks = 0;

var moneyperquestionnum = 10;

let sel;

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

  dollarimg = loadImage("images/dollar.png");

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
  clapsound = loadSound("sound/clap.wav");

  a1 = loadImage("images/2.png");
  a2 = loadImage("images/3.png");
  a3 = loadImage("images/4.png");
  a4 = loadImage("images/5.png");
  a5 = loadImage("images/6.png");
  a6 = loadImage("images/7.png");
  a7 = loadImage("images/8.png");
  a8 = loadImage("images/9.png");
  a9 = loadImage("images/10.png");
  a10 = loadImage("images/11.png");
  a11 = loadImage("images/12.png");
  a12 = loadImage("images/13.png");
  a13 = loadImage("images/14.png");
  a14 = loadImage("images/15.png");
  a15 = loadImage("images/16.png");
  a16 = loadImage("images/17.png");
  a17 = loadImage("images/18.png");
  a18 = loadImage("images/19.png");
  a19 = loadImage("images/1.png");
  a20 = loadImage("images/0.png");

  backimg = loadImage("images/bg.jpg");

  tableimg = loadImage("images/tablebg.png");
  chefimg = loadAnimation("images/frontchef.png", "images/frontchef.png", "images/frontchef.png", "images/leftchef.png", "images/leftchef.png", "images/leftchef.png", "images/rightchef.png", "images/rightchef.png", "images/rightchef.png");
  chefimg2 = loadAnimation("images/frontchef.png");
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
 game = new Game();
 game.getState();
 game.getOks2();
game.start();
  foodGroup = createGroup(); 
  customerGroup = createGroup();
  makeFood();
  makeFood();
  sel = createSelect();
  sel.position(displayWidth/2.4, displayHeight/5);
sel.option('Select A Sound For Your Restaurant');
  sel.option('Sound 1');
  sel.option('Sound 2');
  sel.option('Sound 3');
  sel.option('Sound 4');
  sel.option('Sound 5');
  sel.option('Sound 6');
  sel.option('Sound 7');
  sel.option('Sound 8');
  sel.selected('Select A Sound For Your Restaurant');
sel.changed(mySelectEvent);
}



function draw(){
  if(levelnumber <= 5){
    framecountnumber = 380;
    } else if(levelnumber > 5 && levelnumber <=10){
      framecountnumber = 280;
      } else if(levelnumber > 10 && levelnumber <= 15){
        framecountnumber = 180;
      } else if(levelnumber > 15){
        framecountnumber = 80;
      }

  game.getName1();
  game.getName2();
  game.getName3();
  game.getName4();

  if(gameended!==""&&oks < 3){
          swal({ title: `Game Ended`, text: gameended, imageUrl: "https://raw.githubusercontent.com/gandhiatharv/Your-Restaurant/main/images/waving.jpeg", imageSize: "306x220", confirmButtonText: "Ok", },    function(isConfirm) {
            if (isConfirm) {
              Player.updateOks(oks+1);
location.reload();
            }});
          }

if(alert === 1 && tries11 === 2){
  tries11 = 1;
  swal({ title: 'You Are Frozen',
  text: "You can return to cooking in a couple moments, when the food gets unlocked.", 
  imageUrl: "https://raw.githubusercontent.com/gandhiatharv/Your-Restaurant/main/images/frozen.png", 
  imageSize: "200x200", 
  confirmButtonText: "Ok", });
}

if(gameState === 1){
  variable3 = 1;
}

if(gameState === 3){
  variable3 = 2;
}

  if(gameState === 3 && variable3 === 2){
    if(frameCount%300 === 0){
      Player.updateFreezeAlert(0);
      game.update(1);
    }
  }

  if(paused === "false"){
if(frameCount%deliveryremovalnumber === 0){
  if(gameState2 === 2){
  player.delivery = player.delivery - 10;
  }
}
  }

if(gameState === 0 && tries6 === 2 && playerCount!==4&&gameState!==1){
  showTutorial();
  tries6 = 1;
}

/*if(alert === 1){
  swal({ title: 'You Are Frozen',
  text: "You can return to cooking in 10 seconds.", 
  imageUrl: "https://raw.githubusercontent.com/gandhiatharv/Your-Restaurant/main/images/frozen.png", 
  imageSize: "200x200", 
  confirmButtonText: "Ok", });
}*/

/*if(gameState === 3){
  if(frameCount%300 === 0 && w === 1){
    game.update(0);
    w = 0;
    swal({ title: 'Click The Button',
    text: "You can resume cooking now!", 
    imageUrl: "https://raw.githubusercontent.com/gandhiatharv/Your-Restaurant/main/images/thumbsup.png", 
    imageSize: "150x150", 
    confirmButtonText: "Ok", });
  }
}*/

if(gameState === 0 && tries === 2){
stopSound();
if(muted === 0){
  lobbysound.play();
}

  lobbysound.setVolume(0.1);
  tries = 1;
}

if(gameState === 0&&oks === 3){
  Player.updateGameEnded("");
  Player.updateOks(0);
}

if(frameCount%300 === 0 && variable === 1){
  tries4 = 1;
}

if(tries4 === 1){
  message = "Current Order: " + currentorder;
} else{
  message = " ";
}

if(paused==="false"){
if(gameState === 1){
if(gameState2 === 2){
  if(frameCount%30 === 0){
    player.seconds = player.seconds+1;
    if(player.seconds === 60){
      player.minutes = player.minutes+1;
      player.seconds = 0; 
      if(player.minutes === 60){
        player.hours = player.hours+1;
        player.minutes = 0;
        player.seconds = 0;
      }
    }
  }
}
}
}

  if(playerCount === 4 && finishedPlayers === 0 && gameState===0){
    game.update(1);
    Player.updateGameEnded("");
    Player.updateOks(0);
    if(tries7 ===2){
      tries7 = 1;
    swal(
      {
        title: `Level 1`,
        text: "Your goal is to get $"+target+".00 before anyone else. Good luck!",
        imageUrl:
          "https://raw.githubusercontent.com/gandhiatharv/Your-Restaurant/main/images/nextlevel.gif",
        imageSize: "324x172",
        confirmButtonText: "Play"
      },
    );
    }
  }

if(finishedPlayers === 4){
  game.update(2);
}
if(gameState === 1||gameState === 3){
  clear();
  game.play();
}
if(gameState === 0){
  game.updateMsg();
}
  if(gameState === 1 && tries2 === 2){
stopSound();
if(muted === 0){
playsound.play();
}
playsound.setVolume(0.1); songtitle = "Sound 1";
    tries2 = 1;
  }
}

function spawnCustomers(){
  if(frameCount%framecountnumber === 0 && gameState === 1){
    customer = createSprite(0, displayHeight/2.815);
    player.order = player.order+1;
    var rand = Math.round(random(1, 4));
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
    currentOrderCheck();
    customer.depth = 1;
    customer.lifetime = 200;
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
       bread.depth = 0.5;
       taco.depth = bread.depth + 1;
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
    brownie.scale = displayWidth/3700;
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
    muffin.scale = displayWidth/12000;
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

  function currentOrderCheck(){
    var rand2 = Math.round(random(1, 1));
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
  }

  function stopSound(){
    rank1sound.stop();
    rank2sound.stop();
    rank3sound.stop();
    rank4sound.stop();
    playsound.stop();
    playsound2.stop();
    playsound3.stop();
    playsound4.stop();
    playsound5.stop();
    playsound6.stop();
    playsound7.stop();
    playsound8.stop();
    lobbysound.stop();
    servecustomersound.stop();
    clapsound.stop();
  }

  function stopSound1(){
    rank1sound.stop();
  rank2sound.stop();
  rank3sound.stop();
  rank4sound.stop();
  clapsound.stop();
  playsound.stop();
  playsound2.stop();
  playsound3.stop();
  playsound4.stop();
  playsound5.stop();
  playsound6.stop();
  playsound7.stop();
  playsound8.stop();
  lobbysound.stop();
  }

  function checkSound(){
    if(soundNumber === 1){
      if(muted === 0){playsound.play();}
      playsound.setVolume(0.1); songtitle = "Sound 1";
    } else if(soundNumber === 2){
      if(muted === 0){playsound2.play();}
      playsound2.setVolume(0.1); songtitle = "Sound 2";
    } else if(soundNumber === 3){
      if(muted === 0){playsound3.play();}
      playsound3.setVolume(0.1); songtitle = "Sound 3";
    } else if(soundNumber === 4){
      if(muted === 0){playsound4.play();}
      playsound4.setVolume(0.1); songtitle = "Sound 4";
    } else if(soundNumber === 5){
      if(muted === 0){playsound5.play();}
      playsound5.setVolume(0.1); songtitle = "Sound 5";
    } else if(soundNumber === 6){
      if(muted === 0){playsound6.play();}
      playsound6.setVolume(0.1); songtitle = "Sound 6";
    } else if(soundNumber === 7){
      if(muted === 0){playsound7.play();}
      playsound7.setVolume(0.1); songtitle = "Sound 7";
    } else if(soundNumber === 8){
      if(muted === 0){playsound8.play();}
      playsound8.setVolume(0.1); songtitle = "Sound 8";
    }
  }

  function showTutorial() {
    swal(
      {
        title: `Tutorial`,
        text: tutorialtext,
        imageUrl:
          "https://raw.githubusercontent.com/gandhiatharv/Your-Restaurant/main/images/tutorial.jpeg",
        imageSize: "365x171",
        confirmButtonText: "Start Playing"
      },
    );
  }

  function nextround(){
player.delivery = 0;
player.order = 0;
player.seconds = 0;
player.minutes = 0;
player.hours = 0;
target = Math.round(target*1.5);
levelnumber = levelnumber + 1;
deliveryremovalnumber = deliveryremovalnumber/1.15;
    player.update();
    stopSound();
    gameState2 = 2;
    checkSound();
    message3 = "Pick A Sound For Your Restaurant";
    message2 = "Winning Score: $" + target + ".00";
    message = " ";
    tries3 = 2;
    variable = 1;
    tries4 = 2;
    tries5 = 2;
    tries8 = 2;
    tries12 = 2;
    form.showMuteAndUnmute();
    swal(
      {
        title: `Level `+levelnumber,
        text: "Your goal is to get $"+target+".00 before anyone else. Good luck!",
        imageUrl:
          "https://raw.githubusercontent.com/gandhiatharv/Your-Restaurant/main/images/nextlevel.gif",
        imageSize: "324x172",
        confirmButtonText: "Play"
      },
    );
    Player.updateChefsAtEnd(0);
    }
    
    function mySelectEvent() {
      let item = sel.value();
      stopSound1();
      if(item === "Select A Sound For Your Restaurant"){
        stopSound1();
      } else if(item === "Sound 1"){
        soundNumber = 1;
      }
      if(soundNumber === 1){
        soundNumber = 8;
      } else{
        soundNumber = soundNumber - 1;
      }
      checkSound();
    }