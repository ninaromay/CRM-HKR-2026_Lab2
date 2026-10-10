// All form validation
const nameMin = 4
const emailMin = 8
const messageMin = 20

let isName = false
let isEmail = false
let isMessage = false

let isValid = true
let invalidField = null

// Form
const form = document.getElementById("form")

// Input required
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const messageInput = document.getElementById("message")

// Error msges
const nameError = document.getElementById("name-error-msge")
const emailError = document.getElementById("email-error-msge")
const messageError = document.getElementById("message-error-msge")

const submitSuccess = document.getElementById("form-success")

// Regex
const startRegex = /^[a-zA-Z]/;
const emailRegex = /^[a-zA-Z][^@\s]*@[^@\s]+\.[^@\s]+$/;

// Helper Functions Accessibility 
function setError(input, error, message){
    isValid = false;

    if(!invalidField) invalidField = input;

    input.setAttribute("aria-invalid", "true");
    input.setAttribute("aria-describedby", error.id);
    error.textContent = message;
}

function clearError(input, error){
    input.setAttribute("aria-invalid", "false");
    input.removeAttribute("aria-describedby");
    error.textContent = ""
}


// Name validator
nameInput.addEventListener("input", function(e){
    e.preventDefault()
    let nameValue = nameInput.value.trim()

    if(nameValue.length == 0) {
        setError(nameInput, nameError, "An empty name is not valid.")
        nameInput.style.borderColor = "red"
        nameError.style.color = "red"
    }
    else if(!startRegex.test(nameValue)){
        // console.log("Error start")
        setError(nameInput, nameError, `${nameValue} is not a valid name. Must start with valid characters, no numbers or special characters.`)
        nameInput.style.borderColor = "red"
        nameError.style.color = "red"
    } else if(nameValue.length <= nameMin){
        // console.log("Error length")
        setError(nameInput, nameError, `${nameValue} is not a valid name, it's under ${nameMin} characters.`)
        nameInput.style.borderColor = "orange"
        nameError.style.color = "orange"
    } else {
        // console.log("Valid")
        nameInput.style.borderColor = "#3B82F6"
        clearError(nameInput, nameError)
        isName = true;
    }
})

// Email Validator
emailInput.addEventListener("input", function(e){
    e.preventDefault()
    let emailValue = emailInput.value.trim()

    if(emailValue.length == 0) {
        setError(emailInput, emailError, "An empty email is not valid.")
        emailInput.style.borderColor = "red"
        emailError.style.color = "red"
    }
    else if(!startRegex.test(emailValue)){
        console.log("Error start")
        setError(emailInput, emailError, `${emailValue} is not a valid email. Cannot start with a number or special character.`)
        emailInput.style.borderColor = "red"
        emailError.style.color = "red"
    }
    else if(!emailRegex.test(emailValue)){
        setError(emailInput, emailError, `${emailValue} is not a valid email. The format must contain '@' and a valid domain.`)
        emailInput.style.borderColor = "orange"
        emailError.style.color = "orange"
    } else if(emailValue.length <= emailMin){
        console.log("Error length")
        setError(emailInput, emailError, `${emailValue} is not a valid email, it's under ${emailMin} characters.`)
        emailInput.style.borderColor = "orange"
        emailError.style.color = "orange"
    } else {
        console.log("Valid")
        emailInput.style.borderColor = "#3B82F6"
        clearError(emailInput, emailError)
        isEmail = true;
    }
})

// Message Validator
messageInput.addEventListener("input", function(e){
    e.preventDefault()
    let messageValue = messageInput.value.trim()

    if(messageValue.length == 0) {
        setError(messageInput, messageError, "An empty message is not valid.")
        messageInput.style.borderColor = "red"
        messageError.style.color = "red"
    }
    else if(!startRegex.test(messageValue)){
        // console.log("Error start")
        setError(messageInput, messageError, `${messageValue} is not a valid message. Must start with valid characters, no numbers or special characters.`)
        messageInput.style.borderColor = "red"
        messageError.style.color = "red"
    } else if(messageValue.length <= messageMin){
        // console.log("Error length")
        setError(messageInput, messageError, `${messageValue} is not a valid message, it's under ${messageMin} characters.`)
        messageInput.style.borderColor = "orange"
        messageError.style.color = "orange"
    } else {
        // console.log("Valid")
        messageInput.style.borderColor = "#3B82F6"
        clearError(messageInput, messageError)
        isMessage = true;
    }
})

// Form interaction
form.addEventListener("submit", function(e){
    e.preventDefault()
    console.log("submit")

    // Missing Name
    if(!isName && isEmail && isMessage){
        setError(nameInput, nameError, "An empty name is not valid")
        console.log("Error miss name")
        nameInput.style.borderColor = "red"
        nameError.style.color = "red"
    }
    
    // Missing Email
    if(isName && !isEmail && isMessage){
        setError(emailInput, emailError, "An empty email is not valid")
        console.log("Error miss email")
    }
    // Missing message
    if(isName && isEmail && !isMessage){
        setError(messageInput, messageError, "An empty message is not valid")
        console.log("Error miss msge")
    }

    // Missing more than one
    if((!isName && !isEmail && isMessage) || (!isName && isEmail && !isMessage) || (isName && !isEmail && !isMessage) || (!isName && !isEmail && !isMessage)){
        alert("You are missing information")
    }

    // Successful submission
    if(isName && isEmail && isMessage){
        // Valid form display message
        submitSuccess.textContent = "Successfully submited!"
        submitSuccess.style.display = "block"
        submitSuccess.insertAdjacentHTML('beforeend', "<a id='success-home' href='index.html'>Home</a>")
        
        // Hide form
        form.style.display = "none"
    }
})


