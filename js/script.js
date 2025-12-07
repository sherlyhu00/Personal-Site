/**
 * Custom JavaScript for Yirui Hu Portfolio Website
 * Handles form submissions, animations, and interactive features
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Initialize all features
    initSmoothScrolling();
    initContactForm();
    initNavbarScroll();
    initAnimateOnScroll();

});

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Only prevent default if it's not just "#"
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

/**
 * Navbar background change on scroll
 */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');

    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }
}

/**
 * Animate elements on scroll
 */
function initAnimateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.project-card, .overview-card, .skill-category, .timeline-item').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Contact form handling
 */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Validate form
            if (validateContactForm(formData)) {
                // In a real application, you would send this data to a server
                // For now, we'll just show a success message
                handleFormSubmission(formData);
            }
        });
    }
}

/**
 * Validate contact form data
 */
function validateContactForm(data) {
    const messageDiv = document.getElementById('formMessage');

    // Basic validation
    if (!data.firstName || !data.lastName || !data.email || !data.subject || !data.message) {
        showFormMessage('Please fill in all required fields.', 'danger');
        return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showFormMessage('Please enter a valid email address.', 'danger');
        return false;
    }

    return true;
}

/**
 * Handle form submission
 */
function handleFormSubmission(formData) {
    const form = document.getElementById('contactForm');
    const submitButton = form.querySelector('button[type="submit"]');

    // Disable submit button
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';

    // Simulate API call (replace with actual API endpoint)
    setTimeout(function() {
        // Create mailto link as fallback
        const mailtoLink = `mailto:yhu691@gatech.edu?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Name: ${formData.firstName} ${formData.lastName}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone}\n\n` +
            `Message:\n${formData.message}`
        )}`;

        // Show success message
        showFormMessage(
            'Thank you for your message! Opening your email client... Alternatively, you can email me directly at yhu691@gatech.edu',
            'success'
        );

        // Open mailto link
        window.location.href = mailtoLink;

        // Reset form
        form.reset();

        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.innerHTML = '<i class="fas fa-paper-plane me-2"></i>Send Message';

    }, 1000);
}

/**
 * Show form message
 */
function showFormMessage(message, type) {
    const messageDiv = document.getElementById('formMessage');

    if (messageDiv) {
        messageDiv.className = `alert alert-${type} mt-3`;
        messageDiv.textContent = message;
        messageDiv.classList.remove('d-none');

        // Auto-hide after 5 seconds for success messages
        if (type === 'success') {
            setTimeout(function() {
                messageDiv.classList.add('d-none');
            }, 5000);
        }
    }
}

/**
 * Copy email to clipboard
 */
function copyEmailToClipboard() {
    const email = 'yhu691@gatech.edu';

    navigator.clipboard.writeText(email).then(function() {
        // Show temporary tooltip or notification
        alert('Email address copied to clipboard!');
    }).catch(function(err) {
        console.error('Failed to copy email: ', err);
    });
}

/**
 * Add dynamic year to copyright
 */
function updateCopyrightYear() {
    const copyrightElements = document.querySelectorAll('.copyright');
    const currentYear = new Date().getFullYear();

    copyrightElements.forEach(element => {
        if (element.textContent.includes('2024')) {
            element.textContent = element.textContent.replace('2024', currentYear);
        }
    });
}

// Update copyright year on load
updateCopyrightYear();

/**
 * Add active class to current navigation item based on URL
 */
function setActiveNavItem() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Set active nav item on load
setActiveNavItem();

/**
 * Lazy loading for images (if you add images later)
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

/**
 * Print project information
 */
function printProject(projectId) {
    const projectElement = document.getElementById(projectId);
    if (projectElement) {
        window.print();
    }
}

/**
 * Toggle dark mode (future enhancement)
 */
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

/**
 * Check for saved dark mode preference
 */
function checkDarkModePreference() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
        document.body.classList.add('dark-mode');
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to focus search (if implemented)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('input[type="search"]');
        if (searchInput) {
            searchInput.focus();
        }
    }
});

/**
 * Back to top button (if needed)
 */
function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');

    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

/**
 * Accordion auto-scroll when opened
 */
const accordionButtons = document.querySelectorAll('.accordion-button');
accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
        setTimeout(() => {
            if (!this.classList.contains('collapsed')) {
                this.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }, 350); // Wait for accordion animation
    });
});

/**
 * Form field animation
 */
const formInputs = document.querySelectorAll('.form-control, .form-select');
formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});

/**
 * Console message for developers
 */
console.log('%cYirui Hu Portfolio', 'font-size: 20px; font-weight: bold; color: #2c5aa0;');
console.log('%cInterested in the code? Check out my GitHub: https://github.com/YiruiHu', 'font-size: 12px; color: #666;');

/**
 * Performance monitoring (optional)
 */
if ('performance' in window) {
    window.addEventListener('load', function() {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${pageLoadTime}ms`);
    });
}

/**
 * Service worker registration (for future PWA implementation)
 */
if ('serviceWorker' in navigator) {
    // Uncomment when you have a service worker file
    // navigator.serviceWorker.register('/sw.js')
    //     .then(reg => console.log('Service Worker registered'))
    //     .catch(err => console.log('Service Worker registration failed'));
}
