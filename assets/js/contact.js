/* =============================================
   contact.js — Formulaire de contact
   ============================================= */

const sendBtn = document.getElementById('send-btn');
const formMsg = document.getElementById('form-msg');

const EMAILJS_SERVICE_ID = 'service_ezp3ksk';
const EMAILJS_TEMPLATE_ID = 'template_f617f6f';

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

        const templateParams = {
            from_name: `${fname} ${lname}`,
            from_email: email,
            subject: subject,
            message: message
        };

        // Désactive le bouton pendant l'envoi
        sendBtn.disabled = true;
        sendBtn.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Envoi en cours...';

        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
            .then(() => {
                showMsg('Merci ! Ton message a bien été envoyé.', 'success');

                // Réinitialiser le formulaire
                ['fname', 'lname', 'email', 'message'].forEach(id => {
                    document.getElementById(id).value = '';
                });
                document.getElementById('subject').selectedIndex = 0;
            })
            .catch((error) => {
                console.error('Erreur EmailJS:', error);
                showMsg('Une erreur est survenue. Réessaie ou écris-moi directement à bouyaseck02@gmail.com.', 'error');
            })
            .finally(() => {
                sendBtn.disabled = false;
                sendBtn.innerHTML = '<i class="bi bi-send me-2"></i>Envoyer le message';
            });
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