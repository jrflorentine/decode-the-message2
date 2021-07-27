let message_string = "I'm-a-visitor-from-Planet-Titus."
basic.forever(function () {
    for (let index = 0; index <= message_string.length; index++) {
        radio.setGroup(index)
        radio.sendString("" + (index))
    }
})
