import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  // Placeholder data for blog posts
  const posts = [
    {
      id: 1,
      title: "Como saber se o juro do meu carro é abusivo?",
      excerpt: "Aprenda a calcular e identificar taxas ilegais no seu financiamento veicular com este guia simples.",
      category: "Juros Abusivos",
      date: "12 Out 2023",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Nome sujo: Quanto tempo dura e como limpar?",
      excerpt: "Entenda os prazos do Serasa/SPC e como acelerar o processo de limpeza do seu nome.",
      category: "Limpa Nome",
      date: "05 Out 2023",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Direitos do Consumidor em compras online",
      excerpt: "Produto não chegou ou veio com defeito? Saiba seus direitos e como pedir o dinheiro de volta.",
      category: "Consumidor",
      date: "28 Set 2023",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Central de Ajuda</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Artigos, dicas e orientações para você entender seus direitos de forma simples e descomplicada.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-brand-gold uppercase tracking-wide">{post.category}</span>
                  <span className="text-xs text-slate-400">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 leading-tight hover:text-brand-blue cursor-pointer">
                  {post.title}
                </h2>
                <p className="text-slate-600 text-sm mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <Link to="#" className="inline-flex items-center text-brand-navy font-bold hover:text-brand-gold transition-colors text-sm mt-auto">
                  Ler artigo completo <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;