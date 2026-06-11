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

// Orientation de la souris
document.addEventListener("mousemove", function(event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

// Collision avec l'ennemi
function distancePointToSegment(px, py, x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;

    const lengthSquared = dx * dx + dy * dy;

    let t = ((px - x1) * dx + (py - y1) * dy) / lengthSquared;

    t = Math.max(0, Math.min(1, t));

    const closestX = x1 + t * dx;
    const closestY = y1 + t * dy;

    return Math.hypot(px - closestX, py - closestY);
}

//cliquer pour tirer un projectile
document.addEventListener("mousedown", function(event) {
    //tirer une flèche
    if (
        event.button === 0 &&
        playerClass === "Bow" &&
        !arrow.active &&
        arrowCooldown === 0
    ) {
        arrow.active = true;
        arrow.x = player.x + Math.cos(player.angle) * (player.radius + 20);
        arrow.y = player.y + Math.sin(player.angle) * (player.radius + 20);
        arrow.angle = player.angle;
        arrow.distance = 0;

        arrowCooldown = player.cooldown;
    }
    //tirer une flèche2
    if (
        event.button === 0 &&
        playerClass === "Hunter" &&
        !arrowTo.active &&
        arrowToCooldown === 0
    ) {
        arrowTo.active = true;
        arrowTo.x = player.x + Math.cos(player.angle) * (player.radius + 20);
        arrowTo.y = player.y + Math.sin(player.angle) * (player.radius + 20);
        arrowTo.angle = player.angle;
        arrowTo.distance = 0;

        arrowToCooldown = player.cooldown;
    }
    //tirer un carreau
    if (
        event.button === 0 &&
        playerClass === "Crossbow" &&
        !bolt.active &&
        boltCooldown === 0
    ) {
        bolt.active = true;
        bolt.x = player.x + Math.cos(player.angle) * (player.radius);
        bolt.y = player.y + Math.sin(player.angle) * (player.radius);
        bolt.angle = player.angle;
        bolt.distance = 0;

        boltCooldown = player.cooldown;
    }
    //lancer un sort
    if (
        event.button === 0 &&
        playerClass === "Wizard" &&
        !magic.active &&
        magicCooldown === 0
    ) {
        magic.active = true;
        magic.x = player.x + Math.cos(player.angle) * (player.radius + 55);
        magic.y = player.y + Math.sin(player.angle) * (player.radius + 55);
        magic.angle = player.angle;
        magic.distance = 0;

        magicCooldown = player.cooldown;
    }
    //lancer une hache
    if (
        event.button === 0 &&
        playerClass === "Thrower" &&
        !thAxe.active &&
        thAxeCooldown === 0
    ) {
        thAxe.active = true;
        thAxe.x = player.x + Math.cos(player.angle) * (player.radius);
        thAxe.y = player.y + Math.sin(player.angle) * (player.radius);
        thAxe.angle = player.angle;
        thAxe.distance = 0;

        thAxeCooldown = player.cooldown;
    }
    //tirer un javelot
    if (
        event.button === 0 &&
        playerClass === "Javelin" &&
        !javel.active &&
        javelCooldown === 0
    ) {
        javel.active = true;
        javel.x = player.x + Math.cos(player.angle) * (player.radius);
        javel.y = player.y + Math.sin(player.angle) * (player.radius);
        javel.angle = player.angle;
        javel.distance = 0;

        javelCooldown = player.cooldown;
    }
});

function weaponSegmentHit(length, target) {
    const startX = player.x + Math.cos(player.angle) * player.radius;
    const startY = player.y + Math.sin(player.angle) * player.radius;

    const endX = player.x + Math.cos(player.angle) * (player.radius + length);
    const endY = player.y + Math.sin(player.angle) * (player.radius + length);

    const distance = distancePointToSegment(
        target.x,
        target.y,
        startX,
        startY,
        endX,
        endY
    );

    return distance < target.radius;
}

function weaponCircleHit(localX, localY, hitRadius, target) {
    const worldX =
        player.x +
        Math.cos(player.angle) * localX -
        Math.sin(player.angle) * localY;

    const worldY =
        player.y +
        Math.sin(player.angle) * localX +
        Math.cos(player.angle) * localY;

    const distance = Math.hypot(target.x - worldX, target.y - worldY);

    return distance < target.radius + hitRadius;
}