# KOS Buk Yet - Web Profile & Booking

Aplikasi web profil modern, responsif, dan interaktif untuk **KOS Buk Yet** (Lowokwaru, Malang). Dirancang khusus untuk memikat calon penghuni kos (mahasiswa & pekerja profesional) dengan informasi lengkap, transparan, dan terhubung langsung ke WhatsApp pengelola kos.

---

## 🌟 Fitur Utama

1. **Hero & Highlight Penawaran**
   - Tagline menarik & jaminan hunian nyaman, aman, dan bersih.
   - Badge ketersediaan kamar secara live.
   - Tombol Call-to-Action langsung: Jelajah Kamar & Jadwalkan Survei.

2. **Katalog Tipe Kamar & Galeri Foto**
   - Filter kamar: *Semua*, *Tipe AC*, *Tipe Non-AC*, dan *Tipe VIP / Suite*.
   - Modal detail interaktif untuk melihat galeri foto resolusi tinggi, ukuran kamar, spesifikasi tempat tidur, daya listrik, dan daftar fasilitas.
   - Tombol booking langsung ke WhatsApp dengan template pesan otomatis.

3. **Fasilitas Bersama Lengkap**
   - WiFi Fiber Optic 150 Mbps, Dapur bersama siap pakai (kompor & gas gratis), Dispenser air minum galon higienis gratis, CCTV 24 jam & One Gate System, Parkir motor/mobil luas berkanopi, dan Mesin cuci bersama.

4. **Kalkulator Biaya Sewa Interaktif (Cost Calculator)**
   - Simulasi biaya sewa berdasarkan durasi tinggal (1 bulan, 3 bulan, 6 bulan, hingga tahunan dengan diskon s.d. 9%).
   - Pilihan layanan opsional (slot parkir mobil, kulkas mini, rice cooker, paket laundry).
   - Rincian biaya transparan beserta jaminan uang deposit kunci refundable.
   - Tombol kirim hasil simulasi langsung ke WhatsApp Buk Yet.

5. **Akses Lokasi & Peta Strategis**
   - Jarak tempuh dan estimasi menit ke kampus terdekat (Universitas Brawijaya, Univ. Negeri Malang, Polinema), minimarket, dan kuliner.
   - Tombol salin alamat lengkap satu klik & tautan Google Maps.

6. **Tata Tertib & Norma Hunian**
   - Panduan aturan jam malam yang jelas, etika bertamu, ketenangan istirahat malam, dan jaminan keamanan bagi orang tua penghuni.

7. **Testimoni & Pengalaman Penghuni**
   - Ulasan nyata dari mahasiswa dan pekerja perantau mengenai keramahan Buk Yet dan kenyamanan lingkungan kos.

8. **Formulir Jadwal Survei Online & Floating WhatsApp**
   - Form survei dengan pilihan tanggal dan jam kunjungan.
   - Tombol melayang (floating widget) WhatsApp dengan pertanyaan cepat instan.

---

## 🛠️ Teknologi yang Digunakan

- **React 19**
- **TypeScript**
- **Vite 6**
- **Tailwind CSS**
- **Lucide React** (Modern Icons)

---

## 🚀 Panduan Menjalankan Aplikasi

### 1. Masuk ke direktori dan pasang dependensi (jika belum):
```bash
npm install
```

### 2. Jalankan development server:
```bash
npm run dev
```
Akses web melalui browser di: `http://localhost:5173`

### 3. Build untuk produksi:
```bash
npm run build
```
Hasil build akan tersimpan di folder `dist/` dan siap di-deploy ke Vercel, Netlify, atau web hosting pilihan Anda.

---

## ⚙️ Kustomisasi Data & Kontak

Semua data (nomor WhatsApp, alamat, harga kamar, foto, fasilitas, dan FAQ) dapat diubah dengan mudah di file:
👉 `src/data/kosData.ts`
