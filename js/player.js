class Player{

    //Inicialización de las propiedades del objeto
    constructor() {
        this.name = null;
        this.index = null;

        this.rank = null;
        this.score= 0;
        this.distance= 0;
    }

    updateCount(count){ //añadi indicador
        //Al poner la diagonal nos referimos a que es la carpeta principal
        //El .update significa que se van a agregar cosas 
        database.ref('/').update({
            playerCount : count, //los valores se llamarán count
        });
        
    }

    getCount(){
        //se crea carpeta de guardado en la base de datos para guardar la info
        var playerCountRef = database.ref('playerCount');
            //.on es para entrar dentro de la carpeta
            //value significa OBTENER, al data le podemos cambiar el nombre pero a value
            playerCountRef.on("value", (data)=>{
                //obtenemos los datos de la carpeta y 
                playerCount = data.val();
            })
    }


    update(){
        var playerIndex = "players/player" + this.index;
      
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score: this.score,
        })
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');

        playerInfoRef.on("value", (data) =>{
            //cambiar nombre de la var para noo confundir con playerIndex
            allPlayers = data.val();
        })
    }

    getPlayerAtEnd(){
        //change but why
        database.ref('playerAtEnd').on("value", (data)=>{
            //se usa el this pq señala de qué jugador hablamos
            this.rank = data.val();
        })
    }

    static updatePlayerRank(rank){
        database.ref('/').update({
                playerAtEnd : rank,
            })
    }




}