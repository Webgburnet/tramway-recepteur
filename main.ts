radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        commande = receivedString
    } else if (receivedString == "B") {
        commande = receivedString
    }
})
let commande = ""
radio.setGroup(240)
commande = "B"
maqueen.motorStop(maqueen.Motors.All)
basic.forever(function () {
    if (commande == "A") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 127)
    } else if (commande == "B") {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
