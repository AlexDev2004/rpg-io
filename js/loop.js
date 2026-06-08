function gameLoop(){
    draw();
    requestAnimationFrame(gameLoop);
}
gameLoop();