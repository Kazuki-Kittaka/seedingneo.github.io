import React from 'react';
import { COURSES } from '../constants';
import { MonitorPlay, Code2, Gamepad2, Rocket, BrainCircuit, Sparkles, Star, Lightbulb } from 'lucide-react';

const iconMap = {
  monitor: MonitorPlay,
  code: Code2,
  gamepad: Gamepad2,
  rocket: Rocket,
  brain: BrainCircuit
};

const Courses: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="courses">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-4 text-slate-800">
          コース紹介
        </h2>
        <p className="text-center text-slate-500 mb-16 font-bold flex items-center justify-center gap-2">
           <span className="w-2 h-2 rounded-full bg-neo-pink"></span>
           やりたいこと・年齢に合わせて選べるコース
           <span className="w-2 h-2 rounded-full bg-neo-cyan"></span>
        </p>

        {/* Updated grid to use 2 columns on LG to keep QUREO courses symmetrical */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {COURSES.map((course) => {
            const Icon = iconMap[course.icon];
            
            // Special styling for AI course - Pop & Colorful Playground Style
            if (course.isAi) {
              return (
                <div key={course.id} className="md:col-span-2 bg-gradient-to-br from-[#FFF8E7] via-[#FFF0F5] to-[#E0F7FA] rounded-[3rem] p-3 relative overflow-hidden group shadow-2xl hover:-translate-y-2 transition-all duration-300 border-8 border-white ring-4 ring-neo-yellow/50">
                  {/* Decorative Background Blobs */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-neo-yellow/30 rounded-full blur-3xl opacity-60 -mr-20 -mt-20 animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-neo-pink/20 rounded-full blur-3xl opacity-60 -ml-20 -mb-20 animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-neo-cyan/10 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2"></div>
                  
                  {/* Pattern */}
                  <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none"></div>

                  <div className="relative rounded-[2.5rem] p-6 md:p-10 h-full flex flex-col lg:flex-row gap-8 items-center z-10">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 bg-white text-neo-orange text-sm font-black px-4 py-2 rounded-full mb-6 shadow-md transform -rotate-2 border-2 border-neo-orange/20">
                            <Sparkles size={16} className="text-neo-yellow" fill="currentColor" />
                            最先端をあそびつくそう！
                        </div>
                        <h3 className="text-3xl md:text-5xl font-black text-slate-800 mb-6 drop-shadow-sm tracking-tight leading-tight">
                            {course.title.split('】').map((part, i) => (
                                i === 0 ? <span key={i} className="text-neo-pink block text-2xl md:text-3xl mb-2">{part}】</span> : <span key={i}>{part}</span>
                            ))}
                        </h3>
                        <p className="text-slate-700 mb-8 leading-relaxed font-bold text-lg bg-white/60 backdrop-blur-sm p-4 rounded-2xl inline-block">
                            {course.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-3 mb-6">
                             {/* Major Game Badges */}
                             <div className="flex items-center gap-2 bg-[#539031] text-white px-4 py-2 rounded-xl font-black transform hover:scale-105 transition-transform shadow-lg border-2 border-[#386622]">
                                <span className="text-xl tracking-tight">Minecraft</span>
                                <span className="text-[10px] bg-[#386622] px-1.5 rounded">対応</span>
                             </div>
                             <div className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl font-black transform hover:scale-105 transition-transform shadow-lg border-2 border-slate-700">
                                <span className="text-xl">ROBLOX</span>
                                <span className="text-[10px] bg-slate-700 px-1.5 rounded">対応</span>
                             </div>
                             <div className="flex items-center gap-2 bg-[#2D2D2D] text-white px-4 py-2 rounded-xl font-black transform hover:scale-105 transition-transform shadow-lg border-2 border-white">
                                <span className="text-xl">UEFN</span>
                                <span className="text-[10px] bg-gray-600 px-1.5 rounded">対応</span>
                             </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {course.tags.map(tag => (
                                <span key={tag} className="text-sm font-bold px-3 py-1.5 rounded-xl bg-white text-neo-orange border-2 border-orange-100 shadow-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="w-full lg:w-2/5 bg-white/80 backdrop-blur-md rounded-[2.5rem] p-8 border-4 border-white shadow-xl relative">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                            <div className="w-20 h-20 bg-gradient-to-br from-neo-yellow to-neo-orange rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white">
                                <Lightbulb size={40} />
                            </div>
                        </div>
                        
                        <div className="mt-8 text-center">
                            <h4 className="text-slate-800 font-black mb-4 text-xl inline-block border-b-4 border-neo-yellow/50 pb-1">こんな子におすすめ！</h4>
                            <ul className="text-slate-700 font-bold text-base space-y-4 text-left bg-orange-50/50 p-6 rounded-2xl">
                                <li className="flex items-start gap-3">
                                    <Star className="text-neo-pink shrink-0 mt-0.5" fill="currentColor" size={20} />
                                    <span>自分のアイデアをゲームにしたい！</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Star className="text-neo-cyan shrink-0 mt-0.5" fill="currentColor" size={20} />
                                    <span>AIで絵や音楽も作ってみたい！</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Star className="text-neo-lime-accent shrink-0 mt-0.5" fill="currentColor" size={20} />
                                    <span>コマンドを使ってワールドを作ってみたい！</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div key={course.id} className="bg-white rounded-[2.5rem] p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col relative group border-2 border-slate-100 overflow-hidden">
                {/* Hover Background */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${course.color.split(' ')[0]}`}></div>

                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-6 shadow-sm border-2 border-white ${course.color.replace('text-', 'bg-').split(' ')[0]} ${course.color.split(' ')[2]}`}>
                  <Icon size={36} />
                </div>
                
                <h3 className="text-xl font-black text-slate-800 mb-3">{course.title}</h3>
                <p className="text-slate-600 font-medium text-sm mb-6 flex-grow leading-relaxed">
                  {course.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                    {course.tags.map(tag => (
                        <span key={tag} className="text-xs font-bold px-3 py-1.5 rounded-full bg-slate-100 text-slate-500 group-hover:bg-white group-hover:shadow-sm transition-all">
                            {tag}
                        </span>
                    ))}
                </div>
                
                {/* Decorative Bottom Line */}
                <div className={`absolute bottom-0 left-0 w-full h-2 ${course.color.split(' ')[1].replace('border-', 'bg-')}`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;