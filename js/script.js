document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. FORMULÁRIO DE CONTATO
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita recarregamento da página
            
            // Coleta dos dados
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            console.log("Dados capturados:", data);
            
            // Feedback
            alert(`Obrigado, ${data.name}! Recebemos seu pedido para a empresa "${data.company}".\nEntraremos em contato pelo telefone: ${data.phone}.`);
            
            // Limpa o formulário
            contactForm.reset();
        });
    }
document.querySelector("#goToDownTwo").addEventListener("click", function (event) {
    event.preventDefault();
    scrollTo("#contactForm");

    console.log("go to contact form section2");
});
    const ERROR_IMG_SRC = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4=';

    const imagesWithFallback = document.querySelectorAll('.js-image-fallback');
    
    imagesWithFallback.forEach(img => {
        img.addEventListener('error', function() {
            this.onerror = null; // Previne loop
            this.src = ERROR_IMG_SRC;
            this.classList.add('img-placeholder-error'); // Adiciona classe de estilo para erro
            this.alt = 'Imagem indisponível';
        });
    });
});

function scrollTo(element) {
    document.querySelector(element).scrollIntoView({
        behavior: 'smooth'
    });
}

document.querySelector("#goToDown").addEventListener("click", function (event) {
    event.preventDefault();
    scrollTo("#contactForm");

    console.log("go to contact form section");
});

document.querySelector("#goToDownThree").addEventListener("click", function (event) {
    event.preventDefault();
    scrollTo("#contactForm");

    console.log("go to contact form section2");
});

document.querySelector("#goToDownFour").addEventListener("click", function (event) {
    event.preventDefault();
    scrollTo("#contactForm");

    console.log("go to contact form section3");
});


