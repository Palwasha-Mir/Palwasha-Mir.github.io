/*=========================================
 PREMIUM JAVASCRIPT
=========================================*/

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});


/*=========================================
 STICKY HEADER
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>60){

        header.style.background="rgba(5,7,13,.95)";
        header.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

    }else{

        header.style.background="rgba(5,7,13,.75)";
        header.style.boxShadow="none";

    }

});


/*=========================================
 BACK TO TOP BUTTON
=========================================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="flex";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=========================================
 ACTIVE MENU
=========================================*/

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });
    /*=========================================
 SCROLL REVEAL ANIMATION
=========================================*/

const revealElements = document.querySelectorAll(
".service-card,.portfolio-card,.skill-card,.about-content,.about-image,.contact-box,.section-header,.hero-content,.image-wrapper"
);

const revealOnScroll = () => {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;
        const top = el.getBoundingClientRect().top;

        if(top < windowHeight - 100){

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

};

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


/*=========================================
 CARD TILT EFFECT
=========================================*/

const cards = document.querySelectorAll(
".service-card,.portfolio-card,.skill-card"
);

cards.forEach(card => {

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width)-0.5)*16;
        const rotateX = ((y / rect.height)-0.5)*-16;

        card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0)";

    });

});


/*=========================================
 VIDEO HOVER PLAY
=========================================*/

const videos = document.querySelectorAll("video");

videos.forEach(video=>{

    video.addEventListener("mouseenter",()=>{

        video.play();

    });

    video.addEventListener("mouseleave",()=>{

        video.pause();
        video.currentTime = 0;

    });

});
    /*=========================================
 PREMIUM MOUSE GLOW
=========================================*/

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "250px";
glow.style.height = "250px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.zIndex = "9999";
glow.style.background =
"radial-gradient(circle, rgba(59,130,246,.18), transparent 70%)";
glow.style.filter = "blur(30px)";
glow.style.transition = "transform .08s linear";

document.body.appendChild(glow);

document.addEventListener("mousemove", e => {

    glow.style.left = (e.clientX - 125) + "px";
    glow.style.top = (e.clientY - 125) + "px";

});


/*=========================================
 BUTTON RIPPLE EFFECT
=========================================*/

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.position="absolute";
ripple.style.borderRadius="50%";
ripple.style.background="rgba(255,255,255,.35)";
ripple.style.pointerEvents="none";

ripple.style.left=(e.clientX-rect.left-size/2)+"px";
ripple.style.top=(e.clientY-rect.top-size/2)+"px";

ripple.style.transform="scale(0)";
ripple.style.transition=".6s";

this.appendChild(ripple);

requestAnimationFrame(()=>{

ripple.style.transform="scale(4)";
ripple.style.opacity="0";

});

setTimeout(()=>{

ripple.remove();

},600);

});

});


/*=========================================
 FLOATING PARTICLES
=========================================*/

for(let i=0;i<20;i++){

const particle=document.createElement("div");

particle.style.position="fixed";
particle.style.width="5px";
particle.style.height="5px";
particle.style.borderRadius="50%";
particle.style.background="rgba(255,255,255,.25)";
particle.style.left=Math.random()*100+"vw";
particle.style.top=Math.random()*100+"vh";
particle.style.pointerEvents="none";
particle.style.zIndex="-1";

particle.style.animation=
`particle ${6+Math.random()*8}s linear infinite`;

document.body.appendChild(particle);

}


/*=========================================
 PARTICLE KEYFRAMES
=========================================*/

const style=document.createElement("style");

style.innerHTML=`

@keyframes particle{

0%{

transform:translateY(0);

opacity:0;

}

20%{

opacity:1;

}

100%{

transform:translateY(-300px);

opacity:0;

}

}

`;

document.head.appendChild(style);
    /*=========================================
 PREMIUM LOADER
=========================================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


/*=========================================
 SCROLL PROGRESS BAR
=========================================*/

const progress=document.createElement("div");

progress.style.position="fixed";
progress.style.top="0";
progress.style.left="0";
progress.style.height="4px";
progress.style.background="linear-gradient(90deg,#3B82F6,#8B5CF6,#10B981)";
progress.style.zIndex="99999";
progress.style.width="0%";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const percent=(scrollTop/height)*100;

progress.style.width=percent+"%";

});


/*=========================================
 MAGNETIC BUTTON EFFECT
=========================================*/

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect=btn.getBoundingClientRect();

const x=e.clientX-rect.left-rect.width/2;

const y=e.clientY-rect.top-rect.height/2;

btn.style.transform=`translate(${x*0.15}px,${y*0.15}px)`;

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translate(0,0)";

});

});


/*=========================================
 IMAGE PARALLAX
=========================================*/

window.addEventListener("scroll",()=>{

const images=document.querySelectorAll(".hero img,.about img");

const value=window.scrollY*0.08;

images.forEach(img=>{

img.style.transform=`translateY(${value}px)`;

});

});


/*=========================================
 RANDOM GLOW COLOR
=========================================*/

const colors=[
"#3B82F6",
"#8B5CF6",
"#10B981",
"#D4AF37",
"#22D3EE"
];

setInterval(()=>{

const glow=document.querySelector("body div");

if(glow){

glow.style.background=
`radial-gradient(circle,${colors[Math.floor(Math.random()*colors.length)]}33,transparent 70%)`;

}

},3000);


/*=========================================
 CONSOLE MESSAGE
=========================================*/

console.log("%c✨ Website Designed By Palwasha Mir","color:#3B82F6;font-size:18px;font-weight:bold;");

});
