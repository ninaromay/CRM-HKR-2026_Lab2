// Minimun character count
let count = 0;

const liveCounter = document.getElementById("live-counter");
liveCounter.textContent = count;

// All form validation
const nameMin = 4;
const emailMin = 8;
const messageMin = 20;
let subjectSelected = 0;

let isName = false;
let isEmail = false;
let isMessage = false;
let isSubject = false;

let isValid = true;
let invalidField = null;

// Form
const form = document.getElementById("form");

// Input required
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const subjectInput = document.getElementById("subject");

// Input optional
const urlInput = document.getElementById("website")

// Error msges
const nameError = document.getElementById("name-error-msge");
const emailError = document.getElementById("email-error-msge");
const messageError = document.getElementById("message-error-msge");
const subjectError = document.getElementById("subject-error-msge");

const submitSuccess = document.getElementById("form-success");

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
    error.textContent = "";
}

function calculateTotal(arr){
    const total = arr.reduce((tot, inp) => tot + inp.value.length, 0)
    liveCounter.textContent = total;

    if(total >= 15){
        liveCounter.textContent = "+15"
        liveCounter.style.color = "green"
    } else {
        liveCounter.style.color = "red"
    }
}

// Global counter
form.addEventListener("input", function(e){
    e.preventDefault();

    const inputGroup = [nameInput, emailInput, messageInput, urlInput]
    calculateTotal(inputGroup)
})


// Name validator
nameInput.addEventListener("input", function(e){
    e.preventDefault();
    let nameValue = nameInput.value.trim();

    if(nameValue.length == 0) {
        setError(nameInput, nameError, "An empty name is not valid.");
        nameInput.style.borderColor = "red";
        nameInput.style.color = "red";
        nameError.style.color = "red";
    }
    else if(!startRegex.test(nameValue)){
        // console.log("Error start");
        setError(nameInput, nameError, `${nameValue} is not a valid name. Must start with valid characters, no numbers or special characters.`);
        nameInput.style.borderColor = "red";
        nameInput.style.color = "red";
        nameError.style.color = "red";
    } else if(nameValue.length <= nameMin){
        // console.log("Error length");
        setError(nameInput, nameError, `${nameValue} is not a valid name, it's under ${nameMin} characters.`);
        nameInput.style.borderColor = "orange";
        nameInput.style.color = "orange";
        nameError.style.color = "orange";
    } else {
        // console.log("Valid")
        nameInput.style.borderColor = "green";
        nameInput.style.color = "green";
        clearError(nameInput, nameError);
        isName = true;
    }
});

// Email Validator
emailInput.addEventListener("input", function(e){
    e.preventDefault();
    let emailValue = emailInput.value.trim();


    if(emailValue.length == 0) {
        setError(emailInput, emailError, "An empty email is not valid.");
        emailInput.style.borderColor = "red";
        emailInput.style.color = "red";
        emailError.style.color = "red";
    }
    else if(!startRegex.test(emailValue)){
        // console.log("Error start");
        setError(emailInput, emailError, `${emailValue} is not a valid email. Cannot start with a number or special character.`);
        emailInput.style.borderColor = "red";
        emailInput.style.color = "red";
        emailError.style.color = "red";
    }
    else if(!emailRegex.test(emailValue)){
        setError(emailInput, emailError, `${emailValue} is not a valid email. The format must contain '@' and a valid domain.`);
        emailInput.style.borderColor = "orange";
        emailInput.style.color = "orange";
        emailError.style.color = "orange";
    } else if(emailValue.length <= emailMin){
        // console.log("Error length");
        setError(emailInput, emailError, `${emailValue} is not a valid email, it's under ${emailMin} characters.`);
        emailInput.style.borderColor = "orange";
        emailInput.style.color = "orange";
        emailError.style.color = "orange";
    } else {
        // console.log("Valid");
        emailInput.style.borderColor = "green";
        emailInput.style.color = "green";
        clearError(emailInput, emailError);
        isEmail = true;
    }
});

// Message Validator
messageInput.addEventListener("input", function(e){
    e.preventDefault();
    let messageValue = messageInput.value.trim();

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
        messageInput.style.color = "orange"
        messageError.style.color = "orange"
    } else {
        // console.log("Valid")
        messageInput.style.borderColor = "green"
        messageInput.style.color = "green"
        clearError(messageInput, messageError)
        isMessage = true;
    }
});

// Subject Validator
subjectInput.addEventListener("click", function(e){
    e.preventDefault();
    let subjectValue = this.value.trim();
    
    if(subjectSelected > 0){
        // console.log(subjectValue);
        if(subjectValue.value == ""){
            console.log("not selected");
            setError(this, subjectError, "An option must be selected.");
            this.style.borderColor = "red";
            subjectError.style.borderColor = "red";
        } else {
            isSubject = true;
            this.classList.toggle('is-selected');
            this.style.borderColor = "green";
            this.style.color = "green"
        }
        subjectSelected = 0;
    }

    subjectSelected ++;
});

// Form interaction
form.addEventListener("submit", function(e){
    e.preventDefault();

    // Missing more than one
    if(!isName || !isEmail || !isMessage || !isSubject){
        alert("You are missing information");
    } else {
        window.scrollTo(0, 0);
        // Valid form display message
        submitSuccess.textContent = "Successfully submited!";
        submitSuccess.style.display = "block";
        submitSuccess.insertAdjacentHTML('beforeend', "<a id='success-home' href='index.html'>Home</a>");
        
        // Hide form
        form.style.display = "none";

        // Show and reset after 4 seconds
        setTimeout(() => {
            form.style.display = 'flex';
            submitSuccess.style.display = "none";
            form.reset();

            // Reset counter
            liveCounter.textContent = count;

            // Reset styles
            nameInput.style.borderColor = "2px solid var(--color-navy)";
            nameInput.style.color = "2px solid var(--color-navy)";
            emailInput.style.borderColor = "2px solid var(--color-navy)";
            emailInput.style.color = "2px solid var(--color-navy)";
            messageInput.style.borderColor = "2px solid var(--color-navy)";
            messageInput.style.color = "2px solid var(--color-navy)";
            subjectInput.style.color = "2px solid var(--color-navy)";
            subjectInput.style.borderColor = "2px solid var(--color-navy)";

        }, 4000);
    }
});
