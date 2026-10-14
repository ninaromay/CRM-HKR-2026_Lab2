// Accessibility control pannel
const accMenu = document.getElementById("accessibility-menu");
const accMenuBtns = document.getElementById("accessibility-buttons-container");

// Helper functions
function toggleClass(element, remove, add){
    if(element.classList.contains(remove)){
        element.classList.remove(remove);
        element.classList.add(add);

        if (element.hasAttribute("aria-pressed")) element.setAttribute("aria-pressed", "true");
    } else {
        element.classList.remove(add);
        element.classList.add(remove);

        if (element.hasAttribute("aria-pressed")) element.setAttribute("aria-pressed", "false");
    }
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
    small: "90%",
    medium: "100%",
    large: "120%"
};

sizeButtons.forEach(btn => {
    btn.addEventListener("click", function(e){
        e.preventDefault();

        const size = button.dataset.textSize;

        document.documentElement.style.fontSize = fontSizes[size];

    })
})
