const Attack_Value = 10;
const StrongAttackValue = 20;
const monsterAttack = 13;

let maxHP = 100;
let monsterHP = maxHP;
let playerHP = maxHP;

adjustHealthBars(maxHP);

function easierAttackFunc(mode) {
    let attack;
    if (mode == "Attack")
    {
        attack = Attack_Value;
    }
    else if (mode == "StrongAttack"){
        attack = StrongAttackValue;
    }

    const damage = dealMonsterDamage(attack);
    monsterHP = monsterHP - damage;
    const monsterAttacks = dealPlayerDamage(monsterAttack);
    playerHP = playerHP - monsterAttacks;
    console.log("Damage done ", damage);
    console.log("Damage taken ", monsterAttacks);

    if (monsterHP <= 0 && playerHP > 0){
        alert("You Won!");
    }
    else if (playerHP <= 0 && monsterHP > 0){
        alert("You lost");
    }
    else if (playerHP<=0 && monsterHP<=0){
        alert("Draw");
    }
}

function attackHandler() {
    easierAttackFunc("Attack");
}

function strongAttackHandler(){
   easierAttackFunc("StrongAttack");
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
