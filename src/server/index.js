//Configure the dotenv environment variables
require('dotenv').config()
//const fetch = require('node-fetch');
const fetch = require("node-fetch");
const mockAPIResponse = require('./mockAPI.js')

const PORT = 8081
var path = require('path')

const axios = require('axios')


//get the key using environment variable 
//get the url we will access using our key
const API_URL = 'https://api.meaningcloud.com/sentiment-2.1'
const API_KEY = process.env.API_KEY

//Create an instance for the server
const express = require('express')
const app = express()

//Configure cors to avoid cors-origin issue
const cors = require('cors')
app.use(cors())

//Configure express to use body-parser as middle-ware.
const bodyParser = require('body-parser')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Configure express static directory.
app.use(express.static('dist'))


app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// a route that handling post request for new URL that coming from the frontend
app.post('/addURL',async (req, res) => {
    //1. Get the submitted url from the fetch req body
    const  articleUrl  = req.body.url
     //test logs
    console.log("request____________________= ",req)
    console.log("a111111111111rticle url= ") 
    console.log(articleUrl)

    //2. create the url we will use to access the external API
    const  APIURL = `${API_URL}?key=${API_KEY}&url=${articleUrl}&lang=en`
    //test logs
        console.log("heeeeereeeee33333333333")
        console.log("meaningCloudUrl= ", APIURL)

    //3. fetch the external API 
    try {
    const {data} = await axios.get(APIURL)
     //test logs
    //const datanew= await JSON.parse(JSON.stringify(data));
    //const newdata= data.json()
    console.log("dataaaaaaaaaa= ", data)
    //console.log("dataaaaaaaaaa22222222222= ", datanew)

      
        //4. send data fetched Client 
        //test logs
        console.log("data= 1" ,data.sentence_list[0].text," 2  ",data.score_tag,"  3 ",data.agreement,"  4  ",data.subjectivity,"  5  ",data.confidence,"  6  ",data.irony )
        res.send({
        text: data.sentence_list[0].text || '',
        score_tag: data.score_tag,
        agreement: data.agreement,
        subjectivity: data.subjectivity,
        confidence: data.confidence,
        irony: data.irony,
        errorMsg:'',
      })
    } catch (error) {
        //5. if error occures while sending catch the error ad log it to console
         //test logs
      //res.status(400);
      res.send({errorMsg: 'Please enter a URL for a valid article and retry'})
      console.log("error= ",error.message)
      //res.send(error.message)
    }
  })
  
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
    console.log("test")
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

//export app to use it in the unit testing
module.exports={
    app,
}

