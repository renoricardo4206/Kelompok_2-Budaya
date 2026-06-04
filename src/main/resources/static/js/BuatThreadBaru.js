/* ── BUATTHREADBARU.JS — Warisan ── */

const CATS = {
  tari:    { label:'Tari',         color:'#2e7d32', bg:'rgba(46,125,50,0.12)' },
  bahasa:  { label:'Bahasa',       color:'#1565c0', bg:'rgba(21,101,192,0.10)' },
  seni:    { label:'Seni',         color:'#6a1b9a', bg:'rgba(106,27,154,0.10)' },
  musik:   { label:'Musik',        color:'#333',    bg:'rgba(51,51,51,0.08)' },
  pakaian: { label:'Pakaian Adat', color:'#9e2016', bg:'rgba(158,32,22,0.10)' },
  kuliner: { label:'Kuliner',      color:'#cc8800', bg:'rgba(204,136,0,0.12)' },
  lainnya: { label:'Lainnya',      color:'#555',    bg:'rgba(85,85,85,0.10)' },
};

let selectedCat = null;

/* ── Category select ── */
function selectCat(btn) {
  document.querySelectorAll('.cat-option').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedCat = btn.dataset.cat;
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

  if (!title && !isi && !selectedCat) {
    body.innerHTML = '<p class="preview-empty">Mulai ketik untuk melihat pratinjau...</p>';
    return;
  }

  const cat = selectedCat ? CATS[selectedCat] : null;
  body.innerHTML = `
    ${cat ? `<div class="preview-cat-badge" style="background:${cat.bg};color:${cat.color}">${cat.label}</div>` : ''}
    ${title ? `<p class="preview-title">${escHtml(title)}</p>` : '<p class="preview-title" style="color:#9b8780;font-style:italic">Judul akan muncul di sini...</p>'}
    ${isi ? `<p class="preview-text">${escHtml(isi)}</p>` : ''}
  `;
}

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

/* ── Image upload ── */
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
  handleFile(e.dataTransfer.files[0]);
}

/* ── Validation ── */
function validate() {
  let ok = true;
  const judul = document.getElementById('inputJudul').value.trim();
  const isi   = document.getElementById('inputIsi').value.trim();

  // kategori
  if (!selectedCat) {
    document.getElementById('errKategori').classList.add('visible');
    ok = false;
  }
  // judul
  if (!judul) {
    document.getElementById('inputJudul').classList.add('error');
    document.getElementById('errJudul').classList.add('visible');
    ok = false;
  } else {
    document.getElementById('inputJudul').classList.remove('error');
    document.getElementById('errJudul').classList.remove('visible');
  }
  // isi
  if (!isi) {
    document.getElementById('inputIsi').classList.add('error');
    document.getElementById('errIsi').classList.add('visible');
    ok = false;
  } else {
    document.getElementById('inputIsi').classList.remove('error');
    document.getElementById('errIsi').classList.remove('visible');
  }

  if (!ok) {
    // scroll to first error
    document.querySelector('.field-error.visible')
      ?.closest('.field')
      ?.scrollIntoView({ behavior:'smooth', block:'center' });
  }

  return ok;
}

/* ── Submit ── */
function handleSubmit(e) {
  e.preventDefault();
  if (!validate()) return;

  const btn = document.getElementById('btnSubmit');
  btn.classList.add('loading');
  btn.disabled = true;

  // Simulate API call
  setTimeout(() => {
    btn.classList.remove('loading');
    btn.disabled = false;
    showToast('Thread berhasil diposting! 🎉', 'success');
    setTimeout(() => window.location.href = 'forum.html', 1500);
  }, 1800);
}

/* ── Cancel ── */
function handleCancel() {
  const judul = document.getElementById('inputJudul').value.trim();
  const isi   = document.getElementById('inputIsi').value.trim();
  if (judul || isi || selectedCat) {
    if (confirm('Yakin mau keluar? Tulisanmu belum tersimpan.')) {
      window.location.href = 'forum.html';
    }
  } else {
    window.location.href = 'forum.html';
  }
}