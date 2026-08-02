/*=========================================
MENU TOGGLE
=========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

});


/*=========================================
CLOSE MENU AFTER CLICK
=========================================*/

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


/*=========================================
STICKY HEADER
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


/*=========================================
BACK TO TOP BUTTON
=========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*=========================================
SMOOTH ACTIVE NAVBAR
=========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});v/*=========================================
SCROLL REVEAL ANIMATION
=========================================*/

const revealItems = document.querySelectorAll(
".about,.services,.why,.portfolio,.skills,.contact,.service-card,.skill-card,.portfolio-card,.why-card,.info-box"
);

function revealOnScroll(){

    revealItems.forEach(item=>{

        const windowHeight = window.innerHeight;

        const revealTop = item.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();


/*=========================================
HERO IMAGE PARALLAX
=========================================*/

const heroImage = document.querySelector(".image-wrapper img");

window.addEventListener("mousemove",(e)=>{

    if(!heroImage) return;

    const x=(window.innerWidth/2-e.pageX)/45;
    const y=(window.innerHeight/2-e.pageY)/45;

    heroImage.style.transform=
    `translate(${x}px,${y}px)`;

});


/*=========================================
BUTTON HOVER GLOW
=========================================*/

document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.boxShadow="0 0 25px rgba(212,175,55,.55)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.boxShadow="none";

    });

});


/*=========================================
PORTFOLIO VIDEO PAUSE
=========================================*/

const videos=document.querySelectorAll("video");

videos.forEach(video=>{

video.addEventListener("play",()=>{

videos.forEach(v=>{

if(v!==video){

v.pause();

}

});

});

});


/*=========================================
CURRENT YEAR
=========================================*/

const year=document.querySelector(".year");

if(year){

year.textContent=new Date().getFullYear();

}


/*=========================================
PRELOADER REMOVE
=========================================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


/*=========================================
CONSOLE MESSAGE ❤️
=========================================*/

console.clear();

console.log("%cPalwasha Mir Portfolio",
"color:#D4AF37;font-size:22px;font-weight:bold;");

console.log("%cDesigned & Developed with ❤️",
"color:#3B82F6;font-size:15px;");
