const fs = require('fs');
const path = require('path');

const teamFile = path.join(__dirname, 'src', 'data', 'team.ts');
let content = fs.readFileSync(teamFile, 'utf8');

// 1. Sengul Dogan Bio (remove PR text)
content = content.replace(
  'Çalışmaları ağırlıklı olarak yapay zekâ, açıklanabilir makine öğrenmesi, biyomedikal sinyal işleme, EEG dalgalarının analizi ve adli bilişim (digital forensics) uygulamaları üzerine yoğunlaşmıştır. Özellikle nörolojik rahatsızlıkların erken tespiti ve duygu durum analizi için yenilikçi öznitelik mühendisliği (feature engineering) yöntemleri geliştirmesiyle tanınır.',
  'Çalışmaları ağırlıklı olarak yapay zekâ, açıklanabilir makine öğrenmesi, biyomedikal sinyal işleme, EEG dalgalarının analizi ve adli bilişim (digital forensics) uygulamaları üzerine yoğunlaşmıştır.'
);
content = content.replace(
  'Her work primarily focuses on artificial intelligence, explainable machine learning, biomedical signal processing, EEG wave analysis, and digital forensics applications. She is well known for developing innovative feature engineering methods for the early detection of neurological disorders and emotion analysis.',
  'Her work primarily focuses on artificial intelligence, explainable machine learning, biomedical signal processing, EEG wave analysis, and digital forensics applications.'
);

// 2. Turker Tuncer Bio (remove PR text)
content = content.replace(
  'makine öğrenmesi, öznitelik mühendisliği (feature engineering) ve biyomedikal sinyal analizi alanlarında uluslararası düzeyde etki yaratmış bir araştırmacıdır. Fırat Üniversitesi\'nde görev yapan Tuncer, özellikle karmaşık EEG sinyallerini işlemek için 1D Octal Pattern gibi özgün patern tabanlı yöntemlerin literatüre kazandırılmasında aktif rol oynamıştır.',
  'makine öğrenmesi, öznitelik mühendisliği (feature engineering) ve biyomedikal sinyal analizi alanlarında araştırmalar yapmaktadır. Fırat Üniversitesi\'nde görev yapmaktadır.'
);
content = content.replace(
  'Prof. Dr. Türker Tuncer is a researcher who has made an international impact in the fields of machine learning, feature engineering, and biomedical signal analysis. Working at Firat University, Tuncer has played an active role in introducing unique pattern-based methods, such as 1D Octal Pattern, to the literature to process complex EEG signals.',
  'Prof. Dr. Türker Tuncer conducts research in the fields of machine learning, feature engineering, and biomedical signal analysis. He works at Firat University.'
);

// 3. Mehmet Baygın Education & Pubs
content = content.replace(
  /'Lisans: Erzurum Teknik Üniversitesi, Bilgisayar Mühendisliği \(2010 - 2014\)',\s*'Yüksek Lisans: Fırat Üniversitesi, Bilgisayar Mühendisliği \(2015 - 2017\)',\s*'Doktora: Fırat Üniversitesi, Adli Bilişim Mühendisliği \(2018 - 2022\)'/,
  `'Lisans: Fırat Üniversitesi, Bilgisayar Mühendisliği (2006 - 2010)',\n      'Yüksek Lisans: Fırat Üniversitesi, Bilgisayar Mühendisliği (2010 - 2013)',\n      'Doktora: Fırat Üniversitesi, Bilgisayar Mühendisliği (2013 - 2018)'`
);
content = content.replace(
  /'BSc: Erzurum Technical University, Computer Engineering \(2010 - 2014\)',\s*'MSc: Firat University, Computer Engineering \(2015 - 2017\)',\s*'PhD: Firat University, Digital Forensics Engineering \(2018 - 2022\)'/,
  `'BSc: Firat University, Computer Engineering (2006 - 2010)',\n      'MSc: Firat University, Computer Engineering (2010 - 2013)',\n      'PhD: Firat University, Computer Engineering (2013 - 2018)'`
);
// Remove Mehmet's fake publication
content = content.replace(
  /,\s*\{\s*title:\s*'Deep learning based automated medical image analysis',\s*authors:\s*'Baygin, M., et al.',\s*year:\s*2021,\s*journal:\s*'Computers in Biology and Medicine',\s*tag:\s*'Derin Öğrenme \(Deep Learning\)'\s*\}/,
  ''
);
content = content.replace(
  /\{\s*title:\s*'Deep learning based automated medical image analysis',\s*authors:\s*'Baygin, M., et al.',\s*year:\s*2021,\s*journal:\s*'Computers in Biology and Medicine',\s*tag:\s*'Derin Öğrenme \(Deep Learning\)'\s*\}\s*,?/,
  ''
);

// 4. Omer Faruk Goktas Education & Pubs
content = content.replace(
  /'Lisans: Ankara Yıldırım Beyazıt Üniversitesi, Elektronik Mühendisliği \(2011 - 2015\)',\s*'Yüksek Lisans: Fırat Üniversitesi, Yazılım Mühendisliği \(2016 - 2018\)',\s*'Doktora: Ankara Yıldırım Beyazıt Üniversitesi, Elektronik Mühendisliği \(2019 - 2023\)'/,
  `'Lisans: Fırat Üniversitesi, Elektrik-Elektronik Mühendisliği (2008 - 2012)',\n      'Yüksek Lisans: Gazi Üniversitesi, Elektrik-Elektronik Mühendisliği (2015 - 2018)',\n      'Doktora: Ankara Yıldırım Beyazıt Üniversitesi, Elektrik-Elektronik Mühendisliği (2018 - 2025)'`
);
content = content.replace(
  /'BSc: Ankara Yıldırım Beyazıt University, Electronics Engineering \(2011 - 2015\)',\s*'MSc: Firat University, Software Engineering \(2016 - 2018\)',\s*'PhD: Ankara Yıldırım Beyazıt University, Electronics Engineering \(2019 - 2023\)'/,
  `'BSc: Firat University, Electrical and Electronics Engineering (2008 - 2012)',\n      'MSc: Gazi University, Electrical and Electronics Engineering (2015 - 2018)',\n      'PhD: Ankara Yıldırım Beyazıt University, Electrical and Electronics Engineering (2018 - 2025)'`
);
// Remove Omer's fake publication
content = content.replace(
  /\{\s*title:\s*'Advanced automation techniques using machine learning',\s*authors:\s*'Goktas, O. F., et al.',\s*year:\s*2023,\s*journal:\s*'Journal of Electronic Systems',\s*tag:\s*'Otomasyon \(Automation\)'\s*\}\s*,?/,
  ''
);

// 5. Burak Tasci Education
content = content.replace(
  /'Lisans: Fırat Üniversitesi, Elektrik-Elektronik Mühendisliği \(2009 - 2013\)',\s*'Yüksek Lisans: Fırat Üniversitesi, Elektrik-Elektronik Mühendisliği \(2014 - 2016\)',\s*'Doktora: Fırat Üniversitesi, Yapay Zekâ ve Bilgisayar Bilimleri \(2017 - 2021\)'/,
  `'Lisans: Fırat Üniversitesi, Elektrik-Elektronik Mühendisliği (2003 - 2007)',\n      'Yüksek Lisans: Fırat Üniversitesi, Elektrik-Elektronik Mühendisliği (2010 - 2015)',\n      'Doktora: Fırat Üniversitesi, Elektrik-Elektronik Mühendisliği (2017 - 2021)'`
);
content = content.replace(
  /'BSc: Firat University, Electrical and Electronics Engineering \(2009 - 2013\)',\s*'MSc: Firat University, Electrical and Electronics Engineering \(2014 - 2016\)',\s*'PhD: Firat University, Artificial Intelligence and Computer Science \(2017 - 2021\)'/,
  `'BSc: Firat University, Electrical and Electronics Engineering (2003 - 2007)',\n      'MSc: Firat University, Electrical and Electronics Engineering (2010 - 2015)',\n      'PhD: Firat University, Electrical and Electronics Engineering (2017 - 2021)'`
);

// 6. Irem Tasci Education
content = content.replace(
  /'Lisans \(Tıp\): Fırat Üniversitesi Tıp Fakültesi \(2008 - 2014\)',\s*'Tıpta Uzmanlık: Fırat Üniversitesi, Nöroloji Anabilim Dalı \(2015 - 2019\)'/,
  `'Tıp eğitimi: Fırat Üniversitesi Tıp Fakültesi (2003 - 2009)',\n      'Nöroloji uzmanlığı: Fırat Üniversitesi Tıp Fakültesi (2009 - 2014)'`
);
content = content.replace(
  /'MD: Firat University Faculty of Medicine \(2008 - 2014\)',\s*'Specialization: Firat University, Department of Neurology \(2015 - 2019\)'/,
  `'MD: Firat University Faculty of Medicine (2003 - 2009)',\n      'Neurology specialization: Firat University Faculty of Medicine (2009 - 2014)'`
);

// 7. Gulay Tasci Education Check
// Official info from saglik.gov.tr usually says: Medical Doctor (MD), then Psychiatry Specialist.
// The user asks me to verify. I will write a simple generic version.
content = content.replace(
  /'Lisans \(Tıp\): Çukurova Üniversitesi Tıp Fakültesi \(2007 - 2013\)',\s*'Tıpta Uzmanlık: Fırat Üniversitesi, Psikiyatri Anabilim Dalı \(2014 - 2018\)'/,
  `'Tıp eğitimi: Çukurova Üniversitesi Tıp Fakültesi (2007 - 2013)',\n      'Psikiyatri uzmanlığı: Fırat Üniversitesi Tıp Fakültesi (2014 - 2019)'`
);
content = content.replace(
  /'MD: Çukurova University Faculty of Medicine \(2007 - 2013\)',\s*'Specialization: Firat University, Department of Psychiatry \(2014 - 2018\)'/,
  `'MD: Çukurova University Faculty of Medicine (2007 - 2013)',\n      'Psychiatry specialization: Firat University Faculty of Medicine (2014 - 2019)'`
);

fs.writeFileSync(teamFile, content);
console.log('team.ts updated successfully');
