/**
 * Define Global Variables
 * allSections: contains all the sections
 * navList: unordered list that presents 
 * options: object represents the root container of the viewport
*/

const allSections = document.querySelectorAll('section');
const navList = document.createElement('ul');
// set the class name for styling purpose
navList.className = 'navbar__menu';
const options = {
    root: null,
    rootMargin: "-50px -50px",
    threshold: 0.5,
}

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//Add class 'your-active-class' to section when near top of viewport
function onFocus(items) {
    items.forEach((item)=>{
        if (item.isIntersecting) {
            item.target.classList.add('your-active-class');
        } else {
            item.target.classList.remove('your-active-class');
        }
    });
}

/**
 * End Helper Functions
 * Begin Main Functions
*/

//1. build the navigathion menu by creating unorderd list and add sections dynamicly to it + event scolling to the section
allSections.forEach((section)=>{
    //create li
    let ListItem = document.createElement('li');
    // set its class name for styling purpose
    ListItem.className = 'menu__link';
    //set its content
    ListItem.innerHTML = section.getAttribute('data-nav');
    // Scroll to section on link click
    ListItem.addEventListener('click', function(){
        section.scrollIntoView({behavior:'smooth', block:'end'});
    });
    //add it to the nav
    navList.appendChild(ListItem);
});
//add the nav to the top of the body
document.body.prepend(navList);

//2. Set sections as active by using IntersectionObserver
let observer = new IntersectionObserver(onFocus, options);
allSections.forEach((section)=>{
    observer.observe(section);
})

/**
 * End Main Functions
*/