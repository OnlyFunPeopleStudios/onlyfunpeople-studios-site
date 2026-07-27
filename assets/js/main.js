/* ============================================
   OnlyFunPeople Studios - Main JavaScript
   ============================================ */

(function () {
  'use strict';

  // ---- Mobile Menu Toggle ----
  const menuToggle = document.querySelector('.menu-toggle');
  const navbarNav = document.querySelector('.navbar-nav');

  if (menuToggle && navbarNav) {
    menuToggle.addEventListener('click', () => {
      navbarNav.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });

    // Close menu on link click
    navbarNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navbarNav.classList.remove('active');
        menuToggle.classList.remove('active');
      });
    });
  }

  // ---- Navbar scroll effect ----
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.borderBottomColor = 'var(--border-primary)';
      } else {
        navbar.style.borderBottomColor = 'var(--border-subtle)';
      }
    });
  }

  // ---- FAQ Accordion ----
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close all
        faqItems.forEach((i) => i.classList.remove('active'));
        // Toggle current
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // ---- Fade-in on scroll ----
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.card, .app-card, .roadmap-item, .blog-card, .changelog-item').forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  // ---- Typing effect for terminal ----
  const terminalLines = document.querySelectorAll('.terminal-cmd[data-type]');
  terminalLines.forEach((line) => {
    const text = line.getAttribute('data-type');
    line.textContent = '';
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        line.textContent += text[i];
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);
  });

  // ---- Current year in footer ----
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ---- Version display (from GitHub Releases API) ----
  const versionEls = document.querySelectorAll('[data-version]');
  if (versionEls.length > 0) {
    fetch('https://api.github.com/repos/OnlyFunPeopleStudios/profeos-app/releases/latest')
      .then((res) => res.json())
      .then((data) => {
        if (data.tag_name) {
          versionEls.forEach((el) => {
            el.textContent = data.tag_name;
          });
        }
      })
      .catch(() => {
        versionEls.forEach((el) => {
          el.textContent = 'v1.0.0';
        });
      });
  }

})();
