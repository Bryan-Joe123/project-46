var gameState;

function setup(){
  createCanvas(windowWidth-20,windowHeight-20);

  gameState="planet1";
  
  story = new Story();
  menu = new Menu();
  planet1=new Planet1();
}

function draw(){
  menu.display();
  story.display(); 
  planet1.display();
}