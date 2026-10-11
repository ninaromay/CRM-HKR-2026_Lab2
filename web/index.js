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


// Cards
const skills = [
    {
        "id": 0,
        "name": "HTML",
        "category": "front-end",
        "proficiency": 5,
        "yearsExperience" : 3,
        "description" : "HyperText Markup Language - is the standard language used to create and structure content on the World Wide Web",
        "img" : "images/code/0 html.png"
    },
    {
        "id": 1,
        "name": "CSS",
        "category": "front-end",
        "proficiency": 5,
        "yearsExperience" : 3,
        "description" : "Cascading Style Sheets - is the language we use to style an HTML document, describes how elements should be displayed",
        "img" : "images/code/1 css.png"
    },
    {
        "id": 2,
        "name": "JavaScript",
        "category": "fullStack",
        "proficiency": 4,
        "yearsExperience" : 3,
        "description" : "Programming Language of the Web - It can calculate, manipulate and validate data or update and change both HTML and CSS.",
        "img" : "images/code/2 javascript.png"
    },
    {
        "id": 3,
        "name": "PHP",
        "category": "back-end",
        "proficiency": 3,
        "yearsExperience" : 3,
        "description" : "A popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world.",
        "img" : "images/code/3 php.svg"
    },
    {
        "id": 4,
        "name": "React",
        "category": "framework",
        "proficiency": 4,
        "yearsExperience" : 3,
        "description" : "React lets you build user interfaces out of individual pieces called components. Create your own React components and combine them into entire screens, pages, and apps.",
        "img" : "images/code/4 react.png"
    },
    {
        "id": 5,
        "name": "Angular",
        "category": "framework",
        "proficiency": 2,
        "yearsExperience" : 1,
        "description" : "Angular provides a broad suite of tools, APIs, and libraries to simplify and streamline your development workflow, gives you a solid platform on which to build fast, reliable applications.",
        "img" : "images/code/5 angular.png"
    },
    {
        "id": 6,
        "name": "Laravel",
        "category": "framework",
        "proficiency": 1,
        "yearsExperience" : 0.5,
        "description" : "Laravel is a framework for building modern web apps and AI agents. Expressive syntax, built-in tools, and everything you need to ship fast.",
        "img" : "images/code/6 laravel.svg"
    },
    {
        "id": 7,
        "name": "NextJs",
        "category": "framework",
        "proficiency": 0.1,
        "yearsExperience" : 0,
        "description" : "Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.",
        "img" : "images/code/7 nextjs.jpeg"
    },
    {
        "id": 8,
        "name": "Python",
        "category": "back-end",
        "proficiency": 1,
        "yearsExperience" : 0.5,
        "description" : "Python is a programming language that lets you work quickly and integrate systems more effectively.",
        "img" : "images/code/8 python.svg"
    },
    {
        "id": 9,
        "name": "Kotlin",
        "category": "android",
        "proficiency": 1,
        "yearsExperience" : 0.5,
        "description" : "Null safety and concise syntax already make Kotlin a language AI gets right. We’re making it even better with open benchmarks and agent-ready tooling.",
        "img" : "images/code/9 kotlin.svg"
    }
];

