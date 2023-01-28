const cardContainer = document.querySelector('.cardContainer');
const arrowForward = document.querySelector('.arrowForward');
const arrowBackward = document.querySelector('.arrowBackward');
const aboutSubscriptionText = document.querySelector('.aboutSubscription');

const card1 = `<div class="subCards border-secondary border shadow-lg max-w-[275px] w-full flex flex-col items-center gap-5 pt-3 rounded-lg bg-secondary">
<h4 h4 class="text-[1.5rem] font-semibold text-white" > Standard</h4 >
<p class="text-white font-thin">It’s time for a change!</p>
<div class="bg-white w-full py-3 flex flex-col  gap-4 rounded-b-md items-center" style="padding: 20px 35px">
    <h5 class=" w-fit font-bold">Included</h5>
    <ul class=" self-start w-fit list-none">
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

const card2 = `<div class="subCards border-secondary border shadow-lg max-w-[275px] w-full flex flex-col items-center gap-5 pt-3 rounded-lg bg-white">
<h4 class="text-[1.5rem] font-semibold">Premium</h4>
<p class="font-thin">It’s time for a change!</p>
<div class="bg-secondary w-full py-3 flex flex-col gap-4 rounded-b-md items-center" style="padding: 20px 35px">
    <h5 class=" w-fit  text-white font-bold">Included</h5>
    <ul class=" self-start w-fit list-none text-white">
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

const card3 = `<div class="subCards border-secondary border shadow-lg max-w-[275px] w-full flex flex-col items-center gap-5 pt-3 rounded-lg bg-secondary">
<h4 class="text-[1.5rem] font-semibold text-white">FREE</h4>
<p class="text-white font-thin">It’s time for a change!</p>
<div class="bg-white w-full py-3 flex flex-col  gap-4 rounded-b-md items-center" style="padding: 20px 35px">
    <h5 class=" w-fit  font-bold">Included</h5>
    <ul class=" self-start w-fit list-none">
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

const subText1 = `This plan offers the most value and goodies, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum mollis pulvinar. Sed accumsan vitae massa sed cursus. In quis
<br />
<br />
It’s also the most popular plan!
<br />
<br />
Sign up now and get 1 free month!`

const subText2 = `This is the best plan u can get! and more!, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum mollis pulvinar. Sed accumsan vitae massa sed cursus. In quis
<br />
<br />
It’s also the most popular plan!
<br />
<br />
Sign up now and get 1 free month!`

const subText3 = `This plan is free and offers nothing cool, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum mollis pulvinar. Sed accumsan vitae massa sed cursus. In quis
<br />
<br />
It’s also the most popular plan!
<br />
<br />
Sign up now and get 1 free month!`


const cardList = [card2, card1, card3];
const subTextList = [subText1, subText2, subText3];

let cardIndex = 0;

cardContainer.innerHTML = cardList[cardIndex];
aboutSubscriptionText.innerHTML = subTextList[cardIndex];

arrowForward.addEventListener('click', () => {
    if (cardIndex >= 2) {
        cardIndex = 0
        cardContainer.innerHTML = cardList[cardIndex];

        aboutSubscriptionText.innerHTML = subTextList[cardIndex];
    } else {
        cardIndex++
        cardContainer.innerHTML = cardList[cardIndex];

        aboutSubscriptionText.innerHTML = subTextList[cardIndex];
    }
});

arrowBackward.addEventListener('click', () => {
    if (cardIndex >= 2 || cardIndex < 0) {
        cardIndex = 0
        cardContainer.innerHTML = cardList[cardIndex];

        aboutSubscriptionText.innerHTML = subTextList[cardIndex];
    } else {
        cardIndex++
        cardContainer.innerHTML = cardList[cardIndex];

        aboutSubscriptionText.innerHTML = subTextList[cardIndex];
    }
});
