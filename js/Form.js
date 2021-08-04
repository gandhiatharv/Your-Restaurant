class Form {

  constructor() {
    this.welcomeBG = "images/bg.jpg";
    this.welcome = createImg(this.welcomeBG);
    this.input = createInput("").attribute("placeholder", "Name");
    this.button = createButton('Open Restaurant');
    this.greeting = createElement('h2');
    this.greeting2 = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.greeting2.hide();
    this.button.hide();
    this.input.hide();
    this.welcome.hide();
    this.reset.show();
    this.reset.position(displayWidth/1.16, displayHeight/45);
  }
  enter() {
    this.input.hide();
    this.button.hide();

    player.name = this.input.value();
    playerCount++;
    player.index = playerCount;
    player.updateName();
    player.updateCount(playerCount);

    this.greeting.html("Welcome " + player.name + "!");
    this.greeting.position(
      displayWidth / 2.1 - player.name.length * (displayWidth / 110),
      125
    );
  }
  display(){
    this.welcome.position(0, 0);
    this.input.position(displayWidth/4, displayHeight/2);
    this.button.position(displayWidth/4, displayHeight/1.7);
    this.reset.hide();

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
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

this.reset.mousePressed(()=>{
player.updateCount(0);
game.update(0);
Player.updateCarsAtEnd(0);
var playerInfoRef = database.ref('players');
playerInfoRef.remove();
database.ref("/").update({
  finishedPlayers: 0,
});
location.reload();
})

  }

}
