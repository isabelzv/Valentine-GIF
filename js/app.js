//create new HTML img element
var heartImage = new Image();
//set the img src
heartImage.src = "images/bloodSprite.png";

//grab canvas
var canvas = document.getElementById("heartAnimation");
canvas.width = 550;
canvas.height = 550;

//define sprite class initiator
var Sprite = function(options) {
	// canvas.getCOntext("2d")
	this.context = options.context;

	// total width of sprite sheet
	this.width = options.width;

	// height of sprite
	this.height = options.height;

	// HTML image element with src set
	this.image = options.image;

	// # of sprites in sheet
	this.numberOfFrames = options.numberOfFrames || 1;

	// frame index refers to which sprite within the strip we're on.
	// initialize as 0. Will be updated in update method.
    this.frameIndex = 0;

    // tickCount updates with each updat, used to keep track of how long that frame within the strip has been shown for.
    // initialize as 0. Will be updated in update method.
    this.tickCount = 0;

    // ticks per frame will determine how long each frame will play for.
    this.ticksPerFrame = options.ticksPerFrame || 4;
};

//render image function
Sprite.prototype.render = function() {

	// use drawImage method
    this.context.drawImage(

        // draw the sprite strip.
        this.image,

        // start drawing the strip at pos x from whatever frame index we're on.
        this.frameIndex * this.width / this.numberOfFrames,

        // pos y, start from the top of the strip.
        0,

        // // draw only the width of one frame (not the whole strip).
        this.width / this.numberOfFrames,

        // draw the whole height of the strip.
        this.height,

        // // draw at pos x and y (set in update).
        0,
        0,

        // // draw image the width and height of the canvas.
        this.width / this.numberOfFrames,
        this.height
    );
};

//TODO update function
Sprite.prototype.update = function() {
    // update the tick counter by 1.
    this.tickCount += 1;
    // If tickCount is more than the set number of ticks per frame then reset the tickCount and move on to the next frame.
    if (this.tickCount > this.ticksPerFrame) {
        this.tickCount = 0;
        // If the current frame index is in range
        if (this.frameIndex < this.numberOfFrames - 1) {
            // Go to the next frame
            this.frameIndex += 1;
        } else {
            // set the frame index back to 0, so it will play from the beginning again.
            this.frameIndex = 0;
            this.tickCount = 0;
        }
    };
};

//create new heart sprite object using heart strip
var heart = new Sprite({
	context: canvas.getContext("2d"),
    width: 3072,
    height: 512,
    image: heartImage,
    numberOfFrames: 6,
    ticksPerFrame: 4
});

function gameLoop () {

  window.requestAnimationFrame(gameLoop);

  heart.update();
  heart.render();
}

// Start the game loop as soon as the sprite sheet is loaded
heartImage.addEventListener("load", gameLoop);

