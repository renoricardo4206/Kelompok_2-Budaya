/* ── FORUM.JS — Warisan ── */
/* Daftar thread & filter forum sekarang server-side (Spring + Thymeleaf).
   File ini mengurus: pencarian, urutan (terbaru/populer), bagikan, dan toast flash. */

let originalOrder = [];

document.addEventListener('DOMContentLoaded', () => {
  const feed = document.getElementById('threadFeed');
  if (feed) originalOrder = [...feed.querySelectorAll('.thread-card')];

  // Toast flash dari server (mis. setelah kirim balasan / buat thread)
  const ok  = document.getElementById('flashSuccess');
  const err = document.getElementById('flashError');
  if (ok  && ok.textContent.trim())  showToast(ok.textContent.trim(),  'success');
  if (err && err.textContent.trim()) showToast(err.textContent.trim(), 'error');
});

/* ── SEARCH ── */
function handleSearch(val) {
  const q = (val || '').trim().toLowerCase();
  document.querySelectorAll('.thread-card').forEach(card => {
    const title = card.querySelector('.thread-title')?.textContent.toLowerCase() || '';
    const prev  = card.querySelector('.thread-excerpt')?.textContent.toLowerCase() || '';
    card.style.display = (!q || title.includes(q) || prev.includes(q)) ? '' : 'none';
  });
}

/* ── SORT (terbaru / populer) ── */
function setSort(mode, btn) {
  document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const feed = document.getElementById('threadFeed');
  if (!feed) return;

  const label = document.getElementById('feedLabel');
  if (label && label.textContent.startsWith('Diskusi')) {
    label.textContent = mode === 'populer' ? 'Diskusi Terpopuler' : 'Diskusi Terbaru';
  }

  let cards = [...feed.querySelectorAll('.thread-card')];
  if (mode === 'populer') {
    cards.sort((a, b) => (parseInt(b.dataset.likes) || 0) - (parseInt(a.dataset.likes) || 0));
  } else {
    cards = originalOrder;
  }
  cards.forEach(c => feed.appendChild(c));
}

/* ── GERBANG LOGIN ── */
/* Dipanggil oleh tombol "Buat Thread Baru" yang dirender saat user belum login */
function requireLoginForThread() {
  showToast('Silakan login atau daftar dulu untuk membuat thread.', 'error');
  openAuthModal('masuk');
}

/* ── SHARE ── */
function shareThread(id) {
  const url = window.location.origin + '/forum/' + id;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => showToast('Link disalin!', 'success'));
  } else {
    showToast('Link: ' + url, 'success');
  }
}
