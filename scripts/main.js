
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

  // Global functions
  window.KTL = Object.assign(window.KTL || {}, { 
    observeReveals, 
    handleFormSubmit, 
    initView,
    updateActiveLink
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
      form.addEventListener('submit', e => handleFormSubmit(e, {endpoint: CONFIG.CONTACT_ENDPOINT, mailto: CONFIG.CONTACT_EMAIL}));
    }
  }else if(route === '/rfq'){
    const form = document.getElementById('rfq-form');
    if(form){
      form.addEventListener('submit', e => handleFormSubmit(e, {endpoint: CONFIG.RFQ_ENDPOINT, mailto: CONFIG.RFQ_EMAIL}));
    }
  }
}
