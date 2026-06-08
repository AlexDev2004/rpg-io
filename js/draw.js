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

    ctx.restore();

    ctx.fillStyle = "black";
    ctx.font = "24px Arial";
    ctx.fillText(className, cardX + 45, cardY + 170);
}