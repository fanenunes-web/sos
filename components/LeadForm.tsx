
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { ServiceType, WHATSAPP_NUMBER } from '../constants';

interface LeadFormProps {
  defaultService?: ServiceType;
  className?: string;
  compact?: boolean;
}

const LeadForm: React.FC<LeadFormProps> = ({ defaultService = ServiceType.LIMPA_NOME, className = "", compact = false }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: defaultService
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Monta a mensagem para o WhatsApp
    const message = `Olá, meu nome é *${formData.name}*. Gostaria de falar com um especialista sobre *${formData.service}*.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Log para simulação (aqui entraria o Pixel do Facebook/Google Analytics)
    console.log("Lead capturado:", formData);
    
    // Abre o WhatsApp em nova aba
    window.open(whatsappUrl, '_blank');

    // Mostra mensagem de sucesso na tela
    setTimeout(() => setSubmitted(true), 800);
  };

  if (submitted) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-lg p-6 text-center ${className}`}>
        <div className="flex justify-center mb-3">
          <CheckCircle className="w-12 h-12 text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Redirecionando para WhatsApp...</h3>
        <p className="text-green-700 mb-4">Se a janela não abriu, clique no botão abaixo para falar com o advogado.</p>
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá, meu nome é ${formData.name}. Gostaria de falar sobre ${formData.service}.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-bold hover:bg-green-700 transition-colors"
        >
          Falar no WhatsApp
        </a>
        <button 
          onClick={() => setSubmitted(false)}
          className="block w-full text-center text-sm text-green-600 underline hover:text-green-800 mt-4"
        >
          Voltar
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg shadow-xl border-t-4 border-brand-gold ${className} ${compact ? 'p-4' : 'p-6 md:p-8'}`}>
      <h3 className={`font-bold text-slate-900 mb-4 ${compact ? 'text-xl' : 'text-2xl'}`}>
        Fale com um Especialista
      </h3>
      <p className="text-slate-600 mb-6 text-sm">
        Preencha os dados abaixo. Analisamos seu caso gratuitamente.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Seu Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all bg-white text-slate-900"
            placeholder="Ex: João da Silva"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Seu WhatsApp</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all bg-white text-slate-900"
            placeholder="(11) 99999-9999"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">Qual é o seu problema?</label>
          <select
            id="service"
            name="service"
            className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all bg-white text-slate-900"
            value={formData.service}
            onChange={handleChange}
          >
            <option value={ServiceType.LIMPA_NOME}>Nome Sujo / Negativação</option>
            <option value={ServiceType.JUROS_ABUSIVOS}>Juros Abusivos (Carro/Empréstimo)</option>
            <option value={ServiceType.CRIMINAL}>Direito Criminal (Delegacia/Processo)</option>
            <option value={ServiceType.PREVIDENCIARIO}>INSS / Aposentadoria / BPC</option>
            <option value={ServiceType.OUTROS}>Outros Assuntos</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-brand-gold hover:bg-amber-600 text-white font-bold py-4 rounded-md shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-2"
        >
          <span>Quero Resolver Agora</span>
          <Send size={18} />
        </button>
        
        <p className="text-xs text-center text-slate-500 mt-3">
          Seus dados estão seguros. Você será redirecionado para o WhatsApp.
        </p>
      </form>
    </div>
  );
};

export default LeadForm;
