

export const WHATSAPP_NUMBER = "5511975557317"; // Número atualizado
export const CONTACT_EMAIL = "contato@sosassociados.com.br";

export const NAV_LINKS = [
  { label: 'Início', path: '/' },
  { label: 'Limpa Nome', path: '/limpa-nome' },
  { label: 'Juros Abusivos', path: '/juros-abusivos' },
  { label: 'Serviços', path: '/servicos' },
  { label: 'Sobre Nós', path: '/sobre' },
  { label: 'Blog', path: '/blog' },
];

export enum ServiceType {
  LIMPA_NOME = 'Limpa Nome',
  JUROS_ABUSIVOS = 'Juros Abusivos',
  CRIMINAL = 'Direito Criminal',
  PREVIDENCIARIO = 'Direito Previdenciário (INSS)',
  OUTROS = 'Outros'
}

export const BLOG_POSTS = [
  {
    id: 5,
    title: "Prisão em Flagrante e Audiência de Custódia: O que fazer?",
    excerpt: "Um familiar foi detido? Entenda a importância das primeiras 24 horas e como um advogado pode garantir a liberdade.",
    category: "Direito Criminal",
    date: "20 Out 2023",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2072&auto=format&fit=crop",
    content: `
      <p>O momento da prisão de um familiar é desesperador, mas manter a calma e agir rápido é essencial. As primeiras 24 horas são decisivas para definir se a pessoa responderá ao processo em liberdade ou aguardará presa.</p>

      <h3>1. O Direito ao Silêncio</h3>
      <p>Na delegacia, o detido tem o direito constitucional de permanecer calado. <strong>Não é recomendável dar depoimento sem a presença de um advogado.</strong> Qualquer palavra mal colocada pode ser usada contra ele no futuro. A orientação é simples: "Só falarei em juízo ou na presença do meu advogado".</p>

      <h3>2. O que é a Audiência de Custódia?</h3>
      <p>Após a prisão em flagrante, a pessoa deve ser apresentada a um juiz em até 24 horas. Nessa audiência, o juiz não julga se a pessoa é culpada ou inocente, mas sim se a prisão foi legal e se ela deve ser mantida.</p>
      
      <p>O advogado atua para provar que o acusado possui residência fixa, trabalho lícito e que não representa perigo à sociedade, pedindo a <strong>Liberdade Provisória</strong>, com ou sem fiança.</p>

      <h3>3. Acompanhamento em Delegacia</h3>
      <p>A presença do advogado na delegacia garante que a integridade física do preso seja respeitada e evita abusos de autoridade. Nossa equipe atua em regime de plantão para essas emergências.</p>

      <p class="font-bold text-red-600 mt-4">Emergência Criminal? Clique no botão de WhatsApp agora. Atendemos flagrantes 24h.</p>
    `
  },
  {
    id: 6,
    title: "INSS Negado: Como conseguir seu benefício na justiça?",
    excerpt: "Auxílio-Doença ou BPC/LOAS indeferido? O laudo do perito do INSS não é a palavra final. Saiba como recorrer.",
    category: "Previdenciário / INSS",
    date: "18 Out 2023",
    image: "https://images.unsplash.com/photo-1555431189-0fabf2667795?q=80&w=2070&auto=format&fit=crop",
    content: `
      <p>Receber a carta de indeferimento do INSS é frustrante, especialmente quando você está doente e incapaz de trabalhar, ou quando precisa do BPC (LOAS) para sobreviver. Infelizmente, a negativa administrativa é muito comum, mas <strong>não é o fim da linha</strong>.</p>

      <h3>Por que o INSS nega tanto?</h3>
      <p>Muitas vezes, as perícias médicas do INSS são rápidas e superficiais. O perito não é especialista na sua doença e acaba não avaliando corretamente a sua incapacidade. Além disso, erros na análise da documentação (CNIS) são frequentes.</p>

      <h3>Recurso Administrativo vs. Ação Judicial</h3>
      <p>Você pode recorrer no próprio INSS, mas as chances de reverter a decisão costumam ser baixas. O caminho mais eficaz é a <strong>Ação Judicial</strong>.</p>
      
      <p>Na justiça, quem fará a nova perícia é um médico de confiança do juiz, especialista na sua patologia. Ele terá mais tempo e cuidado para analisar seus exames e laudos. É muito comum que casos negados no INSS sejam ganhos na justiça.</p>

      <h3>Quais benefícios atuamos?</h3>
      <ul>
        <li><strong>BPC/LOAS:</strong> Para idosos acima de 65 anos ou pessoas com deficiência (inclusive crianças com TEA) de baixa renda.</li>
        <li><strong>Auxílio-Doença:</strong> Para quem está temporariamente incapaz de trabalhar.</li>
        <li><strong>Aposentadoria por Invalidez:</strong> Para incapacidade permanente.</li>
      </ul>

      <p>Reúna seus laudos médicos atualizados e nos procure. Lutamos para que você receba o que é seu por direito, inclusive os atrasados desde a data do primeiro pedido.</p>
    `
  },
  {
    id: 4,
    title: "Autismo (TEA): Terapias, Escola e Direitos",
    excerpt: "Plano de saúde negou o tratamento? Escola cobrou taxa extra? Saiba quais são os direitos garantidos por lei.",
    category: "Direitos da Saúde / TEA",
    date: "15 Out 2023",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop",
    content: `
      <p>O diagnóstico do Transtorno do Espectro Autista (TEA) traz desafios diários para as famílias, mas o acesso aos tratamentos e à educação não deveria ser mais um deles. A Lei Berenice Piana (12.764/12) equipara a pessoa com TEA à pessoa com deficiência para todos os efeitos legais, garantindo uma série de proteções.</p>

      <h3>1. Plano de Saúde e Terapias Multidisciplinares</h3>
      <p>É muito comum que planos de saúde limitem o número de sessões ou neguem coberturas para métodos específicos (como ABA, Denver, Bobath e Integração Sensorial). <strong>Isso é ilegal.</strong></p>
      <p>O tratamento deve ser fornecido conforme a prescrição médica, sem limite de sessões anuais. Se o plano não tiver rede credenciada capacitada na sua região, ele é obrigado a custear o tratamento particular integralmente.</p>

      <h3>2. Direito ao Acompanhante Terapêutico (AT) na Escola</h3>
      <p>Tanto em escolas públicas quanto privadas, a criança com TEA tem direito, se comprovada a necessidade, a um acompanhante especializado (monitor) para auxiliar na inclusão e no aprendizado.</p>
      <p><strong>Atenção:</strong> A escola particular <strong>NÃO pode cobrar taxa extra</strong> na mensalidade para fornecer esse profissional. Isso configura discriminação.</p>

      <h3>3. Compra de Carro com Isenção (PCD)</h3>
      <p>Pessoas no espectro autista (representadas pelos pais/responsáveis) têm direito à isenção de IPI, ICMS e IPVA na compra de veículos novos, além da liberação do rodízio municipal em cidades como São Paulo.</p>

      <h3>4. Benefício BPC/LOAS</h3>
      <p>Famílias de baixa renda que possuem crianças com TEA podem ter direito ao Benefício de Prestação Continuada (BPC), recebendo um salário mínimo mensal do governo, mesmo sem nunca ter contribuído para o INSS.</p>

      <p class="font-bold text-blue-900 mt-4">Na SOS Associados, somos pioneiros na defesa dessas causas. Se seu filho teve um direito negado, nós lutamos para reverter essa situação com urgência.</p>
    `
  },
  {
    id: 1,
    title: "Como saber se o juro do meu carro é abusivo?",
    excerpt: "Aprenda a calcular e identificar taxas ilegais no seu financiamento veicular com este guia simples.",
    category: "Juros Abusivos",
    date: "12 Out 2023",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop",
    content: `
      <p>Muitos brasileiros realizam o sonho do carro próprio através de financiamentos, mas acabam pagando quase dois veículos ao final do contrato. Isso acontece, muitas vezes, devido à cobrança de <strong>juros abusivos</strong>.</p>
      
      <h3>O que são juros abusivos?</h3>
      <p>Considera-se abusiva a taxa de juros que está muito acima da média de mercado divulgada pelo Banco Central para o mesmo tipo de operação e época da contratação. Além disso, a inclusão de taxas acessórias ilegais, como "Tarifa de Abertura de Crédito" (em contratos mais recentes) ou venda casada de seguros, também encarece a parcela.</p>

      <h3>Sinais de alerta:</h3>
      <ul>
        <li>A parcela do carro consome mais de 30% da sua renda mensal.</li>
        <li>O valor final do financiamento é quase o dobro do valor financiado.</li>
        <li>Foram embutidos seguros e títulos de capitalização que você não solicitou.</li>
      </ul>

      <h3>O que fazer?</h3>
      <p>A Ação Revisional de Contrato é o caminho jurídico para pedir a readequação das taxas. Com ela, é possível reduzir o valor da parcela e, em alguns casos, receber de volta o que foi pago a mais.</p>
      
      <p>Não deixe de procurar um especialista para analisar seu contrato gratuitamente antes de continuar pagando valores indevidos.</p>
    `
  },
  {
    id: 2,
    title: "Nome sujo: Quanto tempo dura e como limpar?",
    excerpt: "Entenda os prazos do Serasa/SPC e como acelerar o processo de limpeza do seu nome.",
    category: "Limpa Nome",
    date: "05 Out 2023",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
    content: `
      <p>Ter o "nome sujo" (CPF negativado) traz diversas restrições, como dificuldade para conseguir crédito, alugar imóveis e até conseguir emprego. Mas você sabe realmente como funciona a negativação?</p>

      <h3>A regra dos 5 anos (Prescrição)</h3>
      <p>O Código de Defesa do Consumidor determina que o nome do devedor não pode permanecer nos cadastros de restrição (SPC/Serasa) por mais de 5 anos a contar da data de vencimento da dívida. Após esse prazo, a restrição deve sair automaticamente.</p>
      
      <h3>Atenção: A dívida deixa de existir?</h3>
      <p>Não. A dívida continua existindo e o banco pode continuar cobrando extrajudicialmente (ligações, cartas), mas não pode manter seu nome sujo ou processar judicialmente (caso tenha prescrito).</p>

      <h3>Como limpar o nome antes dos 5 anos?</h3>
      <p>A forma mais rápida é através da negociação. Hoje existem feirões e assessorias jurídicas, como a SOS Associados, que conseguem descontos de até 90% para quitação à vista.</p>

      <h3>Nome sujo indevidamente</h3>
      <p>Se você já pagou a conta e seu nome continua sujo após 5 dias úteis, ou se nunca contraiu a dívida, você tem direito a uma indenização por danos morais e a limpeza imediata do nome através de liminar judicial.</p>
    `
  },
  {
    id: 3,
    title: "Direitos do Consumidor em compras online",
    excerpt: "Produto não chegou ou veio com defeito? Saiba seus direitos e como pedir o dinheiro de volta.",
    category: "Consumidor",
    date: "28 Set 2023",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop",
    content: `
      <p>Com o crescimento do e-commerce, aumentaram também os problemas com entregas, produtos defeituosos e dificuldades de cancelamento. O Código de Defesa do Consumidor (CDC) garante proteções específicas para quem compra fora do estabelecimento comercial (internet ou telefone).</p>

      <h3>1. Direito de Arrependimento (7 dias)</h3>
      <p>Essa é a regra de ouro das compras online. Você tem <strong>7 dias corridos</strong>, a contar da data de recebimento do produto, para desistir da compra por qualquer motivo. Não precisa ter defeito, nem precisa explicar o porquê. Pode ser porque você achou a cor feia pessoalmente ou simplesmente mudou de ideia.</p>
      
      <p><strong>Quem paga o frete da devolução?</strong><br>
      A loja. O risco do negócio é do vendedor. Ao exercer o direito de arrependimento, você deve receber de volta 100% do valor pago (incluindo o frete de ida) e não pode ser cobrado pelo frete de volta (logística reversa).</p>

      <h3>2. Produto com defeito</h3>
      <p>Se o produto apresentar defeito após os 7 dias (ou se você preferir acionar a garantia), os prazos para reclamação são:</p>
      <ul>
        <li><strong>30 dias</strong> para bens não duráveis (ex: alimentos, flores, cosméticos).</li>
        <li><strong>90 dias</strong> para bens duráveis (ex: eletrônicos, eletrodomésticos, roupas).</li>
      </ul>
      <p>A partir da sua reclamação, a loja/fabricante tem <strong>30 dias para consertar</strong> o problema. Se não consertarem nesse prazo, você pode exigir, à sua escolha: um produto novo, o dinheiro de volta corrigido ou abatimento proporcional no preço.</p>

      <h3>3. Atraso na entrega</h3>
      <p>Atraso na entrega configura descumprimento de oferta (Art. 35 do CDC). Se o produto não chegou no prazo estipulado, você não é obrigado a esperar indefinidamente. Você pode:</p>
      <ul>
        <li>Exigir o cumprimento forçado da entrega (envio imediato).</li>
        <li>Aceitar outro produto equivalente.</li>
        <li>Cancelar a compra e pedir o dinheiro de volta integralmente.</li>
      </ul>

      <h3>4. Propaganda Enganosa</h3>
      <p>Se o produto que chegou é diferente da foto ou da descrição técnica do site, isso é publicidade enganosa. Você tem o direito de exigir exatamente o que foi comprado ou cancelar o negócio com reembolso total e imediato.</p>

      <h3>5. Estorno no Cartão de Crédito</h3>
      <p>Muitas lojas demoram para processar o reembolso. Fique atento: uma vez cancelada a compra, a loja deve comunicar a administradora do cartão imediatamente. Se a cobrança continuar vindo nas faturas seguintes, você tem direito a receber esse valor em dobro (repetição do indébito) em alguns casos.</p>

      <p class="font-bold text-red-600 mt-4">Importante: Sempre guarde prints da tela da oferta, e-mails de confirmação e protocolos de atendimento. Eles são suas provas caso precise acionar a justiça.</p>
    `
  }
];
