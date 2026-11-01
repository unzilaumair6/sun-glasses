document.addEventListener('DOMContentLoaded', () => {
    // 1. Shopping Cart Counter Logic
    let cartCount = 0;
    const cartBadge = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            if (cartBadge) {
                cartBadge.textContent = cartCount;
            }
            
            // Visual feedback on button click
            let originalText = button.textContent;
            button.textContent = 'Added! ✓';
            button.classList.remove('btn-dark');
            button.classList.add('btn-success');
            
            setTimeout(() => {
                button.textContent = originalText;
                button.classList.remove('btn-success');
                button.classList.add('btn-dark');
            }, 1000);
        });
    });

    // 2. Contact Form Validation / Submission Feedback
    const contactForm = document.getElementById('contactForm');
    const formAlert = document.getElementById('formAlert');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simple success message simulation
            formAlert.innerHTML = `
                <div class="alert alert-success rounded-3 text-center" role="alert">
                    Thank you! Your message has been sent successfully.
                </div>
            `;
            
            contactForm.reset();
            
            setTimeout(() => {
                formAlert.innerHTML = '';
            }, 4000);
        });
    }
});