/* beranda.js */

const originalOrder = [];
document.querySelectorAll('.post-card').forEach(c => originalOrder.push(c));

/* ── Toast flash dari server (login/daftar) ── */
document.addEventListener('DOMContentLoaded', () => {
  const ok  = document.getElementById('flashSuccess');
  const err = document.getElementById('flashError');
  if (ok  && ok.textContent.trim())  showToast(ok.textContent.trim(),  'success');
  if (err && err.textContent.trim()) showToast(err.textContent.trim(), 'error');
});

function setTab(btn, mode) {
  document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const grid = document.getElementById('feedGrid');
  const cards = [...document.querySelectorAll('.post-card')];
  if (mode === 'terpopuler') {
    cards.sort((a, b) => parseInt(b.dataset.likes) - parseInt(a.dataset.likes));
  } else {
    originalOrder.forEach(c => grid.appendChild(c));
    return;
  }
  cards.forEach((c, i) => {
    c.style.animation = 'none';
    void c.offsetWidth;
    c.style.animationDelay = (i * 40) + 'ms';
    c.style.animation = '';
    grid.appendChild(c);
  });
}

function handleSearch(val) {
  const q = val.trim().toLowerCase();
  const cards = document.querySelectorAll('.post-card');
  cards.forEach(card => {
    const match = !q ||
      (card.querySelector('.card-title')?.textContent || '').toLowerCase().includes(q) ||
      (card.querySelector('.card-cat-badge')?.textContent || '').toLowerCase().includes(q) ||
      (card.querySelector('.card-excerpt')?.textContent || '').toLowerCase().includes(q);
    card.classList.toggle('hidden', !match);
  });
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
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll && currentScroll > 200) {
      fab.style.transform = 'scale(0)';
    } else {
      fab.style.transform = 'scale(1)';
    }
    lastScroll = currentScroll;
  }, { passive: true });
}