document.addEventListener("DOMContentLoaded", function() {
    console.log("Página carregada e pronta!");

    const empresaString = localStorage.getItem('selectedEmpresa');
    const empresa = JSON.parse(empresaString);

    if (empresa) {
        document.getElementById('empresaImg').src = empresa.img;
        document.getElementById('empresaNome').textContent = empresa.nome;
        document.getElementById('empresaFraseEfeito').textContent = empresa.fraseEfeito;
        document.getElementById('empresaBeneficios').textContent = empresa.beneficios.length > 0 ? `${empresa.beneficios.join(", ")}` : 'Nenhum benefício cadastrado.';
        const empresaWebsite = document.getElementById('empresaWebsite');
        if (empresa.website) {
            empresaWebsite.href = empresa.website;
        } else {
            empresaWebsite.style.display = 'none';
        }
    } else {
        document.getElementById('empresaDetails').innerHTML = "Empresa não encontrada.";
    }

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
