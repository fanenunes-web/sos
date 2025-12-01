import React, { useState } from 'react';
import LeadForm from '../components/LeadForm';
import { ServiceType } from '../constants';
import { Calculator, Check, AlertTriangle } from 'lucide-react';

const LimpaNome: React.FC = () => {
  const [debtAmount, setDebtAmount] = useState<string>('');
  const [simulation, setSimulation] = useState<number | null>(null);

  const handleSimulate = () => {
    const amount = parseFloat(debtAmount);
    if (!isNaN(amount) && amount > 0) {
      // Simulação fictícia: redução de até 70%
      setSimulation(amount * 0.3);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero LP */}
      <header className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center gap-2 text-brand-gold font-bold">
              <Check size={20} /> <span>Limpa Nome</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Recupere seu Crédito no Mercado
            </h1>
            <p className="text-lg text-slate-300">
              Negocie suas dívidas com até <span className="text-brand-gold font-bold">90% de desconto</span> e remova apontamentos indevidos nos órgãos de proteção ao crédito (SPC/Serasa).
            </p>
            <ul className="space-y-3 pt-4">
              <li className="flex gap-3 text-slate-300">
                <div className="bg-green-500/20 p-1 rounded text-green-400"><Check size={16} /></div>
                Análise gratuita de contratos
              </li>
              <li className="flex gap-3 text-slate-300">
                <div className="bg-green-500/20 p-1 rounded text-green-400"><Check size={16} /></div>
                Suspensão de cobranças indevidas
              </li>
              <li className="flex gap-3 text-slate-300">
                <div className="bg-green-500/20 p-1 rounded text-green-400"><Check size={16} /></div>
                Retirada do nome dos órgãos de proteção
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
             <LeadForm defaultService={ServiceType.LIMPA_NOME} />
          </div>
        </div>
      </header>

      {/* Calculator Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
            <div className="bg-brand-blue p-6 text-white text-center">
              <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
                <Calculator /> Simulador de Economia
              </h2>
              <p className="text-blue-200 text-sm mt-2">Veja quanto você poderia economizar em uma negociação extrajudicial.</p>
            </div>
            <div className="p-8">
              <label className="block text-sm font-medium text-slate-700 mb-2">Valor total da sua dívida hoje (R$)</label>
              <div className="flex gap-4 flex-col sm:flex-row">
                <input 
                  type="number" 
                  placeholder="Ex: 5000"
                  className="flex-1 px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-brand-gold outline-none"
                  value={debtAmount}
                  onChange={(e) => setDebtAmount(e.target.value)}
                />
                <button 
                  onClick={handleSimulate}
                  className="bg-brand-gold hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-md transition-colors"
                >
                  Calcular Desconto
                </button>
              </div>

              {simulation !== null && (
                <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <p className="text-center text-green-800 font-medium mb-2">Estimativa de Acordo:</p>
                  <p className="text-center text-4xl font-bold text-green-600">
                    R$ {simulation.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}*
                  </p>
                  <p className="text-center text-xs text-green-700 mt-4">
                    *Valor estimado baseado em média de acordos. Cada caso é único. <br/>
                    <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="font-bold underline">Fale conosco para confirmar este valor.</a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Quando procurar um advogado?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <AlertTriangle className="text-red-500 shrink-0" size={32} />
              <div>
                <h3 className="font-bold text-lg mb-2">Dívida Prescrita</h3>
                <p className="text-slate-600">Se a dívida tem mais de 5 anos, ela não pode mais sujar seu nome. Se ainda consta, nós resolvemos.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <AlertTriangle className="text-red-500 shrink-0" size={32} />
              <div>
                <h3 className="font-bold text-lg mb-2">Cobrança Vexatória</h3>
                <p className="text-slate-600">Ligações excessivas, ameaças ou cobranças no trabalho são ilegais e geram indenização.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <AlertTriangle className="text-red-500 shrink-0" size={32} />
              <div>
                <h3 className="font-bold text-lg mb-2">Nome Negativado Indevidamente</h3>
                <p className="text-slate-600">Pagou a conta e o nome continua sujo? Você tem direito a indenização por danos morais.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <AlertTriangle className="text-red-500 shrink-0" size={32} />
              <div>
                <h3 className="font-bold text-lg mb-2">Juros Abusivos</h3>
                <p className="text-slate-600">A dívida virou uma bola de neve impagável? É hora de pedir revisão judicial.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LimpaNome;