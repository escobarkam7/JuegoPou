class Game{
    constructor (){

    }

    getState(){
        var gameStateRef = database.ref('gameState');
            gameStateRef.on ("value", function (data) {
                gameState = data.val(); //change
            })
    }

    update(state){
        database.ref('/').update ({
            gameState : state
        })
    }

    async start(){
        if (gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");

            if (playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }

            form = new Form();
            form.display();
        }

        player1 = createSprite(200, 500); 
        player1.scale = 0.3; 
        player1.addImage("player1", pouNormal);

        player2 = createSprite(200, 500); 
        player2.scale = 0.3; 
        player2.addImage("player2", pouNormal);

        players = [player1, player2];

    }

    play(){
        form.hide();

        Player.getPlayerInfo();//distance, name, 
        player.getPlayerAtEnd();

        image(back_img, 0, 0, 1000, 600); //era con minus

        var x = 100;
        var y = 200;
        var index = 0;

        drawSprites();

        for(var plr in allPlayers){  //por cada i(jugador) en players
            index = index + 1;
            x = 500 - allPlayers[plr].distance;
            y = 500;

            players [index -1].x = x;
            players [index -1].y = y;

            if (index === player.index){
                fill ("black"); 
                textSize(25); 
                text(allPlayers[plr].name, x-25, y+25);
            }

            textSize(39);
            fill ("pink");
            text("Jugador 1 :" +allPlayers.player1.score,50,50);
            text("Jugador 2 :" + allPlayers.player2.score, 50, 100);
        }

        if (player.score >= 20){
            gameState = 2;
            player.rank += 1;
            Player.updatePlayerAtEnd(player.rank);
            player.update();//add player
            this.showRank(); //add this
        }

        if (keyIsDown(RIGHT_ARROW) && player.index !== null){
            player.distance -= 10;
            player.update();//change
        }

        if (keyIsDown(LEFT_ARROW) && player.index !== null){
            player.distance += 10;
            player.update();//change
        }

        //Si cada tantos pixeles divididos en 20 obtienen residuo 0 entonces pasa x cosa 
        if(frameCount % 20 === 0){
            cupcakes = createSprite(random(1, 1000), 0, 70, 70);

            cupcakes.velocityY = 6;

            var randomCase = Math.round (random (1, 3)) //M change

            switch (randomCase){
                case 1:
                    cupcakes.addImage("cupcake", cupcake1_img);
                    cupcakes.scale = 0.04;
                break;
                case 2: 
                    cupcakes.addImage("cupcake2", cupcake2_img);
                    cupcakes.scale = 0.028;
                break;
                case 3: 
                    cupcakes.addImage("cupcake3", cupcake4_img);
                    cupcakes.scale = 0.07;
                break;
            }

            cupcakesGroup.add(cupcakes);
        }

        if (player.index !== null){
            for (var i = 0; i < cupcakesGroup.length; i++){ //change
                if (cupcakesGroup.get(i).isTouching(players)){
                    cupcakesGroup.get(i).destroy();
                    player.score = player.score+1;
                    player.update(); //add player
                }
            }
        }

        
        
       
    }

    showRank (){
        alert("Pou está lleno. FELICIDADES, tus puntos son:" + player.rank);

    }

    //endGame (){
        
    //}

    end(){
        console.log("Game Ended");
       console.log(player.rank);
       textSize(60);
       fill ("pink");
       text("El juego ha terminado", displayWidth/2-400,displayHeight/2-200);   
     }

}