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
                { "type": "ax", "x": 400, "y": groundY - 110}, // creates object and defines/assigns them with a certain x and y value relative to groundX and groundY.
                { "type": "ax", "x": 600, "y": groundY - 10},
                { "type": "ax", "x": 900, "y": groundY - 110},
                { "type": "ax", "x": 4150, "y": groundY - 110},
                { "type": "ax", "x": 4300, "y": groundY - 110},

                { "type": "column", "x": 2900, "y": groundY - 2},
                { "type": "column", "x": 3260, "y": groundY - 2},

                { "type": "column2", "x": 3100, "y": groundY - 120},
                { "type": "column2", "x": 3460, "y": groundY - 120},

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
        game.setDebugMode(false);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        
       function createAx(x,y){
            var hitZoneSize = 25; // assigns a value of 25 as the size of the hitzone
            var damageFromObstacle = 15; // assigns a value as the damage from the obstacle
            var axHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // creates the obstacle and stores it in the variable axHitZone
            axHitZone.x = x; // stores a value as the x position for the hit zone
            axHitZone.y = y; // stores a value as the y position for the hit zone
            game.addGameItem(axHitZone); // adds the hit zone as a game item
            var obstacleImage = draw.bitmap("img/ax.png"); // draws the image and stores it in the variable obstacleImage
            axHitZone.addChild(obstacleImage); // adds obstacleImage as a child of axHitZone
            obstacleImage.x = -25; // assigns a value to the x position of obstacleImage
            obstacleImage.y = -45; // assigns a value to the y position of obstacleImage
    
        }

        function createColumn(x,y){
            var hitZoneSize = 25; // assigns a value of 25 as the size of the hitzone
            var damageFromObstacle = 15; // assigns a value as the damage from the obstacle
            var columnHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // creates the obstacle and stores it in the variable columnHitZone
           columnHitZone.x = x; // stores a value as the x position for the hit zone
           columnHitZone.y = y; // stores a value as the y position for the hit zone
            game.addGameItem(columnHitZone); // adds the hit zone as a game item
            var obstacleImage = draw.bitmap("img/column.png"); // draws the image and stores it in the variable obstacleImage
            obstacleImage.scaleX = 0.20; // scales the obstacle's x value
            obstacleImage.scaleY = 0.15; // scales the obstacle's y value
           columnHitZone.addChild(obstacleImage); // adds obstacleImage as a child of columnHitZone
            obstacleImage.x = -25; // assigns a value to the x position of obstacleImage
            obstacleImage.y = -45; // assigns a value to the y position of obstacleImage
    
        }

        function createColumn2(x,y){
            var hitZoneSize = 25; // assigns a value of 25 as the size of the hitzone
            var damageFromObstacle = 15; // assigns a value as the damage from the obstacle
            var column2HitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // creates the obstacle and stores it in the variable column2HitZone
            column2HitZone.x = x; // stores a value as the x position for the hit zone
           column2HitZone.y = y; // stores a value as the y position for the hit zone
            game.addGameItem(column2HitZone); // adds the hit zone as a game item
            var obstacleImage = draw.bitmap("img/column2.png"); // draws the image and stores it in the variable obstacleImage
            obstacleImage.scaleX = 0.20; // scales the obstacle's x value
            obstacleImage.scaleY = 0.20; // scales the obstacle's y value
           column2HitZone.addChild(obstacleImage); // adds obstacleImage as a child of column2HitZone
            obstacleImage.x = -25; // assigns a value to the x position of obstacleImage
            obstacleImage.y = -45; // assigns a value to the y position of obstacleImage
    
        }
       

        function createBee(x, y ){
            var enemy = game.createGameItem("bee", 25); // defines/creates the enemy as bee and assigns the value of 25 as the size of the hitzone
            //var gameItem = draw.rect(50, 50, "red");
            var gameItem = draw.bitmap("img/bee.png"); // draws the image and stores it in the variable gameItem
            gameItem.x = -25; // assigns a value to the x position of gameItem
            gameItem.y = -25; // assigns a value to the y position of gameItem
            enemy.addChild(gameItem); // adds gameItem as a child of enemy
            enemy.x = x; // stores a value as the x position for the enemy
            enemy.y = y; // stores a value as the y position for the enemy
            game.addGameItem(enemy); // adds the enemy as a game item
            enemy.velocityX = -2; // assigns a value to the velocity of the enemy

            enemy.onPlayerCollision = function (){
                game.changeIntegrity(-5); // a function that assigns a value as the damage from the enemy
            }

            enemy.onProjectileCollision = function (){
                game.increaseScore(10); // a function that assigns a value as the health gained from killing the enemy
                enemy.flyTo(600, 0); // allows the enemy to fly off the screen upward whe it is hit
            }
        }

        function createBird(x, y ){
            var enemy = game.createGameItem("bird", 25); // defines/creates the enemy as bird and assigns the value of 25 as the size of the hitzone
            //var gameItem = draw.rect(50, 50, "red");
            var gameItem = draw.bitmap("img/bird.png");  // draws the image and stores it in the variable gameItem
            gameItem.x = -26;// assigns a value to the x position of gameItem
            gameItem.y = -26;// assigns a value to the y position of gameItem
            enemy.addChild(gameItem); // adds gameItem as a child of enemy
            enemy.x = x; // stores a value as the x position for the enemy
            enemy.y = y; // stores a value as the y position for the enemy
            game.addGameItem(enemy); // adds the enemy as a game item
            enemy.velocityX = -2; // assigns a value to the velocity of the enemy

            enemy.onPlayerCollision = function (){
                game.changeIntegrity(-10); // a function that assigns a value as the damage from the enemy
            }

            enemy.onProjectileCollision = function (){
                game.increaseScore(15); // a function that assigns a value as the health gained from killing the enemy
                //enemy.flyTo(600, 0);
                enemy.shrink(); // causes the enemy to shrink when it is killed
            }
        }


        function createCoin(x, y ){
             var reward = game.createGameItem("coin", 25); // defines/creates the reward as coin and assigns the value of 25 as the size of the hitzone
            //var gameItem = draw.rect(50, 50, "blue");
            var gameItem = draw.bitmap("img/coin.png"); // draws the image and stores it in the variable gameItem
            gameItem.scaleX = 0.20; // scales the gameItem's x value
            gameItem.scaleY = 0.20; // scales the gameItem's y value
            gameItem.x = -25; // assigns a value to the x position of gameItem
            gameItem.y = -15; // assigns a value to the y position of gameItem
            reward.addChild(gameItem);  // adds gameItem as a child of reward
            reward.x = x; // stores a value as the x position for the reward
            reward.y = y;// stores a value as the y position for the reward
            game.addGameItem(reward); // adds the reward as a game item
            reward.velocityX = -2; // assigns a value to the velocity of the enemy

            reward.onPlayerCollision = function (){
                game.increaseScore(15); // a function that assigns a value as the health gained from getting the reward
                reward.shrink(); // causes the reward to shrink when it is hit
            }

        }

        function createMoney(x, y ){
            var reward = game.createGameItem("money", 25); // defines/creates the reward as money and assigns the value of 25 as the size of the hitzone
           //var gameItem = draw.rect(50, 50, "blue");
           var gameItem = draw.bitmap("img/money.png"); // draws the image and stores it in the variable gameItem
           gameItem.scaleX = 0.50; // scales the gameItem's x value
           gameItem.scaleY = 0.50; // scales the gameItem's y value
           gameItem.x = -25; // assigns a value to the x position of gameItem
           gameItem.y = -15; // assigns a value to the y position of gameItem
           reward.addChild(gameItem);  // adds gameItem as a child of reward
           reward.x = x; // stores a value as the x position for the reward
           reward.y = y; // stores a value as the y position for the reward
           game.addGameItem(reward); // adds the reward as a game item
           reward.velocityX = -2; // assigns a value to the velocity of the enemy

           reward.onPlayerCollision = function (){
               game.increaseScore(100); // a function that assigns a value as the health gained from getting the reward
               reward.shrink(); // causes the reward to shrink when it is hit
           }

       }

       function createGem(x, y ){
        var reward = game.createGameItem("gem", 25);  // defines/creates the reward as gem and assigns the value of 25 as the size of the hitzone
       //var gameItem = draw.rect(50, 50, "blue");
       var gameItem = draw.bitmap("img/gem.png"); // draws the image and stores it in the variable gameItem
       gameItem.scaleX = 0.70; // scales the gameItem's x value
       gameItem.scaleY = 0.70; // scales the gameItem's y value
       gameItem.x = -25; // assigns a value to the x position of gameItem
       gameItem.y = -15; // assigns a value to the y position of gameItem
       reward.addChild(gameItem); // adds gameItem as a child of reward
       reward.x = x; // stores a value as the x position for the reward
       reward.y = y; // stores a value as the y position for the reward
       game.addGameItem(reward); // adds the reward as a game item
       reward.velocityX = -2; // assigns a value to the velocity of the enemy

       reward.onPlayerCollision = function (){
           game.increaseScore(15); // a function that assigns a value as the health gained from getting the reward
           reward.shrink(); // causes the reward to shrink when it is hit
       }
     }


        function createCactus(x, y){
            var hitZoneSize = 25; // assigns a value of 25 as the size of the hitzone
            var damageFromObstacle = 20; // assigns a value as the damage from the obstacle
            var cactusHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // creates the obstacle and stores it in the variable cactusHitZone
            cactusHitZone.x = x; // stores a value as the x position for the hit zone
            cactusHitZone.y = y; // stores a value as the y position for the hit zone
            game.addGameItem(cactusHitZone); // adds the hit zone as a game item
            var obstacleImage = draw.bitmap("img/cactus.png"); // draws the image and stores it in the variable in the variable obstacleImage
            cactusHitZone.addChild(obstacleImage); // adds obstacleImage as a child of cactusHitZone
            obstacleImage.x = -25; // assigns a value to the x position of obstacleImage
            obstacleImage.y = -55; // assigns a value to the y position of obstacleImage
    
        }

        function createPlant(x, y){
            var hitZoneSize = 25; // assigns a value of 25 as the size of the hitzone
            var damageFromObstacle = 20; // assigns a value as the damage from the obstacle
            var plantHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // creates the obstacle and stores it in the variable plantHitZone
            plantHitZone.x = x; // stores a value as the x position for the hit zone
            plantHitZone.y = y; // stores a value as the y position for the hit zone
            game.addGameItem(plantHitZone); // adds the hit zone as a game item
            var obstacleImage = draw.bitmap("img/plant.png"); // draws the image and stores it in the variable in the variable obstacleImage
            obstacleImage.scaleX = 0.70; // scales the obstacle's x value
            obstacleImage.scaleY = 0.70; // scales the obstacle's y value
            plantHitZone.addChild(obstacleImage); // adds obstacleImage as a child of plantHitZone
            obstacleImage.x = -25; // assigns a value to the x position of obstacleImage
            obstacleImage.y = -45; // assigns a value to the y position of obstacleImage
    
        }


       for(var i = 0; i < levelData.gameItems.length; i++){
        //a for loop that loops through the level data array and checks the if statments executed when each object is called
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
