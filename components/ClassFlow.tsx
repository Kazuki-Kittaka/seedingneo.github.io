import React from 'react';
import { PlayCircle, Keyboard } from 'lucide-react';

const ClassFlow: React.FC = () => {
  return (
    <section className="py-24 bg-neo-lime/20 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute -left-20 top-20 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-60"></div>
        <div className="absolute -right-20 bottom-0 w-80 h-80 bg-neo-yellow rounded-full mix-blend-overlay filter blur-3xl opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-6 text-slate-800">
            <span className="border-b-4 border-dashed border-neo-cyan pb-2">授業の流れ</span>
        </h2>
        <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto font-bold">
          動画を見て（インプット）→ 自分で作る（アウトプット）<br className="hidden md:block"/>
          この繰り返しで、楽しみながら自然とスキルが身につきます。
        </p>

        <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center max-w-5xl mx-auto">
            
          {/* STEP 1 */}
          <div className="flex-1 bg-white border-4 border-white rounded-[2.5rem] p-8 relative shadow-[0_10px_30px_-10px_rgba(46,196,182,0.3)] hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-neo-cyan text-white font-black px-6 py-2 rounded-full shadow-lg border-4 border-white transform rotate-[-2deg]">
              STEP 1
            </div>
            <div className="mt-6 mb-6 flex justify-center">
                <div className="w-24 h-24 bg-cyan-50 rounded-full flex items-center justify-center text-neo-cyan border-4 border-dashed border-cyan-200">
                    <PlayCircle size={48} />
                </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-4 text-slate-800">動画でインプット</h3>
            <ul className="space-y-4 text-slate-600 font-medium">
                <li className="flex items-start bg-cyan-50/50 p-3 rounded-xl">
                    <span className="mr-2 text-neo-cyan text-xl">●</span>
                    わかりやすい動画教材で、自分のペースで進められます。
                </li>
                <li className="flex items-start bg-cyan-50/50 p-3 rounded-xl">
                    <span className="mr-2 text-neo-cyan text-xl">●</span>
                    クリアしたら「進捗シート」にシールをペタリ！達成感が嬉しい。
                </li>
            </ul>
          </div>

          {/* Arrow for Desktop */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-neo-orange shadow-inner text-2xl font-black">
                ▶
            </div>
          </div>

          {/* STEP 2 */}
          <div className="flex-1 bg-white border-4 border-white rounded-[2.5rem] p-8 relative shadow-[0_10px_30px_-10px_rgba(255,159,28,0.3)] hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-neo-orange text-white font-black px-6 py-2 rounded-full shadow-lg border-4 border-white transform rotate-[2deg]">
              STEP 2
            </div>
            <div className="mt-6 mb-6 flex justify-center">
                <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center text-neo-orange border-4 border-dashed border-orange-200">
                    <Keyboard size={48} />
                </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-4 text-slate-800">制作・実践アウトプット</h3>
            <ul className="space-y-4 text-slate-600 font-medium">
                <li className="flex items-start bg-orange-50/50 p-3 rounded-xl">
                    <span className="mr-2 text-neo-orange text-xl">●</span>
                    学んだ技を使って、自分だけのオリジナルゲームを作ろう！
                </li>
                <li className="flex items-start bg-orange-50/50 p-3 rounded-xl">
                    <span className="mr-2 text-neo-orange text-xl">●</span>
                    自然と将来役立つPCスキルも身につきます。
                </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-16 text-center bg-white border-4 border-neo-lime-accent rounded-[2rem] p-8 max-w-3xl mx-auto shadow-xl relative">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-neo-lime-accent text-slate-800 font-bold px-6 py-1 rounded-full text-sm">
                安心ポイント
            </div>
            <p className="font-bold text-xl text-slate-800 mb-2">
                🤝 先生がいつもそばでサポート
            </p>
            <p className="text-slate-600 font-medium">
                つまずいても大丈夫。先生が優しくヒントを出して、答えまで導きます。<br/>
                「できた！」という喜びを一緒に分かち合います。
            </p>
        </div>
      </div>
    </section>
  );
};

export default ClassFlow;