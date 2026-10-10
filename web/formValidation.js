// All form validation
const nameMin = 4
const emailMin = 8

let isValid = true
let invalidField = null

// Form
const form = document.getElementById("form")

// Input required
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const messageInput = document.getElementById("message")

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

    // Name validator
    if(nameInput.value.trim() ){

    }
})

nameInput.addEventListener("input", function(e){
    e.preventDefault()

})
