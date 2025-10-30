// Global JavaScript functions shared across pages

// Update cart count function
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartElements = document.querySelectorAll('#cart-count');
    cartElements.forEach(el => {
        if (el) el.textContent = cart.length;
    });
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // Add fade-in animation to elements on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
});

