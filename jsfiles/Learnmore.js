import { condition } from "./dummyData.js";

function createdondtion() {
    const projectsContainer = document.getElementById('learnmorecondition');
    projectsContainer.innerHTML = '';

    condition.forEach(item => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-lg-3 col-md-6 col-sm-12 mb-4';

        const card = document.createElement('div');
        card.className = 'card';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const userTitle = document.createElement('h5');
        userTitle.className = 'card-title';
        userTitle.textContent = item.title;

        const userDescription = document.createElement('p');
        userDescription.className = 'card-text';
        userDescription.textContent = item.description;

        cardBody.appendChild(userTitle);
        cardBody.appendChild(userDescription);
        card.appendChild(cardBody);
        colDiv.appendChild(card);
        projectsContainer.appendChild(colDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createdondtion();
});
