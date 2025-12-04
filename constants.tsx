import { Course, NewsItem, Schedule } from './types';
import { Gamepad2, Code2, Rocket, BrainCircuit, MonitorPlay } from 'lucide-react';

export const COURSES: Course[] = [
  {
    id: 'basic',
    title: 'QUREOプログラミング基礎',
    description: 'マウス操作中心のビジュアル言語で、ゲームを作りながらプログラミングの基礎概念を楽しく学びます。',
    tags: ['小2〜', 'ビジュアル言語'],
    color: 'bg-cyan-100 border-cyan-400 text-cyan-800',
    icon: 'monitor'
  },
  {
    id: 'advanced',
    title: 'QUREOプログラミング応用',
    description: '本格的なコーディング（HTML/JS）への橋渡し。プログラミング能力検定の合格を目指します。',
    tags: ['中高生', '検定対応'],
    color: 'bg-blue-100 border-blue-400 text-blue-800',
    icon: 'code'
  },
  {
    id: 'ai-lab',
    title: '【AIゲーム開発ラボ】プロジェクトコース',
    description: 'キミが「監督」になり、生成AIを使いこなしてオリジナルゲームを開発！「Minecraft」や「Roblox」、「UEFN」を使った本格3Dゲーム制作もこのコースで学べます。',
    tags: ['基礎修了者〜', '生成AI', 'Minecraft', 'Roblox', 'UEFN'],
    isAi: true,
    color: 'bg-neo-yellow border-orange-400 text-orange-900',
    icon: 'brain'
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  { id: '1', date: '2024.05.20', title: '【合格速報】プログラミング能力検定 レベル4に2名合格！', category: '検定' },
  { id: '2', date: '2024.05.15', title: 'マインクラフトカップ2024 エントリー開始しました', category: 'コンテスト' },
  { id: '3', date: '2024.05.01', title: 'ゴールデンウィーク期間の休校について', category: 'お知らせ' },
];

export const SCHEDULES: Record<string, Schedule> = {
  oita: {
    location: '大分校',
    days: ['木', '土'],
    hours: '16:00 - 19:00 (土曜は10:00-15:00)',
    address: '〒870-0037 大分県大分市東春日町１７−２１ ソフトパーク敷地 内 IVY大分高度コンピュータ専門学校 1階',
    mapUrl: 'https://maps.google.com'
  },
  beppu: {
    location: '別府校',
    days: ['火', '水', '土'],
    hours: '16:00 - 19:00 (土曜は10:00-17:00)',
    address: '〒874-0022 大分県別府市亀川東町２７−２２ 堀文 2階',
    mapUrl: 'https://maps.google.com'
  }
};

export const PRICE_LIST = [
  { name: '入会金', price: '10,000円' },
  { name: '月謝 (月4回)', price: '11,000円' },
  { name: '月謝 (月8回)', price: '19,800円' },
];