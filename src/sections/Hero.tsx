import { Wifi, Satellite, Radio, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-white/90 text-sm font-medium">Programa em Execução</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          TO na <span className="text-blue-400">Net</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-white/90 mb-4 max-w-3xl mx-auto font-light">
          Conectando o Tocantins ao Mundo Digital
        </p>
        
        <p className="text-base sm:text-lg text-white/70 mb-10 max-w-2xl mx-auto">
          Programa estadual de inclusão digital que leva internet gratuita a comunidades indígenas, 
          quilombolas e áreas rurais através de tecnologias inovadoras.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">612</div>
            <div className="text-white/80 text-sm">Comunidades Beneficiadas</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">139</div>
            <div className="text-white/80 text-sm">Municípios Atendidos</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">10 Mbps</div>
            <div className="text-white/80 text-sm">Velocidade do Sinal</div>
          </div>
        </div>

        {/* Tech Icons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Radio className="w-5 h-5 text-blue-400" />
            <span className="text-white/90 text-sm">LTE/4G</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Satellite className="w-5 h-5 text-purple-400" />
            <span className="text-white/90 text-sm">Starlink</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Wifi className="w-5 h-5 text-green-400" />
            <span className="text-white/90 text-sm">Tótens WiFi</span>
          </div>
        </div>

        <Button 
          onClick={() => scrollToSection('sobre')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
        >
          Conheça o Programa
          <ArrowDown className="w-5 h-5 ml-2" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/50" />
      </div>
    </section>
  );
}
