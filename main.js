song = "";

function preload()
{
    song = loadSound("Drive Forever - Russian Remix Song.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.position(400, 200);

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}


function play()
{
    song.play();
}
