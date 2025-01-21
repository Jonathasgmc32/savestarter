document.addEventListener("DOMContentLoaded", function() {
    console.log("Página carregada e pronta!");

    const empresas = [
        {
            nome: "Cacau Show",
            img: "images/logos/logo3.png",
            beneficios: ["Bônus"],
            fraseEfeito: "Bônus 4x mais pontos como CacauLovers.",
            website: "https://www.cacaushow.com.br"
        },
        {
            nome: "Unimed",
            img: "images/logos/logo2.png",
            beneficios: ["Plano de saúde"],
            fraseEfeito: "Plano de Saúde para você e sua família.",
            website: "https://www.unimed.coop.br" 
        },
        {
            nome: "Vitarella",
            img: "images/logos/logo1.png",
            beneficios: ["Vale-refeição"],
            fraseEfeito: "Cestas mensais com nossos produtos.",
            website: "https://www.vitarella.com.br" 
        }
    ];

    const empresasContainer = document.getElementById('empresas');

    empresas.forEach(empresa => {
        const empresaElement = document.createElement('div');
        empresaElement.classList.add('card');

        empresaElement.innerHTML = `
            <img src="${empresa.img}" alt="${empresa.nome}">
            <div class="content">
                <h3>${empresa.nome}</h3>
                <p>${empresa.fraseEfeito}</p>
            </div>
        `;

        empresasContainer.appendChild(empresaElement);
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const empresaNome = card.querySelector('h3').textContent;
            const empresa = empresas.find(e => e.nome === empresaNome);
            localStorage.setItem('selectedEmpresa', JSON.stringify(empresa));
            window.location.href = 'pagina-detalhe-colab.html';
        });
    });

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
