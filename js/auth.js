// Authentication JavaScript

// Toggle password visibility
document.addEventListener('DOMContentLoaded', function() {
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');
    
    togglePasswordButtons.forEach(button => {
        button.addEventListener('click', function() {
            const passwordField = this.previousElementSibling;
            
            // Toggle password visibility
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                this.classList.remove('fa-eye');
                this.classList.add('fa-eye-slash');
            } else {
                passwordField.type = 'password';
                this.classList.remove('fa-eye-slash');
                this.classList.add('fa-eye');
            }
        });
    });
    
    // Sign In Form Submission
    const signinForm = document.getElementById('signinForm');
    if (signinForm) {
        signinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const remember = document.getElementById('remember')?.checked || false;
            
            // Validate form
            if (!email || !password) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            // Here you would typically send the data to a server for authentication
            // For demo purposes, we'll simulate a successful login
            console.log('Sign In Data:', { email, password, remember });
            
            // Simulate API call with timeout
            showNotification('Signing in...', 'info');
            
            setTimeout(() => {
                // Store user info in localStorage or sessionStorage based on "remember me"
                const userData = {
                    email: email,
                    name: email.split('@')[0], // Just for demo
                    isLoggedIn: true,
                    loginTime: new Date().toISOString()
                };
                
                if (remember) {
                    localStorage.setItem('binaryClubUser', JSON.stringify(userData));
                } else {
                    sessionStorage.setItem('binaryClubUser', JSON.stringify(userData));
                }
                
                showNotification('Sign in successful! Redirecting...', 'success');
                
                // Redirect to home page after successful login
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
            }, 1000);
        });
    }
    
    // Sign Up Form Submission
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const fullname = document.getElementById('fullname').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const skillLevel = document.getElementById('skill-level').value;
            const termsAgreed = document.getElementById('terms').checked;
            
            // Validate form
            if (!fullname || !email || !password || !confirmPassword || !skillLevel) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (password !== confirmPassword) {
                showNotification('Passwords do not match', 'error');
                return;
            }
            
            if (!termsAgreed) {
                showNotification('Please agree to the Terms & Conditions', 'error');
                return;
            }
            
            // Here you would typically send the data to a server for registration
            // For demo purposes, we'll simulate a successful registration
            console.log('Sign Up Data:', { fullname, email, password, skillLevel, termsAgreed });
            
            // Simulate API call with timeout
            showNotification('Creating your account...', 'info');
            
            setTimeout(() => {
                // Store user info in localStorage
                const userData = {
                    name: fullname,
                    email: email,
                    skillLevel: skillLevel,
                    isLoggedIn: true,
                    registrationTime: new Date().toISOString()
                };
                
                localStorage.setItem('binaryClubUser', JSON.stringify(userData));
                
                showNotification('Account created successfully! Redirecting...', 'success');
                
                // Redirect to home page after successful registration
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
            }, 1500);
        });
    }
    
    // Social Sign In Buttons
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const provider = this.classList.contains('google') ? 'Google' : 'GitHub';
            showNotification(`${provider} authentication is not implemented in this demo`, 'info');
        });
    });
});

// Notification function
function showNotification(message, type = 'info') {
    // Check if notification container exists, if not create it
    let notificationContainer = document.querySelector('.notification-container');
    
    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.className = 'notification-container';
        document.body.appendChild(notificationContainer);
        
        // Add styles for the notification container
        notificationContainer.style.position = 'fixed';
        notificationContainer.style.top = '20px';
        notificationContainer.style.right = '20px';
        notificationContainer.style.zIndex = '1000';
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.backgroundColor = type === 'error' ? '#ff4d4d' : 
                                        type === 'success' ? '#4CAF50' : 
                                        '#2196F3';
    notification.style.color = 'white';
    notification.style.padding = '12px 20px';
    notification.style.marginBottom = '10px';
    notification.style.borderRadius = '4px';
    notification.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    notification.style.transition = 'all 0.3s ease';
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(-20px)';
    
    // Add to container
    notificationContainer.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 10);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Check if user is logged in
function checkAuthStatus() {
    const user = JSON.parse(localStorage.getItem('binaryClubUser')) || 
                JSON.parse(sessionStorage.getItem('binaryClubUser'));
    
    if (user && user.isLoggedIn) {
        return user;
    }
    
    return null;
}

// Update UI based on authentication status
function updateAuthUI() {
    const user = checkAuthStatus();
    
    // This function would update UI elements based on whether user is logged in
    // For example, showing user name, profile picture, etc.
    console.log('Auth Status:', user ? 'Logged In' : 'Not Logged In');
    
    // This is where you would update navigation links, show/hide elements, etc.
}

// Call updateAuthUI when page loads
document.addEventListener('DOMContentLoaded', updateAuthUI); 