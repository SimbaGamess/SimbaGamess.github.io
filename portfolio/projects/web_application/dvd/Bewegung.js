
function Hide(id) {
    let ElementHide = document.getElementById(id);
    ElementHide.style.display = "none";
}
function Show(id) {
    let ElementShow = document.getElementById(id);
    ElementShow.style.display = "block";
}


function Position(id) {
    let PositionElement = document.getElementById(id).getBoundingClientRect();

    return {
        top: PositionElement.top,
        left: PositionElement.left
    };

}


let window_height = window.innerHeight-52;
let window_width = window.innerWidth-100;

window.addEventListener('resize', () => {
    window_height = window.innerHeight-52;
    window_width = window.innerWidth-100;
});




function Move(Move) {
    let { top: y, left: x } = Position("DVD")
    let MoveDVD = document.getElementById("DVD")
    MoveDVD.style.top = `${y}px`;
    MoveDVD.style.left = `${x + Move}px`;
    let MoveDVD1 = document.getElementById("DVD1")
    MoveDVD1.style.top = `${y}px`;
    MoveDVD1.style.left = `${x + Move}px`;
    let MoveDVD2 = document.getElementById("DVD2")
    MoveDVD2.style.top = `${y}px`;
    MoveDVD2.style.left = `${x + Move}px`;
    let MoveDVD3 = document.getElementById("DVD3")
    MoveDVD3.style.top = `${y}px`;
    MoveDVD3.style.left = `${x + Move}px`;

}
function Move2(Move2) {
    let { top: y, left: x } = Position("DVD")
    let MoveDVD = document.getElementById("DVD")
    MoveDVD.style.top = `${y + Move2}px`;
    MoveDVD.style.left = `${x}px`;
    let MoveDVD1 = document.getElementById("DVD1")
    MoveDVD1.style.top = `${y + Move2}px`;
    MoveDVD1.style.left = `${x}px`;
    let MoveDVD2 = document.getElementById("DVD2")
    MoveDVD2.style.top = `${y + Move2}px`;
    MoveDVD2.style.left = `${x}px`;
    let MoveDVD3 = document.getElementById("DVD3")
    MoveDVD3.style.top = `${y + Move2}px`;
    MoveDVD3.style.left = `${x}px`;

}


setTimeout(() => { Rechts() }, 300);
function Rechts() {
    let { top: y, left: x } = Position("DVD")

    if (x < window_width-1) {

        Move(1);
        setTimeout(() => { Rechts() }, 10);
    }
    else {
        Links()
    }
}
function Links() {
    let { top: y, left: x } = Position("DVD")

    if (x > 1) {

        Move(-1);
        setTimeout(() => { Links() }, 10);
    }
    else {
        Rechts()
    }
}
setTimeout(() => { Hoch() }, 300);
function Hoch() {
    let { top: y, left: x } = Position("DVD")

    if (y < window_height-1) {

        Move2(1);
        setTimeout(() => { Hoch() }, 10);
    }
    else {
        Runter()
    }
}
function Runter() {
    let { top: y, left: x } = Position("DVD")

    if (y > 0) {
        Move2(-1);
        setTimeout(() => { Runter() }, 10);
    }
    else {
        Hoch()
    }
}

setTimeout(() => { Change() }, 30);
function Change() {
    let { top: y, left: x } = Position("DVD")
    if (x == 2) {
        Show("DVD")
        Hide("DVD1")
        Hide("DVD2")
        Hide("DVD3")
    }
    if (y == 2) {
//        Hide("DVD")
        Show("DVD1")
        Hide("DVD2")
        Hide("DVD3")

    }
    if (x == window_width-2) {
//        Hide("DVD")
        Hide("DVD1")
        Show("DVD2")
        Hide("DVD3")

    }
    if (y == window_height-2) {
//        Hide("DVD")
        Hide("DVD1")
        Hide("DVD2")
        Show("DVD3")
    }

    setTimeout(() => { Change() }, 5);
}
