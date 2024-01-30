function sendSpaceship(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("A nave ".concat(spaceship.name, " comandada pelo capit\u00E3o ").concat(spaceship.captain, " foi enviada para a miss\u00E3o"));
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed, "..."));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Acelerando a ".concat(spaceship.name, " para ").concat(targetSpeed, "..."));
    }
    else {
        alert('Mantendo a velocidade da ${spaceship.name}...');
    }
}
var spaceshipName = prompt('Insira o nome da nave');
var spaceshipCaptain = prompt('Insira o nome do capitão da nave');
var currentShip = sendSpaceship(spaceshipName, spaceshipCaptain);
var speed = Number(prompt('Insira a velocidade desejada.'));
accelerate(speed, currentShip);
