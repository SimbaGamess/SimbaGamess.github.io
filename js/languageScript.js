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
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.dataset.lang;
        const translation = key.split('.').reduce((obj, k) => obj?.[k], translations[lang]);

        if (translation) {

            el.innerHTML = translation.replace(/\n/g, '<br>');
        }
    });


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