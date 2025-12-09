
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import LimpaNome from './pages/LimpaNome';
import JurosAbusivos from './pages/JurosAbusivos';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/limpa-nome" element={<LimpaNome />} />
          <Route path="/juros-abusivos" element={<JurosAbusivos />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/artigo/:id" element={<BlogPost />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
