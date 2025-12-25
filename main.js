const toggleBtn = document.getElementById('themeToggle');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-mode');
  toggleBtn.textContent = '☀️';
}

// Toggle theme with animation
toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.add('rotate');

  body.classList.toggle('light-mode');

  if (body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'light');
    toggleBtn.textContent = '☀️';
  } else {
    localStorage.setItem('theme', 'dark');
    toggleBtn.textContent = '🌙';
  }

  // Remove animation class after it finishes
  setTimeout(() => {
    toggleBtn.classList.remove('rotate');
  }, 400);
});

