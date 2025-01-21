document.addEventListener("DOMContentLoaded", function() {
    console.log("Página carregada e pronta!");

    const iconeInput = document.getElementById('icone');
    const iconePreview = document.querySelector('.icone-preview');

    iconeInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();

            reader.addEventListener('load', function() {
                iconePreview.innerHTML = `<img src="${this.result}" alt="Ícone do evento">`;
            });

            reader.readAsDataURL(file);
        } else {
            iconePreview.innerHTML = `<i class="fas fa-image fa-2x"></i>`; // Restaura o ícone padrão
        }
    });
    // Toggle navigation
    const sideMenu = document.getElementById('sideMenu');
    const menuToggle = document.getElementById('menuToggle');

    menuToggle.addEventListener('click', function() {
        if (sideMenu.style.left === '0px') {
            sideMenu.style.left = '-70px';
        } else {
            sideMenu.style.left = '0px';
        }
    });
});
