//player
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




    function startGame(){
        
        function setPlayer(raceType){
        switch(raceType) {
            case "nord":
                player = new Player(raceType, 100, 30, 0, 40, 200)
            case "high-elf":
                player = new Player(raceType, 100, 30, 0, 40, 200)
            case "dark-elf":
                player = new Player(raceType, 100, 30, 0, 40, 200)
            case "wood-elf":
                player = new Player(raceType, 100, 30, 0, 40, 200)
            case "bosmer": 
                player = new Player(raceType, 100, 30, 0, 40, 200)
            case "khajiit":
                player = new Player(raceType, 100, 30, 0, 40, 200)
            case "orc" : 
                player = new Player(raceType, 100, 30, 0, 40, 200)
            case "argonian" :
                player = new Player(raceType, 100, 30, 0, 40, 200)
        }}

        function setFight(){
        if(attackStat > 99) {
            console.log('you win');
        }}

        this.setPlayer(raceType);
        this.setFight();
        
        
        
        
     
    };


   {var nord = new Player(nord, 100, 30, 0, 40, 200)
var highElf = new Player(highElf, 100, 30, 0, 40, 200)
var darkElf = new Player(darkElf, 100, 30, 0, 40, 200)
var woodElf = new Player(woodElf, 100, 30, 0, 40, 200)
var bosmer = new Player(bosmer, 100, 30, 0, 40, 200)
var khajiit = new Player(khajiit, 100, 30, 0, 40, 200)
var orc = new Player(orc, 100, 30, 0, 40, 200)
var argonian = new Player(argonian, 100, 30, 0, 40, 200)



    function StartGame(player) {
        this.nord = nord;
        this.highElf = highElf; 
        this.darkElf = darkElf; 
        this.woodElf = woodElf;
        this.bosmer = bosmer;
        this.khajiit = khajiit;
        this.orc = orc;
        this.argonian = argonian;
        console.log('player');

    };
