const communityTranslations = {
    ru: {
        title: "Доступ к комьюнити",
        enterCommunity: "В комьюнити!",
        readRules: "Прочитать правила",
        about: "Обо мне",
        games: "Наши игры",
        functions: "Полезные функции"
    },
    en: {
        title: "Community Access",
        enterCommunity: "Enter Community!",
        readRules: "Read Rules",
        about: "About me",
        games: "Our games",
        functions: "Useful functions"
    },
    de: {
        title: "Zugang zur Community",
        enterCommunity: "Zur Community!",
        readRules: "Regeln lesen",
        about: "Über mich",
        games: "Unsere Spiele",
        functions: "Nützliche Funktionen"
    }
};

let currentLang = localStorage.getItem('community_language') || 'ru';

function t(key) {
    return communityTranslations[currentLang]?.[key] || communityTranslations.ru[key];
}

function updateCommunityUILanguage() {
    const titleEl = document.getElementById('pageTitle');
    if (titleEl) titleEl.textContent = t('title');
    
    const btns = document.querySelectorAll('.community-btn');
    const keys = ['enterCommunity', 'readRules'];
    btns.forEach((btn, idx) => {
        if (idx < keys.length) {
            const icon = btn.querySelector('i');
            const text = t(keys[idx]);
            if (icon) {
                btn.innerHTML = icon.outerHTML + ' ' + text;
            } else {
                btn.textContent = text;
            }
        }
    });
    
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        const flags = { ru: '🌐 RU', en: '🌐 EN', de: '🌐 DE' };
        langBtn.innerHTML = flags[currentLang];
    }
    
    document.querySelectorAll('.nav-links a').forEach((link, idx) => {
        const keysNav = ['about', 'games', 'functions'];
        if (idx < keysNav.length) link.textContent = t(keysNav[idx]);
    });
}

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('community_language', lang);
    updateCommunityUILanguage();
}

document.querySelectorAll('.lang-dropdown a').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = item.getAttribute('data-lang');
        if (lang) changeLanguage(lang);
    });
});

updateCommunityUILanguage();