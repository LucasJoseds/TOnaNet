import { Newspaper, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const materias = [
  {
    titulo: 'Wanderlei é o 1º governador a levar acesso gratuito à internet para comunidades indígenas do Tocantins',
    veiculo: 'Conexão Tocantins',
    data: '20/04/2023',
    tipo: 'Notícia',
    resumo: 'Governador Wanderlei Barbosa lançou o projeto Tô na Net na aldeia Krahô Manoel Alves, em Itacajá, tornando-se o primeiro governador em exercício a implementar acesso à internet em comunidade indígena tocantinense.',
    link: 'https://conexaoto.com.br/2023/04/20/wanderlei-e-o-1o-governador-a-levar-acesso-gratuito-a-internet-para-comunidades-indigenas-do-tocantins ',
    destaque: true
  },
  {
    titulo: 'Governador entrega as primeiras torres de projeto que vai conectar comunidades tradicionais',
    veiculo: 'O Girassol',
    data: '16/06/2024',
    tipo: 'Notícia',
    resumo: 'Entrega das primeiras torres de internet gratuita nas comunidades quilombolas do Prata e do Mumbuca, na região do Jalapão. O governador fez videoconferência de teste com a secretária a 600km de distância.',
    link: 'https://ogirassol.com.br/geral/governador-entrega-as-primeiras-torres-de-projeto-que-vai-conectar-comunidades-tradicionais-do-tocantins-ao-mundo/ ',
    destaque: true
  },
  {
    titulo: 'Tocantins marca Dia dos Povos Indígenas com programas de acesso à justiça e à internet',
    veiculo: 'Sagres Online',
    data: '20/04/2023',
    tipo: 'Notícia',
    resumo: 'Lançamento dos programas Tô na Net e Rejusto na aldeia Manoel Alves. O projeto deve levar internet gratuita a 612 comunidades tradicionais do Tocantins.',
    link: 'https://sagresonline.com.br/tocantins-marca-dia-dos-povos-indigenas-com-programas-de-acesso-a-justica-e-a-internet/ ',
    destaque: false
  },
  {
    titulo: 'Governo disponibiliza internet grátis às aldeias indígenas do Tocantins',
    veiculo: 'Jornal Opção',
    data: '20/04/2023',
    tipo: 'Notícia',
    resumo: 'Detalhes sobre a tecnologia de fibra óptica nos tótens que distribuem WiFi com velocidade de 10 Mbps, suportando até 350 dispositivos simultâneos.',
    link: 'https://www.jornalopcao.com.br/tocantins/governo-disponibiliza-internet-gratis-as-aldeias-indigenas-do-tocantins-484151/ ',
    destaque: false
  },
  {
    titulo: 'Aldeias, quilombos e povoados rurais no Tocantins recebem torres de Wi-Fi grátis',
    veiculo: 'Minha Operadora',
    data: '18/04/2023',
    tipo: 'Notícia',
    resumo: 'Projeto idealizado pelo deputado estadual Léo Barbosa busca levar internet gratuita para comunidades tradicionais do estado.',
    link: 'https://www.minhaoperadora.com.br/2023/04/aldeias-quilombos-e-povoados-rurais-no-tocantins-recebem-torres-de-wi-fi-gratis.html ',
    destaque: false
  },
  {
    titulo: 'Investimentos do Governo do Tocantins em tecnologia elevam conectividade das escolas',
    veiculo: 'Secom/TO',
    data: '28/01/2026',
    tipo: 'Release',
    resumo: 'Índice de conectividade das escolas estaduais chega a 89,1%, acima da média regional (60,5%) e nacional (69,7%). Projeto Wi-Fi nas Escolas integra o Profe Digital.',
    link: 'https://www.to.gov.br/secom/noticias/investimentos-do-governo-do-tocantins-em-tecnologia-elevam-conectividade-das-escolas-estaduais-para-891-acima-da-media-regional-e-nacional/1sg3id1x3mhl ',
    destaque: false
  }
];

export default function Materias() {
  return (
      <section id="materias" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
          <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Na Mídia
          </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Matérias e <span className="text-orange-600">Reportagens</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Acompanhe a cobertura jornalística sobre o programa TO na Net
              e as iniciativas de conectividade do Governo do Tocantins.
            </p>
          </div>

          {/* Featured News */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {materias.filter(m => m.destaque).map((materia, index) => (
                <Card key={index} className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-orange-600 text-white">Destaque</Badge>
                      <Badge variant="outline">{materia.tipo}</Badge>
                    </div>
                    <CardTitle className="text-xl text-slate-900 leading-tight">
                      {materia.titulo}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{materia.resumo}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <Newspaper className="w-4 h-4" />
                      {materia.veiculo}
                    </span>
                        <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                          {materia.data}
                    </span>
                      </div>
                      <Button size="sm" variant="outline" asChild>
                        <a href={materia.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Ler
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materias.filter(m => !m.destaque).map((materia, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <Badge variant="secondary" className="w-fit mb-2">{materia.tipo}</Badge>
                    <CardTitle className="text-lg text-slate-900 leading-tight">
                      {materia.titulo}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-4 line-clamp-3">{materia.resumo}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-slate-500">
                        <span>{materia.veiculo}</span>
                        <span className="mx-2">•</span>
                        <span>{materia.data}</span>
                      </div>
                      <Button size="sm" variant="ghost" asChild>
                        <a href={materia.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>
  );
}