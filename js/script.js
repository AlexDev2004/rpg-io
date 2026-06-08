//détecte qu'une touche est appuyée
document.addEventListener("keydown", function(event) {
    keys[event.key] = true;
});

document.addEventListener("keyup", function(event) {
    keys[event.key] = false;
});

//Boules d'xp
for (let i = 0; i < 25; i++) {
    food.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        radius: 5,
        xpReward: 10,
    });
} 

// Choix de classe / détection de clic
document.addEventListener("click", function(event) {
    if (!choosingClass) return;

    const availableClasses = classTree[playerClass];

    const mx = event.clientX;
    const my = event.clientY;

    let chosenClass = null;

    if (mx >= 250 && mx <= 450 && my >= 220 && my <= 420) {
        chosenClass = availableClasses[0];
    }

    else if (mx >= 550 && mx <= 750 && my >= 220 && my <= 420) {
        chosenClass = availableClasses[1];
    }

    else if (mx >= 850 && mx <= 1050 && my >= 220 && my <= 420) {
        chosenClass = availableClasses[2];
    }

    if (!chosenClass) return;

    playerClass = chosenClass;

    choosingClass = false;
    xp = 0;
    level++;
    xpMax += 50;

    player.hpMax = classStat[playerClass].hpMax;
    player.hp = player.hpMax;
    player.speed = classStat[playerClass].speed;
    player.damage = classStat[playerClass].damage;
    player.cooldown = classStat[playerClass].cooldown;
    
});