import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { POLICY_SECTIONS } from './constants';
import { ChevronUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-yellow-500/30 relative overflow-hidden">
      {/* Cinematic Background Ambience - Yellow/Gold themed */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none translate-y-1/2"></div>

      <div className="relative z-10">
        <Header />

        <main className="max-w-3xl mx-auto px-4 pt-12 pb-8">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-sm">
              Política de Privacidad <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                & Términos de Uso
              </span>
            </h1>
            <p className="text-slate-400 text-lg">
              Última actualización: {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            {POLICY_SECTIONS.map((section) => (
              <div 
                key={section.id} 
                id={section.id}
                className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-yellow-500/30 transition-all duration-300 shadow-lg shadow-black/20"
              >
                <div className="flex items-center space-x-3 mb-4 border-b border-slate-700/50 pb-4">
                  <div className="p-2.5 bg-slate-950 rounded-xl shadow-inner border border-slate-800">
                    {section.icon}
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-100">
                    {section.title}
                  </h2>
                </div>
                <div className="leading-relaxed text-slate-300/90 text-[15px] md:text-base">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Closing Statement */}
          <div className="mt-12 p-8 bg-gradient-to-br from-slate-900 to-slate-900 border border-slate-800 rounded-2xl text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <p className="text-white font-medium relative z-10 text-lg">
                  Gracias por ser parte de la comunidad <span className="text-yellow-400">PopFilmFriends</span>.
              </p>
          </div>
        </main>

        <Footer />
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-yellow-500 text-slate-900 shadow-lg hover:bg-yellow-400 hover:scale-110 transition-all duration-300 z-40 border border-yellow-400/20 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Volver arriba"
      >
        <ChevronUp className="w-6 h-6 font-bold" strokeWidth={3} />
      </button>
    </div>
  );
};

export default App;