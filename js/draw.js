function draw() {
    console.log("draw tourne");
    ctx.clearRect(0,0,canvas.width,canvas.height);

    //Boule d'xp
    for (const item of food) {
        ctx.beginPath();
            ctx.fillStyle = "green";
            ctx.arc(item.x, item.y, item.radius, 0, Math.PI * 2);
            ctx.fill();
    }

    // Ennemi
    if (enemy.alive) {
        ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.arc(enemy.x, enemy.y, enemy.radius, 0, Math.PI * 2);
            ctx.fill();
    }

    //Barre de vie Ennemie
    if (enemy.alive && enemy.healthBarTimer > 0) {
    const barWidth = 60;
    const barHeight = 8;
    const barX = enemy.x - barWidth / 2;
    const barY = enemy.y - enemy.radius - 18;

    ctx.fillStyle = "gray";
    ctx.fillRect(barX, barY, barWidth, barHeight);

    ctx.fillStyle = "red";
    ctx.fillRect(barX, barY, (enemy.hp / enemy.hpMax) * barWidth, barHeight);

    ctx.strokeStyle = "black";
    ctx.strokeRect(barX, barY, barWidth, barHeight);
}

    //Armes
    ctx.save();
    ctx.translate(player.x, player.y);
    ctx.rotate(player.angle);
    if (mouse.x < player.x) {
    ctx.scale(1, -1);
}

    if (playerClass === "Stick") {
        ctx.fillStyle = "brown";
        ctx.fillRect(player.radius - 5, -5, 60, 10);
        ctx.beginPath();
            ctx.arc(player.radius + 55, 0, 5, 0, Math.PI * 2);
            ctx.fill();
    }

    else if (playerClass === "Sword") {
        ctx.fillStyle = "lightslategray";
        ctx.fillRect(player.radius - 5, -4, 70, 8);
        ctx.beginPath();
            ctx.moveTo(player.radius+65, -4);
            ctx.lineTo(player.radius+65, 4);
            ctx.lineTo(player.radius+75, 0);
            ctx.closePath();
            ctx.fill();
        ctx.fillStyle = "gold";
        ctx.fillRect(player.radius, -10, 6, 20);
    }
    else if (playerClass === "Thief") {
        ctx.fillStyle = "lightslategray";
        ctx.fillRect(player.radius+7, -5, 42, 10);
        ctx.beginPath();
            ctx.moveTo(player.radius+47, -5);
            ctx.lineTo(player.radius+47, 5);
            ctx.lineTo(player.radius+60, 0);
            ctx.closePath();
            ctx.fill();
        ctx.fillStyle = "orange";
        ctx.fillRect(player.radius+2, -7.5, 8, 15);
        ctx.fillStyle = "brown";
        ctx.fillRect(player.radius, -4, -5, 8);
    }
    else if (playerClass === "Knight") {
        ctx.strokeStyle = "gray";
        ctx.beginPath();
            ctx.arc(0, 0, player.radius+5, 0, Math.PI*2);
            ctx.lineWidth = 3;
            ctx.stroke();
        ctx.fillStyle = "lightslategray";
        ctx.fillRect(player.radius, -7, 95, 14);
        ctx.beginPath();
            ctx.moveTo(player.radius+95, -7);
            ctx.lineTo(player.radius+95, 7);
            ctx.lineTo(player.radius+110, 0);
            ctx.closePath();
            ctx.fill();
        ctx.fillStyle = "gold";
        ctx.fillRect(player.radius, -18, 8, 36);
    }
     else if (playerClass === "Spear") {
        ctx.fillStyle = "lightslategray";
        ctx.fillRect(player.radius+110, -6, 40, 12);
        ctx.beginPath();
            ctx.moveTo(player.radius+150, -6);
            ctx.lineTo(player.radius+150, 6);
            ctx.lineTo(player.radius+180, 0);
            ctx.closePath();
            ctx.fill();
        ctx.fillStyle = "brown";
        ctx.fillRect(player.radius, -2.5, 110, 5);
        ctx.beginPath();
            ctx.fillStyle = "lightslategray";
            ctx.arc(player.radius+110,0,5,0,Math.PI*2);
            ctx.fill();
    }

    else if (playerClass === "Axe") {
        ctx.fillStyle = "brown";
        ctx.fillRect(player.radius - 5, -4, 50, 8);
        ctx.beginPath();
            ctx.arc(player.radius + 45, 0, 4, 0, Math.PI * 2);
            ctx.fill();
        ctx.fillStyle = "lightslategray";
        ctx.beginPath();
            ctx.moveTo(player.radius + 32, 4);
            ctx.lineTo(player.radius + 43, 4);
            ctx.lineTo(player.radius + 55, 25);
            ctx.lineTo(player.radius + 20, 25);
            ctx.closePath();
            ctx.fill();
        ctx.beginPath();
            ctx.moveTo(player.radius + 34, -2);
            ctx.lineTo(player.radius + 41, -2);
            ctx.lineTo(player.radius + 39, -10);
            ctx.lineTo(player.radius + 36, -10);
            ctx.closePath();
            ctx.fill();
    }
    else if (playerClass === "Hammer") {
        ctx.fillStyle = "brown";
        ctx.fillRect(player.radius - 5, -4, 70, 8);
        ctx.beginPath();
            ctx.arc(player.radius + 65, 0, 4, 0, Math.PI * 2);
            ctx.fill();
        ctx.fillStyle = "lightslategray";
        ctx.fillRect(player.radius+37, -25, 22, 50);
    }
    else if (playerClass === "Warrior") {
        ctx.fillStyle = "brown";
        ctx.fillRect(player.radius - 5, -4, 70, 8);
        ctx.beginPath();
            ctx.arc(player.radius + 65, 0, 4, 0, Math.PI * 2);
            ctx.fill();
        ctx.fillStyle = "lightslategray";
        ctx.beginPath();
            ctx.moveTo(player.radius + 45, 3);
            ctx.lineTo(player.radius + 65, 3);
            ctx.lineTo(player.radius + 85, 35);
            ctx.lineTo(player.radius + 30, 35);
            ctx.closePath();
            ctx.fill();
        ctx.beginPath();
            ctx.moveTo(player.radius + 45, -3);
            ctx.lineTo(player.radius + 65, -3);
            ctx.lineTo(player.radius + 85, -35);
            ctx.lineTo(player.radius + 30, -35);
            ctx.closePath();
            ctx.fill();
    }

    else if (playerClass === "Bow") {
        ctx.strokeStyle = "brown";
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.arc(player.radius - 5, 0, 25, deg(degre+270), deg(degre+90));
        ctx.stroke();
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(player.radius - 5, -25);
        ctx.lineTo(player.radius - 5, 25);
        ctx.stroke();
    }
    else if (playerClass === "Hunter") {
        ctx.strokeStyle = "brown";
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.ellipse(player.radius-5, 0, 25, 35, 0, deg(degre+270), deg(degre+90));
        ctx.stroke();
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(player.radius - 5, -35);
        ctx.lineTo(player.radius - 5, 35);
        ctx.stroke();
    }
    else if (playerClass === "Wizard") {
        ctx.fillStyle = "brown";
        ctx.fillRect(player.radius,-4,43,8);
        ctx.beginPath();
            ctx.strokeStyle= "brown";
            ctx.lineWidth = 4;
            ctx.arc(player.radius+55,0,12,0,Math.PI*2);
            ctx.stroke();
        ctx.beginPath();
            ctx.fillStyle = "purple";
            ctx.arc(player.radius+55,0,7,0,Math.PI*2);
            ctx.fill();
    }
    else if (playerClass === "Crossbow") {
        ctx.beginPath();
            ctx.strokeStyle = "lightslategray";
            ctx.lineWidth = 4;
            ctx.arc(player.radius+44, 0, 6, 0, Math.PI*2);
            ctx.stroke();
        ctx.fillStyle = "brown";
        ctx.fillRect(player.radius, -6, 20, 12);
        ctx.beginPath();
            ctx.arc(player.radius+20, 0, 6, 0, Math.PI*2);
            ctx.fill();
        ctx.fillRect(player.radius+20, -4, 20, 8);
        ctx.beginPath();
            ctx.arc(player.radius+40, 0, 4, 0, Math.PI*2);
            ctx.fill();
        ctx.beginPath();
            ctx.strokeStyle = "brown";
            ctx.lineWidth = 5;
            ctx.arc(player.radius+15, 0, 20, deg(deg+270),deg(deg+90));
            ctx.stroke();
        ctx.beginPath();
            ctx.strokeStyle = "white";
            ctx.lineWidth = 2
            ctx.moveTo(player.radius+15, -20);
            ctx.lineTo(player.radius+15, 20);
            ctx.stroke();
    }

    ctx.restore();

    //Flèche d'arc
    if (playerClass === "Bow") {
        let arrowDrawX;
        let arrowDrawY;
        let arrowDrawAngle;
        if (arrow.active) {
            arrowDrawX = arrow.x;
            arrowDrawY = arrow.y;
            arrowDrawAngle = arrow.angle;
        } else {
            arrowDrawX = player.x + Math.cos(player.angle) * (player.radius + 20);
            arrowDrawY = player.y + Math.sin(player.angle) * (player.radius + 20);
            arrowDrawAngle = player.angle;
        }
        ctx.save();
        ctx.translate(arrowDrawX, arrowDrawY);
        ctx.rotate(arrowDrawAngle);
        ctx.fillStyle = "saddlebrown";
        ctx.fillRect(-20, -2, 40, 4);
        ctx.beginPath();
        ctx.moveTo(28, 0);
        ctx.lineTo(20, -6);
        ctx.lineTo(20, 6);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
    //Flèche d'arc2
    if (playerClass === "Hunter") {
        let arrowToDrawX;
        let arrowToDrawY;
        let arrowToDrawAngle;
        if (arrowTo.active) {
            arrowToDrawX = arrowTo.x;
            arrowToDrawY = arrowTo.y;
            arrowToDrawAngle = arrowTo.angle;
        } else {
            arrowToDrawX = player.x + Math.cos(player.angle) * (player.radius + 20);
            arrowToDrawY = player.y + Math.sin(player.angle) * (player.radius + 20);
            arrowToDrawAngle = player.angle;
        }
        ctx.save();
        ctx.translate(arrowToDrawX, arrowToDrawY);
        ctx.rotate(arrowToDrawAngle);
        ctx.fillStyle = "saddlebrown";
        ctx.fillRect(-20, -2, 40, 4);
        ctx.beginPath();
            ctx.fillStyle = "lightslategray";
            ctx.moveTo(28, 0);
            ctx.lineTo(20, -6);
            ctx.lineTo(20, 6);
            ctx.closePath();
            ctx.fill();
        ctx.restore();
    }
    //Carreau d'arbalette
    if (playerClass === "Crossbow") {
        let boltDrawX;
        let boltDrawY;
        let boltDrawAngle;
        if (bolt.active) {
            boltDrawX = bolt.x;
            boltDrawY = bolt.y;
            boltDrawAngle = bolt.angle;
        } else {
            boltDrawX = player.x + Math.cos(player.angle) * (player.radius);
            boltDrawY = player.y + Math.sin(player.angle) * (player.radius);
            boltDrawAngle = player.angle;
        }
        ctx.save();
        ctx.translate(boltDrawX, boltDrawY);
        ctx.rotate(boltDrawAngle);
        ctx.fillStyle = "saddlebrown";
        ctx.fillRect(15, -2, 35, 4);
        ctx.beginPath();
            ctx.moveTo(58, 0);
            ctx.lineTo(50, -4);
            ctx.lineTo(50, 4);
            ctx.closePath();
            ctx.fill();
        ctx.restore();
    }
    //Boule magique
    if (playerClass === "Wizard" && magic.active) {

    ctx.save();
    ctx.translate(magic.x, magic.y);

    ctx.fillStyle = "purple";
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
}
//Hache de lancé
    if (playerClass === "Thrower") {
        let thAxeDrawX;
        let thAxeDrawY;
        let thAxeDrawAngle;
        if (thAxe.active) {
            thAxeDrawX = thAxe.x;
            thAxeDrawY = thAxe.y;
            thAxeDrawAngle = thAxe.angle;
        } else {
            thAxeDrawX = player.x + Math.cos(player.angle) * (player.radius);
            thAxeDrawY = player.y + Math.sin(player.angle) * (player.radius);
            thAxeDrawAngle = player.angle;
        }
        ctx.save();
        ctx.translate(thAxeDrawX, thAxeDrawY);
        ctx.rotate(thAxeDrawAngle);
        ctx.fillStyle = "brown";
        ctx.fillRect(- 5, -4, 50, 8);
        ctx.beginPath();
            ctx.arc(45, 0, 4, 0, Math.PI * 2);
            ctx.fill();
        ctx.fillStyle = "lightslategray";
        ctx.beginPath();
            ctx.moveTo(30, 3.5);
            ctx.lineTo(45, 3.5);
            ctx.lineTo(50, 25);
            ctx.lineTo(25, 25);
            ctx.closePath();
            ctx.fill();
        ctx.restore();
    }
    //Javelot
    if (playerClass === "Javelin") {
        let javelDrawX;
        let javelDrawY;
        let javelDrawAngle;
        if (javel.active) {
            javelDrawX = javel.x;
            javelDrawY = javel.y;
            javelDrawAngle = javel.angle;
        } else {
            javelDrawX = player.x + Math.cos(player.angle) * (player.radius);
            javelDrawY = player.y + Math.sin(player.angle) * (player.radius);
            javelDrawAngle = player.angle;
        }
        ctx.save();
        ctx.translate(javelDrawX, javelDrawY);
        ctx.rotate(javelDrawAngle);
        ctx.fillStyle = "lightslategray";
        ctx.fillRect(70, -2.5, 40, 5);
        ctx.beginPath();
            ctx.moveTo(110, -2.5);
            ctx.lineTo(110, 2.5);
            ctx.lineTo(130, 0);
            ctx.closePath();
            ctx.fill();
        ctx.fillStyle = "brown";
        ctx.fillRect(0, -2.5, 70, 5);
        ctx.beginPath();
            ctx.moveTo(0, -2.5);
            ctx.lineTo(0, 2.5);
            ctx.lineTo(-20, 0);
            ctx.closePath();
            ctx.fill();
        ctx.restore();
    }

    //dessin du joueur
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(player.x, player.y, player.radius, 0, Math.PI*2);
    ctx.fill();

    //Barre d'xp
    const xpBarWidth = 250;
    const xpBarHeight = 20;
    const xpBarX = 20;
    const xpBarY = 20;

    ctx.fillStyle = "gray";
    ctx.fillRect(xpBarX, xpBarY, xpBarWidth, xpBarHeight);
    ctx.fillStyle = "yellow";
    ctx.fillRect(xpBarX, xpBarY, (xp / xpMax) * xpBarWidth, xpBarHeight);
    ctx.strokeStyle = "black";
    ctx.strokeRect(xpBarX, xpBarY, xpBarWidth, xpBarHeight);
    ctx.fillStyle = "black";
    ctx.font = "14px Arial";
    ctx.fillText("XP : " + xp + " / " + xpMax, xpBarX + 8, xpBarY + 15);

    //barre de vie
    const hpBarWidth = 250;
    const hpBarHeight = 20;
    const hpBarX = 20;
    const hpBarY = 45;

    ctx.fillStyle = "gray";
    ctx.fillRect(hpBarX, hpBarY, hpBarWidth, hpBarHeight);
    ctx.fillStyle = "lime";
    ctx.fillRect(hpBarX, hpBarY, (player.hp / player.hpMax) * hpBarWidth, hpBarHeight);
    ctx.strokeStyle = "black";
    ctx.strokeRect(hpBarX, hpBarY, hpBarWidth, hpBarHeight);
    ctx.fillStyle = "black";
    ctx.font = "14px Arial";
    ctx.fillText("HP : " + player.hp + " / " + player.hpMax, hpBarX + 8, hpBarY + 15);

    //cartes de classes
    if (choosingClass) {

    const availableClasses = classTree[playerClass];

    ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.font = "36px Arial";
    ctx.fillText("Choisis une classe", canvas.width / 2 - 150, 150);

    drawClassCard(availableClasses[0], 250, 220);
    drawClassCard(availableClasses[1], 550, 220);
    drawClassCard(availableClasses[2], 850, 220);
    }
    
}

function drawClassCard(className, cardX, cardY) {
    if (className === "") return;

    ctx.fillStyle = "white";
    ctx.fillRect(cardX, cardY, 200, 200);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.strokeRect(cardX, cardY, 200, 200);

    const cx = cardX + 100;
    const cy = cardY + 95;

    ctx.save();
    ctx.translate(cx - 40, cy);

    if (className === "Sword") {
        ctx.fillStyle = "lightslategray";
        ctx.fillRect(25, -4, 70, 8);
        ctx.beginPath();
            ctx.moveTo(95, -4);
            ctx.lineTo(95, 4);
            ctx.lineTo(108, 0);
            ctx.closePath();
            ctx.fill();
        ctx.fillStyle = "gold";
        ctx.fillRect(20, -18, 8, 36);
        ctx.fillStyle = "brown";
        ctx.fillRect(0, -4, 20, 8);
    }
    else if (className === "Thief") {
        ctx.fillStyle = "lightslategray";
        ctx.fillRect(25, -5, 40, 10);
        ctx.beginPath();
            ctx.moveTo(65, -5);
            ctx.lineTo(65, 5);
            ctx.lineTo(78, 0);
            ctx.closePath();
            ctx.fill();
        ctx.fillStyle = "orange";
        ctx.fillRect(20, -7.5, 8, 15);
        ctx.fillStyle = "brown";
        ctx.fillRect(8, -4, 12, 8);
    }
    else if (className === "Knight") {
        ctx.strokeStyle = "gray";
        ctx.beginPath();
            ctx.arc(50, 0, 50, 0, Math.PI*2);
            ctx.lineWidth = 2;
            ctx.stroke();
        ctx.fillStyle = "brown";
        ctx.fillRect(-20, -4, 22, 8);
        ctx.fillStyle = "lightslategray";
        ctx.fillRect(10, -7, 95, 14);
        ctx.beginPath();
            ctx.moveTo(105, -7);
            ctx.lineTo(105, 7);
            ctx.lineTo(120, 0);
            ctx.closePath();
            ctx.fill();
        ctx.fillStyle = "gold";
        ctx.fillRect(2, -18, 8, 36);
        ctx.beginPath();
            ctx.arc(-20, 0, 6, 0, Math.PI*2);
            ctx.fill();      
    }
    else if (className === "Spear") {
        ctx.fillStyle = "lightslategray";
        ctx.fillRect(40, -6, 40, 12);
        ctx.beginPath();
            ctx.moveTo(80, -6);
            ctx.lineTo(80, 6);
            ctx.lineTo(110, 0);
            ctx.closePath();
            ctx.fill();
        ctx.fillStyle = "brown";
        ctx.fillRect(-70, -2.5, 110, 5);
        ctx.beginPath();
            ctx.fillStyle = "lightslategray";
            ctx.arc(40,0,5,0,Math.PI*2);
            ctx.fill();
    }
    else if (className === "Javelin") {
        ctx.fillStyle = "lightslategray";
        ctx.fillRect(70, -2.5, 40, 5);
        ctx.beginPath();
            ctx.moveTo(110, -2.5);
            ctx.lineTo(110, 2.5);
            ctx.lineTo(130, 0);
            ctx.closePath();
            ctx.fill();
        ctx.fillStyle = "brown";
        ctx.fillRect(0, -2.5, 70, 5);
        ctx.beginPath();
            ctx.moveTo(0, -2.5);
            ctx.lineTo(0, 2.5);
            ctx.lineTo(-20, 0);
            ctx.closePath();
            ctx.fill();
    }

    else if (className === "Axe") {
        ctx.fillStyle = "brown";
        ctx.fillRect(-10, -4, 60, 8);
        ctx.beginPath();
            ctx.arc(-10, 0, 4, 0, Math.PI * 2);
            ctx.fill();
        ctx.beginPath();
            ctx.arc(50, 0, 4, 0, Math.PI * 2);
            ctx.fill();
        ctx.fillStyle = "lightslategray";
        ctx.beginPath();
            ctx.moveTo(32, 4);
            ctx.lineTo(43, 4);
            ctx.lineTo(55, 29);
            ctx.lineTo(20, 29);
            ctx.closePath();
            ctx.fill();
        ctx.beginPath();
            ctx.moveTo(34, -2);
            ctx.lineTo(41, -2);
            ctx.lineTo(39, -10);
            ctx.lineTo(36, -10);
            ctx.closePath();
            ctx.fill();
    }
    else if (className === "Hammer") {
        ctx.fillStyle = "brown";
        ctx.fillRect(-35, -4, 70, 8);
        ctx.beginPath();
            ctx.arc(35, 0, 4, 0, Math.PI * 2);
            ctx.fill();
        ctx.fillStyle = "lightslategray";
        ctx.fillRect(7, -25, 22, 50);
    }
    else if (className === "Warrior") {
        ctx.fillStyle = "brown";
        ctx.fillRect(-35, -4, 70, 8);
        ctx.beginPath();
            ctx.arc(35, 0, 4, 0, Math.PI * 2);
            ctx.fill();
        ctx.fillStyle = "lightslategray";
        ctx.beginPath();
            ctx.moveTo(15, 3);
            ctx.lineTo(35, 3);
            ctx.lineTo(55, 35);
            ctx.lineTo(0, 35);
            ctx.closePath();
            ctx.fill();
        ctx.beginPath();
            ctx.moveTo(15, -3);
            ctx.lineTo(35, -3);
            ctx.lineTo(55, -35);
            ctx.lineTo(0, -35);
            ctx.closePath();
            ctx.fill();
    }
    else if (className === "Thrower") {
        ctx.fillStyle = "brown";
        ctx.fillRect(- 5, -4, 50, 8);
        ctx.beginPath();
            ctx.arc(45, 0, 4, 0, Math.PI * 2);
            ctx.fill();
        ctx.fillStyle = "lightslategray";
        ctx.beginPath();
            ctx.moveTo(32, 3.5);
            ctx.lineTo(43, 3.5);
            ctx.lineTo(55, 25);
            ctx.lineTo(20, 25);
            ctx.closePath();
            ctx.fill();
        ctx.restore();
    }

    else if (className === "Bow") {
        ctx.strokeStyle = "brown";
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.arc(45, 0, 35, -Math.PI / 2, Math.PI / 2);
        ctx.stroke();

        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(45, -35);
        ctx.lineTo(45, 35);
        ctx.stroke();
    }
    else if (className === "Hunter") {
        ctx.strokeStyle = "brown";
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.ellipse(-5, 0, 25, 35, 0, deg(degre+270), deg(degre+90));
        ctx.stroke();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(- 5, -35);
        ctx.lineTo(- 5, 35);
        ctx.stroke();
    }
    else if (className === "Wizard") {
        ctx.fillStyle = "brown";
        ctx.fillRect(0,-4,43,8);
        ctx.beginPath();
            ctx.strokeStyle= "brown";
            ctx.lineWidth = 4;
            ctx.arc(55,0,12,0,Math.PI*2);
            ctx.stroke();
        ctx.beginPath();
            ctx.fillStyle = "purple";
            ctx.arc(55,0,7,0,Math.PI*2);
            ctx.fill();
    }
    else if (className === "Crossbow") {
        ctx.beginPath();
            ctx.strokeStyle = "lightslategray";
            ctx.lineWidth = 4;
            ctx.arc(64, 0, 6, 0, Math.PI*2);
            ctx.stroke();
        ctx.fillStyle = "brown";
        ctx.fillRect(0, -6, 40, 12);
        ctx.beginPath();
            ctx.arc(40, 0, 6, 0, Math.PI*2);
            ctx.fill();
        ctx.fillRect(40, -4, 20, 8);
        ctx.beginPath();
            ctx.arc(60, 0, 4, 0, Math.PI*2);
            ctx.fill();
        ctx.beginPath();
            ctx.strokeStyle = "brown";
            ctx.lineWidth = 5;
            ctx.arc(35, 0, 20, -Math.PI/2, Math.PI/2);
            ctx.stroke();
        ctx.beginPath();
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2
            ctx.moveTo(35, -20);
            ctx.lineTo(35, 20);
            ctx.stroke();
    }

    else {
        ctx.fillStyle = "gray";
        ctx.beginPath();
        ctx.arc(45, 0, 25, 0, Math.PI * 2);
        ctx.fill();
    }

    ctx.restore();

    ctx.fillStyle = "black";
    ctx.font = "24px Arial";
    ctx.fillText(className, cardX + 45, cardY + 170);
}