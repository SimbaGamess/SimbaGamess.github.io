if (typeof translations === "undefined") {
    console.error("translations.js wurde nicht geladen!");
} else {
    console.log("translations.js geladen, wende Sprache an...");
}



function setLanguage(lang) {
    localStorage.setItem('language', lang);
    applyLanguage(lang);
}

function applyLanguage(lang) {
    document.documentElement.lang = lang; // HTML-Sprachattribut setzen

    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.dataset.lang; // z. B. "datapacks.title"
        const translation = key.split('.').reduce((obj, k) => obj?.[k], translations[lang]);

        if (translation) {
            // Ersetze alle \n durch <br> im übersetzten Text
            el.innerHTML = translation.replace(/\n/g, '<br>');
        }
    });

    // Setze das Dropdown auf die aktuelle Sprache
    const languageSelect = document.getElementById("languageSwitcher");
    if (languageSelect) {
        languageSelect.value = lang;
    }
}


// Sprache beim Laden setzen
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem('language') || 'de';
    applyLanguage(savedLang);

    // Event Listener für Dropdown
    const languageSelect = document.getElementById("languageSwitcher");
    if (languageSelect) {
        languageSelect.addEventListener("change", (event) => {
            setLanguage(event.target.value);
        });
    }
});