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
}