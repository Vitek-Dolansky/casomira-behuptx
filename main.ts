radio.setGroup(73)

let start: boolean = false

Sensors.SetLightLevel()
input.onButtonPressed(Button.A, function() {
    Sensors.SetLightLevel()
})

Sensors.OnLightDrop(function() {
    if (start === false) {
        radio.sendNumber(1) // konec = 2, start = 1, zrušeno = 0
    }
})

//radio.onReceivedNumber(function(receivedNumber: number) {
   // whaleysans.showNumber(input.runningTime())
//})


radio.onReceivedValue(function(name: string, value: number) {
    music.playTone(440, 500)

    if (name === "endTime") {
     basic.showNumber(value)
    }
})



