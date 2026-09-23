/* =============================================
   main.js — Comportements communs à toutes les pages
   ============================================= */

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
            new bootstrap.Collapse(collapse).hide();
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

/* ── Smooth scroll ancres ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});