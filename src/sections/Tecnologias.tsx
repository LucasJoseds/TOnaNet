import { Wifi, Satellite, Radio, Zap, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const tecnologias = [
  {
    id: 'totem',
    titulo: 'Tótens WiFi',
    icone: Wifi,
    cor: 'green',
    imagem: '/toten-wifi.jpg',
    descricao: 'Tótens instalados no centro das comunidades que distribuem sinal WiFi gratuito via fibra óptica.',
    especificacoes: [
      'Cobertura de até 200 metros de raio',
      'Suporte para 350 dispositivos simultâneos',
      'Velocidade de 10 Mbps',
      'Energia solar disponível',
      'Ideal para praças e centros comunitários'
    ],
    aplicacao: 'Comunidades urbanas, praças públicas, centros comunitários e áreas com infraestrutura de fibra óptica.'
  },
  {
    id: 'starlink',
    titulo: 'Starlink',
    icone: Satellite,
    cor: 'purple',
    imagem: '/starlink.jpg',
    descricao: 'Internet via satélite da SpaceX que leva conectividade de alta velocidade a áreas remotas.',
    especificacoes: [
      'Velocidade de até 350 Mbps',
      'Baixa latência (20-40ms)',
      'Cobertura global via satélite',
      'Instalação rápida e simplificada',
      'Ideal para áreas sem infraestrutura terrestre'
    ],
    aplicacao: 'Comunidades rurais isoladas, aldeias indígenas remotas, áreas do Jalapão e regiões sem fibra óptica.'
  },
  {
    id: 'lte',
    titulo: 'LTE / 4G',
    icone: Radio,
    cor: 'blue',
    imagem: '/torre-lte.jpg',
    descricao: 'Rede móvel de alta velocidade que amplia a cobertura celular em rodovias e áreas rurais.',
    especificacoes: [
      'Tecnologia 4G/5G em expansão',
      'Cobertura de rodovias federais',
      'Melhoria do sinal de celular',
      'Suporte a dados e voz',
      'Integração com operadoras'
    ],
    aplicacao: 'Rodovias (BR-242, BR-153), áreas rurais, pequenos municípios e trechos desassistidos.'
  }
];

export default function Tecnologias() {
  const getColorClass = (cor: string) => {
    const colors: Record<string, { bg: string; text: string; border: string; light: string }> = {
      green: { bg: 'bg-green-600', text: 'text-green-600', border: 'border-green-200', light: 'bg-green-50' },
      purple: { bg: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-200', light: 'bg-purple-50' },
      blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-200', light: 'bg-blue-50' }
    };
    return colors[cor] || colors.blue;
  };

  return (
    <section id="tecnologias" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Infraestrutura
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Tecnologias do <span className="text-purple-600">Programa</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            O TO na Net utiliza três tecnologias complementares para garantir 
            conectividade em diferentes cenários e necessidades do estado.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tecnologias.map((tech) => {
            const colors = getColorClass(tech.cor);
            const Icone = tech.icone;
            
            return (
              <Card key={tech.id} className={`overflow-hidden border-2 ${colors.border} hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}>
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={tech.imagem} 
                    alt={tech.titulo}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className={`absolute top-4 right-4 ${colors.bg} text-white p-2 rounded-full`}>
                    <Icone className="w-6 h-6" />
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className={`text-2xl font-bold ${colors.text}`}>
                    {tech.titulo}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-slate-600">
                    {tech.descricao}
                  </p>

                  <div className={`${colors.light} rounded-lg p-4`}>
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className={`w-5 h-5 ${colors.text}`} />
                      <span className="font-semibold text-slate-900">Especificações Técnicas</span>
                    </div>
                    <ul className="space-y-2">
                      {tech.especificacoes.map((spec, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle className={`w-4 h-4 ${colors.text} mt-0.5 flex-shrink-0`} />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-slate-100 pt-4">
                    <span className="text-sm font-semibold text-slate-900">Aplicação:</span>
                    <p className="text-sm text-slate-600 mt-1">{tech.aplicacao}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Integration Note */}
        <div className="mt-12 bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Tecnologias Integradas
              </h3>
              <p className="text-slate-600">
                O programa utiliza uma abordagem híbrida, combinando fibra óptica onde há infraestrutura, 
                Starlink para áreas remotas sem cobertura terrestre, e LTE/4G para expansão da cobertura 
                móvel em rodovias e pequenas localidades.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Wifi className="w-8 h-8 text-green-600" />
              </div>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <Satellite className="w-8 h-8 text-purple-600" />
              </div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Radio className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
