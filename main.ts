input.onGesture(Gesture.LogoUp, function () {
    let text_list: number[] = []
    index = randint(0, text_list.length - 1)
    basic.showString("" + (text_list[index]))
})
input.onGesture(Gesture.ScreenDown, function () {
    game.addScore(1)
})
input.onGesture(Gesture.Shake, function () {
    game.removeLife(1)
})
let index: string[] = []
index = ["PUPPY", "CLOK", "NIGHT"]
game.startCountdown(30000)
