
// include scss files
import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/header.scss'

//import { checkURL } from './js/checkURL'
import { handleSubmit } from './js/formHandler'

alert("I EXIST")

// TODO: get the button for submit
// TODO: add event listener to it when the click to call handleSubmit function
/**
 * TODO: Get Value of the input for URL
 *  TODO: Check if it's URL or not
 *      yes
 *          send it to the backend
 *      no
 *          show user message it's not valid URL
 */

 export {
    handleSubmit,
    //checkURL
}