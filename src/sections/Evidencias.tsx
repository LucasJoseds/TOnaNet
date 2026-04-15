import { FileText, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';

const evidencias = [
  {
    categoria: 'Normativos',
    icone: FileText,
    cor: 'blue',
    itens: [
      {
        titulo: 'Decreto Estadual — Política de Transformação Digital',
        descricao: 'Decreto Nº 6.757/2024 que institui a Política Estadual de Transformação para o Governo Digital no Tocantins.',
        referencia: 'DOE 6.525 — 06/03/2024',
        tipo: 'Decreto'
      },
      {
        titulo: 'Decreto Nº 6.637/2023 — Comitê de Governança Digital',
        descricao: 'Institui o Comitê de Governança Digital para a Administração Pública do Estado do Tocantins.',
        referencia: 'DOE 6.346 — 12/06/2023',
        tipo: 'Decreto'
      },
      {
        titulo: 'Portaria ATI Nº 28/2026 — Segurança da Informação',
        descricao: 'Institui a Política de Segurança da Informação da Agência de Tecnologia da Informação do Estado.',
        referencia: 'DOE 7.011 — 02/03/2026',
        tipo: 'Portaria'
      }
    ]
  },
  {
    categoria: 'Documentos Oficiais',
    icone: Download,
    cor: 'green',
    itens: [
      {
        titulo: 'Relatório de Gestão 2025 — ATI',
        descricao: 'Consolidação dos avanços na modernização digital do Tocantins e expansão da conectividade.',
        referencia: 'Agência de Tecnologia da Informação',
        tipo: 'Relatório'
      },
      {
        titulo: 'Capacidades para a Transformação Digital — Tocantins',
        descricao: 'Relatório preliminar sobre as capacidades para transformação digital nos governos estaduais.',
        referencia: 'CONSAD — Outubro/2020',
        tipo: 'Estudo'
      },
      {
        titulo: 'Publicação em Diário Oficial - Ata de Registro de Preço',
        descricao: 'Pregão Eletrônico para registro de preços de serviço de telecomunicação via satélite\n' +
            'de baixa órbita.',
        referencia: 'DOE Nº 7.027 pag. 77',
        tipo: 'Publicação'
      }
    ]
  },
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
              Tocantins Conectado e outras políticas de conectividade do Estado do Tocantins.
            </p>
          </div>


          {/* Evidence Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
        </div>
      </section>
  );
}