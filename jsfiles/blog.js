import { blog } from './dummyData.js';

const blogCardsContainer = document.getElementById('blogCards');

blog.forEach(post => {
    const card = document.createElement('div');
    card.className = 'col-lg-4 col-md-6 col-sm-12 mb-4';
    card.innerHTML = `
        <div class="card">
            <img class="card-img-top" src="${post.image}" alt="${post.title}">
            <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${post.description}</p>
            </div>
        </div>
    `;
    blogCardsContainer.appendChild(card);
});
