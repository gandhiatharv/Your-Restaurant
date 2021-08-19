class Player {
  constructor(){
    this.index = null;
    this.name = null;
    this.rank = null;
    this.order = 0;
    this.delivery = 0;
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

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      order:this.order,
      delivery:this.delivery
        });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  getChefsAtEnd(){
    database.ref('carsAtEnd').on("value", (data) => {
      this.rank = data.val();
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
  static updateChefsAtEnd(rank){
    database.ref('/').update({
      chefsAtEnd:rank
    });
  }
  static updateFinishedPlayers(){
    database.ref('/').update({
        finishedPlayers: finishedPlayers + 1,
    });
    this.place += 1;
}

static updatePlayerDeliveries(delivery){
  database.ref('/').update({
      playerDeliveries:delivery
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
