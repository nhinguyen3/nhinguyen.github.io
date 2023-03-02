var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circle;   // variable used to hold a single circle as circles are created / iterating
        var circles = []; // variable that stores all the circles in one Array

        // TODO 2 : Create a function that draws a circle 
        function drawCircle (){
            // Code to draw a circle
            circle = draw.randomCircleInArea(canvas, true, true, '#999', 2); // draw is taken from an existing library and this will draw a circle of random size, location, and color withing the screen. It stores the output of the funcion in circle temporarily.  
            physikz.addRandomVelocity(circle, canvas, 10, 10); // the physikz library provides motion to canvas drawings and adds a random velocitya dn direction to the circle. 
            view.addChild(circle); // this adds the circle as a child of view to get the circle to appear.
            circles.push(circle);  // allows each new circle to be saved by pushing it to the end of an array. 
        }

        // TODO 3 / 7 : Call the drawCircle() function 
        // drawCircle(); // This draws and creates a circle according to the function created above in TODO 2
        // drawCircle(); // the same occurs but another circle is drawn.
        // drawCircle(); // the same occurs but another circle is drawn.
        // drawCircle(); // the same occurs but another circle is drawn.
        // drawCircle(); // the same occurs but another circle is drawn. The violates the DRY rule but still works in allowing us to create multiple circles that will appear on the screen.
        
        for (var drawCircles = 0; drawCircles < 100; drawCircles++) {
            // this loop replaces the repetitive code that was used earlier. It calls and creates multiple circles at once. This for loop runs 100 times. 
            // do something
            drawCircle(); // this is the function that is being called. 
        }

        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the circle's position //
            //physikz.updatePosition(circles[0]); // this function accepts a circle as an arguments and redraws taht circle in a new location. The circles are stored in the circles Array and bracket notation pulls out individual circles to be moved using the index. 
            //physikz.updatePosition(circles[1]); // does the same thing but with an index of 1.
            //physikz.updatePosition(circles[2]); // does the same thing but with an index of 2.
            //physikz.updatePosition(circles[3]); // does the same thing but with an index of 3.
            //physikz.updatePosition(circles[4]); // does the same thing but with an index of 4.

            
            // TODO 5 / 10 : Call game.checkCirclePosition() on your circles.
            //game.checkCirclePosition(circles[0]); // this is an incomplete function that is being called which keeps circles that stray off the screen on the screen. This is applied to individual circles. This one has an index of 1. 
            //game.checkCirclePosition(circles[1]); // does the same thing but with an index of 1. 
            //game.checkCirclePosition(circles[2]); // does the same thing but with an index of 2.
            //game.checkCirclePosition(circles[3]); // does the same thing but with an index of 3.
            //game.checkCirclePosition(circles[4]); // does the same thing but with an index of 4.

            // These were function calls were deleted because by using the loop we are able to call on all the circles without repeating ourselves. It is more efficient then using the hard coded numbers. 

            for (var i = 0; i < circles.length; i++) { // this allows us to move all 100 circles and keep them within the screen through iteration which acesses every element in an array to perform some action. 
                var eachValue = circles[i]; // (explanation continued) the variable contains a bracket notation for each circle in the array. All of this will loop until every circle has been called.

                // code to repeat using eachValue
                physikz.updatePosition(circles[i]); // the function redraws a circle in a new location and the bracket notation calls on a circle. By using i we can call of each individual circle without using hard coded numbers and repetition. 
                game.checkCirclePosition(circles[i]); // this function keeps the circles from straying off of the screen and the i applys this to all the circles without using repetition adn hard coding it. 
              
             }
            // TODO 9 : Iterate over the array
           
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {
            // the canvas.width is the maximum x-coordinate adn canvas.height is the maximum y-coordinate. 0 is the minimum x and y-coordinate. These will allow us to control were the circles are exiting and coming back through the use of if statements.
            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            }
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            // if the circle has gone past the LEFT side of the screen then place it on the RIGHT
            if ( circle.x < 0){
                circle.x = canvas.width;
            }
            // if the circle has gone past the TOP of the screen then place it on BOTTOM
            if (circle.y < 0){
                circle.y = canvas.height;
            }
            // if the circle has gone past the BOTTOM of the screen then place it on the TOP
            if (circle.y > canvas.height){
                circle.y = 0;
            }


            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
