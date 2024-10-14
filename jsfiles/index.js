// Navbar
const navbarlinkinfo=[
    {
        "name":"Getting Started",
        "link":"index.html"
    },
    {
        "name":"Learn More",
        "link":"#"
    },
    {
        "name":"FAQ",
        "link":"#"
    },
    {
        "name":"Blogs",
        "link":"#"
    },
    {
        "name":"ReferPatient",
        "link":"#"     
    }
]

const offerlinkinfo=[
    {
        "title": "Results-Based Care, Tailored for You",
        "description": "Our expert providers will create a plan based on your unique needs and data, providing support from start to finish. Choose between psychiatry, therapy, or both."
    },
    {
        "title": "Personalized Psychiatry",
        "description": "When medication is needed, our psychiatric providers act quickly—analyzing over 100 data points to identify the most effective and tolerable treatment options tailored for you."
    },
    {
        "title": "Clinically-Proven Therapy",
        "description": "Our virtual program integrates cognitive and behavioral therapy with independent skill practice, all proven effective for a wide range of symptoms, helping you improve and maintain your mental health."
    },
    {
        "title": "Crisis Care",
        "description": "Introducing a groundbreaking program for individuals at elevated risk of suicide, Crisis Care follows the Collaborative Assessment and Management of Suicidality (CAMS) framework—a care model supported by over 30 years of research."
    }
]
const work = [
    {
        "title": "1:1 Video Calling Session",
        "description": "Connect directly with a licensed mental health professional for personalized support through private video sessions. Share your concerns in a safe, confidential environment tailored to your specific needs."
    },
    {
        "title": "Group Therapy Sessions",
        "description": "Join a supportive community in our group therapy sessions, where you can share your experiences and receive guidance alongside others facing similar challenges. These sessions foster a sense of belonging and mutual understanding."
    },
    {
        "title": "Mindfulness and Meditation Workshops",
        "description": "Attend virtual mindfulness and meditation workshops designed to help you manage stress, anxiety, and improve overall well-being. Learn techniques that promote relaxation and emotional balance."
    }
];

const user=[
    {
        "name":"John Doe",
        "description":"Pehle me bhaut gareeb tha ab me bhaut ameer hu",
    },
    {
        "name":"John Doe",
        "description":"Pehle me bhaut gareeb tha ab me bhaut ameer hu",
    },
    {
        "name":"John Doe",
        "description":"Pehle me bhaut gareeb tha ab me bhaut ameer hu",
    },
    {
        "name":"John Doe",
        "description":"Pehle me bhaut gareeb tha ab me bhaut ameer hu",
    },
    {
        "name":"John Doe",
        "description":"Pehle me bhaut gareeb tha ab me bhaut ameer hu",
    },
    {
        "name":"John Doe",
        "description":"Pehle me bhaut gareeb tha ab me bhaut ameer hu",
    },
]

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

        const userName = document.createElement('h5');
        userName.className = 'card-title';
        userName.textContent = item.name;

        const userDescription = document.createElement('p');
        userDescription.className = 'card-text';
        userDescription.textContent = item.description;

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







