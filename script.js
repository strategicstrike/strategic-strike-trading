document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for contacting Strategic Strike! We'll reach out soon.");
  this.reset();
});
