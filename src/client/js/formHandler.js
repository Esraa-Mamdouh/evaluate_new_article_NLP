const fetch = require("node-fetch");

function handleSubmit(event) {
    event.preventDefault()

    // clear UI before every result
    clearUI()
    // check what text was put into the form field
    //TODO: check if enters valid URL
    let formText = document.getElementById('article-url').value
    //checkURL(formText)

    //test logs
    console.log("::: Form Submitted :::")
    console.log("form text= ",formText)
 
    // post req to the server to acess external UI 
    postURL(formText)

}

// make a post request to the server to acess external API
function postURL(url=" "){
    fetch("http://localhost:8081/addURL", {
        method: "POST",
        mode: 'cors',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({url})
    }).then(res => {
        console.log("inside formHandler")
        console.log("res1= ",res)
        res=res.json()
        console.log("res2= ",res)
        return res
        
    })
    .then((res)=> {
        console.log("inside then")
        console.log("INSIDE RES", res)
        updateUI(res)
        
    }).catch((rej)=>{
        console.log("inside catch client")
        console.log("rej= ",rej)
    })
}

// update UI with new data we got from the external API
function updateUI(res) {
    document.getElementById('text').innerHTML = `Text: ${res.text}`
    document.getElementById('agreement').innerHTML = `Agreement: ${res.agreement}`
    document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`
    document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`
    document.getElementById('irony').innerHTML = `Irony: ${res.irony}`
    document.getElementById('score_tag').innerHTML = `Score_tag: ${res.score_tag}`
}

//clear UI 
function clearUI(){
    document.getElementById('text').innerHTML = ` `
    document.getElementById('agreement').innerHTML = ` `
    document.getElementById('subjectivity').innerHTML = ` `
    document.getElementById('confidence').innerHTML = ` `
    document.getElementById('irony').innerHTML = ` `
    document.getElementById('score_tag').innerHTML = ` `
}
export { handleSubmit }
