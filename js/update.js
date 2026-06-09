function update() {
    //fige le jeu sur l'écran de classe
    if (choosingClass) {
        return;
    }

    //détection des touches de déplacements
    if (keys["ArrowUp"]) {
        player.y -= player.speed;
    }

    if (keys["ArrowDown"]) {
        player.y += player.speed;
    }

    if (keys["ArrowLeft"]) {
        player.x -= player.speed;
    }

    if (keys["ArrowRight"]) {
        player.x += player.speed;
    }

    //empêche le joueur de sortir de l'écran
    player.x = Math.max(
    player.radius,
    Math.min(canvas.width - player.radius, player.x)
    );

    player.y = Math.max(
        player.radius,
        Math.min(canvas.height - player.radius, player.y)
    );

    //Collision avec les boules d'xp
    for (let i = food.length - 1; i >= 0; i--) {
        const item = food[i];
        const dx = item.x - player.x;
        const dy = item.y - player.y;
        const distance = Math.hypot(dx, dy);
        if (distance < player.radius + item.radius) {
            xp += item.xpReward;
            food.splice(i, 1);
        }
    }
    //réapparition aléatoire des boules
    if (food.length < 25 && Math.random() < 0.02) {
        food.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: 5,
            xpReward: 10,
        });
    }

    //écran de classe
    if (xp >= xpMax && !choosingClass) {
        xp = xpMax;
        choosingClass = true;
    }

    //Orientation de la souris
    player.angle = Math.atan2(
    mouse.y - player.y,
    mouse.x - player.x
    );

    //Attaquer l'ennemi
    if (attackCooldown > 0) {
    attackCooldown--;
    }

    if (enemy.healthBarTimer > 0) {
    enemy.healthBarTimer--;
    }

    if (enemy.alive && attackCooldown === 0 && playerClass !== "Bow") {
    let hit = false;

    if (playerClass === "Stick") {
        hit = weaponSegmentHit(58, enemy);
    }

    else if (playerClass === "Sword") {
        hit = weaponSegmentHit(75, enemy);
    }
    else if (playerClass === "Thief") {
        hit = weaponSegmentHit(60, enemy);
    }
    else if (playerClass === "Spear") {
        hit = weaponSegmentHit(180, enemy);
    }
    else if (playerClass === "Knight") {
        hit = weaponSegmentHit(110, enemy);
    }

    else if (playerClass === "Axe") {
        hit = weaponSegmentHit(48, enemy) || weaponCircleHit(40, 15, 15, enemy);
    }
    else if (playerClass === "Hammer") {
        hit = weaponSegmentHit(72.5, enemy) || weaponCircleHit(48, 12.5, 12.5, enemy) || weaponCircleHit(48, -12.5, 12.5, enemy);
    }

    if (hit) {
        enemy.hp -= player.damage;
        enemy.healthBarTimer = 120;
        attackCooldown = player.cooldown;

        if (enemy.hp <= 0) {
            enemy.hp = 0;
            enemy.alive = false;
            enemy.respawnTimer = 180;
            xp += enemy.xpReward;
        }
    }
}

    if (!enemy.alive) {
        enemy.respawnTimer--;

        if (enemy.respawnTimer <= 0) {
            enemy.alive = true;
            enemy.hp = enemy.hpMax;
            enemy.healthBarTimer = 0;

            enemy.x = Math.random() * canvas.width;
            enemy.y = Math.random() * canvas.height;
        }
    }

    //Système d'arc
    if (arrowCooldown > 0) {
        arrowCooldown--;
    }
    if (arrow.active) {
        arrow.x += Math.cos(arrow.angle) * arrow.speed;
        arrow.y += Math.sin(arrow.angle) * arrow.speed;
        arrow.distance += arrow.speed;
        if (enemy.alive) {
            const distanceToEnemy = Math.hypot(enemy.x - arrow.x, enemy.y - arrow.y);
            if (distanceToEnemy < enemy.radius) {
                enemy.hp -= player.damage;
                enemy.healthBarTimer = 120;
                arrow.active = false;
                if (enemy.hp <= 0) {
                    enemy.hp = 0;
                    enemy.alive = false;
                    enemy.respawnTimer = 180;
                    xp += enemy.xpReward;
                }
            }
        }
        if (arrow.distance >= arrow.maxDistance) {
        arrow.active = false;
        }
    }
    //Système d'arc2
    if (arrowToCooldown > 0) {
        arrowToCooldown--;
    }
    if (arrowTo.active) {
        arrowTo.x += Math.cos(arrowTo.angle) * arrowTo.speed;
        arrowTo.y += Math.sin(arrowTo.angle) * arrowTo.speed;
        arrowTo.distance += arrowTo.speed;
        if (enemy.alive) {
            const distanceToEnemy = Math.hypot(enemy.x - arrowTo.x, enemy.y - arrowTo.y);
            if (distanceToEnemy < enemy.radius) {
                enemy.hp -= player.damage;
                enemy.healthBarTimer = 120;
                arrowTo.active = false;
                if (enemy.hp <= 0) {
                    enemy.hp = 0;
                    enemy.alive = false;
                    enemy.respawnTimer = 180;
                    xp += enemy.xpReward;
                }
            }
        }
        if (arrowTo.distance >= arrowTo.maxDistance) {
        arrowTo.active = false;
        }
    }
    //Système d'arbalette
    if (boltCooldown > 0) {
        boltCooldown--;
    }
    if (bolt.active) {
        bolt.x += Math.cos(bolt.angle) * bolt.speed;
        bolt.y += Math.sin(bolt.angle) * bolt.speed;
        bolt.distance += bolt.speed;
        if (enemy.alive) {
            const distanceToEnemy = Math.hypot(enemy.x - bolt.x, enemy.y - bolt.y);
            if (distanceToEnemy < enemy.radius) {
                enemy.hp -= player.damage;
                enemy.healthBarTimer = 120;
                bolt.active = false;
                if (enemy.hp <= 0) {
                    enemy.hp = 0;
                    enemy.alive = false;
                    enemy.respawnTimer = 180;
                    xp += enemy.xpReward;
                }
            }
        }
        if (bolt.distance >= bolt.maxDistance) {
        bolt.active = false;
        }
    }
    
    //Système de magie
    if (magicCooldown > 0) {
        magicCooldown--;
    }
    if (magic.active) {
        magic.x += Math.cos(magic.angle) * magic.speed;
        magic.y += Math.sin(magic.angle) * magic.speed;
        magic.distance += magic.speed;
        if (enemy.alive) {
            const distanceToEnemy = Math.hypot(enemy.x - magic.x, enemy.y - magic.y);
            if (distanceToEnemy < enemy.radius) {
                enemy.hp -= player.damage;
                enemy.healthBarTimer = 120;
                magic.active = false;
                if (enemy.hp <= 0) {
                    enemy.hp = 0;
                    enemy.alive = false;
                    enemy.respawnTimer = 180;
                    xp += enemy.xpReward;
                }
            }
        }
        if (magic.distance >= magic.maxDistance) {
        magic.active = false;
        }
    }
    //Système de haches de lancé
    if (thAxeCooldown > 0) {
        thAxeCooldown--;
    }
    if (thAxe.active) {
        thAxe.x += Math.cos(thAxe.angle) * thAxe.speed;
        thAxe.y += Math.sin(thAxe.angle) * thAxe.speed;
        thAxe.distance += thAxe.speed;
        if (enemy.alive) {
            const distanceToEnemy = Math.hypot(enemy.x - thAxe.x, enemy.y - thAxe.y);
            if (distanceToEnemy < enemy.radius) {
                enemy.hp -= player.damage;
                enemy.healthBarTimer = 120;
                thAxe.active = false;
                if (enemy.hp <= 0) {
                    enemy.hp = 0;
                    enemy.alive = false;
                    enemy.respawnTimer = 180;
                    xp += enemy.xpReward;
                }
            }
        }
        if (thAxe.distance >= thAxe.maxDistance) {
        thAxe.active = false;
        }
    }
}