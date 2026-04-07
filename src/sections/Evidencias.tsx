import { FileText, Camera, ExternalLink, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const evidencias = [
  {
    categoria: 'Normativos',
    icone: FileText,
    cor: 'blue',
    itens: [
      {
        titulo: 'Decreto Estadual - Política de Transformação Digital',
        descricao: 'Decreto Nº 6.757/2024 que institui a Política Estadual de Transformação para o Governo Digital no Tocantins.',
        referencia: 'DOE 6.525 - 06/03/2024',
        tipo: 'Decreto'
      },
      {
        titulo: 'Decreto Nº 6.637/2023 - Comitê de Governança Digital',
        descricao: 'Institui o Comitê de Governança Digital para a Administração Pública do Estado do Tocantins.',
        referencia: 'DOE 6.346 - 12/06/2023',
        tipo: 'Decreto'
      },
      {
        titulo: 'Portaria ATI Nº 28/2026 - Segurança da Informação',
        descricao: 'Institui a Política de Segurança da Informação da Agência de Tecnologia da Informação do Estado.',
        referencia: 'DOE 7.011 - 02/03/2026',
        tipo: 'Portaria'
      }
    ]
  },
  {
    categoria: 'Relatórios Oficiais',
    icone: Download,
    cor: 'green',
    itens: [
      {
        titulo: 'Relatório de Gestão 2025 - ATI',
        descricao: 'Consolidação dos avanços na modernização digital do Tocantins e expansão da conectividade.',
        referencia: 'Agência de Tecnologia da Informação',
        tipo: 'Relatório'
      },
      {
        titulo: 'Capacidades para a Transformação Digital - Tocantins',
        descricao: 'Relatório preliminar sobre as capacidades para transformação digital nos governos estaduais.',
        referencia: 'CONSAD - Outubro/2020',
        tipo: 'Estudo'
      },
      {
        titulo: 'Estratégia Nacional de Escolas Conectadas - ENEC',
        descricao: 'Dados atualizados de conectividade das escolas estaduais do Tocantins.',
        referencia: 'MEC/INEP - 2025',
        tipo: 'Dados Oficiais'
      }
    ]
  },
  {
    categoria: 'Fotos e Vídeos',
    icone: Camera,
    cor: 'purple',
    itens: [
      {
        titulo: 'Lançamento TO na Net - Aldeia Krahô',
        descricao: 'Registro fotográfico do lançamento do programa na aldeia Manoel Alves, Itacajá.',
        referencia: 'Governo do Tocantins - 19/04/2023',
        tipo: 'Fotografia'
      },
      {
        titulo: 'Entrega das Torres no Jalapão',
        descricao: 'Vídeo da entrega das primeiras torres nas comunidades quilombolas do Prata e Mumbuca.',
        referencia: 'Secom/TO - 2024',
        tipo: 'Vídeo'
      },
      {
        titulo: 'Teste de Conexão com a Secretária',
        descricao: 'Videoconferência do Governador com a Secretária Narúbia Werreria a 600km de distância.',
        referencia: 'Divulgação - Jalapão',
        tipo: 'Vídeo'
      }
    ]
  }
];

const estatisticas = [
  { valor: '89,1%', label: 'Escolas Estaduais Conectadas', fonte: 'ENEC/2026' },
  { valor: '97,8%', label: 'Escolas Públicas com Internet', fonte: 'Censo Escolar/2025' },
  { valor: '346', label: 'Escolas com Alta Velocidade', fonte: 'Seduc/TO' },
  { valor: '8.000+', label: 'km de Fibra Óptica Previstos', fonte: 'Tocantins Net' }
];

export default function Evidencias() {
  return (
    <section id="evidencias" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Documentação
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Evidências e <span className="text-green-600">Documentos</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Documentação oficial que comprova a existência e implementação do programa 
            TO na Net e outras políticas de conectividade do Estado do Tocantins.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {estatisticas.map((stat, index) => (
            <Card key={index} className="bg-white border-slate-200 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-1">{stat.valor}</div>
                <div className="text-sm text-slate-700 mb-1">{stat.label}</div>
                <div className="text-xs text-slate-400">{stat.fonte}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Evidence Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {evidencias.map((categoria, catIndex) => {
            const Icone = categoria.icone;
            const cores: Record<string, { bg: string; text: string; border: string; badge: string }> = {
              blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700' },
              green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', badge: 'bg-green-100 text-green-700' },
              purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', badge: 'bg-purple-100 text-purple-700' }
            };
            const cor = cores[categoria.cor];

            return (
              <Card key={catIndex} className={`border-2 ${cor.border}`}>
                <CardHeader className={`${cor.bg} border-b ${cor.border}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${cor.bg} rounded-lg flex items-center justify-center`}>
                      <Icone className={`w-5 h-5 ${cor.text}`} />
                    </div>
                    <CardTitle className={`text-xl ${cor.text}`}>
                      {categoria.categoria}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 space-y-4">
                  {categoria.itens.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-slate-900 text-sm leading-tight">
                          {item.titulo}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-600 mb-2">{item.descricao}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className={`text-xs ${cor.badge}`}>
                          {item.tipo}
                        </Badge>
                        <span className="text-xs text-slate-400">{item.referencia}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Links to Official Sources */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-8">
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
            Fontes Oficiais de Consulta
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="justify-between" asChild>
              <a href="https://www.to.gov.br" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Portal do Governo TO
                </span>
              </a>
            </Button>
            <Button variant="outline" className="justify-between" asChild>
              <a href="https://diariooficial.to.gov.br" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Diário Oficial do TO
                </span>
              </a>
            </Button>
            <Button variant="outline" className="justify-between" asChild>
              <a href="https://www.gov.br/mcom" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Ministério das Comunicações
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
