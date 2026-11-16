export interface RoomType {
  id: string;
  name: string;
  bedCount: '1-bed' | '2-bed';
  tag: string;
  priceMonthly: number;
  pricePerPerson?: number;
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
  subTagline: "Lingkungan kondusif, bersih, dan tenang untuk fokus kuliah. Berada di Kalumbuk, sangat dekat dengan kampus Universitas Adzkia dengan pilihan 1 kamar 1 orang atau 1 kamar 2 orang.",
  primaryCampus: "Universitas Adzkia (±2-3 Menit)",
  address: "Kalumbuk, Kec. Kuranji, Kota Padang, Sumatera Barat 25147",
  whatsappNumber: "6281277725709",
  whatsappDisplay: "+62 812-7772-5709",
  phoneNumber: "0812-7772-5709",
  googleMapsUrl: "https://www.google.com/maps/place/Kos+Putra+Bu+Yett/@-0.9195924,100.3961469,21z/data=!4m6!3m5!1s0x2fd4b9005aa875a5:0x62008f2ad5bdb192!8m2!3d-0.9195924!4d100.3964446!16s%2Fg%2F11nvzykcns",
  googleMapsEmbed: "https://maps.google.com/maps?q=-0.9195924,100.3964446&hl=id&z=17&output=embed",
  minPrice: 350000,
  minPriceFormatted: "Rp 350.000",
  visitingHours: "08.00 - 21.00 WIB",
  stats: [
    { label: "Ke Kampus Adzkia", value: "2-3 Menit", unit: "Sangat Dekat" },
    { label: "1 Kamar 2 Orang", value: "350 Ribu", unit: "/orang/bln" },
    { label: "1 Kamar 1 Orang", value: "700 Ribu", unit: "/bulan" },
    { label: "Highlight Spesial", value: "Free All-In", unit: "Air, Listrik, WiFi" },
  ]
};

export const ROOM_TYPES: RoomType[] = [
  {
    id: "1-kamar-1-orang",
    name: "1 Kamar 1 Orang (Single)",
    bedCount: "1-bed",
    tag: "Privat 1 Orang",
    priceMonthly: 700000,
    priceHalfYearly: 4100000,
    priceYearly: 8000000,
    capacity: "1 Mahasiswa",
    size: "3.5 x 3.5 Meter",
    bedType: "1 Kasur Single Nyaman",
    availableRooms: 3,
    totalRooms: 6,
    description: "Kamar privat penuh untuk 1 orang mahasiswa. Memberikan keleluasaan, privasi tinggi, dan ketenangan optimal untuk fokus belajar, mengerjakan tugas, serta istirahat tanpa gangguan.",
    features: [
      "⚡ Free Air, Listrik & WiFi (All-in Termasuk)",
      "1 Tempat Tidur Single + Kasur Empuk",
      "Meja Belajar Kayu + Kursi Nyaman",
      "Lemari Pakaian Pribadi",
      "Ventilasi & Jendela Sirkulasi Udara Segar",
      "Stopkontak Mandiri untuk Laptop & HP",
      "Kamar Mandi Bersih & Terawat",
    ],
    mainImage: "/images/kos-bu-yett-kamar-maps.jpg",
    gallery: [
      "/images/kos-bu-yett-kamar-maps.jpg",
      "/images/kos-bu-yett-depan.jpg",
      "/images/kos-bu-yett-kamar-2.jpg"
    ],
    includedUtilities: ["Free Air Bersih Melimpah", "Free Listrik", "Free WiFi Cepat", "Bebas Iuran Sampah", "Parkir Motor Berpagar"]
  },
  {
    id: "1-kamar-2-orang",
    name: "1 Kamar 2 Orang (Berdua)",
    bedCount: "2-bed",
    tag: "Hemat Berdua",
    priceMonthly: 700000,
    pricePerPerson: 350000,
    priceHalfYearly: 4100000,
    priceYearly: 8000000,
    capacity: "2 Mahasiswa (Rp 350.000 / org / bln)",
    size: "3.5 x 4 Meter",
    bedType: "2 Kasur Single Mandiri",
    availableRooms: 2,
    totalRooms: 6,
    description: "Kamar lega untuk 2 orang mahasiswa (bisa bersama teman satu kampus / seangkatan). Tarif sangat ekonomis, hanya Rp 350.000 per orang per bulan (total Rp 700.000 / kamar).",
    features: [
      "⚡ Free Air, Listrik & WiFi (All-in Termasuk)",
      "2 Tempat Tidur / Kasur Mandiri (Twin Bed)",
      "2 Meja Belajar + 2 Kursi Pribadi",
      "2 Lemari Pakaian Mandiri",
      "Kamar Luas, Lega & Sirkulasi Segar",
      "Stopkontak Mandiri di Sisi Setiap Kasur",
      "Kamar Mandi Bersih & Terawat",
    ],
    mainImage: "/images/kos-bu-yett-kamar-maps.jpg",
    gallery: [
      "/images/kos-bu-yett-kamar-maps.jpg",
      "/images/kos-bu-yett-depan.jpg",
      "/images/kos-bu-yett-kamar-2.jpg"
    ],
    includedUtilities: ["Free Air Bersih Melimpah", "Free Listrik", "Free WiFi Cepat", "Bebas Iuran Sampah", "Parkir Motor Berpagar"]
  }
];

export const GENERAL_FACILITIES: Facility[] = [
  {
    id: "free-air",
    title: "Free Air Bersih Melimpah",
    description: "Pasokan air sumur/PDAM bersih, segar, dan tidak berbau untuk mandi serta mencuci tanpa tagihan tambahan.",
    iconName: "Droplets",
    badge: "FREE"
  },
  {
    id: "free-listrik",
    title: "Free Listrik",
    description: "Bebas tagihan listrik bulanan untuk kebutuhan lampu, charger gadget, dan laptop kuliah.",
    iconName: "Zap",
    badge: "FREE"
  },
  {
    id: "free-wifi",
    title: "Free WiFi Internet Cepat",
    description: "Akses internet WiFi lancar untuk mendukung tugas perkuliahan, streaming materi, dan komunikasi.",
    iconName: "Wifi",
    badge: "FREE"
  },
  {
    id: "parkir",
    title: "Parkir Motor Aman & Berpagar",
    description: "Halaman parkir motor tertutup gerbang di area dalam kos, aman dan terlindung.",
    iconName: "ShieldCheck",
    badge: "Keamanan"
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
    id: "kebersihan",
    title: "Kebersihan Area Bersama Terawat",
    description: "Area luar, lorong kamar, tempat cuci, dan kamar mandi dibersihkan secara rutin demi kenyamanan seluruh penghuni.",
    iconName: "Sparkles",
    badge: "Bersih"
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
    description: "Tamu wanita dilarang keras memasuki kamar kos. Tamu pria dapat berkunjung dengan tertib di ruang bersama hingga pukul 21.00 WIB.",
  },
  {
    id: "4",
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
    roomType: "1 Kamar 1 Orang (Single)",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
    comment: "Lokasinya sangat dekat ke kampus Adzkia, cuma 2 menit naik motor atau jalan santai juga nyampe. Kamar privat 1 orang tenang banget buat ngerjain tugas akhir, Bu Yet juga ramah."
  },
  {
    id: "2",
    name: "Rizki Ramadhan",
    role: "Mahasiswa Teknik",
    duration: "Tinggal 8 Bulan",
    roomType: "1 Kamar 2 Orang (Berdua)",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    comment: "Saya sewa 1 kamar berdua bareng kawan satu jurusan, patungan cuma 350 ribu per orang per bulan! Kamarnya lega, meja belajarnya masing-masing, air bersih lancar dan parkir motor aman."
  }
];

export const FAQS: FAQ[] = [
  {
    id: "1",
    question: "Bagaimana sistem dan tarif sewa kamar di KOS Buk Yet?",
    answer: "Tersedia 2 pilihan: (a) 1 Kamar 1 Orang seharga Rp 700.000 / bulan (privat 1 orang), dan (b) 1 Kamar 2 Orang seharga Rp 350.000 / bulan per orang (patungan berdua, total Rp 700.000 / kamar)."
  },
  {
    id: "2",
    question: "Apakah kos ini benar-benar dekat dengan Universitas Adzkia?",
    answer: "Ya, KOS Buk Yet berlokasi di Kalumbuk, Kuranji dan hanya berjarak sekitar 400 meter (±2-3 menit perjalanan) dari kampus Universitas Adzkia Padang."
  },
  {
    id: "3",
    question: "Apakah kos ini khusus mahasiswa pria?",
    answer: "Benar, kos ini dikhususkan bagi Mahasiswa Pria demi menciptakan lingkungan belajar yang fokus, tenang, dan kondusif."
  },
  {
    id: "4",
    question: "Apakah air, listrik, dan WiFi sudah termasuk dalam biaya sewa?",
    answer: "Ya! KOS Buk Yet memberikan fasilitas Free Air Bersih, Free Listrik, dan Free WiFi Internet yang sudah all-in termasuk dalam tarif sewa bulanan tanpa ada tagihan tambahan."
  },
  {
    id: "5",
    question: "Bagaimana cara melakukan survei kamar?",
    answer: "Anda dapat menghubungi Bu Yet langsung melalui tombol WhatsApp (+62 812-7772-5709) di web ini atau mengisi formulir survei online untuk membuat janji kunjungan."
  }
];
