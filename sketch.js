var database;
var position;
var stateStorage = 0;
var playerCount = 0;
var form, player, game;
var playerData;
var car1;
var car2;
var garage;


function setup(){
  database = firebase.database();
  createCanvas(displayWidth, displayHeight);

  game = new Game();

  game.getState();
  game.start();
}

function draw(){
  background("white");

  if(playerCount === 2){
    game.updateState(1);
  }

  if(stateStorage === 1){
    clear();
    game.play();
  }

  console.log(stateStorage);
}