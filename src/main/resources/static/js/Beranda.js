/* beranda.js */

const originalOrder = [];
document.querySelectorAll('.post-card').forEach(c => originalOrder.push(c));

function setTab(btn, mode) {
  document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const grid = document.getElementById('feedGrid');
  const cards = [...document.querySelectorAll('.post-card')];
  if (mode === 'terpopuler') {
    cards.sort((a, b) => parseInt(b.dataset.likes) - parseInt(a.dataset.likes));
  } else {
    originalOrder.forEach(c => grid.appendChild(c));
    updateSortCount(); return;
  }
  cards.forEach((c, i) => {
    c.style.animation = 'none';
    void c.offsetWidth;
    c.style.animationDelay = (i * 40) + 'ms';
    c.style.animation = '';
    grid.appendChild(c);
  });
  updateSortCount();
}

function handleSearch(val) {
  const q = val.trim().toLowerCase();
  const cards = document.querySelectorAll('.post-card');
  let found = 0;
  cards.forEach(card => {
    const match = !q ||
      (card.querySelector('.card-title')?.textContent || '').toLowerCase().includes(q) ||
      (card.querySelector('.card-cat-label')?.textContent || '').toLowerCase().includes(q) ||
      (card.querySelector('.card-excerpt')?.textContent || '').toLowerCase().includes(q) ||
      (card.querySelector('.author-name')?.textContent || '').toLowerCase().includes(q);
    card.classList.toggle('hidden', !match);
    if (match) found++;
  });
  document.getElementById('searchInput').value = val;
  document.getElementById('drawerSearch').value = val;
  updateSortCount(found, !!q);

  const grid = document.getElementById('feedGrid');
  const existing = grid.querySelector('.empty-state');
  if (existing) existing.remove();
  if (found === 0 && q) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.innerHTML = `<i class="bi bi-search"></i><h3>Tidak ada hasil</h3><p>Coba kata kunci lain seperti "batik", "gamelan", atau "wayang"</p>`;
    grid.appendChild(empty);
  }
}

function clearSearch() {
  document.getElementById('searchInput').value = '';
  document.getElementById('drawerSearch').value = '';
  handleSearch('');
}

function updateSortCount(n, isSearch) {
  const all = document.querySelectorAll('.post-card:not(.hidden)').length;
  const el = document.getElementById('sortCount');
  if (el) el.textContent = (isSearch ? n : all) + ' konten';
}

function toggleLike(e, btn) {
  e.stopPropagation();
  const icon = btn.querySelector('i');
  const countEl = btn.querySelector('span');
  const count = parseInt(countEl.textContent);
  const liked = icon.classList.contains('bi-heart-fill');
  if (liked) {
    icon.classList.replace('bi-heart-fill', 'bi-heart');
    icon.style.color = ''; countEl.textContent = count - 1;
  } else {
    icon.classList.replace('bi-heart', 'bi-heart-fill');
    icon.style.color = '#9e2016'; countEl.textContent = count + 1;
    icon.style.transform = 'scale(1.5)';
    setTimeout(() => icon.style.transform = 'scale(1)', 180);
    showToast('Kamu menyukai post ini ❤️', 'success');
  }
}

/* ── FAB hide on scroll down ── */
let lastScroll = 0;
const fab = document.getElementById('fabBtn');
if (fab) {
  window.addEventListener('scroll', () => {
    const cur = window.scrollY;
    if (cur > lastScroll + 10 && cur > 100) {
      fab.style.transform = 'scale(0) translateY(20px)'; fab.style.opacity = '0';
    } else if (cur < lastScroll - 10 || cur < 100) {
      fab.style.transform = ''; fab.style.opacity = '';
    }
    lastScroll = cur;
  }, { passive: true });
}

updateSortCount();