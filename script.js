document.addEventListener("DOMContentLoaded", () => {

  /* ===== NAVBAR SCROLL EFFECT ===== */
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  /* ===== SCROLL REVEAL (INTERSECTION OBSERVER) ===== */
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, {
    threshold: 0.15
  });

  revealElements.forEach(el => observer.observe(el));

  /* ===== SMOOTH SCROLL ===== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (!target) return;

      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
    });
  });

});