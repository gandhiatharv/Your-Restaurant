class Form {

  constructor() {
    this.welcomeBG = "images/bg.jpg";
    this.welcome = createImg(this.welcomeBG);
    this.input = createInput("").attribute("placeholder", "Nickname");
    this.button = createButton('Open Restaurant');
    this.greeting = createElement('h2');
    this.greeting2 = createElement('h2');
    this.reset = createButton('Reset');
    this.leave = createButton('Leave');
    this.up = createButton("Previous");
    this.down = createButton("Next");
    this.mute = createButton("Mute");
    this.unmute = createButton("Unmute");
    this.freeze = createButton("Freeze");
    this.tutorial = createButton("Tutorial");
    this.warning = createElement('h2');
  }
  hideButtons(){
    this.up.hide();
    this.down.hide();
    this.mute.hide();
    this.unmute.hide();
  }

  hide(){
    this.greeting.hide();
    this.greeting2.hide();
    this.button.hide();
    this.input.hide();
    this.welcome.hide();
    this.reset.show();
    this.reset.position(displayWidth/1.23, displayHeight/1.35);
    this.reset.style('width', '150px');
    this.reset.style('height', '60px');
    this.leave.hide();
  }
  showButtons(){
    this.up.show();
    this.down.show();
    this.up.position(displayWidth/2.4-displayWidth/15, displayHeight/5.62);
    this.up.style('width', '90px');
    this.up.style('height', '40px');
    this.down.position(displayWidth/2.4+displayWidth/15, displayHeight/5.62);
    this.down.style('width', '90px');
    this.down.style('height', '40px');
    this.up.style('text-align', 'center');
    this.down.style('text-align', 'center');
    this.up.style('font-size', '8px');
    this.down.style('font-size', '8px');
    this.up.style('background-color', '#D3D3D3');
    this.down.style('background-color', '#D3D3D3');
    this.up.style('border-radius', '0');
    this.down.style('border-radius', '0');
    this.up.style('border', '1px solid');
    this.down.style('border', '1px solid');
  }
  enter() {
    if(this.input.value()<=0||this.input.value()>=0){
      this.warning.show();
    } else if(this.input.value()==="" && this.input.value()===" " && this.input.value()==="  "&& this.input.value()==="   "&& this.input.value()==="    "&& this.input.value()==="     "&& this.input.value()==="      "&& this.input.value()==="       "&& this.input.value()==="        "&& this.input.value()==="         "&& this.input.value()==="          "){
    this.warning.show();
    }
    else if(this.input.value().length<1||this.input.value().length>25){
this.warning.show();
    }else if(this.input.value().length>=1 &&this.input.value().length <= 25 && this.input.value()!=="" && this.input.value()!==" " && this.input.value()!=="  "&& this.input.value()!=="   "&& this.input.value()!=="    "&& this.input.value()!=="     "&& this.input.value()!=="      "&& this.input.value()!=="       "&& this.input.value()!=="        "&& this.input.value()!=="         "&& this.input.value()!=="          "){
      this.input.hide();
      this.button.hide();
      this.warning.hide();
      this.leave.show();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello Chef " + player.name+"!");
      this.greeting.position(displayWidth/8, displayHeight/2.05);
      this.greeting2.html("Please wait for others to join.");
      this.greeting2.position(displayWidth/8, displayHeight/1.7);
      }
  }
  display(){
    this.welcome.position(0, 0);
    this.input.position(displayWidth/4, displayHeight/2);
    this.button.position(displayWidth/4, displayHeight/1.7);
    this.reset.hide();
    this.warning.html("Please enter a name between 1 and 25 characters.");
    this.warning.position(displayWidth/5, displayHeight/1.5);
    this.warning.style("font-size", '20px');
    this.warning.style("color", 'blue');
    this.warning.style("font-family", 'Courier New');
    this.warning.hide();
    this.leave.position(displayWidth/1.23, displayHeight/1.35);
    this.leave.style('width', '150px');
    this.leave.style('height', '60px');
    this.leave.hide();
    this.up.hide();
    this.down.hide();
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
      } else if(this.input.value()==="" && this.input.value()===" " && this.input.value()==="  "&& this.input.value()==="   "&& this.input.value()==="    "&& this.input.value()==="     "&& this.input.value()==="      "&& this.input.value()==="       "&& this.input.value()==="        "&& this.input.value()==="         "&& this.input.value()==="          "){
      this.warning.show();
      }
      else if(this.input.value().length<1||this.input.value().length>25){
this.warning.show();
      }else if(this.input.value().length>=1 &&this.input.value().length <= 25 && this.input.value()!=="" && this.input.value()!==" " && this.input.value()!=="  "&& this.input.value()!=="   "&& this.input.value()!=="    "&& this.input.value()!=="     "&& this.input.value()!=="      "&& this.input.value()!=="       "&& this.input.value()!=="        "&& this.input.value()!=="         "&& this.input.value()!=="          "){
        this.input.hide();
        this.button.hide();
        this.warning.hide();
        this.leave.show();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello Chef " + player.name+"!");
        this.greeting.position(displayWidth/8, displayHeight/2.05);
        this.greeting2.html("Please wait for others to join.");
        this.greeting2.position(displayWidth/8, displayHeight/1.7);
      }
    });

    this.tutorial.mousePressed(()=>{
      swal(
        {
          title: `Tutorial`,
          text: "Enter your nickname and join the game. Begin playing when 4 players have joined. Serve customers by checking the current order and dragging that respective food up to them. You can see all the other players' orders and deliveries at the top left and right sides of the screen. You can play a sound you would like for your restaurant, and you may mute the game if you would like. You can use the freeze powerup by clicking the 'Freeze' button. If you use this powerup, you lose 5 deliveries and everyone on your team, including you, gets frozen for 10 seconds until a notification comes up telling you that time is up. You can also send messages in the group chat. There will be various levels in the game. When you successfully complete a level, your rank will be displayed. You can press 'Tutorial' to view this tutorial again. Have fun!",
          imageUrl:
            "https://raw.githubusercontent.com/gandhiatharv/Your-Restaurant/main/images/tutorial.jpeg",
          imageSize: "365x171",
          confirmButtonText: "Resume Playing"
        },
      );
    })

this.leave.mousePressed(()=>{
  if(playerCount === 0){
    player.updateCount(0);
  } else{
  player.updateCount(playerCount-1);
  }
  location.reload();
})

this.leave.mousePressed(()=>{
  if(playerCount === 0){
    player.updateCount(0);
  } else{
  player.updateCount(playerCount-1);
  }
  location.reload();
})

this.freeze.mousePressed(()=>{
  if(gameState!==3){
game.update(3);
game.updateFreezeAlert(1);
w = 1;
  } else{
    swal({ title: 'You Are Frozen',
    text: "You cannot perform any actions until you are unfrozen.", 
    imageUrl: "https://raw.githubusercontent.com/whitehatjr/PiratesInvasion/main/assets/boat.png", 
    imageSize: "150x150", 
    confirmButtonText: "Ok", });
  }
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

this.up.mousePressed(()=>{
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
})


this.reset.mousePressed(()=>{
  player.updateCount(0);
  game.update(0);
  Player.updateChefsAtEnd(0);
  var playerInfoRef = database.ref('players');
  playerInfoRef.remove();
  database.ref("/").update({
    finishedPlayers: 0
  });
  location.reload();
  })

  }
}
