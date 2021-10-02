function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    //check if enters valid URL
    let formText = document.getElementById('article-url').value
    //checkURL(formText)

    console.log("::: Form Submitted :::")
    console.log("form text= ",formText)
    // fetch('http://localhost:8081/add-url',{
    //     method: 'POST',
    //     credentials: 'same-origin',
    //     mode:'cors',
    //     dataType:'text',
    //     headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({formText})
    //     })
    // .then(res => res.json())
    // .then(function(res) {
    //     CONSOLE.log("INSIDE RES", res.message)
    //     document.getElementById('text').innerHTML = res.message
    // })
}

export { handleSubmit }
