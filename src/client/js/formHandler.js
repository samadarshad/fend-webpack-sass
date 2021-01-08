function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    let ret = Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    if (ret == "pokemon") {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(res => res.json())
        .then(function(res) {
            console.log(res.height)
            document.getElementById('results').innerHTML = res.height
        })
    } else {
        fetch('http://localhost:8081/test')
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('results').innerHTML = res.message
        })
    }

    
    
}

export { handleSubmit }
