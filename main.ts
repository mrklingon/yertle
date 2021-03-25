input.onPinPressed(TouchPin.P0, function () {
    turtle.setBrightness(0)
})
input.onButtonPressed(Button.A, function () {
    turtle.forward(1)
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
    turtle.turnRight()
})
input.onPinPressed(TouchPin.P1, function () {
    turtle.setBrightness(128)
})
input.onGesture(Gesture.Shake, function () {
    turtle.setBrightness(0)
    turtle.setPosition(0, 0)
    turtle.pen(TurtlePenMode.Down)
    for (let index = 0; index <= 4; index++) {
        for (let Ind2 = 0; Ind2 <= 4; Ind2++) {
            turtle.forward(1)
        }
        turtle.turnLeft()
        turtle.forward(1)
        turtle.turnRight()
    }
    turtle.setBrightness(128)
    Penq = 0
    turtle.pen(TurtlePenMode.Up)
    turtle.home()
})
let Penq = 0
turtle.setPosition(2, 2)
Penq = 0
