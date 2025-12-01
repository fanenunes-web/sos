import React from 'react';
import LeadForm from '../components/LeadForm';
import { ServiceType } from '../constants';
import { Car, CreditCard, Percent, FileSearch } from 'lucide-react';

const JurosAbusivos: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Pare de Pagar <br/><span className="text-brand-gold">Juros Abusivos</span>
            </h1>
            <p className="text-lg text-blue-100">
              Reduza o valor da parcela do seu carro, empréstimo pessoal ou cartão de crédito. A lei está do seu lado para revisar contratos com taxas ilegais.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <Car className="text-brand-gold mb-2" size={24} />
                <h3 className="font-bold">Financiamento de Veículos</h3>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <CreditCard className="text-brand-gold mb-2" size={24} />
                <h3 className="font-bold">Cartão de Crédito</h3>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <LeadForm defaultService={ServiceType.JUROS_ABUSIVOS} />
          </div>
        </div>
      </section>

      {/* Identification Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Como identificar juros abusivos?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Os bancos muitas vezes embutem taxas que você não é obrigado a pagar. Veja os sinais mais comuns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 text-center hover:shadow-lg transition-shadow">
              <div className="inline-block p-4 bg-brand-gold/10 rounded-full text-brand-gold mb-4">
                <Percent size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Taxa Acima da Média</h3>
              <p className="text-slate-600">Se o juro do seu contrato for muito superior à média do Banco Central para a época, pode ser revisado.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 text-center hover:shadow-lg transition-shadow">
              <div className="inline-block p-4 bg-brand-gold/10 rounded-full text-brand-gold mb-4">
                <FileSearch size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Venda Casada</h3>
              <p className="text-slate-600">Seguros e títulos de capitalização embutidos no financiamento sem sua permissão clara são ilegais.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 text-center hover:shadow-lg transition-shadow">
              <div className="inline-block p-4 bg-brand-gold/10 rounded-full text-brand-gold mb-4">
                <Car size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Busca e Apreensão</h3>
              <p className="text-slate-600">Está com parcelas atrasadas e com medo de perder o bem? A ação revisional pode proteger seu patrimônio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Histórias de quem recuperou o controle</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-800 p-8 rounded-lg relative">
              <div className="text-brand-gold text-4xl font-serif absolute top-4 left-4">“</div>
              <p className="text-slate-300 italic mb-6 pt-4">
                Eu pagava R$ 1.200 de parcela no meu carro. Achava que ia perder o veículo. A equipe da SOS Associados conseguiu reduzir para R$ 750 e tirou as taxas ilegais. Foi um alívio enorme.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center font-bold">MS</div>
                <div>
                  <h4 className="font-bold">Marcos Silva</h4>
                  <span className="text-xs text-slate-400">Motorista de App</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg relative">
              <div className="text-brand-gold text-4xl font-serif absolute top-4 left-4">“</div>
              <p className="text-slate-300 italic mb-6 pt-4">
                Minha dívida de cartão de crédito triplicou em um ano. Eles negociaram direto com o banco e conseguiram um desconto que eu jamais conseguiria sozinha.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center font-bold">AL</div>
                <div>
                  <h4 className="font-bold">Ana Lúcia</h4>
                  <span className="text-xs text-slate-400">Comerciante</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-gold py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white">Envie seu contrato para análise</h2>
            <p className="text-amber-100">Não cobramos para verificar se há juros abusivos no seu caso.</p>
          </div>
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="bg-white text-brand-gold hover:bg-slate-100 px-8 py-3 rounded-md font-bold shadow-lg transition-colors">
            Solicitar Análise Gratuita
          </button>
        </div>
      </section>
    </div>
  );
};

export default JurosAbusivos;