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
                { "type": "ax", "x": 400, "y": groundY - 110},
                { "type": "ax", "x": 600, "y": groundY - 10},
                { "type": "ax", "x": 900, "y": groundY - 110},

                { "type": "bee", "x": 400, "y": groundY - 50 },
                { "type": "bee", "x": 800, "y": groundY - 50},

                { "type": "bird", "x": 1700, "y": groundY - 130},
                { "type": "bird", "x": 1850, "y": groundY - 70},

                { "type": "reward", "x": 950, "y": groundY - 120 },

                { "type": "cactus", "x": 2000, "y": groundY - 10 },   
                { "type": "cactus", "x": 2200, "y": groundY - 10 },
                { "type": "cactus", "x": 2400, "y": groundY - 10 },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        
       function createAx(x,y){
            var hitZoneSize = 25; // assigns a value of 25 as the size of the hitzone
            var damageFromObstacle = 15; // assigns a value as the damage from the obstacle
            var axHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // creates the obstacle and stores it in the variable sawBladeHitZone
            axHitZone.x = x; // stores a value as the x position for the hit zone
            axHitZone.y = y; // stores a value as the y position for the hit zone
            game.addGameItem(axHitZone); // adds the hit zone as a game item
            var obstacleImage = draw.bitmap("img/ax.png"); // draws the image and stores it in the variable in the variable obstacleImage
            axHitZone.addChild(obstacleImage); // adds obstacleImage as a child of sawBladeHitZone
            obstacleImage.x = -25; // assigns a value to the x position of obstacleImage
            obstacleImage.y = -45; // assigns a value to the y position of obstacleImage
    
        }
        

       

        function createBee(x, y ){
            var enemy = game.createGameItem("bee", 25);
            //var gameItem = draw.rect(50, 50, "red");
            var gameItem = draw.bitmap("img/bee.png");
            gameItem.x = -25;
            gameItem.y = -25;
            enemy.addChild(gameItem);
            enemy.x = x;
            enemy.y = y;
            game.addGameItem(enemy);
            enemy.velocityX = -2;

            enemy.onPlayerCollision = function (){
                game.changeIntegrity(-5);
            }

            enemy.onProjectileCollision = function (){
                game.increaseScore(10);
                enemy.flyTo(600, 0);
            }
        }

        function createBird(x, y ){
            var enemy = game.createGameItem("bird", 25);
            //var gameItem = draw.rect(50, 50, "red");
            var gameItem = draw.bitmap("img/bird.png");
            gameItem.x = -26;
            gameItem.y = -26;
            enemy.addChild(gameItem);
            enemy.x = x;
            enemy.y = y;
            game.addGameItem(enemy);
            enemy.velocityX = -2;

            enemy.onPlayerCollision = function (){
                game.changeIntegrity(-10);
            }

            enemy.onProjectileCollision = function (){
                game.increaseScore(15);
                enemy.flyTo(600, 0);
            }
        }


        function createReward(x, y ){
             var reward = game.createGameItem("reward", 25);
            //var gameItem = draw.rect(50, 50, "blue");
            var gameItem = draw.bitmap("img/coin.png");
            gameItem.scaleX = 0.20; // scales the sun's x value
            gameItem.scaleY = 0.20; // scales the sun's y value
            gameItem.x = -25;
            gameItem.y = -15;
            reward.addChild(gameItem);
            reward.x = x;
            reward.y = y;
            game.addGameItem(reward);
            reward.velocityX = -2;

            reward.onPlayerCollision = function (){
                game.changeIntegrity(10);
                game.increaseScore(15);
                reward.shrink();
            }

        }


        function createCactus(x, y){
            var hitZoneSize = 25; // assigns a value of 25 as the size of the hitzone
            var damageFromObstacle = 20; // assigns a value as the damage from the obstacle
            var cactusHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // creates the obstacle and stores it in the variable sawBladeHitZone
            cactusHitZone.x = x; // stores a value as the x position for the hit zone
            cactusHitZone.y = y; // stores a value as the y position for the hit zone
            game.addGameItem(cactusHitZone); // adds the hit zone as a game item
            var obstacleImage = draw.bitmap("img/cactus.png"); // draws the image and stores it in the variable in the variable obstacleImage
            cactusHitZone.addChild(obstacleImage); // adds obstacleImage as a child of sawBladeHitZone
            obstacleImage.x = -25; // assigns a value to the x position of obstacleImage
            obstacleImage.y = -55; // assigns a value to the y position of obstacleImage
    
        }


       for(var i = 0; i < levelData.gameItems.length; i++){
            var gameItem = levelData.gameItems[i];

            if(gameItem.type === "ax"){
                createAx(gameItem.x, gameItem.y);
            }
            if(gameItem.type === "bee"){
                createBee(gameItem.x, gameItem.y);
            }
            if(gameItem.type === "bird"){
                createBird(gameItem.x, gameItem.y);
            }
            if(gameItem.type === "reward"){
                createReward(gameItem.x, gameItem.y);
            }
            if(gameItem.type === "cactus"){
                createCactus(gameItem.x, gameItem.y);
            }
       }

        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
