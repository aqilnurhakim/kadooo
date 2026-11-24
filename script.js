(() => {
  const cfg = window.LOVE_CONFIG || {};
  const $ = (id) => document.getElementById(id);
  const girlfriend = cfg.girlfriendName || "Sayang";
  const sender = cfg.senderName || "Aku";

  $("heroName").textContent = girlfriend === "Sayang" ? "Kameliaa" : girlfriend;
  $("senderFooter").textContent = sender;
  $("letterSender").textContent = sender;
  $("letterTitle").textContent = cfg.letterTitle || "Untuk kamu, Kameliaa";
  const message = (cfg.letterMessage || "Terima kasih sudah hadir di hidupku. Aku sayang kamu. ♡").replace(/\$\{"Aku"\}/g, sender);
  $("letterMessage").textContent = message;

  // Floating hearts
  const heartLayer = $("floatingHearts");
  const heartSymbols = ["♡", "♥", "✧", "·"];
  function createHeart() {
    const el = document.createElement("span");
    el.className = "float-heart";
    el.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    el.style.left = `${Math.random() * 100}%`;
    el.style.fontSize = `${12 + Math.random() * 18}px`;
    el.style.animationDuration = `${9 + Math.random() * 9}s`;
    heartLayer.appendChild(el);
    window.setTimeout(() => el.remove(), 19000);
  }
  for (let i = 0; i < 9; i++) window.setTimeout(createHeart, i * 650);
  window.setInterval(createHeart, 1700);

  // Letter modal and surprise modal
  const letterModal = $("letterModal");
  const surpriseModal = $("surpriseModal");
  const openLetter = () => letterModal.showModal();
  $("openLetter").addEventListener("click", openLetter);
  $("heroLetterButton").addEventListener("click", openLetter);
  $("surpriseButton").addEventListener("click", () => {
    surpriseModal.showModal();
    heartBurst();
  });
  document.querySelectorAll("[data-close]").forEach((button) => {
    button.addEventListener("click", () => $(button.dataset.close).close());
  });
  [letterModal, surpriseModal].forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  });

  // Gallery lightbox
  const lightbox = $("lightbox");
  document.querySelectorAll(".memory-photo").forEach((button) => {
    button.addEventListener("click", () => {
      $("lightboxImage").src = button.dataset.full;
      lightbox.showModal();
    });
  });
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.close();
  });

  // 100 reasons
  const reasons = [
    "Karena kamu adalah kamu, dan itu sudah lebih dari cukup.",
    "Senyummu selalu berhasil memperbaiki hariku.",
    "Caramu tertawa membuat suasana jadi lebih hangat.",
    "Kamu punya cara sendiri untuk membuat hal sederhana terasa istimewa.",
    "Aku suka mendengar cerita-ceritamu.",
    "Kamu membuatku ingin menjadi pribadi yang lebih baik.",
    "Karena bersamamu, aku bisa menjadi diriku sendiri.",
    "Tatapan matamu selalu punya cerita.",
    "Kamu tetap berharga bahkan di hari-hari ketika kamu merasa kurang.",
    "Aku suka caramu memperhatikan hal-hal kecil.",
    "Kamu punya hati yang lembut.",
    "Suaramu adalah salah satu hal yang ingin kudengar lebih sering.",
    "Kamu mengajarkanku arti sabar dan memahami.",
    "Aku suka saat kamu menceritakan sesuatu dengan antusias.",
    "Kamu membuat jarak terasa tidak terlalu jauh.",
    "Karena obrolan sederhana denganmu tidak pernah terasa sia-sia.",
    "Aku suka melihatmu bahagia.",
    "Kamu punya keunikan yang tidak bisa digantikan siapa pun.",
    "Bahkan diam bersamamu terasa nyaman.",
    "Kamu selalu punya tempat khusus di pikiranku.",
    "Aku suka caramu memperjuangkan hal yang kamu inginkan.",
    "Kamu mengingatkanku untuk bersyukur.",
    "Karena kamu pantas mendapatkan kasih sayang yang tulus.",
    "Aku suka setiap versi dirimu.",
    "Kamu membuatku percaya bahwa hal baik bisa datang dengan sederhana.",
    "Kamu adalah alasan kecil di balik banyak senyumku.",
    "Aku suka saat kita saling bertukar cerita.",
    "Kamu punya semangat yang mengagumkan.",
    "Caramu memandang dunia membuatku ingin mengenalmu lebih jauh.",
    "Aku suka perhatian kecil yang kamu berikan.",
    "Kamu tetap cantik tanpa harus berusaha menjadi orang lain.",
    "Aku suka caramu menjadi diri sendiri.",
    "Kamu membuat hari biasa terasa lebih berwarna.",
    "Aku ingin menjadi pendengar yang baik untukmu.",
    "Kamu mengajarkanku bahwa cinta juga tentang menghargai.",
    "Aku suka ketika kamu tertawa lepas.",
    "Kamu punya banyak hal baik yang mungkin belum kamu sadari.",
    "Aku senang bisa mengenalmu lebih dekat.",
    "Kamu membuatku ingin merencanakan banyak hal indah.",
    "Aku suka caramu menyebut namaku.",
    "Kamu layak dirayakan, bukan hanya pada hari istimewa.",
    "Aku ingin mendukung mimpi-mimpimu.",
    "Kamu membuatku belajar untuk tidak menyerah begitu saja.",
    "Aku suka caramu menunjukkan kepedulian.",
    "Kamu adalah seseorang yang ingin terus aku kenal.",
    "Aku suka momen kecil yang kita bagi.",
    "Kamu membuatku merasa beruntung.",
    "Aku ingin melihatmu tumbuh dan bahagia.",
    "Kamu tidak harus sempurna untuk dicintai.",
    "Aku suka semua cerita yang membentuk dirimu.",
    "Kamu membuat kata rindu terasa punya arti.",
    "Aku suka ketika kita bisa tertawa karena hal receh.",
    "Kamu adalah bagian manis dari hari-hariku.",
    "Aku menghargai keberanianmu.",
    "Kamu membuatku ingin lebih perhatian.",
    "Aku suka caramu mencoba lagi setelah lelah.",
    "Kamu pantas didengarkan dan dimengerti.",
    "Aku ingin menjadi tempat aman untuk bercerita.",
    "Kamu membuatku melihat keindahan dalam hal kecil.",
    "Aku suka saat kamu berbagi kabar denganku.",
    "Kamu punya cara unik untuk membuatku tersenyum.",
    "Aku ingin merayakan keberhasilanmu, sekecil apa pun itu.",
    "Kamu tetap istimewa saat sedang tidak baik-baik saja.",
    "Aku suka caramu membawa dirimu.",
    "Kamu membuatku ingin belajar memahami lebih dalam.",
    "Aku senang setiap kali ada kesempatan berbicara denganmu.",
    "Kamu adalah doa baik yang ingin kujaga.",
    "Aku suka saat kamu menceritakan hal yang kamu sukai.",
    "Kamu membuatku lebih menghargai waktu.",
    "Aku ingin menemani prosesmu, bukan hanya hasil akhirnya.",
    "Kamu punya cahaya dengan caramu sendiri.",
    "Aku suka melihatmu mengejar impian.",
    "Kamu membuatku ingin lebih jujur tentang perasaan.",
    "Aku suka hal-hal kecil yang hanya kita pahami.",
    "Kamu mengingatkanku bahwa perhatian tidak harus mewah.",
    "Aku ingin selalu menghormati batas dan perasaanmu.",
    "Kamu membuatku ingin menjaga komunikasi dengan baik.",
    "Aku suka ketika kamu merasa nyaman menjadi diri sendiri.",
    "Kamu punya banyak alasan untuk bangga pada dirimu.",
    "Aku ingin menjadi pendukung nomor satumu.",
    "Kamu membuatku percaya pada proses yang pelan-pelan.",
    "Aku suka caramu membuat kenangan.",
    "Kamu selalu punya sisi baru yang menarik untuk kukenal.",
    "Aku ingin mendengar lebih banyak tentang harimu.",
    "Kamu membuatku belajar mencintai dengan lebih dewasa.",
    "Aku suka setiap kesempatan untuk membuatmu bahagia.",
    "Kamu pantas mendapatkan kata-kata baik.",
    "Aku ingin mengingat hal-hal yang penting bagimu.",
    "Kamu membuatku ingin lebih bersyukur hari ini.",
    "Aku suka caramu menyikapi hal yang kamu percaya.",
    "Kamu adalah seseorang yang tidak ingin kuanggap biasa.",
    "Aku ingin terus belajar menjadi pasangan yang lebih baik.",
    "Kamu membuatku punya banyak cerita untuk dikenang.",
    "Aku suka kehadiranmu, bahkan tanpa banyak kata.",
    "Kamu berhak merasa dicintai dan dihargai.",
    "Aku ingin kita saling tumbuh tanpa saling membatasi.",
    "Kamu adalah kamu—dan itulah alasan yang paling kusuka.",
    "Terakhir, karena dari sekian banyak orang, aku bersyukur bisa mengenalmu."
  ];
  let reasonIndex = 0;
  function showReason(index) {
    reasonIndex = (index + reasons.length) % reasons.length;
    $("reasonNumber").textContent = `${String(reasonIndex + 1).padStart(2, "0")} / 100`;
    $("reasonText").textContent = reasons[reasonIndex];
  }
  $("nextReason").addEventListener("click", () => showReason(reasonIndex + 1));
  $("randomReason").addEventListener("click", () => {
    let next = Math.floor(Math.random() * reasons.length);
    if (next === reasonIndex) next = (next + 1) % reasons.length;
    showReason(next);
  });
  showReason(0);

  // Relationship counter (local time)
  const dateValue = (cfg.relationshipDate || "").trim();
  function updateCounter() {
    if (!dateValue || !/^\d{4}-\d{2}-\d{2}$/.test(dateValue)) return;
    const start = new Date(`${dateValue}T00:00:00`);
    if (Number.isNaN(start.getTime()) || start > new Date()) return;
    let diff = Math.max(0, Date.now() - start.getTime());
    const days = Math.floor(diff / 86400000); diff %= 86400000;
    const hours = Math.floor(diff / 3600000); diff %= 3600000;
    const minutes = Math.floor(diff / 60000); diff %= 60000;
    const seconds = Math.floor(diff / 1000);
    $("countDays").textContent = days.toLocaleString("id-ID");
    $("countHours").textContent = String(hours).padStart(2, "0");
    $("countMinutes").textContent = String(minutes).padStart(2, "0");
    $("countSeconds").textContent = String(seconds).padStart(2, "0");
    $("counterNote").textContent = `Dihitung sejak ${start.toLocaleDateString("id-ID", {day:"numeric", month:"long", year:"numeric"})} ♡`;
  }
  if (dateValue) {
    updateCounter();
    window.setInterval(updateCounter, 1000);
  }

  // Music player: use a supplied local MP3 or choose one in the browser.
  const audio = $("loveAudio");
  const playButton = $("playMusic");
  const vinyl = document.querySelector(".vinyl");
  const songInput = $("songFile");
  let chosenObjectUrl = null;
  if (cfg.musicPath) {
    audio.src = cfg.musicPath;
    $("musicStatus").textContent = "♡";
  }
  function formatTime(value) {
    if (!Number.isFinite(value)) return "0:00";
    const min = Math.floor(value / 60);
    const sec = Math.floor(value % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  }
  function togglePlay() {
    if (!audio.src) {
      songInput.click();
      showToast("Pilih file musik dari perangkatmu ♡");
      return;
    }
    if (audio.paused) {
      audio.play().then(() => {
        playButton.textContent = "Ⅱ";
        playButton.setAttribute("aria-label", "Jeda musik");
        vinyl.classList.add("playing");
      }).catch(() => showToast("Musik belum bisa diputar. Periksa file lagunya."));
    } else {
      audio.pause();
      playButton.textContent = "▶";
      playButton.setAttribute("aria-label", "Putar musik");
      vinyl.classList.remove("playing");
    }
  }
  playButton.addEventListener("click", togglePlay);
  $("chooseSong").addEventListener("click", () => songInput.click());
  songInput.addEventListener("change", () => {
    const file = songInput.files && songInput.files[0];
    if (!file) return;
    if (chosenObjectUrl) URL.revokeObjectURL(chosenObjectUrl);
    chosenObjectUrl = URL.createObjectURL(file);
    audio.src = chosenObjectUrl;
    $("musicStatus").textContent = file.name;
    audio.play().then(() => {
      playButton.textContent = "Ⅱ";
      vinyl.classList.add("playing");
    }).catch(() => showToast("File dipilih. Tekan tombol putar untuk mulai."));
  });
  audio.addEventListener("loadedmetadata", () => $("musicDuration").textContent = formatTime(audio.duration));
  audio.addEventListener("timeupdate", () => {
    $("musicCurrent").textContent = formatTime(audio.currentTime);
    const pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
    $("musicProgress").style.width = `${pct}%`;
  });
  audio.addEventListener("ended", () => {
    playButton.textContent = "▶";
    vinyl.classList.remove("playing");
  });
  $("muteMusic").addEventListener("click", () => {
    audio.muted = !audio.muted;
    $("muteMusic").textContent = audio.muted ? "×" : "♪";
    showToast(audio.muted ? "Musik disenyapkan" : "Suara musik aktif");
  });

  // Heart confetti for the surprise.
  function heartBurst() {
    const symbols = ["♥", "♡", "✦", "✧"];
    for (let i = 0; i < 26; i++) {
      const heart = document.createElement("span");
      heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      heart.style.position = "fixed";
      heart.style.left = `${35 + Math.random() * 30}%`;
      heart.style.top = `${35 + Math.random() * 25}%`;
      heart.style.zIndex = "100";
      heart.style.pointerEvents = "none";
      heart.style.color = ["#d76d87", "#ef9eaf", "#c55c76"][i % 3];
      heart.style.fontSize = `${14 + Math.random() * 22}px`;
      heart.style.transition = "transform 1.3s ease-out, opacity 1.3s ease-out";
      document.body.appendChild(heart);
      requestAnimationFrame(() => {
        heart.style.transform = `translate(${(Math.random() - .5) * 480}px, ${-100 - Math.random() * 330}px) rotate(${Math.random() * 240}deg)`;
        heart.style.opacity = "0";
      });
      window.setTimeout(() => heart.remove(), 1450);
    }
  }

  let toastTimer;
  function showToast(text) {
    const toast = $("toast");
    toast.textContent = text;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2600);
  }
})();
