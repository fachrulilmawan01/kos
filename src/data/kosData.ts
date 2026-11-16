export interface RoomType {
  id: string;
  name: string;
  bedCount: '1-bed' | '2-bed';
  tag: string;
  priceMonthly: number;
  priceHalfYearly?: number;
  priceYearly?: number;
  capacity: string;
  size: string;
  bedType: string;
  availableRooms: number;
  totalRooms: number;
  description: string;
  features: string[];
  mainImage: string;
  gallery: string[];
  includedUtilities: string[];
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  duration: string;
  roomType: string;
  rating: number;
  avatar: string;
  comment: string;
}

export interface Landmark {
  name: string;
  category: string;
  distance: string;
  duration: string;
  highlight?: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const KOS_INFO = {
  name: "KOS Buk Yet",
  altName: "Kos Putra Bu Yett",
  targetAudience: "Khusus Mahasiswa Pria",
  tagline: "Hunian Kost Khusus Mahasiswa Pria Dekat Universitas Adzkia Padang",
  subTagline: "Lingkungan kondusif, bersih, dan tenang untuk fokus kuliah. Berada di Kalumbuk, sangat dekat dengan kampus Universitas Adzkia dengan tarif sewa bersahabat mulai Rp 350.000/bulan.",
  primaryCampus: "Universitas Adzkia (±2-3 Menit)",
  address: "Kalumbuk, Kec. Kuranji, Kota Padang, Sumatera Barat 25147",
  whatsappNumber: "6281234567890",
  whatsappDisplay: "+62 812-3456-7890",
  phoneNumber: "0812-3456-7890",
  googleMapsUrl: "https://www.google.com/maps/place/Kos+Putra+Bu+Yett/@-0.9195924,100.3961469,21z/data=!4m6!3m5!1s0x2fd4b9005aa875a5:0x62008f2ad5bdb192!8m2!3d-0.9195924!4d100.3964446!16s%2Fg%2F11nvzykcns",
  googleMapsEmbed: "https://maps.google.com/maps?q=-0.9195924,100.3964446&hl=id&z=17&output=embed",
  minPrice: 350000,
  minPriceFormatted: "Rp 350.000",
  curfewInfo: "Akses Kunci Pagar Mandiri (Tertib & Tanggung Jawab)",
  visitingHours: "08.00 - 21.00 WIB",
  stats: [
    { label: "Ke Kampus Adzkia", value: "2-3 Menit", unit: "Sangat Dekat" },
    { label: "Harga Sewa", value: "350 Ribu", unit: "/bulan" },
    { label: "Pilihan Kamar", value: "1 & 2 Bed", unit: "Kapasitas" },
    { label: "Kategori", value: "Mahasiswa", unit: "Pria Saja" },
  ]
};

export const ROOM_TYPES: RoomType[] = [
  {
    id: "1-bed-standar",
    name: "Kamar Tipe 1 Bed (Single Standar)",
    bedCount: "1-bed",
    tag: "Favorit Mahasiswa",
    priceMonthly: 350000,
    priceHalfYearly: 2000000,
    priceYearly: 3900000,
    capacity: "1 Mahasiswa",
    size: "3 x 3 Meter",
    bedType: "1 Kasur Single",
    availableRooms: 3,
    totalRooms: 8,
    description: "Kamar privat yang tenang dan nyaman untuk belajar mandiri. Sirkulasi udara alami baik dengan biaya sewa paling ekonomis untuk mahasiswa.",
    features: [
      "1 Tempat Tidur Single + Kasur Empuk",
      "Meja Belajar Kayu + Kursi Ergonomis",
      "Lemari Pakaian Mandiri",
      "Ventilasi & Jendela Sirkulasi Udara Baik",
      "Stopkontak Mandiri untuk Laptop & HP",
      "Kamar Mandi Luar Bersih & Terawat",
      "Gratis Air Bersih & Iuran Sampah",
    ],
    mainImage: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80"
    ],
    includedUtilities: ["Air Bersih PDAM / Sumur Jernih Gratis", "Bebas Iuran Sampah Lingkungan", "Parkir Motor Berpagar Aman"]
  },
  {
    id: "1-bed-km-dalam",
    name: "Kamar Tipe 1 Bed (Kamar Mandi Dalam)",
    bedCount: "1-bed",
    tag: "Privasi Penuh",
    priceMonthly: 450000,
    priceHalfYearly: 2600000,
    priceYearly: 5000000,
    capacity: "1 Mahasiswa",
    size: "3 x 3.5 Meter",
    bedType: "1 Kasur Single",
    availableRooms: 2,
    totalRooms: 6,
    description: "Kamar 1 bed dengan fasilitas kamar mandi pribadi di dalam kamar. Memberikan privasi maksimal untuk kenyamanan belajar dan istirahat harian.",
    features: [
      "Kamar Mandi Dalam Pribadi",
      "1 Tempat Tidur Single + Bantal & Kasur",
      "Meja Belajar Khusus + Kursi",
      "Lemari Pakaian Kayu 2 Pintu",
      "Ventilasi Udara Segar & Pencahayaan Alami",
      "Stopkontak di Sisi Meja & Kasur",
      "Gratis Air Bersih Sepuasnya",
    ],
    mainImage: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80"
    ],
    includedUtilities: ["Air Bersih Gratis", "Keamanan & Sampah Termasuk", "Akses Parkir Motor"]
  },
  {
    id: "2-bed-standar",
    name: "Kamar Tipe 2 Bed (Twin Bed Berdua)",
    bedCount: "2-bed",
    tag: "Super Hemat Berdua",
    priceMonthly: 600000,
    priceHalfYearly: 3500000,
    priceYearly: 6800000,
    capacity: "2 Mahasiswa (Rp 300rb/orang)",
    size: "3.5 x 4 Meter",
    bedType: "2 Kasur Single Mandiri",
    availableRooms: 2,
    totalRooms: 6,
    description: "Kamar luas dengan 2 tempat tidur terpisah. Sangat direkomendasikan untuk 2 orang mahasiswa sekampus, patungan hanya Rp 300.000 per orang per bulan.",
    features: [
      "2 Tempat Tidur Single Mandiri (Kasur Terpisah)",
      "2 Meja Belajar + 2 Kursi Pribadi",
      "2 Lemari Pakaian Mandiri",
      "Ruangan Lega & Sirkulasi Udara Baik",
      "Stopkontak Listrik Masing-Masing Kasur",
      "Kamar Mandi Luar Terawat Bersih",
      "Dapur Bersama & Parkir Motor",
    ],
    mainImage: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80"
    ],
    includedUtilities: ["Air Bersih Gratis", "Iuran Sampah & Kebersihan", "Slot Parkir 2 Motor"]
  },
  {
    id: "2-bed-km-dalam",
    name: "Kamar Tipe 2 Bed (Kamar Mandi Dalam)",
    bedCount: "2-bed",
    tag: "Lega & KM Dalam",
    priceMonthly: 700000,
    priceHalfYearly: 4100000,
    priceYearly: 7900000,
    capacity: "2 Mahasiswa (Rp 350rb/orang)",
    size: "4 x 4 Meter",
    bedType: "2 Kasur Single Mandiri",
    availableRooms: 1,
    totalRooms: 4,
    description: "Kamar tipe terbesar dengan fasilitas lengkap untuk 2 orang mahasiswa dan kamar mandi pribadi di dalam. Sangat lega, nyaman, dan praktis.",
    features: [
      "Kamar Mandi Dalam Pribadi",
      "2 Tempat Tidur Single Mandiri",
      "2 Meja Belajar & Kursi Belajar",
      "2 Lemari Pakaian Mandiri",
      "Pencahayaan Alami & Jendela Besar",
      "Free Air Bersih & Kebersihan Lingkungan",
      "Area Parkir Motor Berpagar Luas",
    ],
    mainImage: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80"
    ],
    includedUtilities: ["Air Bersih Bebas Pakai", "Kebersihan & Keamanan", "Parkir 2 Motor"]
  }
];

export const GENERAL_FACILITIES: Facility[] = [
  {
    id: "parkir",
    title: "Parkir Motor Aman & Berpagar",
    description: "Halaman parkir motor tertutup gerbang di area dalam kos, aman dari jangkauan luar.",
    iconName: "ShieldCheck",
    badge: "Keamanan"
  },
  {
    id: "air-bersih",
    title: "Air Bersih Jernih & Gratis",
    description: "Pasokan air sumur/PDAM bersih, segar, dan tidak berbau untuk mandi serta mencuci tanpa tagihan tambahan.",
    iconName: "Droplets",
    badge: "Bebas Pakai"
  },
  {
    id: "dapur",
    title: "Dapur Bersama Mahasiswa",
    description: "Tersedia area memasak bersama untuk membuat mi, menghangatkan makanan, atau memasak air panas.",
    iconName: "UtensilsCrossed",
    badge: "Praktis"
  },
  {
    id: "jemuran",
    title: "Area Cuci & Jemuran Terbuka",
    description: "Ruang cuci pakaian dan jemuran luas dengan sinar matahari melimpah agar pakaian cepat kering.",
    iconName: "Sun",
    badge: "Lega"
  },
  {
    id: "lingkungan",
    title: "Suasana Tenang untuk Belajar",
    description: "Terletak di pemukiman Kalumbuk yang tenang, bebas bising knalpot jalan raya, sangat kondusif untuk tugas dan ujian.",
    iconName: "Sparkles",
    badge: "Kondusif"
  },
  {
    id: "akses",
    title: "Akses Pagar Mandiri Bertanggung Jawab",
    description: "Penghuni dibekali akses kunci pagar sendiri, memudahkan bagi yang memiliki jadwal praktikum atau diskusi kampus hingga malam.",
    iconName: "KeyRound",
    badge: "Fleksibel"
  }
];

export const LANDMARKS: Landmark[] = [
  { name: "Universitas Adzkia Padang (Kampus Utama)", category: "Kampus Utama", distance: "400 m", duration: "2 Menit", highlight: true },
  { name: "Jalur Utama By Pass Padang", category: "Akses Utama", distance: "600 m", duration: "2 Menit" },
  { name: "Universitas Baiturrahmah & RS Siti Rahmah", category: "Kampus / RS", distance: "2.8 km", duration: "6 Menit" },
  { name: "UIN Imam Bonjol Padang", category: "Kampus", distance: "4.5 km", duration: "10 Menit" },
  { name: "Universitas Negeri Padang (UNP)", category: "Kampus", distance: "6.2 km", duration: "15 Menit" },
  { name: "Minimarket & Warung Makan Mahasiswa", category: "Kuliner & Belanja", distance: "100 m", duration: "1 Menit" },
];

export const RULES = [
  {
    id: "1",
    title: "Khusus Mahasiswa Pria",
    description: "Hunian ini eksklusif bagi mahasiswa pria demi menjaga lingkungan belajar yang fokus, tertib, dan satu frekuensi.",
  },
  {
    id: "2",
    title: "Ketenangan Waktu Belajar & Istirahat",
    description: "Waktu tenang diberlakukan mulai pukul 22.00 WIB agar rekan kos yang sedang mengerjakan tugas akhir atau istirahat tidak terganggu.",
  },
  {
    id: "3",
    title: "Tamu & Etika Berkunjung",
    description: "Tamu wanita dilarang keras memasuki kamar kos. Tamu pria dapat berkunjung dengan tertib hingga pukul 21.00 WIB.",
  },
  {
    id: "4",
    title: "Kunci Gerbang Mandiri",
    description: "Penghuni wajib mengunci kembali gerbang utama saat keluar maupun masuk kos demi keamanan bersama.",
  },
  {
    id: "5",
    title: "Bebas Miras & Narkoba",
    description: "Dilarang keras membawa atau mengonsumsi minuman keras, narkoba, judi, dan perbuatan yang melanggar hukum.",
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Ahmad Fadhil",
    role: "Mahasiswa Universitas Adzkia",
    duration: "Tinggal 1 Tahun",
    roomType: "Tipe 1 Bed (Standar)",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
    comment: "Lokasinya sangat dekat ke kampus Adzkia, cuma 2 menit naik motor atau jalan santai juga nyampe. Suasananya tenang banget buat ngerjain tugas kuliah, biaya sewa 350rb sangat ramah kantong mahasiswa."
  },
  {
    id: "2",
    name: "Rizki Ramadhan",
    role: "Mahasiswa Teknik",
    duration: "Tinggal 8 Bulan",
    roomType: "Tipe 2 Bed (Berdua Teman)",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    comment: "Saya sewa kamar 2 bed bareng kawan satu jurusan. Patungan cuma 300 ribuan per bulan per orang. Airnya bersih melimpah, parkir motor aman di dalam pagar, dan Bu Yet orangnya ramah banget."
  }
];

export const FAQS: FAQ[] = [
  {
    id: "1",
    question: "Apakah kos ini benar-benar dekat dengan Universitas Adzkia?",
    answer: "Ya, KOS Buk Yet berlokasi di Kalumbuk, Kuranji dan hanya berjarak sekitar 400 meter (2-3 menit perjalanan) dari kampus Universitas Adzkia Padang."
  },
  {
    id: "2",
    question: "Siapa saja yang boleh tinggal di KOS Buk Yet?",
    answer: "Sesuai tata tertib, kos ini dikhususkan untuk Mahasiswa Pria demi menciptakan lingkungan belajar yang fokus, tertib, dan kondusif."
  },
  {
    id: "3",
    question: "Berapa tarif sewa kamar per bulannya?",
    answer: "Tarif sewa mulai dari Rp 350.000 per bulan untuk tipe 1 Bed (Single). Untuk tipe 2 Bed kapasitas berdua mulai dari Rp 600.000 per bulan (hanya Rp 300.000 per orang jika patungan berdua)."
  },
  {
    id: "4",
    question: "Apakah ada biaya tambahan untuk penggunaan air?",
    answer: "Tidak ada. Penggunaan air bersih sehari-hari dan iuran kebersihan sampah sudah gratis termasuk ke dalam biaya bulanan."
  },
  {
    id: "5",
    question: "Bagaimana cara melakukan survei lokasi kamar?",
    answer: "Anda dapat menghubungi Bu Yet langsung melalui tombol WhatsApp di web ini atau mengisi formulir survei online untuk menentukan waktu survei kamar."
  }
];
