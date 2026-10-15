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

    sizeButtons.forEach(item => {
        selectedBtn(item, item.dataset.textSize === size);
    });
    
    // Save size
    localStorage.setItem("textSize", size);
}

function highContrast(bool){
    document.documentElement.classList.toggle("high-contrast", bool);
    contrastToggle.classList.toggle("is-on", bool);
    contrastToggle.setAttribute("aria-checked", String(bool));

    // Save Contrast
    localStorage.setItem("contrast", String(bool));
}

function updateSettings(size, bool){
    applySize(size);
    highContrast(bool);
}

// On document load, apply size
document.addEventListener("DOMContentLoaded", () => {
    // Load size from localStorage
    const savedSize = localStorage.getItem("textSize");
    const savedContrast = localStorage.getItem("contrast");
    console.log(savedContrast)

    // Check if there is a saved size, else get default "medium" and apply
    const initialSize = savedSize in fontSizes ? savedSize : "medium";
    const initialContrast = savedContrast === "true";
    
    updateSettings(initialSize, initialContrast);
});

// Add eventlistener to the size buttons
sizeButtons.forEach(btn => {
    btn.addEventListener("click", function(e){
        e.preventDefault();

        // Read data size
        const size = btn.dataset.textSize;

        // Apply sizes
        applySize(size);
    })
})

// Make menu clickable with "enter" or "spacebar"
document.addEventListener("keydown", function(e) {
  if (e.target.classList.contains("keyboard-clickable") && (e.key === "Enter" || e.key === " ")) {
    e.preventDefault()
    e.target.click();
  }
});

// Slider high contrast
const contrastToggle = document.getElementById("contrast-toggle");

contrastToggle.addEventListener("click", () => {
    // Activate toggle CSS
    const isOn = contrastToggle.getAttribute("aria-checked") === "true";

    // Toggle High contrast 
    // Colors
    highContrast(!isOn);
});