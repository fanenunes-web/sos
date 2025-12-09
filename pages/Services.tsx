
import React from 'react';
import { Shield, User, Briefcase, Gavel, Heart, Siren, FileText } from 'lucide-react';
import LeadForm from '../components/LeadForm';

const Services: React.FC = () => {
  const servicesList = [
    {
      icon: <Shield className="w-8 h-8 text-brand-gold" />,
      title: "Direito do Consumidor",
      desc: "Defesa contra negativação indevida, problemas com voos, planos de saúde, telefonia e compras online."
    },
    {
      icon: <Gavel className="w-8 h-8 text-brand-gold" />,
      title: "Dívidas e Juros",
      desc: "Revisão de contratos bancários, redução de juros abusivos em financiamentos e negociação de dívidas."
    },
    {
      icon: <Siren className="w-8 h-8 text-brand-gold" />,
      title: "Direito Criminal",
      desc: "Acompanhamento em delegacias 24h, audiências de custódia, defesa em processos criminais e habeas corpus."
    },
    {
      icon: <FileText className="w-8 h-8 text-brand-gold" />,
      title: "Direito Previdenciário (INSS)",
      desc: "Concessão e restabelecimento de benefícios: Auxílio-Doença, BPC/LOAS e Aposentadorias negadas."
    },
    {
      icon: <User className="w-8 h-8 text-brand-gold" />,
      title: "Direito Civil",
      desc: "Indenizações por danos morais e materiais, contratos em geral e responsabilidade civil."
    },
    {
      icon: <Heart className="w-8 h-8 text-brand-gold" />,
      title: "Direito de Família",
      desc: "Divórcios, pensão alimentícia, guarda de filhos e inventários. Atuação sensível e discreta."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-brand-gold" />,
      title: "Direito Trabalhista",
      desc: "Defesa dos direitos do trabalhador: rescisões, horas extras, assédio moral e acidentes de trabalho."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-brand-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Áreas de Atuação</h1>
          <p className="text-slate-200">Soluções jurídicas completas para pessoa física.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Services List */}
          <div className="lg:w-2/3 space-y-6">
            {servicesList.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex gap-6 items-start border-l-4 border-brand-gold hover:translate-x-2 transition-transform duration-300">
                <div className="bg-slate-50 p-3 rounded-full shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600">{service.desc}</p>
                </div>
              </div>
            ))}
            
            <div className="bg-slate-200 p-6 rounded-lg mt-8 text-center text-slate-600 text-sm italic">
              Nota: Não atuamos com Direito Tributário ou Societário (Empresarial). Foco exclusivo em B2C.
            </div>
          </div>

          {/* Sidebar Form */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
