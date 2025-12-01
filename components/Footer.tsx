import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-16 py-8 border-t border-slate-800 bg-slate-950 text-center text-slate-500 text-sm">
      <div className="max-w-4xl mx-auto px-4">
        <p>&copy; {currentYear} PopFilmFriends. Todos los derechos reservados.</p>
        <p className="mt-2">Hecho con 🍿 para los amantes del cine.</p>
        <div className="mt-4 space-x-4">
            <a href="mailto:popfilmfriends@gmail.com" className="hover:text-yellow-400 transition-colors">Contacto</a>
            <span>•</span>
            <span className="hover:text-yellow-400 transition-colors cursor-pointer">Privacidad</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;