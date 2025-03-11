// Mobile Menu Toggle
const openMenu = document.getElementById('openMenu');
const navLinks = document.getElementById('navLinks');

if (openMenu && navLinks) {
    openMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            e.target !== openMenu) {
            navLinks.classList.remove('active');
        }
    });
}

// Close menu when clicking on a link (for mobile)
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Offset for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'white';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        // For now, we'll just log it and show a success message
        console.log('Form submitted:', { name, email, subject, message });
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Newsletter form submission
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get email value
        const email = this.querySelector('input[type="email"]').value;
        
        // Here you would typically send the email to a server
        console.log('Newsletter subscription:', email);
        
        // Show success message
        alert('Thank you for subscribing to our newsletter!');
        
        // Reset form
        newsletterForm.reset();
    });
}

// Animation on scroll
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.about-content, .events-grid, .team-grid, .gallery-grid');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Initialize elements with fade-in effect
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.about-content, .events-grid, .team-grid, .gallery-grid');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger scroll event to check initial visibility
    window.dispatchEvent(new Event('scroll'));
});

// Event Category Filtering
const eventCategories = document.querySelectorAll('.event-category');
const eventCards = document.querySelectorAll('.event-card');

if (eventCategories.length > 0 && eventCards.length > 0) {
    eventCategories.forEach(category => {
        category.addEventListener('click', () => {
            // Remove active class from all categories
            eventCategories.forEach(cat => cat.classList.remove('active'));
            
            // Add active class to clicked category
            category.classList.add('active');
            
            const selectedCategory = category.getAttribute('data-category');
            
            // Show all events if 'all' is selected, otherwise filter
            if (selectedCategory === 'all') {
                eventCards.forEach(card => {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                });
            } else {
                eventCards.forEach(card => {
                    if (card.getAttribute('data-category') === selectedCategory) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            }
        });
    });
}

// Team Category Filtering
const teamCategories = document.querySelectorAll('.team-category');
const teamMembers = document.querySelectorAll('.team-member');

if (teamCategories.length > 0 && teamMembers.length > 0) {
    teamCategories.forEach(category => {
        category.addEventListener('click', () => {
            // Remove active class from all categories
            teamCategories.forEach(cat => cat.classList.remove('active'));
            
            // Add active class to clicked category
            category.classList.add('active');
            
            const selectedCategory = category.getAttribute('data-category');
            
            // Show all team members if 'all' is selected, otherwise filter
            if (selectedCategory === 'all') {
                teamMembers.forEach(member => {
                    member.style.display = 'block';
                    setTimeout(() => {
                        member.style.opacity = '1';
                        member.style.transform = 'translateY(0)';
                    }, 10);
                });
            } else {
                teamMembers.forEach(member => {
                    if (member.getAttribute('data-category') === selectedCategory) {
                        member.style.display = 'block';
                        setTimeout(() => {
                            member.style.opacity = '1';
                            member.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        member.style.opacity = '0';
                        member.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            member.style.display = 'none';
                        }, 300);
                    }
                });
            }
        });
    });
}

// Contact Form Tabs
const formTabs = document.querySelectorAll('.form-tab');
const forms = document.querySelectorAll('.form');

if (formTabs.length > 0 && forms.length > 0) {
    formTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and forms
            formTabs.forEach(t => t.classList.remove('active'));
            forms.forEach(f => f.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show corresponding form
            const formId = tab.getAttribute('data-form');
            const form = formId === 'contact' ? document.getElementById('contactForm') : document.getElementById('joinForm');
            form.classList.add('active');
        });
    });
}

// Join Form Submission
const joinForm = document.getElementById('joinForm');
if (joinForm) {
    joinForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('joinName').value;
        const email = document.getElementById('joinEmail').value;
        const memberType = document.getElementById('memberType').value;
        const department = document.getElementById('department').value;
        const message = document.getElementById('joinMessage').value;
        
        // Here you would typically send the form data to a server
        console.log('Join form submitted:', { name, email, memberType, department, message });
        
        // Show success message
        alert('Thank you for your interest in joining CSI! We will review your application and get back to you soon.');
        
        // Reset form
        joinForm.reset();
    });
}

// Authentication State Management
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const user = getUserData();
    updateAuthUI(user);
    
    // Sign out functionality
    const signoutLink = document.querySelector('.signout-link');
    if (signoutLink) {
        signoutLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Clear user data from storage
            localStorage.removeItem('binaryClubUser');
            sessionStorage.removeItem('binaryClubUser');
            
            // Update UI
            updateAuthUI(null);
            
            // Show notification
            if (typeof showNotification === 'function') {
                showNotification('You have been signed out successfully', 'info');
            } else {
                alert('You have been signed out successfully');
            }
        });
    }
});

// Get user data from storage
function getUserData() {
    try {
        const localUser = localStorage.getItem('binaryClubUser');
        const sessionUser = sessionStorage.getItem('binaryClubUser');
        
        if (localUser) {
            return JSON.parse(localUser);
        } else if (sessionUser) {
            return JSON.parse(sessionUser);
        }
        
        return null;
    } catch (error) {
        console.error('Error getting user data:', error);
        return null;
    }
}

// Update UI based on authentication state
function updateAuthUI(user) {
    const signinLink = document.querySelector('.signin-link');
    const signupLink = document.querySelector('.signup-link');
    const signoutLink = document.querySelector('.signout-link');
    
    if (!signinLink || !signupLink || !signoutLink) {
        return; // Elements not found
    }
    
    if (user) {
        // User is logged in
        signinLink.style.display = 'none';
        signupLink.style.display = 'none';
        signoutLink.style.display = 'inline-flex';
        
        // Create user profile element if it doesn't exist
        let userProfile = document.querySelector('.user-profile');
        if (!userProfile) {
            const authLinks = document.querySelector('.auth-links');
            
            if (authLinks) {
                userProfile = document.createElement('div');
                userProfile.className = 'user-profile';
                
                const userAvatar = document.createElement('div');
                userAvatar.className = 'user-avatar';
                userAvatar.textContent = user.name.charAt(0).toUpperCase();
                
                const userName = document.createElement('div');
                userName.className = 'user-name';
                userName.textContent = user.name;
                
                userProfile.appendChild(userAvatar);
                userProfile.appendChild(userName);
                
                // Insert before signout link
                authLinks.insertBefore(userProfile, signoutLink);
            }
        }
    } else {
        // User is not logged in
        signinLink.style.display = 'inline-flex';
        signupLink.style.display = 'inline-flex';
        signoutLink.style.display = 'none';
        
        // Remove user profile if it exists
        const userProfile = document.querySelector('.user-profile');
        if (userProfile) {
            userProfile.remove();
        }
    }
}

// Mobile-specific improvements
document.addEventListener('DOMContentLoaded', function() {
    // Detect if device is touch-enabled
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
        document.body.classList.add('touch-device');
        
        // Add touch feedback to buttons and links
        const interactiveElements = document.querySelectorAll('a, button, .event-card, .team-member, .gallery-item');
        interactiveElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.classList.add('touch-active');
            }, { passive: true });
            
            element.addEventListener('touchend', function() {
                this.classList.remove('touch-active');
            }, { passive: true });
        });
        
        // Improve scrolling performance
        const scrollableElements = document.querySelectorAll('.nav-links, .events-grid, .team-grid, .gallery-grid');
        scrollableElements.forEach(element => {
            element.style.webkitOverflowScrolling = 'touch';
        });
        
        // Fix for 300ms tap delay on mobile browsers
        const fastClickElements = document.querySelectorAll('a, button');
        fastClickElements.forEach(element => {
            element.addEventListener('touchend', function(e) {
                e.preventDefault();
                const clickEvent = new MouseEvent('click', {
                    view: window,
                    bubbles: true,
                    cancelable: true
                });
                this.dispatchEvent(clickEvent);
            }, { passive: false });
        });
    }
    
    // Fix for iOS viewport height issues (100vh)
    function setViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', setViewportHeight);
}); 