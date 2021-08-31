input.onButtonPressed(Button.A, function () {
    basic.showString("A")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("C")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Angry)
})
basic.showString("HOLA")
basic.forever(function () {
    basic.showIcon(IconNames.Asleep)
    basic.pause(500)
    basic.showIcon(IconNames.Silly)
    basic.pause(500)
})
