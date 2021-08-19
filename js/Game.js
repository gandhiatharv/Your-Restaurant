class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }
 
 //code for dropdown sounds

  /*stopSound1();
  playsound.play();

  stopSound1();
  playsound2.play();
  
  stopSound1();
  playsound3.play();

  stopSound1();
  playsound4.play();

  stopSound1();
  playsound5.play();

  stopSound1();
  playsound6.play();

  stopSound1();
  playsound7.play();

  stopSound1();
  playsound8.play();
  */


  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();

      form.display();
    }
    chef1 = createSprite(displayWidth/2, displayHeight/1.5);
    chef1.addAnimation("cooking", chefimg);
    chef1.visible = false;
    chef1.scale = 2;
    chef1.depth = 2;
    chef2 = createSprite(displayWidth/2, displayHeight/1.5);
    chef2.addAnimation("cooking", chefimg);
    chef2.visible = false;
    chef2.scale = 2;
    chef2.depth = 2;
    chef3 = createSprite(displayWidth/2, displayHeight/1.5);
    chef3.addAnimation("cooking", chefimg);
    chef3.visible = false;
    chef3.scale = 2;
    chef3.depth = 2;
    chef4 = createSprite(displayWidth/2, displayHeight/1.5);
    chef4.addAnimation("cooking", chefimg);
    chef4.visible = false;
    chef4.scale = 2;
    chef4.depth = 2;
    chefs = [chef1, chef2, chef3, chef4];

  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();
player.getChefsAtEnd();
player.getFinishedPlayers();

    if(allPlayers !== undefined){
      image(tableimg, 0, 0, displayWidth, displayHeight); 
      var index = 0;
      var x = displayWidth/2;
      var y;
      for(var plr in allPlayers){
       // text(allPlayers.chef1.name + "'s Score: "+allPlayers.player1.score,displayWidth/22,displayHeight/20);
       // text(allPlayers.chef2.name + "'s Score: " + allPlayers.player2.score, displayWidth/22,displayHeight/12);
       // text(allPlayers.chef3.name + "'s Score: "+allPlayers.player1.score,displayWidth/22,displayHeight/20);
      //  text(allPlayers.chef4.name + "'s Score: " + allPlayers.player2.score, displayWidth/22,displayHeight/12);
        index = index + 1;
        chefs[index-1].visible = true;
        if (index === player.index){
          chefs[index-1].shapeColor = "red";
        }
      }
      }


      spawnCustomers();

if(player.index!= null){
  if(mousePressedOver(pizza)){
    // pizza.depth = 1.5;
    pizza.x = mouseX;
    pizza.y = mouseY;
    if(currentorder === "Pizza"&&pizza.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); deliveries = deliveries + 1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); servecustomersound.play();
      pizza.destroy();
      pizz();
  }
}
    if(mousePressedOver(burger)){
   //  burger.depth = 1.5;
    burger.x = mouseX;
    burger.y = mouseY;
    if(currentorder === "Burger"&&burger.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); deliveries = deliveries + 1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); servecustomersound.play();
      burger.destroy();
      burge();
  }
  }
    if(mousePressedOver(burrito)){
   //    burrito.depth = 1;
    burrito.x = mouseX;
    burrito.y = mouseY;
    if(currentorder === "Burrito"&&burrito.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); deliveries = deliveries + 1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); servecustomersound.play();
      burrito.destroy();
      burrit();
  }
  }
    if(mousePressedOver(taco)){
    taco.x = mouseX;
    taco.y = mouseY;
    if(currentorder === "Taco"&&taco.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); deliveries = deliveries + 1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); servecustomersound.play();
      taco.destroy();
      tac();
  }
  }
    if(mousePressedOver(fries)){
    fries.x = mouseX;
    fries.y = mouseY;
    if(currentorder === "Fries"&&fries.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); deliveries = deliveries + 1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); servecustomersound.play();
      fries.destroy();
      frie();
  }
  }
    if(mousePressedOver(spaghetti)){
    spaghetti.x = mouseX;
    spaghetti.y = mouseY;
    if(currentorder === "Spaghetti"&&spaghetti.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); deliveries = deliveries + 1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); servecustomersound.play();
      spaghetti.destroy();
      spaghett();
  }
  }
    if(mousePressedOver(bread)){
    bread.x = mouseX;
    bread.y = mouseY;
    if(currentorder === "Bread"&&bread.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); deliveries = deliveries + 1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); servecustomersound.play();
      bread.destroy();
      brea();
  }
  }
    if(mousePressedOver(maccheese)){
    maccheese.x = mouseX;
    maccheese.y = mouseY;
    if(currentorder === "Macaroni & Cheese"&&maccheese.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); deliveries = deliveries + 1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); servecustomersound.play();
      maccheese.destroy();
      macchees();
  }
  }
    if(mousePressedOver(nachos)){
    nachos.x = mouseX;
    nachos.y = mouseY;
    if(currentorder === "Nachos"&&nachos.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); deliveries = deliveries + 1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); servecustomersound.play();
      nachos.destroy();
      nacho();
  }
  }
    if(mousePressedOver(sprite)){
    sprite.x = mouseX;
    sprite.y = mouseY;
    if(currentorder === "Sprite"&&sprite.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); deliveries = deliveries + 1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); servecustomersound.play();
      sprite.destroy();
      sprit();
  }
  }
    if(mousePressedOver(coke)){
    coke.x = mouseX;
    coke.y = mouseY;
    if(currentorder === "Coke"&&coke.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); deliveries = deliveries + 1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); servecustomersound.play();
      coke.destroy();
      cok();
  }
  }
    if(mousePressedOver(fanta)){
    fanta.x = mouseX;
    fanta.y = mouseY;
    if(currentorder === "Fanta"&&fanta.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); deliveries = deliveries + 1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); servecustomersound.play();
      fanta.destroy();
      fant();
  }
  }
    if(mousePressedOver(gingerale)){
    gingerale.x = mouseX;
    gingerale.y = mouseY;
    if(currentorder === "Gingerale"&&gingerale.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); deliveries = deliveries + 1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); servecustomersound.play();
      gingerale.destroy();
      gingeral();
  }
  }
    if(mousePressedOver(fruitpunch)){
    fruitpunch.x = mouseX;
    fruitpunch.y = mouseY;
    if(currentorder === "Fruit Punch"&&fruitpunch.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); deliveries = deliveries + 1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); servecustomersound.play();
      fruitpunch.destroy();
      fruitpunc();
  }
  }
    if(mousePressedOver(lemonade)){
    lemonade.x = mouseX;
    lemonade.y = mouseY;
    if(currentorder === "Lemonade"&&lemonade.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); deliveries = deliveries + 1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); servecustomersound.play();
      lemonade.destroy();
      lemonad();
  }
  }
    if(mousePressedOver(orangejuice)){
    orangejuice.x = mouseX;
    orangejuice.y = mouseY;
    if(currentorder === "Orange Juice"&&orangejuice.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); deliveries = deliveries + 1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); servecustomersound.play();
      orangejuice.destroy();
      orangejuic();
  }
  }
    if(mousePressedOver(applejuice)){
    applejuice.x = mouseX;
    applejuice.y = mouseY;
    if(currentorder === "Apple Juice"&&applejuice.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); deliveries = deliveries + 1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); servecustomersound.play();
      applejuice.destroy();
      applejuic();
  }
  }
    if(mousePressedOver(water)){
    water.x = mouseX;
    water.y = mouseY;
    if(currentorder === "Water"&&water.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); deliveries = deliveries + 1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); servecustomersound.play();
      water.destroy();
      wate();
  }
  }
    if(mousePressedOver(cookie)){
    cookie.x = mouseX;
    cookie.y = mouseY;
    if(currentorder === "Cookies"&&cookie.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); deliveries = deliveries + 1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); servecustomersound.play();
      cookie.destroy();
      cooki();
  }
  }
    if(mousePressedOver(muffin)){
    muffin.x = mouseX;
    muffin.y = mouseY;
    if(currentorder === "Muffin"&&muffin.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); deliveries = deliveries + 1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); servecustomersound.play();
      muffin.destroy();
      muffi();
  }
  }
    if(mousePressedOver(cake)){
    cake.x = mouseX;
    cake.y = mouseY;
    if(currentorder === "Cake"&&cake.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); deliveries = deliveries + 1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); servecustomersound.play();
      cake.destroy();
      cak();
  }
  }
    if(mousePressedOver(applepie)){
    applepie.x = mouseX;
    applepie.y = mouseY;
    if(currentorder === "Apple Pie"&&applepie.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); deliveries = deliveries + 1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); servecustomersound.play();
      applepie.destroy();
      applepi();
  }
  }
    if(mousePressedOver(pudding)){
    pudding.x = mouseX;
    pudding.y = mouseY;
    if(currentorder === "Pudding"&&pudding.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); deliveries = deliveries + 1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); servecustomersound.play();
      pudding.destroy();
      puddin();
  }
  }
    if(mousePressedOver(brownie)){
    brownie.x = mouseX;
    brownie.y = mouseY;
    if(currentorder === "Brownie"&&brownie.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); deliveries = deliveries + 1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); servecustomersound.play();
      brownie.destroy();
      browni();
  }
  }
    if(mousePressedOver(icecream)){
    icecream.x = mouseX;
    icecream.y = mouseY;
    if(currentorder === "Ice Cream"&&icecream.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); deliveries = deliveries + 1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); servecustomersound.play();
      icecream.destroy();
      icecrea();
  }
}
}

      textSize(20);
      fill("white");
      strokeWeight(2);
      stroke("orange");
   /* text(allPlayers.chef1.name + "'s Score: "+allPlayers.player1.score,displayWidth/22,displayHeight/20);
      text(allPlayers.chef2.name + "'s Score: " + allPlayers.player2.score, displayWidth/22,displayHeight/12);
      text(allPlayers.chef3.name + "'s Score: "+allPlayers.player3.score,displayWidth/22,displayHeight/20);
      text(allPlayers.chef4.name + "'s Score: " + allPlayers.player4.score, displayWidth/22,displayHeight/12);*/
      console.log(displayHeight);
        console.log(player.distance);
        
        if(player.distance>=height*5 && tries3 === 2){
          stopSound();
          tries3 = tries3 - 1;
    player.rank+=1;
      Player.updateChefsAtEnd(player.rank);
      console.log(player.rank);
      if(player.rank === 1){
        rank1sound.play();
      swal({ title: `1st Place!`, text: "Sensational job! You were ridiculously fast!", imageUrl: "https://raw.githubusercontent.com/whitehatjr/PiratesInvasion/main/assets/boat.png", imageSize: "150x150", confirmButtonText: "Ok", });
    } else if (player.rank === 2){
      rank2sound.play();
      swal({ title: `2nd Place!`, text: "Awesome! Second place is just the first place loser.", imageUrl: "https://raw.githubusercontent.com/whitehatjr/PiratesInvasion/main/assets/boat.png", imageSize: "150x150", confirmButtonText: "Ok", });
    } else if (player.rank === 3){
      rank3sound.play();
      swal({ title: `3rd Place`, text: "Great effort! You're not too far out from 1st!", imageUrl: "https://raw.githubusercontent.com/whitehatjr/PiratesInvasion/main/assets/boat.png", imageSize: "150x150", confirmButtonText: "Ok", });
    } else{
      rank4sound.play();
      swal({ title: `Last Place`, text: "It's okay! Once you put more time, energy, and thought on the track, you will be a moonshiner.", imageUrl: "https://raw.githubusercontent.com/whitehatjr/PiratesInvasion/main/assets/boat.png", imageSize: "150x150", confirmButtonText: "Ok", });
    }
    }
          player.update();
          //display sprites
          drawSprites();
          fill("blue");
          textSize(20);
          textFont("Courier");
          //text("Orders: " + orders, displayWidth/65, displayHeight/30);
          text("Orders: " + orders, displayWidth/87.2727272727, displayHeight/27);
          text("Deliveries: " + deliveries, displayWidth/1.14490161002, displayHeight/27);
          text("Current Order: " + currentorder, displayWidth/2.625, displayHeight/27);
          textSize(50);
          text(hours+":"+minutes+":"+seconds, displayWidth/15, displayHeight/1.25);
          textSize(20);
    }

}
