document.addEventListener('DOMContentLoaded', () => {

    // 1. Alerta de Login
    const loginBtn = document.getElementById('login-btn');
    const emailInput = document.getElementById('email-input');

    loginBtn.addEventListener('click', () => {
        const emailValue = emailInput.value.trim();
        if (emailValue !== '') {
            alert(`Bienvenido\n${emailValue}`);
        } else {
            alert('Por favor, ingresa un correo electrónico.');
        }
    });

    // 2. Contador del carrito
    const cartCountElement = document.getElementById('cart-count');
    const addButtons = document.querySelectorAll('.add-btn');
    let cartCount = 0;

    addButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cartCountElement.textContent = cartCount;
        });
    });

    // 3. Cambio de imagen al pasar el mouse (Hover)
    const heroImage = document.getElementById('hero-image');
    
    if (heroImage) {
        // Se obtiene la ruta original directamente de la propiedad 'src'
        const originalSrc = heroImage.src;
        const hoverSrc = heroImage.getAttribute('data-hover');

        heroImage.addEventListener('mouseover', () => {
            if (hoverSrc) {
                heroImage.src = hoverSrc;
            }
        });

        heroImage.addEventListener('mouseout', () => {
            heroImage.src = originalSrc;
        });
    }

});