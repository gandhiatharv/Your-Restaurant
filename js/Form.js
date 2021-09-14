class Form {

  constructor() {
    this.input = createInput("").attribute("placeholder", "Nickname");
    this.button = createButton('Open Restaurant');
    this.greeting = createElement('h2');
    this.reset = createButton('End Game');
    this.leave = createButton('Leave');
    ////this.up = createButton("Previous");
    ////this.down = createButton("Next");
    this.mute = createButton("Mute");
    this.unmute = createButton("Unmute");
    this.tutorial = createButton("Tutorial");
    this.warning = createElement('h2');
    this.warning3 = createElement('h2');
    this.chat = createInput("").attribute("placeholder", "Send A Message");
    this.send = createButton('Send');
    this.pause = createButton('Pause');
    this.play = createButton('Resume');
    this.moneyperquestion = createButton('Money Per Question');
    this.freeze = createButton("1");
    this.p1 = createButton('reduce money');
    this.reset2 = createButton('Reset Deliveries');
    this.multiply = createButton('Multiply');
    this.rename = createButton('Rename Yourself');
  }
  hideButtons(){
    ////this.up.hide();
    ////this.down.hide();
    this.mute.hide();
    this.unmute.hide();
  }

  validate(){
    if(this.chat.value().length>=1 && this.chat.value()!==""){
      if(chatmessage1!==""&&chatmessage2!==""&&chatmessage3!==""&&chatmessage4!==""&&chatmessage5!==""){
          chatmessage1 = chatmessage2;
          chatmessage2 = chatmessage3;
          chatmessage3 = chatmessage4;
          chatmessage4 = chatmessage5;
          chatmessage5 = "Chef "+player.name + ": "+this.chat.value();
          Player.updateMessage1(chatmessage1);
          Player.updateMessage2(chatmessage2);
          Player.updateMessage3(chatmessage3);
          Player.updateMessage4(chatmessage4);
          Player.updateMessage5(chatmessage5);
      }else{
if(chatmessage1 ===""){
Player.updateMessage1("Chef "+player.name + ": "+this.chat.value());
} else if(chatmessage2 ===""&&chatmessage1!==""){
Player.updateMessage2("Chef "+player.name + ": "+this.chat.value());
}else if(chatmessage3 ===""&&chatmessage2!==""&&chatmessage1!==""){
Player.updateMessage3("Chef "+player.name + ": "+this.chat.value());
}else if(chatmessage4 ===""&&chatmessage3!==""&&chatmessage2!==""&&chatmessage1!==""){
Player.updateMessage4("Chef "+player.name + ": "+this.chat.value());
}else if(chatmessage5 ===""&&chatmessage4!==""&&chatmessage3!==""&&chatmessage2!==""&&chatmessage1!==""){
Player.updateMessage5("Chef "+player.name + ": "+this.chat.value());
}
}


/*else{
if(chatmessage5 ===""){
Player.updateMessage5(this.chat.value());
} else if(chatmessage4 ===""&&chatmessage5!==""){
Player.updateMessage4(this.chat.value());
}else if(chatmessage3 ===""&&chatmessage4!==""&&chatmessage5!==""){
Player.updateMessage3(this.chat.value());
}else if(chatmessage2 ===""&&chatmessage3!==""&&chatmessage4!==""&&chatmessage5!==""){
Player.updateMessage2(this.chat.value());
}else if(chatmessage1 ===""&&chatmessage2!==""&&chatmessage3!==""&&chatmessage4!==""&&chatmessage5!==""){
Player.updateMessage1(this.chat.value());
}
}*/
    }
  }

  hidePause(){
this.pause.hide();
this.play.show();
  }

  hidePlay(){
    this.play.hide();
    this.pause.show();
  }

  showMuteAndUnmute(){
    this.mute.show();
    this.unmute.show();
  }

  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.reset.show();
    this.reset.position(displayWidth/1.23, displayHeight/1.35);
    this.reset.style('width', '150px');
    this.reset.style('height', '60px');
    this.leave.hide();
  }
  showButtons(){
    ////this.up.show();
    //this.down.show();
    ////this.up.position(displayWidth/2.4-displayWidth/15, displayHeight/5.62);
    ////this.up.style('width', '90px');
    //this.up.style('height', '40px');
    //this.down.position(displayWidth/2.4+displayWidth/15, displayHeight/5.62);
    //this.down.style('width', '90px');
    //this.down.style('height', '40px');
    //this.up.style('text-align', 'center');
    //this.down.style('text-align', 'center');
    //this.up.style('font-size', '8px');
    //this.down.style('font-size', '8px');
    //this.up.style('background-color', '#D3D3D3');
    //this.down.style('background-color', '#D3D3D3');
    //this.up.style('border-radius', '0');
    //this.down.style('border-radius', '0');
    //this.up.style('border', '1px solid');
    //this.down.style('border', '1px solid');
    this.pause.show();
    this.play.hide();
  }
  enter() {
    if(this.input.value()<=0||this.input.value()>=0){
      this.warning.show();
      this.warning3.hide();
    } else if(this.input.value()===""){
    this.warning.show();
    this.warning3.hide();
    }
    else if(this.input.value().length<1||this.input.value().length>25){
this.warning.show();
this.warning3.hide();
    }else if(this.input.value()===name1||this.input.value()===name2||this.input.value()===name3||this.input.value()===name4){
      this.warning3.show();
      this.warning.hide();
    }else if(this.input.value().length>=1 &&this.input.value().length <= 25 && this.input.value()!=="" && name1!==this.input.value() && name2!==this.input.value() && name3!==this.input.value() && name4!==this.input.value()){
      swal({
        confirmButtonColor: '#8CD4F5', title: `Successfully Logged In`,
        text: 'You are successfully logged in.',
        type: "success",
        showConfirmButton: false,
        timer: 3000
      }
        )
      this.input.hide();
      this.button.hide();
      this.warning.hide();
      this.warning3.hide();
      this.leave.show();
      player.name = this.input.value();
      playerCount+=1;
      if(playerCount === 1){
        Player.updateName1(player.name);
      } else if (playerCount === 2){
        Player.updateName2(player.name);
      }else if (playerCount === 3){
        Player.updateName3(player.name);
      }else if (playerCount === 4){
        Player.updateName4(player.name);
      }
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello Chef " + player.name+"! Please wait for others to join.");
      this.greeting.position(displayWidth/8, displayHeight/2.05);
      //this.greeting2.html("Please wait for others to join.");
      //this.greeting2.position(displayWidth/8, displayHeight/1.7);
    }
  }
  display(){
    this.input.position(displayWidth/4, displayHeight/2);
    this.button.position(displayWidth/4, displayHeight/1.7);
    this.reset.hide();
    this.warning.html("Please enter a name between 1 and 25 characters.");
    this.warning.position(displayWidth/5, displayHeight/1.5);
    this.warning.style("font-size", '20px');
    this.warning.style("color", '#CA4286');
    this.warning.style("font-family", 'Courier New');
    this.warning.hide();
    this.warning3.html("This nickname is taken. Please enter a different one.");
    this.warning3.position(displayWidth/5, displayHeight/1.5);
    this.warning3.style("font-size", '20px');
    this.warning3.style("color", '#CA4286');
    this.warning3.style("font-family", 'Courier New');
    this.warning3.hide();
    this.leave.position(displayWidth/1.23, displayHeight/1.35);
    this.leave.style('width', '150px');
    this.leave.style('height', '60px');
    this.leave.hide();
    //this.up.hide();
    //this.down.hide();
    this.unmute.hide();
    this.mute.show();
    this.mute.position(displayWidth/40, displayHeight/1.36);
    this.unmute.position(displayWidth/40, displayHeight/1.36);
    this.tutorial.position(displayWidth/1.2, displayHeight/1.36);
    this.mute.style('width', '135px');
    this.mute.style('height', '60px');
    this.unmute.style('width', '135px');
    this.unmute.style('height', '60px');
    this.mute.style('text-align', 'center');
    this.unmute.style('text-align', 'center');
    this.mute.style('font-size', '15px');
    this.unmute.style('font-size', '15px');
    this.mute.style('background-color', '#D3D3D3');
    this.unmute.style('background-color', '#D3D3D3');
    this.mute.style('border-radius', '0');
    this.unmute.style('border-radius', '0');
    this.mute.style('border', '1px solid');
    this.unmute.style('border', '1px solid');
    this.tutorial.style('width', '135px');
    this.tutorial.style('height', '60px');
    this.tutorial.style('text-align', 'center');
    this.tutorial.style('font-size', '15px');
    this.tutorial.style('background-color', '#D3D3D3');
    this.tutorial.style('border-radius', '0');
    this.tutorial.style('border', '1px solid');

    this.button.mousePressed(()=>{
      if(this.input.value()<=0||this.input.value()>=0){
        this.warning.show();
        this.warning3.hide();
      } else if(this.input.value()===""){
      this.warning.show();
      this.warning3.hide();
      }
      else if(this.input.value().length<1||this.input.value().length>25){
this.warning.show();
this.warning3.hide();
      }else if(this.input.value()===name1||this.input.value()===name2||this.input.value()===name3||this.input.value()===name4){
        this.warning3.show();
        this.warning.hide();
      }else if(this.input.value().length>=1 &&this.input.value().length <= 25 && this.input.value()!=="" && name1!==this.input.value() && name2!==this.input.value() && name3!==this.input.value() && name4!==this.input.value()){
        swal({
          confirmButtonColor: '#8CD4F5', title: `Successfully Logged In`,
          text: 'You are successfully logged in.',
          type: "success",
          showConfirmButton: false,
          timer: 3000
        }
          )
        this.input.hide();
        this.button.hide();
        this.warning.hide();
        this.warning3.hide();
        this.leave.show();
        player.name = this.input.value();
        playerCount+=1;
        if(playerCount === 1){
          Player.updateName1(player.name);
        } else if (playerCount === 2){
          Player.updateName2(player.name);
        }else if (playerCount === 3){
          Player.updateName3(player.name);
        }else if (playerCount === 4){
          Player.updateName4(player.name);
        }
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello Chef " + player.name+"! Please wait for others to join.");
        this.greeting.position(displayWidth/8, displayHeight/2.05);
        //this.greeting2.html("Please wait for others to join.");
        //this.greeting2.position(displayWidth/8, displayHeight/1.7);
      }
    });

    this.send.mousePressed(()=>{
      if(this.chat.value().length>=1 && this.chat.value()!==""){
        if(chatmessage1!==""&&chatmessage2!==""&&chatmessage3!==""&&chatmessage4!==""&&chatmessage5!==""){
            chatmessage1 = chatmessage2;
            chatmessage2 = chatmessage3;
            chatmessage3 = chatmessage4;
            chatmessage4 = chatmessage5;
            chatmessage5 = "Chef "+player.name + ": "+this.chat.value();
            Player.updateMessage1(chatmessage1);
            Player.updateMessage2(chatmessage2);
            Player.updateMessage3(chatmessage3);
            Player.updateMessage4(chatmessage4);
            Player.updateMessage5(chatmessage5);
        }else{
  if(chatmessage1 ===""){
  Player.updateMessage1("Chef "+player.name + ": "+this.chat.value());
  } else if(chatmessage2 ===""&&chatmessage1!==""){
  Player.updateMessage2("Chef "+player.name + ": "+this.chat.value());
  }else if(chatmessage3 ===""&&chatmessage2!==""&&chatmessage1!==""){
  Player.updateMessage3("Chef "+player.name + ": "+this.chat.value());
  }else if(chatmessage4 ===""&&chatmessage3!==""&&chatmessage2!==""&&chatmessage1!==""){
  Player.updateMessage4("Chef "+player.name + ": "+this.chat.value());
  }else if(chatmessage5 ===""&&chatmessage4!==""&&chatmessage3!==""&&chatmessage2!==""&&chatmessage1!==""){
  Player.updateMessage5("Chef "+player.name + ": "+this.chat.value());
  }
  }

  
  /*else{
  if(chatmessage5 ===""){
  Player.updateMessage5(this.chat.value());
  } else if(chatmessage4 ===""&&chatmessage5!==""){
  Player.updateMessage4(this.chat.value());
  }else if(chatmessage3 ===""&&chatmessage4!==""&&chatmessage5!==""){
  Player.updateMessage3(this.chat.value());
  }else if(chatmessage2 ===""&&chatmessage3!==""&&chatmessage4!==""&&chatmessage5!==""){
  Player.updateMessage2(this.chat.value());
  }else if(chatmessage1 ===""&&chatmessage2!==""&&chatmessage3!==""&&chatmessage4!==""&&chatmessage5!==""){
  Player.updateMessage1(this.chat.value());
  }
  }*/
      }
    });

    this.tutorial.mousePressed(()=>{
      swal(
        {
          confirmButtonColor: '#8CD4F5', title: `Tutorial`,
          text: tutorialtext,
          imageUrl:
            "https://raw.githubusercontent.com/gandhiatharv/Your-Restaurant/main/images/tutorial.jpeg",
          imageSize: "365x171",
          confirmButtonText: "Resume Playing"
        },
      )
    })

    this.reset2.mousePressed(()=>{
      swal({
        confirmButtonColor: '#8CD4F5', title: 'Are you sure you would like to purchase this powerup?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#8CD4F5',
        cancelButtonColor: '#d33333',
        confirmButtonText: "Yes"},    function(isConfirm) {
            if (isConfirm) {
            if(tries15 === 2){
              t = "done";
              tries15 = 1;
              Player.updateReset(1);
              player.delivery = target/2;
              player.delivery = player.delivery - target/5;
              }
          }
        })
    })

    this.p1.mousePressed(()=>{
      swal({
        confirmButtonColor: '#8CD4F5', title: 'Are you sure you would like to purchase this powerup?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#8CD4F5',
        cancelButtonColor: '#d33333',confirmButtonText: "Yes", },    function(isConfirm) {
            if (isConfirm) {
              if(tries16 === 2){ 
                Player.updateReduceMoney(1);
                player.delivery = player.delivery - target/5;
                }
          }
        })
    })

    this.moneyperquestion.mousePressed(()=>{
      swal({
        confirmButtonColor: '#8CD4F5', title: 'Are you sure you would like to purchase this upgrade?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#8CD4F5',
        cancelButtonColor: '#d33333',confirmButtonText: "Yes", },    function(isConfirm) {
            if (isConfirm) {
            moneyperquestionnum = moneyperquestionnum*2;
            multiplier = multiplier*1.1;
            price = moneyperquestionnum*multiplier;
            player.delivery = player.delivery - price;
                 }        })
                })


this.leave.mousePressed(()=>{
  swal({
    confirmButtonColor: '#8CD4F5', title: 'Are you sure you would like to leave the game?',
    text: "You won't be able to revert this!",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#8CD4F5',
    cancelButtonColor: '#d33333',confirmButtonText: "Yes", },    function(isConfirm) {
            if (isConfirm) {
        if(playerCount === 0){
          player.updateCount(0);
        } else{
        player.updateCount(playerCount-1);
        }
        if(player.name === name1){
          Player.updateName1("");
        } else if(player.name === name2){
          Player.updateName2("");
        } else if(player.name === name3){
          Player.updateName3("");
        } else if(player.name === name4){
          Player.updateName4("");
        }
        location.reload();
             }})
})

this.freeze.mousePressed(()=>{
  if(paused === "true"){
    swal({
      confirmButtonColor: '#8CD4F5', title: `The Game Is Paused`,
      text: "You cannot perform any actions until the game is resumed.",
      type: "error",
      confirmButtonText: "Ok",
    }
      )
  } else if(gameState === 3){
    swal({
      confirmButtonColor: '#8CD4F5', title: `You Are Frozen`,
      text: "You cannot perform any actions until you are unfrozen.",
      type: "error",
      confirmButtonText: "Ok",
    }
      )
  }else if(gameState === 1&&tries17 === 2){
    swal({
      confirmButtonColor: '#8CD4F5', title: 'Are you sure you would like to purchase this powerup?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#8CD4F5',
      cancelButtonColor: '#d33333',confirmButtonText: "Yes", },    function(isConfirm) {
        if (isConfirm) {
          tries11 = 2;
          tries17 = 1;
          
          player.delivery = player.delivery - target/5;
          game.update(3);
            Player.updateFreezeAlert(1);         
               }})
  }
})

this.multiply.mousePressed(()=>{
  swal({
    confirmButtonColor: '#8CD4F5', title: 'Are you sure you would like to purchase this upgrade?',
    text: "You won't be able to revert this!",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#8CD4F5',
    cancelButtonColor: '#d33333',confirmButtonText: "Yes", },    function(isConfirm) {
            if (isConfirm) {
        multiplier2 = multiplier2 + 1;
        
        multipliercost = (multiplier2 * multiplier2) * 7;
        player.delivery = player.delivery - multipliercost;
             }})
})

this.mute.mousePressed(()=>{
 stopSound();
  muted = 1;
  this.mute.hide();
  this.unmute.show();
})

this.unmute.mousePressed(()=>{
  stopSound();
  muted = 0;
  if(gameState === 1){
   checkSound();
  } else if(gameState === 0){
    lobbysound.play();
    lobbysound.setVolume(0.1);
  }
   this.unmute.hide();
   this.mute.show();
 }) 

 this.pause.mousePressed(()=>{
        Player.updatePaused("true");
Player.updateTriesValue(2);
   this.pause.hide();
   this.play.show();
 })
 
 this.play.mousePressed(()=>{
        Player.updatePaused("false");
        this.play.hide();
          this.pause.show();
  }) 

/*this.up.mousePressed(()=>{
  stopSound1();
  if(soundNumber === 1){
    soundNumber = 8;
  } else{
    soundNumber = soundNumber - 1;
  }
  checkSound();
})

this.down.mousePressed(()=>{
  stopSound1();
  if(soundNumber === 8){
    soundNumber = 1;
  } else{
    soundNumber = soundNumber + 1;
  }
  checkSound();
})*/


this.reset.mousePressed(()=>{
  swal({
    confirmButtonColor: '#8CD4F5', title: 'Are you sure you would like to end the game?',
    text: "You won't be able to revert this!",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#8CD4F5',
    cancelButtonColor: '#d33333',confirmButtonText: "Yes", },    function(isConfirm) {
            if (isConfirm) {
        Player.updateGameEnded("Chef "+player.name+" has ended the game. Thanks for playing!");
        player.updateCount(0);
        game.update(0);
        Player.updateChefsAtEnd(0);
        Player.updateReadiness(0);
        Player.updateTries9(2);
        Player.updateMessage1("");
        Player.updateMessage2("");
        Player.updateMessage3("");
        Player.updateMessage4("");
        Player.updateMessage5("");
        Player.updateUnfrozen(0);
        Player.updateChatPhase(1);
        Player.updateFreezeAlert(0);
        Player.updateReduceMoney(0);
        Player.updateReset(0);
        Player.updateTries(2);
        Player.updateFirstPlace("");
        Player.updateSecondPlace("");
        Player.updateThirdPlace("");
        Player.updateFourthPlace("");
        Player.updateName1("");
        Player.updateName2("");
        Player.updateName3("");
        Player.updateName4("");
        Player.updatePaused("false");
        Player.updateTime1(0+":"+0+":"+0);
        Player.updateTime2(0+":"+0+":"+0);
        Player.updateTime3(0+":"+0+":"+0);
        Player.updateTime4(0+":"+0+":"+0);
        Player.updateTriesValue(2);
        var playerInfoRef = database.ref('players');
        playerInfoRef.remove();
        database.ref("/").update({
          finishedPlayers: 0
        });
        location.reload();      }})
  })
  }
}