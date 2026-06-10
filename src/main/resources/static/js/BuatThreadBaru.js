/* ── BUATTHREADBARU.JS — Warisan ── */
/* Form dikirim langsung (POST) ke /threads/create dan disimpan ke database.
   File ini mengurus: pilih forum, hitung karakter, pratinjau, upload gambar, validasi. */

let selectedForumId = null;
let selectedLabel = null;

/* Edit mode init: kalau Thymeleaf sudah render salah satu button forum sebagai .selected,
   sinkronkan state JS sehingga pratinjau & validasi tahu forum mana yang aktif. */
document.addEventListener('DOMContentLoaded', () => {
  const preSel = document.querySelector('.cat-option.selected');
  if (preSel) {
    selectedForumId = preSel.dataset.forumid;
    selectedLabel = preSel.textContent.trim();
  }
  const judulEl = document.getElementById('inputJudul');
  const isiEl   = document.getElementById('inputIsi');
  if (judulEl) countChars(judulEl, 'counterJudul', 120);
  if (isiEl)   countChars(isiEl,   'counterIsi',   5000);
  updatePreview();
});

/* ── Pilih forum ── */
function selectCat(btn) {
  document.querySelectorAll('.cat-option').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedForumId = btn.dataset.forumid;
  selectedLabel = btn.textContent.trim();
  document.getElementById('forumId').value = selectedForumId;
  document.getElementById('errKategori').classList.remove('visible');
  updatePreview();
}

/* ── Char counter ── */
function countChars(el, counterId, max) {
  const len = el.value.length;
  const el2 = document.getElementById(counterId);
  el2.textContent = len + '/' + max;
  el2.className = 'char-count' + (len > max * 0.9 ? (len >= max ? ' over' : ' near') : '');
}

/* ── Live preview ── */
function updatePreview() {
  const title = document.getElementById('inputJudul').value.trim();
  const isi   = document.getElementById('inputIsi').value.trim();
  const body  = document.getElementById('previewBody');

  if (!title && !isi && !selectedLabel) {
    body.innerHTML = '<p class="preview-empty">Mulai ketik untuk melihat pratinjau...</p>';
    return;
  }

  body.innerHTML = `
    ${selectedLabel ? `<div class="preview-cat-badge">${escHtml(selectedLabel)}</div>` : ''}
    ${title ? `<p class="preview-title">${escHtml(title)}</p>` : '<p class="preview-title" style="color:#9b8780;font-style:italic">Judul akan muncul di sini...</p>'}
    ${isi ? `<p class="preview-text">${escHtml(isi)}</p>` : ''}
  `;
}

function escHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ── Image upload (pratinjau lokal sebelum dikirim) ── */
function handleFile(file) {
  const errEl = document.getElementById('errGambar');
  if (!file) return;
  if (!file.type.startsWith('image/')) {
    errEl.innerHTML = '<i class="bi bi-exclamation-circle"></i> File harus berupa gambar';
    errEl.classList.add('visible');
    return;
  }
  if (file.size > 5 * 1024 * 1024) {
    errEl.innerHTML = '<i class="bi bi-exclamation-circle"></i> Ukuran gambar maksimal 5 MB';
    errEl.classList.add('visible');
    return;
  }
  errEl.classList.remove('visible');
  const reader = new FileReader();
  reader.onload = e => {
    document.getElementById('previewImg').src = e.target.result;
    document.getElementById('uploadPreview').style.display = 'block';
    document.getElementById('uploadArea').style.display = 'none';
  };
  reader.readAsDataURL(file);
}

function removeImage() {
  document.getElementById('previewImg').src = '';
  document.getElementById('uploadPreview').style.display = 'none';
  document.getElementById('uploadArea').style.display = 'flex';
  document.getElementById('fileInput').value = '';
}

function onDragOver(e) {
  e.preventDefault();
  document.getElementById('uploadArea').classList.add('dragover');
}
function onDragLeave(e) {
  document.getElementById('uploadArea').classList.remove('dragover');
}
function onDrop(e) {
  e.preventDefault();
  document.getElementById('uploadArea').classList.remove('dragover');
  const file = e.dataTransfer.files[0];
  if (file) {
    document.getElementById('fileInput').files = e.dataTransfer.files;
    handleFile(file);
  }
}

/* ── Validation ── */
function validate() {
  let ok = true;
  const judul = document.getElementById('inputJudul').value.trim();
  const isi   = document.getElementById('inputIsi').value.trim();

  if (!selectedForumId) {
    document.getElementById('errKategori').classList.add('visible');
    ok = false;
  }
  if (!judul) {
    document.getElementById('inputJudul').classList.add('error');
    document.getElementById('errJudul').classList.add('visible');
    ok = false;
  } else {
    document.getElementById('inputJudul').classList.remove('error');
    document.getElementById('errJudul').classList.remove('visible');
  }
  if (!isi) {
    document.getElementById('inputIsi').classList.add('error');
    document.getElementById('errIsi').classList.add('visible');
    ok = false;
  } else {
    document.getElementById('inputIsi').classList.remove('error');
    document.getElementById('errIsi').classList.remove('visible');
  }

  if (!ok) {
    document.querySelector('.field-error.visible')
      ?.closest('.field')
      ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  return ok;
}

/* ── Submit ── */
/* return true → form dikirim ke server (POST /threads/create) */
function handleSubmit(e) {
  if (!validate()) {
    e.preventDefault();
    return false;
  }
  const btn = document.getElementById('btnSubmit');
  btn.classList.add('loading');
  // tunda disable agar tidak membatalkan pengiriman form
  setTimeout(() => { btn.disabled = true; }, 0);
  return true;
}

/* ── Cancel ── */
function handleCancel() {
  const judul = document.getElementById('inputJudul').value.trim();
  const isi   = document.getElementById('inputIsi').value.trim();
  if (judul || isi || selectedForumId) {
    if (confirm('Yakin mau keluar? Tulisanmu belum tersimpan.')) {
      window.location.href = '/forum';
    }
  } else {
    window.location.href = '/forum';
  }
}
