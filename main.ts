input.onButtonPressed(Button.A, function () {
    knuffelen += 5
})
input.onButtonPressed(Button.B, function () {
    voeden += 5
})
let dood = 0
let knuffelen = 20
let voeden = 20
basic.forever(function () {
    knuffelen += -1
    voeden += -1
    basic.pause(1000)
})
basic.forever(function () {
    if (knuffelen < 0 && voeden < 0) {
        basic.showIcon(IconNames.Asleep)
    }
    if (knuffelen < 10 && voeden < 10 && (knuffelen > 0 && voeden > 0)) {
        basic.showIcon(IconNames.Sad)
    }
    if (knuffelen >= 10 && voeden >= 10) {
        basic.showIcon(IconNames.Happy)
    }
})
