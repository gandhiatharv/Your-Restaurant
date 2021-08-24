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
    this.input.hide();
    this.button.hide();
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
  display(){
    this.welcome.position(0, 0);
    this.input.position(displayWidth/4, displayHeight/2);
    this.button.position(displayWidth/4, displayHeight/1.7);
    this.reset.hide();
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

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
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
    });


this.leave.mousePressed(()=>{
  if(playerCount === 0){
    player.updateCount(0);
  } else{
  player.updateCount(playerCount-1);
  }
  location.reload();
})

this.mute.mousePressed(()=>{
 stopSound();
  muted = 1;
  this.mute.hide();
  this.unmute.show();
})

this.unmute.mousePressed(()=>{
  stopSound1();
  muted = 0;
   checkSound();
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
