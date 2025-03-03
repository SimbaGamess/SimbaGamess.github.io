document.addEventListener('DOMContentLoaded', () => {
    const headerTable = document.getElementById('fillintable');
    const sectionTitles = document.querySelectorAll('.section-title');
    const addedRows = new Map();

    // Funktion, um den Titel dynamisch zur Tabelle hinzuzufügen
    const addTitleToTable = (section) => {
        const row = document.createElement('tr');
        const titleCell = document.createElement('td');
        const sectionCell = document.createElement('td');

        titleCell.textContent = "";
        sectionCell.textContent = "- "+section;

        row.appendChild(titleCell);
        row.appendChild(sectionCell);
        headerTable.appendChild(row);
        addedRows.set(section, row);
    };

    // Funktion, um den Titel aus der Tabelle zu entfernen
    const removeTitleFromTable = (section) => {
        const row = addedRows.get(section);
        if (row) {
            headerTable.removeChild(row);
            addedRows.delete(section); // Entferne den Eintrag aus der Map
        }
    };

    // Beobachter für das Scrollen und das Sichtbarmachen der Titel
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const section = entry.target;
            const titleElement = section.querySelector('.section-title');

            if (!entry.isIntersecting && entry.boundingClientRect.top <= 10) {
                addTitleToTable(section.textContent);
            } else {
                removeTitleFromTable(section.textContent);
            }

        });
    }, {
        threshold: 1.0,
    });

    // Beobachte alle Sektionen mit dem .section-title
    sectionTitles.forEach(title => {
        observer.observe(title);
    });
})