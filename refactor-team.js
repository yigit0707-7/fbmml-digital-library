const fs = require('fs');
const path = require('path');

const teamFile = path.join(__dirname, 'src', 'data', 'team.ts');
let content = fs.readFileSync(teamFile, 'utf8');

// Update Mehmet Baygın bios
content = content.replace(
  'Turkish Brain Team (TBT) ile sürdürdüğü akademik iş birlikleri kapsamında makine öğrenmesi, medikal yapay zekâ uygulamaları ve özellik mühendisliği konularında önemli projelere imza atmaktadır.',
  'Akademik çalışmaları makine öğrenmesi, yapay zekâ, biyomedikal veri analizi, sinyal ve görüntü işleme ile özellik mühendisliği alanlarına odaklanmaktadır.'
);
content = content.replace(
  'Within the scope of his academic collaborations with the Turkish Brain Team (TBT), he undertakes significant projects in machine learning, medical artificial intelligence applications, and feature engineering.',
  'His academic studies focus on machine learning, artificial intelligence, biomedical data analysis, signal and image processing, and feature engineering.'
);

// Update Ömer Faruk Göktaş bios
content = content.replace(
  'TBT ekibi ile veri işleme ve makine öğrenmesi uygulamaları konularında araştırma iş birlikleri yürütmektedir.',
  'Akademik çalışmaları veri bilimi, elektronik sistemler, makine öğrenmesi ve otonom süreçler üzerine yoğunlaşmaktadır.'
);
content = content.replace(
  'Göktaş conducts research collaborations with the TBT team on data processing and machine learning applications.',
  'His academic studies focus on data science, electronic systems, machine learning, and autonomous processes.'
);

// Update Links block
content = content.replace(/links:\s*\[([\s\S]*?)\],\s*sources:\s*\[([\s\S]*?)\],/g, (match, linksStr, sourcesStr) => {
  let newLinks = `links: {`;
  
  if (linksStr.includes('avesis.aybu.edu.tr')) {
    newLinks += `\n      academicProfile: 'https://avesis.aybu.edu.tr/ofgoktas',`;
    newLinks += `\n      academicProfileLabelTr: 'AVESİS',`;
    newLinks += `\n      academicProfileLabelEn: 'AVESİS',`;
  } else if (linksStr.includes('abs.firat.edu.tr/tr/btasci')) {
    newLinks += `\n      academicProfile: 'https://abs.firat.edu.tr/tr/btasci',`;
    newLinks += `\n      academicProfileLabelTr: 'Fırat ABS',`;
    newLinks += `\n      academicProfileLabelEn: 'Academic Profile',`;
  } else if (linksStr.includes('abs.firat.edu.tr/tr/itasci')) {
    newLinks += `\n      academicProfile: 'https://abs.firat.edu.tr/tr/itasci',`;
    newLinks += `\n      academicProfileLabelTr: 'Fırat ABS',`;
    newLinks += `\n      academicProfileLabelEn: 'Academic Profile',`;
  } else if (linksStr.includes('avesis.firat.edu.tr/turkertuncer')) {
    newLinks += `\n      academicProfile: 'https://avesis.firat.edu.tr/turkertuncer',`;
    newLinks += `\n      academicProfileLabelTr: 'AVESİS',`;
    newLinks += `\n      academicProfileLabelEn: 'AVESİS',`;
  } else if (linksStr.includes('avesis.firat.edu.tr/sengul')) {
    newLinks += `\n      academicProfile: 'https://avesis.firat.edu.tr/sengul',`;
    newLinks += `\n      academicProfileLabelTr: 'AVESİS',`;
    newLinks += `\n      academicProfileLabelEn: 'AVESİS',`;
  } else if (linksStr.includes('elazigsehir.saglik.gov.tr/EN-718555/specialist-gulay-tasci.html')) {
    newLinks += `\n      academicProfile: 'https://elazigsehir.saglik.gov.tr/EN-718555/specialist-gulay-tasci.html',`;
    newLinks += `\n      academicProfileLabelTr: 'Kurum Profili',`;
    newLinks += `\n      academicProfileLabelEn: 'Academic Profile',`;
  }

  // Parse scholar
  const scholarMatch = linksStr.match(/url:\s*'([^']*(?:scholar\.google|google\.com\/citations)[^']*)'/);
  if (scholarMatch && !scholarMatch[1].includes('undefined')) newLinks += `\n      scholar: '${scholarMatch[1]}',`;
  
  // Parse orcid
  const orcidMatch = linksStr.match(/url:\s*'([^']*(?:orcid\.org)[^']*)'/);
  if (orcidMatch && !orcidMatch[1].includes('undefined')) newLinks += `\n      orcid: '${orcidMatch[1]}',`;

  newLinks += `\n    },`;
  return newLinks;
});

// Also update the interface
content = content.replace(/links:\s*\{\s*name:\s*string;\s*url:\s*string;\s*icon:\s*string;\s*\}\[\];/, 
`links: {
    academicProfile?: string;
    academicProfileLabelTr?: string;
    academicProfileLabelEn?: string;
    scholar?: string;
    orcid?: string;
    researchGate?: string;
    linkedin?: string;
  };`);
content = content.replace(/sources:\s*\{\s*name:\s*string;\s*url:\s*string;\s*\}\[\];/g, '');

fs.writeFileSync(teamFile, content);
console.log('team.ts updated successfully');
