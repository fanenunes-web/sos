import React from 'react';
import { Scale, Users, HeartHandshake, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Nossa História & Missão</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Consultoria Jurídica humanizada, diversa e comprometida com a verdadeira justiça social.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Main Story */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="w-full md:w-1/2">
             {/* Imagem atualizada para representar uma profissional negra, alinhada com a identidade do escritório */}
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1376&auto=format&fit=crop" 
              alt="Advogada da SOS Associados" 
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Quem Somos</h2>
            <p className="text-slate-700 leading-relaxed">
              A <strong>SOS Associados</strong> nasceu de um propósito claro: democratizar o acesso a uma defesa jurídica de alta qualidade. Fundado por um grupo de advogados negros, nosso escritório traz em seu DNA a luta por igualdade e a compreensão profunda das dificuldades enfrentadas pelo consumidor brasileiro.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Não somos apenas técnicos do direito; somos parceiros na solução dos seus problemas. Entendemos que por trás de cada dívida ou processo existe uma história, uma família e um sonho. Por isso, nosso atendimento é pautado pela empatia, sem "juridiquês", indo direto ao ponto para resolver sua vida financeira.
            </p>
          </div>
        </div>

        {/* Section: TEA / Autism Cause */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Heart size={200} className="text-brand-blue" />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-brand-blue mb-4 flex items-center gap-3">
              <Heart className="fill-brand-blue text-brand-blue" size={28} />
              Pioneirismo na Causa Autista (TEA)
            </h3>
            <p className="text-slate-700 leading-relaxed text-lg mb-4">
              Temos um orgulho imenso de ser um escritório <strong>pioneiro em ações judiciais para crianças com Transtorno do Espectro Autista (TEA)</strong>. 
            </p>
            <p className="text-slate-700 leading-relaxed">
              Entendemos a luta diária das famílias atípicas. Por isso, desenvolvemos teses jurídicas robustas para obrigar o Estado e Planos de Saúde a fornecerem o suporte adequado, incluindo terapias multidisciplinares, monitores escolares e acesso à educação inclusiva de qualidade. Para nós, garantir o desenvolvimento pleno dessas crianças não é apenas um serviço, é uma missão de vida.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-brand-gold text-center">
            <div className="flex justify-center mb-4 text-brand-navy">
              <Users size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3">Representatividade</h3>
            <p className="text-slate-600">
              Acreditamos que a justiça deve refletir o povo. Nossa equipe diversa traz perspectivas únicas e acolhedoras para cada caso.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-brand-navy text-center">
            <div className="flex justify-center mb-4 text-brand-navy">
              <Scale size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3">Justiça Acessível</h3>
            <p className="text-slate-600">
              Praticamos valores justos e oferecemos condições facilitadas, pois o direito de defesa não pode ser um luxo.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-brand-gold text-center">
            <div className="flex justify-center mb-4 text-brand-navy">
              <HeartHandshake size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3">Empatia Radical</h3>
            <p className="text-slate-600">
              Aqui você não é um número de processo. Ouvimos sua história com respeito e dedicação total.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-navy rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Precisa de ajuda jurídica?</h2>
          <p className="mb-8 text-slate-300">Nossa equipe está pronta para lutar pelos seus direitos.</p>
          <Link to="/" className="inline-block bg-brand-gold hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-md transition-colors">
            Fale Conosco
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;