const btn = document.getElementById('hamb')
const ul = document.getElementById('menu')

function menu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}

function menuSair() {
    const li = document.getElementById('li')
    nav.classList.toggle('active')
}

btn.addEventListener('click', menu)
ul.addEventListener('click', menuSair)

// Animação

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args)
    }
}

const target = document.querySelectorAll('[data-anime');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();
if (target.length) {
    window.addEventListener('scroll', debounce(function() {
        animeScroll();
    }, 200));
}

// Scroll suave

const menuItems = document.querySelectorAll('.menu a');
const menuItems2 = document.querySelectorAll('.menu-footer a');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);

    function scrollToIdOnClick(event) {
        event.preventDefault();
        const element = event.target;
        const id = element.getAttribute('href');
        const to = document.querySelector(id).offsetTop;


        window.scroll({
            top: to,
            behavior: "smooth"
        })
    }
})


menuItems2.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);

    function scrollToIdOnClick(event) {
        event.preventDefault();
        const element = event.target;
        const id = element.getAttribute('href');
        const to = document.querySelector(id).offsetTop;


        window.scroll({
            top: to,
            behavior: "smooth"
        })
    }
})