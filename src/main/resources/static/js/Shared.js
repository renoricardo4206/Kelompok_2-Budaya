/* ── IKON KATEGORI (Forum & Dokumentasi) ──
   Ganti ikon generik tiap kategori jadi ikon yang relevan dengan namanya.
   Berlaku otomatis di Forum, Dokumentasi, dan kedua halaman detail karena
   semuanya memuat Shared.js. Link "Semua ..." dibiarkan pakai ikon kompas. */
const CATEGORY_ICON_MAP = [
  { keys: ['tari', 'tarian'],                                  icon: 'bi-person-arms-up' },
  { keys: ['bahasa', 'aksara', 'sastra'],                      icon: 'bi-translate' },
  { keys: ['seni', 'lukis', 'rupa', 'kerajinan', 'ukir'],      icon: 'bi-palette' },
  { keys: ['musik', 'lagu', 'gamelan', 'alat musik'],          icon: 'bi-music-note-beamed' },
  { keys: ['kuliner', 'makanan', 'masakan', 'minuman'],        icon: 'bi-egg-fried' },
  { keys: ['pakaian', 'busana', 'baju', 'kain', 'batik', 'tenun'], icon: 'bi-bag-heart' },
  { keys: ['rumah', 'arsitektur', 'bangunan'],                 icon: 'bi-house-door' },
  { keys: ['senjata'],                                         icon: 'bi-shield' },
  { keys: ['upacara', 'ritual', 'adat', 'tradisi'],            icon: 'bi-stars' },
  { keys: ['permainan', 'game'],                               icon: 'bi-controller' },
  { keys: ['cerita', 'legenda', 'mitos', 'dongeng'],           icon: 'bi-book' },
  { keys: ['sejarah'],                                         icon: 'bi-bank' },
  { keys: ['lainnya', 'umum', 'lain'],                         icon: 'bi-three-dots' },
];

function iconForCategory(name) {
  const n = (name || '').trim().toLowerCase();
  const match = CATEGORY_ICON_MAP.find(m => m.keys.some(k => n.includes(k)));
  return match ? match.icon : 'bi-tag';
}

function prettifyCategoryIcons() {
  // Sidebar filter (.cat-link) + badge kategori di kartu Beranda (.card-cat-badge)
  // dan Dokumentasi (.doc-cat-badge). Semua punya pola <i> + <span>nama.
  document.querySelectorAll('.cat-link, .card-cat-badge, .doc-cat-badge').forEach(el => {
    const span = el.querySelector('span');
    if (!span) return;                       // skip link "Semua ..." (tanpa span → biarkan kompas)
    const icon = el.querySelector('i');
    if (!icon) return;
    icon.className = 'bi ' + iconForCategory(span.textContent);
  });
}

document.addEventListener('DOMContentLoaded', prettifyCategoryIcons);

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