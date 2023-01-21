const gsapAnimation = document.querySelectorAll('.gsap-animation');
const animationBox = document.querySelectorAll('.animation-box');
const aboutImages = document.querySelectorAll('.about-images');

gsap.registerPlugin(ScrollTrigger);

const abouts = gsap.utils.toArray(gsapAnimation);

abouts.forEach(about => {
    gsap.from(about, {
        x: -100, stagger: 0.5, opacity: 0, duration: 1, ease: "power2.inOut",
        scrollTrigger: {
            trigger: about,
            start: "center 60%",
            toggleActions: "play none none none",
        }
    })
});

const aboutImagesFade = gsap.utils.toArray(aboutImages);

aboutImagesFade.forEach(image => {
    gsap.from(image, {
        opacity: 0.9, duration: 1, ease: "power2.inOut",
        scrollTrigger: {
            trigger: image,
            start: "center 70%",
            toggleActions: "play none none none",
        }
    })
});