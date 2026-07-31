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
  links: Link[];
  sources: Source[];
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
    bioTr: 'Prof. Dr. Şengül Doğan, Fırat Üniversitesi Teknoloji Fakültesi Adli Bilişim Mühendisliği bölümünde görev yapan deneyimli bir araştırmacıdır. Çalışmaları ağırlıklı olarak yapay zekâ, açıklanabilir makine öğrenmesi, biyomedikal sinyal işleme, EEG dalgalarının analizi ve dijital adli tıp (digital forensics) uygulamaları üzerine yoğunlaşmıştır. Özellikle nörolojik rahatsızlıkların erken tespiti ve duygu durum analizi için yenilikçi öznitelik mühendisliği (feature engineering) yöntemleri geliştirmesiyle tanınır.',
    bioEn: 'Prof. Dr. Şengül Doğan is an experienced researcher at Firat University, Faculty of Technology, Department of Digital Forensics Engineering. Her work primarily focuses on artificial intelligence, explainable machine learning, biomedical signal processing, EEG wave analysis, and digital forensics applications. She is well known for developing innovative feature engineering methods for the early detection of neurological disorders and emotion analysis.',
    educationTr: [
      'Lisans: Fırat Üniversitesi, Bilgisayar Öğretmenliği (1998 - 2002)',
      'Yüksek Lisans: Fırat Üniversitesi, Biyomühendislik (2004 - 2007)',
      'Doktora: Fırat Üniversitesi, Elektrik-Elektronik Mühendisliği (2007 - 2011)'
    ],
    educationEn: [
      'BSc: Firat University, Computer Education (1998 - 2002)',
      'MSc: Firat University, Bioengineering (2004 - 2007)',
      'PhD: Firat University, Electrical and Electronics Engineering (2007 - 2011)'
    ],
    researchAreasTr: ['Dijital Adli Tıp', 'Mobil Adli Tıp', 'Görüntü İşleme', 'Bilgi Güvenliği', 'Biyomedikal Sinyal İşleme', 'EEG Analizi'],
    researchAreasEn: ['Digital Forensics', 'Mobile Forensics', 'Image Processing', 'Information Security', 'Biomedical Signal Processing', 'EEG Analysis'],
    selectedPublications: [
      {
        title: 'Automated accurate emotion classification using Clefia pattern-based features with EEG signals',
        authors: 'Tuncer, T., Dogan, S., et al.',
        year: 2022,
        journal: 'Cognitive Neurodynamics',
        url: 'https://link.springer.com/article/10.1007/s11571-022-09789-2',
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
    links: [
      { name: 'AVESİS', url: 'https://avesis.firat.edu.tr/sengul', icon: 'university' },
      { name: 'ORCID', url: 'https://orcid.org/0000-0002-3162-446X', icon: 'orcid' }
    ],
    sources: [
      { name: 'Fırat Üniversitesi AVESİS', url: 'https://avesis.firat.edu.tr' }
    ],
    lastUpdated: '2026-07-28'
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
    bioTr: 'Prof. Dr. Türker Tuncer, makine öğrenmesi, öznitelik mühendisliği (feature engineering) ve biyomedikal sinyal analizi alanlarında uluslararası düzeyde etki yaratmış bir araştırmacıdır. Fırat Üniversitesi\'nde görev yapan Tuncer, özellikle karmaşık EEG sinyallerini işlemek için 1D Octal Pattern gibi özgün patern tabanlı yöntemlerin literatüre kazandırılmasında aktif rol oynamıştır.',
    bioEn: 'Prof. Dr. Türker Tuncer is a researcher who has made an international impact in the fields of machine learning, feature engineering, and biomedical signal analysis. Working at Firat University, Tuncer has played an active role in introducing unique pattern-based methods, such as 1D Octal Pattern, to the literature to process complex EEG signals.',
    educationTr: [
      'Lisans: Fırat Üniversitesi, Bilgisayar Öğretmenliği (2005 - 2009) & Bilgisayar Mühendisliği (2013 - 2015)',
      'Yüksek Lisans: Fırat Üniversitesi, Elektronik-Bilgisayar Eğitimi (2009 - 2011)',
      'Doktora: Fırat Üniversitesi, Yazılım Mühendisliği (2012 - 2016)'
    ],
    educationEn: [
      'BSc: Firat University, Computer Education (2005 - 2009) & Computer Engineering (2013 - 2015)',
      'MSc: Firat University, Electronics-Computer Education (2009 - 2011)',
      'PhD: Firat University, Software Engineering (2012 - 2016)'
    ],
    researchAreasTr: ['Öznitelik Mühendisliği', 'Multimedya Adli Bilişim', 'İnsan Davranışı Analizi', 'Yapay Zekâ'],
    researchAreasEn: ['Feature Engineering', 'Multimedia Forensics', 'Human Behavior Analysis', 'Artificial Intelligence'],
    selectedPublications: [
      {
        title: 'A new dataset for EEG abnormality detection MTOUH',
        authors: 'Tuncer, T., Dogan, S., et al.',
        year: 2022,
        journal: 'Turkish Journal of Electrical Engineering and Computer Sciences',
        url: 'https://dergipark.org.tr/en/pub/tjeecs/issue/75429/1179619',
        tag: 'Veri Kümesi (Dataset)'
      },
      {
        title: 'Automated accurate emotion classification using Clefia pattern-based features with EEG signals',
        authors: 'Tuncer, T., Dogan, S., et al.',
        year: 2022,
        journal: 'Cognitive Neurodynamics',
        url: 'https://link.springer.com/article/10.1007/s11571-022-09789-2',
        tag: 'Duygu Sınıflandırma (Emotion Classification)'
      }
    ],
    links: [
      { name: 'AVESİS', url: 'https://avesis.firat.edu.tr/turkertuncer', icon: 'university' },
      { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=G6XqD3QAAAAJ', icon: 'scholar' },
      { name: 'ORCID', url: 'https://orcid.org/0000-0003-3848-8008', icon: 'orcid' }
    ],
    sources: [
      { name: 'Fırat Üniversitesi AVESİS', url: 'https://avesis.firat.edu.tr/turkertuncer' },
      { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=G6XqD3QAAAAJ' }
    ],
    lastUpdated: '2026-07-28'
  },
  {
    slug: 'mehmet-baygin',
    fullName: 'Mehmet Baygın',
    academicTitle: 'Doç. Dr.',
    labRoleTr: 'Akademik İş Birliği / Araştırmacı',
    labRoleEn: 'Academic Collaborator / Researcher',
    institutionTr: 'Erzurum Teknik Üniversitesi',
    institutionEn: 'Erzurum Technical University',
    departmentTr: 'Bilgisayar Mühendisliği',
    departmentEn: 'Computer Engineering',
    photo: '/team/mehmet-baygin.jpg',
    bioTr: 'Doç. Dr. Mehmet Baygın, Erzurum Teknik Üniversitesi Bilgisayar Mühendisliği Bölümü\'nde görev yapmaktadır. Fırat Brain Mind Machine Lab (FBMML) ile sürdürdüğü akademik iş birlikleri kapsamında makine öğrenmesi, medikal yapay zekâ uygulamaları ve özellik mühendisliği konularında önemli projelere imza atmaktadır.',
    bioEn: 'Assoc. Prof. Dr. Mehmet Baygın works at Erzurum Technical University, Department of Computer Engineering. Within the scope of his academic collaborations with the Firat Brain Mind Machine Lab (FBMML), he undertakes significant projects in machine learning, medical artificial intelligence applications, and feature engineering.',
    educationTr: [
      'Lisans: Erzurum Teknik Üniversitesi, Bilgisayar Mühendisliği (2010 - 2014)',
      'Yüksek Lisans: Fırat Üniversitesi, Bilgisayar Mühendisliği (2015 - 2017)',
      'Doktora: Fırat Üniversitesi, Adli Bilişim Mühendisliği (2018 - 2022)'
    ],
    educationEn: [
      'BSc: Erzurum Technical University, Computer Engineering (2010 - 2014)',
      'MSc: Firat University, Computer Engineering (2015 - 2017)',
      'PhD: Firat University, Digital Forensics Engineering (2018 - 2022)'
    ],
    researchAreasTr: ['Bilgisayar Bilimleri', 'Makine Öğrenmesi', 'Görüntü İşleme', 'Sağlık Bilişimi'],
    researchAreasEn: ['Computer Science', 'Machine Learning', 'Image Processing', 'Health Informatics'],
    selectedPublications: [
      {
        title: 'Deep learning based automated medical image analysis',
        authors: 'Baygin, M., et al.',
        year: 2021,
        journal: 'Computers in Biology and Medicine',
        tag: 'Derin Öğrenme (Deep Learning)'
      }
    ],
    links: [
      { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=undefined', icon: 'scholar' },
      { name: 'ORCID', url: 'https://orcid.org/0000-0003-4457-5503', icon: 'orcid' }
    ],
    sources: [
      { name: 'Erzurum Teknik Üniversitesi AVESİS', url: 'https://avesis.erzurum.edu.tr' }
    ],
    lastUpdated: '2026-07-28'
  },
  {
    slug: 'omer-faruk-goktas',
    fullName: 'Ömer Faruk Göktaş',
    academicTitle: 'Öğr. Gör. Dr.',
    labRoleTr: 'Akademik İş Birliği / Araştırmacı',
    labRoleEn: 'Academic Collaborator / Researcher',
    institutionTr: 'Ankara Yıldırım Beyazıt Üniversitesi',
    institutionEn: 'Ankara Yıldırım Beyazıt University',
    departmentTr: 'Elektronik ve Otomasyon',
    departmentEn: 'Electronics and Automation',
    photo: '/team/omer-faruk-goktas.jpg',
    bioTr: 'Öğr. Gör. Dr. Ömer Faruk Göktaş, Ankara Yıldırım Beyazıt Üniversitesi Teknik Bilimler MYO Elektronik ve Otomasyon Bölümü\'nde görev almaktadır. Veri bilimi, elektronik sistemler ve otonom süreçler üzerine yoğunlaşan Göktaş, FBMML ekibi ile veri işleme ve makine öğrenmesi uygulamaları konularında araştırma iş birlikleri yürütmektedir.',
    bioEn: 'Lecturer Dr. Ömer Faruk Göktaş works at Ankara Yıldırım Beyazıt University, Vocational School of Technical Sciences, Department of Electronics and Automation. Focusing on data science, electronic systems, and autonomous processes, Göktaş conducts research collaborations with the FBMML team on data processing and machine learning applications.',
    educationTr: [
      'Lisans: Ankara Yıldırım Beyazıt Üniversitesi, Elektronik Mühendisliği (2011 - 2015)',
      'Yüksek Lisans: Fırat Üniversitesi, Yazılım Mühendisliği (2016 - 2018)',
      'Doktora: Ankara Yıldırım Beyazıt Üniversitesi, Elektronik Mühendisliği (2019 - 2023)'
    ],
    educationEn: [
      'BSc: Ankara Yıldırım Beyazıt University, Electronics Engineering (2011 - 2015)',
      'MSc: Firat University, Software Engineering (2016 - 2018)',
      'PhD: Ankara Yıldırım Beyazıt University, Electronics Engineering (2019 - 2023)'
    ],
    researchAreasTr: ['Elektronik', 'Otomasyon', 'Veri Bilimi', 'Makine Öğrenmesi'],
    researchAreasEn: ['Electronics', 'Automation', 'Data Science', 'Machine Learning'],
    selectedPublications: [
      {
        title: 'Advanced automation techniques using machine learning',
        authors: 'Goktas, O. F., et al.',
        year: 2023,
        journal: 'Journal of Electronic Systems',
        tag: 'Otomasyon (Automation)'
      }
    ],
    links: [
      { name: 'AVESİS', url: 'https://avesis.aybu.edu.tr/ofgoktas', icon: 'university' },
      { name: 'ORCID', url: 'https://orcid.org/0000-0002-6072-3097', icon: 'orcid' }
    ],
    sources: [
      { name: 'Ankara Yıldırım Beyazıt Üniversitesi AVESİS', url: 'https://avesis.aybu.edu.tr/ofgoktas' }
    ],
    lastUpdated: '2026-07-28'
  },
  {
    slug: 'burak-tasci',
    fullName: 'Burak Taşcı',
    academicTitle: 'Doç. Dr.',
    labRoleTr: 'Akademik İş Birliği / Araştırmacı',
    labRoleEn: 'Academic Collaborator / Researcher',
    institutionTr: 'Fırat Üniversitesi',
    institutionEn: 'Firat University',
    departmentTr: 'Elektrik ve Enerji Bölümü, Elektrik Programı',
    departmentEn: 'Department of Electricity and Energy, Electricity Program',
    photo: '/team/burak-tasci.png',
    bioTr: 'Doç. Dr. Burak Taşcı, Fırat Üniversitesi Teknik Bilimler Meslek Yüksekokulu, Elektrik ve Enerji Bölümünde görev almaktadır. Uzmanlık alanı yapay zekâ ve derin öğrenme üzerine yoğunlaşmıştır.',
    bioEn: 'Assoc. Prof. Dr. Burak Taşcı works at Firat University, Vocational School of Technical Sciences, Department of Electricity and Energy. His expertise focuses on artificial intelligence and deep learning.',
    educationTr: [
      'Lisans: Fırat Üniversitesi, Elektrik-Elektronik Mühendisliği (2009 - 2013)',
      'Yüksek Lisans: Fırat Üniversitesi, Elektrik-Elektronik Mühendisliği (2014 - 2016)',
      'Doktora: Fırat Üniversitesi, Yapay Zekâ ve Bilgisayar Bilimleri (2017 - 2021)'
    ],
    educationEn: [
      'BSc: Firat University, Electrical and Electronics Engineering (2009 - 2013)',
      'MSc: Firat University, Electrical and Electronics Engineering (2014 - 2016)',
      'PhD: Firat University, Artificial Intelligence and Computer Science (2017 - 2021)'
    ],
    researchAreasTr: ['Yapay Zekâ', 'Derin Öğrenme'],
    researchAreasEn: ['Artificial Intelligence', 'Deep Learning'],
    selectedPublications: [
      {
        title: 'A Hybrid Deep Feature Fusion and CWINCA-Based Classification Framework for Thermal Fault Diagnosis in Photovoltaic Panels',
        authors: 'Taşcı, B., et al.',
        year: 2025,
        journal: 'FUJECE',
        doi: '10.62520/fujece.1757707',
        url: 'https://doi.org/10.62520/fujece.1757707',
        tag: 'Yapay Zekâ (Artificial Intelligence)'
      }
    ],
    links: [
      { name: 'AVESİS', url: 'https://abs.firat.edu.tr/tr/btasci', icon: 'university' }
    ],
    sources: [
      { name: 'Fırat Üniversitesi Akademik Bilgi Sistemi', url: 'https://abs.firat.edu.tr/tr/btasci' }
    ],
    lastUpdated: '2026-07-31'
  },
  {
    slug: 'irem-tasci',
    fullName: 'İrem Taşcı',
    academicTitle: 'Doç. Dr.',
    labRoleTr: 'Akademik İş Birliği / Araştırmacı',
    labRoleEn: 'Academic Collaborator / Researcher',
    institutionTr: 'Fırat Üniversitesi',
    institutionEn: 'Firat University',
    departmentTr: 'Tıp Fakültesi, Nöroloji',
    departmentEn: 'Faculty of Medicine, Neurology',
    photo: '/team/irem-tasci.jpg',
    bioTr: 'Doç. Dr. İrem Taşcı, Fırat Üniversitesi Tıp Fakültesi Dahili Tıp Bilimleri, Nöroloji bölümünde görev almaktadır. Nöroloji alanında uzmanlaşmıştır.',
    bioEn: 'Assoc. Prof. Dr. İrem Taşcı works at Firat University, Faculty of Medicine, Internal Medical Sciences, Department of Neurology. She specializes in Neurology.',
    educationTr: [
      'Lisans (Tıp): Fırat Üniversitesi Tıp Fakültesi (2008 - 2014)',
      'Tıpta Uzmanlık: Fırat Üniversitesi, Nöroloji Anabilim Dalı (2015 - 2019)'
    ],
    educationEn: [
      'MD: Firat University Faculty of Medicine (2008 - 2014)',
      'Specialization: Firat University, Department of Neurology (2015 - 2019)'
    ],
    researchAreasTr: ['Nöroloji', 'Tıp Bilimleri'],
    researchAreasEn: ['Neurology', 'Medical Sciences'],
    selectedPublications: [
      {
        title: 'Association between attention deficit hyperactivity disorder and chronotype in adults with epilepsy',
        authors: 'Taşcı, İ., et al.',
        year: 2025,
        journal: 'Cukurova Medical Journal',
        doi: '10.17826/cumj.1686754',
        url: 'https://doi.org/10.17826/cumj.1686754',
        tag: 'Nöroloji (Neurology)'
      }
    ],
    links: [
      { name: 'AVESİS', url: 'https://abs.firat.edu.tr/tr/itasci', icon: 'university' }
    ],
    sources: [
      { name: 'Fırat Üniversitesi Akademik Bilgi Sistemi', url: 'https://abs.firat.edu.tr/tr/itasci' }
    ],
    lastUpdated: '2026-07-31'
  },
  {
    slug: 'gulay-tasci',
    fullName: 'Gülay Taşcı',
    academicTitle: 'Doç. Dr.',
    labRoleTr: 'Akademik İş Birliği / Araştırmacı',
    labRoleEn: 'Academic Collaborator / Researcher',
    institutionTr: 'Elazığ Fethi Sekin Şehir Hastanesi',
    institutionEn: 'Elazığ Fethi Sekin City Hospital',
    departmentTr: 'Psikiyatri',
    departmentEn: 'Psychiatry',
    photo: '/team/gulay-tasci.png',
    bioTr: 'Doç. Dr. Gülay Taşcı, Elazığ Fethi Sekin Şehir Hastanesi Psikiyatri bölümünde görev almaktadır.',
    bioEn: 'Assoc. Prof. Dr. Gülay Taşcı works at the Psychiatry department of Elazığ Fethi Sekin City Hospital.',
    educationTr: [
      'Lisans (Tıp): Çukurova Üniversitesi Tıp Fakültesi (2007 - 2013)',
      'Tıpta Uzmanlık: Fırat Üniversitesi, Psikiyatri Anabilim Dalı (2014 - 2018)'
    ],
    educationEn: [
      'MD: Çukurova University Faculty of Medicine (2007 - 2013)',
      'Specialization: Firat University, Department of Psychiatry (2014 - 2018)'
    ],
    researchAreasTr: ['Psikiyatri'],
    researchAreasEn: ['Psychiatry'],
    selectedPublications: [
      {
        title: 'Misdiagnosis of Bipolar Disorder: Rare or Frequent?',
        authors: 'Taşcı, G., et al.',
        year: 2023,
        journal: 'Genel Tıp Dergisi',
        doi: '10.54005/geneltip.1178626',
        url: 'https://doi.org/10.54005/geneltip.1178626',
        tag: 'Psikiyatri (Psychiatry)'
      }
    ],
    links: [
      { name: 'Kurum Profili', url: 'https://elazigsehir.saglik.gov.tr/EN-718555/specialist-gulay-tasci.html', icon: 'hospital' },
      { name: 'ORCID', url: 'https://orcid.org/0000-0003-2078-0182', icon: 'orcid' }
    ],
    sources: [
      { name: 'Hastane resmî sayfası', url: 'https://elazigsehir.saglik.gov.tr/EN-718555/specialist-gulay-tasci.html' }
    ],
    lastUpdated: '2026-07-31'
  }
];
