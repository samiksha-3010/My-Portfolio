//  *****************toogle icon navbar************

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
};



let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        if (top >= offset && top < offset + height) {
            navLinks.forEach.apply(link => {
                link.classList.remove("active");
            });
            document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
        }
    });
};


      // ************* sticky Navbar *************
      let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 100);
});




window.onscroll = () => {
    // Your scroll-related code here
};

// Move these lines outside of the window.onscroll event listener
menuIcon.classList.remove("fa-xmark");
navbar.classList.remove('active');


//  *************************scrool reveal**************************
ScrollReveal({
      distance:"80px",
      duration: 2000,
      dealy: 200,
});
ScrollReveal().reveal('.home-content,heading ',{ origin:"top" });
ScrollReveal().reveal('.home-img, .serivce-content,.portfolio-box,.contact form',{ origin:"button" });
ScrollReveal().reveal('.home-content h1, .about-img', { origin:"left" });
ScrollReveal().reveal('.home-content p,.about-content' , { origin:"right" });

// ******************typed js***************

const typed = new Typed(".multiple-text",{
      strings:["FullStack Web devloper","Frontend devloper","Backend devloper"],
      typeSpeed:70,
      backSpeed:70,
      backDelay:1000,
      loop:true
});


