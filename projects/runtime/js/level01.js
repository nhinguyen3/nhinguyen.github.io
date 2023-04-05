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
                { "type": "ax", "x": 4150, "y": groundY - 110},
                { "type": "ax", "x": 4300, "y": groundY - 110},

                { "type": "column", "x": 2900, "y": groundY - 2},
                { "type": "column", "x": 3260, "y": groundY - 2},

                { "type": "column2", "x": 3100, "y": groundY - 120},
                { "type": "column2", "x": 3400, "y": groundY - 120},

                { "type": "bee", "x": 400, "y": groundY - 50 },
                { "type": "bee", "x": 800, "y": groundY - 50},

                { "type": "bird", "x": 1700, "y": groundY - 130},
                { "type": "bird", "x": 1850, "y": groundY - 70},

                { "type": "coin", "x": 950, "y": groundY - 120 },
                { "type": "coin", "x": 3050, "y": groundY - 25 },

                { "type": "money", "x": 2460, "y": groundY - 120 },
                { "type": "money", "x": 3390, "y": groundY - 60 },

                { "type": "gem", "x": 4300, "y": groundY - 25 },

                { "type": "cactus", "x": 2000, "y": groundY - 10 },   
                { "type": "cactus", "x": 2200, "y": groundY - 10 },
                { "type": "cactus", "x": 2400, "y": groundY - 10 },

                { "type": "plant", "x": 3850, "y": groundY},
                { "type": "plant", "x": 4000, "y": groundY},
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

        function createColumn(x,y){
            var hitZoneSize = 25; // assigns a value of 25 as the size of the hitzone
            var damageFromObstacle = 15; // assigns a value as the damage from the obstacle
            var axHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // creates the obstacle and stores it in the variable sawBladeHitZone
            axHitZone.x = x; // stores a value as the x position for the hit zone
            axHitZone.y = y; // stores a value as the y position for the hit zone
            game.addGameItem(axHitZone); // adds the hit zone as a game item
            var obstacleImage = draw.bitmap("img/column.png"); // draws the image and stores it in the variable in the variable obstacleImage
            obstacleImage.scaleX = 0.20; // scales the sun's x value
            obstacleImage.scaleY = 0.15; // scales the sun's y value
            axHitZone.addChild(obstacleImage); // adds obstacleImage as a child of sawBladeHitZone
            obstacleImage.x = -25; // assigns a value to the x position of obstacleImage
            obstacleImage.y = -45; // assigns a value to the y position of obstacleImage
    
        }

        function createColumn2(x,y){
            var hitZoneSize = 25; // assigns a value of 25 as the size of the hitzone
            var damageFromObstacle = 15; // assigns a value as the damage from the obstacle
            var axHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // creates the obstacle and stores it in the variable sawBladeHitZone
            axHitZone.x = x; // stores a value as the x position for the hit zone
            axHitZone.y = y; // stores a value as the y position for the hit zone
            game.addGameItem(axHitZone); // adds the hit zone as a game item
            var obstacleImage = draw.bitmap("img/column2.png"); // draws the image and stores it in the variable in the variable obstacleImage
            obstacleImage.scaleX = 0.20; // scales the sun's x value
            obstacleImage.scaleY = 0.20; // scales the sun's y value
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
                //enemy.flyTo(600, 0);
                enemy.shrink();
            }
        }


        function createCoin(x, y ){
             var reward = game.createGameItem("coin", 25);
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

        function createMoney(x, y ){
            var reward = game.createGameItem("money", 25);
           //var gameItem = draw.rect(50, 50, "blue");
           var gameItem = draw.bitmap("img/money.png");
           gameItem.scaleX = 0.50; // scales the sun's x value
           gameItem.scaleY = 0.50; // scales the sun's y value
           gameItem.x = -25;
           gameItem.y = -15;
           reward.addChild(gameItem);
           reward.x = x;
           reward.y = y;
           game.addGameItem(reward);
           reward.velocityX = -2;

           reward.onPlayerCollision = function (){
               game.changeIntegrity(10);
               game.increaseScore(100);
               reward.shrink();
           }

       }

       function createGem(x, y ){
        var reward = game.createGameItem("gem", 25);
       //var gameItem = draw.rect(50, 50, "blue");
       var gameItem = draw.bitmap("img/gem.png");
       gameItem.scaleX = 0.70; // scales the sun's x value
       gameItem.scaleY = 0.70; // scales the sun's y value
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

        function createPlant(x, y){
            var hitZoneSize = 25; // assigns a value of 25 as the size of the hitzone
            var damageFromObstacle = 20; // assigns a value as the damage from the obstacle
            var plantHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // creates the obstacle and stores it in the variable sawBladeHitZone
            plantHitZone.x = x; // stores a value as the x position for the hit zone
            plantHitZone.y = y; // stores a value as the y position for the hit zone
            game.addGameItem(plantHitZone); // adds the hit zone as a game item
            var obstacleImage = draw.bitmap("img/plant.png"); // draws the image and stores it in the variable in the variable obstacleImage
            obstacleImage.scaleX = 0.70; // scales the sun's x value
            obstacleImage.scaleY = 0.70; // scales the sun's y value
            plantHitZone.addChild(obstacleImage); // adds obstacleImage as a child of sawBladeHitZone
            obstacleImage.x = -25; // assigns a value to the x position of obstacleImage
            obstacleImage.y = -45; // assigns a value to the y position of obstacleImage
    
        }


       for(var i = 0; i < levelData.gameItems.length; i++){
            var gameItem = levelData.gameItems[i];

            if(gameItem.type === "ax"){
                createAx(gameItem.x, gameItem.y);
            }
            if(gameItem.type === "column"){
                createColumn(gameItem.x, gameItem.y);
            }
            if(gameItem.type === "column2"){
                createColumn2(gameItem.x, gameItem.y);
            }
            if(gameItem.type === "bee"){
                createBee(gameItem.x, gameItem.y);
            }
            if(gameItem.type === "bird"){
                createBird(gameItem.x, gameItem.y);
            }
            if(gameItem.type === "coin"){
                createCoin(gameItem.x, gameItem.y);
            }
            if(gameItem.type === "money"){
                createMoney(gameItem.x, gameItem.y);
            }
            if(gameItem.type === "gem"){
                createGem(gameItem.x, gameItem.y);
            }
            if(gameItem.type === "cactus"){
                createCactus(gameItem.x, gameItem.y);
            }
            if(gameItem.type === "plant"){
                createPlant(gameItem.x, gameItem.y);
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
