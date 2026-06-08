function update() {
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
}