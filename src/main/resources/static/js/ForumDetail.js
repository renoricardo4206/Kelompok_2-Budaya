// ═══════════════════════════════════════════════
//   ForumDetail.js — Warisan
//   Menampilkan detail thread dari API,
//   dengan fitur edit & hapus untuk pemilik thread
// ═══════════════════════════════════════════════

// ── STATE ──
let thread      = null;
let currentUser = null;
let isLiked     = false;

// ── INIT ──
async function init() {
  const pathParts = window.location.pathname.split('/');
  const threadId  = pathParts[pathParts.length - 1];

  if (!threadId || isNaN(threadId)) { showNotFound(); return; }

  const [userRes, threadRes] = await Promise.all([
    fetch('/api/auth/me').then(r => r.json()).catch(() => ({ loggedIn: false })),
    fetch(`/api/threads/${threadId}`).then(r => r.json()).catch(() => null)
  ]);

  currentUser = userRes.loggedIn ? userRes : null;
  thread      = threadRes && !threadRes.error ? threadRes : null;

  if (!thread) { showNotFound(); return; }

  document.title = thread.title + ' – Warisan';
  render();
}

// ── RENDER ──
function render() {
  const isOwner  = currentUser && currentUser.userId === thread.user?.id;
  const replies  = thread.comments || [];
  const likeCount = thread.likes?.length ?? 0;

  const ownerActions = isOwner ? `
    <button class="action-pill" onclick="openEditModal()" style="gap:6px">
      <i class="bi bi-pencil"></i> Edit
    </button>
    <button class="action-pill" onclick="openDeleteModal()"
      style="color:#c62828;border-color:rgba(198,40,40,0.25);gap:6px">
      <i class="bi bi-trash3"></i> Hapus
    </button>` : '';

  document.getElementById('mainContent').innerHTML = `
    <div class="breadcrumbs">
      <a href="/">Beranda</a><span class="sep">/</span>
      <a href="/forum">Forum</a><span class="sep">/</span>
      <span class="current">${escHtml(thread.title)}</span>
    </div>

    <div class="op-card">
      <div class="op-header">
        <div class="op-author-row">
          <div class="op-avatar-placeholder">${thread.user?.username?.[0]?.toUpperCase() ?? '?'}</div>
          <div class="op-author-info">
            <div class="op-author-name">${escHtml(thread.user?.username ?? 'Anonim')}</div>
            <div class="op-author-time">${escHtml(thread.createdAt ?? '')}</div>
          </div>
        </div>
        <h1 class="op-title" id="threadTitle">${escHtml(thread.title)}</h1>
      </div>
      <div class="op-body">
        <p class="op-text" id="threadContent">${escHtml(thread.content ?? '')}</p>
        <div class="op-actions">
          <button class="action-pill${isLiked ? ' liked' : ''}" id="likeBtn" onclick="toggleLike()">
            <i class="bi ${isLiked ? 'bi-heart-fill' : 'bi-heart'}"></i>
            <span id="likeCount">${likeCount + (isLiked ? 1 : 0)}</span> Suka
          </button>
          <button class="action-share" onclick="shareThread()">
            <i class="bi bi-link-45deg"></i> Bagikan
          </button>
          ${ownerActions}
          <a href="/forum" class="back-btn"><i class="bi bi-arrow-left"></i> Kembali</a>
        </div>
      </div>
    </div>

    <div class="replies-header">
      <span class="replies-label">Balasan</span>
      <span class="replies-count" id="repliesCount">${replies.length} balasan</span>
      <div class="replies-line"></div>
    </div>

    <div id="repliesContainer">${renderReplies(replies)}</div>

    <div class="reply-input-section">
      <div class="reply-input-title"><i class="bi bi-chat-square-text"></i> Tulis Balasan</div>
      <textarea class="reply-textarea" id="replyInput"
        placeholder="${currentUser ? 'Bagikan pendapat atau pengalamanmu...' : 'Login terlebih dahulu untuk membalas.'}"
        ${currentUser ? '' : 'disabled'}
        rows="3" oninput="autoResize(this)" onkeydown="handleReplyKey(event)"></textarea>
      <div class="reply-input-foot">
        <button class="btn-cancel-reply"
          onclick="document.getElementById('replyInput').value=''">Batal</button>
        <button class="btn-submit-reply" onclick="submitReply()" ${currentUser ? '' : 'disabled'}>
          <i class="bi bi-send"></i> Kirim Balasan
        </button>
      </div>
    </div>`;
}

function renderReplies(replies) {
  if (!replies || replies.length === 0) {
    return `<div style="text-align:center;padding:32px 20px;color:var(--text-mid);font-size:14px">
      <i class="bi bi-chat" style="font-size:32px;opacity:.25;display:block;margin-bottom:8px"></i>
      Belum ada balasan. Jadilah yang pertama!</div>`;
  }
  return replies.map((r, i) => `
    <div class="reply-card" style="animation-delay:${i * 40}ms">
      <div class="reply-top">
        <div class="reply-avatar-placeholder">${r.user?.username?.[0]?.toUpperCase() ?? '?'}</div>
        <div>
          <div class="reply-author-name">${escHtml(r.user?.username ?? 'Anonim')}</div>
          <div class="reply-author-time">${escHtml(r.createdAt ?? '')}</div>
        </div>
      </div>
      <p class="reply-text">${escHtml(r.content ?? '')}</p>
    </div>`).join('');
}

function showNotFound() {
  document.getElementById('mainContent').innerHTML = `
    <div style="text-align:center;padding:80px 20px">
      <i class="bi bi-chat-square-x" style="font-size:48px;opacity:.3;display:block;margin-bottom:16px"></i>
      <h2>Thread tidak ditemukan</h2>
      <p style="color:var(--text-mid)">Thread yang kamu cari sudah dihapus atau tidak tersedia.</p>
      <a href="/forum" style="display:inline-flex;align-items:center;gap:6px;margin-top:16px;
        font-size:14px;font-weight:600;color:var(--primary);text-decoration:none">
        <i class="bi bi-arrow-left"></i> Kembali ke Forum
      </a>
    </div>`;
}

// ── EDIT ──
function openEditModal() {
  document.getElementById('editInputJudul').value = thread.title ?? '';
  document.getElementById('editInputIsi').value   = thread.content ?? '';
  document.getElementById('editModal').style.display = 'flex';
}
function closeEditModal() { document.getElementById('editModal').style.display = 'none'; }

async function submitEdit() {
  const judul = document.getElementById('editInputJudul').value.trim();
  const isi   = document.getElementById('editInputIsi').value.trim();
  if (!judul) { showToast('Judul tidak boleh kosong.'); return; }
  if (!isi)   { showToast('Isi thread tidak boleh kosong.'); return; }

  const btn = document.getElementById('btnEditSubmit');
  btn.disabled = true; btn.textContent = 'Menyimpan...';

  try {
    const res  = await fetch(`/api/threads/${thread.id}`, {
      method: 'PUT', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: judul, content: isi })
    });
    const data = await res.json();
    if (data.success) {
      thread.title = judul; thread.content = isi;
      document.getElementById('threadTitle').textContent   = judul;
      document.getElementById('threadContent').textContent = isi;
      document.title = judul + ' – Warisan';
      closeEditModal();
      showToast('Thread berhasil diperbarui! ✏️', 'success');
    } else {
      showToast(data.message ?? 'Gagal menyimpan perubahan.');
    }
  } catch { showToast('Terjadi kesalahan koneksi.'); }
  finally { btn.disabled = false; btn.textContent = 'Simpan Perubahan'; }
}

// ── HAPUS ──
function openDeleteModal()  { document.getElementById('deleteModal').style.display = 'flex'; }
function closeDeleteModal() { document.getElementById('deleteModal').style.display = 'none'; }

async function confirmDelete() {
  const btn = document.getElementById('btnDeleteConfirm');
  btn.disabled = true; btn.textContent = 'Menghapus...';
  try {
    const res  = await fetch(`/api/threads/${thread.id}`, { method: 'DELETE' });
    const data = await res.json();
    if (data.success) {
      showToast('Thread berhasil dihapus.', 'success');
      setTimeout(() => window.location.href = '/forum', 1500);
    } else {
      showToast(data.message ?? 'Gagal menghapus thread.');
      btn.disabled = false; btn.textContent = 'Hapus Sekarang';
    }
  } catch {
    showToast('Terjadi kesalahan koneksi.');
    btn.disabled = false; btn.textContent = 'Hapus Sekarang';
  }
}

// ── LIKE ──
function toggleLike() {
  if (!currentUser) { showToast('Login dulu untuk menyukai thread ini.'); return; }
  isLiked = !isLiked;
  const count = (thread.likes?.length ?? 0) + (isLiked ? 1 : 0);
  const btn   = document.getElementById('likeBtn');
  btn.className = 'action-pill' + (isLiked ? ' liked' : '');
  btn.querySelector('i').className = 'bi ' + (isLiked ? 'bi-heart-fill' : 'bi-heart');
  document.getElementById('likeCount').textContent = count;
  if (isLiked) showToast('Kamu menyukai thread ini ❤️', 'success');
}

// ── REPLY ──
async function submitReply() {
  if (!currentUser) { showToast('Login dulu untuk membalas.'); return; }
  const input = document.getElementById('replyInput');
  const text  = input.value.trim();
  if (!text) { showToast('Tulis balasan dulu ya!'); return; }
  try {
    const res  = await fetch('/api/comments', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: text, thread: { id: thread.id } })
    });
    const data = await res.json();
    if (data.id) {
      if (!thread.comments) thread.comments = [];
      thread.comments.push(data);
      input.value = ''; input.style.height = 'auto';
      document.getElementById('repliesContainer').innerHTML = renderReplies(thread.comments);
      document.getElementById('repliesCount').textContent   = thread.comments.length + ' balasan';
      showToast('Balasan terkirim!', 'success');
      setTimeout(() => {
        const last = document.querySelector('#repliesContainer .reply-card:last-child');
        if (last) last.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    } else { showToast('Gagal mengirim balasan.'); }
  } catch { showToast('Terjadi kesalahan koneksi.'); }
}

// ── UTILS ──
function escHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function autoResize(ta) { ta.style.height = 'auto'; ta.style.height = Math.min(ta.scrollHeight, 200) + 'px'; }
function handleReplyKey(e) { if (e.key === 'Enter' && e.ctrlKey) { e.preventDefault(); submitReply(); } }
function shareThread() {
  if (navigator.clipboard) navigator.clipboard.writeText(window.location.href).then(() => showToast('Link disalin!', 'success'));
  else showToast('Link disalin!', 'success');
}

// ── TOAST ──
function showToast(msg, type = '') {
  const c = document.getElementById('toastContainer');
  const t = document.createElement('div');
  t.className = 'toast-item' + (type ? ' ' + type : '');
  t.textContent = msg; c.appendChild(t);
  requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('show')));
  const timer = setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 320); }, 3500);
  t.addEventListener('click', () => { clearTimeout(timer); t.classList.remove('show'); setTimeout(() => t.remove(), 320); });
}

// Tutup modal jika klik di luar
document.addEventListener('click', function(e) {
  if (e.target.id === 'editModal')   closeEditModal();
  if (e.target.id === 'deleteModal') closeDeleteModal();
});

init();