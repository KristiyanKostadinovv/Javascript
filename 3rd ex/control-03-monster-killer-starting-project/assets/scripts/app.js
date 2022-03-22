const Attack_Value = 10;
const StrongAttackValue = 20;
const monsterAttack = 13;
const healValue = 20;

let hasBonusLife = true;
let maxHP = 100;
let monsterHP = maxHP;
let playerHP = maxHP;

adjustHealthBars(maxHP);

function endRound() {

    const playerHpATM = playerHP;
    const monsterAttacks = dealPlayerDamage(monsterAttack);
    playerHP = playerHP - monsterAttacks;

    if (playerHP <= 0 && hasBonusLife) {
        hasBonusLife = false;
        playerHP = playerHpATM;
        removeBonusLife();
        setPlayerHealth(playerHpATM);
        alert("You have been saved");
    }

    if (monsterHP <= 0 && playerHP > 0) {
        alert("You Won!");
    } else if (playerHP <= 0 && monsterHP > 0) {
        alert("You lost");
    } else if (playerHP <= 0 && monsterHP <= 0) {
        alert("Draw");
    }

}


function easierAttackFunc(mode) {
    let attack;
    if (mode == "Attack") {
        attack = Attack_Value;
    } else if (mode == "StrongAttack") {
        attack = StrongAttackValue;
    }

    const damage = dealMonsterDamage(attack);
    monsterHP = monsterHP - damage;
    endRound();
}

function attackHandler() {
    easierAttackFunc("Attack");
}

function strongAttackHandler() {
    easierAttackFunc("StrongAttack");
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
    endRound();
}


attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayer);
