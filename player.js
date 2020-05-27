let player;
function Player(raceType, attack, defence, mana, speed, health) {
    this.raceType = raceType;
    this.attack = attack;
    this.defence = defence;
    this.mana = mana;
    this.speed = speed; 
    this.health = health;
    };

let PlayerMoves = {
    calcAttack: function() {
        document.getElementById("runButton").style.display = 'none'
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
    //player attacks
        let playerAttack = function() {
        let calcBaseDmg;
        if (player.mana > 0) {
            calcBaseDmg = player.mana;
        } else {
            calcBaseDmg = player.attack;
        }
        let offsetDmg = Math.floor(Math.random()* 10);
        let calcOutputDmg = calcBaseDmg + offsetDmg;
        //let enemyBlock = Math.floor(Math.random()* 10)
        let playerAttackValues = calcOutputDmg;
        return playerAttackValues;
                                      }

        let enemyAttack = function() {
        let calcEnemyBaseDmg;
        if (enemy.mana > 0) {
            calcEnemyBaseDmg = enemy.mana;
            console.log(calcEnemyBaseDmg);
        } else {
            calcEnemyBaseDmg = enemy.attack;
        }
        let offsetEnemyDmg = Math.floor(Math.random()* 10);
        let calcEnemyOutputDmg = calcEnemyBaseDmg + offsetEnemyDmg;
        //let playerBlock = Math.floor(Math.random()* 10)
        let enemyAttackValues = calcEnemyOutputDmg;
        return enemyAttackValues;
        console.log(enemyAttackValues);
                                    }
    
    //View player / enemy health
    
     let getPlayerHealth = document.getElementById("health");
     let getEnemyHealth = document.getElementById("enemyHealth");
     //getPlayerHealthMax = document.getElementById(health).max;
     //const getPlayerHealthMax = player.health;
     //getEnemyHealthMax = document.getElementById(enemyHealth).max;
     //const getEnemyHealthMax = enemy.health;
    //initiate attacks 
     
    if (getPlayerSpeed >= enemy.speed) {
    let playerAttackValues  = playerAttack(); 
    let totalDamage = playerAttackValues; 
    enemy.health = enemy.health - totalDamage;
    alert("you hit the enemy!")
    
    
    if (enemy.health <= 0) {
            alert("you win!");
            getPlayerHealth.innerHTML = + player.health;
            getEnemyHealth.innerHTML = +'0'
            document.getElementById("proceed1").style.display = 'block';
    
    } else {
            getEnemyHealth.innerHTML = enemy.health;
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues; 
            player.health = player.health - totalDamage;
            getPlayerHealth.innerHTML = player.health;
            
            alert("enemy hit you");
    
    
    if (player.health <= 0) { 
            alert("you lose!"); 
            getPlayerHealth.innerHTML = + '0' ;
            getEnemyHealth.innerHTML = + enemy.health;
    } else {
            getPlayerHealth.innerHTML = player.health;
           }
    }
    } else if (getEnemySpeed >= player.speed) {
        let enemyAttackValues  = enemyAttack(); 
        let totalDamage = enemyAttackValues; 
        player.health = player.health - totalDamage;
        alert("the enemy hits you!");
    
    
    if (player.health <= 0) {
            alert("you lose!");
            getEnemyHealth.innerHTML = + enemy.health;
            getPlayerHealth.innerHTML = + '0' ;
    
    } else {
            getPlayerHealth.innerHTML = + player.health;
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues;
            enemy.health = enemy.health - totalDamage;
    
    
    if (enemy.health <= 0) {
            alert("you win!");
            getEnemyHealth.innerHTML = + '0';
            getPlayerHealth.innerHTML = + player.health;
            document.getElementById("proceed1").style.display = 'block';

    } else {
           getEnemyHealth.innerHTML = + enemy.health;
           }
    } 



    }   
}
};