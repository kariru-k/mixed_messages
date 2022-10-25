let messagesObject = {
    sign: ["Aries", "Capricorn", "Taurus", "Scorpio"],
    message: ["You are Strong", "You are Brave", "You are kind"],
    mission: ["Keep on", "Work Harder", "Don't lose hope"]
};

const createMessage = () => {
    let signMessage = messagesObject.sign[Math.floor(Math.random() * messagesObject.sign.length)]
    // console.log(signMessage)

    let quote = messagesObject.message[Math.floor(Math.random() * messagesObject.message.length)]

    let mission = messagesObject.mission[Math.floor(Math.random() * messagesObject.mission.length)]


    let string = signMessage + '. ' + quote + '. ' + mission + '.'

    return string
}

console.log(createMessage())
