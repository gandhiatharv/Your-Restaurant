class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

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
    if(tries5 === 2){
      form.showButtons();
      tries5 = 1;
    }
    drawSprites();
    strokeWeight(2);
    stroke("orange");
    fill("blue");
    textSize(20);
    textFont("Courier");
    text("Game Start", 120, 100)
    Player.getPlayerInfo();
player.getChefsAtEnd();
player.getReadiness();
player.getFinishedPlayers();
player.updateChefsEnd();
player.getMessage1();
player.getMessage2();
player.getMessage3();
player.getMessage4();
player.getMessage5();
player.getChatPhase();
player.getFreezeAlert();
player.getFirstPlace();
player.getSecondPlace();
player.getThirdPlace();
player.getFourthPlace();


    if(allPlayers !== undefined){
      image(tableimg, 0, 0, displayWidth, displayHeight); 
      var index = 0;
      var x = displayWidth/2;
      var y;
      var display_position = displayHeight/27;
      for(var plr in allPlayers){    
        index = index + 1;
        chefs[index-1].visible = true;
        if (index === player.index){
          chefs[index-1].shapeColor = "red";
        }
        text("Chef "+allPlayers.player1.name + "'s Orders: "+allPlayers.player1.order,displayWidth/65,display_position);
        text("Chef "+allPlayers.player1.name + "'s Deliveries: "+allPlayers.player1.delivery,displayWidth/1.3,display_position);
        text("Chef "+allPlayers.player2.name + "'s Orders: "+allPlayers.player2.order,displayWidth/65,display_position+30);
        text("Chef "+allPlayers.player2.name + "'s Deliveries: "+allPlayers.player2.delivery,displayWidth/1.3,display_position+30);
        text("Chef "+allPlayers.player3.name + "'s Orders: "+allPlayers.player3.order,displayWidth/65,display_position+60);
        text("Chef "+allPlayers.player3.name + "'s Deliveries: "+allPlayers.player3.delivery,displayWidth/1.3,display_position+60);
        text("Chef "+allPlayers.player4.name + "'s Orders: "+allPlayers.player4.order,displayWidth/65,display_position+90);
        text("Chef "+allPlayers.player4.name + "'s Deliveries: "+allPlayers.player4.delivery,displayWidth/1.3,display_position+90); 
      }
      } 
      
      
      if(player.index!= null){
if(gameState !== 3){ 
  if(gameState2 === 2){
      spawnCustomers();
      
  if(mousePressedOver(pizza)){
    pizza.x = mouseX;
    pizza.y = mouseY;
    if(currentorder === "Pizza"&&pizza.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); player.delivery= player.delivery+1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); if(muted === 0){servecustomersound.play();}
      pizza.destroy();
      pizz();
  }
}
    if(mousePressedOver(burger)){
    burger.x = mouseX;
    burger.y = mouseY;
    if(currentorder === "Burger"&&burger.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); player.delivery= player.delivery+1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); if(muted === 0){servecustomersound.play();}
      burger.destroy();
      burge();
  }
  }
    if(mousePressedOver(burrito)){
    burrito.x = mouseX;
    burrito.y = mouseY;
    if(currentorder === "Burrito"&&burrito.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); player.delivery= player.delivery+1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); if(muted === 0){servecustomersound.play();}
      burrito.destroy();
      burrit();
  }
  }
    if(mousePressedOver(taco)){
    taco.x = mouseX;
    taco.y = mouseY;
    if(currentorder === "Taco"&&taco.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); player.delivery= player.delivery+1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); if(muted === 0){servecustomersound.play();}
      taco.destroy();
      tac();
  }
  }
    if(mousePressedOver(fries)){
    fries.x = mouseX;
    fries.y = mouseY;
    if(currentorder === "Fries"&&fries.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); player.delivery= player.delivery+1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); if(muted === 0){servecustomersound.play();}
      fries.destroy();
      frie();
  }
  }
    if(mousePressedOver(spaghetti)){
    spaghetti.x = mouseX;
    spaghetti.y = mouseY;
    if(currentorder === "Spaghetti"&&spaghetti.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); player.delivery= player.delivery+1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); if(muted === 0){servecustomersound.play();}
      spaghetti.destroy();
      spaghett();
  }
  }
    if(mousePressedOver(bread)){
    bread.x = mouseX;
    bread.y = mouseY;
    if(currentorder === "Bread"&&bread.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); player.delivery= player.delivery+1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); if(muted === 0){servecustomersound.play();}
      bread.destroy();
      brea();
  }
  }
    if(mousePressedOver(maccheese)){
    maccheese.x = mouseX;
    maccheese.y = mouseY;
    if(currentorder === "Macaroni & Cheese"&&maccheese.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); player.delivery= player.delivery+1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); if(muted === 0){servecustomersound.play();}
      maccheese.destroy();
      macchees();
  }
  }
    if(mousePressedOver(nachos)){
    nachos.x = mouseX;
    nachos.y = mouseY;
    if(currentorder === "Nachos"&&nachos.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); player.delivery= player.delivery+1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); if(muted === 0){servecustomersound.play();}
      nachos.destroy();
      nacho();
  }
  }
    if(mousePressedOver(sprite)){
    sprite.x = mouseX;
    sprite.y = mouseY;
    if(currentorder === "Sprite"&&sprite.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); player.delivery= player.delivery+1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); if(muted === 0){servecustomersound.play();}
      sprite.destroy();
      sprit();
  }
  }
    if(mousePressedOver(coke)){
    coke.x = mouseX;
    coke.y = mouseY;
    if(currentorder === "Coke"&&coke.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); player.delivery= player.delivery+1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); if(muted === 0){servecustomersound.play();}
      coke.destroy();
      cok();
  }
  }
    if(mousePressedOver(fanta)){
    fanta.x = mouseX;
    fanta.y = mouseY;
    if(currentorder === "Fanta"&&fanta.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); player.delivery= player.delivery+1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); if(muted === 0){servecustomersound.play();}
      fanta.destroy();
      fant();
  }
  }
    if(mousePressedOver(gingerale)){
    gingerale.x = mouseX;
    gingerale.y = mouseY;
    if(currentorder === "Gingerale"&&gingerale.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); player.delivery= player.delivery+1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); if(muted === 0){servecustomersound.play();}
      gingerale.destroy();
      gingeral();
  }
  }
    if(mousePressedOver(fruitpunch)){
    fruitpunch.x = mouseX;
    fruitpunch.y = mouseY;
    if(currentorder === "Fruit Punch"&&fruitpunch.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); player.delivery= player.delivery+1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); if(muted === 0){servecustomersound.play();}
      fruitpunch.destroy();
      fruitpunc();
  }
  }
    if(mousePressedOver(lemonade)){
    lemonade.x = mouseX;
    lemonade.y = mouseY;
    if(currentorder === "Lemonade"&&lemonade.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); player.delivery= player.delivery+1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); if(muted === 0){servecustomersound.play();}
      lemonade.destroy();
      lemonad();
  }
  }
    if(mousePressedOver(orangejuice)){
    orangejuice.x = mouseX;
    orangejuice.y = mouseY;
    if(currentorder === "Orange Juice"&&orangejuice.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); player.delivery= player.delivery+1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); if(muted === 0){servecustomersound.play();}
      orangejuice.destroy();
      orangejuic();
  }
  }
    if(mousePressedOver(applejuice)){
    applejuice.x = mouseX;
    applejuice.y = mouseY;
    if(currentorder === "Apple Juice"&&applejuice.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); player.delivery= player.delivery+1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); if(muted === 0){servecustomersound.play();}
      applejuice.destroy();
      applejuic();
  }
  }
    if(mousePressedOver(water)){
    water.x = mouseX;
    water.y = mouseY;
    if(currentorder === "Water"&&water.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); player.delivery= player.delivery+1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); if(muted === 0){servecustomersound.play();}
      water.destroy();
      wate();
  }
  }
    if(mousePressedOver(cookie)){
    cookie.x = mouseX;
    cookie.y = mouseY;
    if(currentorder === "Cookies"&&cookie.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); player.delivery= player.delivery+1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); if(muted === 0){servecustomersound.play();}
      cookie.destroy();
      cooki();
  }
  }
    if(mousePressedOver(muffin)){
    muffin.x = mouseX;
    muffin.y = mouseY;
    if(currentorder === "Muffin"&&muffin.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); player.delivery= player.delivery+1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); if(muted === 0){servecustomersound.play();}
      muffin.destroy();
      muffi();
  }
  }
    if(mousePressedOver(cake)){
    cake.x = mouseX;
    cake.y = mouseY;
    if(currentorder === "Cake"&&cake.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); player.delivery= player.delivery+1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); if(muted === 0){servecustomersound.play();}
      cake.destroy();
      cak();
  }
  }
    if(mousePressedOver(applepie)){
    applepie.x = mouseX;
    applepie.y = mouseY;
    if(currentorder === "Apple Pie"&&applepie.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); player.delivery= player.delivery+1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); if(muted === 0){servecustomersound.play();}
      applepie.destroy();
      applepi();
  }
  }
    if(mousePressedOver(pudding)){
    pudding.x = mouseX;
    pudding.y = mouseY;
    if(currentorder === "Pudding"&&pudding.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); player.delivery= player.delivery+1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); if(muted === 0){servecustomersound.play();}
      pudding.destroy();
      puddin();
  }
  }
    if(mousePressedOver(brownie)){
    brownie.x = mouseX;
    brownie.y = mouseY;
    if(currentorder === "Brownie"&&brownie.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); player.delivery= player.delivery+1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); if(muted === 0){servecustomersound.play();}
      brownie.destroy();
      browni();
  }
  }
    if(mousePressedOver(icecream)){
    icecream.x = mouseX;
    icecream.y = mouseY;
    if(currentorder === "Ice Cream"&&icecream.y < displayHeight/2.20408163265){
      customer.destroy(); currentOrderCheck(); spawnCust(); player.delivery= player.delivery+1; rank1sound.stop(); rank2sound.stop(); rank3sound.stop(); rank4sound.stop(); lobbysound.stop(); servecustomersound.stop(); if(muted === 0){servecustomersound.play();}
      icecream.destroy();
      icecrea();
  }
}
  }
} else{
  spawnCustomers();
      
  if(mousePressedOver(pizza)||mousePressedOver(burger)||mousePressedOver(burrito)||mousePressedOver(taco)||mousePressedOver(fries)||mousePressedOver(spaghetti)||mousePressedOver(bread)||mousePressedOver(maccheese)||mousePressedOver(nachos)||mousePressedOver(sprite)||mousePressedOver(coke)||mousePressedOver(fanta)||mousePressedOver(gingerale)||mousePressedOver(lemonade)||mousePressedOver(fruitpunch)||mousePressedOver(orangejuice)||mousePressedOver(applejuice)||mousePressedOver(water)||mousePressedOver(cookie)||mousePressedOver(muffin)||mousePressedOver(cake)||mousePressedOver(applepie)||mousePressedOver(pudding)||mousePressedOver(brownie)||mousePressedOver(icecream)){
    swal({ title: 'You Are Frozen',
    text: "You cannot perform any actions until you are unfrozen.", 
    imageUrl: "https://raw.githubusercontent.com/gandhiatharv/Your-Restaurant/main/images/frozen.png", 
    imageSize: "200x200", 
    confirmButtonText: "Ok", });
}
}
      }

      textSize(20);
      fill("white");
      strokeWeight(2);
      stroke("orange");

   /*   if(chefsAtEnd === 3 && player.delivery < target && tries8 === 2){
        tries8 = 1;
        tries3 = tries3 - 1;
        stopSound();
        form.hideButtons();
        variable = 0;
        tries4 = 2;
        message = " ";
        message2 = " ";
        message3 = " ";
        songtitle = " ";
        customerGroup.destroyEach();
      gameState2 = 1;
        if(muted === 0){
          rank4sound.play();
          }
          swal({ title: `Last Place`, text: "Your cooking can improve. With practice, you can become an expert. Better luck next time!", imageUrl: "https://raw.githubusercontent.com/gandhiatharv/Your-Restaurant/main/images/honorablemention.png", imageSize: "150x150", confirmButtonText: "Ready For Next Level", },    function(isConfirm) {
            if (isConfirm) {
              tries9 = 2;
              Player.updateReadiness(readyfornextlevel + 1);
              player.getReadiness();
            }});
          }
            if(readyfornextlevel === 4&& tries9 === 2){
              tries9 = 1;
              nextround();
            }



        if(player.delivery>=target&&tries3 === 2){
          tries3 = tries3 - 1;
          stopSound();
          form.hideButtons();
          variable = 0;
          tries4 = 2;
          message = " ";
          message2 = " ";
          message3 = " ";
          songtitle = " ";
          customerGroup.destroyEach();
        gameState2 = 1;
    player.rank+=1;
      if(player.rank === 1){
        if(muted === 0){
        rank1sound.play();
        }
                Player.updateChefsAtEnd(player.rank);       
      swal({ title: `1st Place!`, text: "Excellent cooking! You're at the top of the charts! We've spotted a future chef! Please wait for others to finish.", imageUrl: "https://raw.githubusercontent.com/gandhiatharv/Your-Restaurant/main/images/gold.png", imageSize: "150x150", confirmButtonText: "Ready For Next Level", },    function(isConfirm) {
        if (isConfirm) {
          message2 = "Please wait for others to finish.";
          tries9 = 2;
          if(readyfornextlevel >= 4){
            Player.updateReadiness(readyfornextlevel-3);
player.getReadiness();
          }else{
          Player.updateReadiness(readyfornextlevel + 1);
          player.getReadiness();
          }
        }});
    } else if (player.rank === 2){
      if(muted === 0){
      rank2sound.play();
      }
      Player.updateChefsAtEnd(player.rank);
      swal({ title: `2nd Place!`, text: "Nice cooking! You're almost there! Please wait for another person to finish.", imageUrl: "https://raw.githubusercontent.com/gandhiatharv/Your-Restaurant/main/images/silver.png", imageSize: "150x150", confirmButtonText: "Ready For Next Level", },    function(isConfirm) {
        if (isConfirm) {      
          message2 = "Please wait for another person to finish.";
          tries9 = 2;
          Player.updateReadiness(readyfornextlevel + 1);
          player.getReadiness();
        }});
    } else if (player.rank === 3){
      if(muted === 0){
      rank3sound.play();
      }
      Player.updateChefsAtEnd(player.rank);
      swal({ title: `3rd Place`, text: "Okay cooking... you have the potential to do MUCH better.", imageUrl: "https://raw.githubusercontent.com/gandhiatharv/Your-Restaurant/main/images/bronze.png", imageSize: "150x150", confirmButtonText: "Ready For Next Level", },    function(isConfirm) {
        if (isConfirm) {
          tries9 = 2;
          Player.updateReadiness(readyfornextlevel + 1);
          player.getReadiness();
        }});
    } else{
      if(muted === 0){
      rank4sound.play();
      }
      swal({ title: `Last Place`, text: "Your cooking can improve. With practice, you can become an expert. Better luck next time!", imageUrl: "https://raw.githubusercontent.com/gandhiatharv/Your-Restaurant/main/images/honorablemention.png", imageSize: "150x150", confirmButtonText: "Ready For Next Level", },    function(isConfirm) {
        if (isConfirm) {
          tries9 = 2;
          Player.updateReadiness(readyfornextlevel + 1);
          player.getReadiness();
        }});
    }
    }*/

    if(chefsAtEnd === 3 && player.delivery < target && tries8 === 2){
      tries8 = 1;
      tries3 = tries3 - 1;
      stopSound();
      form.hideButtons();
      variable = 0;
      tries4 = 2;
      message = " ";
      message2 = " ";
      message3 = " ";
      songtitle = " ";
      customerGroup.destroyEach();
    gameState2 = 1;
      if(muted === 0){
        rank4sound.play();
        }
        swal({ title: `Last Place`, text: "Your cooking can improve. With practice, you can become an expert. Better luck next time!", imageUrl: "https://raw.githubusercontent.com/gandhiatharv/Your-Restaurant/main/images/honorablemention.png", imageSize: "150x150", confirmButtonText: "Ready For Next Level", },    function(isConfirm) {
          if (isConfirm) {
            tries9 = 2;
            Player.updateReadiness(readyfornextlevel + 1);
            player.getReadiness();
          }});
        }
          if(readyfornextlevel === 4&& tries9 === 2){
            tries9 = 1;
            nextround();
          }



      if(player.delivery>=target&&tries3 === 2){
        tries3 = tries3 - 1;
        stopSound();
        form.hideButtons();
        variable = 0;
        tries4 = 2;
        message = " ";
        message2 = " ";
        message3 = " ";
        songtitle = " ";
        customerGroup.destroyEach();
      gameState2 = 1;
  player.rank+=1;
    if(player.rank === 1){
      if(muted === 0){
      rank1sound.play();
      }
              Player.updateChefsAtEnd(player.rank);       
              Player.updateFirstPlace(player.name);
    swal({ title: `1st Place!`, text: "Excellent cooking! You're at the top of the charts! We've spotted a future chef! Please wait for others to finish.", imageUrl: "https://raw.githubusercontent.com/gandhiatharv/Your-Restaurant/main/images/gold.png", imageSize: "150x150", confirmButtonText: "Ready For Next Level", },    function(isConfirm) {
      if (isConfirm) {
        message2 = "Please wait for others to finish.";
        tries9 = 2;
        if(readyfornextlevel >= 4){
          Player.updateReadiness(readyfornextlevel-3);
player.getReadiness();
        }else{
        Player.updateReadiness(readyfornextlevel + 1);
        player.getReadiness();
        }
      }});
  } else if (player.rank === 2){
    if(muted === 0){
    rank2sound.play();
    }
    Player.updateChefsAtEnd(player.rank);
    Player.updateSecondPlace(player.name);
    swal({ title: `2nd Place!`, text: "Nice cooking! You're almost there! Please wait for another person to finish.", imageUrl: "https://raw.githubusercontent.com/gandhiatharv/Your-Restaurant/main/images/silver.png", imageSize: "150x150", confirmButtonText: "Ready For Next Level", },    function(isConfirm) {
      if (isConfirm) {      
        message2 = "Please wait for another person to finish.";
        tries9 = 2;
        Player.updateReadiness(readyfornextlevel + 1);
        player.getReadiness();
      }});
  } else if (player.rank === 3){
    if(muted === 0){
    rank3sound.play();
    }
    Player.updateChefsAtEnd(player.rank);
    Player.updateThirdPlace(player.name);
    swal({ title: `3rd Place`, text: "Okay cooking... you have the potential to do MUCH better.", imageUrl: "https://raw.githubusercontent.com/gandhiatharv/Your-Restaurant/main/images/bronze.png", imageSize: "150x150", confirmButtonText: "Ready For Next Level", },    function(isConfirm) {
      if (isConfirm) {
        tries9 = 2;
        Player.updateReadiness(readyfornextlevel + 1);
        player.getReadiness();
      }});
  } else{
    if(muted === 0){
    rank4sound.play();
    }
    swal({ title: `Last Place`, text: "Your cooking can improve. With practice, you can become an expert. Better luck next time!", imageUrl: "https://raw.githubusercontent.com/gandhiatharv/Your-Restaurant/main/images/honorablemention.png", imageSize: "150x150", confirmButtonText: "Ready For Next Level", },    function(isConfirm) {
      if (isConfirm) {
        tries9 = 2;
        Player.updateReadiness(readyfornextlevel + 1);
        player.getReadiness();
      }});
  }
  }

if(chefsAtEnd === 3){
  swal({ title: `Results`, text: "First Place: Chef "+firstPlace+"Second Place: Chef "+secondPlace+"Third Place: Chef "+thirdPlace+"Fourth Place: Chef "+fourthPlace, imageUrl: "https://raw.githubusercontent.com/gandhiatharv/Your-Restaurant/main/images/honorablemention.png", imageSize: "150x150", confirmButtonText: "Ready For Next Level", },    function(isConfirm) {
    if (isConfirm) {
      tries9 = 2;
      Player.updateReadiness(readyfornextlevel + 1);
      player.getReadiness();
    }});
}

          player.update();
          //display sprites
          drawSprites();
          fill("blue");
          textSize(20);
          textFont("Courier");
          text(message, displayWidth/2.625, displayHeight/27);
          textSize(50);
          text(player.hours+":"+player.minutes+":"+player.seconds, displayWidth/7, displayHeight/1.25);
          textSize(20);
          text("Your Name: Chef "+player.name, displayWidth/2.65, displayHeight/16);
          //text(songtitle, displayWidth/2.4, displayHeight/5); 
          //text(message3, displayWidth/2.9, displayHeight/6.5);
          text(message2, displayWidth/2.75, displayHeight/11.5);
          text(`${chatmessage1}${"\n"}${chatmessage2}${"\n"}${chatmessage3}${"\n"}${chatmessage4}${"\n"}${chatmessage5}${"\n"}`, displayWidth/2, displayHeight/2);
    }

}
