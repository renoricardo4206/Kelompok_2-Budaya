/* ── FORUMDETAIL.JS — Warisan ── */

const THREADS = [
  {
    id: 1, 
    cat: 'bahasa', catLabel: 'Bahasa', catColor: '#1565c0',
    username: 'Revan Athallah', avatarUrl: 'https://i.pravatar.cc/64?img=11',
    avatarBg: '#1565c0', avatarInitial: 'R',
    time: '1 jam yang lalu',
    title: 'Bahasa daerah kita bakal punah dalam 50 tahun ke depan — setuju atau tidak?',
    img: '',
    fullText: `Baru baca laporan UNESCO yang bilang ratusan bahasa daerah di Indonesia masuk kategori terancam punah. Gw jadi mikir, emang kita udah nggak peduli lagi sama bahasa ibu kita sendiri?

Gw orang Jawa tapi jujur aja bahasa Jawa gw payah banget. Ngomong sama nenek aja masih sering minta tolong kakak buat translasi. Dan kayaknya ini relate banget sama banyak orang generasi kita.

Pertanyaan gw: ini salah siapa? Salah sistem pendidikan yang terlalu fokus ke Bahasa Indonesia dan Inggris? Atau emang kita sendiri yang males? Atau ini udah takdir evolusi bahasa yang wajar?

Menurut kalian, masih worth it nggak buat belajar dan lestarikan bahasa daerah di era sekarang? Atau energinya mending dialihkan ke bahasa yang lebih "berguna" secara ekonomi?`,
    likes: 312, replies: 4,
    comments: [
      {
        id: 'c1', avatarUrl: 'https://i.pravatar.cc/40?img=20', initials: 'S', bg: '#427452', textColor: '#c1f8cd', name: 'SariIndrawati', time: '1 jam lalu',
        text: 'Worth it banget! Bahasa daerah bukan cuma alat komunikasi, tapi wadah budaya. Banyak konsep dan filosofi lokal yang literally nggak bisa diterjemahkan ke bahasa lain.',
        likes: 15, nested: []
      },
      {
        id: 'c2', avatarUrl: 'https://i.pravatar.cc/40?img=33', initials: 'B', bg: '#c0392b', textColor: '#ffe5e1', name: 'BramoPratama', time: '50 mnt lalu',
        text: 'Salah sistemnya menurut gw. Pelajaran bahasa daerah di sekolah itu cuma formalitas, nggak ada yang beneran serius ngajarinnya.',
        likes: 24,
        nested: [
          {
            id: 'r1', initials: 'N', bg: '#795900', textColor: '#fff8e1', name: 'NinditaRaras', time: '20 mnt lalu',
            text: 'Setuju sama Bramo. Ditambah lagi konten hiburan kita hampir semua pakai Bahasa Indonesia atau Inggris. Anak-anak sekarang lebih familiar sama slang TikTok daripada bahasa neneknya.',
            likes: 18
          }
        ]
      }
    ]
  },
  {
    id: 2, 
    cat: 'seni', catLabel: 'Seni & Kriya', catColor: '#6a1b9a',
    username: 'Clarissa Dewi', avatarUrl: 'https://i.pravatar.cc/64?img=47',
    avatarBg: '#6a1b9a', avatarInitial: 'C',
    time: '4 jam yang lalu',
    title: 'Batik printing vs batik tulis — ini beda produk atau beda budaya?',
    img: '',
    fullText: `Kemarin debat sama teman soal ini dan nggak ada yang mau ngalah. Dia bilang batik printing tetap bisa disebut "batik" karena motifnya sama. Gw nggak setuju.

Menurut gw, batik itu bukan cuma soal motif — tapi soal proses. Proses nglowong, nembok, nyelup, nglorod itu bagian dari jiwanya batik. Kalau itu dilewatin dan diganti mesin cetak, yang tersisa cuma gambarnya doang, bukan budayanya.

Tapi di sisi lain, gw juga paham argumen sebaliknya: batik printing bikin motif tradisional lebih terjangkau dan accessible buat semua kalangan. Tanpa batik printing, mungkin generasi muda nggak bakal kenal motif Parang atau Kawung sama sekali.

Jadi pertanyaannya: apakah kita harus strict soal definisi "batik"? Atau fleksibilitas itu justru yang bikin budaya bisa bertahan?`,
    likes: 278, replies: 3,
    comments: [
      {
        id: 'c3', avatarUrl: 'https://i.pravatar.cc/40?img=14', initials: 'H', bg: '#33489a', textColor: '#e8eaf6', name: 'HafidzNurul', time: '3 jam lalu',
        text: 'Ini pertanyaan yang beneran susah. Tapi gw condong ke camp kamu — kalau proses tradisionalnya hilang, yang kita jual cuma estetika, bukan budaya.',
        likes: 45, nested: []
      },
      {
        id: 'c4', avatarUrl: 'https://i.pravatar.cc/40?img=28', initials: 'M', bg: '#2e7d32', textColor: '#e8f5e9', name: 'MirandaKusuma', time: '2 jam lalu',
        text: 'Eh tapi UNESCO sendiri mendefinisikan batik Indonesia berdasarkan motif dan filosofinya, bukan hanya prosesnya. Jadi secara formal, batik printing masih bisa masuk kategori batik.',
        likes: 32,
        nested: [
          {
            id: 'r2', initials: 'H', bg: '#33489a', textColor: '#e8eaf6', name: 'HafidzNurul', time: '1 jam lalu',
            text: 'Kalau gitu bedainnya gimana dong waktu beli? Harga doang? Kasian pengrajin batik tulis yang bisa butuh berminggu-minggu buat satu kain.',
            likes: 12
          }
        ]
      }
    ]
  },
  {
    id: 3, 
    cat: 'musik', catLabel: 'Musik', catColor: '#444',
    username: 'Fadhil Ramadhan', avatarUrl: 'https://i.pravatar.cc/64?img=59',
    avatarBg: '#444', avatarInitial: 'F',
    time: '1 hari yang lalu',
    title: 'Kenapa musisi muda Indonesia jarang eksplorasi alat musik tradisional?',
    img: '',
    fullText: `Gw nonton konser indie kemarin dan mikir — dari 8 band yang tampil, nggak ada satupun yang pakai alat musik tradisional. Padahal kita punya gamelan, sasando, kolintang, tifa, dan banyak lagi.

Gw bukan yang tipe puritan "harus pakai alat tradisional". Tapi gw penasaran kenapa eksplorasi itu jarang banget terjadi di scene musik indie lokal, padahal potensinya luar biasa.

Apa karena susah belajarnya? Mahal alatnya? Atau emang nggak ada yang ngajarin dengan cara yang relevan buat anak muda?

Sementara itu di luar negeri, banyak banget musisi yang fuse traditional instruments dengan modern sound dan hasilnya keren parah. Kita seharusnya bisa lebih dari itu dengan kekayaan instrumen yang kita punya.

Ada yang punya pengalaman belajar alat musik tradisional? Susah nggak aksesnya?`,
    likes: 203, replies: 3,
    comments: [
      {
        id: 'c5', avatarUrl: 'https://i.pravatar.cc/40?img=62', initials: 'A', bg: '#9e2016', textColor: '#ffe5e1', name: 'AldoSantoso', time: '20 jam lalu',
        text: 'Gw belajar gamelan waktu SMA tapi berhenti karena literally nggak ada komunitas yang aktif di kota gw. Itu masalah utamanya — ekosistemnya belum ada.',
        likes: 67, nested: []
      },
      {
        id: 'c6', avatarUrl: 'https://i.pravatar.cc/40?img=17', initials: 'R', bg: '#795900', textColor: '#fff8e1', name: 'RizkiAmelia', time: '18 jam lalu',
        text: 'Coba dengerin Kua Etnika atau Krakatau — mereka udah lama fuse tradisional sama kontemporer. Tapi emang kurang exposure ke anak muda sekarang.',
        likes: 41,
        nested: [
          {
            id: 'r3', initials: 'T', bg: '#2a5b3b', textColor: '#c1f8cd', name: 'TommyWijaya', time: '15 jam lalu',
            text: 'Masalahnya juga di persepsi. Alat musik tradisional masih dianggap "kuno" dan nggak cool. Butuh tokoh atau influencer yang bisa reframe itu.',
            likes: 29
          }
        ]
      }
    ]
  },
  {
    id: 4, 
    cat: 'kuliner', catLabel: 'Kuliner', catColor: '#cc8800',
    username: 'Nadhira Putri', avatarUrl: 'https://i.pravatar.cc/64?img=25',
    avatarBg: '#cc8800', avatarInitial: 'N',
    time: '2 hari yang lalu',
    title: 'Makanan fusion Indonesia — inovasi yang perlu didukung atau ancaman buat kuliner asli?',
    img: '',
    fullText: `Akhir-akhir ini makin banyak restoran yang jual "rendang pasta", "soto ramen", atau "nasi goreng sushi". Gw nggak tau harus excited atau khawatir.

Di satu sisi, ini bukti bahwa kuliner Indonesia makin percaya diri dan mau bereksperimen. Fusion bisa jadi pintu masuk orang asing buat kenal rasa-rasa Indonesia.

Tapi di sisi lain, gw takut identitas kuliner kita jadi blur. Kalau generasi berikutnya lebih kenal "rendang pasta" daripada rendang asli, itu worth it nggak?

Gw juga mau tanya soal sudut pandang pengrajin dan pedagang makanan tradisional — mereka diuntungkan atau dirugikan sama tren ini?

Menurut kalian, ada batasnya nggak antara inovasi yang sehat dan komodifikasi yang kebablasan?`,
    likes: 187, replies: 3,
    comments: [
      {
        id: 'c7', avatarUrl: 'https://i.pravatar.cc/40?img=31', initials: 'G', bg: '#1565c0', textColor: '#e8eaf6', name: 'GalihPrasetyo', time: '1 hari lalu',
        text: 'Selama yang aslinya juga tetap ada dan dirawat, fusion itu sah-sah aja. Yang bahaya kalau fusion menggantikan, bukan melengkapi.',
        likes: 52, nested: []
      },
      {
        id: 'c8', avatarUrl: 'https://i.pravatar.cc/40?img=44', initials: 'F', bg: '#c0392b', textColor: '#ffe5e1', name: 'FeliksiaAnanda', time: '1 hari lalu',
        text: 'Gw malah optimis. Fusion bisa jadi gateway. Orang yang pertama kali makan rendang pasta bisa jadi penasaran sama rendang aslinya.',
        likes: 38,
        nested: [
          {
            id: 'r4', initials: 'D', bg: '#2e7d32', textColor: '#e8f5e9', name: 'DindaMaharani', time: '20 jam lalu',
            text: 'Masalahnya sering nggak ada edukasi. Orang beli fusion tanpa tau konteks originalnya. Jadi ya otomatis identitasnya hilang perlahan.',
            likes: 21
          }
        ]
      }
    ]
  },
  {
    id: 5, 
    cat: 'tari', catLabel: 'Tari', catColor: '#2e7d32',
    username: 'Salsa Bening', avatarUrl: 'https://i.pravatar.cc/64?img=32',
    avatarBg: '#2e7d32', avatarInitial: 'S',
    time: '3 hari yang lalu',
    title: 'Tari tradisional wajib masuk kurikulum sekolah — perlu atau nggak?',
    img: '',
    fullText: `Gw guru SD dan lagi debat sama rekan kerja soal ini. Ada yang bilang anak-anak sekarang udah overloaded sama pelajaran, tambah tari malah jadi beban. Tapi ada yang bilang justru ini yang bikin anak kenal budayanya.

Sekarang di sekolah gw, tari tradisional cuma masuk di ekstrakulikuler — yang artinya opsional dan sering nggak diambil. Hasilnya? Mayoritas murid kelas 6 nggak bisa ngebedain tari Saman sama tari Jaipong.

Tapi gw juga paham bahwa memaksakan tari ke semua anak bisa jadi kontraproduktif. Kalau nggak ada passion-nya, jadinya malah hafalan yang dilupain begitu ujian selesai.

Jadi pertanyaan gw buat komunitas ini: gimana cara yang paling efektif buat mengenalkan tari tradisional ke generasi muda? Lewat sekolah formal, atau ada pendekatan lain yang lebih berhasil?`,
    likes: 156, replies: 3,
    comments: [
      {
        id: 'c9', avatarUrl: 'https://i.pravatar.cc/40?img=8', initials: 'R', bg: '#795900', textColor: '#fff8e1', name: 'RanggaWibawa', time: '2 hari lalu',
        text: 'Wajib masuk kurikulum tapi jangan dijadikan mata pelajaran yang dinilai dengan angka. Jadikan pengalaman budaya yang menyenangkan.',
        likes: 88,
        nested: [
          {
            id: 'r5', initials: 'L', bg: '#33489a', textColor: '#e8eaf6', name: 'LestariHandayani', time: '2 hari lalu',
            text: 'Setuju! Di sekolah tempat gw dulu, ada "Festival Budaya" tahunan yang bikin anak-anak mau belajar tari karena ada panggung-nya, bukan karena takut nilai jelek.',
            likes: 45
          }
        ]
      },
      {
        id: 'c10', avatarUrl: 'https://i.pravatar.cc/40?img=49', initials: 'A', bg: '#444', textColor: '#f4f4f4', name: 'AhmadRifai', time: '1 hari lalu',
        text: 'Yang lebih penting mungkin pelatihnya. Kalau gurunya sendiri nggak antusias, anaknya juga bakal ngerasa itu bukan hal yang penting.',
        likes: 31, nested: []
      }
    ]
  }
];

const RELATED = {
  tari:[
    {cat:'Sejarah',catColor:'#9e2016',title:'Perbedaan Mendasar Motif Parang Rusak dan Parang Barong',meta:'Oleh Ki Dalang • 12 Balasan'},
    {cat:'Teknik',catColor:'#795900',title:'Mengapa Proses Malam (Lilin) Sering Bocor pada Kain Sutra?',meta:'Oleh PengrajinMuda • 45 Balasan'},
    {cat:'Seni Rupa',catColor:'#2a5b3b',title:'Pameran Wastra Nusantara di Museum Nasional Minggu Ini',meta:'Oleh InfoBudaya • 8 Balasan'}
  ],
  kuliner:[
    {cat:'Tradisi',catColor:'#cc8800',title:'Filosofi di Balik Upacara Makan Bersama Suku Jawa',meta:'Oleh BudayaJawa • 20 Balasan'},
    {cat:'Resep',catColor:'#2a5b3b',title:'Bagaimana Cara Membuat Bumbu Rendang yang Autentik',meta:'Oleh ChefMinang • 34 Balasan'},
    {cat:'Sejarah',catColor:'#9e2016',title:'Rendang di Mata Dunia: Dari Lokal Jadi Warisan UNESCO',meta:'Oleh InfoKuliner • 15 Balasan'}
  ],
  lainnya:[
    {cat:'Teknik',catColor:'#555',title:'Perbedaan Teknik Ikat dan Songket dalam Tenun Nusantara',meta:'Oleh PengrajinSumba • 18 Balasan'},
    {cat:'Motif',catColor:'#795900',title:'Makna Simbol Hewan dalam Motif Tenun NTT',meta:'Oleh BudayaNTT • 27 Balasan'},
    {cat:'Komunitas',catColor:'#2a5b3b',title:'Koperasi Pengrajin Tenun di Sumba: Cara Bergabung',meta:'Oleh InfoKoperasi • 9 Balasan'}
  ],
  pakaian:[
    {cat:'Sejarah',catColor:'#9e2016',title:'Pakaian Adat yang Hampir Punah di Indonesia',meta:'Oleh SejarahBudaya • 22 Balasan'},
    {cat:'Fashion',catColor:'#795900',title:'Baju Bodo Modern: Kolaborasi Desainer dan Pengrajin Lokal',meta:'Oleh FashionID • 31 Balasan'},
    {cat:'Filosofi',catColor:'#33489a',title:'Makna Warna dalam Pakaian Adat Bugis-Makassar',meta:'Oleh FilosofiBudaya • 14 Balasan'}
  ],
  musik:[
    {cat:'Alat Musik',catColor:'#444',title:'5 Alat Musik Tradisional NTT yang Hampir Punah',meta:'Oleh BudayaNTT • 33 Balasan'},
    {cat:'Workshop',catColor:'#2a5b3b',title:'Jadwal Workshop Musik Tradisional Jakarta 2026',meta:'Oleh InfoEvent • 12 Balasan'},
    {cat:'Sejarah',catColor:'#9e2016',title:'Sejarah Sasando: Dari Pulau Rote ke Panggung Dunia',meta:'Oleh SejarahMusik • 28 Balasan'}
  ]
};

let currentThread = null;
let likedPost = false;
let likedComments = new Set();

function getThreadFromURL(){
  const pathparts = window.location.pathname.split('/');
  const id = parseInt(pathparts[pathparts.length-1]) || 1;
  return THREADS.find(t => t.id === id) || THREADS[0];
}

function renderPage(){
  const t = getThreadFromURL();
  currentThread = t;

  // Page title
  document.getElementById('pageTitle').textContent = t.title + ' – Warisan';

  // Highlight active category in sidebar
  document.querySelectorAll('.cat-link').forEach(l => l.classList.remove('active'));
  const activeLink = document.querySelector(`.cat-link[href*="cat=${t.cat}"]`);
  if(activeLink) activeLink.classList.add('active');

  // Render related threads for right sidebar
  const related = RELATED[t.cat] || RELATED.tari;
  document.getElementById('relatedItems').innerHTML = related.map(r => `
    <div class="related-item" onclick="showToast('Segera hadir!')">
      <span class="ri-cat" style="color:${r.catColor}">${r.cat}</span>
      <p class="ri-title">${r.title}</p>
      <span class="ri-meta">${r.meta}</span>
    </div>
  `).join('');

  // Render main content
  document.getElementById('mainContent').innerHTML = `
    <!-- BREADCRUMBS -->
    <nav class="breadcrumbs">
      <a href="/dokumentasi">Dokumentasi</a>
      <span><i class="bi bi-chevron-right" style="font-size:9px"></i></span>
      <a href="/dokumentasi?cat=${t.cat}">${t.catLabel}</a>
      <span><i class="bi bi-chevron-right" style="font-size:9px"></i></span>
      <span class="current">${t.title}</span>
    </nav>

    <!-- OP CARD -->
    <div class="op-card">
      <div class="op-body">
        <div class="op-meta">
          <div class="op-author">
            ${t.avatarUrl
              ? `<img class="op-avatar" src="${t.avatarUrl}" alt="${t.username}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
              : ''}
            <div class="op-avatar-placeholder" style="background:${t.avatarBg};color:#fff;display:${t.avatarUrl?'none':'flex'}">${t.avatarInitial}</div>
            <div>
              <div class="op-name">${t.username}</div>
              <div class="op-time">${t.time}</div>
            </div>
          </div>
          <button class="op-menu" onclick="showToast('Opsi lainnya segera hadir!')">
            <i class="bi bi-three-dots-vertical"></i>
          </button>
        </div>
        <h1 class="op-title">${t.title}</h1>
        <p class="op-text">${escapeHtml(t.fullText)}</p>
        <img class="op-img" src="${t.img}" alt="${t.title}" onerror="this.style.display='none'">
      </div>
      <div class="interact-bar">
        <button class="ibar-btn" id="likePostBtn" onclick="toggleLikePost()">
          <i class="bi bi-heart" id="likePostIcon"></i>
          <span id="likePostCount">${t.likes} Dukungan</span>
        </button>
        <button class="ibar-btn" onclick="document.getElementById('commentTextarea').focus()">
          <i class="bi bi-chat"></i>
          <span>${t.replies} Balasan</span>
        </button>
        <button class="ibar-btn ibar-share" onclick="shareThread()">
          <i class="bi bi-share"></i>
          <span>Bagikan</span>
        </button>
      </div>
    </div>

    <!-- DISCUSSION SECTION -->
    <div class="discussion-section">
      <h2 class="discussion-title">Diskusi</h2>

      <!-- Comment Form -->
      <div class="comment-form">
        <div class="cf-avatar">A</div>
        <div class="cf-right">
          <textarea class="cf-textarea" id="commentTextarea" placeholder="Tuliskan pandangan Anda..." rows="3"></textarea>
          <div class="cf-submit-row">
            <button class="cf-submit" onclick="submitComment()">Kirim Balasan</button>
          </div>
        </div>
      </div>

      <!-- Comment Thread -->
      <div class="comment-thread" id="commentThread">
        ${renderComments(t.comments)}
      </div>
    </div>
  `;
}

function renderComments(comments){
  return comments.map(c => `
    <div class="comment-item">
      ${c.avatarUrl
        ? `<img class="comment-avatar" src="${c.avatarUrl}" alt="${c.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="comment-avatar-initials" style="background:${c.bg};color:${c.textColor};display:none">${c.initials}</div>`
        : `<div class="comment-avatar-initials" style="background:${c.bg};color:${c.textColor}">${c.initials}</div>`
      }
      <div class="comment-right">
        <div class="comment-bubble">
          <div class="comment-header">
            <span class="comment-name">${c.name}</span>
            <span class="comment-time">${c.time}</span>
          </div>
          <p class="comment-text">${escapeHtml(c.text)}</p>
        </div>
        <div class="comment-actions">
          <button class="ca-btn" onclick="toggleCommentLike('${c.id}',this)">
            <i class="bi ${likedComments.has(c.id)?'bi-heart-fill':'bi-heart'}" style="color:${likedComments.has(c.id)?'#9e2016':''}"></i>
            <span id="clikes-${c.id}">${c.likes}</span>
          </button>
          <button class="ca-btn" onclick="showToast('Fitur balas segera hadir!')">
            <i class="bi bi-reply"></i> Balas
          </button>
        </div>
        ${c.nested && c.nested.length ? `
        <div class="nested-replies">
          ${c.nested.map(r => `
            <div class="reply-item">
              <div class="reply-avatar-initials" style="background:${r.bg};color:${r.textColor}">${r.initials}</div>
              <div>
                <div class="reply-bubble">
                  <div class="reply-header">
                    <span class="reply-name">${r.name}</span>
                    <span class="reply-time">${r.time}</span>
                  </div>
                  <p class="reply-text">${escapeHtml(r.text)}</p>
                </div>
                <div class="reply-actions">
                  <button class="ra-btn" onclick="toggleCommentLike('${r.id}',this)">
                    <i class="bi ${likedComments.has(r.id)?'bi-heart-fill':'bi-heart'}" style="color:${likedComments.has(r.id)?'#9e2016':''}"></i>
                    <span id="clikes-${r.id}">${r.likes}</span>
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>` : ''}
      </div>
    </div>
  `).join('');
}

function escapeHtml(str){
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

/* ── LIKE POST ── */
function toggleLikePost(){
  const btn = document.getElementById('likePostBtn');
  const icon = document.getElementById('likePostIcon');
  const countEl = document.getElementById('likePostCount');
  likedPost = !likedPost;
  if(likedPost){
    icon.className = 'bi bi-heart-fill';
    icon.style.color = '#9e2016';
    currentThread.likes++;
    btn.classList.add('liked');
    icon.style.transform = 'scale(1.4)';
    setTimeout(()=>icon.style.transform='',180);
    showToast('Kamu mendukung thread ini ❤️','success');
  } else {
    icon.className = 'bi bi-heart';
    icon.style.color = '';
    currentThread.likes--;
    btn.classList.remove('liked');
  }
  countEl.textContent = currentThread.likes + ' Dukungan';
}

/* ── LIKE COMMENT ── */
function toggleCommentLike(cid, btn){
  const icon = btn.querySelector('i');
  const countEl = document.getElementById('clikes-'+cid);
  const liked = likedComments.has(cid);
  if(liked){
    likedComments.delete(cid);
    icon.className='bi bi-heart';icon.style.color='';
    if(countEl) countEl.textContent=parseInt(countEl.textContent)-1;
  } else {
    likedComments.add(cid);
    icon.className='bi bi-heart-fill';icon.style.color='#9e2016';
    if(countEl) countEl.textContent=parseInt(countEl.textContent)+1;
    icon.style.transform='scale(1.4)';setTimeout(()=>icon.style.transform='',160);
  }
}

/* ── SUBMIT COMMENT ── */
function submitComment(){
  const ta = document.getElementById('commentTextarea');
  const text = ta.value.trim();
  if(!text){ showToast('Tulis komentar dulu ya!'); return; }
  const newId = 'new-'+Date.now();
  const newComment = {id:newId, avatarUrl:'', initials:'K', bg:'#c0392b', textColor:'#ffe5e1', name:'Kamu', time:'Baru saja', text, likes:0, nested:[]};
  currentThread.comments.push(newComment);
  ta.value='';
  const thread = document.getElementById('commentThread');
  const div = document.createElement('div');
  div.innerHTML = renderComments([newComment]);
  thread.appendChild(div.firstElementChild);
  showToast('Balasan terkirim!','success');
  div.firstElementChild.scrollIntoView({behavior:'smooth',block:'nearest'});
}

/* ── SHARE ── */
function shareThread(){
  if(navigator.share){
    navigator.share({title:currentThread.title,text:currentThread.fullText.slice(0,120)+'...',url:window.location.href}).catch(()=>{});
  } else {
    navigator.clipboard?.writeText(window.location.href)
      .then(()=>showToast('Link disalin!','success'))
      .catch(()=>showToast('Link: '+window.location.href));
  }
}

/* ── INIT ── */
renderPage();