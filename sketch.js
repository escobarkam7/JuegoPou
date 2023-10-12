var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form, game;
var player1,player2;
var players;
var cupcake1, cupcake2, cupcake3, cupcake4;
var cupcakes;
var cupcakesGroup;
var cupcake1_img, cupcake2_img, cupcake3_img, cupcake4_img;
var pouNormal, pouCome;
var player_img;
var player1score =0;
var player2score =0;

function preload(){
  back_img = loadImage("images/Fondo.jpg");
  pouNormal = loadImage("images/PouSonrie.png");
  pouCome = loadImage("images/PouCome.png");
  cupcake1_img = loadImage("images/cupcake_1.png");
  cupcake2_img = loadImage("images/cupcake_2.png");
  cupcake3_img = loadImage("images/cupcake_3.png");
  cupcake4_img = loadImage("images/cupcake_4.png");
  cupcakesGroup = new Group();

}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {


  background('lightBlue');
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
     game.end();
   }
}