// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {

    // Intersection Observer for project animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const projectObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all projects
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        projectObserver.observe(project);
    });

    // Navbar background on scroll + active link
    const nav = document.querySelector('.nav');
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-link');

    function onScroll() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
        } else {
            nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = 'none';
        }

        let activeId = '';
        sections.forEach(sec => {
            const rect = sec.getBoundingClientRect();
            if (rect.top <= 120 && rect.bottom > 120) {
                activeId = sec.id;
            }
        });
        links.forEach(l => {
            l.classList.toggle('active', l.getAttribute('href') === `#${activeId}`);
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll();

    // Add companies (you can customize this list)
    const companies = [
        'Ladder',
        'Cloudflare',
        'Company Name 3',
        'Company Name 4',
        'Company Name 5'
    ];

    const companiesGrid = document.querySelector('.companies-grid');
    if (companiesGrid) {
        companies.forEach(company => {
            const companyItem = document.createElement('div');
            companyItem.className = 'company-item';
            companyItem.textContent = company;
            companiesGrid.appendChild(companyItem);
        });
    }

    // Removed parallax for stability and reduced motion

    // Add hover effects to projects
    const projectVisuals = document.querySelectorAll('.project-visual');
    projectVisuals.forEach(visual => {
        visual.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        visual.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Footer year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

