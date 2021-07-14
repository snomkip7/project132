
img = "";
status = "";
x = "";
y = "";
width = "";
height = "";

function preload(){
    img = loadImage("bed.jpg");
    //img = loadImage("image_1.jpg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded(){
    console.log("Model Loaded :)");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);

    x = results[0].x;
    console.log("x = "+x);
    y = results[0].y;
    console.log("y = "+y);
    width = results[0].width;
    console.log("width = "+width);
    height = results[0].height;
    console.log("height = "+height);
}

function draw(){
    image(img, 0, 0, 640, 420);
    stroke("#FF0000")
    fill("#FF0000");
    text("Bed", 45, 75);
    //text("Cheetah", 160, 25);
    //text("Dog", 330, 65);
    noFill();
    stroke("#FF0000");
    rect(10, 60, 620, 350);
    //rect(150, 10, 170, 400);
    //rect(300, 40, 230, 375);
    stroke("#0000FF");
    fill("#0000FF");
    text("Stuffed Animal", 415, 60);
    noFill();
    stroke("#0000FF");
    rect(410, 50, 85, 110);

    //fill("#0000FF");
    //text("Cat", x+10, y+10);
    //noFill();
    //stroke("#0000FF");
    //rect(x, y, width, height);
}
