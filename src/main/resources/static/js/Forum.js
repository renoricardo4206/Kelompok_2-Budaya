/* ── FORUM.JS — Warisan ── */

let THREADS = [];
let currentCat = 'semua', currentSort = 'terbaru';

function renderFeed() {
  const feed = document.getElementById('threadFeed');
  let data = [...THREADS];
  if (currentCat !== 'semua') data = data.filter(t => t.forum.name.toLowerCase() === currentCat);
  if (currentSort === 'populer') data.sort((a, b) => b.likes - a.likes);

  const labelMap = { semua:'Diskusi Terbaru', tari:'Tari', kuliner:'Kuliner', lainnya:'Lainnya', pakaian:'Pakaian Adat', musik:'Musik', bahasa:'Bahasa', seni:'Seni & Kriya' };
  document.getElementById('feedLabel').textContent = currentCat === 'semua'
    ? (currentSort === 'populer' ? 'Diskusi Terpopuler' : 'Diskusi Terbaru')
    : (labelMap[currentCat] || currentCat);

  if (data.length === 0) {
    feed.innerHTML = '<div style="text-align:center;padding:60px 20px;color:var(--text-mid)"><i class="bi bi-chat-square" style="font-size:40px;opacity:.25;display:block;margin-bottom:12px"></i><p>Belum ada diskusi di kategori ini.</p></div>';
    return;
  }

  feed.innerHTML = data.map(t => {
  const totalReplies = (t.comments || []).length;
  const avatarHtml = '';

    return `<a class="thread-card" href="/forum/${t.id}" data-cat="${t.forum.name.toLowerCase()}">
      <div class="thread-top">
        <div class="thread-avatar" style="display:flex;align-items:center;justify-content:center;background:#ffdbce;color:#9e2016;font-weight:700;font-size:16px;border-radius:50%;width:36px;height:36px;flex-shrink:0">${t.user.username[0].toUpperCase()}</div>
        <div class="thread-meta">
          <div class="thread-author">${t.user.username}</div>
          <div class="thread-time">${t.time}</div>
        </div>
        <span class="thread-tag-pill">${t.forum.name}</span>
      </div>
      <h3 class="thread-title">${t.title}</h3>
      <p class="thread-excerpt">${(t.content || '').substring(0, 150)}...</p>
      <div class="thread-foot">
        <div class="thread-avatars">${avatarHtml}</div>
        <span class="thread-stat"><i class="bi bi-chat"></i>${totalReplies} balasan</span>
        <span class="thread-stat"><i class="bi bi-heart"></i>${(t.likes || []).length}</span>
        <span class="thread-foot-time">${t.createdAt}</span>
        <button class="thread-share-btn" onclick="event.preventDefault();shareThread(${t.id})" title="Bagikan"><i class="bi bi-share"></i></button>
      </div>
    </a>`;
  }).join('');
}

function filterCat(cat, btn) {
  currentCat = cat;
  document.querySelectorAll('.cat-link').forEach(b => b.classList.remove('active'));
  const d = document.getElementById('cat-' + cat); if (d) d.classList.add('active');
  document.querySelectorAll('.mobile-cat-chip').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderFeed();
}

function setSort(mode, btn) {
  currentSort = mode;
  document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderFeed();
}

function handleSearch(val) {
  const q = val.trim().toLowerCase();
  document.querySelectorAll('.thread-card').forEach(card => {
    const title = card.querySelector('.thread-title')?.textContent.toLowerCase() || '';
    const prev  = card.querySelector('.thread-excerpt')?.textContent.toLowerCase() || '';
    card.style.display = (!q || title.includes(q) || prev.includes(q)) ? '' : 'none';
  });
}

function shareThread(id) {
  const url = window.location.origin + '/forum/' + id;
  if (navigator.clipboard) navigator.clipboard.writeText(url).then(() => showToast('Link disalin!', 'success'));
  else showToast('Link disalin!', 'success');
}

/* ── THREAD MODAL ── */
const THREAD_CATS = {
  tari:    { label:'Tari',         color:'#2e7d32', bg:'rgba(46,125,50,0.08)' },
  bahasa:  { label:'Bahasa',       color:'#1565c0', bg:'rgba(21,101,192,0.08)' },
  seni:    { label:'Seni',         color:'#6a1b9a', bg:'rgba(106,27,154,0.08)' },
  musik:   { label:'Musik',        color:'#555',    bg:'rgba(85,85,85,0.08)' },
  pakaian: { label:'Pakaian Adat', color:'#9e2016', bg:'rgba(158,32,22,0.08)' },
  kuliner: { label:'Kuliner',      color:'#cc8800', bg:'rgba(204,136,0,0.08)' },
  lainnya: { label:'Lainnya',      color:'#555',    bg:'rgba(85,85,85,0.08)' },
};

let selectedThreadCat = null;

function openThreadModal() {
  document.getElementById('threadModal').classList.add('open');
  document.body.classList.add('locked');
}

function closeThreadModal() {
  document.getElementById('threadModal').classList.remove('open');
  document.body.classList.remove('locked');
  resetThreadModal();
}

function resetThreadModal() {
  selectedThreadCat = null;
  document.querySelectorAll('.cat-option').forEach(b => b.classList.remove('selected'));
  document.getElementById('threadInputJudul').value = '';
  document.getElementById('threadInputIsi').value = '';
  document.getElementById('errThreadKategori').style.display = 'none';
  document.getElementById('errThreadJudul').style.display = 'none';
  document.getElementById('errThreadIsi').style.display = 'none';
  threadRemovePreview({ stopPropagation: () => {} });
  const btn = document.getElementById('btnThreadSubmit');
  btn.disabled = false;
  btn.textContent = 'Posting Thread';
}

function selectThreadCat(btn) {
  document.querySelectorAll('#threadCatOptions .cat-option').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedThreadCat = btn.dataset.cat;
  document.getElementById('errThreadKategori').style.display = 'none';
}

function clearThreadErr(inputId, errId) {
  document.getElementById(inputId).classList.remove('error');
  document.getElementById(errId).style.display = 'none';
}

function threadHandleDrag(e, on) {
  e.preventDefault();
  document.getElementById('threadUploadArea').classList.toggle('dragover', on);
}

function threadHandleDrop(e) {
  e.preventDefault();
  threadHandleDrag(e, false);
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) threadLoadPreview(file);
}

function threadHandleFile(input) {
  if (input.files[0]) threadLoadPreview(input.files[0]);
}

function threadLoadPreview(file) {
  if (file.size > 5 * 1024 * 1024) { showToast('Ukuran gambar maksimal 5 MB'); return; }
  const r = new FileReader();
  r.onload = e => {
    document.getElementById('threadUploadArea').style.display = 'none';
    document.getElementById('threadUploadPreview').style.display = 'block';
    document.getElementById('threadPreviewImg').src = e.target.result;
  };
  r.readAsDataURL(file);
}

function threadRemovePreview(e) {
  e.stopPropagation();
  document.getElementById('threadUploadArea').style.display = 'block';
  document.getElementById('threadUploadPreview').style.display = 'none';
  document.getElementById('threadPreviewImg').src = '';
  document.getElementById('threadFileInput').value = '';
}

function validateThreadForm() {
  let ok = true;
  if (!selectedThreadCat) {
    document.getElementById('errThreadKategori').style.display = 'block';
    ok = false;
  }
  const judul = document.getElementById('threadInputJudul').value.trim();
  if (!judul) {
    document.getElementById('threadInputJudul').classList.add('error');
    document.getElementById('errThreadJudul').style.display = 'block';
    ok = false;
  }
  const isi = document.getElementById('threadInputIsi').value.trim();
  if (!isi) {
    document.getElementById('threadInputIsi').classList.add('error');
    document.getElementById('errThreadIsi').style.display = 'block';
    ok = false;
  }
  return ok;
}

async function submitThread() {
  if (!validateThreadForm()) return;

  const btn = document.getElementById('btnThreadSubmit');
  btn.disabled = true;
  btn.textContent = 'Memposting...';

  const body = {
    title:   document.getElementById('threadInputJudul').value.trim(),
    content: document.getElementById('threadInputIsi').value.trim(),
    forum:   { id: 1 },  // ganti dengan forum id yang sesuai
    user:    { id: 1 },  // ganti dengan id user yang sedang login
  };

  try {
    const res = await fetch('/api/threads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      closeThreadModal();
      showToast('Thread berhasil diposting! 🎉', 'success');
      // Reload feed setelah backend siap
      // renderFeed();
    } else {
      showToast('Gagal memposting thread. Coba lagi.', 'error');
      btn.disabled = false;
      btn.textContent = 'Posting Thread';
    }
  } catch (err) {
    showToast('Terjadi kesalahan koneksi.', 'error');
    btn.disabled = false;
    btn.textContent = 'Posting Thread';
  }
}

// Tutup modal jika klik di luar konten
const _tm = document.getElementById('threadModal'); if (_tm) _tm.addEventListener('click', function(e) {
  if (e.target === this) closeThreadModal();
});

/* ── INIT ── */
async function loadThreads() {
  try {
    const res = await fetch('/api/threads');
    const data = await res.json();
    THREADS = Array.isArray(data) ? data : [];  // pastikan selalu array
  } catch (err) {
    THREADS = [];
    showToast('Gagal memuat thread.', 'error');
  }

  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('cat');
  if (catParam) {
    const mobileBtn = document.querySelector(`.mobile-cat-chip[onclick*="${catParam}"]`);
    filterCat(catParam, mobileBtn);
  } else {
    renderFeed();
  }
}

loadThreads();