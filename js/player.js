class Player{
    constructor(){
        this.name = null;
        this.index = null;
        this.distance = 0;
    }

    getCount(){
        var countRef = database.ref('playerCount');
        countRef.on("value", function(data){
            playerCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }

    updatePlayer(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        })
    }

    static getPlayerDetails(){
        var PlayerInfo = database.ref('players');
        PlayerInfo.on("value", (data)=>{
            playerData = data.val();
        })
    }
}