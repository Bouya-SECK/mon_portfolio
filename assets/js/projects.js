/* =============================================
   projects.js — Galerie captures + Modal vidéo
   ============================================= */

/* ══════════════════════════════════════════════
   DONNÉES : configure ici les images de chaque projet
   ══════════════════════════════════════════════

   Pour chaque projet, ajoute les chemins vers
   tes captures d'écran dans le tableau "screenshots".
   Exemple :
     screenshots: [
       'assets/images/projects/p1/step1.png',
       'assets/images/projects/p1/step2.png',
       'assets/images/projects/p1/step3.png',
     ]
   ============================================= */
const projectsData = [
    {
        name: 'Nom du Projet 1',
        screenshots: [
            'assets/images/projects/projet1/isiburger.png',
            'assets/images/projects/projet1/img11.png',
            'assets/images/projects/projet1/image1.png',
            'assets/images/projects/projet1/image2.png',
            'assets/images/projects/projet1/img3.png',
            'assets/images/projects/projet1/img4.png',
            'assets/images/projects/projet1/img5.png',
            'assets/images/projects/projet1/img6.png',
            'assets/images/projects/projet1/img7.png',
            'assets/images/projects/projet1/img9.png',
            'assets/images/projects/projet1/img10.png',
        ]
    },
    {
        name: 'Nom du Projet 2',
        screenshots: [
            'assets/images/projects/projet2/Screenshot 2026-06-08 010030.png',
            'assets/images/projects/projet2/Screenshot 2026-06-08 010019.png',
            'assets/images/projects/projet2/Dashboard.png',
            'assets/images/projects/projet2/pageCategorie.png',
            'assets/images/projects/projet2/pageDepense.png',
            'assets/images/projects/projet2/pageProfil.png',
        ]
    },
    {
        name: 'Nom du Projet 3',
        screenshots: [
            'assets/images/projects/projet3/Capture d’écran 2026-09-22 155007.png',
            'assets/images/projects/projet3/Capture d’écran 2026-09-22 155117.png',
            'assets/images/projects/projet3/Capture d’écran 3.png',
            'assets/images/projects/projet3/Capture d’écran 4.png',
            'assets/images/projects/projet3/Capture d’écran 5.png',
            'assets/images/projects/projet3/Capture d’écran 6.png',
            'assets/images/projects/projet3/Capture d’écran 7.png',
            'assets/images/projects/projet3/Capture d’écran 8.png',
        ]
    },
    {
        name: 'Nom du Projet 4',
        screenshots: [
            'assets/images/projects/projet4/Capture d’écran 1.png',
            'assets/images/projects/projet4/Capture d’écran 2.png',
            'assets/images/projects/projet4/Capture d’écran 3.png',
        ]
    }
];

/* ══════════════════════════════
   GALERIE — captures d'écran
══════════════════════════════ */
let currentProject = 0;
let currentSlide = 0;
let galleryModal = null;

function openGallery(projectIndex) {
    currentProject = projectIndex;
    currentSlide = 0;
    const project = projectsData[projectIndex];

    // Titre
    document.getElementById('galleryTitle').textContent = project.name + ' — Captures d\'écran';

    // Construire les miniatures
    const thumbsContainer = document.getElementById('galleryThumbs');
    thumbsContainer.innerHTML = '';
    project.screenshots.forEach((src, i) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Étape ${i + 1}`;
        img.className = 'gallery-thumb-item' + (i === 0 ? ' active' : '');
        img.onclick = () => goToSlide(i);
        thumbsContainer.appendChild(img);
    });

    // Afficher la première image
    renderSlide();

    // Ouvrir le modal Bootstrap
    if (!galleryModal) {
        galleryModal = new bootstrap.Modal(document.getElementById('galleryModal'));
    }
    galleryModal.show();
}

function renderSlide() {
    const project = projectsData[currentProject];
    const total = project.screenshots.length;
    const imgEl = document.getElementById('galleryMainImg');
    const counterEl = document.getElementById('slideCounter');
    const thumbs = document.querySelectorAll('.gallery-thumb-item');

    imgEl.src = project.screenshots[currentSlide];
    counterEl.textContent = `${currentSlide + 1} / ${total}`;

    // Mettre à jour la miniature active
    thumbs.forEach((t, i) => t.classList.toggle('active', i === currentSlide));
}

function nextSlide() {
    const total = projectsData[currentProject].screenshots.length;
    currentSlide = (currentSlide + 1) % total;
    renderSlide();
}

function prevSlide() {
    const total = projectsData[currentProject].screenshots.length;
    currentSlide = (currentSlide - 1 + total) % total;
    renderSlide();
}

function goToSlide(index) {
    currentSlide = index;
    renderSlide();
}

/* Navigation clavier dans la galerie */
document.addEventListener('keydown', e => {
    const modal = document.getElementById('galleryModal');
    if (modal && modal.classList.contains('show')) {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    }
});

/* ══════════════════════════════
   MODAL VIDÉO — démonstration
══════════════════════════════ */
let videoModal = null;

function openVideo(src) {
    const videoEl = document.getElementById('demoVideo');
    videoEl.src = src;

    if (!videoModal) {
        videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
    }

    // Arrêter la vidéo quand on ferme le modal
    document.getElementById('videoModal').addEventListener('hidden.bs.modal', () => {
        videoEl.pause();
        videoEl.src = '';
    }, { once: true });

    videoModal.show();
}