/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/
//Thor moves on a map which is 40 wide by 18 high. Note that the coordinates (X and Y) start at the top left! This means the most top left cell has the coordinates "X=0,Y=0" and the most bottom right one has the coordinates "X=39,Y=17".

var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var initialTX = parseInt(inputs[2]); // Thor's starting X position
var initialTY = parseInt(inputs[3]); // Thor's starting Y position
var thorX = initialTX;
var thorY = initialTY;
// game loop
while (true) {
    var remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
    var directionX = String();
    var directionY = String();
    if(thorX > lightX) {
        directionX = "W";
        thorX -= 1;
    } else if(thorX < lightX) {
        directionX = "E";
        thorX += 1;
    }
    if(thorY > lightY) {
        directionY = "N";
        thorY -= 1;
    } else if(thorY < lightY) {
        directionY = "S";
        thorY += 1;
    }

    var newDirection = directionY;
    var newDirection = directionY.concat(directionX);
    // Write an action using print()
    // To debug: printErr('Debug messages...');
    print(newDirection); // A single line providing the move to be made: N NE E SE S SW W or NW
}
