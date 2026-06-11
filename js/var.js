//Arrière-plan
const canvas = document.getElementById("canva");
const ctx = canvas.getContext("2d");
function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize",resizeCanvas);

//Position de départ de la souris
const keys = {};
const deg = degre => degre * Math.PI / 180;
const degre = 0;
const mouse = {
    x: canvas.width/2,
    y: canvas.height/2,
};

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
    "Sword": {
        damage: 10,
        hpMax: 130,
        speed: 5,
        cooldown: 30,
    },
    "Thief": {
        damage: 5,
        hpMax: 110,
        speed: 8,
        cooldown: 18,
    },
    "Knight": {
        damage: 20,
        hpMax: 180,
        speed: 4,
        cooldown: 40,
    },
    "Spear": {
        damage: 10,
        hpMax: 140,
        speed: 4,
        cooldown: 40,
    },
    "Javelin": {
        damage: 20,
        hpMax: 150,
        speed: 5,
        cooldown: 50,
    },
    "Axe": {
        damage: 20,
        hpMax: 130,
        speed: 2.5,
        cooldown: 70,
    },
    "Hammer": {
        damage: 30,
        hpMax: 140,
        speed: 5,
        cooldown: 30,
    },
    "Warrior": {
        damage: 40,
        hpMax: 150,
        speed: 2.5,
        cooldown: 70,
    },
    "Thrower": {
        damage: 10,
        hpMax: 130,
        speed: 5,
        cooldown: 30,
    },
    "Bow": {
        damage: 5,
        hpMax: 110,
        speed: 5,
        cooldown: 30,
    },
    "Hunter": {
        damage: 10,
        hpMax: 120,
        speed: 5,
        cooldown: 40,
    },
    "Crossbow": {
        damage: 20,
        hpMax: 130,
        speed: 5,
        cooldown: 60,
    },
    "Wizard": {
        damage: 10,
        hpMax: 120,
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

// Mettre les cooldown des armes à 0
let attackCooldown = 0;
let arrowCooldown = 0;
let arrowToCooldown = 0;
let magicCooldown = 0;
let thAxeCooldown = 0;
let boltCooldown = 0;
let javelCooldown = 0;

//Variables des ennemis
const enemy = {
    x: canvas.width/2 + 250,
    y: canvas.height/2,
    radius: 30,
    hp: 100,
    hpMax: 100,
    xpReward: 50,
    alive: true,
    respawnTimer: 0,
    healthBarTimer: 0,
};

//Variables des flèches
const arrow = {
    x: 0,
    y: 0,
    angle: 0,
    speed: 10,
    distance: 0,
    maxDistance: 500,
    active: false,
};
//Variables des carreaux
const bolt = {
    x: 0,
    y: 0,
    angle: 0,
    speed: 20,
    distance: 0,
    maxDistance: 500,
    active: false,
};
//Variables des flèches2
const arrowTo = {
    x: 0,
    y: 0,
    angle: 0,
    speed: 10,
    distance: 0,
    maxDistance: 500,
    active: false,
};
//Variables des sorts
const magic = {
    x: 0,
    y: 0,
    angle: 0,
    speed: 8,
    distance: 0,
    maxDistance: 300,
    active: false,
};
//Variables des haches de lancé
const thAxe = {
    x: 0,
    y: 0,
    angle: 0,
    speed: 5,
    distance: 0,
    maxDistance: 200,
    active: false,
};
//Variables des javelot
const javel = {
    x: 0,
    y: 0,
    angle: 0,
    speed: 8,
    distance: 0,
    maxDistance: 400,
    active: false,
};

//boules d'xp
const food = []; 