var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        
        function createSawBlade(x,y){
            var hitZoneSize = 25; // assigns a value of 25 as the size of the hitzone
            var damageFromObstacle = 10; // assigns a value as the damage from the obstacle
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // creates the obstacle and stores it in the variable sawBladeHitZone
            sawBladeHitZone.x = x; // stores a value as the x position for the hit zone
            sawBladeHitZone.y = y; // stores a value as the y position for the hit zone
            game.addGameItem(sawBladeHitZone); // adds the hit zone as a game item
            var obstacleImage = draw.bitmap("img/sawblade.png"); // draws the image and stores it in the variable in the variable obstacleImage
            sawBladeHitZone.addChild(obstacleImage); // adds obstacleImage as a child of sawBladeHitZone
            obstacleImage.x = -25; // assigns a value to the x position of obstacleImage
            obstacleImage.y = -25; // assigns a value to the y position of obstacleImage
    
        }

        createSawBlade(400, groundY - 110);
        createSawBlade(600, groundY - 10);
        createSawBlade(800, groundY - 100);

        function createSpike(x,y){
            var hitZoneSize = 25; // assigns a value of 25 as the size of the hitzone
            var damageFromObstacle = 10; // assigns a value as the damage from the obstacle
            var spikeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // creates the obstacle and stores it in the variable sawBladeHitZone
            spikeHitZone.x = x; // stores a value as the x position for the hit zone
            spikeHitZone.y = y; // stores a value as the y position for the hit zone
            game.addGameItem(spikeHitZone); // adds the hit zone as a game item
            var obstacleImage = draw.bitmap("img/spike.png"); // draws the image and stores it in the variable in the variable obstacleImage
            spikeHitZone.addChild(obstacleImage); // adds obstacleImage as a child of sawBladeHitZone
            obstacleImage.x = -25; // assigns a value to the x position of obstacleImage
            obstacleImage.y = -25; // assigns a value to the y position of obstacleImage
    
        }
        createSpike(300, groundY - 15);

        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
