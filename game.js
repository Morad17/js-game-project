
//Start Game
let GameInit = {
    startGame: function(raceType){
        this.setPlayer(raceType);
        this.chProfile(raceType);
        
                                }
            //Choose Player
           ,setPlayer: function(raceType) {
                switch(raceType) {
            case "nord":
                player = new Player(raceType, 100, 30, 0, 40, 200);
            case "high-elf":
                player = new Player(raceType, 100, 30, 0, 40, 200);
            case "dark-elf":
                player = new Player(raceType, 10, 30, 90, 40, 200);
            case "wood-elf":
                player = new Player(raceType, 100, 30, 0, 40, 200);
            case "breton": 
                player = new Player(raceType, 0, 30, 1, 40, 200);
            case "khajiit":
                player = new Player(raceType, 100, 30, 0, 40, 200);
            case "orc" : 
                player = new Player(raceType, 100, 30, 0, 40, 200);
            case "argonian" :
                player = new Player(raceType, 100, 30, 0, 40, 200);
                            };          }
            //Character Bio
            ,chProfile: function(raceType){
                document.getElementById('characterMenu').style.display = 'none';
                document.getElementById('interface').style.display = 'inline-block';
                switch(raceType) {
            case "nord":
                 document.getElementById('nordBio').style.display = 'inline-block';
                 break;
            case "high-elf":
                 document.getElementById('highElfBio').style.display = 'inline-block';
                 break;
            case "dark-elf":
                 document.getElementById('darkElfBio').style.display = 'inline-block'   ; break;
            case "wood-elf":
                 document.getElementById('woodElfBio').style.display = 'inline-block'; break;
            case "breton": 
                 document.getElementById('bretonBio').style.display = 'inline-block'; break;
            case "khajiit":
                 document.getElementById('khajiitBio').style.display = 'inline-block'; break;
            case "orc" : 
                 document.getElementById('orcBio').style.display = 'inline-block'; break;
            case "argonian" :
                 document.getElementById('argonianBio').style.display = 'inline-block'; break;  
                };

            }
            //Initiate Fight Scene
            ,setFight1: function(raceType){
                document.getElementById('interface').style.display = 'none';
                document.getElementById('fight-scene1').style.display = 'inline-block';
                switch(raceType) {
            case "nord":
                 document.getElementById('avatarImg').src = 'img/nord.png';
                 break;
            case "high-elf":
                 document.getElementById('avatarImg').src = 'img/high-elf.png';
                 break;
            case "dark-elf":
                 document.getElementById('avatarImg').src = 'img/dark-elf.png'; break;
            case "wood-elf":
                 document.getElementById('avatarImg').src = 'img/wood-elf.png'; break;
            case "breton": 
                 document.getElementById('avatarImg').src = 'img/breton.png'; 
                 break;
            case "khajiit":
                 document.getElementById('avatarImg').src = 'img/khajiit.png'; break;
            case "orc" : 
                 document.getElementById('avatarImg').src = 'img/orc.png'; 
                 break;
            case "argonian" :
                 document.getElementById('avatarImg').src = 'img/argonian.png'; break;  
                }; }

                //create enemy
            , genEnemy: function() {

            document.getElementById("fightButton").style.display = 'none'
            document.getElementById("runButton").style.display = 'none'
            
            let enemy00 = new Enemy("bear", 70, 10, 0, 20, 230)
            let enemy01 = new Enemy("assassin", 90, 10, 0, 20, 230)
            let enemy02 = new Enemy("draugr", 80, 10, 0, 20, 230)
            
                //random select enemy
            let chooseRandomEnemy = Math.floor(Math.random() * 3);
            switch (chooseRandomEnemy) {
                case 0:
                    enemy = enemy00;
                    document.getElementById('enemyImg1').src = 'img/bear.png';
                    
                    break;
                case 1:
                    enemy = enemy01;
                    document.getElementById('enemyImg1').src = 'img/draugr.png';
                    break;
                case 2:
                    enemy = enemy02;
                    document.getElementById('enemyImg1').src = 'img/assassin.png';
                    break;

                    
            }}
            
            , proceed1: function() {
                document.getElementById("fight-scene1").style.display = 'none';
                document.getElementById("treasureScene").style.display = 'block';

            }

        
        
        
     
    };

    
    
    
    


