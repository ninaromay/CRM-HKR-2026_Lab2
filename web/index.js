// Function for show more button "..." for small screens
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


// Cards
// Starting variables
let currentCards = [];
let activeProperty = "";

// Get card container
const cardContainer = document.getElementById("card-container");

// Get total number of cards element and number of cards shown element
const totalSkills = document.getElementById("total-skills");
const currentSkills = document.getElementById("current-skills");

// Function cards control
function updateCards(arr){
    currentCards = arr;
    currentSkills_counter = currentCards.length;
    currentSkills.textContent = currentCards.length;
}

function cardGenerator(arr){
    cardContainer.innerHTML = "";

    arr.forEach(card => {
        let node = document.createElement("div")
        node.className = `card card-${card.name.toLowerCase()}`;
        node.innerHTML = `
                <h4>${card.name}</h4>
                <span class="card-sort">${card.sort.toUpperCase()}</span>
                <p class="card-category">${card.category}</p>
                <span class="card-experience full-screen"><strong>Experience:</strong> ${card.yearsExperience} y</span>
                <span class="card-experience small-screen">${card.yearsExperience} years</span>
                <div class="card-stars" id="stars-${card.name.toLowerCase()}"></div>
                <img class="card-img ${card.name.toLowerCase()}-img" src="${card.img}" alt="${card.description}">
                <p class="card-description">${card.description}</p>
            `;
    
        cardContainer.appendChild(node);

        const stars = document.getElementById(`stars-${card.name.toLowerCase()}`);
        let starCount = 0
        for(let i = 0; i < 5; i++){
            if(starCount < card.proficiency){
                stars.innerHTML += `<img class="star" src="images/other/star.svg" alt="Star Proficiency skill"/>`
                starCount = starCount + 1;
            } else {
                stars.innerHTML += `<img class="star" src="images/other/empty_star.svg" alt="Star Proficiency skill"/>`
            }
        }
    });

    updateCards(arr);
}

function sortBy(arr, prop){
    switch (prop){
        case "name":
            currentCards = arr.sort((first, second) => 
                first[prop].localeCompare(second[prop])
            );
            break;
        case "years":
            currentCards = arr.sort((first, second) => 
                second.yearsExperience - first.yearsExperience
            );
            break;
        case "prof":
            currentCards = arr.sort((first, second) => 
                second.proficiency - first.proficiency
            );
            break;
        default:
            break;
    }

    cardGenerator(currentCards);
}

function resetSkills(arr){
    arr.forEach(skill => {
        if(skill.classList.contains("active-filter")) {
            skill.classList.remove("active-filter");
            skill.classList.add("inactive-filter");

            skill.setAttribute('aria-pressed', 'false');
        }
    });
}

// Cards array
const skills = [
    {
        "id": 0,
        "name": "HTML",
        "category": "Front-end",
        "proficiency": 5,
        "yearsExperience" : 3,
        "description" : "HyperText Markup Language - is the standard language used to create and structure content on the World Wide Web",
        "img" : "images/code/0 html.png",
        "sort": "tech",
    },
    {
        "id": 1,
        "name": "CSS",
        "category": "Front-end",
        "proficiency": 5,
        "yearsExperience" : 3,
        "description" : "Cascading Style Sheets - is the language we use to style an HTML document, describes how elements should be displayed",
        "img" : "images/code/1 css.png",
        "sort": "tech",
    },
    {
        "id": 2,
        "name": "JavaScript",
        "category": "FullStack",
        "proficiency": 4,
        "yearsExperience" : 3,
        "description" : "Programming Language of the Web - It can calculate, manipulate and validate data or update and change both HTML and CSS.",
        "img" : "images/code/2 javascript.png",
        "sort": "tech",
    },
    {
        "id": 3,
        "name": "PHP",
        "category": "Back-end",
        "proficiency": 3,
        "yearsExperience" : 0.5,
        "description" : "A general-purpose scripting language suited for web development. Fast, flexible and pragmatic, PHP powers from your blog to the most popular websites in the world.",
        "img" : "images/code/3 php.webp",
        "sort": "tech",
    },
    {
        "id": 4,
        "name": "React",
        "category": "Framework",
        "proficiency": 4,
        "yearsExperience" : 3,
        "description" : "React lets you build user interfaces out of individual pieces called components. Create your own React components and combine them into entire screens, pages, and apps.",
        "img" : "images/code/4 react.png",
        "sort": "tech",
    },
    {
        "id": 5,
        "name": "Angular",
        "category": "Framework",
        "proficiency": 2,
        "yearsExperience" : 1,
        "description" : "Angular provides a broad suite of tools, APIs, and libraries to simplify and streamline your development workflow, gives a solid platform on which to build fast, reliable applications.",
        "img" : "images/code/5 angular.png",
        "sort": "tech",
    },
    {
        "id": 6,
        "name": "Laravel",
        "category": "Framework",
        "proficiency": 2,
        "yearsExperience" : 0.5,
        "description" : "Laravel is a framework for building modern web apps and AI agents. Expressive syntax, built-in tools, and everything you need to ship fast.",
        "img" : "images/code/6 laravel.svg",
        "sort": "tech",
    },
    {
        "id": 7,
        "name": "NextJs",
        "category": "Framework",
        "proficiency": 0.1,
        "yearsExperience" : 0,
        "description" : "Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.",
        "img" : "images/code/7 nextjs.jpeg",
        "sort": "tech",
    },
    {
        "id": 8,
        "name": "Python",
        "category": "Back-end",
        "proficiency": 2,
        "yearsExperience" : 0.5,
        "description" : "Python is a programming language that lets you work quickly and integrate systems more effectively.",
        "img" : "images/code/8 python.svg",
        "sort": "tech",
    },
    {
        "id": 9,
        "name": "Kotlin",
        "category": "Android",
        "proficiency": 0,
        "yearsExperience" : 0,
        "description" : "Null safety and concise syntax already make Kotlin a language AI gets right. We’re making it even better with open benchmarks and agent-ready tooling.",
        "img" : "images/code/9 kotlin.svg",
        "sort": "tech",
    }
];

// Cards counters
let totalSkills_counter   = skills.length;
let currentSkills_counter = currentCards.length;

// Document load Event
document.addEventListener("DOMContentLoaded", () => {
    // Display cards on doument load
    cardGenerator(skills);

    // Display number of cards shown from start all/all
    totalSkills.textContent = skills.length
    currentSkills.textContent = currentCards.length
});

// Filtering buttons
const allSkills     = document.getElementById("btn-all");
const frontSkills   = document.getElementById("btn-front");
const backSkills    = document.getElementById("btn-back");
const fullSkills    = document.getElementById("btn-full");
const androidSkills = document.getElementById("btn-android");

// Array of the skill buttons 
const arrSkills = [allSkills, frontSkills, backSkills, fullSkills, androidSkills];

// All skills filter button
allSkills.addEventListener("click", function(e){
    e.preventDefault();

    resetSkills(arrSkills);

    this.classList.add("active-filter");
    this.classList.remove("inactive-filter");
    this.setAttribute('aria-pressed', 'true');

    cardGenerator(skills);
});

// Front-end filter button
frontSkills.addEventListener("click", function(e){
    e.preventDefault();

    resetSkills(arrSkills);

    this.classList.add("active-filter");
    this.classList.remove("inactive-filter");
    this.setAttribute('aria-pressed', 'true');

    const newArr = skills.filter(skill => skill.category === "Front-end");
    cardGenerator(newArr);
    console.log(currentCards);
});

// Back-end filter button
backSkills.addEventListener("click", function(e){
    e.preventDefault();

    resetSkills(arrSkills);

    this.classList.add("active-filter");
    this.classList.remove("inactive-filter");
    this.setAttribute('aria-pressed', 'true');

    const newArr = skills.filter(skill => skill.category === "Back-end");
    cardGenerator(newArr);
    console.log(currentCards);
});

// FullStack filter button
fullSkills.addEventListener("click", function(e){
    e.preventDefault();

    resetSkills(arrSkills);

    this.classList.add("active-filter");
    this.classList.remove("inactive-filter");
    this.setAttribute('aria-pressed', 'true');

    const newArr = skills.filter(skill => skill.category === "FullStack");
    cardGenerator(newArr);
    console.log(currentCards);
});

// Android filter button
androidSkills.addEventListener("click", function(e){
    e.preventDefault();

    resetSkills(arrSkills);

    this.classList.add("active-filter");
    this.classList.remove("inactive-filter");
    this.setAttribute('aria-pressed', 'true');

    const newArr = skills.filter(skill => skill.category === "Android");
    cardGenerator(newArr);
    console.log(currentCards);
});

// Sorting buttons
const sortName  = document.getElementById("sort-name");
const sortProf  = document.getElementById("sort-prof");
const sortYears = document.getElementById("sort-years");

// Activate "name" sort
sortName.addEventListener("click", function(e){
    e.preventDefault();
    activeProperty = "name";
    sortBy(currentCards, activeProperty);
});

// Activate "prof" sort
sortProf.addEventListener("click", function(e){
    e.preventDefault();
    activeProperty = "prof";
    sortBy(currentCards, activeProperty);
});

// Activate "years" sort
sortYears.addEventListener("click", function(e){
    e.preventDefault();
    activeProperty = "years";
    sortBy(currentCards, activeProperty);
});