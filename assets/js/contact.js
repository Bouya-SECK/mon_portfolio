/* =============================================
   contact.js — Formulaire de contact
   ============================================= */

const sendBtn = document.getElementById('send-btn');
const formMsg = document.getElementById('form-msg');

if (sendBtn) {
    sendBtn.addEventListener('click', () => {
        const fname = document.getElementById('fname').value.trim();
        const lname = document.getElementById('lname').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();

        // Validation
        if (!fname || !lname || !email || !subject || !message) {
            showMsg('Merci de remplir tous les champs.', 'error');
            return;
        }
        if (!isValidEmail(email)) {
            showMsg('Adresse email invalide.', 'error');
            return;
        }

        // Ouvre le client mail avec les infos pré-remplies
        const sub = encodeURIComponent(`[Portfolio] ${subject} — ${fname} ${lname}`);
        const body = encodeURIComponent(
            `Prénom : ${fname}\nNom : ${lname}\nEmail : ${email}\nSujet : ${subject}\n\n${message}`
        );

        // ⚠️ Remplace l'email ci-dessous par le tien
        window.location.href = `mailto:votre.email@gmail.com?subject=${sub}&body=${body}`;

        showMsg('Merci ! Ton client mail va s\'ouvrir.', 'success');

        // Réinitialiser
        ['fname', 'lname', 'email', 'message'].forEach(id => {
            document.getElementById(id).value = '';
        });
        document.getElementById('subject').selectedIndex = 0;
    });
}

function showMsg(text, type) {
    if (!formMsg) return;
    formMsg.textContent = text;
    formMsg.className = `text-center mt-3 fw-medium ${type === 'success' ? 'text-success' : 'text-danger'}`;
    formMsg.classList.remove('d-none');
    setTimeout(() => formMsg.classList.add('d-none'), 5000);
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}