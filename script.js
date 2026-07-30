// ===========================
// Brandy Portfolio Script
// ===========================

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Navbar background on scroll
window.addEventListener("scroll", function () {

  const header = document.querySelector("header");

  if(window.scrollY > 80){
      header.style.background = "#000";
      header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";
  }else{
      header.style.background = "rgba(0,0,0,.85)";
      header.style.boxShadow = "none";
  }

});

// Fade-in animation
const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach((section)=>{

section.classList.add("hidden");

observer.observe(section);

});

// Typing effect
const roles=[
"Creative Web Designer",
"Frontend Developer",
"UI / UX Designer",
"Brand Identity Designer"
];

let roleIndex=0;
let charIndex=0;

const heading=document.querySelector(".hero-text h2");

function typeRole(){

if(!heading) return;

if(charIndex<roles[roleIndex].length){

heading.textContent+=roles[roleIndex].charAt(charIndex);

charIndex++;

setTimeout(typeRole,80);

}else{

setTimeout(eraseRole,1800);

}

}

function eraseRole(){

if(charIndex>0){

heading.textContent=roles[roleIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(eraseRole,40);

}else{

roleIndex++;

if(roleIndex>=roles.length){

roleIndex=0;

}

setTimeout(typeRole,300);

}

}

window.onload=()=>{

if(heading){

heading.textContent="";

typeRole();

}

};
