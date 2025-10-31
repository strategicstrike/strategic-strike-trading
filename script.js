// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Countdown Timer (7 May 2026)
const countdown = document.getElementById("countdown");
const targetDate = new Date("May 7, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdown.textContent = "Batch Started!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  countdown.textContent = `${days} Days ${hours} Hrs ${minutes} Min`;
}, 60000);
