
// Sistema de navegação por categorias
document.addEventListener('DOMContentLoaded', function () {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const categoryContents = document.querySelectorAll('.category-content');

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const categoryId = this.getAttribute('data-category');

            // Remove classe active de todos os botões e conteúdos
            categoryBtns.forEach(b => b.classList.remove('active'));
            categoryContents.forEach(content => content.classList.remove('active'));

            // Adiciona classe active no botão clicado e seu conteúdo
            this.classList.add('active');
            document.getElementById(categoryId).classList.add('active');
        });
    });

    // Efeito de digitação no título
    const title = document.querySelector('h1');
    const originalText = title.textContent;
    title.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    setTimeout(typeWriter, 500);

    // Ativar botão de navegação atual
    const currentPage = window.location.pathname.split('/').pop() || 'business-model.html';
    const navButtons = document.querySelectorAll('.nav-button');

    navButtons.forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('href') === currentPage) {
            button.classList.add('active');
        }
    });
});
