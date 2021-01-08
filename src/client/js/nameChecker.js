function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou",
    ]

    let pokemon = [
        "Pokemon",
        "Ditto"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
        return "captain"
    }

    if(pokemon.includes(inputText)) {
        alert("Welcome, Pokemon!")
        return "pokemon"
    }
}

export { checkForName }
