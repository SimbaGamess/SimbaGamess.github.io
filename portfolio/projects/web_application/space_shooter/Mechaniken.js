/*
Alle Funktionen
*/

setTimeout(() => { alert("Spiel Start!") }, 1);


//Dieser Bereich lässt das objekt mit der angegebenen Id verschwinden
function Hide(id) {
    let ElementHide = document.getElementById(id);
    ElementHide.style.display = "none";
}
//Dieser Bereich lässt das objekt mit der angegebenen Id erscheinen
function Show(id) {
    let ElementShow = document.getElementById(id);
    ElementShow.style.display = "block";
}
//Position eines Objektes bestimmen
function Position(id) {
    let PositionElement = document.getElementById(id).getBoundingClientRect();
    return {
        top: PositionElement.top,
        left: PositionElement.left
    };
}
//Funktion zur bewegung der objekte
function Move(Movey, Movex) {
    let { top: y, left: x } = Position("Spielbereich")
    let MoveRaumschiff = document.getElementById("Raumschiff")

    MoveRaumschiff.style.top = `${y + Math.min(441, Math.max(10, Movey))}px`;
    MoveRaumschiff.style.left = `${x + Math.min(901, Math.max(10, Movex))}px`;
}
//Raumschiff mit WASD steuern
function M1(Move) {
    let { top: y, left: x } = Position("Raumschiff")
    let MoveSchiff2 = document.getElementById("Raumschiff")
    MoveSchiff2.style.top = `${y}px`;
    MoveSchiff2.style.left = `${x + Move}px`;
}
function M(Move) {
    let { top: y, left: x } = Position("Raumschiff")
    let MoveSchiff = document.getElementById("Raumschiff")
    MoveSchiff.style.top = `${y + Move}px`;
    MoveSchiff.style.left = `${x}px`;
}
function Schuss() {
    let { top: y, left: x } = Position("Raumschiff")
    let Projektil = document.getElementById("Projektiel")
    Projektil.style.top = `${y + 22}px`;
    Projektil.style.left = `${x + 85}px`;
    Show("Projektiel");
    MoveSchuss();
};
function MoveSchuss() {
    Px = 20;
    let { top: y, left: x } = Position("Projektiel")
    let MoveProjektil = document.getElementById("Projektiel")
    if (x < 930) {
        MoveProjektil.style.top = `${y}px`;
        MoveProjektil.style.left = `${x + Px}px`;
        setTimeout(() => { MoveSchuss() }, 10);
    }
    else {
        Hide("Projektiel")
    }
};
/*
Beginn der Mechaniken
*/
Move(220, 150);//Start pos
//MoveObjekt("Projektiel", 0, 935)
let By = 220;
let Bx = 150;
window.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("keydown", function (event) {
        //Vertikal und Horizontal
        if (event.code == "KeyW") {
            if (By > 10) {
                By = By - 10;
                M(-10);
            }
        }
        if (event.code == "KeyS") {
            if (By < 440) {
                By = By + 10;
                M(10);
            }
        }
        if (event.code == "KeyA") {
            if (Bx > 10) {
                Bx = Bx - 10;
                M1(-10);
            }
        }
        if (event.code == "KeyD") {
            if (Bx < 900) {
                Bx = Bx + 10;
                M1(10);
            }
        }
        if (event.code == "Space") {
            let {left: x } = Position("Projektiel");
            if ((x == 0)) {
                Schuss();
            }
        }
    }, true);
});

//Meteor
class Meteor {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
const Meteor1 = new Meteor(50, 50)
const Meteor2 = new Meteor(50, 50)
const Meteor3 = new Meteor(50, 50)
const Meteor4 = new Meteor(50, 50)
MoveObjekt("Meteor1", 50, 150)
MoveObjekt("Meteor2", 250, 350)
MoveObjekt("Meteor3", 350, 450)
MoveObjekt("Meteor4", 450, 250)

function MoveObjekt(Id, Movey, Movex) {
    let { top: y, left: x } = Position("Spielbereich")
    let MoveOjkt = document.getElementById(Id)

    MoveOjkt.style.top = `${y + Movey}px`;
    MoveOjkt.style.left = `${x + Movex}px`;
}
