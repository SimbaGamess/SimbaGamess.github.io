document.addEventListener('DOMContentLoaded', () => {
    const headerTable = document.getElementById('fillintable');
    const sectionTitles = document.querySelectorAll('.section-title');
    const addedRows = new Map();


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


    const removeTitleFromTable = (section) => {
        const row = addedRows.get(section);
        if (row) {
            headerTable.removeChild(row);
            addedRows.delete(section);
        }
    };


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


    sectionTitles.forEach(title => {
        observer.observe(title);
    });
})