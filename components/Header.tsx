import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 shadow-lg">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-200"></div>
            <img 
              src="https://i.imgur.com/5FEDy5E.png" 
              alt="PopFilmFriends Logo" 
              className="relative w-10 h-10 rounded-full object-cover border border-slate-700 bg-slate-900"
            />
          </div>
          <span className="text-xl font-bold text-white">
            PopFilmFriends
          </span>
        </div>
        
        {/* Placeholder for a "Back to App" button */}
        <button 
          className="text-sm text-slate-400 hover:text-yellow-400 transition-colors flex items-center space-x-1"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Volver</span>
        </button>
      </div>
    </header>
  );
};

export default Header;