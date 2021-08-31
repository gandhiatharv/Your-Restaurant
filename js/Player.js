class Player {
  constructor(){
    this.index = null;
    this.name = null;
    this.rank = null;
    this.readiness = null;

    this.order = 0;
    this.delivery = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  updateChefsEnd(){
    var chefsAtEndRef = database.ref('chefsAtEnd');
    chefsAtEndRef.on("value",(data)=>{
      chefsAtEnd = data.val();
    })
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      order:this.order,
      delivery:this.delivery,
      seconds:this.seconds,
      minutes:this.minutes,
      hours:this.hours
            });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  getChefsAtEnd(){
    database.ref('chefsAtEnd').on("value", (data) => {
      this.rank = data.val();
      chefsAtEnd = data.val();
    });
  }
  getChatPhase(){
    database.ref('chatphase').on("value", (data) => {
      chatphase = data.val();
    });
  }
  getMessage1(){
    database.ref('chatmessage1').on("value", (data) => {
       
      chatmessage1 = data.val();
    });
  }
  getMessage2(){
    database.ref('chatmessage2').on("value", (data) => {
       
      chatmessage2= data.val();
    });
  }
  getMessage3(){
    database.ref('chatmessage3').on("value", (data) => {
       
      chatmessage3 = data.val();
    });
  }
  getMessage4(){
    database.ref('chatmessage4').on("value", (data) => {
       
      chatmessage4 = data.val();
    });
  }
  getMessage5(){
    database.ref('chatmessage5').on("value", (data) => {
       
      chatmessage5 = data.val();
    });
  }
  getTries9(){
    database.ref('tries9').on("value", (data) => {
      tries9 = data.val();
    });
  }
  getReadiness(){
    database.ref('Readiness').on("value", (data) => {
      this.readiness = data.val();
      readyfornextlevel = data.val();
    });
  }
  static playerOrders(){
    database.ref('playerOrders').on("value",(data)=>{
    this.order=data.val();            
    }) 
}  
static playerDeliveries(){
  database.ref('playerDeliveries').on("value",(data)=>{
  this.delivery=data.val();            
  }) 
}
static playerseconds(){
  database.ref('playerseconds').on("value",(data)=>{
  this.seconds=data.val();            
  }) 
}
static playerminutes(){
  database.ref('playerminutes').on("value",(data)=>{
  this.minutes=data.val();            
  }) 
}
static playerhours(){
  database.ref('playerhours').on("value",(data)=>{
  this.hours=data.val();            
  }) 
}
  static updateChefsAtEnd(rank){
    database.ref('/').update({
      chefsAtEnd:rank
    });
  }
  static updateChatPhase(chatphasevalue){
    database.ref('/').update({
      chatphase:chatphasevalue
    });
  }
  static updateMessage1(chatmessage){
    database.ref('/').update({
      chatmessage1:chatmessage
    });
  }
  static updateMessage2(chatmessage){
    database.ref('/').update({
      chatmessage2:chatmessage
    });
  }
  static updateMessage3(chatmessage){
    database.ref('/').update({
      chatmessage3:chatmessage
    });
  }
  static updateMessage4(chatmessage){
    database.ref('/').update({
      chatmessage4:chatmessage
    });
  }
  static updateMessage5(chatmessage){
    database.ref('/').update({
      chatmessage5:chatmessage
    });
  }
  static updateTries9(tries9value){
    database.ref('/').update({
      tries9:tries9value
    });
  }
  static updateReadiness(ready){
    database.ref('/').update({
      Readiness:ready
    });
  }
  static updateFinishedPlayers(){
    database.ref('/').update({
        finishedPlayers: finishedPlayers + 1,
    });
}

static updatePlayerDeliveries(delivery){
  database.ref('/').update({
      playerDeliveries:delivery
  }) 
  }

  static updatePlayerseconds(seconds){
    database.ref('/').update({
        playerseconds:seconds
    }) 
    }
    static updatePlayerminutes(minutes){
      database.ref('/').update({
          playerminutes:minutes
      }) 
      }
      static updatePlayerhours(hours){
        database.ref('/').update({
            playerhours:hours
        }) 
        }

  static updatePlayerOrders(order){
    database.ref('/').update({
        playerOrders:order
    }) 
    }

  getFinishedPlayers(){
    var finishedPlayersRef = database.ref('finishedPlayers');
    finishedPlayersRef.on("value", (data)=>{
      finishedPlayers = data.val();
    })
  }
}
