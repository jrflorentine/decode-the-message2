let message_string = "I'm a student from Planet Titus. I'm visiting your planet for a school assignment."
let numStudents = 10
basic.forever(function () {
    for (let index = 0; index <= numStudents - 1; index++) {
        radio.setGroup(index)
        if (message_string.charAt(index) == " ") {
            radio.sendString("-")
            basic.showString("-")
        } else {
            radio.sendString(message_string.charAt(index))
            basic.showString(message_string.charAt(index))
        }
    }
})
