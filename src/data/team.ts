export interface Publication {
  title: string;
  authors: string;
  year: number;
  journal: string;
  doi?: string;
  url?: string;
  pubmed?: string;
  tag: string;
}

export interface Link {
  name: string;
  url: string;
  icon: string;
}

export interface Source {
  name: string;
  url: string;
}

export interface TeamMember {
  slug: string;
  fullName: string;
  academicTitle: string;
  labRoleTr: string;
  labRoleEn: string;
  institutionTr: string;
  institutionEn: string;
  departmentTr: string;
  departmentEn: string;
  photo: string;
  bioTr: string;
  bioEn: string;
  educationTr: string[];
  educationEn: string[];
  researchAreasTr: string[];
  researchAreasEn: string[];
  selectedPublications: Publication[];
  projectsTr?: string[];
  projectsEn?: string[];
  links: {
    academicProfile?: string;
    academicProfileLabelTr?: string;
    academicProfileLabelEn?: string;
    scholar?: string;
    orcid?: string;
    researchGate?: string;
    linkedin?: string;
  };
  sources?: Source[];
  lastUpdated: string;
}

export const teamData: TeamMember[] = [
  {
    slug: 'sengul-dogan',
    fullName: 'Şengül Doğan',
    academicTitle: 'Prof. Dr.',
    labRoleTr: 'Laboratuvar Lideri / Principal Investigator',
    labRoleEn: 'Lab Director / Principal Investigator',
    institutionTr: 'Fırat Üniversitesi',
    institutionEn: 'Firat University',
    departmentTr: 'Adli Bilişim Mühendisliği',
    departmentEn: 'Digital Forensics Engineering',
    photo: '/team/sengul-dogan.jpg',
    bioTr: 'Prof. Dr. Şengül Doğan, Fırat Üniversitesi Teknoloji Fakültesi Adli Bilişim Mühendisliği bölümünde görev yapmaktadır. Akademik çalışmaları ağırlıklı olarak yapay zekâ, açıklanabilir makine öğrenmesi, biyomedikal sinyal işleme, EEG dalgalarının analizi ve adli bilişim (digital forensics) uygulamaları üzerine yoğunlaşmaktadır.',
    bioEn: 'Prof. Dr. Şengül Doğan works at Firat University, Faculty of Technology, Department of Digital Forensics Engineering. Her academic studies primarily focus on artificial intelligence, explainable machine learning, biomedical signal processing, EEG wave analysis, and digital forensics applications.',
    educationTr: [
      'Lisans: Fırat Üniversitesi, Bilgisayar Öğretmenliği, 1998–2002',
      'Yüksek Lisans: Fırat Üniversitesi, Biyomühendislik, 2004–2007',
      'Doktora: Fırat Üniversitesi, Elektrik-Elektronik Mühendisliği, 2007–2011'
    ],
    educationEn: [
      'Bachelor\'s Degree: Fırat University, Computer Education, 1998–2002',
      'Master\'s Degree: Fırat University, Bioengineering, 2004–2007',
      'PhD: Fırat University, Electrical and Electronics Engineering, 2007–2011'
    ],
    researchAreasTr: ['Adli Bilişim', 'Görüntü İşleme', 'Bilgi Güvenliği', 'Biyomedikal Sinyal İşleme', 'EEG Analizi'],
    researchAreasEn: ['Digital Forensics', 'Image Processing', 'Information Security', 'Biomedical Signal Processing', 'EEG Analysis'],
    selectedPublications: [
      {
        title: 'Automated accurate emotion classification using Clefia pattern-based features with EEG signals',
        authors: 'Abdullah Doğan, Prabal Datta Barua, Mehmet Baygın, Türker Tuncer, Şengül Doğan, Orhan Yaman, Ali Hikmet Doğru, U. Rajendra Acharya',
        year: 2024,
        journal: 'International Journal of Healthcare Management',
        doi: '10.1080/20479700.2022.2141694',
        url: 'https://doi.org/10.1080/20479700.2022.2141694',
        tag: 'Duygu Sınıflandırma (Emotion Classification)'
      },
      {
        title: 'Epilepsy attacks recognition based on 1D octal pattern, wavelet transform and EEG signals',
        authors: 'Dogan, S., Tuncer, T.',
        year: 2021,
        journal: 'Expert Systems with Applications',
        tag: 'Epilepsi Tespiti (Epilepsy Detection)'
      },
      {
        title: 'TATPat based explainable EEG model for neonatal seizure detection',
        authors: 'Dogan, S., Tuncer, T.',
        year: 2024,
        journal: 'Scientific Reports',
        url: 'https://www.nature.com/articles/s41598-024-54707-1',
        tag: 'Açıklanabilir YZ (Explainable AI)'
      }
    ],
    links: {},
    lastUpdated: '2026-08-01'
  },
  {
    slug: 'turker-tuncer',
    fullName: 'Türker Tuncer',
    academicTitle: 'Prof. Dr.',
    labRoleTr: 'Akademik Ekip Üyesi / Kıdemli Araştırmacı',
    labRoleEn: 'Academic Team Member / Senior Researcher',
    institutionTr: 'Fırat Üniversitesi',
    institutionEn: 'Firat University',
    departmentTr: 'Adli Bilişim Mühendisliği',
    departmentEn: 'Digital Forensics Engineering',
    photo: '/team/turker-tuncer.png',
    bioTr: 'Prof. Dr. Türker Tuncer, Fırat Üniversitesi\'nde görev yapmaktadır. Araştırma alanları makine öğrenmesi, öznitelik mühendisliği (feature engineering) ve biyomedikal sinyal analizini kapsamaktadır. Çalışmalarında karmaşık EEG sinyallerini işlemek için 1D Octal Pattern gibi patern tabanlı yöntemler üzerine odaklanmaktadır.',
    bioEn: 'Prof. Dr. Türker Tuncer works at Firat University. His research areas include machine learning, feature engineering, and biomedical signal analysis. His studies focus on pattern-based methods such as 1D Octal Pattern for processing complex EEG signals.',
    educationTr: [
      'Lisans: Fırat Üniversitesi, Bilgisayar Öğretmenliği, 2005–2009',
      'Lisans: Fırat Üniversitesi, Bilgisayar Mühendisliği, 2013–2015',
      'Yüksek Lisans: Fırat Üniversitesi, Elektronik-Bilgisayar Eğitimi, 2009–2011',
      'Doktora: Fırat Üniversitesi, Yazılım Mühendisliği, 2012–2016'
    ],
    educationEn: [
      'Bachelor\'s Degree: Fırat University, Computer Education, 2005–2009',
      'Bachelor\'s Degree: Fırat University, Computer Engineering, 2013–2015',
      'Master\'s Degree: Fırat University, Electronics-Computer Education, 2009–2011',
      'PhD: Fırat University, Software Engineering, 2012–2016'
    ],
    researchAreasTr: ['Öznitelik Mühendisliği', 'İnsan Davranışı Analizi', 'Yapay Zekâ', 'Derin Öğrenme'],
    researchAreasEn: ['Feature Engineering', 'Human Behavior Analysis', 'Artificial Intelligence', 'Deep Learning'],
    selectedPublications: [
      {
        title: 'A new dataset for EEG abnormality detection: MTOUH',
        authors: 'İrem Taşcı, Burak Taşcı, Şengül Doğan, Türker Tuncer',
        year: 2022,
        journal: 'Turkish Journal of Science and Technology, 17(1), 135–141',
        doi: '10.55525/tjst.1074540',
        url: 'https://doi.org/10.55525/tjst.1074540',
        tag: 'Veri Kümesi (Dataset)'
      },
      {
        title: 'Automated accurate emotion classification using Clefia pattern-based features with EEG signals',
        authors: 'Abdullah Doğan, Prabal Datta Barua, Mehmet Baygın, Türker Tuncer, Şengül Doğan, Orhan Yaman, Ali Hikmet Doğru, U. Rajendra Acharya',
        year: 2024,
        journal: 'International Journal of Healthcare Management',
        doi: '10.1080/20479700.2022.2141694',
        url: 'https://doi.org/10.1080/20479700.2022.2141694',
        tag: 'Duygu Sınıflandırma (Emotion Classification)'
      }
    ],
    links: {},
    lastUpdated: '2026-08-01'
  },
  {
    slug: 'mehmet-baygin',
    fullName: 'Mehmet Baygın',
    academicTitle: 'Doç. Dr.',
    labRoleTr: 'Araştırmacı',
    labRoleEn: 'Researcher',
    institutionTr: 'Erzurum Teknik Üniversitesi',
    institutionEn: 'Erzurum Technical University',
    departmentTr: 'Bilgisayar Mühendisliği',
    departmentEn: 'Computer Engineering',
    photo: '/team/mehmet-baygin.jpg',
    bioTr: 'Doç. Dr. Mehmet Baygın, Erzurum Teknik Üniversitesi Bilgisayar Mühendisliği Bölümü\'nde görev yapmaktadır. Akademik çalışmaları makine öğrenmesi, yapay zekâ, biyomedikal veri analizi, sinyal ve görüntü işleme ile özellik mühendisliği alanlarına odaklanmaktadır.',
    bioEn: 'Assoc. Prof. Dr. Mehmet Baygın works at Erzurum Technical University, Department of Computer Engineering. His academic studies focus on machine learning, artificial intelligence, biomedical data analysis, signal and image processing, and feature engineering.',
    educationTr: [
      'Lisans: Fırat Üniversitesi, Bilgisayar Mühendisliği, 2006–2010',
      'Yüksek Lisans: Fırat Üniversitesi, Bilgisayar Mühendisliği, 2010–2013',
      'Doktora: Fırat Üniversitesi, Bilgisayar Mühendisliği, 2013–2018'
    ],
    educationEn: [
      'Bachelor\'s Degree: Fırat University, Computer Engineering, 2006–2010',
      'Master\'s Degree: Fırat University, Computer Engineering, 2010–2013',
      'PhD: Fırat University, Computer Engineering, 2013–2018'
    ],
    researchAreasTr: ['Bilgisayar Bilimleri', 'Makine Öğrenmesi', 'Görüntü İşleme', 'Sağlık Bilişimi'],
    researchAreasEn: ['Computer Science', 'Machine Learning', 'Image Processing', 'Health Informatics'],
    selectedPublications: [],
    links: {},
    lastUpdated: '2026-08-01'
  },
  {
    slug: 'omer-faruk-goktas',
    fullName: 'Ömer Faruk Göktaş',
    academicTitle: 'Öğr. Gör. Dr.',
    labRoleTr: 'Araştırmacı',
    labRoleEn: 'Researcher',
    institutionTr: 'Ankara Yıldırım Beyazıt Üniversitesi',
    institutionEn: 'Ankara Yıldırım Beyazıt University',
    departmentTr: 'Elektronik ve Otomasyon',
    departmentEn: 'Electronics and Automation',
    photo: '/team/omer-faruk-goktas.jpg',
    bioTr: 'Öğr. Gör. Dr. Ömer Faruk Göktaş, Ankara Yıldırım Beyazıt Üniversitesi Teknik Bilimler Meslek Yüksekokulu Elektronik ve Otomasyon Bölümü’nde görev yapmaktadır. Akademik çalışmaları elektrik-elektronik mühendisliği, sinyal işleme, makine öğrenmesi, derin öğrenme ve RF/mikrodalga sistemleri alanlarına odaklanmaktadır.',
    bioEn: 'Lecturer Dr. Ömer Faruk Göktaş works at Ankara Yıldırım Beyazıt University, Vocational School of Technical Sciences, Department of Electronics and Automation. His academic studies focus on electrical and electronics engineering, signal processing, machine learning, deep learning, and RF/microwave systems.',
    educationTr: [
      'Lisans: Fırat Üniversitesi, Elektrik-Elektronik Mühendisliği, 2008–2012',
      'Yüksek Lisans: Gazi Üniversitesi, Elektrik-Elektronik Mühendisliği, 2015–2018',
      'Doktora: Ankara Yıldırım Beyazıt Üniversitesi, Elektrik-Elektronik Mühendisliği, 2018–2025'
    ],
    educationEn: [
      'Bachelor\'s Degree: Fırat University, Electrical and Electronics Engineering, 2008–2012',
      'Master\'s Degree: Gazi University, Electrical and Electronics Engineering, 2015–2018',
      'PhD: Ankara Yıldırım Beyazıt University, Electrical and Electronics Engineering, 2018–2025'
    ],
    researchAreasTr: ['Elektrik-Elektronik Mühendisliği', 'Sinyal İşleme', 'Makine Öğrenmesi', 'Derin Öğrenme', 'RF / Mikrodalga'],
    researchAreasEn: ['Electrical and Electronics Engineering', 'Signal Processing', 'Machine Learning', 'Deep Learning', 'RF / Microwave'],
    selectedPublications: [],
    links: {},
    lastUpdated: '2026-08-01'
  },
  {
    slug: 'burak-tasci',
    fullName: 'Burak Taşcı',
    academicTitle: 'Doç. Dr.',
    labRoleTr: 'Araştırmacı',
    labRoleEn: 'Researcher',
    institutionTr: 'Fırat Üniversitesi',
    institutionEn: 'Firat University',
    departmentTr: 'Elektrik ve Enerji Bölümü, Elektrik Programı',
    departmentEn: 'Department of Electricity and Energy, Electricity Program',
    photo: '/team/burak-tasci.png',
    bioTr: 'Doç. Dr. Burak Taşcı, Fırat Üniversitesi Teknik Bilimler Meslek Yüksekokulu, Elektrik ve Enerji Bölümü\'nde görev yapmaktadır. Araştırmaları yapay zekâ ve derin öğrenme üzerine yoğunlaşmaktadır.',
    bioEn: 'Assoc. Prof. Dr. Burak Taşcı works at Firat University, Vocational School of Technical Sciences, Department of Electricity and Energy. His research focuses on artificial intelligence and deep learning.',
    educationTr: [
      'Lisans: Fırat Üniversitesi, Elektrik-Elektronik Mühendisliği, 2003–2007',
      'Yüksek Lisans: Fırat Üniversitesi, Elektrik-Elektronik Mühendisliği, 2010–2015',
      'Doktora: Fırat Üniversitesi, Elektrik-Elektronik Mühendisliği, 2017–2021'
    ],
    educationEn: [
      'Bachelor\'s Degree: Fırat University, Electrical and Electronics Engineering, 2003–2007',
      'Master\'s Degree: Fırat University, Electrical and Electronics Engineering, 2010–2015',
      'PhD: Fırat University, Electrical and Electronics Engineering, 2017–2021'
    ],
    researchAreasTr: ['Yapay Zekâ', 'Derin Öğrenme'],
    researchAreasEn: ['Artificial Intelligence', 'Deep Learning'],
    selectedPublications: [
      {
        title: 'A Hybrid Deep Feature Fusion and CWINCA-Based Classification Framework for Thermal Fault Diagnosis in Photovoltaic Panels',
        authors: 'Taşcı, B.',
        year: 2025,
        journal: 'Firat University Journal of Experimental and Computational Engineering, 4(3), 689–700',
        doi: '10.62520/fujece.1757707',
        url: 'https://doi.org/10.62520/fujece.1757707',
        tag: 'Yapay Zekâ (Artificial Intelligence)'
      }
    ],
    links: {},
    lastUpdated: '2026-08-01'
  },
  {
    slug: 'irem-tasci',
    fullName: 'İrem Taşcı',
    academicTitle: 'Doç. Dr.',
    labRoleTr: 'Araştırmacı',
    labRoleEn: 'Researcher',
    institutionTr: 'Fırat Üniversitesi',
    institutionEn: 'Firat University',
    departmentTr: 'Tıp Fakültesi, Nöroloji',
    departmentEn: 'Faculty of Medicine, Neurology',
    photo: '/team/irem-tasci.jpg',
    bioTr: 'Doç. Dr. İrem Taşcı, Fırat Üniversitesi Tıp Fakültesi Dahili Tıp Bilimleri, Nöroloji bölümünde görev yapmaktadır. Araştırmaları nöroloji alanına odaklanmaktadır.',
    bioEn: 'Assoc. Prof. Dr. İrem Taşcı works at Firat University, Faculty of Medicine, Internal Medical Sciences, Department of Neurology. Her research focuses on neurology.',
    educationTr: [
      'Tıp Eğitimi: Fırat Üniversitesi Tıp Fakültesi, 2003–2009',
      'Nöroloji Uzmanlığı: Fırat Üniversitesi Tıp Fakültesi, 2009–2014'
    ],
    educationEn: [
      'Medical Degree: Fırat University Faculty of Medicine, 2003–2009',
      'Neurology Residency: Fırat University Faculty of Medicine, 2009–2014'
    ],
    researchAreasTr: ['Nöroloji', 'Tıp Bilimleri'],
    researchAreasEn: ['Neurology', 'Medical Sciences'],
    selectedPublications: [
      {
        title: 'Association between attention deficit hyperactivity disorder and chronotype in adults with epilepsy',
        authors: 'Kerim Uğur, Tunahan Sun, İrem Taşcı, Fatma Kartal',
        year: 2025,
        journal: 'Cukurova Medical Journal, 50(3), 806–818',
        doi: '10.17826/cumj.1686754',
        url: 'https://doi.org/10.17826/cumj.1686754',
        tag: 'Nöroloji (Neurology)'
      }
    ],
    links: {},
    lastUpdated: '2026-08-01'
  },
  {
    slug: 'gulay-tasci',
    fullName: 'Gülay Taşcı',
    academicTitle: 'Doç. Dr.',
    labRoleTr: 'Araştırmacı',
    labRoleEn: 'Researcher',
    institutionTr: 'Elazığ Fethi Sekin Şehir Hastanesi',
    institutionEn: 'Elazığ Fethi Sekin City Hospital',
    departmentTr: 'Psikiyatri',
    departmentEn: 'Psychiatry',
    photo: '/team/gulay-tasci.png',
    bioTr: 'Doç. Dr. Gülay Taşcı, Elazığ Fethi Sekin Şehir Hastanesi Psikiyatri bölümünde görev yapmaktadır. Araştırma alanı psikiyatri üzerine yoğunlaşmaktadır.',
    bioEn: 'Assoc. Prof. Dr. Gülay Taşcı works at the Psychiatry department of Elazığ Fethi Sekin City Hospital. Her research focuses on psychiatry.',
    educationTr: [
      'Tıp Eğitimi: Çukurova Üniversitesi Tıp Fakültesi, 2006–2012',
      'Psikiyatri Uzmanlığı: Fırat Üniversitesi Tıp Fakültesi, 2013–2017'
    ],
    educationEn: [
      'Medical Degree: Çukurova University Faculty of Medicine, 2006–2012',
      'Psychiatry Residency: Fırat University Faculty of Medicine, 2013–2017'
    ],
    researchAreasTr: ['Psikiyatri'],
    researchAreasEn: ['Psychiatry'],
    selectedPublications: [
      {
        title: 'Misdiagnosis of Bipolar Disorder: Rare or Frequent?',
        authors: 'Şuheda Kaya, Gülay Taşcı, Sevda Korkmaz, Murad Atmaca',
        year: 2023,
        journal: 'Genel Tıp Dergisi, 33(4), 372–376',
        doi: '10.54005/geneltip.1178626',
        url: 'https://doi.org/10.54005/geneltip.1178626',
        tag: 'Psikiyatri (Psychiatry)'
      }
    ],
    links: {},
    lastUpdated: '2026-08-01'
  }
];
