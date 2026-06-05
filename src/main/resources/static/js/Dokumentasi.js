/* ── DOKUMENTASI.JS — Warisan ── */

// ========== GRID/LIST VIEW ==========
let currentView = 'grid';

function setView(view) {
    currentView = view;
    const grid = document.getElementById('docGrid');
    const gridBtn = document.getElementById('viewGrid');
    const listBtn = document.getElementById('viewList');
    
    if (!grid) return;
    
    if (view === 'grid') {
        grid.classList.remove('list-view');
        if (gridBtn) gridBtn.classList.add('active');
        if (listBtn) listBtn.classList.remove('active');
    } else {
        grid.classList.add('list-view');
        if (gridBtn) gridBtn.classList.remove('active');
        if (listBtn) listBtn.classList.add('active');
    }
}

// ========== SEARCH FILTER ==========
function filterDocs(keyword) {
    const cards = document.querySelectorAll('.doc-card');
    let count = 0;
    
    cards.forEach(card => {
        const title = card.getAttribute('data-title') || '';
        const content = card.getAttribute('data-content') || '';
        const match = title.toLowerCase().includes(keyword.toLowerCase()) || 
                     content.toLowerCase().includes(keyword.toLowerCase());
        
        if (match) {
            card.style.display = '';
            count++;
        } else {
            card.style.display = 'none';
        }
    });
    
    const countElem = document.getElementById('contentCount');
    if (countElem) countElem.innerText = count + ' konten';
}

// ========== UPLOAD MODAL ==========
function openModal() {
    const modal = document.getElementById('uploadModal');
    if (modal) {
        modal.classList.add('open');
        document.body.classList.add('locked');
    }
}

function closeModal() {
    const modal = document.getElementById('uploadModal');
    if (modal) {
        modal.classList.remove('open');
        document.body.classList.remove('locked');
    }
}

// Close modal when clicking outside
const uploadModal = document.getElementById('uploadModal');
if (uploadModal) {
    uploadModal.addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
}

// ========== COUNTER INIT ==========
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.doc-card');
    const countElem = document.getElementById('contentCount');
    if (countElem) countElem.innerText = cards.length + ' konten';
});