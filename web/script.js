// Get "..." button
const readMore = document.getElementById("read-more");
const fullTxt = document.getElementsByClassName("full-screen-txt");

function clickAndShow(showMe, hideMe){
    for(let i = 0; i < showMe.length; i++){
        showMe[i].style.display = "none"
        if(showMe[i].style.display == "none"){
            showMe[i].style.display = "block"
        }
    }
    hideMe.style.display = "none"
}

readMore.addEventListener("click", function(){
    clickAndShow(fullTxt, readMore)
})