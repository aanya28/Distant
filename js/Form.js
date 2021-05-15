/*class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

  }
}*/

class Form {
  constructor(){
    this.button = createButton("Play");
    this.title = createElement('h1');
  }

  hide(){
    this.button.hide();
    this.title.hide();

  }

  display(){
    this.title.html("Distant");
    this.title.position(150,50)
    this.button.position(175,200);

    this.button.mousePressed(()=>{
      this.button.hide();
      this.title.hide();
      gameState = "play";

      girl = createSprite(10,10);
      girl.y = 340;
      girl.x = 135;
      girl.addImage("girlForward", girlImage);
      girl.scale = 0.11;

      boy = createSprite(10,10);  
      boy.y =340;
      boy.x = 265;
      boy.addImage("boyForward.jpg", boyImage);
      boy.scale = 0.09;

    });
  }
}