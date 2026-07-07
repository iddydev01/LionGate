document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburgerIcon = hamburger?.querySelector('i');
    const body = document.body;

    const closeMenu = () => {
        navMenu?.classList.remove('active');
        body.classList.remove('menu-open');
        if (hamburgerIcon) {
            hamburgerIcon.classList.remove('fa-times');
            hamburgerIcon.classList.add('fa-bars');
        }
    };

    if (hamburger && navMenu) {
        // Toggle Mobile Menu Open/Close
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = navMenu.classList.toggle('active');
            body.classList.toggle('menu-open', isActive);

            if (hamburgerIcon) {
                hamburgerIcon.classList.toggle('fa-bars', !isActive);
                hamburgerIcon.classList.toggle('fa-times', isActive);
            }
        });

        // Close the mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                closeMenu();
            }
        });
    }

    // Close the mobile menu automatically when any link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Automatically update footer copyright year
    const yearSpan = document.getElementById('current-year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Read more toggles for long text sections
    document.querySelectorAll('.read-more-block').forEach(block => {
        const button = block.querySelector('.read-more-toggle');
        const hiddenContent = block.querySelector('.read-more-hidden');

        if (!button || !hiddenContent) return;

        button.addEventListener('click', () => {
            const expanded = block.classList.toggle('expanded');
            button.textContent = expanded ? 'Read less' : 'Read more';
        });
    });

    // STEP 12: Accordion FAQ Toggle Event Listener
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            item.classList.toggle('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const destinationCards = document.querySelectorAll('.destination-section .destination-card');
    
    destinationCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const destinationName = card.querySelector('h3').textContent;
            console.log(`User clicked on destination: ${destinationName}`);
            // You can insert integration hooks here for analytics, such as Google Tag Manager
        });
    });
});