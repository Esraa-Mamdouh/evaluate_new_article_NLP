
// include scss files
import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/header.scss'

import { checkURL } from './js/checkUrl'
import { handleSubmit } from './js/formHandler'

alert("I EXIST")

// get the form I'll click submit
const form = document.getElementById('form')
// event listener to it when the click to call handleSubmit function
form.addEventListener("submit",(evt)=>{
    evt.preventDefault()
    handleSubmit()
})

 export {
    handleSubmit,
    checkURL
}