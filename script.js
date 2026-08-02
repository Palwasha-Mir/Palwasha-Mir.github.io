/*=====================================================
 PALWASHA MIR - FINAL SCRIPT
 Part 1
======================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================
      STICKY HEADER
    =========================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }

    });

    /*=========================
      ACTIVE NAV LINK
    =========================*/

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }

        });

    });

    /*=========================
      BACK TO TOP
    =========================*/

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

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

    /*=========================
      SCROLL REVEAL
    =========================*/

    const revealItems = document.querySelectorAll(

        ".service-card,.portfolio-card,.skill-card,.why-card,.contact-box,.about-image,.about-content"

    );

    const reveal = () => {

        revealItems.forEach(item => {

            const top = item.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {

                item.classList.add("fade-up");

            }

        });

    };

    window.addEventListener("scroll", reveal);

    reveal();

});/*=====================================================
 PALWASHA MIR - FINAL SCRIPT
 Part 2
======================================================*/

/*=============
SCROLL PROGRESS BAR
==============*/

const progress = document.createElement("div");

progress.id = "progressBar";

document.body.appendChild(progress);

Object.assign(progress.style,{

position:"fixed",
top:"0",
left:"0",
width:"0%",
height:"4px",
background:"linear-gradient(90deg,#4F8CFF,#D4AF37)",
zIndex:"99999",
transition:"width .15s linear"

});

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const progressValue=(window.pageYOffset/total)*100;

progress.style.width=progressValue+"%";

});


/*=============
BUTTON RIPPLE EFFECT
==============*/

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.position="absolute";
ripple.style.left=(e.clientX-rect.left-size/2)+"px";
ripple.style.top=(e.clientY-rect.top-size/2)+"px";

ripple.style.borderRadius="50%";
ripple.style.background="rgba(255,255,255,.35)";
ripple.style.transform="scale(0)";
ripple.style.pointerEvents="none";
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


/*=============
CARD HOVER EFFECT
==============*/

document.querySelectorAll(".service-card,.portfolio-card,.skill-card,.why-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


/*=============
IMAGE FLOAT
==============*/

document.querySelectorAll(".image-wrapper img").forEach(img=>{

let direction=1;

setInterval(()=>{

img.style.transform=`translateY(${direction*8}px)`;

direction*=-1;

},2500);

});


/*=============
CONSOLE MESSAGE
==============*/

console.clear();

console.log("%cPalwasha Mir Portfolio","color:#D4AF37;font-size:18px;font-weight:bold;");
console.log("%cWebsite Loaded Successfully","color:#4F8CFF;font-size:14px;");
