const hamburgerBackground = document.querySelector('.hamburgerBackground');
const hamburgerList = document.querySelector('.hamburgerList');
const hamburgerItem = document.querySelector('.hamburgerItem');
const cardContainer = document.querySelector('.cardContainer');

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

const card1 = `<div class=" border-secondary border shadow-lg max-w-[275px] flex flex-col items-center pt-3 rounded-lg bg-secondary mr-0">
    <h4 h4 class="text-[1.5rem] font-semibold text-white" > Standard</h4 >
    <p class="text-white font-thin">It’s time for a change!</p>
    <div class="bg-white w-full py-3 px-9 flex flex-col gap-4 rounded-b-md">
        <h5 class="font-bold">Included</h5>
        <ul class="list-disc">
            <li>The best Stuff!</li>
            <li>Some other stuff</li>
            <li>Even better stuff!</li>
            <li>Even better things!</li>
        </ul>
        <div class="self-center flex flex-col gap-2 items-center">
            <p class="font-semibold">$199/month</p>
            <button class="w-[120px] h-[35px] bg-accent rounded-sm font-bold">Subscribe</button>
        </div>
    </div>
</div>`;

const card2 = `<div
    class="lg:w-1/3 border-secondary border w-full shadow-lg max-w-[275px] flex flex-col items-center gap-5 pt-3 rounded-lg bg-white lg:absolute lg:z-10 lg:left-[33%] lg:bottom-[5%] order-0"
>
    <h4 class="text-[1.5rem] font-semibold">Premium</h4>
    <p class="font-thin">It’s time for a change!</p>
    <div class="bg-secondary w-full py-3 px-9 flex flex-col gap-4 rounded-b-md">
        <h5 class="text-white font-bold">Included</h5>
        <ul class="list-disc text-white">
            <li>The best Stuff!</li>
            <li>Some other stuff</li>
            <li>Even better stuff!</li>
            <li>Even better things!</li>
        </ul>
        <div class="self-center flex flex-col gap-2 items-center">
            <p class="font-semibold text-white">$199/month</p>
            <button class="w-[120px] h-[35px] bg-accent rounded-sm font-bold">Subscribe</button>
        </div>
    </div>
</div>`;

const card3 = `<div class="lg:w-1/3 border-secondary border w-full shadow-lg max-w-[275px] flex flex-col items-center gap-5 pt-3 rounded-lg bg-secondary order-3">
    <h4 class="text-[1.5rem] font-semibold text-white">FREE</h4>
    <p class="text-white font-thin">It’s time for a change!</p>
    <div class="bg-white w-full py-3 px-9 flex flex-col gap-4 rounded-b-md">
        <h5 class="font-bold">Included</h5>
        <ul class="list-disc">
            <li>The best Stuff!</li>
            <li>Some other stuff</li>
            <li>Even better stuff!</li>
            <li>Even better things!</li>
        </ul>
        <div class="self-center flex flex-col gap-2 items-center">
            <p class="font-semibold">$199/month</p>
            <button class="w-[120px] h-[35px] bg-accent rounded-sm font-bold">Subscribe</button>
        </div>
    </div>
</div>`;

cardContainer.innerHTML = card1;