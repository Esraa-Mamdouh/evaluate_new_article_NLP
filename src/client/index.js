
// include scss files
import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/header.scss'

import { checkURL } from './js/checkUrl'
import { handleSubmit } from './js/formHandler'

alert("I EXIST")

// TODO: get the button for submit
//const submit = document.querySelector('.btn-submit')
// TODO: add event listener to it when the click to call handleSubmit function
//submit.addEventListener("click",()=>handleSubmit())

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    const form = document.getElementById('form')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        handleSubmit()
    })
});

 export {
    handleSubmit,
    checkURL
}