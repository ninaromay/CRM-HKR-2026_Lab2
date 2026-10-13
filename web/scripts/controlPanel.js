// Accessibility control pannel
const accMenu = document.getElementById("accessibility-menu");
const accMenuBtns = document.getElementById("accessibility-buttons-container");

accMenu.addEventListener("click", function(e){
    e.preventDefault();

    if(this.classList.contains("inactive-accessibility-menu")){
        this.classList.remove("inactive-accessibility-menu");
        this.classList.add("active-accessibility-menu");
        this.setAttribute('aria-pressed', 'true');

        accMenuBtns.classList.add("acc-visible");
        accMenuBtns.classList.remove("acc-invisible");
    } else {
        this.classList.remove("acc-visible");
        this.classList.add("inactive-accessibility-menu");
        this.setAttribute('aria-pressed', 'false');

        accMenuBtns.classList.add("acc-invisible");
        accMenuBtns.classList.remove("acc-visible");
    }
});

// Accessibility control pannel buttons
// Size
const sizeL = document.getElementById("acc-btn-size-l");
const sizeM = document.getElementById("acc-btn-size-m");
const sizeS = document.getElementById("acc-btn-size-s");

const sizeArray = [sizeL, sizeM, sizeS];

sizeL.addEventListener("click", function(e){
    e.preventDefault();


});
