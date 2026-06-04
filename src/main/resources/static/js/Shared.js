/* ── AUTH OVERLAY (MODAL) LOGIC ── */
function openAuthModal(tab = 'masuk') {
  const overlay = document.getElementById('authOverlay');
  if (overlay) {
    overlay.classList.add('open');
    document.body.classList.add('locked'); // Kunci scroll layar belakang
    switchAuthTab(tab);      // Langsung arahkan ke tab Masuk atau Daftar
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
  const toggle = document.getElementById('authTabToggle');
  if (!toggle) return;
  toggle.dataset.active = tab;

  const fMasuk = document.getElementById('authFormMasuk');
  const fDaftar = document.getElementById('authFormDaftar');
  const btnMasuk = document.getElementById('btnAuthMasuk');
  const btnDaftar = document.getElementById('btnAuthDaftar');

  if (tab === 'masuk') {
    fMasuk.classList.add('active');
    fDaftar.classList.remove('active');
    btnMasuk.classList.replace('inactive', 'active');
    btnDaftar.classList.replace('active', 'inactive');
  } else {
    fDaftar.classList.add('active');
    fMasuk.classList.remove('active');
    btnDaftar.classList.replace('inactive', 'active');
    btnMasuk.classList.replace('active', 'inactive');
  }
}