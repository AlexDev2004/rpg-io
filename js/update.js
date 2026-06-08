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
    //réaparition aléatoire des boules
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

}