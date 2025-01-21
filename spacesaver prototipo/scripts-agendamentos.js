document.addEventListener("DOMContentLoaded", function() {
    console.log("Página carregada e pronta!");

    const eventosData = [
        { nome: "Solar Shop", data: "25/06/2024 às 14:00" },
        { nome: "Euro Cash", data: "03/07/2024 às 14:00" },
        { nome: "Workshop anual", data: "12/07/2024 às 14:00" },
    ];

    const reunioesData = [
        { nome: "Reunião Chefia", data: "22/06/2024 às 14:00" },
        { nome: "Reunião Conselho", data: "02/07/2024 às 14:00" },
        { nome: "Reunião Funcionários", data: "22/07/2024 às 14:00" },
        { nome: "Reunião Parcerias", data: "30/07/2024 às 14:00" },
    ];

    function renderListItems(data, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = "";

        data.forEach(item => {
            const li = document.createElement("li");
            const eventDate = new Date(item.data.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3-$2-$1"));
            const today = new Date();
            const isPastEvent = eventDate < today;
            const nomeSpan = document.createElement("span");
            nomeSpan.textContent = item.nome;
            nomeSpan.classList.add("event-name");
            const dataSpan = document.createElement("span");
            dataSpan.textContent = item.data;
            dataSpan.classList.add("event-date");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.classList.add("check-icon");
            checkbox.checked = isPastEvent;

            const checkboxStateKey = `${containerId}-${item.nome}`;
            const savedState = localStorage.getItem(checkboxStateKey);
            checkbox.checked = savedState === "true";

            li.appendChild(nomeSpan);
            li.appendChild(dataSpan);
            li.appendChild(checkbox);

            li.style.backgroundColor = isPastEvent ? "#f2f2f2" : "#00d084";
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    li.style.backgroundColor = "#f2f2f2"; 
                } else {
                    li.style.backgroundColor = eventDate < today ? "#f2f2f2" : "#00d084"; 
                }
                localStorage.setItem(checkboxStateKey, this.checked);
                li.style.backgroundColor = this.checked || eventDate < today ? "#f2f2f2" : "#00d084"; 
            });
            container.appendChild(li);
        });
    }
    
    renderListItems(eventosData, "eventos");
    renderListItems(reunioesData, "reunioes");

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
