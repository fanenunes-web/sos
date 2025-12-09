
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Share2, MessageCircle } from 'lucide-react';
import { BLOG_POSTS, WHATSAPP_NUMBER } from '../constants';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === Number(id));

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Artigo não encontrado</h2>
        <Link to="/blog" className="text-brand-blue underline">Voltar para o Blog</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Article Header */}
      <div className="relative h-[400px]">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60"></div>
        <div className="absolute inset-0 flex flex-col justify-end container mx-auto px-4 pb-12">
          <Link to="/blog" className="text-white/80 hover:text-white flex items-center gap-2 mb-6 w-fit transition-colors">
            <ArrowLeft size={20} /> Voltar para Central de Ajuda
          </Link>
          <div className="flex items-center gap-4 text-brand-gold text-sm font-bold uppercase tracking-wider mb-3">
            <span className="bg-brand-gold/20 px-3 py-1 rounded-full backdrop-blur-sm border border-brand-gold/30 flex items-center gap-2">
              <Tag size={14} /> {post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-2 text-slate-300 mt-4 text-sm">
            <Calendar size={16} /> <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>Por Equipe SOS Associados</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row gap-12">
        <main className="w-full md:w-3/4 max-w-3xl">
          <div 
            className="prose prose-lg prose-slate max-w-none 
            prose-headings:text-slate-900 prose-headings:font-bold 
            prose-p:text-slate-700 prose-p:leading-relaxed
            prose-a:text-brand-blue prose-a:font-bold hover:prose-a:underline
            prose-li:text-slate-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Article Footer / CTA */}
          <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ainda tem dúvidas sobre esse assunto?</h3>
            <p className="text-slate-700 mb-6">
              Cada caso é único. Nossa equipe de especialistas pode analisar sua situação específica gratuitamente e orientar sobre os próximos passos.
            </p>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Li o artigo sobre ${post.category} e gostaria de tirar uma dúvida.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg shadow-green-900/20"
            >
              <MessageCircle size={20} />
              Falar com um Especialista Agora
            </a>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="hidden md:block w-1/4 space-y-8">
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 sticky top-24">
            <h4 className="font-bold text-slate-900 mb-4">Compartilhe</h4>
            <div className="flex gap-2">
              <button className="p-2 bg-white border border-slate-200 rounded-full hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-colors">
                <Share2 size={20} />
              </button>
            </div>
            
            <hr className="my-6 border-slate-200" />
            
            <h4 className="font-bold text-slate-900 mb-4">Categorias</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="hover:text-brand-blue cursor-pointer transition-colors">Limpa Nome</li>
              <li className="hover:text-brand-blue cursor-pointer transition-colors">Juros Abusivos</li>
              <li className="hover:text-brand-blue cursor-pointer transition-colors">Consumidor</li>
              <li className="hover:text-brand-blue cursor-pointer transition-colors">Criminal</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogPost;
