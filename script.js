const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(30px)";
});

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
      card.style.transition = "0.6s ease";
    }
  });
});