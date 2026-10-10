// All form validation
const nameMin = 4
const emailMin = 8

let isName = true
let isEmail = true
let isMessage = true

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
const emailRegex = /^[a-zA-Z][^@\s]*@[^@\s]+\.[^@\s]+\$/;

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
        setError(nameInput, nameError, "An empty name is not valid")
        nameInput.style.borderColor = "red"
        nameError.style.color = "red"
    }
    else if(!startRegex.test(nameValue)){
        console.log("Error start")
        setError(nameInput, nameError, `${nameValue} is not a valid name. Must start with valid characters, no numbers or special characters`)
        nameInput.style.borderColor = "red"
        nameError.style.color = "red"
    } else if(nameValue.length <= nameMin){
        console.log("Error length")
        setError(nameInput, nameError, `${nameValue} is not a valid name, it's under ${nameMin} characters.`)
        nameInput.style.borderColor = "orange"
        nameError.style.color = "orange"
    } else {
        console.log("Valid")
        nameInput.style.borderColor = "#3B82F6"
        clearError(nameInput, nameError)
    }
})

// Form interaction
form.addEventListener("submit", function(e){
    e.preventDefault()


    // Valid form display message
    submitSuccess.textContent = "Successfully submited!"
    submitSuccess.style.display = "block"
    submitSuccess.insertAdjacentHTML('beforeend', "<a id='success-home' href='index.html'>Home</a>")

    // Hide form
    form.style.display = "none"
})


