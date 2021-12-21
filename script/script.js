var hero = {
    top: 824,
    left: 248
}

let cameraStart = {
    top: 760,
    left:120
}

let cameraMoving = false;

let keyboardState = {
    upPressedDown: false,
    downPressedDown: false,
    rightPressedDown: false,
    leftPressedDown: false
}

document.onkeyup = function(KeyboardEvent) {
    // Stop moving Camera left.
    if (KeyboardEvent.key === 'a') {

        keyboardState.leftPressedDown = false;

    // Stop moving Camera right.
    } else if (KeyboardEvent.key === 'd') {

        keyboardState.rightPressedDown = false;

    // Stop moving Camera up.
    } else if (KeyboardEvent.key === 'w') {

        keyboardState.upPressedDown = false;

    // Stop moving Camera down.
    } else if (KeyboardEvent.key === 's') {

        keyboardState.downPressedDown = false;
    }
}

document.onkeydown = function(KeyboardEvent) {

    // Move Camera left.
    if (KeyboardEvent.key === 'a') {

        keyboardState.leftPressedDown = true;

    // Move Camera right.
    } else if (KeyboardEvent.key === 'd') {

        keyboardState.rightPressedDown = true;
    }

    // Move Camera up.
    if (KeyboardEvent.key === 'w') {

        keyboardState.upPressedDown = true;

    // Move Camera down.
    } else if (KeyboardEvent.key === 's') {

        keyboardState.downPressedDown = true;
    }

    // Move Main Character right.
    if (KeyboardEvent.key === 'j') {
        hero.left -= 16;

        moveHero(hero.left);

    // Move Main Character left.
    } else if (KeyboardEvent.key === 'l') {
        hero.left += 16;

        moveHero(hero.left);
    }

    // Move Main Character up.
    if (KeyboardEvent.key === 'i') {
        hero.top -= 16;

        moveHero(hero.left, hero.top);

    // Move Main Character down.
    } else if (KeyboardEvent.key === 'k') {
        hero.top += 16;

        moveHero(hero.left, hero.top);
    }

    if (KeyboardEvent.key === 'Shift') {
        missiles.push({
            left: hero.left + 15,
            top: hero.top + 2
        });
    }
}

function moveCamera(horizontal, vertical) {
    let map = document.getElementById('background');
    console.log(window.outerWidth);

    if ((horizontal < 0) && (window.scrollX > 0)) {
        window.scrollX += horizontal;
    }
    if ((horizontal > 0) && (window.scrollX < 580)) {
        window.scrollX += horizontal;
    }

    if (vertical != 0) {
        window.scrollY += vertical;
    }

    console.log(window.scrollX, window.scrollY);


    window.scrollTo(window.scrollX, window.scrollY);
}

function moveCameraVertically(vertical) {
    window.scrollTo(window.scrollX, window.scrollY + vertical);
}

function moveCameraHorizontally(horizontal) {
    window.scrollTo(window.scrollX + horizontal, window.scrollY);

}

/**
 * Move the peasant using the css properties.
 * This isn't necessary, we won't use keyboard controls like this in the future.
 */
function moveHero(left, top) {
    let heroElement = document.getElementById('hero');

    if (left !== null) {
        heroElement.style.left = left + 'px';
    }

    if (top !== null) {
        heroElement.style.top = top + 'px';
    }
}

/**
 * Finds the className unitSelected in the class list and removes it.
 */
 function unSelectUnit(unitId) {
    var unit = document.getElementById(unitId);
    unit.classList.remove("unitSelected");
}

/**
 *
 */
function selectUnit(unitId) {
    let currentClassName = document.getElementById(unitId).className;
    if (currentClassName.length > 0) {
        document.getElementById(unitId).className = [currentClassName, 'unitSelected'].join(' ');
    }
}

/**
 * Will need to change this to the move command.
 *
 * @param {*} clickEvent
 */
function rightClickContextMenu(clickEvent) {
    clickEvent.preventDefault();
}

function cameraControls()
{
    let x = 0;
    let y = 0;

    // Camera Controls
    if (keyboardState.leftPressedDown === true) {

        x = x - 2;

    }
    if (keyboardState.rightPressedDown === true) {

        x = x + 2;

    }
    if (keyboardState.upPressedDown === true) {

        y = y - 2;

    }
    if (keyboardState.downPressedDown === true) {

        y = y + 2;

    }

    moveCamera(x, y);
}

function gameLoop() {
    setTimeout(gameLoop, 76);
}

function camera() {
    setTimeout(camera, 5);
    if (keyboardState.leftPressedDown || keyboardState.rightPressedDown || keyboardState.upPressedDown || keyboardState.downPressedDown) {
        cameraControls();
    }
}

gameLoop();
camera();