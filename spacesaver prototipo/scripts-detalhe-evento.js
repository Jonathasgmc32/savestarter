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

    const urlParams = new URLSearchParams(window.location.search);
    const eventId = localStorage.getItem('selectedEventId'); // Obtém o ID do localStorage

    const allEvents = [...eventos, ...reunioes, ...workshops];
    const event = allEvents.find(e => e.title === eventId);

    if (event) {
        document.getElementById('eventImg').src = event.img;
        document.getElementById('eventTitle').textContent = event.title;
        document.getElementById('eventDate').textContent = event.date ? `${event.date}` : '';
        const participantsHTML = event.participants.map(participant => `
            <i class="fas fa-user"></i> ${participant}
        `).join('');
    
        document.getElementById('eventParticipants').innerHTML = participantsHTML;
        document.getElementById('eventDescription').textContent = event.description ? `${event.description}` : '';
    } else {
        document.getElementById('eventDetails').innerHTML = "Evento não encontrado.";
    }

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
