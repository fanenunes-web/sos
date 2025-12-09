import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShieldCheck, Scale, MessageCircle } from 'lucide-react';
import { NAV_LINKS, WHATSAPP_NUMBER } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-brand-navy text-white sticky top-0 z-50 shadow-lg border-b border-white/10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <Scale className="w-8 h-8 text-brand-gold group-hover:text-brand-goldLight transition-colors" />
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-none tracking-tight">SOS Associados</span>
              <span className="text-xs text-slate-400 font-light">Consultoria Jurídica ao seu alcance</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-gold ${
                  location.pathname === link.path ? 'text-brand-gold' : 'text-slate-200'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700 absolute w-full left-0 top-full">
            <nav className="flex flex-col p-4 space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-slate-200 hover:text-brand-gold text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <Scale className="w-5 h-5 text-brand-gold" /> SOS Associados
            </h3>
            <p className="text-sm">
              Comprometidos com a justiça acessível e a defesa dos seus direitos. 
              Recupere sua tranquilidade financeira hoje.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/limpa-nome" className="hover:text-brand-gold">Limpa Nome</Link></li>
              <li><Link to="/juros-abusivos" className="hover:text-brand-gold">Juros Abusivos</Link></li>
              <li><Link to="/servicos" className="hover:text-brand-gold">Direito do Consumidor</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Institucional</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/sobre" className="hover:text-brand-gold">Sobre Nós</Link></li>
              <li><Link to="/blog" className="hover:text-brand-gold">Blog</Link></li>
              <li><Link to="/politica-privacidade" className="hover:text-brand-gold">Política de Privacidade</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <p className="text-sm mb-2 flex items-center gap-2"><Phone size={16}/> (11) 97555-7317</p>
            <p className="text-xs border-t border-slate-700 pt-4 mt-4">
              Este site respeita as normas de publicidade do Código de Ética e Disciplina da OAB. Conteúdo meramente informativo.
            </p>
          </div>
        </div>
        <div className="text-center mt-8 text-xs text-slate-600">
          © {new Date().getFullYear()} SOS Associados. Todos os direitos reservados.
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl z-50 transition-transform hover:scale-110 flex items-center gap-2"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="hidden md:inline font-bold">Falar com Especialista</span>
      </a>
    </div>
  );
};

export default Layout;