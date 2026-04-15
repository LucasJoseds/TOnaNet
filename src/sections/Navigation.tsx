import { useState, useEffect } from 'react';
import { Wifi, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Evidências', href: '#evidencias' },
  { label: 'Matérias', href: '#materias' },
  { label: 'Comunidades', href: '#comunidades' },
  { label: 'Política', href: '#politica' }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
      <>
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
                    : 'bg-transparent py-5'
            }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-2">

              {/* Logo */}
              <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0"
              >
                {/* Logos institucionais — visíveis em todos os tamanhos, menores no mobile */}<div
                  className={`flex items-center gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-xl transition-all ${
                      isScrolled
                          ? ''
                          : 'bg-white/20 backdrop-blur-md border border-white/20'
                  }`}
              >
                <img
                    src="/ati.png"
                    alt="ATI"
                    className="h-5 sm:h-6 lg:h-7 w-auto object-contain"
                />

                <div className="w-px h-4 sm:h-5 bg-slate-300/50" />

                <img
                    src="/logo.png"
                    alt="Tocantins Conectado"
                    className="h-5 sm:h-6 lg:h-7 w-auto object-contain"
                />
              </div>

                {/* Separador vertical */}
                <div
                    className="w-px h-5 sm:h-6 shrink-0"
                    style={{ backgroundColor: isScrolled ? '#cbd5e1' : 'rgba(255,255,255,0.3)' }}
                />

                {/* Ícone + Texto */}
                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                      isScrolled ? 'bg-blue-600' : 'bg-white/20 backdrop-blur-sm'
                  }`}>
                    <Wifi className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                  {/* Texto — oculto em mobile muito pequeno para não apertar */}
                  <span className={`hidden xs:inline sm:inline text-sm sm:text-base lg:text-xl font-bold transition-colors whitespace-nowrap ${
                      isScrolled ? 'text-slate-900' : 'text-white'
                  }`}>
                  Tocantins <span className="text-blue-400">Conectado</span>
                </span>
                </div>
              </button>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {navItems.map((item) => (
                    <button
                        key={item.href}
                        onClick={() => scrollToSection(item.href)}
                        className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                            isScrolled
                                ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                                : 'text-white/90 hover:text-white hover:bg-white/10'
                        }`}
                    >
                      {item.label}
                    </button>
                ))}
              </div>

              {/* Lado direito: CTA + Mobile button */}
              <div className="flex items-center gap-2 shrink-0">
                <div className="hidden lg:block">
                  <Button
                      onClick={() => scrollToSection('#politica')}
                      className={`transition-all whitespace-nowrap ${
                          isScrolled
                              ? 'bg-blue-600 hover:bg-blue-700 text-white'
                              : 'bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30'
                      }`}
                  >
                    Documentos Oficiais
                  </Button>
                </div>

                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={`lg:hidden p-2 rounded-lg transition-colors ${
                        isScrolled ? 'text-slate-900' : 'text-white'
                    }`}
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
            className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
        >
          <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
          />
          <div
              className={`absolute top-0 right-0 w-80 max-w-full h-full bg-white shadow-2xl transition-transform duration-300 ${
                  isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
          >
            <div className="p-6">
              {/* Header do menu mobile */}
              <div className="flex items-center justify-between mb-8 gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <img src="/ati.png" alt="ATI" className="h-6 w-auto object-contain shrink-0" />
                  <img src="/logo.png" alt="Tocantins Conectado" className="h-6 w-auto object-contain shrink-0" />
                  {/* Texto em duas linhas se necessário, sem corte */}
                  <span className="text-base font-bold text-slate-900 leading-tight">
                  Tocantins{' '}
                    <span className="text-blue-600 whitespace-nowrap">Conectado</span>
                </span>
                </div>
                <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-slate-500 hover:text-slate-900 shrink-0"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="space-y-2">
                {navItems.map((item) => (
                    <button
                        key={item.href}
                        onClick={() => scrollToSection(item.href)}
                        className="w-full text-left px-4 py-3 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium"
                    >
                      {item.label}
                    </button>
                ))}
              </nav>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <Button
                    onClick={() => scrollToSection('#politica')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Documentos Oficiais
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}
