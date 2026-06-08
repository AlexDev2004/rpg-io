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

//Arbre des classes
const classTree = {
    "Stick": ["Sword", "Axe", "Bow"],

    "Sword": ["Thief", "Spear", "Knight"],
    "Bow": ["Wizard", "Crossbow", "Hunter"],
    "Axe": ["Hammer", "Warrior", "Thrower"],

    "Thief":["Ninja", "Killer"],
    "Spear":["Javelin", "Halberd"],
    "Knight":["Paladin", "Tank"],

    "Wizard":["Fire","Ice"],
    "Crossbow":["Balist", "Canon"],
    "Hunter": ["Ranger", "Sniper"],

    "Hammer": ["Coloss","Mjolnir"],
    "Warrior": ["Valkyrie","Faux"],
    "Thrower": ["TripleShot","BattleThrow"],
};

// Stat des différentes classes
const classStat = {
    "Stick": {
        damage: 5,
        hpMax: 100,
        speed: 5,
        cooldown: 30,
    },
}

//Stats générales
let playerClass = "Stick";
let level = 1;
let xp = 0;
let xpMax = 100;
let choosingClass = false;

//Stats du joueur
const player = {
    x: canvas.width/2,
    y: canvas.height/2,
    radius: 25,
    angle: 0,
    hp: 100,
    hpMax: classStat[playerClass].hpMax,
    damage: classStat[playerClass].damage,
    speed: classStat[playerClass].speed,
    cooldown: classStat[playerClass].cooldown,
};

//boules d'xp
const food = []; 