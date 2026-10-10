// Functions
function clickAndShow(showMe, hideMe){
    for(let i = 0; i < showMe.length; i++){
        showMe[i].style.display = "none"
        if(showMe[i].style.display == "none"){
            showMe[i].style.display = "block"
        }
    }
    hideMe.style.display = "none"
}

// Get "..." button & add interaction on click
const readMore = document.getElementById("read-more");
const fullTxt = document.getElementsByClassName("full-screen-txt");
readMore.addEventListener("click", function(){
    clickAndShow(fullTxt, readMore)
})