input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        turtle.forward(1)
        turtle.turnRight()
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Penq == 0) {
        Penq = 1
        turtle.pen(TurtlePenMode.Down)
    } else {
        turtle.pen(TurtlePenMode.Up)
        Penq = 0
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        turtle.forward(1)
        turtle.turnRight()
    }
})
let Penq = 0
turtle.setPosition(2, 2)
Penq = 0
basic.forever(function () {
	
})
