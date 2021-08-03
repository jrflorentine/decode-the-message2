let message = "I'm-a-student"
basic.forever(function () {
    for (let index = 0; index <= message.length - 1; index++) {
        radio.setGroup(index)
        radio.sendString(message.charAt(index))
        basic.showString(message.charAt(index))
    }
})
