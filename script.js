document.addEventListener('DOMContentLoaded', () => {
    // Lógica do Menu Mobile
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-links a, .btn-contact-header');
    const header = document.getElementById('header');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navbar.classList.toggle('active');
            document.body.style.overflow = navbar.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Fechar menu ao clicar num link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navbar.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Efeito Sticky Header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Integração do WhatsApp com os dados do cliente
    const formWhatsapp = document.getElementById('form-whatsapp');

    if (formWhatsapp) {
        formWhatsapp.addEventListener('submit', function(e) {
            e.preventDefault();

            // Telefone fornecido pelo cliente (MERCADO QUINTA DE AURORA)
            const numeroWhatsApp = '555599271784'; 

            const nome = document.getElementById('nome').value;
            const pedido = document.getElementById('pedido').value;

            // Mensagem elegante e clara
            const mensagem = `Olá, Quinta de Aurora! ☕%0A%0AMeu nome é *${nome}*.%0A%0A*Gostaria de falar sobre:*%0A${pedido}%0A%0AAguardo o retorno!`;

            const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
            window.open(url, '_blank');
        });
    }
});