var canvas, backgroundImage, form;
var girl, boy;
var girlImage, boyImage;
var gravity;
var score = 0;

var gameState = "wait";

function preload(){
    girlImage = loadImage("images/girlForward.png");
    boyImage = loadImage("images/boyForward.jpg");
    backgroundImage = loadImage("images/map.png")
}

function setup(){
    form = new Form();
    /*for (let index = 0; index < 5; index++) {
        obstacle(97, 172);
        obstacle(227, 303);
    }*/
    
}

function draw(){
    if(gameState === "wait"){
        form.display();
      }

    if(gameState === "play"){
        background(backgroundImage)
        createEdgeSprites();

        score = score + Math.round(getFrameRate()/60);

        if(keyDown("w") && girl.y>0){
            girl.y = girl.y - 5;
        }
        if(keyDown("s") && girl.y<400){
            girl.y = girl.y + 5;
        }
        if(keyDown("d")){
            girl.x = girl.x + 5;
        }
        if(keyDown("a")){
            girl.x = girl.x - 5;
        }

        if(keyDown(UP_ARROW) && boy.y>0){
            boy.y = boy.y - 5;
        }
        if(keyDown(DOWN_ARROW) && boy.y<400){
            boy.y = boy.y +5;
        }
        if(keyDown(RIGHT_ARROW)){
            boy.x = boy.x + 5;
        }
        if(keyDown(LEFT_ARROW)){
            boy.x = boy.x - 5;
        }
        if(boy.x<97 || boy.x>172 && boy.x<226 || boy.x>303){
            gameState = "end";
        }
        if(girl.x<97 || girl.x>172 && girl.x<226 || girl.x>303){
            gameState = "end";
        }

        stroke('black');
        fill("green");
        text("Score: "+ score, 300,20);

        changeGirlGravity();
        changeBoyGravity();

        console.log(score)
        drawSprites();
    }

    if(gameState === "end"){
        console.log("end");
        textSize(22);
        stroke("black");
        fill("green");
        text("Game Over!", 150,200);
    }
}

function changeBoyGravity(){
    if(frameCount % 100 === 0){
        var rand = Math.round(random(1, 4));
        switch(rand) {
            case 1: boy.velocityX = 0.5;
                break;
            case 2: boy.velocityX = 0;
                break;
            case 3: boy.velocityX = -0.5;
                break;
            case 4: boy.velocityX = 0;
                break;
            default: break;
        }
    }
}

function changeGirlGravity(){
    if(frameCount % 100 === 0){
        var rand = Math.round(random(1, 4));
        switch(rand) {
            case 1: girl.velocityX = 0.5;
                break;
            case 2: girl.velocityX = 0;
                break;
            case 3: girl.velocityX = -0.5;
                break;
            case 4: girl.velocityX = 0;
                break;
            default: break;
        }
    }
}

/*function obstacle(leftBound, rightBound){
    var randY = Math.random()*400;
    var randX = Math.random()*(rightBound-leftBound)+leftBound;
    var obstacle = createSprite(5,1);
    obstacle.x = randX;
    obstacle.y = randY;
    
}*/