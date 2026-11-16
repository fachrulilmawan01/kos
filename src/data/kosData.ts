export interface RoomType {
  id: string;
  name: string;
  category: 'ac' | 'non-ac' | 'vip';
  tag: string;
  tagColor: string;
  priceMonthly: number;
  priceQuarterly?: number;
  priceYearly?: number;
  discountYearlyPercent: number;
  size: string;
  bedType: string;
  availableRooms: number;
  totalRooms: number;
  description: string;
  features: string[];
  mainImage: string;
  gallery: string[];
  includedUtilities: string[];
  electricityType: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  image?: string;
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

export interface Rule {
  id: string;
  category: string;
  title: string;
  description: string;
  icon: string;
}

export interface Landmark {
  name: string;
  category: string;
  distance: string;
  duration: string;
  travelMode: 'motor' | 'jalan' | 'mobil';
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'pembayaran' | 'aturan' | 'fasilitas' | 'survei';
}

export const KOS_INFO = {
  name: "KOS Buk Yet",
  tagline: "Hunian Kost Nyaman, Bersih, Strategis & Kekeluargaan",
  subTagline: "Tempat tinggal ideal bagi mahasiswa & pekerja profesional dengan fasilitas lengkap, privasi terjaga, dan pengawasan aman 24 jam di bawah naungan keramahan Buk Yet.",
  address: "Jl. Kemuning Asri No. 42, RT 03 / RW 05, Kel. Sukamaju, Kec. Lowokwaru, Kota Malang, Jawa Timur 65141",
  whatsappNumber: "6281234567890",
  whatsappDisplay: "+62 812-3456-7890",
  phoneNumber: "0812-3456-7890",
  email: "kosbukyet@gmail.com",
  instagram: "@kos.bukyet",
  visitingHours: "07.00 - 21.30 WIB",
  curfewInfo: "Bebas Jam Malam (Pintu Gerbang Smart Lock & Kunci Masing-Masing)",
  genderType: "Campur Terpisah (Blok Putra & Blok Putri Mandiri) / Eksekutif",
  googleMapsUrl: "https://maps.google.com/?q=-7.945823,112.617498",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15805.807886478988!2d112.6100000!3d-7.9450000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTYnNDIuMCJTIDExMsKwMzYnNTQuMCJF!5e0!3m2!1sid!2sid!4v1680000000000!5m2!1sid!2sid",
  stats: [
    { label: "Total Kamar Nyaman", value: "24", unit: "Unit" },
    { label: "Kecepatan WiFi", value: "150", unit: "Mbps" },
    { label: "Rating Kepuasan", value: "4.9", unit: "dari 5" },
    { label: "Penghuni Betah", value: "98%", unit: "Perpanjang" },
  ]
};

export const ROOM_TYPES: RoomType[] = [
  {
    id: "standar-non-ac",
    name: "Kamar Tipe Standar (Sejuk & Hemat)",
    category: "non-ac",
    tag: "Favorit Mahasiswa",
    tagColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    priceMonthly: 850000,
    priceQuarterly: 2450000,
    priceYearly: 9500000,
    discountYearlyPercent: 7,
    size: "3 x 3.5 Meter",
    bedType: "Single Springbed (120x200 cm)",
    availableRooms: 3,
    totalRooms: 8,
    description: "Kamar bernuansa tenang dan sejuk dengan ventilasi udara alami serta exhaust fan. Pilihan tepat bagi Anda yang mengutamakan kenyamanan esensial dengan budget ramah kantong.",
    features: [
      "Kamar Mandi Dalam (Kloset Duduk & Shower)",
      "Exhaust Fan Sirkulasi Sejuk",
      "Springbed Berkualitas + Bantal Guling",
      "Meja Belajar / Kerja Kayu Jati + Kursi",
      "Lemari Pakaian 2 Pintu dengan Cermin",
      "Stopkontak dekat kasur & meja",
      "Jendela dengan tirai & pencahayaan bagus",
      "Tempat sampah & rak sepatu pribadi",
    ],
    mainImage: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80"
    ],
    includedUtilities: ["Air Bersih PDAM Gratis", "Free WiFi 150 Mbps", "Sampah & Kebersihan Luar"],
    electricityType: "Listrik Token Mandiri (900 VA per kamar)"
  },
  {
    id: "superior-ac",
    name: "Kamar Tipe Superior AC (Paling Populer)",
    category: "ac",
    tag: "Best Seller",
    tagColor: "bg-blue-100 text-blue-800 border-blue-300",
    priceMonthly: 1450000,
    priceQuarterly: 4200000,
    priceYearly: 16000000,
    discountYearlyPercent: 8,
    size: "3.5 x 4 Meter",
    bedType: "Queen Springbed (140x200 cm)",
    availableRooms: 2,
    totalRooms: 10,
    description: "Kamar sejuk dengan pendingin ruangan (AC 0.5 PK hemat daya) dan interior modern minimalis. Sangat nyaman untuk istirahat optimal dan produktif seharian.",
    features: [
      "AC 0.5 PK Hemat Daya (Rutin Diservis)",
      "Kamar Mandi Dalam Modern (Shower & Kloset Duduk)",
      "Springbed Queen Size Tebal & Empuk",
      "Meja Belajar Ergonomis + Kursi Kerja Nyaman",
      "Lemari Pakaian 3 Pintu + Cermin Full Body",
      "Smart TV 32 Inch (YouTube & Netflix ready)",
      "Free WiFi Router Access Point per Lorong",
      "Sprei Baru & Bersih saat Check-in",
    ],
    mainImage: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80"
    ],
    includedUtilities: ["Air PDAM & Sanitasi Gratis", "WiFi 150 Mbps Unlimited", "Iuran Keamanan & Lingkungan"],
    electricityType: "Listrik Token Mandiri (1300 VA per kamar)"
  },
  {
    id: "deluxe-vip",
    name: "Kamar Tipe Deluxe VIP (Water Heater & Balkon)",
    category: "vip",
    tag: "Eksklusif & Mewah",
    tagColor: "bg-amber-100 text-amber-900 border-amber-300",
    priceMonthly: 1950000,
    priceQuarterly: 5600000,
    priceYearly: 21500000,
    discountYearlyPercent: 8.5,
    size: "4 x 4.5 Meter",
    bedType: "King Springbed (160x200 cm)",
    availableRooms: 1,
    totalRooms: 4,
    description: "Kamar tipe suite eksekutif dengan balkon pribadi yang menghadap taman asri. Dilengkapi pemanas air (water heater), smart TV, kulkas mini, dan ruang kerja privat super lega.",
    features: [
      "Balkon Pribadi dengan Pemandangan Asri & Sirkulasi Segar",
      "Kamar Mandi Dalam Luas + Water Heater (Air Hangat)",
      "AC 1 PK Daikin Inverter Super Senyap",
      "Kulkas Mini Pribadi (One Door Fridge)",
      "Smart TV 43 Inch 4K UHD",
      "Meja Kerja Besar + Kursi Ergonomis Mesh",
      "Lemari Pakaian Wardrobe Luas + Brankas Kecil",
      "Free Pembersihan Kamar 2x Sebulan (On Request)",
    ],
    mainImage: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80"
    ],
    includedUtilities: ["Air PDAM & Sanitasi Gratis", "WiFi Kecepatan Prioritas 150 Mbps", "Parkir Mobil Gratis 1 Slot", "Layanan Buang Sampah Harian"],
    electricityType: "Listrik Token Mandiri (1300 VA per kamar)"
  },
  {
    id: "suite-dua-orang",
    name: "Kamar Tipe Twin Bed (Bisa Berdua / Pasutri Sah)",
    category: "vip",
    tag: "Kapasitas 2 Orang",
    tagColor: "bg-purple-100 text-purple-900 border-purple-300",
    priceMonthly: 2300000,
    priceQuarterly: 6600000,
    priceYearly: 25000000,
    discountYearlyPercent: 9,
    size: "4.5 x 5 Meter",
    bedType: "2 Single Beds ATAU 1 King Bed",
    availableRooms: 1,
    totalRooms: 2,
    description: "Kamar ekstra lega untuk kakak beradik, teman sekampus, atau pasangan suami istri resmi (menunjukkan buku nikah). Sangat hemat jika dibagi dua orang dengan fasilitas lengkap.",
    features: [
      "Dapat ditempati 2 orang (Legal & Nyaman)",
      "AC 1 PK + Kamar Mandi Dalam Water Heater",
      "2 Meja Kerja / Belajar & 2 Kursi Mandiri",
      "2 Lemari Pakaian Mandiri",
      "Kulkas Mini & Rak Penyimpanan Luas",
      "Jendela Besar dengan Sirkulasi Cahaya Prima",
      "Koneksi Internet Kabel LAN & WiFi Dedicated",
    ],
    mainImage: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80"
    ],
    includedUtilities: ["Air PDAM Gratis", "WiFi Unlimited", "Iuran Keamanan & Sampah"],
    electricityType: "Listrik Token Mandiri (1300 VA)"
  }
];

export const GENERAL_FACILITIES: Facility[] = [
  {
    id: "wifi",
    title: "High-Speed WiFi 150 Mbps",
    description: "Koneksi internet fiber optic dengan access point terdistribusi di setiap lorong, stabil untuk skripsi, zoom meeting, dan gaming tanpa buffer.",
    iconName: "Wifi",
    badge: "Anti Lemot"
  },
  {
    id: "dapur",
    title: "Dapur Bersama Lengkap",
    description: "Dilengkapi kompor gas modern, kulkas dua pintu, microwave, blender, peralatan masak, dan wastafel cuci piring yang selalu bersih.",
    iconName: "UtensilsCrossed",
    badge: "Gas Disediakan"
  },
  {
    id: "air-minum",
    title: "Dispenser Air Minum Gratis",
    description: "Tersedia dispenser air mineral RO galon higienis (panas, dingin, normal) di setiap lantai secara cuma-cuma untuk seluruh penghuni.",
    iconName: "Droplets",
    badge: "Gratis Tanpa Batas"
  },
  {
    id: "cctv-keamanan",
    title: "CCTV 24 Jam & One Gate System",
    description: "Keamanan terjamin dengan pantauan kamera CCTV aktif 24 jam di semua sudut luar & lorong, serta gerbang smart lock akses kartu/PIN.",
    iconName: "ShieldCheck",
    badge: "Aman & Terjaga"
  },
  {
    id: "parkir",
    title: "Parkir Motor & Mobil Luas Beratap",
    description: "Area parkir indoor berkanopi luas, aman dari terik matahari dan hujan, muat puluhan motor serta beberapa slot mobil berpagar terkunci.",
    iconName: "Car",
    badge: "Beratap & Berpagar"
  },
  {
    id: "laundry-area",
    title: "Area Cuci & Jemuran Luas",
    description: "Disediakan mesin cuci otomatis bersama dan area jemuran lantai atas yang luas dengan kanopi transparan (aman saat hujan mendadak).",
    iconName: "Shirt",
    badge: "Mesin Cuci Otomatis"
  },
  {
    id: "cleaning",
    title: "Pembersihan Area Bersama Rutin",
    description: "Petugas kebersihan profesional menyapu, mengepel lorong, membersihkan dapur, dan mengosongkan tempat sampah utama setiap pagi.",
    iconName: "Sparkles",
    badge: "Selalu Bersih"
  },
  {
    id: "ruang-santai",
    title: "Lounge & Ruang Belajar Terbuka",
    description: "Ruang santai dengan sofa empuk, meja diskusi, tanaman asri, dan TV bersama untuk menerima tamu atau santai sore hari.",
    iconName: "Coffee",
    badge: "Suasana Asri"
  }
];

export const LANDMARKS: Landmark[] = [
  { name: "Universitas Brawijaya (UB) Gerbang Utama", category: "Kampus", distance: "1.2 km", duration: "4 Menit", travelMode: "motor" },
  { name: "Universitas Negeri Malang (UM)", category: "Kampus", distance: "2.1 km", duration: "7 Menit", travelMode: "motor" },
  { name: "Politeknik Negeri Malang (POLINEMA)", category: "Kampus", distance: "1.8 km", duration: "5 Menit", travelMode: "motor" },
  { name: "Indomaret & Alfamart 24 Jam", category: "Belanja", distance: "150 m", duration: "2 Menit", travelMode: "jalan" },
  { name: "Sentra Kuliner & Kafe Malam Suhat", category: "Kuliner", distance: "500 m", duration: "3 Menit", travelMode: "motor" },
  { name: "RS Universitas Brawijaya (RSUB)", category: "Kesehatan", distance: "1.5 km", duration: "5 Menit", travelMode: "motor" },
  { name: "Stasiun Kereta Api Malang Kota", category: "Transportasi", distance: "4.5 km", duration: "12 Menit", travelMode: "motor" },
  { name: "Halte Bus Trans & Angkot", category: "Transportasi", distance: "200 m", duration: "3 Menit", travelMode: "jalan" },
];

export const RULES: Rule[] = [
  {
    id: "1",
    category: "Akses & Tamu",
    title: "Jam Kunjung Tamu & Etika",
    description: "Tamu lawan jenis dilarang masuk ke dalam kamar tidur pribadi (disediakan ruang tamu/lounge bersama di lantai 1). Batas tamu berkunjung s.d. pukul 21.30 WIB demi kenyamanan bersama.",
    icon: "Users"
  },
  {
    id: "2",
    category: "Keamanan",
    title: "Akses Kunci & Smart Gate",
    description: "Penghuni diberikan kunci kamar pribadi dan kartu/PIN akses gerbang utama. Bebas jam pulang kerja/kuliah lembur dengan wajib menutup dan mengunci kembali pintu pagar.",
    icon: "KeyRound"
  },
  {
    id: "3",
    category: "Ketenangan",
    title: "Waktu Tenang (Quiet Hours)",
    description: "Waktu tenang berlaku mulai pukul 22.00 s.d. 06.00 WIB. Dilarang menyalakan musik terlalu keras atau berisik yang mengganggu waktu istirahat tetangga kos.",
    icon: "VolumeX"
  },
  {
    id: "4",
    category: "Kebersihan",
    title: "Kebersihan Fasilitas Bersama",
    description: "Setiap penghuni wajib mencuci peralatan makan/masak sendiri setelah memakai dapur, serta membuang sampah kamar ke tempat penampungan sampah di depan.",
    icon: "Trash2"
  },
  {
    id: "5",
    category: "Larangan Keras",
    title: "Bebas Narkoba & Miras",
    description: "Dilarang keras membawa, menyimpan, atau mengonsumsi narkoba, minuman keras, senjata tajam, serta perbuatan yang melanggar hukum dan norma asusila.",
    icon: "AlertOctagon"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Rizky Firmansyah",
    role: "Mahasiswa Teknik Sipil UB",
    duration: "Tinggal 2 Tahun",
    roomType: "Kamar Superior AC",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
    comment: "KOS Buk Yet beneran berasa rumah sendiri. Buk Yet ramah banget, kalau lagi musim ujian kadang suka dikasih camilan atau buah. Suasananya tenang buat ngerjain tugas, WiFi-nya kencang stabil gak pernah ngadat pas presentasi online."
  },
  {
    id: "2",
    name: "Annisa Dwi Putri",
    role: "Software QA Engineer (Remote Worker)",
    duration: "Tinggal 1.5 Tahun",
    roomType: "Kamar Deluxe VIP",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&h=200&q=80",
    comment: "Sebagai pekerja remote, koneksi internet dan kenyamanan kamar adalah nomor satu. Di sini AC dingin, ada water heater, dan balkon sejuk banget. Parkiran aman ada CCTV dan Bu Yet sangat responsif kalau ada lampu putus langsung diganti hari itu juga."
  },
  {
    id: "3",
    name: "Dimas Anggoro",
    role: "Mahasiswa Polinema",
    duration: "Tinggal 1 Tahun",
    roomType: "Kamar Standar Non-AC",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    comment: "Harga sewa sangat sebanding dengan fasilitasnya! Dapur bersamanya lengkap banget, dispenser air galon selalu terisi gratis, jadi hemat pengeluaran anak kos. Lokasinya dekat banget sama minimarket dan warteg murah."
  },
  {
    id: "4",
    name: "Siti Rahmawati",
    role: "Staff Kantor Akuntan",
    duration: "Tinggal 8 Bulan",
    roomType: "Kamar Superior AC",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80",
    comment: "Yang paling saya suka keamanannya. Pulang lembur malam pun tenang karena gerbang smart lock dan lingkungan kos dijaga baik. Bersih banget, tiap pagi ada ibu yang bersihin lorong dan dapur."
  }
];

export const FAQS: FAQ[] = [
  {
    id: "f1",
    category: "pembayaran",
    question: "Berapa minimal periode sewa kamar di KOS Buk Yet?",
    answer: "Minimal sewa adalah 1 bulan. Namun kami memberikan potongan harga spesial hingga 9% untuk pembayaran sewa langsung 6 bulan atau 1 tahun di depan."
  },
  {
    id: "f2",
    category: "pembayaran",
    question: "Apakah ada biaya deposit saat pertama kali masuk?",
    answer: "Ya, kami memberlakukan uang jaminan (deposit kunci & fasilitas) sebesar Rp 300.000 yang bersifat refundable (akan dikembalikan 100% penuh saat masa sewa selesai jika tidak ada kerusakan fasilitas kamar)."
  },
  {
    id: "f3",
    category: "fasilitas",
    question: "Bagaimana dengan sistem pembayaran listrik?",
    answer: "Semua kamar telah dilengkapi meteran listrik token (PLN prabayar) tersendiri (900 VA / 1300 VA). Jadi penghuni dapat mengisi token sesuai pemakaian pribadi masing-masing tanpa takut terbebani pemakaian orang lain. Sedangkan air PDAM, WiFi, sampah & iuran keamanan sudah GRATIS."
  },
  {
    id: "f4",
    category: "aturan",
    question: "Apakah penghuni diberi kunci gerbang sendiri (bebas jam malam)?",
    answer: "Ya, penghuni diberi akses kunci/PIN gerbang sendiri sehingga tidak terkunci jika harus lembur kerja, praktikum kampus, atau ada keperluan mendesak, dengan catatan tetap menjaga ketenangan saat pulang malam."
  },
  {
    id: "f5",
    category: "aturan",
    question: "Apakah boleh membawa teman menginap?",
    answer: "Teman sesama jenis diizinkan menginap maksimal 2 malam dengan konfirmasi terlebih dahulu kepada pengelola kos (Buk Yet) demi ketertiban dan kenyamanan bersama."
  },
  {
    id: "f6",
    category: "survei",
    question: "Bagaimana cara melakukan survei lokasi kamar?",
    answer: "Anda dapat langsung membuat janji survei melalui tombol WhatsApp di web ini atau mengisi formulir survei online. Buk Yet atau penjaga kos siap menyambut Anda setiap hari pukul 08.00 - 20.00 WIB."
  }
];
