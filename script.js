// =============================
// BRANDY DESIGNS SCRIPT
// =============================

// Loader

window.addEventListener("load", () => {

const loader = document.querySelector(".loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

}, 1800);

});

// Sticky Navbar

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

if (window.scrollY > 50) {

header.style.background = "rgba(0,0,0,.92)";

header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

} else {

header.style.background = "rgba(0,0,0,.75)";

header.style.boxShadow = "none";

}

});

// Scroll Progress Bar

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

const scroll = document.documentElement.scrollTop;

const height =

document.documentElement.scrollHeight -

document.documentElement.clientHeight;

const progress = (scroll / height) * 100;

progressBar.style.width = progress + "%";

});

// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

navLinks.classList.toggle("show");

});

// Back To Top

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

if (window.scrollY > 500) {

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

// Scroll Animation

const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

}, {

threshold: 0.2

});

document.querySelectorAll("section").forEach((section) => {

section.classList.add("hidden");

observer.observe(section);

});

// Active Navbar Link

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach((section) => {

const sectionTop = section.offsetTop - 120;

if (pageYOffset >= sectionTop) {

current = section.getAttribute("id");

}

});

navItems.forEach((link) => {

link.classList.remove("active");

if (link.getAttribute("href") === "#" + current) {

link.classList.add("active");

}

});

});

// Hero Image Floating Effect

const heroImage = document.querySelector(".hero-image img");

setInterval(() => {

heroImage.animate([

{

transform: "translateY(0px)"

},

{

transform: "translateY(-12px)"

},

{

transform: "translateY(0px)"

}

], {

duration: 3000,

iterations: 1

});

}, 3000);

// Console Message

console.log("%cBrandy Designs", "font-size:24px;color:gold;font-weight:bold;");

console.log("Designed by Palwasha Mir");
