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
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const KOS_INFO = {
  name: "KOS Buk Yet",
  altName: "Kos Putra Bu Yett",
  typeBadge: "Kos Putra",
  tagline: "Hunian Kost Mahasiswa & Pekerja yang Tenang, Bersih, dan Terjangkau",
  subTagline: "Pilihan hunian terbaik di Kalumbuk, Padang. Lingkungan asri, aman, kondusif untuk istirahat dan belajar dengan tarif sewa terjangkau mulai dari Rp 350.000/bulan.",
  address: "Kalumbuk, Kec. Kuranji, Kota Padang, Sumatera Barat 25147",
  whatsappNumber: "6281234567890",
  whatsappDisplay: "+62 812-3456-7890",
  phoneNumber: "0812-3456-7890",
  googleMapsUrl: "https://www.google.com/maps/place/Kos+Putra+Bu+Yett/@-0.9195924,100.3961469,21z/data=!4m6!3m5!1s0x2fd4b9005aa875a5:0x62008f2ad5bdb192!8m2!3d-0.9195924!4d100.3964446!16s%2Fg%2F11nvzykcns",
  googleMapsEmbed: "https://maps.google.com/maps?q=-0.9195924,100.3964446&hl=id&z=17&output=embed",
  minPrice: 350000,
  minPriceFormatted: "Rp 350.000",
  curfewInfo: "Akses Kunci Pagar Bebas Bertanggung Jawab",
  visitingHours: "08.00 - 21.00 WIB",
  stats: [
    { label: "Harga Sewa Mulai", value: "350 Ribu", unit: "/bulan" },
    { label: "Pilihan Kamar", value: "1 & 2 Bed", unit: "Pilihan" },
    { label: "Akses Kampus & Kota", value: "Strategis", unit: "Padang" },
    { label: "Lingkungan", value: "Tenang & Bersih", unit: "Aman" },
  ]
};

export const ROOM_TYPES: RoomType[] = [
  {
    id: "1-bed-standar",
    name: "Kamar Tipe 1 Bed (Standar)",
    bedCount: "1-bed",
    tag: "Paling Hemat",
    priceMonthly: 350000,
    priceHalfYearly: 2000000,
    priceYearly: 3900000,
    capacity: "1 Orang",
    size: "3 x 3 Meter",
    bedType: "1 Kasur Single",
    availableRooms: 3,
    totalRooms: 8,
    description: "Kamar privat untuk satu orang dengan suasana tenang dan sirkulasi udara baik. Pilihan paling hemat dan pas untuk mahasiswa atau pekerja mandiri.",
    features: [
      "1 Tempat Tidur Single + Kasur Empuk",
      "Lemari Pakaian Pribadi",
      "Meja Belajar / Kerja + Kursi",
      "Ventilasi & Jendela Sirkulasi Udara Segar",
      "Stopkontak Listrik Pribadi",
      "Akses Kamar Mandi Luar Bersih & Terawat",
      "Free Air Bersih & Iuran Sampah",
    ],
    mainImage: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80"
    ],
    includedUtilities: ["Air Bersih PDAM / Sumur Jernih Gratis", "Iuran Sampah & Kebersihan Lingkungan", "Parkir Motor Aman"]
  },
  {
    id: "1-bed-km-dalam",
    name: "Kamar Tipe 1 Bed (Kamar Mandi Dalam)",
    bedCount: "1-bed",
    tag: "Privasi Maksimal",
    priceMonthly: 450000,
    priceHalfYearly: 2600000,
    priceYearly: 5000000,
    capacity: "1 Orang",
    size: "3 x 3.5 Meter",
    bedType: "1 Kasur Single Nyaman",
    availableRooms: 2,
    totalRooms: 6,
    description: "Kamar 1 bed dengan kamar mandi pribadi di dalam ruangan. Menawarkan kenyamanan dan privasi lebih tinggi tanpa perlu antre kamar mandi luar.",
    features: [
      "Kamar Mandi Dalam Pribadi (Eksklusif)",
      "1 Tempat Tidur Single + Bantal & Sprei",
      "Lemari Pakaian Kayu 2 Pintu",
      "Meja Belajar Kayu + Kursi Ergonomis",
      "Jendela dengan Tirai & Pencahayaan Bagus",
      "Stopkontak Dekat Meja & Kasur",
      "Free Air Bersih & Kebersihan",
    ],
    mainImage: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80"
    ],
    includedUtilities: ["Air Bersih Gratis", "Iuran Keamanan & Sampah", "Akses Parkir Motor"]
  },
  {
    id: "2-bed-standar",
    name: "Kamar Tipe 2 Bed (Kapasitas 2 Orang)",
    bedCount: "2-bed",
    tag: "Hemat Berdua",
    priceMonthly: 600000,
    priceHalfYearly: 3500000,
    priceYearly: 6800000,
    capacity: "2 Orang (Rp 300rb/orang)",
    size: "3.5 x 4 Meter",
    bedType: "2 Kasur Single (Twin Bed)",
    availableRooms: 2,
    totalRooms: 6,
    description: "Kamar lega dengan 2 kasur terpisah. Solusi sangat hemat untuk berdua bersama teman satu kampus atau saudara, hanya Rp 300.000 per orang per bulan.",
    features: [
      "2 Tempat Tidur Single Mandiri (Twin Bed)",
      "2 Lemari Pakaian Mandiri",
      "2 Meja Belajar / Kerja Pribadi",
      "Kamar Luas, Lega & Sirkulasi Segar",
      "Stopkontak Masing-Masing Tempat Tidur",
      "Akses Kamar Mandi Bersih Luar",
      "Dapur Bersama & Parkir Motor",
    ],
    mainImage: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80"
    ],
    includedUtilities: ["Air Bersih Gratis", "Kebersihan Luar", "Parkir 2 Motor"]
  },
  {
    id: "2-bed-km-dalam",
    name: "Kamar Tipe 2 Bed (Kamar Mandi Dalam)",
    bedCount: "2-bed",
    tag: "Kamar Mandi Dalam",
    priceMonthly: 700000,
    priceHalfYearly: 4100000,
    priceYearly: 7900000,
    capacity: "2 Orang (Rp 350rb/orang)",
    size: "4 x 4 Meter",
    bedType: "2 Kasur Single (Twin Bed)",
    availableRooms: 1,
    totalRooms: 4,
    description: "Kamar paling luas dengan fasilitas 2 kasur mandiri dan kamar mandi pribadi di dalam. Sangat nyaman untuk 2 orang penghuni dengan privasi penuh.",
    features: [
      "Kamar Mandi Dalam Pribadi",
      "2 Tempat Tidur Single Lengkap",
      "2 Meja Belajar + Kursi",
      "2 Lemari Pakaian Mandiri",
      "Ruangan Lapang & Pencahayaan Maksimal",
      "Free Air Bersih & Kebersihan Rutin",
      "Area Parkir Motor Berpagar",
    ],
    mainImage: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80"
    ],
    includedUtilities: ["Air Bersih Bebas Pakai", "Sampah & Keamanan", "Parkir 2 Motor"]
  }
];

export const GENERAL_FACILITIES: Facility[] = [
  {
    id: "parkir",
    title: "Parkir Motor Aman Berpagar",
    description: "Area parkir motor di halaman dalam kos dengan gerbang tertutup, aman dan terlindung.",
    iconName: "ShieldCheck",
    badge: "Aman"
  },
  {
    id: "air-bersih",
    title: "Air Bersih Jernih Melimpah",
    description: "Kebutuhan air sehari-hari lancar dan jernih, bebas digunakan tanpa biaya tagihan tambahan.",
    iconName: "Droplets",
    badge: "Gratis"
  },
  {
    id: "dapur",
    title: "Dapur Bersama Siap Pakai",
    description: "Disediakan area dapur bersama untuk memasak mi instan, sarapan, atau menghangatkan makanan.",
    iconName: "UtensilsCrossed",
    badge: "Praktis"
  },
  {
    id: "jemuran",
    title: "Area Cuci & Jemuran Luas",
    description: "Tersedia ruang cuci dan area jemur pakaian yang mendapatkan sinar matahari penuh.",
    iconName: "Sun",
    badge: "Lega"
  },
  {
    id: "lingkungan",
    title: "Lingkungan Asri & Tenang",
    description: "Terletak di kawasan pemukiman Kalumbuk yang tidak bising kendaraan besar, kondusif untuk belajar dan istirahat.",
    iconName: "Sparkles",
    badge: "Kondusif"
  },
  {
    id: "akses",
    title: "Akses Keluar Masuk Mandiri",
    description: "Penghuni diberikan kebebasan akses pagar secara bertanggung jawab, fleksibel bagi yang kuliah lembur atau kerja malam.",
    iconName: "KeyRound",
    badge: "Fleksibel"
  }
];

export const LANDMARKS: Landmark[] = [
  { name: "Jalur Utama By Pass Padang", category: "Akses Utama", distance: "600 m", duration: "2 Menit" },
  { name: "Universitas Baiturrahmah & RS Siti Rahmah", category: "Kampus / RS", distance: "2.8 km", duration: "6 Menit" },
  { name: "UIN Imam Bonjol Padang", category: "Kampus", distance: "4.5 km", duration: "10 Menit" },
  { name: "Universitas Negeri Padang (UNP)", category: "Kampus", distance: "6.2 km", duration: "15 Menit" },
  { name: "Universitas Andalas (UNAND)", category: "Kampus", distance: "8.5 km", duration: "18 Menit" },
  { name: "Minimarket, Warung & Kuliner Kalumbuk", category: "Kebutuhan", distance: "100 m", duration: "1 Menit" },
];

export const RULES = [
  {
    id: "1",
    title: "Khusus Penghuni Putra",
    description: "Kos ini diperuntukkan khusus untuk pria (mahasiswa & pekerja) sehingga privasi dan kenyamanan lebih terjaga.",
  },
  {
    id: "2",
    title: "Menjaga Ketenangan",
    description: "Waktu tenang dimulai pukul 22.00 WIB demi kenyamanan istirahat dan jam belajar sesama rekan kos.",
  },
  {
    id: "3",
    title: "Kebersihan Bersama",
    description: "Wajib menjaga kebersihan kamar pribadi dan fasilitas bersama (dapur, tempat cuci, dan kamar mandi luar).",
  },
  {
    id: "4",
    title: "Kunci Gerbang Mandiri",
    description: "Wajib menutup dan mengunci kembali gerbang utama saat keluar atau masuk kos.",
  },
  {
    id: "5",
    title: "Bebas Miras & Narkoba",
    description: "Dilarang keras membawa atau mengonsumsi minuman keras, narkoba, serta tindakan yang melanggar norma hukum.",
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Fauzan Akbar",
    role: "Mahasiswa Padang",
    duration: "Tinggal 1 Tahun",
    roomType: "Tipe 1 Bed",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
    comment: "Harganya sangat terjangkau untuk kantong mahasiswa (mulai 350rb). Ibu kos ramah dan tempatnya tenang buat fokus belajar tugas akhir."
  },
  {
    id: "2",
    name: "Rian Hidayat",
    role: "Karyawan Swasta",
    duration: "Tinggal 8 Bulan",
    roomType: "Tipe 2 Bed (Berdua Teman)",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    comment: "Sewa kamar 2 bed bareng kawan kantor jadi hemat banget, patungan cuma 300 ribuan per orang. Air bersih lancar dan parkir motor aman."
  }
];

export const FAQS: FAQ[] = [
  {
    id: "1",
    question: "Berapa harga sewa kamar di KOS Buk Yet?",
    answer: "Harga sewa kamar mulai dari Rp 350.000 per bulan untuk tipe 1 Bed (Single). Untuk tipe 2 Bed berdua mulai dari Rp 600.000 per bulan (hanya Rp 300.000 per orang jika patungan berdua)."
  },
  {
    id: "2",
    question: "Apakah air dan sampah sudah termasuk di dalam biaya sewa?",
    answer: "Ya, penggunaan air bersih jernih dan iuran sampah lingkungan sudah gratis dan termasuk ke dalam biaya bulanan."
  },
  {
    id: "3",
    question: "Apakah kos ini khusus putra?",
    answer: "Benar, KOS Buk Yet (Kos Putra Bu Yett) diperuntukkan khusus bagi pria (mahasiswa dan karyawan pekerja)."
  },
  {
    id: "4",
    question: "Bagaimana cara survei kamar atau bertanya ketersediaan?",
    answer: "Anda dapat langsung menghubungi Buk Yet melalui chat WhatsApp dengan mengklik tombol di website ini, atau mengisi form survei untuk menentukan jadwal kunjungan."
  }
];
