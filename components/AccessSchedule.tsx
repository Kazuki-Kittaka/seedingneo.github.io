import React, { useState } from 'react';
import { SCHEDULES, PRICE_LIST } from '../constants';
import { SchoolLocation } from '../types';
import { MapPin, Clock } from 'lucide-react';

const AccessSchedule: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SchoolLocation>('oita');

  const activeSchedule = SCHEDULES[activeTab];

  return (
    <section className="py-24 bg-neo-lime/20 relative" id="access">
       {/* Background pattern */}
       <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-slate-800">
          スケジュール・アクセス
        </h2>

        {/* Price List */}
        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-xl p-8 mb-16 border-4 border-white relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-4 bg-neo-lime-accent/50"></div>
            <h3 className="text-xl font-bold text-center mb-10 text-slate-700 bg-slate-100 inline-block px-8 py-3 rounded-full mx-auto block w-max">料金について（全コース共通）</h3>
            
            {/* Custom Layout: Entrance fee top, Monthly fees side-by-side */}
            <div className="flex flex-col items-center gap-6 md:gap-8">
                
                {/* Entrance Fee (Top) */}
                {PRICE_LIST.length > 0 && (
                     <div className="w-full sm:w-80 bg-orange-50/50 rounded-2xl p-6 text-center border-2 border-orange-100 flex flex-col justify-center items-center hover:bg-orange-50 transition-colors shadow-sm">
                        <div className="text-sm font-bold text-slate-500 mb-3">{PRICE_LIST[0].name}</div>
                        <div className="text-2xl md:text-3xl font-black text-neo-orange tracking-tight">{PRICE_LIST[0].price}</div>
                    </div>
                )}

                {/* Monthly Fees (Bottom Row) */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-8 w-full">
                    {PRICE_LIST.slice(1).map((item, idx) => (
                         <div key={idx} className="w-full sm:w-64 bg-slate-50 rounded-2xl p-6 text-center border-2 border-slate-100 flex flex-col justify-center items-center hover:bg-yellow-50 transition-colors shadow-sm">
                            <div className="text-sm font-bold text-slate-500 mb-3">{item.name}</div>
                            <div className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">{item.price}</div>
                        </div>
                    ))}
                </div>
            </div>

            <p className="text-xs text-center text-slate-400 mt-8 font-medium">※教材費等はコースにより異なります。詳細はお問い合わせください。</p>
        </div>

        {/* Tabs */}
        <div className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-6 gap-4 md:gap-8">
                <button
                    onClick={() => setActiveTab('oita')}
                    className={`px-6 md:px-10 py-3 md:py-4 rounded-full font-black text-lg transition-all duration-300 transform border-4 ${
                        activeTab === 'oita' 
                        ? 'bg-neo-orange border-neo-orange text-white shadow-[0_6px_0_#d97706] translate-y-[-2px]' 
                        : 'bg-white border-white text-slate-400 hover:bg-orange-50 hover:border-orange-100'
                    }`}
                >
                    大分校
                </button>
                <button
                    onClick={() => setActiveTab('beppu')}
                    className={`px-6 md:px-10 py-3 md:py-4 rounded-full font-black text-lg transition-all duration-300 transform border-4 ${
                        activeTab === 'beppu' 
                        ? 'bg-neo-cyan border-neo-cyan text-white shadow-[0_6px_0_#1e9e92] translate-y-[-2px]' 
                        : 'bg-white border-white text-slate-400 hover:bg-cyan-50 hover:border-cyan-100'
                    }`}
                >
                    別府校
                </button>
            </div>

            {/* Content Area - Animated Switch */}
            <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden animate-pop key={activeTab} border-4 border-white relative">
                <div className="flex flex-col md:flex-row">
                    
                    {/* Info Side */}
                    <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                        <h3 className="text-3xl font-black text-slate-800 mb-8 flex items-center gap-3">
                            <span className="w-3 h-8 bg-neo-yellow rounded-full"></span>
                            {activeSchedule.location}
                        </h3>
                        
                        <div className="space-y-8">
                            <div className="flex items-start gap-5">
                                <div className="bg-cyan-100 p-4 rounded-2xl text-neo-cyan">
                                    <Clock size={24} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-700 mb-2">開校時間</h4>
                                    <p className="text-slate-600 font-bold text-lg mb-2">{activeSchedule.hours}</p>
                                    <div className="flex gap-2 flex-wrap">
                                        {['月','火','水','木','金','土','日'].map(day => (
                                            <span key={day} className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-black shadow-sm ${
                                                activeSchedule.days.includes(day) 
                                                ? 'bg-neo-cyan text-white' 
                                                : 'bg-slate-100 text-slate-300'
                                            }`}>
                                                {day}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="bg-orange-100 p-4 rounded-2xl text-neo-orange">
                                    <MapPin size={24} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-700 mb-2">住所</h4>
                                    <p className="text-slate-600 font-bold">{activeSchedule.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Side */}
                    <div className="md:w-1/2 bg-slate-200 min-h-[350px] relative group overflow-hidden md:rounded-l-[2rem]">
                        {/* Map Placeholder */}
                        <img 
                            src={activeTab === 'oita' ? "https://picsum.photos/800/600?random=10" : "https://picsum.photos/800/600?random=20"} 
                            alt="Map" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20 flex items-center justify-center">
                             <a 
                                href={activeSchedule.mapUrl} 
                                target="_blank" 
                                rel="noreferrer"
                                className="bg-white px-8 py-4 rounded-full font-black text-slate-800 shadow-[0_4px_0_rgba(0,0,0,0.1)] hover:scale-110 transition-transform flex items-center gap-3"
                             >
                                <MapPin size={20} className="text-red-500" />
                                Google Mapで見る
                             </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AccessSchedule;