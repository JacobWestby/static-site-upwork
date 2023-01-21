const hamburgerBackground = document.querySelector('.hamburgerBackground');
const hamburgerList = document.querySelector('.hamburgerList');
const hamburgerItem = document.querySelector('.hamburgerItem');

let liItem1 = document.createElement('a');
let liItem2 = document.createElement('a');
let liItem3 = document.createElement('a');

liItem1.textContent = 'Subscriptions';
liItem2.textContent = 'About us';
liItem3.textContent = 'Contact us';

liItem1.href = "/public/pages/subscriptions.html";
liItem2.href = '/public/pages/about.html';
liItem3.href = '/public/pages/contact.html';

let burgerClick = false;

hamburgerBackground.addEventListener('click', () => {
    if (!burgerClick) {
        burgerClick = true;
        hamburgerBackground.style.backgroundImage = 'url(/src/images/exit.svg)';

        hamburgerList.classList.remove('hidden');
        hamburgerList.classList.add('flex');

        hamburgerList.appendChild(liItem1);
        hamburgerList.appendChild(liItem2);
        hamburgerList.appendChild(liItem3);
    } else {
        burgerClick = false;
        hamburgerBackground.style.backgroundImage = 'url(/src/images/hamburger.svg)';

        hamburgerList.classList.remove('flex');
        hamburgerList.classList.add('hidden');

        hamburgerList.removeChild(liItem1);
        hamburgerList.removeChild(liItem2);
        hamburgerList.removeChild(liItem3);
    }
});