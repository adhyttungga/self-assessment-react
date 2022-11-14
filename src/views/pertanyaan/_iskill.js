const _iskill = [
  {
    no: 1,
    skill: 'Acceptance Testing (BPTS)',
    deskripsi:
      'Melakukan validasi sistem, produk, proses bisnis atau layanan untuk menentukan pemenuhan kriteria penerimaan',
  },
  {
    no: 2,
    skill: 'Application Support (ASUP)',
    deskripsi:
      'Memberikan layanan manajemen, teknis, dan administratif untuk mendukung dan memelihara aplikasi yang sedang berjalan.',
  },
  {
    no: 3,
    skill: 'Asset Management (ASMG)',
    deskripsi:
      'Mengelola siklus hidup aset mulai dari akuisisi, operasi, pemeliharaan sampai disposal.',
  },
  {
    no: 4,
    skill: 'Audit (AUDT)',
    deskripsi:
      'Menyampaikan penilaian independen berbasis risiko atas efektivitas dari proses, kontrol, dan kondisi kepatuhan dari sebuah organisasi',
  },
  {
    no: 5,
    skill: 'Availability Management (AVMT)',
    deskripsi:
      'Memastikan bahwa layanan dapat memberikan tingkat ketersediaan yang disepakati sebagai pemenuhan kebutuhan bisnis saat ini dan di masa depan.',
  },
  {
    no: 6,
    skill: 'Business Administration (ADMN)',
    deskripsi:
      'Mengelola dan melakukan layanan dan tugas administratif supaya individu, tim, dan organisasi berhasil mencapai tujuan mereka',
  },
  {
    no: 7,
    skill: 'Business Modelling (BSMO)',
    deskripsi:
      'Memproduksi representasi abstrak atau inti dari situasi real world, bisnis, atau gaming.',
  },
  {
    no: 8,
    skill: 'Business Process Improvement (BPRE)',
    deskripsi:
      'Membuat pendekatan baru dan berpotensi disruptif terhadap aktivitas bisnis yang sedang berjalan',
  },
  {
    no: 9,
    skill: 'Capacity Management (CPMG)',
    deskripsi:
      'Memastikan bahwa komponen layanan memiliki kapasitas dan kinerja untuk memenuhi kebutuhan bisnis saat ini dan di masa mendatang',
  },
  {
    no: 10,
    skill: 'Change Management (CHMG)',
    deskripsi:
      'Penilaian risiko terkait dengan perubahan yang diusulkan dan memastikan perubahan pada produk, layanan, atau sistem dikendalikan dan dikoordinasikan',
  },
  {
    no: 11,
    skill: 'Competency Assessment (LEDA)',
    deskripsi:
      'Menilai pengetahuan, skill, kompetensi, dan perilaku dengan berbagai cara, baik formal maupun informal, berdasar kerangka kerja seperti SFIA',
  },
  {
    no: 12,
    skill: 'Content Authoring (INCA)',
    deskripsi:
      'Merencanakan, mendisain, dan membuat informasi tekstual, jika perlu disupport konten grafis',
  },
  {
    no: 13,
    skill: 'Content Publishing (ICPM)',
    deskripsi:
      'Mengelola dan secara kontinu meningkatkan proses mengumpulkan, menyusun, dan menerbitkan konten.',
  },
  {
    no: 14,
    skill: 'Continuity Management (COPL)',
    deskripsi: 'Mengembangkan, menerapkan dan menguji framework kelangsungan bisnis',
  },
  {
    no: 15,
    skill: 'Contract Management (ITCM)',
    deskripsi:
      'Mengelola dan mengendalikan berjalannya kontrak formal penyediaan produk dan layanan.',
  },
  {
    no: 16,
    skill: 'Customer Service Support (CSMG)',
    deskripsi: 'Mengelola dan mengoperasikan fungsi layanan pelanggan atau service desk',
  },
  {
    no: 17,
    skill: 'Data Modelling and Design (DTAN)',
    deskripsi:
      'Membuat model dan diagram untuk merepresentasikan dan mengkomunikasikan kebutuhan data dan aset data',
  },
  {
    no: 18,
    skill: 'Database Administration (DBAD)',
    deskripsi:
      'Menginstall, mengonfigurasi, memantau, memelihara, dan meningkatkan kinerja database dan penyimpanan data',
  },
  {
    no: 19,
    skill: 'Database Design (DBDS)',
    deskripsi:
      'Menspesifikasi, merancang dan memelihara mekanisme penyimpanan dan pengaksesan data.',
  },
  {
    no: 20,
    skill: 'Enterprise IT Governance (GOVN)',
    deskripsi:
      'Mendefinisikan dan mengoperasikan framework untuk pengambilan keputusan, mengelola hubungan dengan stakeholder, dan mengetahui otoritas yang sah',
  },
  {
    no: 21,
    skill: 'Feasibility Assessment (FEAS)',
    deskripsi:
      'Mendefinisikan, mengevaluasi, dan mendeskripsikan opsi perubahan bisnis untuk kelayakan finansial, teknis dan bisnis, dan penyelarasan strategis',
  },
  {
    no: 22,
    skill: 'Incident Management (USUP)',
    deskripsi:
      'Mengkoordinasikan tanggapan terhadap laporan insiden, meminimalkan dampak negatif dan memulihkan layanan secepat mungkin',
  },
  {
    no: 23,
    skill: 'Information Assurance (INAS)',
    deskripsi:
      'Memberikan perlindungan dari dan mengelola risiko terkait penggunaan, penyimpanan, dan transmisi data dan sistem informasi',
  },
  {
    no: 24,
    skill: 'Information Security (SCTY)',
    deskripsi:
      'Mendefinisikan dan mengoperasikan framework keamanan dan strategi manajemen keamanan',
  },
  {
    no: 25,
    skill: 'IT Infrastructure (ITOP)',
    deskripsi: 'Mendeploy, mengkonfigurasi, dan mengoperasikan Infrastruktur IT',
  },
  {
    no: 26,
    skill: 'Knowledge Management (KNOW)',
    deskripsi: 'Mengelola pengetahuan vital untuk menciptakan value bagi organisasi',
  },
  {
    no: 27,
    skill: 'Learning Design and Development (TMCR)',
    deskripsi:
      'Merancang dan mengembangkan sumber daya untuk transfer pengetahuan, pengembangan keterampilan, dan perubahan perilaku',
  },
  {
    no: 28,
    skill: 'Measurement (MEAS)',
    deskripsi:
      'Mengembangkan dan mengoperasikan kemampuan pengukuran untuk mendukung kebutuhan informasi organisasi sesuai kesepakatan',
  },
  {
    no: 29,
    skill: 'Penetration Testing (PENT)',
    deskripsi:
      'Menguji efektivitas pengendalian keamanan dengan meniru alat dan teknik yang kemungkinan dipakai penyerang',
  },
  {
    no: 30,
    skill: 'Performance Management (PEMT)',
    deskripsi:
      'Meningkatkan kinerja organisasi dengan mengembangkan kinerja individu dan workgroup untuk memenuhi tujuan yang disepakati dengan hasil yang terukur',
  },
  {
    no: 31,
    skill: 'Problem Management (PBMG)',
    deskripsi:
      'Mengelola life cycle semua masalah yang telah terjadi atau akan/dapat terjadi selama memberikan suatu layanan.',
  },
  {
    no: 32,
    skill: 'Product Management (PROD)',
    deskripsi:
      'Mengelola dan mengembangkan produk atau layanan melalui full life cycle produk atau layanan tersebut dari awal, pertumbuhan, maturity, penurunan hingga dihentikan',
  },
  {
    no: 33,
    skill: 'Professional Development (PDSV)',
    deskripsi:
      'Memfasilitasi pengembangan profesional individu sesuai dengan tujuan karir dan persyaratan organisasi',
  },
  {
    no: 34,
    skill: 'Programming (PROG)',
    deskripsi:
      'Mengembangkan komponen perangkat lunak untuk mempersembahkan value kepada stakeholder',
  },
  {
    no: 35,
    skill: 'Project Management (PRMG)',
    deskripsi:
      'Memberikan hasil yang disepakati dari proyek menggunakan teknik manajemen, kolaborasi, kepemimpinan dan tata kelola yang tepat',
  },
  {
    no: 36,
    skill: 'Quality Assurance (QUAS)',
    deskripsi:
      'Menjamin, melalui penilaian dan review berkala dan berkelanjutan, bahwa sasaran kualitas organisasi bisa tercapai',
  },
  {
    no: 37,
    skill: 'Quality Management (QUMG)',
    deskripsi:
      'Mendefinisikan dan mengoperasikan framework manajemen proses dan praktik kerja untuk mencapai sasaran mutu organisasi',
  },
  {
    no: 38,
    skill: 'Release and Deployment (RELM)',
    deskripsi:
      'Mendefinisikan dan mengoperasikan framework manajemen proses dan praktik kerja untuk mencapai sasaran mutu organisasi',
  },
  {
    no: 39,
    skill: 'Requirements Definition & Management (REQM)',
    deskripsi: 'Mengelola kebutuhan di seluruh delivery dan life cycle operasional',
  },
  {
    no: 40,
    skill: 'Resourcing (RESC)',
    deskripsi: 'Memperoleh, mendeploy, dan onboarding sumber daya',
  },
  {
    no: 41,
    skill: 'Risk Management (BURM)',
    deskripsi:
      'Merencanakan dan implementasi proses dan prosedur di seluruh organisasi untuk manajemen risiko yang mempengaruhi keberhasilan atau integritas perusahaan',
  },
  {
    no: 42,
    skill: 'Security Operations (SCAD)',
    deskripsi:
      'Memberikan layanan manajemen, teknis, dan administratif untuk menerapkan strategi pengendalian dan manajemen keamanan',
  },
  {
    no: 43,
    skill: 'Service Acceptance (SEAC)',
    deskripsi:
      'Mengelola proses untuk mendapatkan konfirmasi formal bahwa kriteria penerimaan layanan telah dipenuhi.',
  },
  {
    no: 44,
    skill: 'Service Level Management (SLMO)',
    deskripsi:
      'Menyetujui target tingkat layanan dan menilai, memantau, dan mengelola penyampaian layanan terhadap target',
  },
  {
    no: 45,
    skill: 'Software Configuration (PORT)',
    deskripsi:
      'Merancang dan men-deploy konfigurasi produk perangkat lunak ke dalam lingkungan atau platform perangkat lunak',
  },
  {
    no: 46,
    skill: 'Software Design (SWDN)',
    deskripsi:
      'Menentukan spesifikasi dan merancang perangkat lunak untuk memenuhi persyaratan yang ditentukan sesuai standar dan prinsip desain yang disepakati',
  },
  {
    no: 47,
    skill: 'Solution Architecture (ARCH)',
    deskripsi:
      'Mengembangkan dan mengkomunikasikan arsitektur solusi multi-dimensi untuk memberikan hasil bisnis yang disepakati.',
  },
  {
    no: 48,
    skill: 'Sourcing (SORC)',
    deskripsi:
      'Mengelola, atau memberikan saran tentang, pengadaan atau pemesanan produk dan layanan',
  },
  {
    no: 49,
    skill: 'Specialist Advice (TECH)',
    deskripsi: 'Memberikan saran dan arahan otoritatif di bidang spesialis.',
  },
  {
    no: 50,
    skill: 'Stakeholder Relationship Management (RLMT)',
    deskripsi: 'Mempengaruhi sikap, keputusan, dan tindakan stakeholder untuk keuntungan bersama',
  },
  {
    no: 51,
    skill: 'Supplier Management (SUPP)',
    deskripsi:
      'Menyelaraskan tujuan dan aktivitas kinerja pemasok organisasi dengan strategi dan rencana sourcing, menyeimbangkan biaya, efisiensi, dan kualitas layanan',
  },
  {
    no: 52,
    skill: 'Systems and Software Life Cycle Engineering (SLEN)',
    deskripsi:
      'Membangun dan mendeploy lingkungan untuk mengembangkan, terus meningkatkan, dan mengoperasikan produk dan layanan perangkat lunak dan sistem dengan aman',
  },
  {
    no: 53,
    skill: 'Systems Design (DESN)',
    deskripsi:
      'Merancang sistem untuk memenuhi persyaratan yang ditentukan dan arsitektur sistem yang disepakati',
  },
  {
    no: 54,
    skill: 'Systems Installation and Removal (HSIN)',
    deskripsi: 'Memasang dan menguji, atau menonaktifkan dan melepas sistem atau komponen sistem.',
  },
  {
    no: 55,
    skill: 'Systems Integration and Building (SINT)',
    deskripsi:
      'Merencanakan, menerapkan, dan mengontrol kegiatan untuk mensintesis komponen sistem untuk membuat sistem, produk, atau layanan operasional',
  },
  {
    no: 56,
    skill: 'Testing (TEST)',
    deskripsi:
      'Meneliti produk, sistem dan layanan untuk menaksir perilaku dan apakah ini memenuhi persyaratan dan karakteristik yang ditentukan atau tidak.',
  },
  {
    no: 57,
    skill: 'User Experience Analysis (UNAN)',
    deskripsi:
      'Memahami konteks penggunaan untuk sistem, produk, dan layanan serta menentukan kebutuhan UX dan tujuan desain',
  },
  {
    no: 58,
    skill: 'User Experience Design (HCEV)',
    deskripsi:
      'Memproduksi konsep desain dan prototipe untuk interaksi dan pengalaman pengguna dengan produk, sistem, atau layanan',
  },
  {
    no: 59,
    skill: 'User Experience Evaluation (USEV)',
    deskripsi: 'Memvalidasi sistem, produk, atau layanan terhadap sasaran, metrik, dan target UX',
  },
  {
    no: 60,
    skill: 'User Research (URCH)',
    deskripsi:
      'Mengidentifikasi perilaku, kebutuhan, dan motivasi pengguna menggunakan metoda penelitian observasional',
  },
  {
    no: 61,
    skill: 'Vulnerability Assessment (VUAS)',
    deskripsi:
      'Mengidentifikasi dan mengklasifikasikan kerentanan keamanan dalam jaringan, sistem dan aplikasi dan mengurangi atau menghilangkan dampaknya.',
  },
]

export default _iskill
