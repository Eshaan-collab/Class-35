var Ball,database,position;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    Ball = createSprite(250,250,10,10);
    Ball.shapeColor = "red";
    var ballposition=database.ref('ball/position');
    ballposition.on("value",readp,showerror);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
  database.ref('ball/position').set({'x':position.x+x,'y':position.y+y});
}
function readp(data){
position=data.val();
Ball.x=position.x;
Ball.y=position.y;
}
function showerror(){
    console.log("unable to read data");
}
