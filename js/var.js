//Arrière-plan
const canvas = document.getElementById("canva");
const ctx = canvas.getContext("2d");
function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize",resizeCanvas);

const keys = {};

//Stats générales
let xp = 0;
let xpMax = 100;

//Stats du joueur
const player = {
    x: canvas.width/2,
    y: canvas.height/2,
    radius: 25,
    angle: 0,
    speed: 5,
};

//boules d'xp
const food = []; 