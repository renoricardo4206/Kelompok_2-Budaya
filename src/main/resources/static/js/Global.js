/* ── GLOBAL.JS — Warisan ── */

// ========== TOAST NOTIFICATION ==========
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) {
        console.log(message);
        return;
    }
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<div class="toast-content"><span>${message}</span></div>`;
    container.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ========== DRAWER ==========
function openDrawer() {
    const drawer = document.getElementById('mobileDrawer');
    const overlay = document.getElementById('drawerOverlay');
    if (drawer) drawer.classList.add('open');
    if (overlay) overlay.classList.add('open');
    document.body.classList.add('locked');
}

function closeDrawer() {
    const drawer = document.getElementById('mobileDrawer');
    const overlay = document.getElementById('drawerOverlay');
    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.classList.remove('locked');
}

// ========== AUTH MODAL ==========
function openAuthModal(tab = 'masuk') {
    const overlay = document.getElementById('authOverlay');
    if (overlay) {
        overlay.classList.add('open');
        document.body.classList.add('locked');
        switchAuthTab(tab);
    }
}

function closeAuthModal() {
    const overlay = document.getElementById('authOverlay');
    if (overlay) {
        overlay.classList.remove('open');
        document.body.classList.remove('locked');
    }
}

function switchAuthTab(tab) {
    const masukPanel = document.getElementById('authFormMasuk');
    const daftarPanel = document.getElementById('authFormDaftar');
    const btnMasuk = document.getElementById('btnAuthMasuk');
    const btnDaftar = document.getElementById('btnAuthDaftar');
    
    if (tab === 'masuk') {
        if (masukPanel) masukPanel.classList.add('active');
        if (daftarPanel) daftarPanel.classList.remove('active');
        if (btnMasuk) {
            btnMasuk.classList.add('active');
            btnMasuk.classList.remove('inactive');
        }
        if (btnDaftar) {
            btnDaftar.classList.remove('active');
            btnDaftar.classList.add('inactive');
        }
    } else {
        if (masukPanel) masukPanel.classList.remove('active');
        if (daftarPanel) daftarPanel.classList.add('active');
        if (btnMasuk) {
            btnMasuk.classList.remove('active');
            btnMasuk.classList.add('inactive');
        }
        if (btnDaftar) {
            btnDaftar.classList.add('active');
            btnDaftar.classList.remove('inactive');
        }
    }
}

// Close with ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeAuthModal();
        closeDrawer();
        if (typeof closeModal === 'function') closeModal();
    }
});