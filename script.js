// ==========================================
// BRANDY DESIGNS v2.0
// Premium Portfolio Script
// ==========================================

// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1800);
});

// Cursor Glow
const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// Sticky Header
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(5,5,5,.90)";
        header.style.boxShadow = "0 15px 40px rgba(0,0,0,.45)";

    } else {

        header.style.background = "rgba(5,5,5,.65)";
        header.style.boxShadow = "none";

    }

});

// Scroll Progress Bar
const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});

// Close Menu After Click
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

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

// Reveal Animation
const revealElements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});

revealElements.forEach((section) => {

    section.style.opacity = "0";
    section.style.transform = "translateY(70px)";
    section.style.transition = ".8s ease";

    observer.observe(section);

});

// Floating Hero Image
const heroImage = document.querySelector(".image-wrapper img");

if (heroImage) {

    setInterval(() => {

        heroImage.animate(

            [
                { transform: "translateY(0px)" },
                { transform: "translateY(-12px)" },
                { transform: "translateY(0px)" }
            ],

            {
                duration: 3000,
                iterations: 1
            }

        );

    }, 3000);

}

// Active Navigation
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// Console Message
console.log("%cBrandy Designs",
"font-size:28px;color:#D4AF37;font-weight:bold;");

console.log("Designed by Palwasha Mir");
