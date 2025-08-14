// Simple JS example: scroll to services on Learn More click
document.getElementById('learnMoreBtn').addEventListener('click', () => {
  document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
});

// Scroll to contact on Contact Us click
document.getElementById('contactBtn').addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});
