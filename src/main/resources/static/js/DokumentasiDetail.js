/* ── DOKUMENTASIDETAIL.JS — Warisan ── */
/* Isi halaman detail sekarang dirender server-side dari database (lihat DokumentasiDetail.html).
   File ini hanya mengurus interaksi ringan: tombol suka (visual) & bagikan. */

let likedPost = false;

/* ── LIKE (visual saja, belum disimpan ke database) ── */
function toggleLikePost() {
  const btn     = document.getElementById('likePostBtn');
  const icon    = document.getElementById('likePostIcon');
  const countEl = document.getElementById('likePostCount');
  if (!btn || !icon || !countEl) return;

  // angka dukungan ada di <span> pertama di dalam countEl
  const numEl = countEl.querySelector('span');
  let count = numEl ? parseInt(numEl.textContent) || 0 : 0;

  likedPost = !likedPost;
  if (likedPost) {
    icon.className = 'bi bi-heart-fill';
    icon.style.color = '#9e2016';
    btn.classList.add('liked');
    count++;
    icon.style.transform = 'scale(1.4)';
    setTimeout(() => icon.style.transform = '', 180);
    showToast('Kamu mendukung dokumentasi ini ❤️', 'success');
  } else {
    icon.className = 'bi bi-heart';
    icon.style.color = '';
    btn.classList.remove('liked');
    count--;
  }
  if (numEl) numEl.textContent = count;
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
