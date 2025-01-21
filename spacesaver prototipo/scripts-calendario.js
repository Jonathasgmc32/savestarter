document.addEventListener("DOMContentLoaded", function() {
    console.log("Página carregada e pronta!");

    const currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    const renderCalendar = (month, year) => {
        document.getElementById('month').innerText = months[month];
        document.getElementById('year').innerText = year;

        const daysContainer = document.querySelector('.days');
        daysContainer.innerHTML = '';

        const firstDay = new Date(year, month, 1).getDay();
        const lastDay = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('li');
            daysContainer.appendChild(emptyCell);
        }

        for (let i = 1; i <= lastDay; i++) {
            const dayCell = document.createElement('li');
            dayCell.innerText = i;
            dayCell.addEventListener('click', () => showEvents(i, month, year));
            if (i === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear()) {
                dayCell.classList.add('active');
            }
            daysContainer.appendChild(dayCell);
        }
    };

    const showEvents = (day, month, year) => {
        const eventsContainer = document.getElementById('events');
        eventsContainer.innerHTML = `<div class="event"><h3>Eventos em ${day} ${months[month]} ${year}</h3></div>`;
    };

    document.querySelector('.prev').addEventListener('click', () => {
        currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
        currentYear = (currentMonth === 11) ? currentYear - 1 : currentYear;
        renderCalendar(currentMonth, currentYear);
    });

    document.querySelector('.next').addEventListener('click', () => {
        currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
        currentYear = (currentMonth === 0) ? currentYear + 1 : currentYear;
        renderCalendar(currentMonth, currentYear);
    });

    renderCalendar(currentMonth, currentYear);
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