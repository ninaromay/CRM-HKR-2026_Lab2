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

const submitSuccess = document.getElementById("form-success")

// Helper Functions / Accessibility 
function setError(input, error, message){
    isValid = false;

    if(!invalidField) invalidField = input;

    input.setAttibute("aria-invalid", "true");
    input.setAttibute("aria-describedby", error.id);
    error.textContent = message;
}

function clearError(input, error){
    input.setAttibute("aria-invalid", "false");
    input.removeAttribute("aria-describedby");
    error.textContent = ""
}


// Interaction/Eventlistener
form.addEventListener("submit", function(e){
    e.preventDefault()


    // Valid form display message
    submitSuccess.textContent = "Successfully submited!"
    submitSuccess.style.display = "block"
    submitSuccess.insertAdjacentHTML('beforeend', "<a id='success-home' href='index.html'>Home</a>")

    // Hide form
    form.style.display = "none"
})

// Name validator
nameInput.addEventListener("input", function(e){
    e.preventDefault()

})
