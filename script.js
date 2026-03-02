document.addEventListener("DOMContentLoaded", () => {
  
  /* ===== MAGNETIC BUTTON ===== */

const buttons = document.querySelectorAll(".btn-primary");

buttons.forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });
});

/* ===== CURSOR GLOW ===== */

const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

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
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if(entry.isIntersecting){
      entry.target.style.transitionDelay = `${index * 0.1}s`;
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
},{
  threshold: 0.15
});

reveals.forEach(el => {
  observer.observe(el);
});

/* ============================= */
/* TEXT STAGGER LETTER SPLIT */
/* ============================= */

document.querySelectorAll(".stagger-text").forEach(el => {

  const text = el.textContent;
  el.textContent = "";

  [...text].forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.transitionDelay = `${i * 0.03}s`;
    el.appendChild(span);
  });

  // Trigger animation after small delay
  setTimeout(() => {
    el.classList.add("revealed");
  }, 200);

});

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