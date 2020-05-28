let player;
//player stats
function Player(raceType, attack, defense, mana, speed, health) {
    this.raceType = raceType;
    this.attack = attack;
    this.defense = defense;
    this.mana = mana;
    this.speed = speed; 
    this.health = health;
    };
//initiates player attack
let PlayerMoves = {
    calcAttack: function() {
        
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
        let enemyDef = enemy.defense;
        let playerAttackValues = calcOutputDmg - enemyDef;
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
        let playerDef = player.defense;
        let enemyAttackValues = calcEnemyOutputDmg - playerDef;
        return enemyAttackValues;
        console.log(enemyAttackValues);
                                    }
    
    //View player / enemy health    
   let getPlayerHealth = document.getElementById("health");
     let getEnemyHealth = document.getElementById("enemyHealth");
    if (getPlayerSpeed >= enemy.speed) {
    $('#modalAtk').modal('show');
    let playerAttackValues  = playerAttack(); 
    let totalDamage = playerAttackValues; 
    enemy.health = enemy.health - totalDamage;
    
    if (enemy.health <= 0) {
            $('#modalWin').modal('show');
            getPlayerHealth.innerHTML = + player.health;
            getEnemyHealth.innerHTML = +'0'
            document.getElementById("restart").style.display = 'inline-block';
            return;
    
    } else {
            getEnemyHealth.innerHTML = enemy.health;
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues; 
            player.health = player.health - totalDamage;
            getPlayerHealth.innerHTML = player.health;
            
            $('#modalEnemyAtk').modal('show');
    
    
    if (player.health <= 0) { 
            $('#modalLose').modal('show'); 
            getPlayerHealth.innerHTML = + '0' ;
            getEnemyHealth.innerHTML = + enemy.health;
            return;
    } else {
            getPlayerHealth.innerHTML = player.health;
           }
    }
    } else if (getEnemySpeed >= player.speed) {
        $('#modalEnemyAtk').modal('show');
        let enemyAttackValues  = enemyAttack(); 
        let totalDamage = enemyAttackValues; 
        player.health = player.health - totalDamage;
        
    
    
    if (player.health <= 0) {
            $('#modalLose').modal('show');
            getEnemyHealth.innerHTML = + enemy.health;
            getPlayerHealth.innerHTML = + '0' ;
            return;
    
    } else {
            getPlayerHealth.innerHTML = + player.health;
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues;
            enemy.health = enemy.health - totalDamage;
    
    
    if (enemy.health <= 0) {
            $('#modalWin').modal('show');
            getEnemyHealth.innerHTML = + '0';
            getPlayerHealth.innerHTML = + player.health;
            document.getElementById("restart").style.display = 'inline-block';
            return;
    } else {
           getEnemyHealth.innerHTML = + enemy.health;
           }
     
    } 
    }   
}
};