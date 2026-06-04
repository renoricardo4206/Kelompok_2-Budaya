/* ── DOKUMENTASI.JS — Warisan ── */

let DOCS = [
  {
    id:1, cat:'tari', catLabel:'Tari', catColor:'#2e7d32', catBg:'rgba(46,125,50,0.12)',
    title:'Tari Kecak Bali',
    excerpt:'Dokumentasi lengkap tentang Tari Kecak dari Uluwatu, Bali. Mencakup sejarah, makna spiritual dalam ritual Hindu, gerakan, dan pengalaman menonton langsung.',
    fullText:'Tari Kecak adalah tarian ritual dari Bali yang berasal dari upacara keagamaan Hindu. Ratusan penari duduk melingkar sambil mengucapkan "cak cak cak" secara serempak. Setiap gerakan punya makna spiritual yang dalam, menggambarkan kisah Ramayana.',
    img:'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80',
    author:'Maria Damaris', authorAvatar:'https://i.pinimg.com/1200x/b0/0f/fb/b00ffb3a94d32e4741c7273338f667c3.jpg',
    time:'2 jam yang lalu', likes:0, views:1200, userUploaded:false,
  },
  {
    id:2, cat:'kuliner', catLabel:'Kuliner', catColor:'#cc8800', catBg:'rgba(245,159,0,0.12)',
    title:'Sepiring Rendang: Filosofi dan Resep Turun-temurun',
    excerpt:'Rendang bukan sekadar makanan — ini wujud kesabaran dan kecintaan orang Minang terhadap budayanya. Proses memasak 4-6 jam menyimpan makna yang dalam.',
    fullText:'Rendang adalah masakan daging sapi khas Minangkabau yang dimasak dengan santan dan rempah selama berjam-jam hingga kering. Setiap tahap proses memasak punya makna budaya tersendiri.',
    img:'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80',
    author:'Marcel Tandiawan', authorAvatar:'https://i.pinimg.com/webp/1200x/09/a0/a2/09a0a23164fddfe5027ba6b10dc0315a.webp',
    time:'5 jam yang lalu', likes:1, views:890, userUploaded:false,
  },
  {
    id:3, cat:'seni', catLabel:'Seni & Kriya', catColor:'#555', catBg:'rgba(85,85,85,0.10)',
    title:'Tas Tenun Sumba: Motif Hinggi dan Makna Spiritualnya',
    excerpt:'Tenun Sumba dibuat dengan teknik ikat yang prosesnya bisa memakan waktu berbulan-bulan. Setiap motif — kuda, naga, rusa — punya cerita dan makna spiritual tersendiri.',
    fullText:'Kain Hinggi dari Sumba adalah salah satu tekstil tradisional paling ikonik di Indonesia. Motif-motifnya bukan sekadar dekorasi, melainkan simbol status sosial dan kepercayaan.',
    img:'https://images.unsplash.com/photo-1590736704728-f4730bb30770?w=800&q=80',
    author:'Putri Asmita', authorAvatar:'https://i.pravatar.cc/64?img=25',
    time:'31 Mei 2026', likes:0, views:2100, userUploaded:false,
  },
  {
    id:4, cat:'pakaian', catLabel:'Pakaian Adat', catColor:'#9e2016', catBg:'rgba(158,32,22,0.1)',
    title:'Baju Bodo: Pakaian Adat Tertua di Dunia dari Sulawesi Selatan',
    excerpt:'Baju Bodo adalah pakaian adat suku Bugis-Makassar yang kainnya tipis transparan dengan warna mencolok. Setiap warna melambangkan status sosial pemakainya.',
    fullText:'Baju Bodo diyakini sebagai salah satu pakaian adat tertua di dunia. Warna merah untuk gadis remaja, putih untuk yang sudah tua — filosofi yang mendalam tersimpan di balik pilihan warna.',
    img:'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=80',
    author:'Michelle Putri', authorAvatar:'https://i.pravatar.cc/64?img=32',
    time:'14 Mei 2026', likes:3, views:670, userUploaded:false,
  },
  {
    id:5, cat:'musik', catLabel:'Musik', catColor:'#444', catBg:'rgba(14,14,14,0.08)',
    title:'Belajar Main Sasando: Harpa Daun Lontar dari NTT',
    excerpt:'Sasando adalah alat musik petik dari daun lontar berbentuk kipas dengan senar. Bunyinya seperti harpa namun lebih etnik. Pengrajinnya makin sedikit karena butuh keahlian khusus.',
    fullText:'Sasando berasal dari pulau Rote, NTT. Nama sasando berasal dari kata "sasandu" yang artinya alat yang bergetar. Instrumen ini semakin langka dan perlu dilestarikan.',
    img:'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
    author:'Muhammad Haikal', authorAvatar:'https://i.pravatar.cc/64?img=59',
    time:'5 Mei 2026', likes:1, views:3200, userUploaded:false,
  },
];

let currentCat = 'semua';
let currentView = 'grid';

const CAT_LABELS = {semua:'Semua Dokumentasi',tari:'Tari',kuliner:'Kuliner',seni:'Seni & Kriya',pakaian:'Pakaian Adat',musik:'Musik',bahasa:'Bahasa',lainnya:'Lainnya'};
const CAT_ICONS = {tari:'<i class="bi bi-person-arms-up" style="font-size:10px;margin-right:4px"></i>',kuliner:'<i class="bi bi-egg-fried" style="font-size:10px;margin-right:4px"></i>',seni:'<i class="bi bi-palette" style="font-size:10px;margin-right:4px"></i>',pakaian:'<i class="bi bi-stars" style="font-size:10px;margin-right:4px"></i>',musik:'<i class="bi bi-music-note" style="font-size:10px;margin-right:4px"></i>',bahasa:'<i class="bi bi-translate" style="font-size:10px;margin-right:4px"></i>',lainnya:'<i class="bi bi-three-dots" style="font-size:10px;margin-right:4px"></i>'};
const CAT_COLORS = {tari:{c:'#2e7d32',bg:'rgba(46,125,50,0.12)',label:'Tari'},kuliner:{c:'#cc8800',bg:'rgba(245,159,0,0.12)',label:'Kuliner'},pakaian:{c:'#9e2016',bg:'rgba(158,32,22,0.1)',label:'Pakaian Adat'},musik:{c:'#444',bg:'rgba(14,14,14,0.08)',label:'Musik'},bahasa:{c:'#1a56a0',bg:'rgba(26,86,160,0.1)',label:'Bahasa'},seni:{c:'#555',bg:'rgba(85,85,85,0.10)',label:'Seni & Kriya'},lainnya:{c:'#555',bg:'rgba(85,85,85,0.10)',label:'Lainnya'}};

function getCatIcon(cat){ return CAT_ICONS[cat]||'' }

function filterCat(cat, btn){
  currentCat = cat;
  document.querySelectorAll('.cat-link').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  document.getElementById('contentLabel').textContent = CAT_LABELS[cat]||'Dokumentasi';
  renderDocs();
}

function setView(v){
  currentView = v;
  document.getElementById('viewGrid').classList.toggle('active', v==='grid');
  document.getElementById('viewList').classList.toggle('active', v==='list');
  renderDocs();
}

function handleSearch(q){
  renderDocs(q.toLowerCase().trim());
}

function updateCounts(){
  document.getElementById('contentCount').textContent = DOCS.length + ' konten';
}

function renderDocs(q=''){
  const grid = document.getElementById('docGrid');
  let data = [...DOCS];
  if(currentCat !== 'semua') data = data.filter(d=>d.cat===currentCat);
  if(q) data = data.filter(d=>d.title.toLowerCase().includes(q)||d.excerpt.toLowerCase().includes(q)||d.author.toLowerCase().includes(q));

  document.getElementById('contentCount').textContent = data.length+' konten';
  grid.className = 'doc-grid' + (currentView==='list'?' list-view':'');

  if(!data.length){
    grid.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:60px 20px;display:flex;flex-direction:column;align-items:center;gap:12px"><i class="bi bi-search" style="font-size:48px;color:rgba(158,32,22,.2)"></i><h3 style="font-size:18px;color:var(--text-mid);margin:0">Konten tidak ditemukan</h3><p style="font-size:14px;color:var(--text-mid);opacity:.7;margin:0">Coba kata kunci lain atau upload konten baru.</p></div>`;
    return;
  }

  grid.innerHTML = data.map((d,i)=>`
  <div class="doc-card${currentView==='list'?' list-view':''}" onclick="openDoc(${d.id})" style="animation-delay:${i*0.05}s">
    <div class="doc-thumb">
      <img src="${d.img}" alt="${d.title}" onerror="this.src='https://placehold.co/600x300/fff1ec/9e2016?text=Warisan'">
      <span class="doc-cat-badge" style="background:#fff;color:${d.catColor}">${getCatIcon(d.cat)}${d.catLabel}</span>
      ${d.userUploaded?`<span class="doc-user-badge"><i class="bi bi-person-check"></i> Kontribusi</span>`:''}
    </div>
    <div class="doc-body">
      <h3 class="doc-title">${d.title}</h3>
      <p class="doc-excerpt">${d.excerpt}</p>
      <div class="doc-foot">
        <div class="doc-author">
          <img class="doc-author-avatar" src="${d.authorAvatar}" alt="${d.author}" onerror="this.src='https://placehold.co/28/ffc641/59413d?text=${d.author[0]}'">
          <div>
            <div class="doc-author-name">${d.author}</div>
            <div class="doc-author-time">${d.time}</div>
          </div>
        </div>
        <div class="doc-acts">
          <button class="doc-act" onclick="event.stopPropagation()"><i class="bi bi-hand-thumbs-up"></i>${d.likes}</button>
        </div>
      </div>
    </div>
  </div>`).join('');
}

function openDoc(id){
  window.location.href = `/dokumentasi/${id}`;
}

/* ── UPLOAD MODAL LOGIC ── */
function openModal(){document.getElementById('uploadModal').classList.add('open');document.body.classList.add('locked')}
function closeModal(){document.getElementById('uploadModal').classList.remove('open');document.body.classList.remove('locked')}

// Prevent closing modal when clicking inside the content
document.getElementById('uploadModal').addEventListener('click',function(e){
  if(e.target === this) closeModal()
});

function handleDrag(e, on){
  e.preventDefault();
  document.getElementById('uploadArea').classList.toggle('dragover',on)
}

function handleDrop(e){
  e.preventDefault();
  handleDrag(e,false);
  const file = e.dataTransfer.files[0];
  if(file && file.type.startsWith('image/')) loadPreview(file);
}

function handleFile(input){
  if(input.files[0]) loadPreview(input.files[0])
}

function loadPreview(file){
  const r = new FileReader();
  r.onload = e => {
    document.getElementById('uploadArea').style.display='none';
    document.getElementById('uploadPreview').style.display='block';
    document.getElementById('uploadPreviewImg').src=e.target.result;
  };
  r.readAsDataURL(file);
}

function removePreview(e){
  e.stopPropagation();
  document.getElementById('uploadArea').style.display='block';
  document.getElementById('uploadPreview').style.display='none';
  document.getElementById('fileInput').value='';
}

function submitUpload(){
  const judul = document.getElementById('inputJudul').value.trim();
  const kat = document.getElementById('inputKategori').value;
  const desk = document.getElementById('inputDeskripsi').value.trim();
  if(!judul){showToast('Masukkan judul konten');return}
  if(!kat){showToast('Pilih kategori');return}
  if(!desk){showToast('Masukkan deskripsi');return}

  const previewSrc = document.getElementById('uploadPreviewImg').src || 'https://placehold.co/600x300/fff1ec/9e2016?text=Warisan';
  const cc = CAT_COLORS[kat] || CAT_COLORS.lainnya;
  const newDoc = {
    id: Date.now(), cat:kat, catLabel:cc.label, catColor:cc.c, catBg:cc.bg,
    title:judul, excerpt:desk, fullText:desk,
    img: document.getElementById('uploadPreview').style.display!=='none' ? previewSrc : 'https://placehold.co/600x300/fff1ec/9e2016?text=Warisan',
    author:'Kamu', authorAvatar:'https://placehold.co/28/ffc641/59413d?text=K',
    time:'Baru saja', likes:0, views:0, userUploaded:true,
  };
  
  DOCS.unshift(newDoc);
  updateCounts();
  closeModal();
  currentCat='semua';
  document.querySelectorAll('.cat-link').forEach((b,i)=>{b.classList.toggle('active',i===0)});
  document.getElementById('contentLabel').textContent='Semua Dokumentasi';
  renderDocs();
  
  // Memakai fungsi global showToast
  showToast('Konten berhasil diupload! 🎉', 'success');
  
  // reset form
  document.getElementById('inputJudul').value='';
  document.getElementById('inputKategori').value='';
  document.getElementById('inputDeskripsi').value='';
  removePreview({stopPropagation:()=>{}});
}

/* ── INIT ── */
updateCounts();
const urlParams = new URLSearchParams(window.location.search);
const catParam = urlParams.get('cat');

if (catParam) {
  const catBtn = document.querySelector(`.cat-link[onclick*="'${catParam}'"]`);
  filterCat(catParam, catBtn);
} else {
  renderDocs();
}