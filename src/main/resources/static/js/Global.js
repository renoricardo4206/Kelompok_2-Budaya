/* ── GLOBAL.JS — Warisan ── */
/* Berisi: showToast, openDrawer, closeDrawer, bnavActive, navbar scroll */

/* ── NAVBAR SHADOW ON SCROLL ── */
const nav = document.getElementById('mainNav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 8);
  }, { passive: true });
}

/* ── DRAWER ── */
function openDrawer() {
  document.getElementById('drawerOverlay').classList.add('open');
  const drawer = document.getElementById('mobileDrawer') || document.getElementById('drawer');
  if (drawer) drawer.classList.add('open');
  document.body.classList.add('locked');
}
function closeDrawer() {
  document.getElementById('drawerOverlay').classList.remove('open');
  const drawer = document.getElementById('mobileDrawer') || document.getElementById('drawer');
  if (drawer) drawer.classList.remove('open');
  document.body.classList.remove('locked');
}

/* ── BOTTOM NAV ACTIVE ── */
function bnavActive(btn) {
  document.querySelectorAll('.bnav-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

/* ── TOAST ── */
function showToast(msg, type = '') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast-item' + (type ? ' ' + type : '');
  toast.textContent = msg;
  container.appendChild(toast);
  requestAnimationFrame(() => requestAnimationFrame(() => toast.classList.add('show')));
  const t = setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 320);
  }, 3500);
  toast.addEventListener('click', () => {
    clearTimeout(t);
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 320);
  });
}