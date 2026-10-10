// All form validation

// Form
const form = document.getElementById("form")

// Input required
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const messageInput = document.getElementById("message")

// Interaction/Eventlistener
form.addEventListener("submit", function(e){
    e.preventDefault()
})