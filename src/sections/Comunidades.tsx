import { MapPin, UserCheck, Satellite } from 'lucide-react';
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

          {/* Satellite use cases for indigenous communities */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <Satellite className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Conectividade via Satélite LEO nas Aldeias</h3>
                <p className="text-sm text-slate-500">O que a internet via satélite viabiliza nas comunidades mais remotas</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { label: 'Telemedicina', desc: 'Atendimentos de saúde à distância' },
                { label: 'Educação a Distância', desc: 'Acesso a conteúdos e aulas online' },
                { label: 'Serviços Públicos Digitais', desc: 'Acesso a benefícios e documentos' },
                { label: 'Comunicação Institucional', desc: 'Integração com órgãos do Estado' },
                { label: 'Preservação Cultural', desc: 'Registro e difusão da cultura indígena' },
                { label: 'Monitoramento Territorial', desc: 'Bases ambientais com conectividade' },
              ].map((item, i) => (
                  <div key={i} className="bg-white rounded-lg p-4 border border-indigo-100">
                    <div className="font-semibold text-sm text-indigo-800 mb-1">{item.label}</div>
                    <div className="text-xs text-slate-500">{item.desc}</div>
                  </div>
              ))}
            </div>
          </div>

          {/* Eligibility for SIM Cards (Eixo 03) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <UserCheck className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Como Solicitar o SIM Card Individual (Eixo 03)</h3>
                <p className="text-sm text-slate-500">Para cidadãos em localidades sem cobertura de operadoras</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm mb-6">
              O Eixo 03 do programa oferece SIM Cards de dados LTE (4G) individuais a cidadãos em situação de
              vulnerabilidade social que vivem em localidades sem cobertura de operadoras privadas. A concessão
              garante transparência, rastreabilidade e controle por meio de quatro etapas de validação:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { num: '01', label: 'Cadastro Prévio', desc: 'Inscrição no programa' },
                { num: '02', label: 'Validação Socioeconômica', desc: 'Comprovação de vulnerabilidade' },
                { num: '03', label: 'Validação Territorial', desc: 'Verificação da localidade' },
                { num: '04', label: 'Validação Tecnológica', desc: 'Confirmação de ausência de cobertura' },
              ].map((step, i) => (
                  <div key={i} className="text-center">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-3">
                      {step.num}
                    </div>
                    <div className="font-semibold text-sm text-slate-900 mb-1">{step.label}</div>
                    <div className="text-xs text-slate-500">{step.desc}</div>
                  </div>
              ))}
            </div>
          </div>

          {/* Coverage Info */}
          <div className="bg-indigo-900 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Cobertura do Programa</h3>
                <p className="text-indigo-200 mb-6">
                  O TO NA NET tem como meta atingir 612 comunidades tradicionais do Tocantins,
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
                    <div className="text-sm text-indigo-200">Acessos Simultâneos/Tóten</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h4 className="font-semibold mb-4">Público Beneficiado:</h4>
                <ul className="space-y-2 text-indigo-200">
                  {[
                    'Comunidades indígenas (aldeias)',
                    'Comunidades quilombolas',
                    'Povoados rurais isolados',
                    'Áreas de baixa renda sem cobertura',
                    'Escolas estaduais rurais',
                    'Postos de saúde e bases ambientais',
                  ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-indigo-400 rounded-full" />
                        {item}
                      </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}