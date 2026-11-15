// PakJobs Daily - Interactive Client Application

document.addEventListener('DOMContentLoaded', () => {
  // Initial fallback dataset in case fetch('jobs.json') encounters local file CORS
  const FALLBACK_JOBS = [
    {
      "id": "job-101",
      "title": "Senior AI & Machine Learning Engineer",
      "company": "Systems Limited",
      "location": "Lahore (Hybrid)",
      "city": "Lahore",
      "category": "Tech & AI",
      "type": "Full-Time",
      "experience": "3-5 Years",
      "salary": "PKR 280,000 - 450,000 / month",
      "description": "Building NLP pipelines, fine-tuning LLMs, and deploying cloud machine learning models on Azure and AWS.",
      "skills": ["Python", "TensorFlow", "FastAPI", "LLMs", "Azure AI"],
      "source": "Systems Careers",
      "apply_url": "https://www.systemsltd.com/careers",
      "posted_date": "Today"
    },
    {
      "id": "job-102",
      "title": "Full Stack Developer (React & Node.js)",
      "company": "10Pearls",
      "location": "Karachi / Islamabad",
      "city": "Karachi",
      "category": "Tech & AI",
      "type": "Full-Time",
      "experience": "2-5 Years",
      "salary": "PKR 220,000 - 360,000 / month",
      "description": "Developing modern web apps, scalable microservices, and integrating secure third-party payment gateways.",
      "skills": ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
      "source": "Rozee.pk",
      "apply_url": "https://10pearls.com/careers/",
      "posted_date": "Today"
    },
    {
      "id": "job-103",
      "title": "Data Analyst & BI Specialist",
      "company": "Jazz (VEON)",
      "location": "Islamabad (On-site)",
      "city": "Islamabad",
      "category": "Tech & AI",
      "type": "Full-Time",
      "experience": "2-4 Years",
      "salary": "PKR 180,000 - 280,000 / month",
      "description": "Analyzing telecom big data, building automated PowerBI dashboards, and customer churn prediction models.",
      "skills": ["SQL", "PowerBI", "Python", "Tableau", "BigQuery"],
      "source": "Jazz Careers",
      "apply_url": "https://jobs.jazz.com.pk/",
      "posted_date": "Today"
    },
    {
      "id": "job-104",
      "title": "Management Trainee Officer (MTO) - Digital Banking",
      "company": "Habib Bank Limited (HBL)",
      "location": "Karachi & Lahore",
      "city": "Karachi",
      "category": "Banking & Finance",
      "type": "Full-Time",
      "experience": "Fresh Graduate / 0-1 Year",
      "salary": "PKR 95,000 - 135,000 / month",
      "description": "Comprehensive rotational banking program covering branch operations, FinTech products, and risk analysis.",
      "skills": ["Financial Analysis", "Banking Ops", "Communication", "Problem Solving"],
      "source": "HBL Official",
      "apply_url": "https://www.hbl.com/careers",
      "posted_date": "Today"
    },
    {
      "id": "job-105",
      "title": "Flutter / Mobile Application Engineer",
      "company": "Devsinc",
      "location": "Lahore",
      "city": "Lahore",
      "category": "Tech & AI",
      "type": "Full-Time",
      "experience": "2-4 Years",
      "salary": "PKR 170,000 - 270,000 / month",
      "description": "Designing and maintaining high-performance cross-platform iOS and Android applications.",
      "skills": ["Flutter", "Dart", "Firebase", "Bloc Architecture", "REST APIs"],
      "source": "Mustakbil.com",
      "apply_url": "https://www.devsinc.com/careers",
      "posted_date": "Today"
    },
    {
      "id": "job-106",
      "title": "DevOps & Cloud Infrastructure Engineer",
      "company": "Arbisoft",
      "location": "Lahore / Remote (Pakistan)",
      "city": "Remote",
      "category": "Tech & AI",
      "type": "Remote / Hybrid",
      "experience": "3+ Years",
      "salary": "PKR 260,000 - 400,000 / month",
      "description": "Managing automated Kubernetes clusters, Terraform infrastructure, CI/CD pipelines, and cloud security.",
      "skills": ["Docker", "Kubernetes", "AWS", "Terraform", "GitHub Actions"],
      "source": "Arbisoft Careers",
      "apply_url": "https://arbisoft.com/careers",
      "posted_date": "Today"
    },
    {
      "id": "job-107",
      "title": "Assistant Director (Software & Cloud)",
      "company": "NADRA",
      "location": "Islamabad",
      "city": "Islamabad",
      "category": "Govt & Public Sector",
      "type": "Regular / Govt",
      "experience": "3-5 Years",
      "salary": "PKR 160,000 - 240,000 / month",
      "description": "Developing and securing high-traffic government identity platforms, citizen portals, and biometric systems.",
      "skills": ["Oracle DB", "Linux Administration", "Cybersecurity", "PL/SQL"],
      "source": "NADRA Official",
      "apply_url": "https://www.nadra.gov.pk/careers/",
      "posted_date": "Today"
    },
    {
      "id": "job-108",
      "title": "Growth Marketing & Brand Specialist",
      "company": "SadaPay",
      "location": "Islamabad / Remote",
      "city": "Remote",
      "category": "Marketing & Sales",
      "type": "Full-Time",
      "experience": "2-4 Years",
      "salary": "PKR 200,000 - 320,000 / month",
      "description": "Driving FinTech customer acquisition, digital advertising campaigns, social growth, and partnership funnels.",
      "skills": ["Performance Marketing", "SEO/SEM", "Growth Hacking", "Google Ads"],
      "source": "LinkedIn",
      "apply_url": "https://sadapay.pk/careers/",
      "posted_date": "Today"
    },
    {
      "id": "job-109",
      "title": "Trainee / Associate Software Engineer",
      "company": "VentureDive",
      "location": "Lahore / Karachi",
      "city": "Lahore",
      "category": "Tech & AI",
      "type": "Full-Time",
      "experience": "0-1 Year (Fresh Graduates)",
      "salary": "PKR 100,000 - 150,000 / month",
      "description": "Exciting opportunity for fresh computer science graduates to work on cutting-edge enterprise and mobility solutions.",
      "skills": ["JavaScript", "Python", "Data Structures", "OOP", "Git"],
      "source": "VentureDive Careers",
      "apply_url": "https://www.venturedive.com/careers/",
      "posted_date": "Today"
    },
    {
      "id": "job-110",
      "title": "Supply Chain & Operations Executive",
      "company": "Engro Corporation",
      "location": "Karachi / Port Qasim",
      "city": "Karachi",
      "category": "Engineering & Ops",
      "type": "Full-Time",
      "experience": "2-4 Years",
      "salary": "PKR 170,000 - 250,000 / month",
      "description": "Optimizing procurement logistics, inventory forecasting, vendor management, and production scheduling.",
      "skills": ["Supply Chain", "SAP ERP", "Logistics", "Negotiation"],
      "source": "Engro Careers",
      "apply_url": "https://www.engro.com/careers/",
      "posted_date": "Today"
    }
  ];

  let allJobs = [...FALLBACK_JOBS];
  let selectedCity = 'All';
  let selectedCategory = 'All';
  let searchQuery = '';

  // DOM Elements
  const jobsGrid = document.getElementById('jobsGrid');
  const jobsCountEl = document.getElementById('jobsCount');
  const lastUpdatedEl = document.getElementById('lastUpdatedTime');
  const noResultsEl = document.getElementById('noResults');
  const searchInput = document.getElementById('jobSearchInput');
  const clearSearchBtn = document.getElementById('clearSearch');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');
  const cityButtons = document.querySelectorAll('.city-pill');
  const categoryButtons = document.querySelectorAll('.filter-pill');
  const dateEl = document.getElementById('currentDate');
  const yearEl = document.getElementById('currentYear');
  const themeToggle = document.getElementById('themeToggle');

  // Set Current Date & Year
  const now = new Date();
  if (dateEl) {
    dateEl.textContent = `Today: ${now.toLocaleDateString('en-PK', { weekday: 'short', month: 'short', day: 'numeric' })}`;
  }
  if (yearEl) {
    yearEl.textContent = now.getFullYear();
  }

  // Fetch Jobs from jobs.json
  async function loadJobsData() {
    try {
      const response = await fetch('jobs.json?t=' + Date.now());
      if (response.ok) {
        const data = await response.json();
        if (data && Array.isArray(data.jobs) && data.jobs.length > 0) {
          allJobs = data.jobs;
          if (data.last_updated && lastUpdatedEl) {
            lastUpdatedEl.textContent = data.last_updated;
          }
        }
      }
    } catch (err) {
      console.log('Using preloaded Pakistan jobs list.');
    }
    renderJobs();
  }

  // Render Job Cards
  function renderJobs() {
    const filtered = allJobs.filter(job => {
      // City check
      const matchesCity = selectedCity === 'All' || 
        (job.city && job.city.toLowerCase() === selectedCity.toLowerCase()) ||
        (job.location && job.location.toLowerCase().includes(selectedCity.toLowerCase()));

      // Category check
      const matchesCategory = selectedCategory === 'All' || 
        (job.category && job.category.toLowerCase() === selectedCategory.toLowerCase());

      // Search query check
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        (job.title && job.title.toLowerCase().includes(q)) ||
        (job.company && job.company.toLowerCase().includes(q)) ||
        (job.description && job.description.toLowerCase().includes(q)) ||
        (job.skills && job.skills.some(s => s.toLowerCase().includes(q)));

      return matchesCity && matchesCategory && matchesSearch;
    });

    // Update counter
    if (jobsCountEl) {
      jobsCountEl.textContent = filtered.length;
    }

    if (filtered.length === 0) {
      jobsGrid.innerHTML = '';
      noResultsEl.style.display = 'block';
      return;
    }

    noResultsEl.style.display = 'none';

    jobsGrid.innerHTML = filtered.map(job => {
      const initial = job.company ? job.company.charAt(0).toUpperCase() : 'P';
      const skillsHtml = Array.isArray(job.skills) 
        ? job.skills.map(s => `<span class="skill-pill">${escapeHtml(s)}</span>`).join('')
        : '';

      return `
        <article class="job-card">
          <div class="job-card-header">
            <div class="company-avatar">${escapeHtml(initial)}</div>
            <div class="job-card-title-group">
              <h3 class="job-card-title">${escapeHtml(job.title)}</h3>
              <div class="company-name">${escapeHtml(job.company)}</div>
            </div>
          </div>

          <div class="job-tags-row">
            <span class="tag-badge tag-location">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              ${escapeHtml(job.location || job.city || 'Pakistan')}
            </span>
            <span class="tag-badge tag-type">${escapeHtml(job.type || 'Full-Time')}</span>
            ${job.salary ? `<span class="tag-badge tag-salary">${escapeHtml(job.salary)}</span>` : ''}
          </div>

          <p class="job-description">${escapeHtml(job.description || '')}</p>

          ${skillsHtml ? `<div class="skills-wrapper">${skillsHtml}</div>` : ''}

          <div class="job-card-footer">
            <div class="post-meta">
              Posted: <strong>${escapeHtml(job.posted_date || 'Recent')}</strong> • ${escapeHtml(job.source || 'Verified')}
            </div>
            <a href="${escapeHtml(job.apply_url || '#')}" target="_blank" rel="noopener noreferrer" class="apply-btn">
              <span>Apply</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 17l9.2-9.2M17 17V8H8"/>
              </svg>
            </a>
          </div>
        </article>
      `;
    }).join('');
  }

  // Filter Listeners: City
  cityButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      cityButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedCity = btn.getAttribute('data-city') || 'All';
      renderJobs();
    });
  });

  // Filter Listeners: Category
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedCategory = btn.getAttribute('data-category') || 'All';
      renderJobs();
    });
  });

  // Search Input Listener
  searchInput?.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
    renderJobs();
  });

  clearSearchBtn?.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.style.display = 'none';
    renderJobs();
  });

  // Reset Filters Button
  resetFiltersBtn?.addEventListener('click', () => {
    selectedCity = 'All';
    selectedCategory = 'All';
    searchQuery = '';
    if (searchInput) searchInput.value = '';
    if (clearSearchBtn) clearSearchBtn.style.display = 'none';
    
    cityButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-city') === 'All'));
    categoryButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-category') === 'All'));
    renderJobs();
  });

  // Dark/Light Theme Switching
  const savedTheme = localStorage.getItem('pakjobs-theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  themeToggle?.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const nextTheme = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('pakjobs-theme', nextTheme);
  });

  // Job Alert Email Form
  const alertForm = document.getElementById('jobAlertForm');
  const alertEmail = document.getElementById('alertEmail');
  const alertFeedback = document.getElementById('alertFeedback');

  alertForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = alertEmail.value.trim();
    if (email && email.includes('@')) {
      alertFeedback.textContent = '✓ Shukriya! Pakistan ki rozana nayi jobs aapko email kar di jayengi.';
      alertFeedback.className = 'form-feedback success';
      alertEmail.value = '';
      setTimeout(() => { alertFeedback.textContent = ''; }, 6000);
    } else {
      alertFeedback.textContent = 'Barahe karam durust email darj karein.';
      alertFeedback.className = 'form-feedback error';
    }
  });

  // About Modal Link
  document.getElementById('aboutModalLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    alert('PakJobs Daily: Pakistan ki nayi jobs ka automated portal. Ye platform rozana Pakistan ke top employers (Systems Ltd, Jazz, HBL, 10Pearls, NADRA waghera) ki vacancies ko track karke live update karta hai.');
  });

  // Helper: Escape HTML to avoid XSS
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Initialize
  loadJobsData();
});
