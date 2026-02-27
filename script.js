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

const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");

let index = 0;

function showSlide(i) {
  slides.style.transform = `translateX(-${i * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[i].classList.add("active");
}

function nextSlide() {
  index++;
  if (index >= dots.length) {
    index = 0;
  }
  showSlide(index);
}

setInterval(nextSlide, 4000);