/* ── FORUMDETAIL.JS — Warisan ── */
/* Isi thread & komentar dirender server-side dari database (lihat ForumDetail.html).
   Komentar dikirim lewat form POST ke /forum/{id}/comment.
   File ini hanya mengurus: tombol suka (visual), bagikan, dan toast flash. */

let likedPost = false;

document.addEventListener('DOMContentLoaded', () => {
  const ok  = document.getElementById('flashSuccess');
  const err = document.getElementById('flashError');
  if (ok  && ok.textContent.trim())  showToast(ok.textContent.trim(),  'success');
  if (err && err.textContent.trim()) showToast(err.textContent.trim(), 'error');
});

/* ── LIKE (visual saja, belum disimpan ke database) ── */
function toggleLikePost() {
  const btn     = document.getElementById('likePostBtn');
  const icon    = document.getElementById('likePostIcon');
  const countEl = document.getElementById('likePostCount');
  if (!btn || !icon || !countEl) return;

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
    showToast('Kamu mendukung thread ini ❤️', 'success');
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
