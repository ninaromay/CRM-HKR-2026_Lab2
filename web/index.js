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


// Card container
const cardContainer = document.getElementById("card-container")

// Function cards
function cardGenerator(arr){
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
}

// Cards
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
        "yearsExperience" : 3,
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
        "proficiency": 1,
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
        "proficiency": 1,
        "yearsExperience" : 0.5,
        "description" : "Python is a programming language that lets you work quickly and integrate systems more effectively.",
        "img" : "images/code/8 python.svg",
        "sort": "tech",
    },
    {
        "id": 9,
        "name": "Kotlin",
        "category": "Android",
        "proficiency": 1,
        "yearsExperience" : 0.5,
        "description" : "Null safety and concise syntax already make Kotlin a language AI gets right. We’re making it even better with open benchmarks and agent-ready tooling.",
        "img" : "images/code/9 kotlin.svg",
        "sort": "tech",
    }
];

document.addEventListener("DOMContentLoaded", () => {
    cardGenerator(skills);
});

// Filtering
const allSkills     = document.getElementById("btn-all");
const frontSkills   = document.getElementById("btn-front");
const backSkills    = document.getElementById("btn-back");
const fullSkills    = document.getElementById("btn-full");
const androidSkills = document.getElementById("btn-android");

const arrSkills = [ allSkills, frontSkills, backSkills, fullSkills, androidSkills ];

allSkills.addEventListener("click", function(e){
    e.preventDefault();

    arrSkills.forEach(skill => {
        if(skill.classList.contains("active-filter")) {
            skill.classList.remove("active-filter");
            skill.classList.add("inactive-filter");

            skill.setAttribute('aria-pressed', 'false');
        }
    });

    cardContainer.innerHTML = "";

    this.classList.add("active-filter");
    this.classList.remove("inactive-filter");
    this.setAttribute('aria-pressed', 'true');

    cardGenerator(skills);

});

frontSkills.addEventListener("click", function(e){
    e.preventDefault();

    arrSkills.forEach(skill => {
        if(skill.classList.contains("active-filter")) {
            skill.classList.remove("active-filter");
            skill.classList.add("inactive-filter");

            skill.setAttribute('aria-pressed', 'false');
        }
    });

    cardContainer.innerHTML = "";

    this.classList.add("active-filter");
    this.classList.remove("inactive-filter");
    this.setAttribute('aria-pressed', 'true');

    const newArr = skills.filter(skill => skill.category === "Front-end");
    cardGenerator(newArr);
});

backSkills.addEventListener("click", function(e){
    e.preventDefault();

    arrSkills.forEach(skill => {
        if(skill.classList.contains("active-filter")) {
            skill.classList.remove("active-filter");
            skill.classList.add("inactive-filter");

            skill.setAttribute('aria-pressed', 'false');
        }
    });

    cardContainer.innerHTML = "";

    this.classList.add("active-filter");
    this.classList.remove("inactive-filter");
    this.setAttribute('aria-pressed', 'true');

    const newArr = skills.filter(skill => skill.category === "Back-end");
    cardGenerator(newArr);
});

fullSkills.addEventListener("click", function(e){
    e.preventDefault();

    arrSkills.forEach(skill => {
        if(skill.classList.contains("active-filter")) {
            skill.classList.remove("active-filter");
            skill.classList.add("inactive-filter");

            skill.setAttribute('aria-pressed', 'false');
        }
    });

    cardContainer.innerHTML = "";

    this.classList.add("active-filter");
    this.classList.remove("inactive-filter");
    this.setAttribute('aria-pressed', 'true');

    const newArr = skills.filter(skill => skill.category === "FullStack");
    cardGenerator(newArr);
});

androidSkills.addEventListener("click", function(e){
    e.preventDefault();

    arrSkills.forEach(skill => {
        if(skill.classList.contains("active-filter")) {
            skill.classList.remove("active-filter");
            skill.classList.add("inactive-filter");

            skill.setAttribute('aria-pressed', 'false');
        }
    });

    cardContainer.innerHTML = "";

    this.classList.add("active-filter");
    this.classList.remove("inactive-filter");
    this.setAttribute('aria-pressed', 'true');

    const newArr = skills.filter(skill => skill.category === "Android");
    cardGenerator(newArr);
});
