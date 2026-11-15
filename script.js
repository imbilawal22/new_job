// Minimalist Daily AI News - Interactive Functionality

document.addEventListener('DOMContentLoaded', () => {
  // 1. Live Current Date
  const dateElement = document.getElementById('currentDate');
  const yearElement = document.getElementById('currentYear');
  
  const today = new Date();
  const dateOptions = { weekday: 'short', month: 'short', day: 'numeric' };
  if (dateElement) {
    dateElement.textContent = `Today: ${today.toLocaleDateString('en-US', dateOptions)}`;
  }
  if (yearElement) {
    yearElement.textContent = today.getFullYear();
  }

  // 2. Dark / Light Theme Toggle
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('ai-news-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else if (prefersDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  themeToggle?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('ai-news-theme', newTheme);
  });

  // 3. Category Filter Tabs Click Interaction
  const filterPills = document.querySelectorAll('.filter-pill');
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  // 4. Newsletter / Notification Subscription Form
  const notifyForm = document.getElementById('notifyForm');
  const emailInput = document.getElementById('emailInput');
  const formFeedback = document.getElementById('formFeedback');

  notifyForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (email && email.includes('@')) {
      formFeedback.textContent = '✓ Shukriya! Daily AI briefing publish hote hi aapko notify kar diya jayega.';
      formFeedback.className = 'form-feedback success';
      emailInput.value = '';

      setTimeout(() => {
        formFeedback.textContent = '';
      }, 5000);
    } else {
      formFeedback.textContent = 'Barahe karam durust email address darj karein.';
      formFeedback.className = 'form-feedback error';
    }
  });

  // 5. Simple Modal / Alert for About & Privacy links
  const aboutTrigger = document.getElementById('aboutTrigger');
  const privacyTrigger = document.getElementById('privacyTrigger');

  aboutTrigger?.addEventListener('click', (e) => {
    e.preventDefault();
    alert('AI Daily News is a minimalist platform dedicated to tracking breaking artificial intelligence news, foundational models, LLM benchmarks, and research papers without any fluff.');
  });

  privacyTrigger?.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Privacy First: We do not track personal cookies or sell your data. Subscribed emails are only used for daily digest updates.');
  });
});
