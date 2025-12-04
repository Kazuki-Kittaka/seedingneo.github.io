import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import ClassFlow from './components/ClassFlow';
import Courses from './components/Courses';
import Information from './components/Information';
import AccessSchedule from './components/AccessSchedule';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import MouseStalker from './components/MouseStalker';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-neo-orange selection:text-white">
      <MouseStalker />
      
      {/* Header / Nav (Simple absolute positioning for landing page) */}
      <nav className="absolute top-0 left-0 w-full z-40 p-6 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
        <div className="text-2xl font-black text-slate-800 tracking-tight">
          Seeding<span className="text-neo-cyan">Neo</span>
        </div>
        <a href="#contact" className="bg-white/80 backdrop-blur-sm px-5 py-2 rounded-full font-bold text-sm text-slate-800 shadow-sm hover:bg-white transition-colors border border-slate-100 hidden sm:block">
          お問い合わせ
        </a>
      </nav>

      <main>
        <Hero />
        <Features />
        <ClassFlow />
        <Courses />
        <Information />
        <AccessSchedule />
        <ContactForm />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;