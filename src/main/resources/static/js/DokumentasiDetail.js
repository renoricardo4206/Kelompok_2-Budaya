/* ── DOKUMENTASIDETAIL.JS — Warisan ── */

// ========== SHARE FUNCTION ==========
function sharePost() {
    const url = window.location.href;
    const title = document.title;
    
    if (navigator.share) {
        navigator.share({
            title: title,
            url: url
        }).catch(() => {});
    } else {
        navigator.clipboard.writeText(url);
        showToast('Link disalin!', 'success');
    }
}

// ========== LIKE FUNCTION ==========
function toggleLike() {
    showToast('Fitur dukung akan segera hadir!', 'info');
}

// ========== UPLOAD MODAL ==========
function openModal() {
    const modal = document.getElementById('uploadModal');
    if (modal) {
        modal.classList.add('open');
        document.body.classList.add('locked');
    }
}

function closeModal() {
    const modal = document.getElementById('uploadModal');
    if (modal) {
        modal.classList.remove('open');
        document.body.classList.remove('locked');
    }
}

// Close modal when clicking outside
const uploadModal = document.getElementById('uploadModal');
if (uploadModal) {
    uploadModal.addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
}