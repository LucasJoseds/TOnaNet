import { Wifi, Satellite, Radio, Zap, CheckCircle, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const tecnologias = [
  {
    id: 'totem',
    eixo: 'Eixo 01',
    titulo: 'Wi-Fi Comunitário',
    subtitulo: 'Fibra Óptica + Tótens',
    icone: Wifi,
    cor: 'green',
    imagem: '/toten-wifi.jpg',
    descricao: 'Tótens instalados no centro de povoados e comunidades com viabilidade de fibra óptica, distribuindo sinal Wi-Fi gratuito e contínuo para a população.',
    especificacoes: [
      'Velocidade média: 10 Mbps',
      'Até 350 acessos simultâneos por localidade',
      'Fibra óptica até o ponto central',
      'Cobertura de praças, escolas e postos de saúde',
      'Ideal para comunidades com infraestrutura terrestre'
    ],
    aplicacao: 'Povoados e comunidades rurais com viabilidade técnica para chegada da fibra óptica, onde o mercado privado não oferece soluções adequadas.'
  },
  {
    id: 'satelite',
    eixo: 'Eixo 02',
    titulo: 'Satélite LEO',
    subtitulo: 'Baixa Órbita — Alta Velocidade',
    icone: Satellite,
    cor: 'purple',
    imagem: '/starlink.jpg',
    descricao: 'Satélites de baixa órbita (LEO) que levam conectividade de alta velocidade a comunidades indígenas, áreas rurais remotas e órgãos públicos em zonas de difícil acesso, onde fibra óptica é inviável.',
    especificacoes: [
      'Velocidade: 130 Mbps (down) / 16,5 Mbps (up)',
      'Latência máxima: 80 ms',
      'Disponibilidade mínima: 99%',
      'Franquia mínima: 1 TB por equipamento',
      'Suporte técnico 24/7'
    ],
    aplicacao: 'Comunidades indígenas, áreas rurais isoladas, localidades sem cobertura terrestre e órgãos públicos em regiões remotas do Tocantins.'
  },
  {
    id: 'lte',
    eixo: 'Eixo 03',
    titulo: 'LTE (4G) Individual',
    subtitulo: 'SIM Cards para Cidadãos',
    icone: Radio,
    cor: 'blue',
    imagem: '/torre-lte.jpg',
    descricao: 'SIM Cards de dados LTE (4G) individuais para cidadãos vulneráveis em localidades onde operadoras não chegam, o Wi-Fi comunitário não é suficiente ou o satélite atende coletivamente mas não individualmente.',
    especificacoes: [
      'Conectividade LTE (4G) individual',
      'SIM Cards com plataforma de gestão',
      'Controle e monitoramento de consumo',
      'Validação socioeconômica e territorial',
      'Suporte técnico contínuo'
    ],
    aplicacao: 'Cidadãos em situação de vulnerabilidade social em localidades sem cobertura de operadoras. Concessão mediante cadastro prévio e validação socioeconômica, territorial e tecnológica.'
  }
];

export default function Tecnologias() {
  const getColorClass = (cor: string) => {
    const colors: Record<string, { bg: string; text: string; border: string; light: string; eixoBg: string; eixoText: string }> = {
      green: { bg: 'bg-green-600', text: 'text-green-600', border: 'border-green-200', light: 'bg-green-50', eixoBg: 'bg-green-100', eixoText: 'text-green-800' },
      purple: { bg: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-200', light: 'bg-purple-50', eixoBg: 'bg-purple-100', eixoText: 'text-purple-800' },
      blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-200', light: 'bg-blue-50', eixoBg: 'bg-blue-100', eixoText: 'text-blue-800' }
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
              O TO NA NET adota uma abordagem multitecnológica, pois não existe uma única tecnologia
              capaz de atender todo o território tocantinense. São três eixos complementares, cada um
              desenhado para um tipo específico de território e público.
            </p>
          </div>

          {/* Territory Map Table */}
          <div className="max-w-4xl mx-auto mb-16 bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
            <div className="bg-slate-800 text-white px-6 py-4">
              <h3 className="font-semibold text-lg">Arquitetura Territorial do Programa</h3>
              <p className="text-slate-400 text-sm mt-1">Cada território recebe a tecnologia mais adequada à sua realidade</p>
            </div>
            <div className="divide-y divide-slate-200">
              {[
                { territorio: 'Povoados com viabilidade de fibra', tecnologia: 'Wi-Fi Comunitário', eixo: 'Eixo 01', cor: 'text-green-700 bg-green-100' },
                { territorio: 'Áreas rurais isoladas e comunidades indígenas', tecnologia: 'Satélite LEO', eixo: 'Eixo 02', cor: 'text-purple-700 bg-purple-100' },
                { territorio: 'Cidadãos vulneráveis sem cobertura de operadoras', tecnologia: 'LTE (4G) Individualizado', eixo: 'Eixo 03', cor: 'text-blue-700 bg-blue-100' },
                { territorio: 'Centros urbanos', tecnologia: '5G', eixo: 'Iniciativa Federal', cor: 'text-orange-700 bg-orange-100' },
              ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 px-6 py-4 items-center">
                    <span className="text-sm text-slate-700">{row.territorio}</span>
                    <span className="text-sm font-medium text-slate-900">{row.tecnologia}</span>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium w-fit ${row.cor}`}>{row.eixo}</span>
                  </div>
              ))}
            </div>
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
                      <div className="absolute top-4 left-4">
                    <span className={`text-xs px-2 py-1 rounded-full font-semibold ${colors.eixoBg} ${colors.eixoText}`}>
                      {tech.eixo}
                    </span>
                      </div>
                      <div className={`absolute top-4 right-4 ${colors.bg} text-white p-2 rounded-full`}>
                        <Icone className="w-6 h-6" />
                      </div>
                    </div>

                    <CardHeader className="pb-1">
                      <CardTitle className={`text-2xl font-bold ${colors.text}`}>
                        {tech.titulo}
                      </CardTitle>
                      <p className="text-sm text-slate-500 font-medium">{tech.subtitulo}</p>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-slate-600 text-sm">
                        {tech.descricao}
                      </p>

                      <div className={`${colors.light} rounded-lg p-4`}>
                        <div className="flex items-center gap-2 mb-3">
                          <Zap className={`w-5 h-5 ${colors.text}`} />
                          <span className="font-semibold text-slate-900 text-sm">Especificações Técnicas</span>
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
                        <div className="flex items-start gap-2">
                          <Shield className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-sm font-semibold text-slate-900">Aplicação:</span>
                            <p className="text-sm text-slate-600 mt-1">{tech.aplicacao}</p>
                          </div>
                        </div>
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
                  Abordagem Multitecnológica
                </h3>
                <p className="text-slate-600">
                  O programa combina fibra óptica com tótens Wi-Fi onde há infraestrutura terrestre,
                  satélites LEO para áreas remotas sem cobertura, e SIM Cards LTE/4G para acesso
                  individual de cidadãos vulneráveis — garantindo eficiência econômica, racionalidade
                  técnica e inclusão social em todo o estado.
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