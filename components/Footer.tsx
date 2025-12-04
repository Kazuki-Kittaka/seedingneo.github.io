import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
            <h2 className="text-2xl font-black mb-2 tracking-wider">SeedingNeo</h2>
            <p className="text-slate-400 text-sm">パソコン・プログラミング教室</p>
        </div>
        
        <div className="flex justify-center gap-6 mb-8 text-sm text-slate-400">
            <a href="#courses" className="hover:text-neo-cyan transition-colors">コース紹介</a>
            <a href="#access" className="hover:text-neo-cyan transition-colors">アクセス</a>
            <a href="#contact" className="hover:text-neo-cyan transition-colors">お問い合わせ</a>
            <a href="#" className="hover:text-neo-cyan transition-colors">プライバシーポリシー</a>
        </div>

        <p className="text-slate-600 text-xs">
            &copy; {new Date().getFullYear()} SeedingNeo Programming School. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;