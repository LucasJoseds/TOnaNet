import { Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Sobre o Programa
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            História do <span className="text-blue-600">TO na Net</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            O programa TO na Net nasceu como uma iniciativa inovadora do Governo do Tocantins 
            para reduzir as lacunas de conectividade e promover a inclusão digital no estado.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block" />
          
          <div className="space-y-12">
            {/* 2023 */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                <Card className="bg-white border-blue-100 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-blue-600 mb-2 md:justify-end">
                      <Calendar className="w-5 h-5" />
                      <span className="font-semibold">19 de Abril de 2023</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Lançamento Oficial</h3>
                    <p className="text-slate-600">
                      Governador Wanderlei Barbosa lança o programa na aldeia Krahô Manoel Alves, 
                      em Itacajá, tornando-se o primeiro governador a levar internet gratuita a 
                      comunidades indígenas do Tocantins.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white hidden md:block" />
              <div className="md:w-1/2 md:pl-8" />
            </div>

            {/* 2024 */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8" />
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white hidden md:block" />
              <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
                <Card className="bg-white border-green-100 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-green-600 mb-2">
                      <Calendar className="w-5 h-5" />
                      <span className="font-semibold">2024</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Expansão no Jalapão</h3>
                    <p className="text-slate-600">
                      Entrega das primeiras torres de internet gratuita nas comunidades quilombolas 
                      do Prata e do Mumbuca, na região do Jalapão, conectando comunidades tradicionais 
                      ao mundo digital.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                <Card className="bg-white border-orange-100 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-blue-600 mb-2 md:justify-end">
                      <Calendar className="w-5 h-5" />
                      <span className="font-semibold">27 de Março</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Publicação em Diário Oficial </h3>
                    <p className="text-slate-600">
                      Publicação em Diário Oficial da Ata de Registro de Preços para Satélites de baixa órbita (LEO).
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white animate-pulse hidden md:block" />
              <div className="md:w-1/2 md:pl-8" />
            </div>

            {/* Atual */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8" />  {/* vazio à esquerda */}

              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-600 rounded-full border-4 border-white hidden md:block" />

              <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
                <Card className="bg-white border-orange-100 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-orange-600 mb-2">
                      <Calendar className="w-5 h-5" />
                      <span className="font-semibold">Em Execução</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      Meta 612 Comunidades
                    </h3>
                    <p className="text-slate-600">
                      O programa segue em expansão com o objetivo de atingir 612 comunidades
                      tradicionais do Tocantins, incluindo aldeias indígenas, quilombos e
                      povoados rurais.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
