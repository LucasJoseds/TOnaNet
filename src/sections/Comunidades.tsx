import { MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const comunidadesAtendidas = [
  {
    nome: 'Aldeia Krahô Manoel Alves',
    local: 'Itacajá',
    tipo: 'Comunidade Indígena',
    data: 'Abril/2023',
    historia: 'Primeira comunidade a receber o programa. O cacique Roberto Krahô destacou que a internet era uma esperança que se tornou realidade.'
  },
  {
    nome: 'Comunidade Quilombola do Prata',
    local: 'Jalapão',
    tipo: 'Comunidade Quilombola',
    data: '2024',
    historia: 'Moradores como dona Martina Tavares puderam matar a saudade de familiares que moram na Europa através de videochamadas.'
  },
  {
    nome: 'Comunidade Quilombola do Mumbuca',
    local: 'Jalapão',
    tipo: 'Comunidade Quilombola',
    data: '2024',
    historia: 'A professora Leni Francisca destacou a melhoria no acesso dos estudantes a conteúdos educativos e pesquisas.'
  }
];

export default function Comunidades() {
  return (
    <section id="comunidades" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Impacto Social
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Comunidades <span className="text-indigo-600">Beneficiadas</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Conheça as histórias de comunidades indígenas, quilombolas e rurais 
            que tiveram suas vidas transformadas pelo acesso à internet gratuita.
          </p>
        </div>

        {/* Main Image */}
        <div className="relative rounded-2xl overflow-hidden mb-16 max-w-4xl mx-auto">
          <img 
            src="/indios.jpeg"
            alt="Comunidade indígena beneficiada"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          </div>
        </div>

        {/* Communities Stories */}
        <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
          Histórias de Transformação
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {comunidadesAtendidas.map((comunidade, index) => (
            <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-indigo-600 mb-3">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold">{comunidade.local}</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{comunidade.nome}</h4>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                    {comunidade.tipo}
                  </span>
                  <span className="text-xs text-slate-500">{comunidade.data}</span>
                </div>
                <p className="text-sm text-slate-600 italic">"{comunidade.historia}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coverage Info */}
        <div className="bg-indigo-900 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Cobertura do Programa</h3>
              <p className="text-indigo-200 mb-6">
                O TO na Net tem como meta atingir 612 comunidades tradicionais do Tocantins, 
                incluindo aldeias indígenas, quilombos e povoados rurais, levando conectividade 
                gratuita a áreas historicamente desassistidas.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-indigo-300">612</div>
                  <div className="text-sm text-indigo-200">Comunidades Meta</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-indigo-300">350</div>
                  <div className="text-sm text-indigo-200">Dispositivos/Tóten</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="font-semibold mb-4">Público Beneficiado:</h4>
              <ul className="space-y-2 text-indigo-200">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full" />
                  Comunidades indígenas (aldeias)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full" />
                  Comunidades quilombolas
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full" />
                  Povoados rurais isolados
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full" />
                  Áreas de baixa renda sem cobertura
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full" />
                  Escolas estaduais rurais
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
