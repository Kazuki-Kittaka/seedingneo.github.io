import React, { useState } from 'react';
import { NEWS_ITEMS } from '../constants';
import { NewsItem } from '../types';
import { Megaphone, Instagram, ExternalLink, Lock, Unlock, Plus, Trash2, LogOut, Edit, X, Save } from 'lucide-react';

const Information: React.FC = () => {
  // Initialize state with default news items
  const [news, setNews] = useState<NewsItem[]>(NEWS_ITEMS);
  
  // Admin Authentication State
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState('');

  // Form State
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<NewsItem['category']>('お知らせ');
  const [editingId, setEditingId] = useState<string | null>(null);

  // --- Admin Logic ---

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check (In a real app, this must be done on a backend server!)
    if (password === 'admin') {
      setIsAdmin(true);
      setShowLogin(false);
      setPassword('');
    } else {
      alert('パスワードが違います');
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    resetForm();
  };

  const resetForm = () => {
    setNewTitle('');
    setNewCategory('お知らせ');
    setEditingId(null);
  };

  const handleEditClick = (item: NewsItem) => {
    setEditingId(item.id);
    setNewTitle(item.title);
    setNewCategory(item.category);
    // Scroll to form if needed, or just focus (optional)
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    if (editingId) {
      // --- Update Existing Item ---
      setNews((prev) => 
        prev.map((item) => 
          item.id === editingId 
            ? { ...item, title: newTitle, category: newCategory } 
            : item
        )
      );
      alert('記事を修正しました');
      resetForm();

    } else {
      // --- Add New Item ---
      const today = new Date();
      const dateStr = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;

      const newItem: NewsItem = {
        id: Date.now().toString(),
        date: dateStr,
        title: newTitle,
        category: newCategory,
      };

      // Add new item to the top, and keep only the latest 5 items
      setNews((prev) => {
        const updated = [newItem, ...prev];
        return updated.slice(0, 5); // Limit to 5
      });
      alert('お知らせを投稿しました');
      resetForm();
    }
  };

  const handleDeleteNews = (id: string) => {
    if (window.confirm('本当にこの記事を削除しますか？\n（この操作は元に戻せません）')) {
      setNews((prev) => prev.filter(item => item.id !== id));
      // If we were editing this item, reset the form
      if (editingId === id) {
        resetForm();
      }
    }
  };

  return (
    <section className="py-20 bg-white border-t border-slate-100 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* News Section */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2">
                <Megaphone className="text-neo-orange" />
                先生からのお知らせ
                </h2>
                
                {/* Admin Toggle Button */}
                {isAdmin ? (
                    <button onClick={handleLogout} className="text-xs bg-slate-200 hover:bg-slate-300 text-slate-600 px-3 py-1 rounded-full flex items-center gap-1 transition-colors">
                        <LogOut size={12} /> ログアウト
                    </button>
                ) : (
                    <button onClick={() => setShowLogin(!showLogin)} className="text-slate-300 hover:text-slate-400 transition-colors">
                        <Lock size={16} />
                    </button>
                )}
            </div>

            {/* Admin Login Form */}
            {showLogin && !isAdmin && (
                <form onSubmit={handleLogin} className="mb-6 bg-slate-100 p-4 rounded-xl border-2 border-slate-200 animate-pop">
                    <p className="text-sm font-bold text-slate-600 mb-2">先生用ログイン</p>
                    <div className="flex gap-2">
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="パスワード (admin)" 
                            className="flex-1 px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-neo-cyan"
                        />
                        <button type="submit" className="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-700">
                            <Unlock size={16} />
                        </button>
                    </div>
                </form>
            )}

            {/* Admin Post/Edit Form */}
            {isAdmin && (
                <div className={`mb-8 p-6 rounded-2xl border-2 animate-pop transition-colors ${editingId ? 'bg-blue-50 border-blue-100' : 'bg-orange-50 border-orange-100'}`}>
                    <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${editingId ? 'text-blue-800' : 'text-slate-800'}`}>
                        {editingId ? (
                            <>
                                <Edit className="bg-blue-500 text-white rounded-full p-1" size={24} />
                                記事を編集モード
                            </>
                        ) : (
                            <>
                                <Plus className="bg-neo-orange text-white rounded-full p-1" size={24} />
                                新しいお知らせを投稿
                            </>
                        )}
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <select 
                                value={newCategory}
                                onChange={(e) => setNewCategory(e.target.value as any)}
                                className="px-4 py-3 rounded-xl border-2 border-white shadow-sm font-bold text-slate-600 focus:outline-none focus:ring-2 focus:ring-neo-orange"
                            >
                                <option value="お知らせ">お知らせ</option>
                                <option value="検定">検定</option>
                                <option value="コンテスト">コンテスト</option>
                            </select>
                            <input 
                                type="text"
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                                placeholder="タイトルを入力してください"
                                className="flex-1 px-4 py-3 rounded-xl border-2 border-white shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-neo-orange"
                                required
                            />
                        </div>
                        <div className="flex justify-end gap-3">
                            {editingId && (
                                <button 
                                    type="button" 
                                    onClick={resetForm}
                                    className="px-4 py-2 rounded-full font-bold text-slate-500 hover:bg-slate-200 transition-colors flex items-center gap-1"
                                >
                                    <X size={18} /> キャンセル
                                </button>
                            )}
                            <button 
                                type="submit" 
                                className={`text-white font-black px-6 py-2 rounded-full shadow-md hover:translate-y-[2px] hover:shadow-sm active:translate-y-[4px] active:shadow-none transition-all flex items-center gap-2
                                    ${editingId 
                                        ? 'bg-blue-500 shadow-[0_4px_0_#2563eb] hover:shadow-[0_2px_0_#2563eb]' 
                                        : 'bg-neo-orange shadow-[0_4px_0_#d97706] hover:shadow-[0_2px_0_#d97706]'
                                    }`}
                            >
                                {editingId ? (
                                    <>
                                        <Save size={18} /> 変更を保存
                                    </>
                                ) : (
                                    '投稿する'
                                )}
                            </button>
                        </div>
                        {!editingId && (
                             <p className="text-xs text-slate-400 text-right mt-2">
                                ※最大5件まで表示されます。それを超えると古い記事から自動削除されます。
                            </p>
                        )}
                    </form>
                </div>
            )}

            {/* News List */}
            <div className="bg-slate-50 rounded-3xl p-6 shadow-inner h-full min-h-[300px]">
              <ul className="space-y-4">
                {news.length === 0 ? (
                    <li className="text-center text-slate-400 py-10">お知らせはありません</li>
                ) : (
                    news.map((item) => (
                    <li key={item.id} className={`flex flex-col sm:flex-row gap-2 sm:items-center border-b border-slate-200 pb-4 last:border-0 last:pb-0 group transition-colors p-2 rounded-lg ${editingId === item.id ? 'bg-blue-50' : 'hover:bg-white'}`}>
                        <div className="flex items-center gap-3">
                            <span className={`text-xs font-bold px-2 py-1 rounded text-white min-w-[80px] text-center
                                ${item.category === '検定' ? 'bg-blue-500' : 
                                item.category === 'コンテスト' ? 'bg-purple-500' : 'bg-neo-orange'
                                }`}>
                                {item.category}
                            </span>
                            <span className="text-xs text-slate-400 font-mono">{item.date}</span>
                        </div>
                        <div className="flex-1 flex justify-between items-start sm:items-center gap-4">
                            <span className="text-slate-700 text-sm sm:text-base font-medium line-clamp-1">
                                {item.title}
                            </span>
                            
                            {/* Admin Controls */}
                            {isAdmin && (
                                <div className="flex items-center gap-1 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button 
                                        onClick={() => handleEditClick(item)}
                                        className="p-1.5 text-blue-400 hover:text-white hover:bg-blue-500 rounded-lg transition-all"
                                        title="編集"
                                    >
                                        <Edit size={16} />
                                    </button>
                                    <button 
                                        onClick={() => handleDeleteNews(item.id)}
                                        className="p-1.5 text-slate-300 hover:text-white hover:bg-red-500 rounded-lg transition-all"
                                        title="削除"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            )}
                        </div>
                    </li>
                    ))
                )}
              </ul>
            </div>
          </div>

          {/* Instagram Section */}
          <div className="lg:w-1/3">
            <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-2">
              <Instagram className="text-pink-500" />
              教室の様子
            </h2>
            <a 
              href="https://www.instagram.com/seedingneo_programming/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-3xl p-1 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
               <div className="bg-white rounded-[1.4rem] p-6 h-full flex flex-col items-center justify-center text-center gap-4 relative overflow-hidden">
                   {/* Background Decor */}
                   <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-full blur-2xl -mr-16 -mt-16 opacity-50"></div>
                   
                   <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center text-pink-500 mb-2 group-hover:scale-110 transition-transform">
                       <Instagram size={32} />
                   </div>
                   
                   <div>
                       <p className="font-bold text-slate-800 text-lg">SeedingNeo公式</p>
                       <p className="text-slate-500 text-sm font-medium">@seedingneo_programming</p>
                   </div>
                   
                   <div className="flex items-center gap-2 text-pink-600 font-bold text-sm bg-pink-50 px-4 py-2 rounded-full mt-2 group-hover:bg-pink-100 transition-colors">
                       Instagramを見る <ExternalLink size={14} />
                   </div>
               </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Information;