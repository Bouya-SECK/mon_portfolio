/* =============================================
   contact.js — Formulaire de contact
   (main.js doit être chargé avant : il fournit window.t)
   ============================================= */

const sendBtn = document.getElementById('send-btn');
const formMsg = document.getElementById('form-msg');

const EMAILJS_SERVICE_ID = 'service_ezp3ksk';
const EMAILJS_TEMPLATE_ID = 'template_f617f6f';

const t = window.t || (text => text);

if (sendBtn) {
    sendBtn.addEventListener('click', () => {
        const fname = document.getElementById('fname').value.trim();
        const lname = document.getElementById('lname').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();

        // Validation
        if (!fname || !lname || !email || !subject || !message) {
            showMsg(t('Merci de remplir tous les champs.'), 'error');
            return;
        }
        if (!isValidEmail(email)) {
            showMsg(t('Adresse email invalide.'), 'error');
            return;
        }

        const templateParams = {
            from_name: `${fname} ${lname}`,
            from_email: email,
            subject: subject,
            message: message
        };

        // Désactive le bouton pendant l'envoi
        setButton(true);

        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
            .then(() => {
                showMsg(t('Merci ! Ton message a bien été envoyé.'), 'success');

                // Réinitialiser le formulaire
                ['fname', 'lname', 'email', 'message'].forEach(id => {
                    document.getElementById(id).value = '';
                });
                document.getElementById('subject').selectedIndex = 0;
            })
            .catch((error) => {
                console.error('Erreur EmailJS:', error);
                showMsg(t('Une erreur est survenue. Réessaie ou écris-moi directement à bouyaseck02@gmail.com.'), 'error');
            })
            .finally(() => setButton(false));
    });
}

/**
 * Met à jour le bouton en français, puis laisse main.js le retraduire
 * (ainsi le texte d'origine reste toujours le français).
 */
function setButton(isSending) {
    sendBtn.disabled = isSending;
    sendBtn.innerHTML = isSending
        ? '<i class="bi bi-hourglass-split me-2"></i>Envoi en cours...'
        : '<i class="bi bi-send me-2"></i>Envoyer le message';
    if (window.refreshLanguage) window.refreshLanguage();
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