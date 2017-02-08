var heartImage = new Image();
coinImage.src = "images/bloodSprite.png";

//grab canvas
var canvas = document.getElementById("coinAnimation");
canvas.width = 100;
canvas.height = 100;

//define sprite object
var sprite = function(options) {
	var that = {};

	that.context = options.context;
	that.width = options.width;
	that.height = options.height;
	that.image = options.image;

	return that;
}

//TODO create sprite object using blood strip



//TODO draw image function

//TODO render image funnction

//TODO update function