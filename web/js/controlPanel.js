// Accessibility control pannel
const accMenu = document.getElementById("accessibility-menu");
const accMenuBtns = document.getElementById("accessibility-buttons-container");

// Helper functions
function toggleClass(element, inactive, active){
    const isActive = element.classList.contains(inactive);

    element.classList.replace(
        isActive ? inactive : active,
        isActive ? active : inactive
    );

    if (element.hasAttribute("aria-pressed")) {
        element.setAttribute("aria-pressed", String(isActive));
    }
}

function selectedBtn(element, isSelected){
    element.classList.toggle("acc-active-btn", isSelected);
    element.classList.toggle("acc-inactive-btn", !isSelected);
    element.setAttribute("aria-pressed", String(isSelected));
}

// Access menu toggle
accMenu.addEventListener("click", function(e){
    e.preventDefault();

    toggleClass(this, "inactive-accessibility-menu", "active-accessibility-menu");
    toggleClass(accMenuBtns, "acc-invisible", "acc-visible");
});

// Accessibility control pannel buttons
// Size
const sizeButtons = document.querySelectorAll("[data-text-size]");

const fontSizes = {
    "small"  : "80%",
    "medium" : "100%",
    "large"  : "130%"
};

// Apply text size function
function applySize(size){
    document.documentElement.style.fontSize = fontSizes[size];
    console.log('Initial state: '+ fontSizes[size])

    sizeButtons.forEach(item => {
        selectedBtn(item, item.dataset.textSize === size);
    });
    
    // Save size
    localStorage.setItem("textSize", size);
}

// On document load, apply size
document.addEventListener("DOMContentLoaded", () => {
    // Load size from localStorage
    const savedSize = localStorage.getItem("textSize");

    // Check if there is a saved size, else get default "medium" and apply
    const initialSize = savedSize in fontSizes ? savedSize : "medium";
    applySize(initialSize);
});

// Add eventlistener to the buttons
sizeButtons.forEach(btn => {
    btn.addEventListener("click", function(e){
        e.preventDefault();

        // Read data size
        const size = btn.dataset.textSize;

        // Apply sizes
        applySize(size);
    })
})
