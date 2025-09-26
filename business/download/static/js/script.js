
// Efeito de digitação no título
document.addEventListener('DOMContentLoaded', function () {
    const title = document.querySelector('.typing-effect');
    const originalText = title.textContent;
    title.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            title.style.borderRight = 'none';
        }
    }

    setTimeout(typeWriter, 500);

    // Corrigir botão de instalação - agora faz download real
    const installButtons = document.querySelectorAll('.project-link.install');
    installButtons.forEach(button => {
        // Remover o evento anterior que mostrava alerta
        button.removeEventListener('click', function () { });

        // Adicionar atributo download para forçar o download
        if (!button.hasAttribute('download')) {
            button.setAttribute('download', '');
        }
    });

    // Ativar botão de navegação atual
    const currentPage = window.location.pathname.split('/').pop() || 'portfolio.html';
    const navButtons = document.querySelectorAll('.nav-button');

    navButtons.forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('href') === currentPage) {
            button.classList.add('active');
        }
    });
});
