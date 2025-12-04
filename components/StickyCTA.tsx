import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <a 
      href="#contact"
      className="fixed bottom-6 right-6 z-50 bg-neo-cyan text-white font-bold px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 animate-pop hover:scale-110 hover:bg-cyan-400 transition-all border-4 border-white"
    >
      <Mail className="animate-bounce" />
      <span className="hidden sm:inline">無料体験受付中</span>
      <span className="sm:hidden">無料体験</span>
    </a>
  );
};

export default StickyCTA;