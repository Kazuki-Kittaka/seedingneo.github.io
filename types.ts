export interface Course {
  id: string;
  title: string;
  description: string;
  tags: string[];
  isNew?: boolean;
  isAi?: boolean;
  color: string;
  icon: 'code' | 'gamepad' | 'rocket' | 'brain' | 'monitor';
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  category: '検定' | 'コンテスト' | 'お知らせ';
}

export interface Schedule {
  location: string;
  days: string[];
  hours: string;
  address: string;
  mapUrl: string; // Placeholder for map link
}

export type SchoolLocation = 'oita' | 'beppu';