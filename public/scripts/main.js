
// Scroll Progress Bar
function updateScrollProgress() {
  const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  const progressBar = document.querySelector('.scroll-progress') || createProgressBar();
  progressBar.style.width = `${scrolled}%`;
}

function createProgressBar() {
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.appendChild(bar);
  return bar;
}

// Confetti Effect
function triggerConfetti() {
  if (typeof confetti === 'undefined') {
    // Fallback visual feedback
    const toast = document.createElement('div');
    toast.textContent = '🎉 Success!';
    toast.style.cssText = `
      position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
      background: var(--accent); color: white; padding: 1rem 2rem;
      border-radius: var(--radius); font-weight: 600; z-index: 10000;
      animation: fadeInOut 2s ease-in-out;
    `;
    document.body.appendChild(toast);
    setTimeout(() => document.body.removeChild(toast), 2000);
  } else {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

// Spotlight Cursor Effect
function initSpotlightCursor() {
  const cursor = document.createElement('div');
  cursor.className = 'spotlight-cursor';
  cursor.style.cssText = `
    position: fixed; width: 20px; height: 20px; border-radius: 50%;
    background: radial-gradient(circle, var(--accent) 0%, transparent 70%);
    pointer-events: none; z-index: 9999; mix-blend-mode: difference;
    transition: transform 0.1s ease;
  `;
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX - 10}px`;
    cursor.style.top = `${e.clientY - 10}px`;
  });

  document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(1.5)';
  });

  document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
  });
}

// Enhanced Form Handling with Confetti
async function handleFormSubmitEnhanced(e, {endpoint, mailto}) {
  e.preventDefault();
  const form = e.target;
  const status = form.querySelector(".status");
  if (!validateForm(form, status)) return;
  
  const data = Object.fromEntries(new FormData(form).entries());
  status.textContent = "Submitting…";

  try {
    if (endpoint) {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("Request failed");
      status.textContent = "Thanks! We'll get back to you shortly.";
      form.reset();
      triggerConfetti();
    } else if (mailto) {
      const q = new URLSearchParams(data).toString();
      location.href = `mailto:${mailto}?subject=Website%20Form&body=${q}`;
      status.textContent = "Opening your email client…";
      form.reset();
      triggerConfetti();
    } else {
      status.textContent = "No endpoint configured. Please set one in the HTML data attributes.";
    }
  } catch(err) {
    console.error(err);
    status.textContent = "There was an error. Please try again later.";
  }
}

// Glowing Chart for Investors Page
function initInvestorChart() {
  const canvas = document.getElementById('spark');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  
  let points = [];
  let animationId;

  function generatePoints() {
    points = [];
    for (let i = 0; i < 50; i++) {
      points.push({
        x: (i / 49) * width,
        y: height/2 + Math.sin(i * 0.2 + Date.now() * 0.001) * 30 + Math.random() * 10 - 5
      });
    }
  }

  function drawChart() {
    ctx.clearRect(0, 0, width, height);
    
    // Gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(14, 165, 165, 0.1)');
    gradient.addColorStop(1, 'rgba(14, 165, 165, 0)');
    
    // Draw line
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.strokeStyle = '#0EA5A5';
    ctx.lineWidth = 3;
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#0EA5A5';
    ctx.stroke();
    
    // Fill area under curve
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();
    
    generatePoints();
    animationId = requestAnimationFrame(drawChart);
  }

  generatePoints();
  drawChart();

  // Update every 15 seconds
  setInterval(() => {
    generatePoints();
  }, 15000);
}

document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Stairs Menu Toggle
  const stairsToggle = document.querySelector(".stairs-toggle");
  const stairsNav = document.querySelector(".stairs-nav");
  const navBackdrop = document.querySelector(".nav-backdrop");
  
  if (stairsToggle && stairsNav) {
    stairsToggle.addEventListener("click", () => {
      const isOpen = stairsNav.classList.toggle("open");
      stairsToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close nav when clicking backdrop
    if (navBackdrop) {
      navBackdrop.addEventListener("click", () => {
        stairsNav.classList.remove("open");
        stairsToggle.setAttribute("aria-expanded", "false");
      });
    }

    // Close nav when clicking nav links
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        stairsNav.classList.remove("open");
        stairsToggle.setAttribute("aria-expanded", "false");
      });
    });

    // Keyboard navigation
    stairsToggle.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        stairsToggle.click();
      }
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && stairsNav.classList.contains("open")) {
        stairsNav.classList.remove("open");
        stairsToggle.setAttribute("aria-expanded", "false");
        stairsToggle.focus();
      }
    });
  }

  // Intersection Observer for reveals
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  function observeReveals(){
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
  }

  // Update active navigation link
  function updateActiveLink() {
    const currentRoute = getRoute();
    const navLinks = document.querySelectorAll(".nav-link");
    
    navLinks.forEach(link => {
      link.classList.remove("active");
      const href = link.getAttribute("href");
      if (href === `#${currentRoute}`) {
        link.classList.add("active");
      }
    });
  }

  // Get current route from hash
  function getRoute() {
    const hash = location.hash || "#/";
    const path = hash.replace(/^#/, "");
    const routes = {
      "/": "/",
      "/about": "/about",
      "/sustainability": "/sustainability",
      "/certifications": "/certifications",
      "/clients": "/clients",
      "/impact": "/impact",
      "/investors": "/investors",
      "/careers": "/careers",
      "/news": "/news",
      "/contact": "/contact",
      "/rfq": "/rfq",
      "/privacy": "/privacy",
      "/terms": "/terms"
    };
    return routes[path] ? path : "/";
  }

  // Initialize active link on page load
  updateActiveLink();

  // Update active link on route changes
  window.addEventListener("hashchange", updateActiveLink);

  // Initialize new features
  initSpotlightCursor();
  window.addEventListener('scroll', updateScrollProgress);
  updateScrollProgress();

  // Global functions
  window.KTL = Object.assign(window.KTL || {}, { 
    observeReveals, 
    handleFormSubmit: handleFormSubmitEnhanced, 
    initView,
    updateActiveLink,
    initInvestorChart
  });
  
  observeReveals();
});

async function handleFormSubmit(e, {endpoint, mailto}){
  e.preventDefault();
  const form = e.target;
  const status = form.querySelector(".status");
  if (!validateForm(form, status)) return;
  const data = Object.fromEntries(new FormData(form).entries());
  status.textContent = "Submitting…";

  try{
    if (endpoint){
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("Request failed");
      status.textContent = "Thanks! We'll get back to you shortly.";
      form.reset();
    }else if (mailto){
      const q = new URLSearchParams(data).toString();
      location.href = `mailto:${mailto}?subject=Website%20Form&body=${q}`;
      status.textContent = "Opening your email client…";
      form.reset();
    }else{
      status.textContent = "No endpoint configured. Please set one in the HTML data attributes.";
    }
  }catch(err){
    console.error(err);
    status.textContent = "There was an error. Please try again later.";
  }
}

function validateForm(form, status){
  const required = form.querySelectorAll('[required]');
  for (const field of required){
    if (!field.value.trim()){
      status.textContent = "Please complete required fields.";
      return false;
    }
  }
  const emailField = form.querySelector('input[type="email"]');
  if (emailField && emailField.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)){
    status.textContent = "Please enter a valid email.";
    return false;
  }
  return true;
}

function initView(route){
  if(route === '/news'){
    if(window.KTL && typeof KTL.loadNews === 'function'){
      KTL.loadNews();
    }
  }else if(route === '/contact'){
    const form = document.getElementById('contact-form');
    if(form){
      form.addEventListener('submit', e => handleFormSubmitEnhanced(e, {endpoint: CONFIG.CONTACT_ENDPOINT, mailto: CONFIG.CONTACT_EMAIL}));
    }
  }else if(route === '/rfq'){
    const form = document.getElementById('rfq-form');
    if(form){
      form.addEventListener('submit', e => handleFormSubmitEnhanced(e, {endpoint: CONFIG.RFQ_ENDPOINT, mailto: CONFIG.RFQ_EMAIL}));
    }
  }else if(route === '/investors'){
    setTimeout(() => {
      initInvestorChart();
    }, 500);
  }
}
