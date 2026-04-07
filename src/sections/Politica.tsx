import { Scale, BookOpen, FileCheck, Landmark, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const perguntasIndicador = [
  {
    id: '1.12a',
    pergunta: 'Possui alguma política, programa, estrutura ou marco voltado para reduzir as lacunas de conectividade do Estado?',
    resposta: 'SIM',
    evidencias: [
      'Programa TO na Net - Internet gratuita para comunidades tradicionais',
      'Projeto Tocantins Net - Rede de fibra óptica interligando 139 municípios',
      'Profe Digital - Conectividade nas escolas estaduais',
      'Política Estadual de Transformação para o Governo Digital (Decreto 6.757/2024)',
      'Comitê de Governança Digital (Decreto 6.637/2023)'
    ]
  },
  {
    id: '1.12c',
    pergunta: 'Possui um programa de acesso à internet para população de baixa renda?',
    resposta: 'SIM',
    evidencias: [
      'TO na Net - Internet gratuita em 612 comunidades tradicionais',
      'Tótens WiFi gratuitos em praças e espaços públicos',
      'Parceria com Starlink para áreas remotas',
      'Programa Brasil Antenado - Kits de parabólica digital para famílias de baixa renda',
      'Wi-Fi nas Escolas - Acesso gratuito na rede estadual de ensino'
    ]
  }
];

const documentosComprobatorios = [
  {
    categoria: 'Normativos (Leis, Decretos, Portarias)',
    itens: [
      'Decreto Nº 6.757/2024 - Política Estadual de Transformação para o Governo Digital',
      'Decreto Nº 6.637/2023 - Comitê de Governança Digital',
      'Portaria ATI Nº 28/2026 - Política de Segurança da Informação',
      'Decreto Nº 6.620/2023 - Monitoramento Estratégico de Obras e Projetos'
    ]
  },
  {
    categoria: 'Planos Estratégicos e Relatórios',
    itens: [
      'Relatório de Gestão 2025 - Agência de Tecnologia da Informação',
      'Plano Tocantins Net - Rede de Banda Larga do Estado',
      'Estratégia Nacional de Escolas Conectadas - Dados do Tocantins',
      'Relatório de Capacidades para Transformação Digital - CONSAD'
    ]
  },
  {
    categoria: 'Contratos e Acordos',
    itens: [
      'Parceria Público-Privada Tocantins Net (em modelagem)',
      'Acordos com operadoras para expansão do LTE/4G',
      'Contratos de fornecimento de equipamentos de conectividade',
      'Termos de cooperação com o Ministério das Comunicações'
    ]
  }
];

export default function Politica() {
  return (
    <section id="politica" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-teal-100 text-teal-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Marco Legal
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Política de <span className="text-teal-600">Conectividade</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Documentação oficial que comprova a existência de políticas públicas 
            de conectividade no Estado do Tocantins.
          </p>
        </div>

        {/* Indicator Questions */}
        <div className="space-y-8 mb-16">
          {perguntasIndicador.map((item, index) => (
            <Card key={index} className="border-2 border-teal-200 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-teal-50 to-white border-b border-teal-100">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge className="bg-teal-600 text-white mb-2">Índice {item.id}</Badge>
                    <CardTitle className="text-lg text-slate-900">
                      {item.pergunta}
                    </CardTitle>
                  </div>
                  <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold">
                    <CheckCircle className="w-5 h-5" />
                    {item.resposta}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-teal-600" />
                  Evidências Aceitas:
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {item.evidencias.map((evidencia, evIndex) => (
                    <li key={evIndex} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mt-1.5 flex-shrink-0" />
                      <span>{evidencia}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Supporting Documents */}
        <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-teal-600" />
          Documentos Comprobatórios
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {documentosComprobatorios.map((doc, index) => (
            <Card key={index} className="border-slate-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold text-slate-900">
                  {doc.categoria}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {doc.itens.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm text-slate-600">
                      <Scale className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Official Links */}
        <div className="bg-teal-900 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Landmark className="w-6 h-6" />
                Acesso aos Documentos Oficiais
              </h3>
              <p className="text-teal-200">
                Todos os documentos normativos estão disponíveis para consulta pública 
                nos portais oficiais do Governo do Tocantins e Diário Oficial do Estado.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="https://www.to.gov.br/cge/decretos-estaduais"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-teal-900 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors text-center"
              >
                Decretos Estaduais
              </a>
              <a 
                href="https://diariooficial.to.gov.br"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors text-center"
              >
                Diário Oficial
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
