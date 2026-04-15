import { Wifi, Satellite, Radio, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <section className="relative flex items-start justify-center min-h-screen pt-24 pb-16">

        {/* Background */}
        <div className="absolute inset-0">
          <img
              src="/indios-img.png"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 30%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-6xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
            Programa em Execução
          </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Tocantins <span className="text-blue-400">Conectado</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto font-light">
            Conectando o Tocantins ao Mundo Digital
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Programa estadual de inclusão digital que leva internet gratuita a comunidades indígenas,
            quilombolas e áreas rurais através de tecnologias inovadoras.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">612</div>
              <div className="text-white/80 text-xs sm:text-sm">Comunidades Beneficiadas</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">139</div>
              <div className="text-white/80 text-xs sm:text-sm">Municípios Atendidos</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1">Até 130 Mbps</div>
              <div className="text-white/80 text-xs sm:text-sm">Satélite LEO</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1">54</div>
              <div className="text-white/80 text-xs sm:text-sm">Municípios com 5G</div>
            </div>
          </div>

          {/* Tech */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Radio className="w-4 h-4 text-blue-400" />
              <span className="text-white/90 text-xs sm:text-sm">LTE/4G</span>
            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Satellite className="w-4 h-4 text-purple-400" />
              <span className="text-white/90 text-xs sm:text-sm">Satélite LEO</span>
            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Wifi className="w-4 h-4 text-green-400" />
              <span className="text-white/90 text-xs sm:text-sm">Tótens Wi-Fi</span>
            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Radio className="w-4 h-4 text-purple-400" />
              <span className="text-white/90 text-xs sm:text-sm">5G</span>
            </div>
          </div>

          {/* CTA */}
          <Button
              onClick={() => scrollToSection('sobre')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 text-base sm:text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            Conheça o Programa
            <ArrowDown className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-5 h-5 text-white/50" />
        </div>
      </section>
  );
}