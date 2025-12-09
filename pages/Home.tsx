import React from 'react';
import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import { ArrowRight, CheckCircle2, DollarSign, ShieldAlert } from 'lucide-react';
import { ServiceType } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-brand-navy min-h-[600px] flex items-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-transparent"></div>

        <div className="container mx-auto px-4 z-10 py-12 md:py-0">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-block px-3 py-1 bg-brand-gold/20 border border-brand-gold/30 rounded-full">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-wider">Consultoria Jurídica Especializada</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Saia do Vermelho em <span className="text-brand-gold">3 Cliques</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
                Recupere seu crédito e sua paz de espírito. Especialistas em renegociação de dívidas e redução de juros abusivos. Justiça acessível e transparente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/limpa-nome" className="px-8 py-4 bg-brand-gold hover:bg-amber-600 text-white rounded-md font-bold text-center transition-colors shadow-lg shadow-amber-900/20">
                  Limpar Meu Nome
                </Link>
                <Link to="/juros-abusivos" className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-navy rounded-md font-bold text-center transition-colors">
                  Revisar Juros
                </Link>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="w-full max-w-md">
                <LeadForm className="shadow-2xl shadow-black/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Selection */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Como podemos te ajudar hoje?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Nossa equipe está pronta para atuar com agilidade e precisão no seu caso. Escolha a opção que melhor descreve sua situação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <Link to="/limpa-nome" className="group relative bg-white rounded-2xl p-8 shadow-xl border border-slate-100 hover:border-brand-gold transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <CheckCircle2 size={120} className="text-brand-gold" />
              </div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-brand-blue">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-gold transition-colors">Limpa Nome</h3>
              <p className="text-slate-600 mb-6">
                Está com o nome negativado indevidamente ou quer renegociar suas dívidas com descontos reais? Saiba como proceder.
              </p>
              <span className="flex items-center text-brand-gold font-bold">
                Saiba Mais <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>

            {/* Card 2 */}
            <Link to="/juros-abusivos" className="group relative bg-white rounded-2xl p-8 shadow-xl border border-slate-100 hover:border-brand-gold transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <DollarSign size={120} className="text-brand-gold" />
              </div>
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 text-amber-700">
                <DollarSign size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-gold transition-colors">Juros Abusivos</h3>
              <p className="text-slate-600 mb-6">
                Financiou um veículo ou pegou um empréstimo e a parcela está pesada? Identifique cobranças ilegais e reduza sua dívida.
              </p>
              <span className="flex items-center text-brand-gold font-bold">
                Saiba Mais <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us / Authority */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1469&auto=format&fit=crop" 
              alt="Advogado analisando documentos" 
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Por que escolher a SOS Associados?</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="mt-1"><ShieldAlert className="text-brand-gold" size={24} /></div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Empatia e Representatividade</h4>
                  <p className="text-slate-600">Somos um escritório que entende a sua realidade. Nosso foco é acolher e resolver.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1"><CheckCircle2 className="text-brand-gold" size={24} /></div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Agilidade no Processo</h4>
                  <p className="text-slate-600">Usamos tecnologia para acelerar a análise do seu caso. Sem burocracia desnecessária.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1"><DollarSign className="text-brand-gold" size={24} /></div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Transparência Total</h4>
                  <p className="text-slate-600">Você saberá exatamente quais são as chances e os custos antes de fechar qualquer contrato.</p>
                </div>
              </div>
            </div>
            <div className="pt-4">
               <Link to="/sobre" className="text-brand-blue font-bold hover:underline">Conheça nossa história &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-brand-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Não deixe para depois o que afeta seu bolso hoje</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Cada dia com o nome sujo ou pagando juros abusivos é dinheiro perdido. Fale com um especialista agora mesmo.
          </p>
          <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="inline-block px-10 py-4 bg-brand-gold hover:bg-amber-600 text-white font-bold rounded-full transition-all hover:scale-105">
            Quero Falar com um Especialista
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;