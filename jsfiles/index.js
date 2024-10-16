// Navbar
import {navbarlinkinfo} from './dummyData.js';
import {offerlinkinfo} from './dummyData.js';
import {work} from './dummyData.js';
import {user} from './dummyData.js';
function createNavbar() {
    const navbarContainer = document.querySelector('.navbar-nav');
    navbarContainer.innerHTML = '';

    navbarlinkinfo.forEach(item => {
        const li = document.createElement('li');
        li.className = 'nav-item';

        const a = document.createElement('a');
        a.className = 'nav-link';
        a.href = item.link;
        a.textContent = item.name;

        li.appendChild(a);
        navbarContainer.appendChild(li);
    });
}
function createoffer() {
    const offerTextContainer = document.querySelector('.offer-text');
    offerTextContainer.innerHTML = '';

    offerlinkinfo.forEach(item => {
        const offerItem = document.createElement('div');
        offerItem.className = 'offer-item';

        const title = document.createElement('h2');
        title.textContent = item.title;

        const description = document.createElement('h6');
        description.textContent = item.description;

        offerItem.appendChild(title);
        offerItem.appendChild(description);
        offerTextContainer.appendChild(offerItem);
    });
}

function creatework(){
    const workContainer = document.querySelector('.work-container');
    
    if (workContainer) {
        workContainer.innerHTML = '';

        work.forEach(item => {
            const workItem = document.createElement('div');
            workItem.className = 'work-item';

            const title = document.createElement('h2');
            title.textContent = item.title;

            const description = document.createElement('h6');
            description.textContent = item.description;

            workItem.appendChild(title);
            workItem.appendChild(description);
            workContainer.appendChild(workItem);
        });
    } else {
        console.error('Error: .work-container not found');
    }
}
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = 'var(--secondary-bg)';
    } else {
        navbar.style.backgroundColor = 'var(--primary-color)';
    }
});

document.addEventListener('DOMContentLoaded', createNavbar);

let heromaintext=document.querySelector('.herotexth3')

const words=["insomnia", "bipolar" ,"disorder", "PTSD", "suicidal thoughts", "social" ,"anxiety", "burnout", "more"]
const changewords=()=>{
    setInterval(()=>{
        let random=Math.floor(Math.random()*words.length)
        heromaintext.innerHTML=`Life-changing care for anxiety, depression,  <br> & ${words[random]}`
    },2000)
}

// own coursel
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 1, 
        loop: true,
        margin: 10, 
        nav: true, 
        dots: true, 
        autoplay: true, 
        autoplayTimeout: 5000, 
        responsive: {
        0: {
            items: 1 
        },
        600: {
            items: 2
        },
        1000: {
            items: 3 
        }
        }
    });
});
function createUserCards() {
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = '';

    user.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const quotes = document.createElement('span');
        quotes.className = 'quotes';
        quotes.innerHTML = '<i class="fa-solid fa-quote-left fa-2xl"></i>';

        const userName = document.createElement('h5');
        userName.className = 'card-title';
        userName.textContent = item.name;

        const userDescription = document.createElement('p');
        userDescription.className = 'card-text';
        userDescription.textContent = item.description;

        cardBody.appendChild(quotes);
        cardBody.appendChild(userName);
        cardBody.appendChild(userDescription);

        card.appendChild(cardBody);
        projectsContainer.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createNavbar();
    changewords(); 
    createoffer();
    creatework();
    createUserCards();
});







