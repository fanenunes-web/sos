
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
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
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-48 overflow-hidden">
                <Link to={`/artigo/${post.id}`}>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </Link>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-brand-gold uppercase tracking-wide">{post.category}</span>
                  <span className="text-xs text-slate-400">{post.date}</span>
                </div>
                <Link to={`/artigo/${post.id}`}>
                  <h2 className="text-xl font-bold text-slate-900 mb-3 leading-tight hover:text-brand-blue cursor-pointer">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-slate-600 text-sm mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <Link to={`/artigo/${post.id}`} className="inline-flex items-center text-brand-navy font-bold hover:text-brand-gold transition-colors text-sm mt-auto">
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
