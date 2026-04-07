import { Wifi, Mail, Phone, MapPin, ExternalLink, Facebook, Instagram, Youtube } from 'lucide-react';

const linksRapidos = [
  { label: 'Sobre o Programa', href: '#sobre' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Evidências', href: '#evidencias' },
  { label: 'Matérias', href: '#materias' },
  { label: 'Comunidades', href: '#comunidades' },
  { label: 'Política de Conectividade', href: '#politica' }
];

const linksUteis = [
  { label: 'Portal do Governo TO', href: 'https://www.to.gov.br', external: true },
  { label: 'Diário Oficial TO', href: 'https://diariooficial.to.gov.br', external: true },
  { label: 'Ministério das Comunicações', href: 'https://www.gov.br/mcom', external: true },
  { label: 'Anatel', href: 'https://www.anatel.gov.br', external: true },
  { label: 'Escolas Conectadas', href: 'https://www.gov.br/mec/escolasconectadas', external: true }
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      // w-full garante que o bg-slate-900 ocupe 100% da largura da tela
      <footer className="w-full bg-slate-900 text-white">

        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">TO na Net</span>
              </div>
              <p className="text-slate-400 text-sm mb-6">
                Programa estadual de inclusão digital que leva internet gratuita
                a comunidades tradicionais e áreas rurais do Tocantins.
              </p>
              <div className="flex gap-3">
                <a
                    href="https://facebook.com/governoto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                    href="https://instagram.com/governoto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                    href="https://youtube.com/governoto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                {linksRapidos.map((link, index) => (
                    <li key={index}>
                      <button
                          onClick={() => scrollToSection(link.href)}
                          className="text-slate-400 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </button>
                    </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
              <ul className="space-y-2">
                {linksUteis.map((link, index) => (
                    <li key={index}>
                      <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1"
                      >
                        {link.label}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-slate-400">
                  <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>
                  Palácio Araguaia - Praça dos Girassóis<br />
                  Palmas - TO, 77015-014
                </span>
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-400">
                  <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span>(63) 3218-4000</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-400">
                  <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span>atendimento@to.gov.br</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-slate-500 text-sm text-center md:text-left">
                © {new Date().getFullYear()} Governo do Estado do Tocantins. Todos os direitos reservados.
              </p>
              <p className="text-slate-600 text-xs text-center md:text-right">
                Site informativo sobre o programa TO na Net. Informações baseadas em dados públicos oficiais.
              </p>
            </div>
          </div>
        </div>

      </footer>
  );
}