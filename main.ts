let short_message = "I'm a student"
let long_message = "I'm a student from Planet Titus"
let current_message = short_message
basic.forever(function () {
    for (let index = 0; index <= current_message.length - 1; index++) {
        radio.setGroup(index)
        if (current_message.charAt(index) == " ") {
            radio.sendString("-")
            basic.showString("-")
        } else {
            radio.sendString(current_message.charAt(index))
            basic.showString(current_message.charAt(index))
        }
    }
})
