const Attack_Value = 10;
const StrongAttackValue = 20;
const monsterAttack = 13;
const healValue = 20;
const chooseHP = prompt("Choose HP for player and monster: ", "100");
const attackOption = "ATTACK";
const strongAttackOption = "StrongAttack";

const LogPlayerAttack = "PlayerAttack";
const LogPlayerStrongAttack = "PlayerStrongAttack";
const LogMonsterAttack = "MonsterAttack";
const LogHealth = "Heal";
const LogGameOver = "GameOver";

let log = [];
let hasBonusLife = true;
let maxHP = parseInt(chooseHP);

if (isNaN(maxHP) || maxHP <= 0) {
    alert("HP set to 100 since you didn't choose a realistic value");
    maxHP = 100;
}

let monsterHP = maxHP;
let playerHP = maxHP;

adjustHealthBars(maxHP);

function storeLog(event, value, playerHealth, monsterHealth) {

    let logMe = {
        event: event,
        value: value,
        playerHealth: playerHealth,
        monsterHealth: monsterHealth
    }

    switch (event) {
        case LogPlayerAttack:
            logMe.target = "Monster";
            break;
        case LogPlayerStrongAttack:
            logMe.target = "Monster";
            break;
        case LogMonsterAttack:
            logMe.target = "Player";
            break;
        case LogHealth:
            logMe.target = "Player";
            break;
        case LogGameOver:
            logMe = {
                event: event,
                value: value,
                playerHealth: playerHealth,
                monsterHealth: monsterHealth
            }
            break;
        default:
            logMe = {};
    }


    /*
    if (event === LogPlayerAttack) {
        logMe.target = "Monster";
    } else if (event === LogPlayerStrongAttack) {
        logMe.target = "Monster"
    } else if (event === LogMonsterAttack) {
        logMe.target = "Player";
    } else if (event === LogHealth) {
        logMe.target = "Player";
    } else if (event === LogGameOver) {
        logMe = {
            event: event,
            value: value,
            playerHealth: playerHealth,
            monsterHealth: monsterHealth
        }
    }*/

    log.push(logMe);
}


function restart() {
    monsterHP = maxHP;
    playerHP = maxHP;
    resetGame(maxHP);
}

function endRound() {

    const playerHpATM = playerHP;
    const monsterAttacks = dealPlayerDamage(monsterAttack);
    playerHP = playerHP - monsterAttacks;
    storeLog(LogMonsterAttack, monsterAttacks, playerHP, monsterHP)

    if (playerHP <= 0 && hasBonusLife) {
        hasBonusLife = false;
        playerHP = playerHpATM;
        removeBonusLife();
        setPlayerHealth(playerHpATM);
        alert("You have been saved");
    }

    if (monsterHP <= 0 && playerHP > 0) {
        alert("You Won!");
        storeLog(LogGameOver, "Player Won", playerHP, monsterHP)
        restart();
    } else if (playerHP <= 0 && monsterHP > 0) {
        alert("You lost");
        storeLog(LogGameOver, "Monster Won", playerHP, monsterHP)
        restart();
    } else if (playerHP <= 0 && monsterHP <= 0) {
        alert("Draw");
        storeLog(LogGameOver, "DRAW", playerHP, monsterHP)
        restart();
    }

}

function easierAttackFunc(mode) {
    //const attack = mode === attackOption ? Attack_Value : StrongAttackValue;
    //const typeOfAttack = mode === attackOption ? LogPlayerAttack : LogPlayerStrongAttack;

    let attack;
    let typeOfAttack;
    if (mode == attackOption) {
        attack = Attack_Value;
        typeOfAttack = LogPlayerAttack;
    } else if (mode == strongAttackOption) {
        attack = StrongAttackValue;
        typeOfAttack = LogPlayerStrongAttack;
    }

    const damage = dealMonsterDamage(attack);
    monsterHP = monsterHP - damage;
    storeLog(typeOfAttack, damage, playerHP, monsterHP);
    endRound();
}

function attackHandler() {
    easierAttackFunc(attackOption);
}

function strongAttackHandler() {
    easierAttackFunc(strongAttackOption);
}

function healPlayer() {
    let healVal;
    if (playerHP >= maxHP - healValue) {
        alert("You can't heal over your maximum hp");
        healVal = maxHP - playerHP;
    } else {
        healVal = healValue;
    }
    increasePlayerHealth(healVal);
    playerHP = playerHP + healVal;
    storeLog(LogHealth, healVal, playerHP, monsterHP)
    endRound();
}

function printLog() {
    for (let i = 0; i<3 ; i++)
    {
        console.log("---------------------");
    }

    let i=0;
    for(const ev of log){
       // console.log(ev);
      //  console.log(i++);
        console.log(`LOG #${i}`);
        for(const key in ev)
        {
            console.log(`${key} => ${ev[key]}`);
        }
        i++;
    }
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayer);
logBtn.addEventListener("click", printLog);