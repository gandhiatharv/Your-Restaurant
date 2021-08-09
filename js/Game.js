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
    chef1 = createSprite(displayWidth/2, displayHeight/1.575);
    chef1.addAnimation("cooking", chefimg);
    chef1.visible = false;
    chef1.scale = 2;
    chef2 = createSprite(displayWidth/2, displayHeight/1.575);
    chef2.addAnimation("cooking", chefimg);
    chef2.visible = false;
    chef2.scale = 2;
    chef3 = createSprite(displayWidth/2, displayHeight/1.575);
    chef3.addAnimation("cooking", chefimg);
    chef3.visible = false;
    chef3.scale = 2;
    chef4 = createSprite(displayWidth/2, displayHeight/1.575);
    chef4.addAnimation("cooking", chefimg);
    chef4.visible = false;
    chef4.scale = 2;
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
        index = index + 1;
        chefs[index-1].visible = true;
        if (index === player.index){
          chefs[index-1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = chefs[index-1].y;
        }
      }
      }
      console.log(displayHeight);
        console.log(player.distance);
        if(player.distance>=height*5 && tries3 === 2){
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
    }
  
}
