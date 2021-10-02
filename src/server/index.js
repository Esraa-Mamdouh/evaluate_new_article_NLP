//Configure the dotenv environment variables
require('dotenv').config()

const mockAPIResponse = require('./mockAPI.js')

const PORT = 8081
var path = require('path')

// TODO add Configuration to be able to use env variables


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
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//Configure express static directory.
app.use(express.static('dist'))


app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})
// a route that handling post request for new URL that coming from the frontend
// app.post('/addURL', async(req, res)=>{
//     console.log("inside server")
//     const inputURL =req.body.url; 
//     const fetchedURL = `${API_URL}?key=${API_KEY}&url=${inputURL}&lang=en`;
//     try{
//         //TODO: باقي اللوجيك
//         const b =await axios(fetchedURL)
//     }
//     catch(e){
//         console.log("error= ",e)
//     }
// })
/* TODO:
    1. GET the url from the request body
    2. Build the URL it should be something like `${BASE_API_URL}?key=${MEAN_CLOUD_API_KEY}&url=${req.body.url}&lang=en`
    3. Fetch Data from API
    4. Send it to the client
    5. REMOVE THIS TODO AFTER DOING IT 😎😎
    server sends only specified data to the client with below codes
     const sample = {
       text: '',
       score_tag : '',
       agreement : '',
       subjectivity : '',
       confidence : '',
       irony : ''
     }
*/

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
    console.log("test")
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

// TODO: export app to use it in the unit testing
