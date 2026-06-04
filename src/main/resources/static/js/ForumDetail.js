/* ── FORUMDETAIL.JS — Warisan ── */

const THREADS = [
  {id:1, cat:'bahasa', catLabel:'Bahasa', catColor:'#1565c0', catBg:'rgba(21,101,192,0.08)',
   username:'Revan Athallah', avatar:'https://i.pravatar.cc/64?img=11',
   time:'1 jam yang lalu', timeDate:'3 Jun 2026', timeRaw:'3 Jun 2026, 09:14',
   title:'Bahasa daerah kita bakal punah dalam 50 tahun ke depan — setuju atau tidak?',
   excerpt:'Baru baca laporan UNESCO yang bilang ratusan bahasa daerah di Indonesia masuk kategori terancam punah.',
   fullText:'Baru baca laporan UNESCO yang bilang ratusan bahasa daerah di Indonesia masuk kategori terancam punah. Gw jadi mikir, emang kita udah nggak peduli lagi sama bahasa ibu kita sendiri?\n\nGw orang Jawa tapi jujur aja bahasa Jawa gw payah banget. Ngomong sama nenek aja masih sering minta tolong kakak buat translasi. Dan kayaknya ini relate banget sama banyak orang generasi kita.\n\nPertanyaan gw: ini salah siapa? Salah sistem pendidikan yang terlalu fokus ke Bahasa Indonesia dan Inggris? Atau emang kita sendiri yang males? Atau ini udah takdir evolusi bahasa yang wajar?\n\nMenurut kalian, masih worth it nggak buat belajar dan lestarikan bahasa daerah di era sekarang? Atau energinya mending dialihkan ke bahasa yang lebih "berguna" secara ekonomi?',
   likes:312,
   replies:[
    {avatar:'https://i.pravatar.cc/40?img=20',name:'SariIndrawati',time:'3 Jun 2026, 09:45',text:'Worth it banget! Bahasa daerah bukan cuma alat komunikasi, tapi wadah budaya. Banyak konsep dan filosofi lokal yang literally nggak bisa diterjemahkan ke bahasa lain.',replyTo:null},
    {avatar:'https://i.pravatar.cc/40?img=33',name:'BramoPratama',time:'3 Jun 2026, 10:02',text:'Salah sistemnya menurut gw. Pelajaran bahasa daerah di sekolah itu cuma formalitas, nggak ada yang beneran serius ngajarinnya.',replyTo:null},
    {avatar:'https://i.pravatar.cc/40?img=42',name:'NinditaRaras',time:'3 Jun 2026, 10:28',text:'Setuju sama Bramo. Ditambah lagi konten hiburan kita hampir semua pakai Bahasa Indonesia atau Inggris. Anak-anak sekarang lebih familiar sama slang TikTok daripada bahasa neneknya.',replyTo:{name:'BramoPratama',text:'Salah sistemnya menurut gw'}},
    {avatar:'https://i.pravatar.cc/40?img=55',name:'YogiPangestu',time:'3 Jun 2026, 11:10',text:'Gw rasa ini bukan soal salah-salahan. Ini tanggung jawab kolektif. Mulai dari keluarga dulu — biasakan ngobrol pakai bahasa daerah di rumah.',replyTo:null}
   ]},
  {id:2, cat:'seni', catLabel:'Seni', catColor:'#6a1b9a', catBg:'rgba(106,27,154,0.08)',
   username:'Clarissa Dewi', avatar:'https://i.pravatar.cc/64?img=47',
   time:'4 jam yang lalu', timeDate:'3 Jun 2026', timeRaw:'3 Jun 2026, 06:30',
   title:'Batik printing vs batik tulis — ini beda produk atau beda budaya?',
   excerpt:'Kemarin debat sama teman soal ini dan nggak ada yang mau ngalah.',
   fullText:'Kemarin debat sama teman soal ini dan nggak ada yang mau ngalah. Dia bilang batik printing tetap bisa disebut "batik" karena motifnya sama. Gw nggak setuju.\n\nMenurut gw, batik itu bukan cuma soal motif — tapi soal proses. Proses nglowong, nembok, nyelup, nglorod itu bagian dari jiwanya batik. Kalau itu dilewatin dan diganti mesin cetak, yang tersisa cuma gambarnya doang, bukan budayanya.\n\nTapi di sisi lain, gw juga paham argumen sebaliknya: batik printing bikin motif tradisional lebih terjangkau dan accessible buat semua kalangan. Tanpa batik printing, mungkin generasi muda nggak bakal kenal motif Parang atau Kawung sama sekali.\n\nJadi pertanyaannya: apakah kita harus strict soal definisi "batik"? Atau fleksibilitas itu justru yang bikin budaya bisa bertahan?',
   likes:278,
   replies:[
    {avatar:'https://i.pravatar.cc/40?img=14',name:'HafidzNurul',time:'3 Jun 2026, 07:15',text:'Ini pertanyaan yang beneran susah. Tapi gw condong ke camp kamu — kalau proses tradisionalnya hilang, yang kita jual cuma estetika, bukan budaya.',replyTo:null},
    {avatar:'https://i.pravatar.cc/40?img=28',name:'MirandaKusuma',time:'3 Jun 2026, 08:00',text:'Eh tapi UNESCO sendiri mendefinisikan batik Indonesia berdasarkan motif dan filosofinya, bukan hanya prosesnya. Jadi secara formal, batik printing masih bisa masuk kategori batik.',replyTo:null},
    {avatar:'https://i.pravatar.cc/40?img=36',name:'HafidzNurul',time:'3 Jun 2026, 08:44',text:'Kalau gitu bedainnya gimana dong waktu beli? Harga doang? Kasian pengrajin batik tulis yang bisa butuh berminggu-minggu buat satu kain.',replyTo:{name:'MirandaKusuma',text:'UNESCO mendefinisikan batik berdasarkan motif'}}
   ]},
  {id:3, cat:'musik', catLabel:'Musik', catColor:'#555', catBg:'rgba(85,85,85,0.08)',
   username:'Fadhil Ramadhan', avatar:'https://i.pravatar.cc/64?img=59',
   time:'1 hari yang lalu', timeDate:'2 Jun 2026', timeRaw:'2 Jun 2026, 19:22',
   title:'Kenapa musisi muda Indonesia jarang eksplorasi alat musik tradisional?',
   excerpt:'Gw nonton konser indie kemarin dan mikir — dari 8 band yang tampil, nggak ada satupun yang pakai alat musik tradisional.',
   fullText:'Gw nonton konser indie kemarin dan mikir — dari 8 band yang tampil, nggak ada satupun yang pakai alat musik tradisional. Padahal kita punya gamelan, sasando, kolintang, tifa, dan banyak lagi.\n\nGw bukan yang tipe puritan "harus pakai alat tradisional". Tapi gw penasaran kenapa eksplorasi itu jarang banget terjadi di scene musik indie lokal, padahal potensinya luar biasa.\n\nApa karena susah belajarnya? Mahal alatnya? Atau emang nggak ada yang ngajarin dengan cara yang relevan buat anak muda?\n\nSementara itu di luar negeri, banyak banget musisi yang fuse traditional instruments dengan modern sound dan hasilnya keren parah. Kita seharusnya bisa lebih dari itu dengan kekayaan instrumen yang kita punya.\n\nAda yang punya pengalaman belajar alat musik tradisional? Susah nggak aksesnya?',
   likes:203,
   replies:[
    {avatar:'https://i.pravatar.cc/40?img=62',name:'AldoSantoso',time:'2 Jun 2026, 20:05',text:'Gw belajar gamelan waktu SMA tapi berhenti karena literally nggak ada komunitas yang aktif di kota gw. Itu masalah utamanya — ekosistemnya belum ada.',replyTo:null},
    {avatar:'https://i.pravatar.cc/40?img=17',name:'RizkiAmelia',time:'2 Jun 2026, 21:30',text:'Coba dengerin Kua Etnika atau Krakatau — mereka udah lama fuse tradisional sama kontemporer. Tapi emang kurang exposure ke anak muda sekarang.',replyTo:null},
    {avatar:'https://i.pravatar.cc/40?img=38',name:'TommyWijaya',time:'3 Jun 2026, 00:15',text:'Masalahnya juga di persepsi. Alat musik tradisional masih dianggap "kuno" dan nggak cool. Butuh tokoh atau influencer yang bisa reframe itu.',replyTo:{name:'RizkiAmelia',text:'Coba dengerin Kua Etnika atau Krakatau'}}
   ]},
  {id:4, cat:'kuliner', catLabel:'Kuliner', catColor:'#cc8800', catBg:'rgba(204,136,0,0.08)',
   username:'Nadhira Putri', avatar:'https://i.pravatar.cc/64?img=25',
   time:'2 hari yang lalu', timeDate:'1 Jun 2026', timeRaw:'1 Jun 2026, 13:45',
   title:'Makanan fusion Indonesia — inovasi yang perlu didukung atau ancaman buat kuliner asli?',
   excerpt:'Akhir-akhir ini makin banyak restoran yang jual "rendang pasta", "soto ramen", atau "nasi goreng sushi".',
   fullText:'Akhir-akhir ini makin banyak restoran yang jual "rendang pasta", "soto ramen", atau "nasi goreng sushi". Gw nggak tau harus excited atau khawatir.\n\nDi satu sisi, ini bukti bahwa kuliner Indonesia makin percaya diri dan mau bereksperimen. Fusion bisa jadi pintu masuk orang asing buat kenal rasa-rasa Indonesia.\n\nTapi di sisi lain, gw takut identitas kuliner kita jadi blur. Kalau generasi berikutnya lebih kenal "rendang pasta" daripada rendang asli, itu worth it nggak?\n\nGw juga mau tanya soal sudut pandang pedagang makanan tradisional — mereka diuntungkan atau dirugikan sama tren ini?\n\nMenurut kalian, ada batasnya nggak antara inovasi yang sehat dan komodifikasi yang kebablasan?',
   likes:187,
   replies:[
    {avatar:'https://i.pravatar.cc/40?img=31',name:'GalihPrasetyo',time:'1 Jun 2026, 14:20',text:'Selama yang aslinya juga tetap ada dan dirawat, fusion itu sah-sah aja. Yang bahaya kalau fusion menggantikan, bukan melengkapi.',replyTo:null},
    {avatar:'https://i.pravatar.cc/40?img=44',name:'FeliksiaAnanda',time:'1 Jun 2026, 15:10',text:'Gw malah optimis. Fusion bisa jadi gateway. Orang yang pertama kali makan rendang pasta bisa jadi penasaran sama rendang aslinya.',replyTo:null},
    {avatar:'https://i.pravatar.cc/40?img=52',name:'DindaMaharani',time:'1 Jun 2026, 17:55',text:'Masalahnya sering nggak ada edukasi. Orang beli fusion tanpa tau konteks originalnya. Jadi ya otomatis identitasnya hilang perlahan.',replyTo:{name:'FeliksiaAnanda',text:'Fusion bisa jadi gateway'}}
   ]},
  {id:5, cat:'tari', catLabel:'Tari', catColor:'#2e7d32', catBg:'rgba(46,125,50,0.08)',
   username:'Salsa Bening', avatar:'https://i.pravatar.cc/64?img=32',
   time:'3 hari yang lalu', timeDate:'31 Mei 2026', timeRaw:'31 Mei 2026, 10:08',
   title:'Tari tradisional wajib masuk kurikulum sekolah — perlu atau nggak?',
   excerpt:'Gw guru SD dan lagi debat sama rekan kerja soal ini.',
   fullText:'Gw guru SD dan lagi debat sama rekan kerja soal ini. Ada yang bilang anak-anak sekarang udah overloaded sama pelajaran, tambah tari malah jadi beban. Tapi ada yang bilang justru ini yang bikin anak kenal budayanya.\n\nSekarang di sekolah gw, tari tradisional cuma masuk di ekstrakulikuler — yang artinya opsional dan sering nggak diambil. Hasilnya? Mayoritas murid kelas 6 nggak bisa ngebedain tari Saman sama tari Jaipong.\n\nTapi gw juga paham bahwa memaksakan tari ke semua anak bisa jadi kontraproduktif. Kalau nggak ada passion-nya, jadinya malah hafalan yang dilupain begitu ujian selesai.\n\nJadi pertanyaan gw buat komunitas ini: gimana cara yang paling efektif buat mengenalkan tari tradisional ke generasi muda? Lewat sekolah formal, atau ada pendekatan lain yang lebih berhasil?',
   likes:156,
   replies:[
    {avatar:'https://i.pravatar.cc/40?img=8',name:'RanggaWibawa',time:'31 Mei 2026, 11:00',text:'Wajib masuk kurikulum tapi jangan dijadikan mata pelajaran yang dinilai dengan angka. Jadikan pengalaman budaya yang menyenangkan.',replyTo:null},
    {avatar:'https://i.pravatar.cc/40?img=21',name:'LestariHandayani',time:'31 Mei 2026, 12:30',text:'Setuju! Di sekolah tempat gw dulu, ada "Festival Budaya" tahunan yang bikin anak-anak mau belajar tari karena ada panggung-nya, bukan karena takut nilai jelek.',replyTo:{name:'RanggaWibawa',text:'jangan dijadikan mata pelajaran yang dinilai'}},
    {avatar:'https://i.pravatar.cc/40?img=49',name:'AhmadRifai',time:'31 Mei 2026, 14:15',text:'Yang lebih penting mungkin pelatihnya. Kalau gurunya sendiri nggak antusias, anaknya juga bakal ngerasa itu bukan hal yang penting.',replyTo:null}
   ]}
];

/* ── STATE ── */
let thread       = null;
let isLiked      = false;
let localReplies = [];

/* ── RENDER BALASAN ── */
function renderReplies() {
  if (localReplies.length === 0) {
    return `<div style="text-align:center;padding:32px 20px;color:var(--text-mid);font-size:14px">
      <i class="bi bi-chat" style="font-size:32px;opacity:.25;display:block;margin-bottom:8px"></i>
      Belum ada balasan. Jadilah yang pertama!</div>`;
  }
  return localReplies.map((r, i) => {
    const quoteHtml = r.replyTo
      ? `<div class="reply-quote"><strong>@${r.replyTo.name}</strong> — ${r.replyTo.text}</div>`
      : '';
    return `<div class="reply-card" style="animation-delay:${i * 40}ms">
      <div class="reply-top">
        <img class="reply-avatar" src="${r.avatar}" alt="${r.name}" onerror="this.src='https://placehold.co/36/ffdbce/9e2016?text=${r.name[0]}'">
        <div>
          <div class="reply-author-name">${r.name}</div>
          <div class="reply-author-time">${r.time}</div>
        </div>
      </div>
      ${quoteHtml}
      <p class="reply-text">${r.text}</p>
    </div>`;
  }).join('');
}

/* ── RENDER HALAMAN ── */
function render() {
  document.getElementById('pageContent').innerHTML = `
    <div class="detail-layout">
      <!-- SIDEBAR LEFT -->
      <aside class="sidebar-left">
        <div class="sidebar-title">Kategori</div>
        <div class="sidebar-subtitle">Filter diskusi</div>
        <nav class="cat-nav">
          <a class="cat-link" href="Forum.html"><i class="bi bi-compass"></i> Semua</a>
          <a class="cat-link${thread.cat==='tari'?' active':''}"    href="Forum.html?cat=tari"><i class="bi bi-person-arms-up"></i> Tari</a>
          <a class="cat-link${thread.cat==='bahasa'?' active':''}"  href="Forum.html?cat=bahasa"><i class="bi bi-translate"></i> Bahasa</a>
          <a class="cat-link${thread.cat==='seni'?' active':''}"    href="Forum.html?cat=seni"><i class="bi bi-palette"></i> Seni</a>
          <a class="cat-link${thread.cat==='musik'?' active':''}"   href="Forum.html?cat=musik"><i class="bi bi-music-note"></i> Musik</a>
          <a class="cat-link${thread.cat==='pakaian'?' active':''}" href="Forum.html?cat=pakaian"><i class="bi bi-stars"></i> Pakaian Adat</a>
          <a class="cat-link${thread.cat==='kuliner'?' active':''}" href="Forum.html?cat=kuliner"><i class="bi bi-egg-fried"></i> Kuliner</a>
          <a class="cat-link${thread.cat==='lainnya'?' active':''}" href="Forum.html?cat=lainnya"><i class="bi bi-three-dots"></i> Lainnya</a>
        </nav>
        <button class="btn-new-thread" onclick="location.href='BuatThreadBaru.html'"><i class="bi bi-plus-lg"></i> Buat Thread Baru</button>
      </aside>

      <!-- MAIN -->
      <main>
        <div class="breadcrumbs">
          <a href="Forum.html">Forum</a>
          <span class="sep">/</span>
          <a href="Forum.html?cat=${thread.cat}">${thread.catLabel}</a>
          <span class="sep">/</span>
          <span class="current">${thread.title}</span>
        </div>

        <div class="op-card">
          <div class="op-header">
            <div class="op-author-row">
              <img class="op-avatar" src="${thread.avatar}" alt="${thread.username}" onerror="this.src='https://placehold.co/48/ffdbce/9e2016?text=${thread.username[0]}'">
              <div class="op-author-info">
                <div class="op-author-name">${thread.username}</div>
                <div class="op-author-time">${thread.timeRaw}</div>
              </div>
            </div>
            <div class="op-tag-row">
              <span class="op-tag" style="background:${thread.catBg};color:${thread.catColor}">${thread.catLabel}</span>
            </div>
            <h1 class="op-title">${thread.title}</h1>
          </div>
          <div class="op-body">
            <p class="op-text">${thread.fullText}</p>
            <div class="op-actions">
              <button class="action-pill${isLiked ? ' liked' : ''}" id="likeBtn" onclick="toggleLike()">
                <i class="bi ${isLiked ? 'bi-heart-fill' : 'bi-heart'}"></i>
                <span id="likeCount">${thread.likes + (isLiked ? 1 : 0)}</span> Suka
              </button>
              <button class="action-share" onclick="shareThread()">
                <i class="bi bi-link-45deg"></i> Bagikan
              </button>
              <a href="Forum.html" class="back-btn"><i class="bi bi-arrow-left"></i> Kembali</a>
            </div>
          </div>
        </div>

        <div class="replies-header">
          <span class="replies-label">Balasan</span>
          <span class="replies-count" id="repliesCount">${localReplies.length} balasan</span>
          <div class="replies-line"></div>
        </div>

        <div id="repliesContainer">${renderReplies()}</div>

        <div class="reply-input-section">
          <div class="reply-input-title"><i class="bi bi-chat-square-text"></i> Tulis Balasan</div>
          <textarea class="reply-textarea" id="replyInput" placeholder="Bagikan pendapat atau pengalamanmu..." rows="3"
            oninput="autoResize(this)" onkeydown="handleReplyKey(event)"></textarea>
          <div class="reply-input-foot">
            <button class="btn-cancel-reply" onclick="document.getElementById('replyInput').value=''">Batal</button>
            <button class="btn-submit-reply" onclick="submitReply()"><i class="bi bi-send"></i> Kirim Balasan</button>
          </div>
        </div>
      </main>
    </div>`;
}

/* ── LIKE ── */
function toggleLike() {
  isLiked = !isLiked;
  const count = thread.likes + (isLiked ? 1 : 0);
  document.getElementById('likeBtn').className = 'action-pill' + (isLiked ? ' liked' : '');
  document.getElementById('likeBtn').querySelector('i').className = 'bi ' + (isLiked ? 'bi-heart-fill' : 'bi-heart');
  document.getElementById('likeCount').textContent = count;
  if (isLiked) showToast('Kamu menyukai thread ini ❤️', 'success');
}

/* ── SUBMIT BALASAN ── */
function submitReply() {
  const input = document.getElementById('replyInput');
  const text  = input.value.trim();
  if (!text) { showToast('Tulis balasan dulu ya!'); return; }

  localReplies.push({
    avatar: 'https://i.pravatar.cc/40?img=70',
    name:   'Kamu',
    time:   'Baru saja',
    text,
    replyTo: null
  });
  input.value        = '';
  input.style.height = 'auto';

  document.getElementById('repliesContainer').innerHTML = renderReplies();
  const countEl = document.getElementById('repliesCount');
  if (countEl) countEl.textContent = localReplies.length + ' balasan';

  showToast('Balasan terkirim!', 'success');
  setTimeout(() => {
    const last = document.querySelector('#repliesContainer .reply-card:last-child');
    if (last) last.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 100);
}

/* ── AUTO RESIZE TEXTAREA ── */
function autoResize(ta) {
  ta.style.height = 'auto';
  ta.style.height = Math.min(ta.scrollHeight, 200) + 'px';
}
function handleReplyKey(e) {
  if (e.key === 'Enter' && e.ctrlKey) { e.preventDefault(); submitReply(); }
}

/* ── SHARE ── */
function shareThread() {
  const url = window.location.href;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => showToast('Link disalin!', 'success'));
  } else {
    showToast('Link disalin!', 'success');
  }
}

/* ── NAV SCROLL ── */
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 8), { passive: true });

/* ── INIT ── */
function init() {
  const params = new URLSearchParams(window.location.search);
  const id     = parseInt(params.get('id'));
  thread       = THREADS.find(t => t.id === id);
  localReplies = thread ? [...(thread.replies || [])] : [];

  if (!thread) {
    document.getElementById('pageContent').innerHTML = `
      <div class="not-found">
        <i class="bi bi-chat-square-x"></i>
        <h2>Thread tidak ditemukan</h2>
        <p>Thread yang kamu cari sudah dihapus atau tidak tersedia.</p>
        <a href="Forum.html" style="display:inline-flex;align-items:center;gap:6px;margin-top:8px;font-size:14px;font-weight:600;color:var(--primary);text-decoration:none">
          <i class="bi bi-arrow-left"></i> Kembali ke Forum
        </a>
      </div>`;
    return;
  }

  document.title = thread.title + ' – Warisan';
  render();
}

init();