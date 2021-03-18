class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    });
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerDetails = "players/player" + this.index;
    database.ref(playerDetails).set({
      name: this.name,
      distance: this.distance
    });
  }

  static getPlayerInfo(){
    var getPlayerInformation = database.ref("players");
    getPlayerInformation.on("value",(data)=>{
      allPlayers = data.val();
    });
  }

}