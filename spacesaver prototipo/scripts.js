document.addEventListener("DOMContentLoaded", function() {
    console.log("Página carregada e pronta!");

    const eventos = [
        {
            title: "Web Summit",
            img: "images/events/web-summit.png",
            date: "14 ~ 17 de Novembro",
            description: "Conferência de tecnologia global, reunindo líderes e inovadores.",
            participants: ["João Silva", "Maria Oliveira", "Carlos Santos"]
        },
        {
            title: "VTEX Day",
            img: "images/events/vtex-day.jpg",
            date: "10 ~ 11 de Outubro",
            description: "Conferência de tecnologia global, reunindo líderes e inovadores.",
            participants: ["João Silva", "Maria Oliveira", "Carlos Santos"]
        }
    ];

    const reunioes = [
        {
            title: "Reunião RH",
            img: "images/meetings/meeting1.png",
            date: "Qua, 08 MAI 08:30",
            description: "Discussão sobre os novos benefícios para os funcionários.",
            participants: ["Ana Pereira", "Bruno Costa"]
        },
        {
            title: "Negócios",
            img: "images/meetings/meeting2.png",
            date: "Sex, 10 MAI 14:00",
            description: "Conferência de tecnologia global, reunindo líderes e inovadores.",
            participants: ["João Silva", "Maria Oliveira", "Carlos Santos"]
        },
        {
            title: "Reunião RH",
            img: "images/meetings/meeting1.png",
            date: "Qui, 30 MAI 08:30",
            description: "Discussão sobre os novos benefícios para os funcionários.",
            participants: ["Ana Pereira", "Bruno Costa"]
        },
        {
            title: "Negócios",
            img: "images/meetings/meeting2.png",
            date: "Seg, 03 JUN 14:00",
            description: "Discussão sobre os novos benefícios para os funcionários.",
            participants: ["Ana Pereira", "Bruno Costa"]
        }
    ];

    const workshops = [
        {
            title: "Workshop",
            img: "images/workshops/workshop.jpg",
            date: "Seg, 03 JUN 14:00",
            description: "Discussão sobre os novos benefícios para os funcionários.",
            participants: ["Ana Pereira", "Bruno Costa"]
        }
    ];
    

    function createCard(item) {
        const participantsHTML = item.participants 
            ? `<p>Participantes: ${item.participants.join(", ")}</p>`
            : "";
        return `
            <div class="card" data-event-id="${item.title}">
                <img src="${item.img}" alt="${item.title}">
                <div class="content">
                    <h3>${item.title}</h3>
                    ${item.date ? `<p>${item.date}</p>` : ''}
                    ${item.description ? `<p>${item.description}</p>` : ''}
                </div>
            </div>
        `;
    }
    

    function renderSection(sectionId, items) {
        const section = document.getElementById(sectionId);
        items.forEach(item => {
            section.insertAdjacentHTML('beforeend', createCard(item));
        });
    }

    renderSection('eventos', eventos);
    renderSection('reunioes', reunioes);
    renderSection('workshops', workshops);

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const eventId = card.dataset.eventId;
            localStorage.setItem('selectedEventId', eventId); // Armazena o ID no localStorage
            window.location.href = 'pagina-detalhe-evento.html';
        });
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
