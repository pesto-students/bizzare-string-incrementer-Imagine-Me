// Start your implementation here

const getNumberFromString = (string) => {
    let pointer = string.length - 1
    while (!isNaN(string.charAt(pointer))) {
        pointer--
    }
    return [string.substring(0, pointer + 1), string.substring(pointer + 1)]
}


const bizarreStringIncrementer = (string) => {
    if(typeof(string) !== "string")
        throw new Error("Provide String")
    const [stringPart, numberPart] = getNumberFromString(string)
    if (numberPart === "")
        return stringPart + 1
    else {
        const numberAdded = parseInt(numberPart) + 1
        if (numberAdded.toString().length < numberPart.length)
            return stringPart + numberPart.substring(0, numberPart.length - numberAdded.toString().length) + numberAdded
        else
            return stringPart + numberAdded
    }
}

module.exports = bizarreStringIncrementer 