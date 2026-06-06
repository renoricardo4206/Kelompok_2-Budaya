/* ── DOKUMENTASI.JS — Warisan ── */
/* Data dokumentasi & filter kategori sekarang ditangani server-side (Spring + Thymeleaf).
   File ini hanya mengurus: pencarian, toggle tampilan grid/list, dan modal upload. */

/* ── SEARCH (filter kartu yang sudah dirender) ── */
function handleSearch(q) {
  q = (q || '').toLowerCase().trim();
  let visible = 0;
  document.querySelectorAll('.doc-card').forEach(card => {
    const title   = card.querySelector('.doc-title')?.textContent.toLowerCase()       || '';
    const excerpt = card.querySelector('.doc-excerpt')?.textContent.toLowerCase()     || '';
    const author  = card.querySelector('.doc-author-name')?.textContent.toLowerCase() || '';
    const show = !q || title.includes(q) || excerpt.includes(q) || author.includes(q);
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });
  const count = document.getElementById('contentCount');
  if (count) count.textContent = visible + ' konten';
}

/* ── TOGGLE GRID / LIST ── */
function setView(v) {
  document.getElementById('viewGrid').classList.toggle('active', v === 'grid');
  document.getElementById('viewList').classList.toggle('active', v === 'list');
  document.getElementById('docGrid').classList.toggle('list-view', v === 'list');
}

/* ── UPLOAD MODAL ── */
function openModal()  { document.getElementById('uploadModal').classList.add('open');    document.body.classList.add('locked'); }
function closeModal() { document.getElementById('uploadModal').classList.remove('open'); document.body.classList.remove('locked'); }

const uploadModalEl = document.getElementById('uploadModal');
if (uploadModalEl) {
  uploadModalEl.addEventListener('click', function (e) {
    if (e.target === this) closeModal();
  });
}

function handleDrag(e, on) {
  e.preventDefault();
  document.getElementById('uploadArea').classList.toggle('dragover', on);
}

function handleDrop(e) {
  e.preventDefault();
  handleDrag(e, false);
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) loadPreview(file);
}

function handleFile(input) {
  if (input.files[0]) loadPreview(input.files[0]);
}

function loadPreview(file) {
  const r = new FileReader();
  r.onload = e => {
    document.getElementById('uploadArea').style.display = 'none';
    document.getElementById('uploadPreview').style.display = 'block';
    document.getElementById('uploadPreviewImg').src = e.target.result;
  };
  r.readAsDataURL(file);
}

function removePreview(e) {
  e.stopPropagation();
  document.getElementById('uploadArea').style.display = 'block';
  document.getElementById('uploadPreview').style.display = 'none';
  document.getElementById('fileInput').value = '';
}

/* ── FLASH MESSAGE DARI SERVER ── */
/* Form upload sekarang submit langsung ke /dokumentasi/upload (lihat Dokumentasi.html),
   lalu server redirect balik ke sini sambil membawa pesan sukses/error. */
document.addEventListener('DOMContentLoaded', () => {
  const ok  = document.getElementById('flashSuccess');
  const err = document.getElementById('flashError');
  if (ok  && ok.textContent.trim())  showToast(ok.textContent.trim(),  'success');
  if (err && err.textContent.trim()) showToast(err.textContent.trim(), 'error');
});
