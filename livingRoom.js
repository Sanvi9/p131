img = "";
function preload() {
    img = loadImage("living room.jpeg");
}

function setup() {
    canvas = createCanvas(600,450);
    canvas.center();
}
function draw() {
    image(img,0,0,600,450);
}