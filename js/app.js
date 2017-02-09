var heartImage = new Image();
heartImage.src = "images/bloodSprite.png";

//grab canvas
var canvas = document.getElementById("coinAnimation");
canvas.width = 100;
canvas.height = 100;

//define sprite class initiator
var Sprite = function(options) {
	var that = {};

	that.context = options.context;
	that.width = options.width;
	that.height = options.height;
	that.image = options.image;

	return that;
}

//TODO create sprite object using blood strip
var heart = new Sprite({
	context: canvas.getContext("2d"),
    width: 100,
    height: 100,
    image: heartImage
});


//TODO draw image function

//TODO render image funnction

//TODO update function