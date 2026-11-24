# A Little Universe for You ♡

Website romantis statis yang siap di-hosting di Vercel. Dibuat dengan HTML, CSS, dan JavaScript biasa, tanpa database dan tanpa proses build.

## 1. Personalisasi nama dan surat

Buka `config.js`, lalu ubah bagian ini:

```js
window.LOVE_CONFIG = {
  girlfriendName: "Nama/Panggilan Pacar",
  senderName: "Namamu",
  relationshipDate: "2025-02-14",
  musicPath: "assets/lagu-komang.m4a",
  // ...
};
```

- `girlfriendName`: nama atau panggilan pacar yang tampil di halaman.
- `senderName`: namamu.
- `relationshipDate`: tanggal jadian format `YYYY-MM-DD`. Jika belum ingin menampilkan penghitung, biarkan `""`.
- `musicPath`: lokasi file musik MP3 di dalam folder proyek.

Edit `letterMessage` di file yang sama untuk mengganti isi surat cinta.

## 2. Musik yang sudah disertakan

File audio yang kamu unggah sudah dimasukkan ke folder `assets` dengan nama `lagu-komang.m4a`. File ini otomatis dipakai oleh pemutar musik melalui pengaturan `musicPath` di `config.js`. Tombol play/pause tetap digunakan karena browser tidak mengizinkan pemutaran otomatis sebelum pengunjung berinteraksi.

Jika ingin mengganti musik, masukkan file audio lain yang kamu miliki atau berhak gunakan ke folder `assets`, lalu ubah `musicPath` di `config.js`. Tombol `+` pada pemutar musik juga dapat memilih audio dari perangkat, tetapi pilihan itu hanya berlaku di browser/perangkat tersebut.

## 3. Mengganti foto

Foto yang dikirim sudah disertakan di folder `assets`:
- `foto-utama.webp`
- `kenangan-1.webp`
- `kenangan-2.webp`
- `kenangan-3.webp`
- `kenangan-4.webp`

Untuk mengganti foto, ganti file dengan nama yang sama atau ubah lokasi gambar di `index.html`.

## 4. Hosting di Vercel

### Cara paling mudah: melalui GitHub
1. Ekstrak ZIP proyek ini.
2. Buat repository baru di GitHub.
3. Upload seluruh isi folder `little-universe-vercel` ke repository (pastikan `index.html` berada di root repository).
4. Buka https://vercel.com dan login.
5. Pilih **Add New → Project**, lalu import repository GitHub tadi.
6. Framework Preset pilih **Other**.
7. Build Command kosongkan.
8. Output Directory isi `.` (titik) atau biarkan default jika Vercel mendeteksi file statis.
9. Klik **Deploy**.

### Alternatif: Vercel CLI
Di terminal, setelah masuk ke folder proyek:

```bash
npm install -g vercel
vercel
```

Ikuti pertanyaan di terminal. Untuk menerbitkan versi production:

```bash
vercel --prod
```

File `vercel.json` sudah disertakan untuk konfigurasi hosting statis.

## 5. Catatan
- Website tidak membutuhkan database.
- File musik M4A sudah disertakan dan diatur sebagai lagu bawaan. Pastikan kamu memiliki hak/izin yang diperlukan sebelum memublikasikan file musik ke website publik.
- Tanggal jadian belum diisi karena tanggalnya belum diberikan.
- Periksa nama, surat, tanggal, dan musik sebelum membagikan tautan website.
