let left = 0
let right = 0
basic.forever(function () {
    left = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    right = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    serial.writeValue("left", left)
    serial.writeValue("right", right)
    basic.pause(100)
})
