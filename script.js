// Simple fade-in animation when scrolling
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
});

// Initial setup
sections.forEach(sec => {
  sec.style.opacity = "0";
  sec.style.transform = "translateY(30px)";
  sec.style.transition = "all 0.8s ease-out";
});
