/* ── DOKUMENTASIDETAIL.JS — Warisan ── */
/* Isi halaman detail sekarang dirender server-side dari database (lihat DokumentasiDetail.html).
   File ini hanya mengurus interaksi ringan: tombol suka (visual) & bagikan. */

let likedPost = false;

/* ── FLASH MESSAGE DARI SERVER (sukses/gagal update/hapus) ── */
document.addEventListener('DOMContentLoaded', () => {
  const ok  = document.getElementById('flashSuccess');
  const err = document.getElementById('flashError');
  if (ok  && ok.textContent.trim())  showToast(ok.textContent.trim(),  'success');
  if (err && err.textContent.trim()) showToast(err.textContent.trim(), 'error');
});

/* ── EDIT MODAL ── */
function openEditModal() {
  document.getElementById('editModal')?.classList.add('open');
  document.body.classList.add('locked');
}
function closeEditModal() {
  document.getElementById('editModal')?.classList.remove('open');
  document.body.classList.remove('locked');
}
const editModalEl = document.getElementById('editModal');
if (editModalEl) {
  editModalEl.addEventListener('click', function (e) {
    if (e.target === this) closeEditModal();
  });
}

function handleEditDrag(e, on) {
  e.preventDefault();
  document.getElementById('editUploadArea')?.classList.toggle('dragover', on);
}
function handleEditDrop(e) {
  e.preventDefault();
  handleEditDrag(e, false);
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) loadEditPreview(file);
}
function handleEditFile(input) {
  if (input.files[0]) loadEditPreview(input.files[0]);
}
function loadEditPreview(file) {
  const r = new FileReader();
  r.onload = e => {
    document.getElementById('editUploadArea').style.display = 'none';
    document.getElementById('editUploadPreview').style.display = 'block';
    document.getElementById('editUploadPreviewImg').src = e.target.result;
  };
  r.readAsDataURL(file);
}
function removeEditPreview(e) {
  e.stopPropagation();
  document.getElementById('editUploadArea').style.display = '';
  document.getElementById('editUploadPreview').style.display = 'none';
  document.getElementById('editFileInput').value = '';
}

/* ── DELETE CONFIRM ── */
function askDeletePost() {
  document.getElementById('confirmDeleteOverlay')?.classList.add('open');
  document.body.classList.add('locked');
}
function closeConfirmDelete() {
  document.getElementById('confirmDeleteOverlay')?.classList.remove('open');
  document.body.classList.remove('locked');
}

/* ── GERBANG LOGIN ── */
/* Dipanggil oleh tombol "Upload Konten" yang dirender saat user belum login */
function requireLoginForUpload() {
  showToast('Silakan login atau daftar dulu untuk mengupload konten.', 'error');
  openAuthModal('masuk');
}

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
