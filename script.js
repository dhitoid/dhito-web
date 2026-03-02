document.addEventListener("DOMContentLoaded", () => {

  /* ============================= */
  /* MAGNETIC BUTTON (SAFE) */
  /* ============================= */

  const buttons = document.querySelectorAll(".btn-primary");

  buttons.forEach(btn => {

    // disable on touch device
    if (window.matchMedia("(pointer: coarse)").matches) return;

    btn.addEventListener("mousemove", e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translate(0,0)";
    });
  });

  /* ============================= */
  /* CURSOR GLOW (SAFE CHECK) */
  /* ============================= */

  const glow = document.querySelector(".cursor-glow");

  if (glow && !window.matchMedia("(pointer: coarse)").matches) {

    window.addEventListener("mousemove", e => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    });

  }

  /* ============================= */
  /* NAVBAR SCROLL EFFECT */
  /* ============================= */

  const navbar = document.querySelector(".navbar");

  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  /* ============================= */
  /* SCROLL REVEAL (STABLE DELAY) */
  /* ============================= */

  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el, i) => {
    el.dataset.delay = i;
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay;
        entry.target.style.transitionDelay = `${delay * 0.08}s`;
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  reveals.forEach(el => revealObserver.observe(el));

  /* ============================= */
  /* STAGGER LETTER SPLIT */
  /* ============================= */

  const staggerElements = document.querySelectorAll(".stagger-text");

  staggerElements.forEach(el => {

    const text = el.textContent.trim();
    el.textContent = "";

    [...text].forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.transitionDelay = `${i * 0.025}s`;
      el.appendChild(span);
    });

  });

  /* ============================= */
  /* STAGGER TRIGGER ON SCROLL */
  /* ============================= */

  const staggerObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  staggerElements.forEach(el => {
    staggerObserver.observe(el);
  });

  /* ============================= */
  /* SMOOTH SCROLL OFFSET FIX */
  /* ============================= */

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

      const target = document.querySelector(this.getAttribute("href"));
      if (!target) return;

      e.preventDefault();

      const offset = 80;
      const topPosition = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: topPosition,
        behavior: "smooth"
      });

    });

  });

});