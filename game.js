//player
let player;
function Player(raceType, attack, defence, mana, speed, health) {
    this.raceType = raceType;
    this.attack = attack;
    this.defence = defence;
    this.mana = mana;
    this.speed = speed; 
    this.health = health;
    }
    //enemy
function Enemy(raceType, attack, defence, mana, speed, health) {
    this.raceType = raceType;
    this.attack = attack;
    this.defence = defence;
    this.mana = mana;
    this.speed = speed; 
    this.health = health;
    }   
let attackStat = Player.attack;



let GameInit = {
    startGame: function(raceType){
        this.setPlayer(raceType);
        this.chProfile(raceType);
        
    }
           ,setPlayer: function(raceType) {
                switch(raceType) {
            case "nord":
                player = new Player(raceType, 100, 30, 0, 40, 200);
            case "high-elf":
                player = new Player(raceType, 100, 30, 0, 40, 200);
            case "dark-elf":
                player = new Player(raceType, 100, 30, 0, 40, 200);
            case "wood-elf":
                player = new Player(raceType, 100, 30, 0, 40, 200);
            case "breton": 
                player = new Player(raceType, 100, 30, 0, 40, 200);
            case "khajiit":
                player = new Player(raceType, 100, 30, 0, 40, 200);
            case "orc" : 
                player = new Player(raceType, 100, 30, 0, 40, 200);
            case "argonian" :
                player = new Player(raceType, 100, 30, 0, 40, 200);
                            };          }

            ,chProfile: function(raceType){
                document.getElementById('characterMenu').style.display = 'none';
                document.getElementById('interface').style.display = 'inline-block';
                switch(raceType) {
            case "nord":
                 document.getElementById('nordBio').style.display = 'inline-block';
                 break;
            case "high-elf":
                 document.getElementById('highElfBio').style.display = 'block';
                 break;
            case "dark-elf":
                 document.getElementById('darkElfBio').style.display = 'block'   ; break;
            case "wood-elf":
                 document.getElementById('woodElfBio').style.display = 'block'; break;
            case "breton": 
                 document.getElementById('bretonBio').style.display = 'block'; break;
            case "khajiit":
                 document.getElementById('khajiitBio').style.display = 'block'; break;
            case "orc" : 
                 document.getElementById('orcBio').style.display = 'block'; break;
            case "argonian" :
                 document.getElementById('argonianBio').style.display = 'block'; break;  
                };

            }                
        
        
        
     
    };

    
    
    
    


