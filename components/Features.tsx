import React from 'react';
import { Gamepad2, Users, Trophy } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern-colored"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-16 text-slate-800">
          <span className="relative inline-block z-10">
            <span className="absolute -bottom-2 left-0 w-full h-4 bg-neo-yellow/60 rounded-full -z-10 -rotate-1"></span>
            SeedingNeoが選ばれる理由
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-8 items-stretch">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-[6px] border-neo-cyan/20 group relative overflow-hidden h-full flex flex-col">
             {/* Decor */}
             <div className="absolute -right-4 -top-4 w-20 h-20 bg-neo-cyan/10 rounded-full blur-xl group-hover:bg-neo-cyan/20 transition-colors"></div>
            
            <div className="w-20 h-20 bg-cyan-50 rounded-full flex items-center justify-center mb-6 text-neo-cyan group-hover:scale-110 transition-transform group-hover:rotate-12 mx-auto shadow-inner border-2 border-cyan-100 shrink-0">
              <Gamepad2 size={40} strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center text-slate-800">「好き」を<br/>未来を創る力へ</h3>
            <p className="text-slate-600 leading-relaxed text-center font-medium flex-grow">
              大人気ゲームを「教材」にすることで、プレイヤー視点からクリエイター視点へ自然とステップアップ。楽しみながら自分の世界を作り上げる経験が、確かな技術と創造力を育てます。
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-[6px] border-neo-orange/20 group relative overflow-hidden h-full flex flex-col">
             {/* Decor */}
             <div className="absolute -left-4 -bottom-4 w-20 h-20 bg-neo-orange/10 rounded-full blur-xl group-hover:bg-neo-orange/20 transition-colors"></div>

            <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-6 text-neo-orange group-hover:scale-110 transition-transform group-hover:-rotate-12 mx-auto shadow-inner border-2 border-orange-100 shrink-0 mt-4">
              <Users size={40} strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center text-slate-800">一人ひとりに合わせた<br/>個別最適化</h3>
            <p className="text-slate-600 leading-relaxed text-center font-medium flex-grow">
              一斉授業ではありません。自分のペースと「やりたい！」に合わせて進めます。わからない所は先生が優しくサポート！
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-[6px] border-neo-lime-accent/30 group relative overflow-hidden h-full flex flex-col">
             {/* Decor */}
             <div className="absolute right-10 bottom-0 w-24 h-8 bg-neo-lime-accent/10 rounded-full blur-lg group-hover:bg-neo-lime-accent/20 transition-colors"></div>

            <div className="w-20 h-20 bg-lime-50 rounded-full flex items-center justify-center mb-6 text-lime-600 group-hover:scale-110 transition-transform group-hover:rotate-12 mx-auto shadow-inner border-2 border-lime-100 shrink-0">
              <Trophy size={40} strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center text-slate-800">検定・コンテストという<br/>明確な目標</h3>
            <p className="text-slate-600 leading-relaxed text-center font-medium flex-grow">
              「プログラミング能力検定」や「コンテスト」に挑戦！目標に向かって頑張る経験が、子供たちの大きな「自信」になります。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;