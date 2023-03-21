var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        var tree;
        var buildings = [];
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'lightblue');
            background.addChild(backgroundFill);
            
            // TODO: 3 - Add a moon and starfield
            var moon = draw.bitmap("img/moon.png"); // draws the moon using .bitmap and stores it in the moon variable
            moon.x = canvasWidth - 300; // ads an x value to the moon of 300 pixels
            moon.y = groundY - 450; // adds an y value to the moon of 200 pixels
            moon.scaleX = 0.50; // scales the moon's x value
            moon.scaleY = 0.50; // scales the moon's y value
            background.addChild(moon); // add the moon as a child of background
            
            // loop that draws 100 stars
            for(var i = 0; i < 100; i++){
                var circle = draw.circle(5, "white", "LightGray", 2); // draws a circle and stores it in the variable circle
                circle.x = canvasWidth * Math.random(); // multiplies a random decimal times the width of the canvas and stores it as the circle's x position
                circle.y = groundY * Math.random();// multiplies a random decimal times the groundY of the canvas and stores it as the circle's y position
                background.addChild(circle); // adds circle as a child of background
            }
            
            // TODO 5: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 5; ++i) {
                var buildingHeights = [150, 120, 300, 225, 100];
                var buildingColors = ['blue', 'red', 'orange', 'green', 'pink']
                var building = draw.rect(75, buildingHeights[i], buildingColors[i], "Black", 1);
                building.x = 200 * i;
                building.y = groundY - buildingHeights[i];
                background.addChild(building);
                buildings.push(building);
              }
            
            // TODO 4: Part 1 - Add a tree
            tree = draw.bitmap("img/tree.png"); // Uses bitmap to draw the image and stores it in the variable tree
            tree.x = canvasWidth - 200; // assigns an x value to the tree
            tree.y = groundY - 230; // assigns an y value to the tree
            background.addChild(tree); // add the tree as a child to background to make it visible
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            tree.x = tree.x -1;

            if(tree.x < -200){
                tree.x = canvasWidth;
            }
            
            // TODO 5: Part 2 - Parallax
            for (var i = 0; i < myArray.length; i++) {
                var eachElement = myArray[i];
                building.x = building.x -1;

                if(building.x < -200){
                    building.x = canvasWidth;
                }
                // code to do something with each element
              }

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
