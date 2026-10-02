/* =============================================
   main.js — Comportements communs à toutes les pages
   1. Traductions (FR -> EN)
   2. Thème clair / sombre
   3. Langue FR / ENG
   4. Navbar, reveal, smooth scroll
   ============================================= */

/* ══════════════════════════════
   1. TRADUCTIONS
   Clé = texte français (espaces normalisés)
   Valeur = traduction anglaise
   Pour traduire un nouveau texte : ajoute simplement une ligne.
══════════════════════════════ */
const EN = {
    // Titres de page
    "Portfolio — Développeur Web Junior": "Portfolio — Junior Web Developer",
    "Projets — Portfolio": "Projects — Portfolio",

    // Navbar
    "Accueil": "Home",
    "À propos": "About",
    "Compétences": "Skills",
    "Projets": "Projects",
    "Me contacter": "Contact me",

    // Hero
    "Disponible pour de nouvelles opportunités": "Available for new opportunities",
    "Bonjour, je suis": "Hello, I'm",
    "Développeur": "",
    "Full-Stack": "Full-Stack developer",
    ", toujours en quête de nouvelles connaissances et de défis techniques.": ", always looking for new knowledge and technical challenges.",
    "J'aime concevoir des solutions efficaces, apprendre de nouvelles technologies et contribuer à des projets innovants avec sérieux et esprit d'équipe.": "I enjoy designing efficient solutions, learning new technologies and contributing to innovative projects with seriousness and team spirit.",
    "Voir mes projets": "View my projects",
    "Projets réalisés": "Projects completed",
    "1 an": "1 year",
    "D'expérience": "of experience",

    // À propos
    "Qui suis-je ?": "Who am I?",
    "Développeur basé à": "Developer based in",
    "Jeune": "Young",
    "développeur Full-Stack": "Full-Stack developer",
    "diplômé d'une": "holding a",
    "Licence en Génie Logiciel": "Bachelor's degree in Software Engineering",
    ", passionné par le développement web, mobile et les nouvelles technologies. J'aime concevoir et développer des applications concrètes, performantes et adaptées aux besoins des utilisateurs. Au cours de ma formation et de mes différents projets, j'ai développé des compétences en TypeScript, Java, Spring Boot, Angular, Laravel, C#, Oracle et MySQL, ainsi qu'en conception et gestion de bases de données.":
        ", passionate about web and mobile development and new technologies. I enjoy designing and building concrete, high-performing applications tailored to users' needs. Throughout my studies and projects, I developed skills in TypeScript, Java, Spring Boot, Angular, Laravel, C#, Oracle and MySQL, as well as database design and management.",
    "Curieux, rigoureux et autodidacte": "Curious, rigorous and self-taught",
    ", je cherche constamment à approfondir mes compétences et à relever de nouveaux défis techniques. Mon objectif est d'intégrer une équipe dynamique au sein de laquelle je pourrai mettre mes connaissances en pratique, continuer à progresser et contribuer efficacement à la réalisation de projets innovants.":
        ", I constantly seek to deepen my skills and take on new technical challenges. My goal is to join a dynamic team where I can put my knowledge into practice, keep growing and contribute effectively to innovative projects.",
    "Disponible pour freelance / CDI": "Available for freelance / full-time",
    "Télécharger mon CV": "Download my resume",

    // Compétences
    "Mon stack technique": "My tech stack",
    "Interfaces & styles": "Interfaces & styling",
    "Logique serveur & API": "Server logic & APIs",
    "Outils": "Tools",
    "Workflow & environnement": "Workflow & environment",

    // Projets (aperçu + page projets)
    "Ce que j'ai construit": "What I've built",
    "Tous les projets": "All projects",
    "Voir le détail": "See details",
    "Mes Projets": "My Projects",
    "Cliquez sur une image pour voir les captures d'écran étape par étape.": "Click an image to browse the screenshots step by step.",
    "Cliquez sur": "Click",
    "pour voir la vidéo de démonstration.": "to watch the demo video.",
    "Voir les captures": "View screenshots",
    "Projet phare": "Featured project",
    "Démonstration": "Demo",

    // Contact
    "Travaillons ensemble": "Let's work together",
    "Disponible pour des opportunités de stage, d'alternance, de freelance ou de CDI.": "Available for internship, work-study, freelance or full-time opportunities.",
    "Restons en contact": "Let's stay in touch",
    "N'hésite pas à me contacter pour toute opportunité ou collaboration.": "Feel free to reach out for any opportunity or collaboration.",
    "Disponible maintenant": "Available now",
    "Ouvert aux opportunités de freelance, stage, alternance ou CDI. Je réponds généralement sous 24h.": "Open to freelance, internship, work-study or full-time opportunities. I usually reply within 24h.",
    "Envoyer un message": "Send a message",
    "Prénom": "First name",
    "Nom": "Last name",
    "Sujet": "Subject",
    "Choisir un sujet": "Choose a subject",
    "Proposition de mission freelance": "Freelance mission proposal",
    "Offre de stage & alternance": "Internship & work-study offer",
    "Offre CDI / CDD": "Full-time / fixed-term offer",
    "Autre": "Other",
    "Votre prénom": "Your first name",
    "Votre nom": "Your last name",
    "Décrivez votre projet ou votre besoin...": "Describe your project or your needs...",
    "Envoyer le message": "Send message",

    // Messages dynamiques (contact.js)
    "Envoi en cours...": "Sending...",
    "Merci de remplir tous les champs.": "Please fill in all fields.",
    "Adresse email invalide.": "Invalid email address.",
    "Merci ! Ton message a bien été envoyé.": "Thank you! Your message has been sent.",
    "Une erreur est survenue. Réessaie ou écris-moi directement à bouyaseck02@gmail.com.": "Something went wrong. Please try again or write to me directly at bouyaseck02@gmail.com.",

    // Design v3 (maquette)
    "Je suis développeur Full-Stack": "I'm a Full-Stack developer",
    "Je crée des solutions pour le web.": "I build solutions for the web.",
    "Développeur Full-Stack passionné, spécialisé dans la conception d'applications web et mobiles performantes avec des technologies modernes.": "Passionate Full-Stack developer specializing in building high-performing web and mobile applications with modern technologies.",
    "Passionné par la création de solutions digitales": "Passionate about creating digital solutions",
    "Diplômé d'une Licence en Génie Logiciel, j'aide les entreprises et les particuliers à concrétiser leurs idées grâce à un code propre, efficace et facile à maintenir.": "With a Bachelor's degree in Software Engineering, I help businesses and individuals bring their ideas to life through clean, efficient and maintainable code.",
    "En savoir plus sur moi": "Learn more about me",
    "Technologies maîtrisées": "Technologies mastered",
    "Mes compétences": "My skills",
    "Technologies que je maîtrise": "Technologies I master",
    "Projets en vedette": "Featured projects",
    "Quelques-unes de mes réalisations récentes": "Some of my recent work",
    "Application web de gestion des commandes d'un restaurant, de la carte à la facture PDF.": "Web application for managing a restaurant's orders, from the menu to the PDF invoice.",
    "Application de gestion des dépenses personnelles et de suivi du budget mensuel.": "Personal expense management and monthly budget tracking application.",
    "Application desktop de gestion des consultations, des rendez-vous et de la facturation.": "Desktop application for managing consultations, appointments and billing.",
    "Voir le projet": "View project",
    "Développeur Full-Stack": "Full-Stack Developer",
    "Suivez-moi": "Follow me",
    "© 2026 Bouya SECK. Tous droits réservés.": "© 2026 Bouya SECK. All rights reserved.",
    "Fait avec": "Made with",
    "par Bouya": "by Bouya",

    // Nouveau design (hero + CTA)
    "Technologies que j'utilise": "Technologies I work with",
    "Un projet en tête ?": "Have a project in mind?",
    "Je suis toujours ouvert à discuter de nouveaux projets et d'opportunités.": "I'm always open to discussing new projects and opportunities.",

    // Design CodeCraft (index)
    "Développeur Full-Stack": "Full-Stack Developer",
    "Je construis des solutions pour le web.": "I build solutions for the web.",
    "Développeur Full-Stack passionné, je conçois des applications web performantes avec des technologies modernes.": "A passionate Full-Stack developer, I build high-performing web applications with modern technologies.",
    "Je suis passionné par la création de solutions digitales": "I'm passionate about creating digital solutions",
    "Jeune développeur Full-Stack diplômé d'une Licence en Génie Logiciel, je conçois des applications concrètes, performantes et adaptées aux besoins des utilisateurs.": "Young Full-Stack developer with a Bachelor's degree in Software Engineering, I build concrete, high-performing applications tailored to users' needs.",
    "Projets détaillés": "Detailed projects",
    "Mes compétences": "My skills",
    "Technologies que je maîtrise": "Technologies I master",
    "Projets en vedette": "Featured projects",
    "Quelques-unes de mes réalisations récentes": "Some of my recent work",
    "Voir le projet": "View project",
    "Application de commande pour restaurant, du catalogue à la facture PDF.": "Restaurant ordering application, from catalog to PDF invoice.",
    "Gestion des dépenses personnelles : catégories, budget et statistiques.": "Personal expense management: categories, budget and statistics.",
    "Application desktop de gestion de clinique : consultations, RDV et facturation.": "Desktop clinic management application: consultations, appointments and billing.",
    "Suivez-moi": "Follow me",
    "© 2026 Bouya SECK. Tous droits réservés.": "© 2026 Bouya SECK. All rights reserved.",
    "Fait avec": "Made with",
    "par Bouya SECK": "by Bouya SECK",

    // Galerie (projects.js)
    "Captures d'écran": "Screenshots",
    "Étape": "Step",

    // Titres de projets
    "Système de Gestion Clinique Médicale": "Medical Clinic Management System",
    "SunuXam - Plateforme de Gestion de Concours": "SunuXam - Competition Management Platform",

    // Descriptions — page d'accueil
    "Une application web professionnelle, responsive, couvrant l'intégralité du cycle de vie d'une commande restaurant — de la consultation du catalogue jusqu'à la facture PDF — avec une architecture propre, maintenable et prête pour la production.":
        "A professional, responsive web application covering the entire lifecycle of a restaurant order — from browsing the catalog to the PDF invoice — with a clean, maintainable, production-ready architecture.",
    "Application de Gestion des Dépenses Personnelles Sama Xaliss est une application web de gestion des dépenses personnelles développée en Java EE. Elle permet aux utilisateurs de suivre leurs dépenses, de créer des catégories personnalisées, d'analyser leurs habitudes de consommation et de planifier leur budget mensuel. L'application offre une interface intuitive pour une gestion financière efficace et simplifiée.":
        "Personal Expense Management Application. Sama Xaliss is a personal expense management web application built with Java EE. It lets users track their expenses, create custom categories, analyze their spending habits and plan their monthly budget. The application provides an intuitive interface for efficient and simple financial management.",

    // Descriptions — page projets
    "Le restaurant NOMA Burger avait besoin d'une solution numérique pour automatiser la gestion de ses commandes, remplacer les processus manuels et améliorer l'expérience de ses clients. J'ai conçu et développé l'intégralité de l'application, de la base de données à l'interface utilisateur.":
        "The NOMA Burger restaurant needed a digital solution to automate order management, replace manual processes and improve the customer experience. I designed and developed the entire application, from the database to the user interface.",
    "Application de Gestion des Dépenses Personnelles – Java EE Développement d'une application web en Java EE permettant la gestion sécurisée des dépenses personnelles : authentification, gestion des catégories et transactions, filtrage des données et tableau de bord statistique.":
        "Personal Expense Management Application – Java EE. Development of a Java EE web application for secure personal expense management: authentication, category and transaction management, data filtering and a statistics dashboard.",
    "Application desktop architecturée en couches (MVC/SOLID) couvrant les consultations, la facturation et les RDV avec contrôle d'interchevauchement. Intègre l'authentification BCrypt, le contrôle d'accès RBAC et l'export PDF dynamique via iText.":
        "Desktop application with a layered architecture (MVC/SOLID) covering consultations, billing and appointments with overlap checking. Includes BCrypt authentication, RBAC access control and dynamic PDF export via iText.",
    "Application web full-stack de digitalisation des concours de recrutement. Elle permet l'inscription des candidats, le suivi des dossiers, la gestion des épreuves, la saisie des notes et la délibération/publication automatique des résultats avec authentification JWT.":
        "Full-stack web application for digitizing recruitment competitions. It handles candidate registration, file tracking, exam management, grade entry and automatic deliberation/publication of results, with JWT authentication.",

    // Footer (les deux orthographes, au cas où tu corriges la faute)
    "Un developpeur passionné": "A passionate developer",
    "Un développeur passionné": "A passionate developer"
};

/* ══════════════════════════════
   OUTILS
══════════════════════════════ */
const norm = s => s.replace(/’/g, "'").replace(/\s+/g, ' ').trim();

// localStorage peut être indisponible (navigation privée...) → on protège
const storageGet = key => { try { return localStorage.getItem(key); } catch { return null; } };
const storageSet = (key, value) => { try { localStorage.setItem(key, value); } catch { /* ignore */ } };

/** Retourne la traduction d'un texte français si la langue courante est EN. */
function translate(fr, lang = currentLang) {
    if (lang !== 'en') return fr;
    const key = norm(fr);
    return Object.prototype.hasOwnProperty.call(EN, key) ? EN[key] : fr;
}
window.t = text => translate(text); // utilisable depuis contact.js

/* ══════════════════════════════
   2. THÈME CLAIR / SOMBRE
══════════════════════════════ */
let currentTheme = storageGet('theme') === 'light' ? 'light' : 'dark';

function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    storageSet('theme', theme);

    const icon = document.querySelector('#themeToggle i');
    if (icon) {
        // En sombre on propose le soleil (→ passer au clair), et inversement
        icon.className = 'bi ' + (theme === 'dark' ? 'bi-sun' : 'bi-moon-stars');
    }
}

/* ══════════════════════════════
   3. LANGUE FR / ENG
══════════════════════════════ */
let currentLang = storageGet('lang') === 'en' ? 'en' : 'fr';
const textOriginals = new WeakMap(); // mémorise le texte français de chaque nœud
const originalTitle = document.title;

function translateTextNodes(lang) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode: node => {
            const skip = ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(node.parentNode.nodeName);
            return skip || !node.nodeValue.trim() ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
        }
    });

    let node;
    while ((node = walker.nextNode())) {
        if (!textOriginals.has(node)) textOriginals.set(node, node.nodeValue);
        const original = textOriginals.get(node);
        const translated = translate(original, lang);

        if (translated === original) {
            node.nodeValue = original;
        } else {
            // On conserve les espaces autour du texte pour ne pas coller les mots
            const lead = original.match(/^\s*/)[0];
            const trail = original.match(/\s*$/)[0];
            node.nodeValue = lead + translated + trail;
        }
    }
}

function translateAttributes(lang) {
    document.querySelectorAll('[placeholder]').forEach(el => {
        el.dataset.i18nPlaceholder ??= el.getAttribute('placeholder');
        el.setAttribute('placeholder', translate(el.dataset.i18nPlaceholder, lang));
    });
}

function applyLanguage(lang) {
    currentLang = lang;
    storageSet('lang', lang);
    document.documentElement.lang = lang;
    document.title = translate(originalTitle, lang);

    translateTextNodes(lang);
    translateAttributes(lang);

    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        themeBtn.setAttribute('aria-label', lang === 'en' ? 'Toggle theme' : 'Changer de thème');
    }
}

// Permet à d'autres scripts (contact.js) de retraduire du contenu ajouté dynamiquement
window.refreshLanguage = () => applyLanguage(currentLang);

/* ══════════════════════════════
   Injection des boutons dans la navbar
══════════════════════════════ */
function injectControls() {
    const lists = document.querySelectorAll('#navbarNav .navbar-nav');
    const list = lists[lists.length - 1]; // groupe de droite (bouton + thème + langue)
    if (!list) return;

    const li = document.createElement('li');
    li.className = 'nav-item d-flex align-items-center gap-2 ms-lg-2';
    li.innerHTML = `
        <button type="button" id="themeToggle" class="theme-toggle"><i class="bi"></i></button>
        <div class="lang-switch" role="group" aria-label="Language">
            <button type="button" data-lang="fr">FR</button>
            <button type="button" data-lang="en">ENG</button>
        </div>`;
    list.appendChild(li);

    li.querySelector('#themeToggle').addEventListener('click', () => {
        applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
    li.querySelectorAll('[data-lang]').forEach(btn => {
        btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
    });
}

injectControls();
applyTheme(currentTheme);
applyLanguage(currentLang);

/* ══════════════════════════════
   4. COMPORTEMENTS COMMUNS
══════════════════════════════ */

/* ── Navbar : opacité au scroll ── */
const nav = document.getElementById('mainNav');
if (nav) {
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });
}

/* ── Fermer le menu mobile au clic sur un lien ── */
document.querySelectorAll('.nav-custom').forEach(link => {
    link.addEventListener('click', () => {
        const collapse = document.getElementById('navbarNav');
        if (collapse && collapse.classList.contains('show')) {
            bootstrap.Collapse.getOrCreateInstance(collapse).hide();
        }
    });
});

/* ── Reveal au scroll (IntersectionObserver) ── */
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });
    revealEls.forEach(el => io.observe(el));
}

/* ── Smooth scroll ancres ──
   Correction : href="#" faisait planter querySelector('#') */
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        if (href.length < 2) return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});