class Form {
    constructor(){
        this.input=createInput("Ingresa tu nombre");
        this.button = createButton("Jugar");
        this.tittle = createElement("h1");
        this.greeting = createElement("h2");
        this.reset = createButton("Reiniciar");


    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.tittle.hide();
    }

    display(){
        this.tittle.html('Cupcake Pou');
        this.tittle.position(510, 100);
        //Cuando en estilo hay dos palabras se separan con guion medio
        this.tittle.style('font-family', 'Arial');
        this.tittle.style('font-size', '80px');
        this.tittle.style('color', 'White');
        this.tittle.style('-webkit-text-stroke', '3px black');
        this.tittle.style('text-shadow', '2px 2px 20px pink')

        //this.input.placeholder('Ingresa tu nombre');
        this.input.position(600, 370);
        this.input.style('font-family', 'Times New Roman');
        this.input.style('font-size', '20px');
        this.input.style('color', 'pink');
        this.input.style('border', '5px solid');
        this.input.style('border-color', 'pink');
        this.input.style('border-radius', '5px');
        this.input.style('padding', '10px 20px', 'white');


        this.reset.position(670, 500);
        this.reset.style('font-family', 'Times New Roman');
        this.reset.style('font-size', '30px');
        this.reset.style('color', 'Pink');
        this.reset.style('border', '5px');
        this.reset.style('border-radius', '5px');
        this.reset.style('padding', '10px 20px', 'white');

        this.button.position(710, 450);
        this.button.style('font-family', 'Times New Roman');
        this.button.style('font-size', '15px');
        this.button.style('color', 'White');
        this.button.style('background-color', 'Pink');
        this.button.style('border', '5px');
        this.button.style('border-radius', '5px');
        this.button.style('padding', '10px 20px', 'white');

        this.greeting.html('Bienvenido a Alimenta al Pou');
        this.greeting.position(580, 270);
        this.greeting.style('font-family', 'Arial');
        this.greeting.style('font-size', '25px');
        this.greeting.style('color', 'White');
        this.greeting.style('text-shadow', '0px 0px 5px pink')
       

        //Si apretamos el botón de inicio pasará:
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            //de player tráeme la etiqueta name
            /*
            var player = [
                1: {index=0
                name:"kamila"
                distance: 100
                }
            ]
            */
            player.name=this.input.value();

            this.greeting.html("Hola"+ player.name);
            this.greeting.position(500, 300);
            this.greeting.style('font-size', '30px');

            //A lo que sea que contenga playercount se le agrega 1 
            //No empieza el juego hasta que hayan dos jugadores
            playerCount += 1;

            //el índice del jugador es el playerCount
            player.index= playerCount;

            //updateCount solo existe en player y por eso lo mandamos a llamar en form
            player.updateCount(playerCount);
            player.update();
        });

        this.reset.mousePressed(()=> {
            player.updateCount(0);
           game.update(0);


            //usamos remove cuando hay que vaciar carpeta con diferentes datos
            var playerInfoRef = database.ref('playerIndex')
            playerInfoRef.remove();
        });
            
            



    }
    
}