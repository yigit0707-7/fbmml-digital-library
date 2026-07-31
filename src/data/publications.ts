export interface CollaborativePublication {
  id: string;
  title: string;
  authors: string[];
  year: number;
  journal: string;
  doi?: string;
  url?: string;
  tag: string;
  relatedTeamMembers: string[];
}

export const collaborativePublications: CollaborativePublication[] = [
  {
    id: 'pub1',
    title: 'Automated accurate emotion classification using Clefia pattern-based features with EEG signals',
    authors: ['Tuncer, T.', 'Dogan, S.', 'Ozyurt, F.'],
    year: 2022,
    journal: 'Cognitive Neurodynamics',
    url: 'https://link.springer.com/article/10.1007/s11571-022-09789-2',
    tag: 'Duygu Sınıflandırma (Emotion Classification)',
    relatedTeamMembers: ['sengul-dogan', 'turker-tuncer']
  },
  {
    id: 'pub2',
    title: 'Epilepsy attacks recognition based on 1D octal pattern, wavelet transform and EEG signals',
    authors: ['Dogan, S.', 'Tuncer, T.'],
    year: 2021,
    journal: 'Expert Systems with Applications',
    tag: 'Epilepsi Tespiti (Epilepsy Detection)',
    relatedTeamMembers: ['sengul-dogan', 'turker-tuncer']
  },
  {
    id: 'pub3',
    title: 'A new dataset for EEG abnormality detection MTOUH',
    authors: ['Tuncer, T.', 'Dogan, S.', 'et al.'],
    year: 2022,
    journal: 'Turkish Journal of Electrical Engineering and Computer Sciences',
    url: 'https://dergipark.org.tr/en/pub/tjeecs/issue/75429/1179619',
    tag: 'Veri Kümesi (Dataset)',
    relatedTeamMembers: ['sengul-dogan', 'turker-tuncer']
  },
  {
    id: 'pub4',
    title: 'TATPat based explainable EEG model for neonatal seizure detection',
    authors: ['Dogan, S.', 'Tuncer, T.'],
    year: 2024,
    journal: 'Scientific Reports',
    url: 'https://www.nature.com/articles/s41598-024-54707-1',
    tag: 'Açıklanabilir YZ (Explainable AI)',
    relatedTeamMembers: ['sengul-dogan', 'turker-tuncer']
  }
];
