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