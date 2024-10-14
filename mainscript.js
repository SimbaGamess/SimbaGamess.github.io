
document.querySelectorAll('a').forEach(link => {
    if (link.href.startsWith('http')) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const projectsTitle = document.querySelector('.container > h1:nth-of-type(1)');
    const minecraftTitle = document.querySelector('.container > h1:nth-of-type(2)');

    window.addEventListener('scroll', () => {
        const projectsRect = projectsTitle.getBoundingClientRect();
        const minecraftRect = minecraftTitle.getBoundingClientRect();
        
        // Wenn das Projects-Element aus dem sichtbaren Bereich verschwindet
        if (projectsRect.bottom <= header.clientHeight) {
            header.innerHTML =  `
            <table>
                <tbody>
                    <tr>
                        <td>
                            <a href="https://www.twitch.tv/ttvsimbagames" target="_blank">
                                <img style="height: 60px; width: 60px; border-radius: 50%; border: 1px solid white;"
                                    src="/images/PB.png" alt="Profilbild">
                            </a>
                        </td>
                        <td>
                            <a href="https://github.com/SimbaGamess" target="_blank" rel="noopener noreferrer"
                                style="color: white; text-decoration: none; font-size: 30px;">Jan Magister Portfolio</a>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                        </td>
                        <td>
                            Projects
                        </td>
                    </tr>
                </tfoot>
            </table>
        `;
        } else {

            header.innerHTML = `
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <a href="https://www.twitch.tv/ttvsimbagames" target="_blank">
                                    <img style="height: 60px; width: 60px; border-radius: 50%; border: 1px solid white;"
                                        src="/images/PB.png" alt="Profilbild">
                                </a>
                            </td>
                            <td>
                                <a href="https://github.com/SimbaGamess" target="_blank" rel="noopener noreferrer"
                                    style="color: white; text-decoration: none; font-size: 30px;">Jan Magister Portfolio</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            `;
        }

        // Wenn das Minecraft Data Packs-Element aus dem sichtbaren Bereich verschwindet
        if (minecraftRect.bottom <= header.clientHeight) {
            header.innerHTML =  `
            <table>
                <tbody>
                    <tr>
                        <td>
                            <a href="https://www.twitch.tv/ttvsimbagames" target="_blank">
                                <img style="height: 60px; width: 60px; border-radius: 50%; border: 1px solid white;"
                                    src="/images/PB.png" alt="Profilbild">
                            </a>
                        </td>
                        <td>
                            <a href="https://github.com/SimbaGamess" target="_blank" rel="noopener noreferrer"
                                style="color: white; text-decoration: none; font-size: 30px;">Jan Magister Portfolio</a>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                        </td>
                        <td>
                            Mincraft Data Packs
                        </td>
                    </tr>
                </tfoot>
            </table>
        `;
        }
    });
});


