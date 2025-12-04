import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-10">
            <span className="inline-block px-4 py-1 bg-neo-pink text-white rounded-full font-bold text-sm mb-4 animate-bounce">
                まずはここから！
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">
            お問い合わせ・体験申込
            </h2>
            <p className="text-slate-500 font-bold">
            見学・体験は無料です。お気軽にお越しください！
            </p>
        </div>

        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border-4 border-neo-lime/50 relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-neo-lime-accent/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-neo-cyan/20 rounded-full blur-2xl -ml-10 -mb-10"></div>
            
          {isSent ? (
            <div className="flex flex-col items-center justify-center py-20 text-center animate-pop relative z-10">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-6 shadow-inner">
                    <CheckCircle2 size={56} />
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-2">送信完了しました！</h3>
                <p className="text-slate-600 font-medium">
                    お問い合わせありがとうございます。<br />
                    担当者より2営業日以内にご連絡いたします。
                </p>
                <button 
                    onClick={() => setIsSent(false)}
                    className="mt-8 text-neo-cyan font-bold underline hover:text-cyan-600"
                >
                    戻る
                </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 pl-2">保護者様のお名前</label>
                    <input type="text" required className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-neo-orange focus:ring-0 outline-none transition-all placeholder:text-slate-300 font-bold text-slate-700" placeholder="例：山田 花子" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2 pl-2">お子様の学年</label>
                        <div className="relative">
                            <select className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-neo-orange outline-none font-bold text-slate-700 appearance-none">
                                <option>小学1年生</option>
                                <option>小学2年生</option>
                                <option>小学3年生</option>
                                <option>小学4年生</option>
                                <option>小学5年生</option>
                                <option>小学6年生</option>
                                <option>中学生以上</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">▼</div>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2 pl-2">ご希望の校舎</label>
                        <div className="relative">
                            <select className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-neo-orange outline-none font-bold text-slate-700 appearance-none">
                                <option>大分校</option>
                                <option>別府校</option>
                                <option>未定</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">▼</div>
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 pl-2">メールアドレス</label>
                    <input type="email" required className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-neo-orange focus:ring-0 outline-none transition-all placeholder:text-slate-300 font-bold text-slate-700" placeholder="email@example.com" />
                </div>

                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 pl-2">電話番号</label>
                    <input type="tel" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-neo-orange focus:ring-0 outline-none transition-all placeholder:text-slate-300 font-bold text-slate-700" placeholder="090-0000-0000" />
                </div>

                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 pl-2">お問い合わせ内容</label>
                    <textarea rows={4} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-neo-orange focus:ring-0 outline-none transition-all placeholder:text-slate-300 font-bold text-slate-700" placeholder="体験授業の希望日時や、ご質問など"></textarea>
                </div>

                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-neo-orange text-white font-black text-xl py-5 rounded-2xl shadow-[0_6px_0_#d97706] hover:shadow-[0_4px_0_#d97706] hover:translate-y-[2px] active:shadow-none active:translate-y-[6px] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group mt-4"
                >
                    {isSubmitting ? (
                        <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                        <>
                            送信する
                            <Send size={22} className="group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;