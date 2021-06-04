class Game{
    constructor(){

    }

    getState(){
        var stateRef = database.ref('gameState');
        stateRef.on("value", function(data){
            stateStorage = data.val();
        })
    }

    updateState(state){
        database.ref('/').update({
            gameState: state
        })
    }

    start(){
        if(stateStorage === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
            //form.hide();
        }

        car1 = createSprite(500, 200, 100, 100);
        car2 = createSprite(700, 200, 100, 100);

        garage = [car1, car2];
    }

    play(){
        form.hide();
        Player.getPlayerDetails();
        if(playerData !== undefined){
            var y;
            var x = 0;
            var index = 0;
            //var pos = 300;
            for(var plr in playerData){
                y = displayHeight - playerData[plr].distance;
                x += 200;

                garage[index].x = x;
                garage[index].y = y;
                index += 1;
                //if(plr === "player" + player.index){
                    //fill("red");
                //} 
                //else{
                    //fill("black");
               // }
                //text(playerData[plr].name + " : " + playerData[plr].distance, 300, pos);
                //pos += 30;
            }
        }

        if(keyIsDown(DOWN_ARROW) && player.index !== null){
            player.distance += 50;
            player.updatePlayer();
        }

        drawSprites();
    }
}