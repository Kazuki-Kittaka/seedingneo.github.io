import React from 'react';
import { ArrowRight, Sparkles, Cloud } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Background Decor - Playground Style */}
      <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-30"></div>
      
      <div className="absolute top-10 left-[-50px] w-48 h-48 bg-neo-cyan/20 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 right-[-50px] w-64 h-64 bg-neo-pink/20 rounded-full blur-2xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-neo-yellow/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      {/* Clouds */}
      <div className="absolute top-20 right-[15%] text-neo-lime opacity-80 animate-float-delayed hidden md:block">
        <Cloud size={80} fill="currentColor" strokeWidth={0} />
      </div>
      <div className="absolute bottom-40 left-[10%] text-neo-cyan opacity-40 animate-float hidden md:block">
        <Cloud size={60} fill="currentColor" strokeWidth={0} />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block px-6 py-2 mb-6 rounded-full bg-neo-lime-accent text-slate-800 font-black text-sm tracking-wide animate-pop shadow-[4px_4px_0px_rgba(0,0,0,0.1)] rotate-[-2deg]">
          🌱 未来のクリエイターを育てるあそび場！
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-800 leading-tight mb-8 drop-shadow-sm">
          「好き」を<br className="md:hidden" />
          <span className="relative inline-block mx-2">
            <span className="absolute inset-0 bg-neo-yellow/50 -rotate-2 rounded-lg -z-10 scale-110"></span>
            <span className="text-neo-orange">未来を創る力</span>
          </span>
          へ
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-bold bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm border-2 border-slate-100 border-dashed">
          大人気ゲームで学ぶ<br />
          <span className="text-neo-cyan text-2xl">クリエイターを育てる</span><br/>
          プログラミング教室
        </p>

        <a 
          href="#contact"
          className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-black text-white transition-all duration-200 bg-neo-orange rounded-full hover:bg-orange-400 hover:scale-110 hover:shadow-[0px_10px_20px_rgba(255,159,28,0.4)] shadow-[0px_6px_0px_#e88b0e] hover:shadow-[0px_4px_0px_#e88b0e] active:translate-y-[2px] active:shadow-[0px_2px_0px_#e88b0e]"
        >
          <Sparkles className="w-6 h-6 mr-2 animate-wiggle" />
          無料体験に申し込む
          <ArrowRight className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-1" />
        </a>
        
        {/* Floating Icons Decor */}
        <div className="absolute top-[20%] left-[5%] hidden lg:block animate-float">
            <div className="bg-white p-3 rounded-2xl shadow-xl rotate-[-10deg] border-4 border-neo-cyan">
                <img src="https://picsum.photos/id/1/100/100" alt="Code" className="w-16 h-16 rounded-lg" />
            </div>
        </div>
        <div className="absolute bottom-[25%] right-[8%] hidden lg:block animate-float-delayed">
             <div className="bg-white p-3 rounded-2xl shadow-xl rotate-[12deg] border-4 border-neo-pink">
                <img src="https://picsum.photos/id/16/100/100" alt="Game" className="w-20 h-20 rounded-lg" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;