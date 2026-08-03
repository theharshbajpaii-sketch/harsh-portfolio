// Navbar shadow on scroll

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    navbar.style.boxShadow =
      "0 10px 30px rgba(0, 0, 0, 0.4)";

  } else {

    navbar.style.boxShadow = "none";

  }

});


// Fade-in animation

const sections = document.querySelectorAll(
  ".section, .skills, .contact"
);

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";

        entry.target.style.transform =
          "translateY(0)";

      }

    });

  },

  {
    threshold: 0.12
  }

);


sections.forEach((section) => {

  section.style.opacity = "0";

  section.style.transform =
    "translateY(35px)";

  section.style.transition =
    "0.8s ease";

  observer.observe(section);

});