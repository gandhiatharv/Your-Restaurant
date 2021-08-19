class Form {

  constructor() {
    this.welcomeBG = "images/bg.jpg";
    this.welcome = createImg(this.welcomeBG);
    this.input = createInput("").attribute("placeholder", "Name");
    this.button = createButton('Open Restaurant');
    this.greeting = createElement('h2');
    this.greeting2 = createElement('h2');
    this.reset = createButton('Reset');
    this.leave = createButton('Leave');

    //how to create a dropdown?
  }
  hide(){
    this.greeting.hide();
    this.greeting2.hide();
    this.button.hide();
    this.input.hide();
    this.welcome.hide();
    this.reset.show();
    this.reset.position(displayWidth/1.2, displayHeight/1.3);
    this.leave.hide();
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
    this.leave.position(displayWidth/1.2, displayHeight/1.3);
    this.leave.hide();

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
