/* ── FORUMDETAIL.JS — Warisan ── */
/* Isi thread, komentar, dan like dirender server-side dari database (lihat ForumDetail.html).
   Komentar dikirim lewat form POST ke /forum/{id}/comment.
   Like dikirim lewat form POST ke /forum/{id}/like (toggle).
   File ini hanya mengurus: gerbang login, delete confirm, share, dan toast flash. */

document.addEventListener('DOMContentLoaded', () => {
  const ok  = document.getElementById('flashSuccess');
  const err = document.getElementById('flashError');
  if (ok  && ok.textContent.trim())  showToast(ok.textContent.trim(),  'success');
  if (err && err.textContent.trim()) showToast(err.textContent.trim(), 'error');
});

/* ── GERBANG LOGIN ── */
/* Dipanggil oleh tombol "Buat Thread Baru" yang dirender saat user belum login */
function requireLoginForThread() {
  showToast('Silakan login atau daftar dulu untuk membuat thread.', 'error');
  openAuthModal('masuk');
}

/* ── DELETE CONFIRM ── */
function askDeleteThread() {
  document.getElementById('confirmDeleteOverlay')?.classList.add('open');
  document.body.classList.add('locked');
}
function closeConfirmDelete() {
  document.getElementById('confirmDeleteOverlay')?.classList.remove('open');
  document.body.classList.remove('locked');
}

/* ── SHARE ── */
function shareThread() {
  const url = window.location.href;
  if (navigator.share) {
    navigator.share({ title: document.title, url }).catch(() => {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(url)
      .then(() => showToast('Link disalin!', 'success'))
      .catch(() => showToast('Link: ' + url));
  } else {
    showToast('Link: ' + url);
  }
}
