document.addEventListener("DOMContentLoaded", function() {
    console.log("Página carregada e pronta!");

    const services = [
        {
            icon: "fas fa-wifi",
            name: "Café Digital",
            category: "Cafeteria",
            hours: "Seg - Sex: 08:00 - 18:00"
        },
        {
            icon: "fas fa-running",
            name: "Academia Top Fitness",
            category: "Academia",
            hours: "Seg - Sáb: 06:00 - 22:00"
        },
        {
            icon: "fas fa-shopping-cart",
            name: "Supermercado Econômico",
            category: "Supermercado",
            hours: "Seg - Dom: 07:00 - 23:00"
        },
        {
            icon: "fas fa-utensils",
            name: "Restaurante Saboroso",
            category: "Restaurante",
            hours: "Seg - Sáb: 11:00 - 23:00"
        },
        {
            icon: "fas fa-hotel",
            name: "Hotel Estrela",
            category: "Hotel",
            hours: "Aberto 24 horas"
        },
        {
            icon: "fas fa-spa",
            name: "Spa Relaxante",
            category: "Spa",
            hours: "Ter - Dom: 09:00 - 20:00"
        }
    ];

    const servicesContainer = document.getElementById('services');

    services.forEach(service => {
        const serviceElement = document.createElement('div');
        serviceElement.classList.add('service');

        serviceElement.innerHTML = `
            <i class="${service.icon}"></i>
            <div class="service-info">
                <h3>${service.name}</h3>
                <p><strong>Categoria:</strong> ${service.category}</p>
                <p><strong>Horário de Funcionamento:</strong> ${service.hours}</p>
            </div>
        `;

        servicesContainer.appendChild(serviceElement);
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