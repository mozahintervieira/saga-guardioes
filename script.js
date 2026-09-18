'use strict';

const PHASES = [
  {
    id: 'portugues', icon: '📰', title: 'Vozes do Território', subject: 'Língua Portuguesa', color: '#315a8a',
    skill: 'EF69LP03', skillText: 'Identificar, em notícias, o fato central, suas principais circunstâncias e eventuais decorrências; em reportagens e fotorreportagens, o fato ou a temática retratada e a perspectiva de abordagem; em entrevistas, os principais temas e subtemas, explicações ou teses; e, em tirinhas, memes e charges, a crítica, ironia ou humor presente.', object: 'Estratégia de leitura: apreender os sentidos globais do texto.', bloom: 'Compreender → Analisar → Criar', guide: 'Araci e equipe de investigação', duration: '2 aulas de 50 minutos', evidence: 'Investiga uma reportagem real, consulta fontes, joga, usa apoios CAA e edita um boletim separando fato central, circunstâncias, decorrência e opinião.', curriculumSource: 'https://curriculo.sedu.es.gov.br/curriculo/wp-content/uploads/2026/04/EFAF_LP_26_16_12_25.pdf',
    intro: 'Uma reportagem real sobre acesso à água abre a investigação. Araci é uma personagem mediadora: sua fala é uma dramatização baseada nas fontes indicadas.', regionalContext: 'Conexão com o Espírito Santo: a SEDU registra a presença dos povos Tupinikim e Guarani Mbyá em Aracruz e orienta uma educação escolar indígena intercultural. O jogo compara fontes sem transformar povos capixabas em cenário ou personagem.', regionalSourceLinks:[['https://curriculo.sedu.es.gov.br/curriculo/educacaoescolarindigena/','SEDU/ES — Educação Escolar Indígena'],['https://curriculo.sedu.es.gov.br/curriculo/educacaoescolarquilombola/','SEDU/ES — Educação Escolar Quilombola']],
    art: 'assets/real/es-cacique-tupinikim.jpg', artAlt: 'Fotografia real do cacique Tupinikim Jaguaretê, do Espírito Santo, diante do Congresso Nacional em 2007. Registro histórico específico, não representação de todos os povos indígenas.',
    media: { label: 'Vídeo real para ampliar a investigação', title: 'Aldeia Guarani preserva o idioma e a memória comunitária', url: 'https://commons.wikimedia.org/wiki/File:Aldeia_ind%C3%ADgena_em_Maric%C3%A1_preserva_o_idioma_guarani.webm', videoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Aldeia_ind%C3%ADgena_em_Maric%C3%A1_preserva_o_idioma_guarani.webm', regionalVideoUrl: 'https://mapa.cultura.es.gov.br/projeto/830/', regionalVideoLabel: 'Conhecer vídeos e depoimentos do Caxambu Santa Cruz — Quilombo Monte Alegre (ES)', credit: 'ONU Brasil / Wikimedia Commons — CC BY 3.0. Vídeo real; o navegador precisa de internet para reproduzir.' },
    referenceText: 'REPORTAGEM-BASE — Em abril de 2026, a Agência Brasil informou que foram destinados R$ 53 milhões para dois superpoços e uma rede de distribuição de água na Reserva Indígena de Dourados (MS). A notícia relata falta de água havia cerca de cinco anos e informa que aproximadamente 20 mil indígenas Guarani Nhandeva, Guarani Kaiowá e Terena vivem nas aldeias Bororó e Jaguapiru. O anúncio e a destinação do recurso foram noticiados; a conclusão das obras não deve ser tratada como fato já realizado.',
    lessonPlan: ['Aula 1 — reportagem, áudio de Araci, fotografias reais, CAA, fontes e jogo de memória.', 'Aula 2 — Adugo introdutório, redação embaralhada, análise de fato/opinião e boletim final.'],
    tasks: [
      { type: 'explore', scene: 'Agência de investigação — Dourados (MS)', question: 'Abra as quatro estações, examine imagens e fontes e registre pistas para o boletim.', objective: 'Em cada estação, leia, ouça ou observe e depois pressione “Registrar esta pista”.', spots: [
        { icon: '🎙️', title: 'Conversar com Araci', action: 'Ouvir apresentação', image: 'assets/real/es-cacique-tupinikim.jpg', alt: 'Fotografia real do cacique Tupinikim Jaguaretê, do Espírito Santo, em Brasília, em 2007.', caption: 'Cacique Tupinikim Jaguaretê, Espírito Santo, 2007. Foto: Marcello Casal Jr./Agência Brasil, via Wikimedia Commons.', audio: 'assets/audio/araci-apresentacao.mp3', voiceUrl: 'https://radios.ebc.com.br/tarde-nacional-amazonia/2023/06/coletivo-tybyra-promove-debates-conscientizacao-sobre-indigenas-LGBTQIA%2B', voiceLabel: 'Ouvir entrevista de Danilo Tupinikim — voz real (EBC)', text: 'Araci apresenta o caso e ensina a separar o que a reportagem confirma do que ainda é promessa ou previsão. Araci é personagem fictícia e a gravação é uma mediação pedagógica. Para ouvir uma pessoa indígena real, abra a entrevista de Danilo Tupinikim, indígena nascido no Espírito Santo, disponibilizada pela Rádio Nacional.', caa: [['👩🏽','PERSONAGEM'],['🎧','VOZ REAL'],['💧','ÁGUA'],['🔎','INVESTIGAR']], sourceLabel: 'Reportagem-base: Agência Brasil', sourceUrl: 'https://agenciabrasil.ebc.com.br/saude/noticia/2026-04/verba-para-super-poco-em-reserva-indigena-esta-garantida-diz-ministro' },
        { icon: '🗺️', title: 'Mesa de Cartografia', action: 'Ler mapas criticamente', image: 'assets/mapa-etno-historico-brasil.jpg', alt: 'Mapa etno-histórico do Brasil com registros de numerosos povos e famílias linguísticas.', caption: 'Mapa etno-histórico do Brasil e regiões adjacentes, adaptado do mapa de Curt Nimuendajú. Foto: Leone Melo/Wikimedia Commons.', text: 'Mapas podem registrar localização, línguas, deslocamentos e territórios, mas resultam de escolhas de quem pesquisa e de quando foram produzidos. O mapeamento participativo inclui prioridades definidas pelos próprios povos.', caa: [['🗺️','MAPA'],['📍','LUGAR'],['👥','POVOS'],['🗣️','LÍNGUAS']], sourceLabel: 'Museu Goeldi: mapeamento participativo Kuikuro', sourceUrl: 'https://www.gov.br/museugoeldi/pt-br/arquivos/noticias/mapeamento-participativo-e-autogerenciamento-do-territorio-entre-os-kuikuro-do-alto-xingu' },
        { icon: '📸', title: 'Arquivo de fotografias', action: 'Ler imagem e legenda', image: 'assets/aldeia-indigena-porto-seguro-amanda-coutinho.jpg', alt: 'Paisagem com uma grande árvore, céu azul e vegetação em Porto Seguro, Bahia.', caption: 'Paisagem registrada em Porto Seguro (BA), 2021. Foto: Amanda Coutinho/Wikimedia Commons, CC BY 2.0.', text: 'Uma fotografia é fonte, mas não conta tudo sozinha. Legenda, local, data, autoria e contexto evitam conclusões apressadas. Nesta investigação, a imagem ajuda a conversar sobre território; ela não representa a Reserva de Dourados.', caa: [['📷','FOTO'],['📅','DATA'],['📍','LOCAL'],['©️','AUTORIA']], sourceLabel: 'Arquivo e licença da fotografia', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Aldeia_ind%C3%ADgena_(51227945232).jpg' },
        { icon: '🤝', title: 'Roda de vozes e direitos', action: 'Comparar comunidades', image: 'assets/comunidade-quilombola-antonio-cruz.jpg', alt: 'Duas mulheres quilombolas participam de um encontro público usando roupas e turbantes brancos.', caption: 'Participantes no lançamento da Agenda Social Quilombola, 2007. Foto: Antônio Cruz/Agência Brasil, CC BY 3.0 BR.', text: 'Povos indígenas e comunidades quilombolas têm histórias e identidades próprias. A comparação serve para reconhecer direitos, participação e diversidade — nunca para dizer que todas as comunidades são iguais.', caa: [['👂','ESCUTAR'],['🤝','PARTICIPAR'],['⚖️','DIREITOS'],['🌎','DIVERSIDADE']], sourceLabel: 'Fotografia no Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Quilombolas.jpg' }
      ], explanation: 'Você reuniu evidências, conferiu autoria e contexto e distinguiu a fala dramatizada de Araci das fontes reais.', hint: 'Abra cada estação e pressione “Registrar esta pista” depois de explorar o conteúdo.' },
      { type: 'memory', gameName:'Arquivo das Pistas Reais', gameOrigin:'atividade autoral de memória visual e leitura de fontes, criada para esta sequência', howToPlay:'abra dois cartões por vez; forme o par unindo a mesma fotografia ao nome e ao contexto correto; leia a legenda antes de confirmar.', question: 'Jogo da memória CAA: encontre seis pares usando fotografias e documentos reais. Os três povos aparecem em cartas próprias — não são um único grupo.', pairs: [
        { id:'nhandeva', label:'GUARANI ÑANDEVA', clue:'grupo em reunião religiosa no Mato Grosso do Sul, 2004', color:'#b95038', image:'assets/real/memoria-guarani-nhandeva.jpg', alt:'Grupo de Guarani Ñandeva reunido em uma reunião religiosa em uma reserva no Mato Grosso do Sul, fotografado em 2004.', credit:'Foto: Robertobra/Wikimedia Commons, CC BY-SA 3.0 e GFDL.', sourceUrl:'https://commons.wikimedia.org/wiki/File:NandevaCerimony.JPG' },
        { id:'kaiowa', label:'GUARANI KAIOWÁ', clue:'registro de expedição em Dourados (MS)', color:'#315a8a', image:'assets/real/candidato-kaiowa-1.jpg', alt:'Duas pessoas diante de uma casa de cobertura vegetal durante a Expedição Guarani Kaiowa, em Dourados, Mato Grosso do Sul.', credit:'Foto: Expedição Guarani Kaiowa/Wikimedia Commons, licença indicada na página do arquivo.', sourceUrl:'https://commons.wikimedia.org/wiki/Category:Dourados' },
        { id:'terena', label:'TERENA', clue:'registro da Grande Assembleia Terena, Aldeia Buriti (MS), 2017', color:'#d88b28', image:'assets/real/candidato-terena-1.jpg', alt:'Pessoa Terena com pintura e adornos durante registro da Grande Assembleia Terena na Aldeia Buriti, Mato Grosso do Sul, em 2017.', credit:'Foto: APIB Comunicação/Mídia Ninja/Wikimedia Commons, CC BY-SA 2.0.', sourceUrl:'https://commons.wikimedia.org/wiki/File:10%C2%B0_Grande_Assembl%C3%A9ia_do_Povo_Terena_-_Dia_4_(03.06.2017)_-_Aldeia_Buriti_Dois_Irm%C3%A3os_(MS)_(35012118502).jpg' },
        { id:'agua', label:'ÁGUA', clue:'direito e problema público investigado', color:'#23769f', image:'assets/real/nascente-tiete.jpg', alt:'Nascente do rio Tietê protegida por vegetação, usada como fotografia de referência para conversar sobre água e cuidado ambiental.', credit:'Foto: Ro Pimentel/Wikimedia Commons. A imagem não é da Reserva de Dourados.', sourceUrl:'https://commons.wikimedia.org/wiki/File:A_nascente_do_Tiet%C3%AA_em_Sales%C3%B3polis.JPG' },
        { id:'mapa', label:'MAPA', clue:'documento que representa territórios e povos', color:'#6f4a8e', image:'assets/mapa-etno-historico-brasil.jpg', alt:'Mapa etno-histórico do Brasil com registros de povos e famílias linguísticas.', credit:'Mapa etno-histórico do Brasil, adaptado de Curt Nimuendajú; arquivo disponibilizado por Leone Melo/Wikimedia Commons.', sourceUrl:'https://commons.wikimedia.org/wiki/File:Mapa_etno-hist%C3%B3rico_do_Brasil.jpg' },
        { id:'noticia', label:'REPORTAGEM', clue:'texto real de interesse público sobre abastecimento', color:'#347563', image:'assets/aldeia-urbana-marcal-de-souza.jpg', alt:'Rua com casas na Aldeia Indígena Urbana Marçal de Souza, em Campo Grande, Mato Grosso do Sul; fotografia de referência para ler uma reportagem.', credit:'Foto: Jerônimo Freitas Rodrigues de Carvalho/Wikimedia Commons, CC BY-SA 3.0. A imagem não é da Reserva de Dourados.', sourceUrl:'https://commons.wikimedia.org/wiki/File:Aldeia_ind%C3%ADgena_(51227945232).jpg' }
      ], explanation:'Você reconheceu três povos distintos e relacionou fotografias/documentos reais a conceitos da reportagem. As legendas mostram autoria, data e local para evitar que uma imagem seja tratada como representação de todas as comunidades.', hint:'Abra dois cartões. Procure a mesma fotografia e depois leia a legenda: o par certo une a foto ao nome e ao contexto correspondente.' },
      { type: 'newsroom', context: 'REPORTAGEM-BASE — Em abril de 2026, a Agência Brasil informou a destinação de R$ 53 milhões para dois superpoços e uma rede de distribuição de água na Reserva Indígena de Dourados (MS). A matéria relata cerca de cinco anos de falta de água e informa que aproximadamente 20 mil indígenas vivem nas aldeias Bororó e Jaguapiru.', question: 'Redação em movimento: organize os recortes embaralhados nas partes corretas do boletim.', cards: [
        { id:'main', text:'Foram destinados R$ 53 milhões para ampliar o acesso à água na Reserva Indígena de Dourados.', target:'central' },
        { id:'circ', text:'A reportagem cita cerca de 20 mil indígenas nas aldeias Bororó e Jaguapiru e relata falta de água havia aproximadamente cinco anos.', target:'circunstancias' },
        { id:'effect', text:'O projeto anunciado prevê dois superpoços e uma rede de distribuição de água.', target:'decorrencia' },
        { id:'opinion', text:'Essa será, sem dúvida, a obra mais perfeita já realizada no país.', target:'opiniao' }
      ], slots: [
        { id:'central', label:'Fato central', help:'O acontecimento principal' },
        { id:'circunstancias', label:'Circunstâncias', help:'Quando, onde ou como ocorreu' },
        { id:'decorrencia', label:'Decorrência', help:'O que aconteceu depois' },
        { id:'opiniao', label:'Opinião', help:'Avaliação ou julgamento' }
      ], explanation:'Os recortes mudam de posição a cada partida. Você construiu o sentido global do texto e separou acontecimento, contexto, previsão e julgamento.', hint:'Selecione um recorte e depois escolha a seção do boletim. A ordem inicial não revela a resposta.' },
      { type: 'onca', gameName:'Adugo (Jogo da Onça)', gameOrigin:'jogo de estratégia de povos indígenas brasileiros; referência educativa do Museu Nacional dos Povos Indígenas e da SME São Paulo', howToPlay:'observe a onça, a peça vizinha e a casa vazia; escolha uma captura por salto. Esta versão introdutória apresenta três capturas e não substitui uma partida completa.', context: 'INTERVALO CULTURAL — O Jogo da Onça, ou Adugo, é um jogo de estratégia de origem indígena brasileira. Na forma registrada pela Secretaria Municipal de Educação de São Paulo, uma peça representa a onça e outras 14 representam os cachorros; a onça captura saltando e os cachorros tentam cercá-la. Esta é uma rodada digital introdutória de três capturas, não a partida completa.', question: 'Desafio Adugo: ajude a onça a localizar três saltos de captura no tabuleiro.', explanation:'No Adugo, observar linhas, antecipar movimentos e planejar em grupo são parte da diversão. Para uma partida completa, use o material da fonte indicada no jogo.', hint:'A onça captura saltando sobre uma peça vizinha e chegando a uma casa vazia logo depois.', sourceLabel:'Museu Nacional dos Povos Indígenas e SME São Paulo', sourceUrl:'https://www.gov.br/museudoindio/pt-br/servicos/educativos-1' },
      { type: 'quiz', contextType: 'news', context: 'REPORTAGEM-BASE — Em abril de 2026, a Agência Brasil informou que foram destinados R$ 53 milhões para dois superpoços e uma rede de distribuição na Reserva Indígena de Dourados. A matéria relata falta de água havia cerca de cinco anos.', question: 'Qual é o fato central apresentado pela reportagem?', options: ['A reportagem prefere obras de grande porte.', 'Foram destinados recursos para ampliar o acesso à água na reserva.', 'Todos os problemas de abastecimento já foram resolvidos.', 'As aldeias deixaram de existir.'], correct: 1, explanation: 'O núcleo informativo é a destinação de recursos para o sistema de abastecimento. Conclusão das obras e solução total não foram apresentadas como fatos já realizados.', hint: 'Procure responder: o que foi anunciado ou confirmado?' },
      { type: 'quiz', contextType: 'news', context: 'RECORTE A — “A reportagem informa R$ 53 milhões e prevê dois superpoços.”\n\nRECORTE B — “Essa será, sem dúvida, a obra mais perfeita já realizada no país.”', question: 'Qual recorte apresenta uma opinião?', options: ['Somente o Recorte A.', 'Somente o Recorte B.', 'Os dois recortes.', 'Nenhum dos recortes.'], correct: 1, explanation: 'O Recorte B usa avaliação subjetiva e absoluta — “mais perfeita”. O Recorte A apresenta dados atribuídos à reportagem.', hint: 'Opinião traz avaliação; informação verificável pode ser conferida na fonte.' },
      { type: 'quiz', contextType: 'news', context: 'REPORTAGEM-BASE — O texto reúne local, povos citados, duração do problema, valor destinado e obras previstas. A fonte é a Agência Brasil e a notícia foi publicada em abril de 2026.', question: 'Qual é a principal finalidade desse texto jornalístico?', options: ['Ensinar a construir um poço.', 'Criar uma lenda sobre a água.', 'Informar sobre um problema público e as medidas anunciadas.', 'Vender equipamentos de irrigação.'], correct: 2, explanation: 'A reportagem organiza informações de interesse público sobre abastecimento de água e medidas anunciadas.', hint: 'Pense no que o leitor passa a saber depois da leitura.' },
      { type: 'sequence', gameName:'Linha do boletim responsável', gameOrigin:'jogo autoral de leitura crítica e produção jornalística', howToPlay:'troque duas cartas vizinhas até formar o caminho: fonte, contexto, fato, vozes e revisão.', question:'Jogo de produção: organize as etapas antes de publicar uma notícia sobre povos e comunidades.', cards:[
        {id:'fonte',title:'Conferir a fonte',text:'Quem publicou? Qual data, autoria e link?'},
        {id:'contexto',title:'Ler o contexto',text:'Onde aconteceu? Quem participa? O que ainda não foi confirmado?'},
        {id:'vozes',title:'Ouvir as vozes',text:'Incluir pessoas e organizações sem falar por elas.'},
        {id:'revisao',title:'Revisar linguagem',text:'Retirar estereótipos, opinião disfarçada e informação sem prova.'}
      ], order:['fonte','contexto','vozes','revisao'], explanation:'Uma cobertura responsável combina fonte verificável, contexto, participação e revisão antirracista.', hint:'Não publique antes de conferir a fonte e o contexto.' },
      { type:'multi', required:3, context:'ERER — Uma reportagem escolar vai apresentar uma comunidade quilombola e uma aldeia indígena. O objetivo é informar com direitos, diversidade e participação.', question:'Quais escolhas tornam o boletim mais inclusivo?', options:[
        {title:'Citar a fonte e a data',text:'Permite verificar de onde veio a informação.',good:true},
        {title:'Usar “índio” como rótulo para todos',text:'Apaga povos, nomes e identidades específicas.',good:false},
        {title:'Consultar a comunidade e reconhecer autoria',text:'Evita falar no lugar das pessoas.',good:true},
        {title:'Usar imagem sem legenda',text:'A fotografia fica sem local, data e contexto.',good:false},
        {title:'Nomear racismo e desigualdade quando a fonte mostrar',text:'Torna visíveis direitos e barreiras reais.',good:true}
      ], explanation:'ERER exige especificar povos e comunidades, conferir fontes, garantir voz e nomear desigualdades sem estereotipar.', hint:'Escolha práticas de apuração, participação e linguagem respeitosa.' }
    ]
  },
  {
    id: 'historia', icon: '🏺', title: 'Rotas de Mali', subject: 'História', color: '#b95038',
    skill: 'EF06HI14/ES', skillText: 'Identificar e analisar diferentes formas de contato, adaptação ou exclusão entre populações em diferentes tempos e espaços, compreendendo as diferentes formas de organização presentes na África, Ásia, América e Europa.', object: 'A passagem do mundo antigo para o mundo medieval; a fragmentação do poder político na Idade Média.', bloom: 'Compreender → Analisar → Avaliar', guide: 'Equipe de pesquisa histórica', evidence: 'Investiga Mali e Tombuctu como estudo de caso e compara formas de organização, contatos, adaptações e exclusões em diferentes sociedades.', curriculumSource: 'https://curriculo.sedu.es.gov.br/curriculo/wp-content/uploads/2025/12/EFAF_HI_26_09_12_25.pdf',
    intro: 'Fontes históricas e o patrimônio de Tombuctu ajudam a investigar o Império do Mali, suas cidades, redes de troca e produção de conhecimentos.', regionalContext: 'Conexão com o Espírito Santo: a comparação inclui a memória territorial indígena e quilombola capixaba como outra experiência histórica, sem dizer que Mali e ES são a mesma sociedade.',
    art: 'assets/real/sankore.jpg', artAlt: 'Fotografia real da Mesquita de Sankore, em Tombuctu, Mali, usada como fonte histórica e patrimonial.',
    media: { label: 'Documentário e patrimônio', title: 'On the Trail of Timbuktu’s Manuscripts', url: 'https://whc.unesco.org/en/events/1252', credit: 'UNESCO World Heritage Centre. Página de evento e documentário sobre manuscritos de Tombuctu; não é uma dramatização do jogo.' },
    referenceText: 'TEXTO-BASE — Na passagem do mundo antigo para o medieval, o poder político se fragmentou em partes da Europa, enquanto sociedades da África, Ásia e América organizaram reinos, impérios, cidades e outras formas de vida política. Como estudo de caso africano, a UNESCO descreve Tombuctu como centro comercial, espiritual e intelectual conectado às rotas transaarianas. Mali ajuda a analisar contatos e organizações distintas, sem transformar África, Europa, Ásia ou América em blocos homogêneos.',
    lessonPlan: ['Aula 1 — investigação visual de Tombuctu, Sankore, manuscritos e rotas; leitura de legendas e fontes.', 'Aula 2 — decisões no jogo, mediação de trocas, análise histórica e síntese comparativa.'],
    tasks: [
      { type: 'explore', scene: 'Arquivo histórico — Mali e Tombuctu', question: 'Investigue quatro fontes reais antes de decidir como as redes de Mali funcionavam.', objective: 'Observe a imagem, leia a legenda, confira a fonte e registre uma conclusão em cada estação.', spots: [
        { icon: '🛰️', title: 'Tombuctu vista do espaço', action: 'Localizar e inferir', image: 'assets/real/tombuctu-satelite.jpg', alt: 'Imagem de satélite em tons claros mostra Tombuctu entre o deserto e áreas próximas ao rio Níger.', caption: 'Tombuctu, Mali, observada pelo sensor ASTER. NASA/JPL, domínio público.', text: 'A cidade fica próxima ao rio Níger e no encontro de rotas transaarianas. A imagem ajuda a pensar por que localização, água e deslocamento foram importantes, mas ela não mostra sozinha como as pessoas viviam.', caa: [['🛰️','IMAGEM'],['📍','LOCAL'],['💧','ÁGUA'],['↔️','ROTAS']], sourceLabel: 'Arquivo NASA/Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Timbuktu,_Mali_(ASTER).jpg' },
        { icon: '🕌', title: 'Mesquita de Sankore', action: 'Ler arquitetura', image: 'assets/real/sankore.jpg', alt: 'Fotografia da Mesquita de Sankore, construída em terra, com muros espessos e torre central, em Tombuctu.', caption: 'Mesquita de Sankore, Tombuctu, 2005. Foto: upyernoz/Wikimedia Commons, CC BY 2.0.', text: 'A UNESCO relaciona Sankore à vida intelectual e espiritual de Tombuctu. A arquitetura de terra exige manutenção comunitária e evidencia técnicas adaptadas ao ambiente; ela não é sinal de atraso.', caa: [['🕌','SANKORE'],['🧱','TERRA'],['📚','ESTUDO'],['👥','COMUNIDADE']], sourceLabel: 'Patrimônio Mundial — UNESCO', sourceUrl: 'https://whc.unesco.org/en/list/119' },
        { icon: '📜', title: 'Manuscritos de Tombuctu', action: 'Investigar o acervo', image: 'assets/real/manuscrito-tombuctu.jpg', alt: 'Pessoa com luvas trabalha na limpeza e conservação de um manuscrito antigo de Tombuctu.', caption: 'Conservação de manuscrito de Tombuctu, 2019. Foto: Mark Fischer/Wikimedia Commons, CC BY-SA 2.0.', text: 'Milhares de manuscritos preservam estudos de religião, direito, astronomia, medicina, matemática e outros campos. A fotografia registra conservação atual; os documentos mostram produção e circulação histórica de conhecimento.', caa: [['📜','DOCUMENTO'],['🧤','CONSERVAR'],['🧠','CONHECIMENTO'],['©️','AUTORIA']], sourceLabel: 'Arquivo e licença da fotografia', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Timbuktu_Manuscript_(48522180467).jpg' },
        { icon: '🐪', title: 'Caravana no Saara', action: 'Planejar a travessia', image: 'assets/real/caravana-mali.jpg', alt: 'Fotografia de uma caravana com pessoas, animais de carga e um dromedário atravessando uma paisagem desértica no Mali.', caption: 'Caravana no Saara, Mali, 1997. Foto: Jeanne Menjoulet/Wikimedia Commons, CC BY 2.0.', text: 'Caravanas transportavam produtos e também conectavam pessoas, línguas, técnicas e ideias. A foto é de 1997: ela ilustra o ambiente e o deslocamento, mas não deve ser apresentada como fotografia do Império medieval.', caa: [['🐪','CARAVANA'],['🧂','TROCAS'],['🧭','ROTA'],['⚠️','DATA']], sourceLabel: 'Arquivo e licença da fotografia', sourceUrl: "https://commons.wikimedia.org/wiki/File:Mali_Sahara,_carav'%C3%A2nes,_caravane_du_d%C3%A9sert_(8440884316).jpg" }
      ], explanation: 'Sua participação mostrou uma sociedade com governo, estudo, comércio, acordos e responsabilidades coletivas.', hint: 'Abra cada espaço da cidade e realize a ação indicada.' },
      { type: 'quiz', context: 'No século XIV, cidades como Tombuctu integravam rotas comerciais. Mercadores, estudiosos e viajantes circulavam com ouro, sal, livros e conhecimentos.', question: 'O que essa informação permite concluir?', options: ['A África não possuía cidades organizadas.', 'Mali participava de redes econômicas e culturais amplas.', 'As trocas começaram somente após a colonização europeia.', 'O comércio impedia a circulação de conhecimentos.'], correct: 1, explanation: 'O Império do Mali articulava cidades, governo, comércio e centros de estudo antes da colonização europeia.', hint: 'Observe tudo o que circulava além de mercadorias.' },
      { type: 'quiz', context: 'Dois grupos chegam ao mercado com costumes e idiomas diferentes. Ambos desejam trocar produtos com segurança.', question: 'Qual decisão favorece mediação e respeito?', options: ['Proibir um dos grupos de entrar.', 'Exigir que todos abandonem seus costumes.', 'Criar acordos, intérpretes e regras justas de troca.', 'Usar força para definir quem tem razão.'], correct: 2, explanation: 'Mediação, comunicação e regras pactuadas favorecem contatos respeitosos e trocas entre diferentes populações.', hint: 'Escolha a ação que permite participação e diálogo.' },
      { type: 'quiz', context: 'Na passagem do mundo antigo para o medieval, partes da Europa viveram fragmentação do poder político. Em outros espaços, sociedades africanas, asiáticas e americanas desenvolveram reinos, impérios, cidades-Estado e diferentes formas de organização.', question: 'Qual comparação está de acordo com a investigação histórica?', options: ['Existe apenas uma forma correta de organizar uma sociedade.', 'Diferentes formas políticas coexistiram e se transformaram por contatos, adaptações, conflitos e exclusões.', 'Toda sociedade seguiu a mesma sequência política europeia.', 'África, Ásia e América permaneceram isoladas durante todo o período.'], correct: 1, explanation: 'A habilidade exige analisar diferentes formas de organização e de contato sem usar a experiência europeia como medida única para todas as sociedades.', hint: 'Procure a alternativa que reconhece diversidade histórica, mudança e contato.' },
      { type:'sequence', gameName:'Detetives das fontes', gameOrigin:'jogo autoral de investigação histórica com leitura de evidências', howToPlay:'ordene as cartas do vestígio até a conclusão; depois explique o que a fonte permite e o que ela não permite afirmar.', question:'Jogo histórico: qual é a sequência mais cuidadosa para interpretar um documento?', cards:[
        {id:'vestigio',title:'Observar o vestígio',text:'Imagem, objeto, manuscrito, mapa ou relato.'},
        {id:'identificar',title:'Identificar autoria e data',text:'Quem produziu? Quando? Em que contexto?'},
        {id:'comparar',title:'Comparar fontes',text:'Outra evidência confirma, amplia ou contradiz?'},
        {id:'concluir',title:'Construir uma conclusão',text:'Dizer o que a evidência sustenta e registrar limites.'}
      ], order:['vestigio','identificar','comparar','concluir'], explanation:'Historiadores não tiram conclusões apenas pela aparência: contextualizam, comparam e explicitam limites.', hint:'Uma imagem sem autoria e data ainda precisa de investigação.' },
      { type:'multi', required:3, context:'ERER — A história do Brasil também é formada por resistências, territórios e produções de povos africanos, afro-brasileiros, indígenas e comunidades quilombolas.', question:'Quais atitudes ajudam a estudar essas histórias com justiça?', options:[
        {title:'Pesquisar protagonismos e organizações',text:'Mostra pessoas como sujeitos históricos, não como figurantes.',good:true},
        {title:'Contar apenas a versão do colonizador',text:'Apaga experiências e conflitos.',good:false},
        {title:'Usar fontes de autoria negra, indígena e quilombola',text:'Amplia perspectivas e autoria.',good:true},
        {title:'Tratar África como um único país',text:'Ignora povos, regiões e temporalidades.',good:false},
        {title:'Relacionar passado e racismo atual com cuidado',text:'Ajuda a reconhecer permanências sem anacronismo.',good:true}
      ], explanation:'ERER amplia sujeitos, fontes e perguntas históricas; não troca um estereótipo por outro.', hint:'Escolha ações que ampliem vozes e contextualizem o tempo histórico.' }
    ]
  },
  {
    id: 'ciencias', icon: '🌍', title: 'Coração da Terra', subject: 'Ciências', color: '#d88b28',
    skill: 'EF06CI10/ES', skillText: 'Identificar as diferentes camadas que estruturam o planeta Terra, da estrutura interna à atmosfera, e suas principais características, diferenciando-as e descrevendo-as por meio de modelos bidimensionais e tridimensionais, e reconhecer distintos modelos representativos do planeta em diferentes épocas e culturas.', object: 'Estrutura da Terra.', bloom: 'Lembrar → Compreender → Comparar', guide: 'Equipe do laboratório de Ciências', evidence: 'Constrói um modelo em camadas, descreve características e compara modelos científicos bidimensionais e tridimensionais e representações de diferentes épocas e culturas.', curriculumSource: 'https://curriculo.sedu.es.gov.br/curriculo/wp-content/uploads/2025/12/EFAF_CI_26_09_12_25.pdf',
    intro: 'Entre no laboratório de modelos: construa as camadas da Terra e diferencie evidência científica, representação didática e saber cultural.', regionalContext: 'Conexão com o Espírito Santo: a leitura ambiental considera Mata Atlântica e territórios de Aracruz e do sul capixaba como contextos locais de observação, sem inventar medições de campo.',
    art: 'assets/real/camadas-terra-nasa.png', artAlt: 'Imagem científica real da NASA com representação das camadas internas da Terra.',
    media: { label: 'Animação científica', title: 'Estrutura interna (ou camadas) da Terra', url: 'https://commons.wikimedia.org/wiki/File:Estructura_interna_(o_capas)_de_la_Tierra.webm', credit: 'Wikimedia Commons, animação CC BY-SA 4.0, com legenda em espanhol.' },
    referenceText: 'TEXTO-BASE — A NASA descreve a Terra sólida em quatro partes principais: crosta, manto, núcleo externo e núcleo interno. A crosta é fina em comparação com o planeta; o manto é a camada mais espessa; o núcleo externo é fluido e o interno é sólido. Modelos usam cores e cortes para tornar visível o que não podemos observar diretamente.',
    lessonPlan: ['Aula 1 — leitura de diagramas reais, vídeo curto e comparação entre modelo e planeta.', 'Aula 2 — montagem digital das camadas, justificativas, revisão e aplicação dos conceitos.'],
    tasks: [
      { type: 'explore', scene: 'Laboratório de modelos da Terra', question: 'Compare imagens científicas e descubra o que cada modelo consegue explicar.', objective: 'Explore as quatro bancadas. Em cada uma, observe, leia e registre a função do modelo.', spots: [
        { icon: '🌍', title: 'Corte da Terra — NASA', action: 'Observar proporções', image: 'assets/real/camadas-terra-nasa.png', alt: 'Diagrama da NASA mostra um corte da Terra com crosta fina, manto espesso e núcleo dividido em partes externa e interna.', caption: 'Diagrama das camadas da Terra. NASA, domínio público.', text: 'O desenho permite enxergar o interior, mas usa cores convencionais e amplia partes muito finas. A crosta aparece como uma pequena fração do raio terrestre; o manto ocupa grande parte do interior.', caa: [['🌍','TERRA'],['🥚','CROSTA'],['🟠','MANTO'],['🔥','NÚCLEO']], sourceLabel: 'NASA Earth Facts', sourceUrl: 'https://science.nasa.gov/earth/facts/' },
        { icon: '🔢', title: 'Modelo numerado em escala', action: 'Relacionar números', image: 'assets/real/corte-terra.svg', alt: 'Diagrama científico numerado apresenta crosta, manto, núcleo externo líquido e núcleo interno sólido em corte.', caption: 'Esquema numerado do interior da Terra. USGS/Wikimedia Commons, domínio público.', text: 'Um corte em escala aproxima as proporções reais; o detalhe lateral amplia subdivisões que seriam quase invisíveis. O mesmo modelo pode ter uma parte em escala e outra apenas esquemática.', caa: [['1️⃣','CROSTA'],['2️⃣','MANTO'],['3️⃣','NÚCLEO'],['📏','ESCALA']], sourceLabel: 'Arquivo e descrição técnica', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Earth-cutaway-schematic-numbered.svg' },
        { icon: '▶️', title: 'Animação das camadas', action: 'Assistir com pausa', video: 'assets/real/camadas-terra.webm', poster: 'assets/real/camadas-terra-nasa.png', alt: 'Animação curta apresenta as camadas internas da Terra.', caption: 'Animação Estrutura interna da Terra, Wikimedia Commons, CC BY-SA 4.0; texto visual em espanhol.', text: 'Assista uma vez inteira e depois pause para apontar crosta, manto, núcleo externo e núcleo interno. O professor pode apoiar a leitura dos termos em espanhol.', caa: [['▶️','ASSISTIR'],['⏸️','PAUSAR'],['👉','APONTAR'],['🗣️','EXPLICAR']], sourceLabel: 'Arquivo do vídeo e licença', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Estructura_interna_(o_capas)_de_la_Tierra.webm' },
        { icon: '🧪', title: 'Limites do modelo', action: 'Pensar como cientista', image: 'assets/real/camadas-terra-nasa.png', alt: 'O diagrama colorido da Terra reaparece para análise crítica das escolhas do modelo.', caption: 'O mesmo diagrama é retomado para comparar informação, cor e proporção.', text: 'Cores fortes ajudam a separar camadas, mas não são fotografias do interior. Cientistas combinam ondas sísmicas, propriedades de materiais e cálculos para construir e revisar modelos.', caa: [['🎨','CORES'],['📈','DADOS'],['🧩','MODELO'],['🔁','REVISAR']], sourceLabel: 'NASA — interior da Terra', sourceUrl: 'https://science.nasa.gov/photojournal/earth-interior-graphic/' }
      ], explanation: 'Você comparou modelos, evidências, proporções e limites antes de construir sua própria representação.', hint: 'Pergunte em cada bancada: o que consigo enxergar e o que foi simplificado?' },
      { type: 'earthBuild', gameName:'Laboratório de Camadas', gameOrigin:'simulação didática baseada em modelos científicos da estrutura da Terra', howToPlay:'toque nas camadas na ordem do exterior para o interior; observe a espessura, o estado físico e a legenda antes de registrar.', question: 'Construa um modelo da Terra do exterior para o interior.', pieces: [
        { id: 'atmosfera', label: 'Atmosfera', icon: '☁️', text: 'Camada de gases que envolve o planeta.' },
        { id: 'crosta', label: 'Crosta', icon: '⛰️', text: 'Camada sólida mais externa.' },
        { id: 'manto', label: 'Manto', icon: '🌋', text: 'Rochas muito quentes que se deformam lentamente.' },
        { id: 'nucleo', label: 'Núcleo', icon: '🔥', text: 'Região central, muito quente, rica em ferro e níquel.' }
      ], order: ['atmosfera','crosta','manto','nucleo'], explanation: 'Você montou o modelo do exterior para o interior: atmosfera, crosta, manto e núcleo.', hint: 'Comece pela camada que envolve todo o planeta.' },
      { type: 'earth', label: 'Atmosfera', question: 'Qual camada gasosa envolve o planeta e participa do clima e da proteção da vida?', options: ['Crosta', 'Manto', 'Núcleo', 'Atmosfera'], correct: 3, explanation: 'A atmosfera é o conjunto de gases ao redor da Terra. Ela participa do clima e filtra parte da radiação solar.', hint: 'Ela está ao redor, não no interior do planeta.' },
      { type: 'earth', label: 'Crosta', question: 'Em qual camada sólida e mais externa estão continentes, oceanos e os territórios onde vivemos?', options: ['Crosta', 'Manto', 'Núcleo', 'Atmosfera'], correct: 0, explanation: 'A crosta é a camada sólida mais externa e relativamente fina da Terra.', hint: 'Pense na “casca” do planeta.' },
      { type: 'earth', label: 'Manto', question: 'Qual camada muito espessa, formada por rochas quentes, apresenta movimentos lentos relacionados à dinâmica das placas?', options: ['Atmosfera', 'Crosta', 'Manto', 'Núcleo'], correct: 2, explanation: 'O manto fica abaixo da crosta. Suas rochas muito quentes se deformam lentamente e participam da dinâmica interna.', hint: 'Ela fica entre a crosta e o núcleo.' },
      { type: 'earth', label: 'Modelos e saberes', question: 'Como comparar o modelo científico da Terra e cosmologias tradicionais com respeito?', options: ['Dizer que toda narrativa cultural é um erro científico.', 'Misturar tudo como se tivesse a mesma finalidade.', 'Reconhecer finalidades e contextos: a ciência testa modelos; cosmologias expressam saberes, valores e relações culturais.', 'Proibir conhecimentos que não aparecem no livro de Ciências.'], correct: 2, explanation: 'Comparar com respeito exige reconhecer que diferentes sistemas de conhecimento podem ter métodos, sentidos e finalidades próprios.', hint: 'Respeitar não significa apagar as diferenças entre os conhecimentos.' },
      { type:'sequence', gameName:'Laboratório: modelo e evidência', gameOrigin:'jogo autoral de investigação científica', howToPlay:'organize as etapas de uma investigação; toque nas cartas para trocar posições e depois justifique a ordem.', question:'Jogo de investigação: organize como construir e testar um modelo da Terra.', cards:[
        {id:'pergunta',title:'Perguntar',text:'Que camada ou característica queremos representar?'},
        {id:'evidencia',title:'Buscar evidências',text:'Consultar dados, imagens e fontes científicas.'},
        {id:'modelo',title:'Construir o modelo',text:'Escolher cores, corte, materiais e legenda.'},
        {id:'limite',title:'Avaliar limites',text:'Explicar o que o modelo mostra e o que simplifica.'}
      ], order:['pergunta','evidencia','modelo','limite'], explanation:'Modelos científicos são representações: ajudam a explicar, mas sempre têm escolhas e limites.', hint:'Comece pela pergunta; a avaliação do limite vem depois de construir.' },
      { type:'multi', required:3, context:'ERER e Ciências — diferentes povos produzem conhecimentos sobre céu, água, solo, plantas e relações de cuidado. A ciência escolar pode estudar essas contribuições com contexto e respeito.', question:'Quais práticas evitam racismo científico e valorizam a diversidade de conhecimentos?', options:[
        {title:'Identificar autoria e contexto do saber',text:'Evita transformar uma prática em curiosidade sem origem.',good:true},
        {title:'Dizer que só existe uma forma de conhecer',text:'Apaga histórias e contribuições.',good:false},
        {title:'Distinguir método, finalidade e evidência',text:'Permite comparar sem misturar tudo.',good:true},
        {title:'Usar “tribo” para qualquer povo',text:'Generaliza identidades diferentes.',good:false},
        {title:'Perguntar como o conhecimento ajuda a cuidar do território',text:'Relaciona ciência, ética e participação.',good:true}
      ], explanation:'A abordagem intercultural nomeia sujeitos, contexto, método e finalidade; não hierarquiza pessoas por sua origem.', hint:'Procure escolhas que contextualizam e reconhecem autoria.' }
    ]
  },
  {
    id: 'geografia', icon: '💧', title: 'Guardiões da Nascente', subject: 'Geografia', color: '#23769f',
    skill: 'EF06GE11/ES', skillText: 'Analisar distintas interações das sociedades com a natureza, com base na distribuição dos componentes físico-naturais, incluindo as transformações da biodiversidade local e mundial e a apropriação da natureza na ocupação das áreas, da escala local à global.', object: 'Biodiversidade e ciclo hidrológico; biomas: impactos ambientais.', bloom: 'Analisar → Avaliar → Criar', guide: 'Equipe de campo ambiental', evidence: 'Intervém em uma nascente simulada, analisa componentes físico-naturais e impactos sociais sobre a biodiversidade e propõe manejo sustentável.', curriculumSource: 'https://curriculo.sedu.es.gov.br/curriculo/wp-content/uploads/2026/03/EFAF_GE_26_12_03_26.pdf',
    intro: 'A mata próxima à nascente foi retirada e o solo está exposto. Monte um plano de recuperação com três ações sustentáveis.', regionalContext: 'Conexão com o Espírito Santo: o tema conversa com a Mata Atlântica, o rio Piraquê-Açu e a Floresta Nacional de Pacotuba, próximos a territórios indígenas e quilombolas capixabas.',
    art: 'assets/real/mata-ciliar-nascente.jpg', artAlt: 'Fotografia real de vegetação protegendo o solo próximo a uma nascente.',
    media: { label: 'Vídeo de educação ambiental', title: 'Simulador de chuvas: como a mata ciliar protege o solo e a água', url: 'https://semil.sp.gov.br/2016/05/voce-ja-viu-um-simulador-de-chuvas/', credit: 'Secretaria de Meio Ambiente de São Paulo — Programa Nascentes. A página oferece vídeo e explicações.' },
    referenceText: 'TEXTO-BASE — Relevo, clima, vegetação, hidrografia e solos são componentes físico-naturais que se relacionam. Na escala local, a mata ciliar protege margens e nascentes, reduz erosão e favorece infiltração. Na escala regional e global, desmatamento, urbanização, agricultura intensiva e industrialização transformam biomas e biodiversidade. A recuperação exige vegetação nativa, proteção, monitoramento e participação social.',
    lessonPlan: ['Aula 1 — expedição fotográfica: nascente, mata ciliar, erosão e assoreamento; leitura do vídeo de chuva.', 'Aula 2 — simulador de recuperação, análise de indicadores e criação de plano sustentável.'],
    tasks: [
      { type: 'explore', scene: 'Expedição fotográfica — água, solo e vegetação', question: 'Leia quatro registros reais de campo antes de recuperar a nascente no simulador.', objective: 'Compare ambientes, identifique relações de causa e efeito e registre as quatro evidências.', spots: [
        { icon: '🌱', title: 'Vegetação junto à nascente', action: 'Observar proteção', image: 'assets/real/mata-ciliar-nascente.jpg', alt: 'Vegetação densa, com árvores, arbustos e capins, cobre o solo próximo a uma nascente.', caption: 'Mata ciliar próxima a uma nascente. Foto: Carlos Peixotto/Wikimedia Commons, CC BY-SA 4.0.', text: 'Raízes e cobertura vegetal reduzem o impacto direto da chuva, ajudam a estabilizar o solo e oferecem abrigo. Uma foto não mede a qualidade da água, por isso o monitoramento precisa de outros indicadores.', caa: [['🌿','VEGETAÇÃO'],['🪨','SOLO'],['💧','ÁGUA'],['🛡️','PROTEGER']], sourceLabel: 'Arquivo e licença da fotografia', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mata_ciliar_pr%C3%B3xima_a_nascente.jpg' },
        { icon: '💦', title: 'Nascente do rio Tietê', action: 'Reconhecer a fonte', image: 'assets/real/nascente-tiete.jpg', alt: 'Pequeno curso de água transparente nasce em área sombreada e cercada por vegetação.', caption: 'Nascente do rio Tietê, Salesópolis (SP), 2013. Foto: Ro Pimentel/Wikimedia Commons.', text: 'Nascente é o local em que a água subterrânea aflora e inicia um curso. Proteger apenas o ponto visível não basta: solo, vegetação e usos ao redor interferem na infiltração e na qualidade da água.', caa: [['💧','NASCENTE'],['⬆️','AFLORAR'],['🌳','ENTORNO'],['🔎','MONITORAR']], sourceLabel: 'Arquivo da fotografia', sourceUrl: 'https://commons.wikimedia.org/wiki/File:A_nascente_do_Tiet%C3%AA_em_Sales%C3%B3polis.JPG' },
        { icon: '🟤', title: 'Solo em erosão', action: 'Identificar o risco', image: 'assets/real/erosao-solo.jpg', alt: 'Sulcos profundos cortam um solo exposto em área rural de Piracicaba, São Paulo.', caption: 'Erosão em solo de Piracicaba (SP), 2008. Foto: Ana Paula Hirama/Wikimedia Commons, CC BY-SA 2.0.', text: 'Quando a chuva escoa sobre solo desprotegido, partículas podem ser carregadas. Ao chegar a rios e nascentes, esse material favorece turbidez e assoreamento. Cobertura e manejo ajudam a reduzir o processo.', caa: [['🌧️','CHUVA'],['🟤','EROSÃO'],['➡️','TRANSPORTE'],['🏞️','ASSOREAR']], sourceLabel: 'Arquivo e licença da fotografia', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Eros%C3%A3o_em_solo_de_Piracicaba_SP.jpg' },
        { icon: '🎥', title: 'Chuva simulada', action: 'Ver comparação', image: 'assets/real/mata-ciliar-nascente.jpg', alt: 'Vegetação densa cobre o solo, usada como referência para comparar com solo descoberto em um simulador de chuva.', caption: 'A página do Programa Nascentes mostra em vídeo como diferentes coberturas respondem à chuva.', text: 'Antes do jogo, formule uma previsão: qual bandeja perderá mais solo — vegetação, palhada ou solo descoberto? Depois do vídeo, compare a previsão ao escoamento observado.', caa: [['🤔','PREVER'],['🎥','ASSISTIR'],['⚖️','COMPARAR'],['✅','CONCLUIR']], sourceLabel: 'Vídeo — Programa Nascentes/SP', sourceUrl: 'https://semil.sp.gov.br/2016/05/voce-ja-viu-um-simulador-de-chuvas/' }
      ], explanation: 'Você relacionou cobertura vegetal, infiltração, erosão, assoreamento e necessidade de monitoramento.', hint: 'Em cada imagem, procure: água, cobertura do solo, risco e evidência que ainda falta.' },
      { type: 'restoration', gameName:'Guardiões da Nascente', gameOrigin:'simulação de manejo ambiental baseada em relações entre solo, água, vegetação e biodiversidade', howToPlay:'escolha ações de recuperação; observe os indicadores mudarem e replaneje quando uma escolha não proteger todos os componentes.', question: 'Entre no território e recupere a nascente. Observe como cada ação muda os indicadores.', explanation: 'A recuperação integrada melhorou água, solo e biodiversidade. Indicadores ajudam a acompanhar resultados e replanejar.', hint: 'Combine proteção da água, cobertura do solo e diversidade de plantas.' },
      { type: 'multi', required: 3, context: 'SITUAÇÃO — Após o desmatamento, a chuva carrega solo para o rio, a água fica turva e animais perdem abrigo. Selecione exatamente três ações que formam um plano sustentável.', question: 'Quais ações ajudam a recuperar a nascente?', options: [
        { title: 'Replantar vegetação nativa', text: 'Protege o solo, oferece abrigo e favorece a biodiversidade.', good: true },
        { title: 'Manter o solo sempre descoberto', text: 'Facilita o arraste de partículas pela chuva.', good: false },
        { title: 'Criar faixas de proteção', text: 'Evita cultivo e pisoteio junto à água.', good: true },
        { title: 'Usar água sem acompanhar o consumo', text: 'Aumenta o desperdício e pressiona a nascente.', good: false },
        { title: 'Aplicar cobertura orgânica e manejo', text: 'Conserva umidade e reduz erosão, articulando observação local.', good: true },
        { title: 'Substituir toda diversidade por uma espécie', text: 'Reduz habitats e torna o ambiente menos resiliente.', good: false }
      ], explanation: 'Vegetação nativa, faixa de proteção e cobertura do solo atuam juntas: reduzem erosão, conservam água e apoiam a biodiversidade.', hint: 'Procure ações que protejam água, solo e diversidade ao mesmo tempo.' },
      { type: 'quiz', context: 'A comunidade registra a transparência da água, a presença de animais, a cobertura do solo e o consumo de água antes e depois das ações.', question: 'Por que acompanhar esses indicadores?', options: ['Para substituir o conhecimento da comunidade.', 'Para produzir evidências, avaliar resultados e ajustar o plano.', 'Para garantir que nenhuma mudança seja feita.', 'Apenas para decorar o relatório.'], correct: 1, explanation: 'Indicadores geram evidências para a avaliação formativa do plano: a comunidade verifica efeitos e decide o que precisa ser ajustado.', hint: 'Pense no ciclo: agir, observar e melhorar.' },
      { type:'sequence', gameName:'Rota da nascente', gameOrigin:'jogo autoral de leitura espacial e planejamento ambiental', howToPlay:'ordene as etapas de leitura do território antes de propor uma ação; troque cartas vizinhas.', question:'Jogo do território: organize uma leitura responsável de uma nascente e de sua comunidade.', cards:[
        {id:'mapa',title:'Localizar no mapa',text:'Identificar água, relevo, caminhos e limites.'},
        {id:'escuta',title:'Escutar moradores',text:'Conhecer usos, memórias e prioridades locais.'},
        {id:'barreira',title:'Analisar barreiras',text:'Observar erosão, poluição, acesso e desigualdade.'},
        {id:'plano',title:'Planejar e monitorar',text:'Definir ação, indicador, responsável e revisão.'}
      ], order:['mapa','escuta','barreira','plano'], explanation:'Mapas são importantes, mas não substituem a escuta dos sujeitos do território nem o acompanhamento das barreiras.', hint:'A decisão deve vir depois de localizar, escutar e analisar.' },
      { type:'multi', required:3, context:'ERER — Mapas podem mostrar territórios indígenas e quilombolas, mas não devem expor informações sensíveis nem apagar os nomes escolhidos pelas comunidades.', question:'Quais atitudes tornam um mapa mais justo e inclusivo?', options:[
        {title:'Usar o nome do povo ou comunidade',text:'Reconhece identidade e autoria territorial.',good:true},
        {title:'Tratar território tradicional como espaço vazio',text:'Apaga presença e história.',good:false},
        {title:'Consultar fontes oficiais e participação comunitária',text:'Ajuda a conferir limites e usos.',good:true},
        {title:'Publicar localização sensível sem cuidado',text:'Pode gerar risco e exposição.',good:false},
        {title:'Registrar legenda, data e fonte',text:'Permite leitura crítica do mapa.',good:true}
      ], explanation:'Cartografia crítica combina precisão, fonte, participação, proteção de dados e respeito aos nomes e direitos coletivos.', hint:'Um mapa justo informa sem apagar nem expor indevidamente.' }
    ]
  },
  {
    id: 'matematica', icon: '📐', title: 'Mapa em Escala', subject: 'Matemática', color: '#6f4a8e',
    skill: 'EF06MA21', skillText: 'Construir figuras planas semelhantes em situações de ampliação e de redução, com o uso de malhas quadriculadas, plano cartesiano ou tecnologias digitais.', object: 'Construção de figuras semelhantes: ampliação e redução de figuras planas em malhas quadriculadas.', bloom: 'Aplicar → Analisar', guide: 'Equipe de cartografia matemática', evidence: 'Constrói e verifica figuras planas semelhantes, em tecnologia digital e malha, aplicando o mesmo fator de ampliação ou redução.', curriculumSource: 'https://curriculo.sedu.es.gov.br/curriculo/wp-content/uploads/2026/01/EFAF_MAT_26_20_01_26.pdf',
    intro: 'O mapa precisa mudar de tamanho sem perder sua forma. Calcule dimensões proporcionais na malha.', regionalContext: 'Conexão com o Espírito Santo: a oficina usa mapas reais para pensar a localização de Aracruz e de comunidades quilombolas do sul capixaba, distinguindo distância no mapa de distância no território.',
    art: 'assets/real/mapa-relevo-brasil.png', artAlt: 'Mapa real de relevo do Brasil com cores e legenda, usado para introduzir escala e representação.',
    media: { label: 'Material cartográfico oficial', title: 'Noções básicas de Cartografia — escala e representação', url: 'https://www.ibge.gov.br/biblioteca/visualizacao/livros/liv44152_cap2.pdf', credit: 'IBGE — capítulo didático sobre escala, projeção, coordenadas e leitura cartográfica. Abra com internet.' },
    referenceText: 'TEXTO-BASE — Segundo o IBGE, a escala estabelece uma relação de proporcionalidade entre a distância representada no mapa e a distância correspondente no território. Em uma ampliação ou redução de figuras semelhantes, todas as medidas lineares precisam ser alteradas pelo mesmo fator.',
    lessonPlan: ['Aula 1 — leitura de mapas reais, legenda, escala gráfica, relevo e grade; comparação de representações.', 'Aula 2 — oficina digital de ampliação e redução, verificação de razões e desafios de semelhança.'],
    tasks: [
      { type: 'explore', scene: 'Sala de cartografia — mapas que medem o território', question: 'Investigue mapas reais e descubra quais pistas permitem medir, localizar e comparar.', objective: 'Leia cada documento cartográfico e registre a função de escala, legenda, relevo e malha.', spots: [
        { icon: '🗺️', title: 'Mapa de relevo do Brasil', action: 'Ler cores e formas', image: 'assets/real/mapa-relevo-brasil.png', alt: 'Mapa de relevo do Brasil e países vizinhos, com rios, limites e variações de altitude representadas por cores.', caption: 'Mapa de relevo do Brasil. Alexrk2/Wikimedia Commons, CC BY-SA 3.0.', text: 'Cores e sombreamento representam diferenças de altitude. O mapa reduz um território enorme; para medir corretamente, é preciso conhecer a escala e não confundir cor do mapa com cor real do lugar.', caa: [['🗺️','MAPA'],['🎨','LEGENDA'],['⛰️','RELEVO'],['📏','ESCALA']], sourceLabel: 'Arquivo e licença do mapa', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Relief_Map_of_Brazil.svg' },
        { icon: '📐', title: 'Mapa topográfico com escala', action: 'Medir no documento', image: 'assets/real/mapa-topografico.png', alt: 'Exemplo de mapa topográfico com curvas de nível, estradas, símbolos e escala indicada.', caption: 'Exemplo de mapa topográfico na escala 1:24.000. USGS, domínio público.', text: 'Em 1:24.000, uma unidade no mapa corresponde a 24.000 unidades iguais no terreno. Curvas de nível ligam pontos de mesma altitude; quanto mais próximas, maior costuma ser a inclinação.', caa: [['1️⃣','MAPA'],['➡️','CORRESPONDE'],['2️⃣4️⃣','TERRENO'],['〰️','CURVAS']], sourceLabel: 'Arquivo cartográfico USGS', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Topographic_map_example.png' },
        { icon: '🔍', title: 'Ampliação proporcional', action: 'Comparar fatores', image: 'assets/real/mapa-topografico.png', alt: 'O mapa topográfico reaparece para analisar o que muda quando uma imagem é ampliada.', caption: 'O documento é retomado para distinguir ampliar a visualização de alterar a escala cartográfica.', text: 'Se um retângulo 4 × 3 vira 8 × 6, largura e altura foram multiplicadas por 2. Se apenas uma dimensão muda, a figura deforma. A imagem pode ficar maior na tela sem que o território real mude.', caa: [['4×3','ORIGINAL'],['×2','FATOR'],['8×6','AMPLIADO'],['✅','MESMA FORMA']], sourceLabel: 'IBGE — noções de escala', sourceUrl: 'https://www.ibge.gov.br/biblioteca/visualizacao/livros/liv44152_cap2.pdf' },
        { icon: '🧮', title: 'Malha para conferir', action: 'Usar estratégia visual', image: 'assets/real/mapa-relevo-brasil.png', alt: 'Mapa do Brasil usado como base para imaginar uma malha de quadrados sobre a representação.', caption: 'Em sala, uma folha transparente quadriculada pode ser colocada sobre o mapa.', text: 'A malha transforma a ampliação em uma correspondência ponto a ponto. Conte deslocamentos horizontais e verticais, multiplique pelo mesmo fator e confira se ângulos e forma foram preservados.', caa: [['▦','MALHA'],['👀','CONTAR'],['✖️','MULTIPLICAR'],['🔁','CONFERIR']], sourceLabel: 'IBGE Educa — atividade com mapas', sourceUrl: 'https://educa.ibge.gov.br/professores/educa-atividades/20795-triangulo-de-cidades.html' }
      ], explanation: 'Você leu documentos cartográficos e conectou escala, legenda, relevo e proporcionalidade.', hint: 'Observe o que cada mapa representa e qual informação permite conferir medidas.' },
      { type: 'mapScale', gameName:'Oficina da Escala', gameOrigin:'jogo matemático de ampliação e redução em malha quadriculada', howToPlay:'mova largura e altura pelo mesmo fator; confira a malha e verifique se a figura manteve a forma.', question: 'Amplie no mapa a área de reflorestamento usando fator 2.', original: [4,3], target: [8,6], factor: 2, explanation: 'Você ampliou as duas dimensões pelo mesmo fator: 4 × 2 = 8 e 3 × 2 = 6. Assim, a forma foi preservada.', hint: 'Use os controles para levar 4 até 8 e 3 até 6.' },
      { type: 'math', context: 'Na malha, uma área retangular mede 4 quadrados de largura e 3 de altura. O mapa será ampliado com fator 2.', question: 'Quais serão as novas dimensões?', options: ['6 × 5', '8 × 6', '8 × 3', '4 × 6'], correct: 1, explanation: 'Na ampliação de fator 2, todas as medidas lineares são multiplicadas por 2: 4×2=8 e 3×2=6.', hint: 'Multiplique as duas dimensões pelo mesmo fator.' },
      { type: 'math', context: 'Uma trilha triangular tem lados de 6, 8 e 10 unidades no mapa original. Ela será reduzida pela metade.', question: 'Quais medidas preservam a semelhança?', options: ['3, 4 e 5', '5, 7 e 9', '6, 4 e 5', '12, 16 e 20'], correct: 0, explanation: 'Reduzir pela metade significa dividir todos os lados por 2: 3, 4 e 5. O mesmo fator mantém a forma.', hint: 'Aplique a mesma divisão a cada lado.' },
      { type: 'math', context: 'Um desenho de 5 × 2 foi transformado em outro de 15 × 6.', question: 'Qual foi o fator de ampliação?', options: ['2', '3', '5', '10'], correct: 1, explanation: '15÷5=3 e 6÷2=3. Como as duas razões são iguais, o fator de ampliação é 3.', hint: 'Divida cada medida nova pela medida correspondente original.' },
      { type:'sequence', gameName:'Missão: mapa do cotidiano', gameOrigin:'jogo autoral de planejamento matemático com escala', howToPlay:'ordene as etapas para transformar uma medida real em representação; toque nas cartas para aproximar a carta escolhida do início.', question:'Jogo da escala: organize o caminho para planejar um mapa acessível da escola até a horta.', cards:[
        {id:'medir',title:'Medir no espaço',text:'Descobrir a distância real com fita, passos ou planta.'},
        {id:'escolher',title:'Escolher a escala',text:'Decidir quanto cada centímetro representará.'},
        {id:'calcular',title:'Calcular a representação',text:'Aplicar o mesmo fator às medidas.'},
        {id:'conferir',title:'Conferir no caminho',text:'Comparar mapa, legenda e acessibilidade da rota.'}
      ], order:['medir','escolher','calcular','conferir'], explanation:'A matemática ganha sentido quando mede, representa, calcula e confere um percurso real.', hint:'Não é possível escolher a escala sem conhecer a distância que será representada.' },
      { type:'math', context:'No mapa da escola, 1 cm representa 4 m. A biblioteca está a 7 cm da entrada.', question:'Qual é a distância representada no espaço real?', options:['11 m','28 m','3 m','4,7 m'], correct:1, explanation:'Se 1 cm representa 4 m, então 7 cm representam 7 × 4 = 28 m.', hint:'Multiplique a medida do mapa pelo valor indicado na escala.' },
      { type:'math', context:'Uma faixa de acessibilidade mede 12 m no pátio. Na planta, a escala é 1 cm para cada 3 m.', question:'Quantos centímetros a faixa ocupará na planta?', options:['36 cm','9 cm','4 cm','3 cm'], correct:2, explanation:'12 m ÷ 3 = 4 cm na planta. A divisão usa a mesma relação da escala.', hint:'Descubra quantos grupos de 3 m cabem em 12 m.' },
      { type:'math', context:'Duas equipes desenharam a mesma horta. A primeira usou 6 × 4 quadrados; a segunda usou fator 1/2.', question:'Qual desenho é semelhante ao primeiro?', options:['3 × 2 quadrados','6 × 2 quadrados','12 × 8 quadrados','4 × 3 quadrados'], correct:0, explanation:'Reduzir por 1/2 divide largura e altura: 6÷2=3 e 4÷2=2. A forma é mantida.', hint:'Aplique o mesmo fator às duas dimensões.' }
    ]
  },
  {
    id: 'computacao', icon: '🧩', title: 'Rega Inteligente', subject: 'Computação e Lógica', color: '#347563',
    skill: 'EF06CO02', skillText: 'Elaborar algoritmos que envolvam instruções sequenciais, de repetição e de seleção usando uma linguagem de programação.', object: 'Programação: linguagem de programação.', bloom: 'Aplicar → Criar → Avaliar', guide: 'Equipe de tecnologia e sustentabilidade', evidence: 'Executa um ciclo de irrigação e programa, em linguagem visual por blocos, um algoritmo com sequência, seleção e repetição.', curriculumSource: 'https://curriculo.sedu.es.gov.br/curriculo/wp-content/uploads/2025/07/CURRICULO-COMPUTACAO-ES-ENSINO-FUNDAMENTAL-2_040725.pdf',
    intro: 'Programe o algoritmo que verifica o solo e economiza água. Os blocos formam uma linguagem de programação visual; use as setas, que também substituem o arrastar no teclado.', regionalContext: 'Conexão com o Espírito Santo: o projeto de algoritmo parte de uma horta escolar e de cuidados com água; não afirma que existe sensor instalado em uma aldeia ou quilombo.',
    art: 'assets/real/sensor-umidade.jpg', artAlt: 'Fotografia real de um sensor de umidade do solo usado em um sistema de decisão.',
    media: { label: 'Videoaula de computação', title: 'Pensamento computacional e algoritmos na BNCC', url: 'https://sme.goiania.go.gov.br/conexaoescola/biblioteca_virtual/informando-bncc-a-computacao-na-educacao-basica/', credit: 'Centro de Mídias/SME Goiânia — episódio educativo sobre Computação na Educação Básica.' },
    referenceText: 'TEXTO-BASE — Um algoritmo é uma sequência organizada de instruções para resolver um problema. Nesta fase, uma linguagem visual por blocos representa o programa: o sensor fornece a entrada; a seleção decide entre irrigar ou avançar; e a repetição verifica vários canteiros. O objetivo é programar, executar, testar e depurar.',
    lessonPlan: ['Aula 1 — investigação de sensor e gotejamento reais; entradas, decisões, saídas e critérios.', 'Aula 2 — console de irrigação, montagem do algoritmo, teste, depuração e explicação oral.'],
    tasks: [
      { type: 'explore', scene: 'Oficina de tecnologia — do sensor ao algoritmo', question: 'Examine os componentes reais antes de programar a rega inteligente.', objective: 'Descubra o papel de cada componente e registre entrada, processamento, saída e teste.', spots: [
        { icon: '📡', title: 'Sensor de umidade', action: 'Identificar a entrada', image: 'assets/real/sensor-umidade.jpg', alt: 'Medidor de umidade do solo com mostrador analógico e haste metálica apoiado sobre a grama.', caption: 'Medidor de umidade do solo. Foto: Sealman/Wikimedia Commons, CC BY-SA 4.0.', text: 'O sensor produz uma leitura do solo: essa é a entrada do sistema. Um número não decide sozinho; o algoritmo compara o valor a um limite definido e executa uma ação.', caa: [['📡','SENSOR'],['🔢','VALOR'],['⬇️','ENTRADA'],['⚖️','COMPARAR']], sourceLabel: 'Arquivo e licença da fotografia', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Soil_moisture_sensor.JPG' },
        { icon: '💧', title: 'Irrigação por gotejamento', action: 'Reconhecer a saída', image: 'assets/real/irrigacao-gotejamento.jpg', alt: 'Tubos de irrigação por gotejamento distribuem água junto às linhas de cultivo.', caption: 'Irrigação por gotejamento em cultivo. Foto: USDA, domínio público.', text: 'Abrir ou fechar a passagem de água é uma saída controlada. O gotejamento pode aplicar água próximo às plantas, mas eficiência depende de projeto, manutenção, clima, cultura e leitura adequada do solo.', caa: [['💧','ÁGUA'],['🚰','VÁLVULA'],['⬆️','SAÍDA'],['🌱','CULTIVO']], sourceLabel: 'Arquivo USDA/Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Drip_irrigation.jpg' },
        { icon: '🧠', title: 'Regra de decisão', action: 'Simular o SE/SENÃO', image: 'assets/real/sensor-umidade.jpg', alt: 'O medidor de umidade reaparece para conectar uma leitura real a uma condição lógica.', caption: 'Leitura do sensor usada como entrada para uma condição.', text: 'Exemplo: SE umidade < 40%, ENTÃO abrir a válvula; SENÃO, manter fechada. O símbolo “<” significa menor que. Alterar o limite muda o comportamento e precisa ser justificado.', caa: [['SE','CONDIÇÃO'],['<40','LIMITE'],['ENTÃO','AÇÃO'],['SENÃO','ALTERNATIVA']], sourceLabel: 'BNCC Computação — complemento', sourceUrl: 'https://www.gov.br/mec/pt-br/escolas-conectadas/BNCCComputaoCompletodiagramado.pdf' },
        { icon: '🧪', title: 'Teste e depuração', action: 'Procurar erros', image: 'assets/real/irrigacao-gotejamento.jpg', alt: 'Linhas de gotejamento permitem observar se água chega aos pontos planejados.', caption: 'Um teste deve incluir solo seco, solo úmido e possíveis falhas do sensor.', text: 'Depurar é localizar e corrigir falhas. Teste valores abaixo, iguais e acima do limite; verifique se a válvula responde e evite repetição infinita. Registre o resultado em vez de apenas dizer “funcionou”.', caa: [['🧪','TESTAR'],['🐞','ERRO'],['🛠️','CORRIGIR'],['📝','REGISTRAR']], sourceLabel: 'Computação na Educação Básica — MEC', sourceUrl: 'https://www.gov.br/mec/pt-br/escolas-conectadas/computacao-na-educacao-basica' }
      ], explanation: 'Você conectou componentes reais aos conceitos de entrada, condição, saída, repetição e depuração.', hint: 'Pergunte: o que entra, quem decide, o que sai e como eu testo?' },
      { type: 'irrigation', gameName:'Horta Inteligente', gameOrigin:'simulação de sistema automatizado com sensor de umidade, seleção e repetição', howToPlay:'leia cada canteiro, compare o valor à regra e acione somente a saída necessária; depois observe a economia de água.', question: 'Opere o sistema de rega nos três canteiros. Verifique o sensor e execute a decisão do algoritmo.', plots: [
        { name: 'Canteiro de milho', moisture: 22, dry: true },
        { name: 'Horta de folhas', moisture: 68, dry: false },
        { name: 'Canteiro de feijão', moisture: 31, dry: true }
      ], explanation: 'O sistema irrigou apenas os canteiros secos e avançou quando encontrou solo úmido, economizando água.', hint: 'Pressione “Verificar próximo canteiro” até completar as três leituras.' },
      { type: 'algorithm', gameName:'Sequência, Seleção e Repetição', gameOrigin:'desafio de programação visual alinhado à Computação do Currículo do ES', howToPlay:'use as setas para ordenar os blocos; leia o algoritmo em voz alta e teste se ele funciona para solo seco e solo úmido.', question: 'Coloque os blocos em uma ordem lógica para a rega:', blocks: [
        { id: 'repeat', text: 'REPETIR a verificação 3 vezes' },
        { id: 'else', text: 'SENÃO, avançar para o próximo canteiro' },
        { id: 'start', text: 'INÍCIO' },
        { id: 'if', text: 'SE o solo estiver seco, ENTÃO irrigar por 5 minutos' },
        { id: 'end', text: 'FIM' }
      ], order: ['start','repeat','if','else','end'], explanation: 'O algoritmo começa, repete a verificação, seleciona uma ação conforme a condição e termina. Seleção evita irrigar quando o solo não está seco.', hint: 'Primeiro marque o início. Depois pense em repetição, condição, alternativa e fim.' },
      { type: 'quiz', context: 'O sensor informa: “solo úmido”. A condição do algoritmo é “SE o solo estiver seco”.', question: 'Qual instrução deve ser executada?', options: ['Irrigar por 5 minutos.', 'Executar a alternativa SENÃO e avançar.', 'Reiniciar para sempre.', 'Ignorar todas as instruções.'], correct: 1, explanation: 'Como a condição “solo seco” é falsa, o algoritmo segue o bloco SENÃO. Isso também evita desperdício de água.', hint: 'Quando o “SE” é falso, procure a alternativa.' },
      { type:'sequence', gameName:'Caça aos erros', gameOrigin:'jogo autoral de depuração e pensamento computacional', howToPlay:'ordene as cartas do teste: entrada, decisão, saída e registro; depois compare com um colega e explique o motivo.', question:'Jogo de depuração: organize um teste seguro para um sistema de rega escolar.', cards:[
        {id:'entrada',title:'Ler a entrada',text:'Registrar a umidade informada pelo sensor.'},
        {id:'decisao',title:'Aplicar a condição',text:'Comparar o valor com o limite definido.'},
        {id:'saida',title:'Executar a saída',text:'Irrigar ou avançar, conforme o resultado.'},
        {id:'registro',title:'Registrar e corrigir',text:'Anotar o que ocorreu e ajustar o algoritmo se necessário.'}
      ], order:['entrada','decisao','saida','registro'], explanation:'Testar é repetir com valores diferentes, observar a saída e registrar ajustes — não apenas dizer que funcionou.', hint:'O algoritmo precisa de uma entrada antes da decisão.' },
      { type:'multi', required:3, context:'ERER e tecnologia — Uma equipe quer criar um aplicativo sobre memórias indígenas, quilombolas e afro-brasileiras para a escola.', question:'Quais escolhas tornam a tecnologia ética e inclusiva?', options:[
        {title:'Conseguir autorização para usar relatos e imagens',text:'Protege autoria, privacidade e direitos.',good:true},
        {title:'Copiar símbolos sagrados sem contexto',text:'Pode desrespeitar significados e comunidades.',good:false},
        {title:'Oferecer texto, áudio, contraste e CAA',text:'Amplia participação de estudantes.',good:true},
        {title:'Usar um estereótipo como personagem de todo povo',text:'Reduz diversidade e reforça preconceito.',good:false},
        {title:'Testar o jogo com usuários e corrigir barreiras',text:'Transforma acessibilidade em processo.',good:true}
      ], explanation:'Tecnologia inclusiva combina consentimento, autoria, acessibilidade, testes e representação não estereotipada.', hint:'Pense em direitos, participação e barreiras de acesso.' }
    ]
  }
];

// Atualização curricular: EF06CI10/ES (3º trimestre). A configuração abaixo substitui
// a antiga fase sobre estrutura da Terra, mantendo o jogo fiel ao currículo disponibilizado.
const cienciasAtualizadas = PHASES.find(phase => phase.id === 'ciencias');
Object.assign(cienciasAtualizadas, {
  icon: '🧠', title: 'Rede do Cuidado', subject: 'Ciências', color: '#d88b28',
  skill: 'EF06CI10/ES',
  skillText: 'Identificar e classificar as substâncias psicoativas lícitas e ilícitas, reconhecendo os seus efeitos no organismo humano e classificando-as como depressoras, estimulantes ou alucinógenas, de modo a explicar como o funcionamento do sistema nervoso pode ser afetado por essas substâncias e a discutir o seu uso em diferentes culturas, bem como os seus efeitos sociais na atualidade.',
  object: 'Efeitos de substâncias psicoativas sobre o sistema nervoso.',
  bloom: 'Compreender → Classificar → Analisar → Cuidar', guide: 'Equipe da Rede do Cuidado',
  evidence: 'Classifica informações científicas sobre substâncias psicoativas, explica efeitos gerais no sistema nervoso e reconhece redes de cuidado sem estigma.',
  curriculumSource: 'https://curriculo.sedu.es.gov.br/curriculo/wp-content/uploads/2025/12/EFAF_CI_26_09_12_25.pdf',
  intro: 'Nesta fase, ciência e cuidado caminham juntos: você vai aprender a ler informações confiáveis sobre substâncias psicoativas, sistema nervoso, prevenção e redes de apoio.',
  regionalContext: 'Conexão com o Espírito Santo: o Observatório Capixaba de Informações sobre Drogas (OCID/ES) divulga informações de prevenção e cuidado. ERER entra aqui como ética: nenhuma origem étnico-racial explica ou define o uso de substâncias; racismo, exclusões e acesso desigual à saúde precisam ser debatidos sem culpabilizar pessoas.',
  regionalSourceLinks: [['https://ocid.es.gov.br/Not%C3%ADcia/classificacao-das-drogas','OCID/ES — classificação e efeitos'],['https://ocid.es.gov.br/Not%C3%ADcia/drogas-principais-efeitos-e-consequencias','OCID/ES — efeitos e consequências']],
  art: null, artAlt: '',
  media: { label: 'Material oficial para aprofundar', title: 'OCID/ES: classificação de substâncias e prevenção', url: 'https://ocid.es.gov.br/Not%C3%ADcia/classificacao-das-drogas', credit: 'Observatório Capixaba de Informações sobre Drogas — leitura orientada. O jogo não substitui atendimento de saúde.' },
  referenceText: 'ANTES DE JOGAR — Substâncias psicoativas podem alterar o funcionamento do sistema nervoso central, afetando atenção, humor, percepção, reflexos e comportamento. A classificação didática inclui efeitos predominantemente depressores, estimulantes ou alucinógenos/perturbadores. “Lícita” e “ilícita” se referem à situação legal; isso não significa ausência ou presença automática de risco. Informação científica, diálogo e busca de apoio protegem mais do que medo, piadas ou julgamentos.',
  lessonPlan: ['Aula 1 — texto acessível, estações de investigação, vocabulário visual, sistema nervoso e classificação orientada.', 'Aula 2 — jogos de cuidado, análise de situações, direitos, prevenção, ERER e produção de uma mensagem de apoio.'],
  tasks: [
    { type: 'explore', scene: 'Estação Ciência, Cuidado e Direitos', question: 'Leia quatro pistas antes de iniciar os jogos de Ciências.', objective: 'Em cada estação, leia ou ouça o texto, observe os símbolos CAA e registre a pista antes de continuar.', spots: [
      { icon:'🧠', title:'Sistema nervoso', action:'Entender a comunicação', text:'O sistema nervoso recebe informações, organiza respostas e ajuda a controlar movimentos, emoções e percepções. Substâncias psicoativas podem alterar essa comunicação; os efeitos variam conforme substância, quantidade, frequência, contexto e pessoa.', caa:[['🧠','CÉREBRO'],['↔️','MENSAGEM'],['⚠️','ALTERAÇÃO'],['🩺','CUIDADO']], sourceLabel:'OCID/ES — efeitos e consequências', sourceUrl:'https://ocid.es.gov.br/Not%C3%ADcia/drogas-principais-efeitos-e-consequencias' },
      { icon:'📚', title:'Lícita e ilícita', action:'Diferenciar termos', text:'A classificação lícita ou ilícita depende da lei e de regras de venda, idade, prescrição e uso. Uma substância permitida ou um medicamento pode causar danos quando usado de modo inadequado. Por isso, “legal” não quer dizer “sem risco”.', caa:[['⚖️','LEI'],['💊','MEDICAMENTO'],['🚫','RISCO'],['🔎','INFORMAR']], sourceLabel:'OCID/ES — classificação', sourceUrl:'https://ocid.es.gov.br/Not%C3%ADcia/classificacao-das-drogas' },
      { icon:'🔦', title:'Efeitos no SNC', action:'Classificar efeitos', text:'Em linguagem didática, efeitos podem ser depressivos — diminuem atividade e reflexos; estimulantes — aumentam estado de alerta e agitação; ou alucinógenos/perturbadores — alteram percepção. Há substâncias de efeito misto e os efeitos não são iguais para todas as pessoas.', caa:[['⬇️','DEPRESSOR'],['⬆️','ESTIMULANTE'],['👁️','PERCEPÇÃO'],['⚠️','VARIA']], sourceLabel:'Biblioteca Virtual em Saúde — Ministério da Saúde', sourceUrl:'https://bvsms.saude.gov.br/bvs/publicacoes/saude_mental.pdf' },
      { icon:'🤝', title:'Rede de apoio', action:'Planejar cuidado', text:'Se uma situação preocupar você ou outra pessoa, não é papel do estudante diagnosticar ou resolver sozinho. Procure um adulto de confiança, a equipe escolar e serviços de saúde. Falar sem humilhar, ridicularizar ou estigmatizar é parte da prevenção.', caa:[['🗣️','FALAR'],['👂','ESCUTAR'],['👩‍🏫','ADULTO'],['🏥','SAÚDE']], sourceLabel:'Fiocruz — educação crítica sobre drogas', sourceUrl:'https://www.tes.epsjv.fiocruz.br/index.php/tes/article/view/1032' }
    ], explanation:'Você reuniu conceitos científicos e também pistas de cuidado: informação, escuta, rede de apoio e ausência de estigma.', hint:'Registre as quatro pistas; elas serão usadas nos jogos seguintes.' },
    { type:'sequence', gameName:'Trilha da mensagem nervosa', gameOrigin:'jogo autoral de Ciência e prevenção', howToPlay:'toque nas cartas para colocá-las na sequência de uma investigação responsável: observar, conferir, conversar e encaminhar.', context:'ANTES DA ATIVIDADE — Uma situação de saúde precisa ser tratada com calma. Primeiro, evitamos adivinhações; depois buscamos informação e apoio.', question:'Jogo de cuidado: organize uma resposta responsável diante de uma informação preocupante.', cards:[
      {id:'observar',title:'Observar sem julgar',text:'Perceber uma situação sem apelidar ou expor alguém.'},
      {id:'conferir',title:'Conferir fonte confiável',text:'Separar boato, mito e informação científica.'},
      {id:'conversar',title:'Conversar com adulto',text:'Buscar professor, família ou equipe de confiança.'},
      {id:'encaminhar',title:'Acionar a rede de cuidado',text:'Quando necessário, procurar serviço de saúde.'}
    ], order:['observar','conferir','conversar','encaminhar'], explanation:'Cuidar é observar sem estigma, conferir informações e procurar rede de apoio — não espalhar boatos.', hint:'A ação de saúde não começa com punição ou exposição.' },
    { type:'multi', required:3, context:'ANTES DA ATIVIDADE — Use as pistas: a classificação é didática e os efeitos podem variar. O objetivo é reconhecer informações científicas, não ensinar consumo.', question:'Selecione as três afirmações cientificamente cuidadosas.', options:[
      {title:'“Lícita” não significa “sem risco”',text:'Regra legal e risco à saúde não são a mesma coisa.',good:true},
      {title:'Toda pessoa reage de forma idêntica',text:'Efeitos variam conforme substância, dose, contexto e pessoa.',good:false},
      {title:'Depressoras podem reduzir atenção e reflexos',text:'É uma descrição geral da classificação didática.',good:true},
      {title:'Estimulantes deixam o sistema nervoso mais lento',text:'Isso contradiz a classificação didática.',good:false},
      {title:'Informação e apoio reduzem o estigma',text:'Prevenção inclui acolhimento e acesso à rede de cuidado.',good:true}
    ], explanation:'A atividade trabalha classificação e prevenção sem banalizar riscos nem culpabilizar pessoas.', hint:'Procure ideias que diferenciem informação, risco e cuidado.' },
    { type:'quiz', context:'ANTES DA ATIVIDADE — Em uma classificação didática, substâncias depressoras diminuem a atividade do sistema nervoso e podem afetar atenção, reflexos e coordenação.', question:'Qual descrição corresponde a um efeito predominantemente depressor?', options:['Aumentar muito o estado de alerta.', 'Diminuir reflexos e deixar a pessoa mais lenta.', 'Alterar intensamente a percepção dos sentidos.', 'Não produzir nenhum efeito no cérebro.'], correct:1, explanation:'Efeitos depressivos tendem a reduzir atividade, reflexos e estado de alerta. A classificação é uma ferramenta didática e não substitui orientação profissional.', hint:'Procure a opção que fala em diminuir atividade e reflexos.' },
    { type:'quiz', context:'ANTES DA ATIVIDADE — ERER e saúde exigem recusar estereótipos. Nenhum povo, cor ou comunidade “nasce mais propenso” ao uso de substâncias. Acesso desigual a direitos e serviços pode aumentar vulnerabilidades.', question:'Qual mensagem é mais justa e protetiva?', options:['“Um grupo é o problema da comunidade.”','“Devemos ouvir, informar e garantir cuidado sem racismo ou humilhação.”','“Quem precisa de ajuda deve ficar escondido.”','“Piadas ajudam a prevenir.”'], correct:1, explanation:'A prevenção ética combate racismo, estigma e isolamento; fortalece direitos, informação, acolhimento e acesso à saúde.', hint:'Escolha a frase que protege dignidade e garante apoio.' },
    { type:'multi', required:3, context:'ANTES DA ATIVIDADE — Você vai montar uma campanha escolar de prevenção. Uma boa campanha é clara, acessível e não mostra pessoas como exemplos negativos.', question:'Quais elementos devem aparecer na campanha?', options:[
      {title:'Texto curto, imagem clara e áudio',text:'Oferece mais de uma rota de acesso.',good:true},
      {title:'Frases de medo e humilhação',text:'Afastam estudantes da conversa e do apoio.',good:false},
      {title:'Indicação de adulto e serviço de confiança',text:'Mostra para onde buscar ajuda.',good:true},
      {title:'Culpabilização de povos ou bairros',text:'Reforça racismo e não explica a questão de saúde.',good:false},
      {title:'Informação baseada em fonte oficial',text:'Permite checar e discutir o conteúdo.',good:true}
    ], explanation:'Uma campanha inclusiva une acessibilidade, informação científica, acolhimento e indicação de rede de cuidado.', hint:'Pense em uma mensagem que informe, acolha e oriente.' }
  ]
});

const state = {
  screen: 'startScreen', player: '', score: 0, completed: [], phaseScores: {}, attempts: {}, currentPhase: 0, currentTask: 0, selected: null, algorithm: [], activity: null, fontStep: 0, reviewMode: false
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const screens = $$('.screen');
const refs = {
  phaseStatus: $('#phaseStatus'), scoreStatus: $('#scoreStatus'), medalStatus: $('#medalStatus'), phaseGrid: $('#phaseGrid'),
  progressBar: $('#progressBar'), progressText: $('#progressText'), phaseBrief: $('#phaseBrief'), challengeContent: $('#challengeContent'),
  challengeProgress: $('#challengeProgress'), feedback: $('#feedback'), challengeActions: $('#challengeActions'), toast: $('#toast')
};

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
}

function shuffleArray(items) {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function speakText(text) {
  if (!('speechSynthesis' in window)) return toast('A leitura em voz alta não está disponível neste navegador.');
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'pt-BR';
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
}

function showScreen(id) {
  screens.forEach(screen => screen.classList.toggle('active', screen.id === id));
  state.screen = id;
  const active = document.getElementById(id);
  active.setAttribute('tabindex', '-1');
  active.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: document.body.classList.contains('reduce-motion') ? 'auto' : 'smooth' });
  updateHeader();
}

function updateHeader() {
  refs.scoreStatus.textContent = state.score;
  refs.medalStatus.textContent = `${state.completed.length}/6`;
  refs.phaseStatus.textContent = state.screen === 'challengeScreen' ? `${state.currentPhase + 1}/6` : state.screen === 'finalScreen' ? 'Concluído' : 'Jornada';
}

function toast(message) {
  refs.toast.textContent = message;
  refs.toast.hidden = false;
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => { refs.toast.hidden = true; }, 2800);
}

function saveProgress() {
  const safe = { player: state.player, score: state.score, completed: state.completed, phaseScores: state.phaseScores };
  localStorage.setItem('guardioes-kalunga-yara-v7', JSON.stringify(safe));
}

function renderMap() {
  refs.phaseGrid.innerHTML = PHASES.map((phase, index) => {
    const done = state.completed.includes(index);
    const unlocked = index === 0 || state.completed.includes(index - 1);
    const status = done ? `Concluída · ${state.phaseScores[index]} pontos · Revisar` : unlocked ? 'Disponível →' : '🔒 Conclua a fase anterior';
    return `<button class="phase-card ${done ? 'completed' : ''}" style="--phase-color:${phase.color}" data-phase="${index}" ${unlocked ? '' : 'disabled'} aria-label="Fase ${index + 1}, ${phase.subject}. ${status}">
      ${phase.art ? `<img class="phase-card-art" src="${phase.art}" alt="" aria-hidden="true">` : ''}<span class="phase-icon" aria-hidden="true">${phase.icon}</span><small>FASE ${index + 1}</small><h3>${phase.title}</h3><p>${phase.subject}<br><b>${phase.skill}</b></p><span class="card-status">${status}</span>
    </button>`;
  }).join('');
  refs.progressBar.style.width = `${state.completed.length / PHASES.length * 100}%`;
  refs.progressText.textContent = `${state.completed.length} de 6 fases concluídas`;
  $$('.phase-card:not(:disabled)').forEach(button => button.addEventListener('click', () => startPhase(Number(button.dataset.phase))));
  updateHeader();
}

function startPhase(index) {
  state.currentPhase = index;
  state.currentTask = 0;
  state.reviewMode = state.completed.includes(index);
  state.selected = null;
  renderChallenge();
  showScreen('challengeScreen');
}

function renderBrief(phase) {
  const media = phase.media ? `<div class="media-resource"><span class="context-label">${escapeHTML(phase.media.label)}</span><strong>▶ ${escapeHTML(phase.media.title)}</strong>${phase.media.videoUrl ? `<video controls preload="metadata" aria-label="${escapeHTML(phase.media.title)}"><source src="${phase.media.videoUrl}" type="video/webm">Seu navegador não reproduz este vídeo.</video>` : ''}<p>${escapeHTML(phase.media.credit)}</p><div class="media-links"><a class="source-link" href="${phase.media.url}" target="_blank" rel="noopener noreferrer">Abrir fonte do vídeo/material ↗</a>${phase.media.regionalVideoUrl ? `<a class="source-link voice-link" href="${phase.media.regionalVideoUrl}" target="_blank" rel="noopener noreferrer">🎬 ${escapeHTML(phase.media.regionalVideoLabel)}</a>` : ''}</div></div>` : '';
  const art = phase.art ? `<figure class="phase-art"><img src="${phase.art}" alt="${escapeHTML(phase.artAlt)}"><figcaption>Registro visual real da fase</figcaption></figure>` : '';
  const lessonPlan = phase.lessonPlan ? `<section class="lesson-plan" aria-label="Roteiro das duas aulas"><strong>Roteiro de 100 minutos</strong>${phase.lessonPlan.map((step, index) => `<div><span>${index + 1}</span><p>${escapeHTML(step)}</p></div>`).join('')}</section>` : '';
  const curriculum = phase.curriculumSource ? `<a class="curriculum-link" href="${phase.curriculumSource}" target="_blank" rel="noopener noreferrer">Conferir na Orientação Curricular SEDU/ES 2026 ↗</a>` : '';
  const regional = phase.regionalContext ? `<aside class="regional-context"><strong>CONEXÃO COM O ESPÍRITO SANTO</strong><p>${escapeHTML(phase.regionalContext)}</p>${phase.regionalSourceLinks ? `<div class="regional-links">${phase.regionalSourceLinks.map(link => `<a href="${link[0]}" target="_blank" rel="noopener noreferrer">↗ ${escapeHTML(link[1])}</a>`).join('')}</div>` : ''}</aside>` : '';
  refs.phaseBrief.innerHTML = `${art}<span class="brief-icon" aria-hidden="true">${phase.icon}</span><p>FASE ${state.currentPhase + 1}</p><h2>${phase.title}</h2><p>${phase.intro}</p>${regional}<dl><dt>Componente</dt><dd>${phase.subject}</dd><dt>Habilidade oficial</dt><dd><b>${phase.skill}</b><small class="official-skill">${escapeHTML(phase.skillText || '')}</small></dd><dt>Objeto de conhecimento oficial</dt><dd>${phase.object}</dd><dt>Tempo de experiência</dt><dd>${phase.duration || '2 aulas de 50 minutos'}</dd><dt>Evidência no jogo</dt><dd>${phase.evidence}</dd><dt>Progressão de Bloom</dt><dd>${phase.bloom}</dd><dt>Guia</dt><dd>${phase.guide}</dd></dl>${curriculum}${lessonPlan}${media}`;
}

function renderChallenge() {
  const phase = PHASES[state.currentPhase];
  const task = phase.tasks[state.currentTask];
  state.selected = task.type === 'multi' ? [] : null;
  state.activity = null;
  if (task.type === 'algorithm') state.algorithm = task.blocks.map(block => block.id);
  renderBrief(phase);
  refs.challengeProgress.innerHTML = phase.tasks.map((_, i) => `<span class="${i < state.currentTask ? 'done' : i === state.currentTask ? 'current' : ''}" aria-label="Desafio ${i + 1}${i < state.currentTask ? ' concluído' : i === state.currentTask ? ' atual' : ''}"></span>`).join('');
  refs.feedback.hidden = true;
  refs.feedback.className = 'feedback';
  refs.challengeActions.innerHTML = `<button class="hint-button" type="button" id="hintButton">💡 Ver dica</button><button class="primary-button" type="button" id="checkButton">Confirmar resposta</button>`;
  $('#hintButton').addEventListener('click', () => showFeedback('hint', 'Dica', task.hint));
  $('#checkButton').addEventListener('click', checkAnswer);

  const reference = task.context || phase.referenceText || phase.intro;
  const context = `<div class="context-box ${task.contextType || ''}"><span class="context-label">Antes da atividade — leia, ouça ou peça a leitura</span>${escapeHTML(reference).replace(/\n/g, '<br>')}</div>`;
  const gameGuide = task.gameName ? `<aside class="game-guide" aria-label="Como jogar"><strong>JOGO: ${escapeHTML(task.gameName)}</strong><p><b>Origem:</b> ${escapeHTML(task.gameOrigin)}</p><p><b>Como jogar:</b> ${escapeHTML(task.howToPlay)}</p></aside>` : '';
  const title = `${gameGuide}<h1 class="question-title" id="challengeTitle">${task.question}</h1>`;
  if (task.type === 'explore') renderExplore(task, context + title);
  else if (task.type === 'memory') renderMemory(task, context + title);
  else if (task.type === 'newsroom') renderNewsroom(task, context + title);
  else if (task.type === 'onca') renderOnca(task, context + title);
  else if (task.type === 'earthBuild') renderEarthBuild(task, context + title);
  else if (task.type === 'restoration') renderRestoration(task, context + title);
  else if (task.type === 'mapScale') renderMapScale(task, context + title);
  else if (task.type === 'irrigation') renderIrrigation(task, context + title);
  else if (task.type === 'multi') renderMulti(task, context + title);
  else if (task.type === 'algorithm') renderAlgorithm(task, context + title);
  else if (task.type === 'sequence') renderSequence(task, context + title);
  else renderQuiz(task, context + title, task.type);
}

function renderExplore(task, heading) {
  state.activity = { visited: [], selectedSpot: null };
  const draw = () => {
    const selected = Number.isInteger(state.activity.selectedSpot) ? task.spots[state.activity.selectedSpot] : null;
    const visual = selected?.video ? `<figure class="video-figure"><video controls preload="metadata" poster="${selected.poster || ''}" aria-label="${escapeHTML(selected.alt || '')}"><source src="${selected.video}" type="video/webm">Seu navegador não reproduz este vídeo.</video><figcaption>${escapeHTML(selected.caption || '')}</figcaption></figure>` : selected?.image ? `<figure><img src="${selected.image}" alt="${escapeHTML(selected.alt || '')}"><figcaption>${escapeHTML(selected.caption || '')}</figcaption></figure>` : `<div class="story-illustration" role="img" aria-label="Ilustração simbólica de ${escapeHTML(selected?.title || '')}">${selected?.icon || '🔎'}</div>`;
    const caa = selected?.caa ? `<div class="caa-strip" aria-label="Apoio visual de comunicação">${selected.caa.map(item => `<span><b aria-hidden="true">${item[0]}</b>${escapeHTML(item[1])}</span>`).join('')}</div>` : '';
    const source = selected?.sourceUrl ? `<a class="source-link" href="${selected.sourceUrl}" target="_blank" rel="noopener noreferrer">↗ ${escapeHTML(selected.sourceLabel)}</a>` : '';
    const detail = selected ? `<article class="source-dossier" aria-live="polite">
      ${visual}
      <div class="dossier-copy"><span class="context-label">PISTA ${state.activity.selectedSpot + 1}</span><h2>${selected.icon} ${escapeHTML(selected.title)}</h2><p>${escapeHTML(selected.text)}</p>
      ${caa}
      ${selected.audio ? `<div class="audio-story"><strong>🎧 Áudio da estação</strong><audio controls preload="metadata" src="${selected.audio}">Seu navegador não reproduz áudio.</audio><small>Voz sintetizada em português. Conteúdo baseado na fonte indicada.</small></div>` : ''}
      <div class="dossier-actions"><button type="button" class="secondary-button compact" data-speak="${state.activity.selectedSpot}">🔊 Ouvir descrição</button>${selected?.voiceUrl ? `<a class="source-link voice-link" href="${selected.voiceUrl}" target="_blank" rel="noopener noreferrer">🎧 ${escapeHTML(selected.voiceLabel)}</a>` : ''}${source}<button type="button" class="primary-button compact" data-record="${state.activity.selectedSpot}">${state.activity.visited.includes(state.activity.selectedSpot) ? 'Pista registrada ✓' : 'Registrar esta pista'}</button></div></div>
    </article>` : `<div class="field-journal" aria-live="polite"><strong>Diário de campo</strong><p>Escolha uma estação. O conteúdo será aberto aqui antes de você registrar a pista.</p></div>`;
    refs.challengeContent.innerHTML = `<div class="place-banner"><span>VOCÊ CHEGOU A</span><strong>${escapeHTML(task.scene)}</strong></div>${heading}<p>${escapeHTML(task.objective)}</p><div class="exploration-scene" role="group" aria-label="Estações para investigar">${task.spots.map((spot, index) => `<button type="button" class="scene-place ${state.activity.visited.includes(index) ? 'visited' : ''}" data-spot="${index}" aria-pressed="${state.activity.selectedSpot === index}"><span class="place-icon" aria-hidden="true">${spot.icon}</span><strong>${escapeHTML(spot.title)}</strong><small>${state.activity.visited.includes(index) ? 'Pista registrada ✓' : escapeHTML(spot.action)}</small></button>`).join('')}</div>${detail}<p class="visit-counter"><strong>${state.activity.visited.length} de ${task.spots.length}</strong> pistas registradas</p>`;
    $$('.scene-place').forEach(button => button.addEventListener('click', () => { state.activity.selectedSpot = Number(button.dataset.spot); refs.feedback.hidden = true; draw(); }));
    $$('[data-record]').forEach(button => button.addEventListener('click', () => { const index = Number(button.dataset.record); if (!state.activity.visited.includes(index)) state.activity.visited.push(index); draw(); }));
    $$('[data-speak]').forEach(button => button.addEventListener('click', () => { const spot = task.spots[Number(button.dataset.speak)]; speakText(`${spot.alt || ''} ${spot.text} ${spot.caption || ''}`); }));
  };
  draw();
}

function renderMemory(task, heading) {
  const deck = shuffleArray(task.pairs.flatMap(pair => [
    { key: `${pair.id}-photo`, pair: pair.id, kind: 'photo', label: `Fotografia real: ${pair.label}. ${pair.clue}`, color: pair.color, clue: pair.clue, image: pair.image, alt: pair.alt, credit: pair.credit },
    { key: `${pair.id}-word`, pair: pair.id, kind: 'word', label: `${pair.label}: ${pair.clue}`, color: pair.color, clue: pair.clue, image: pair.image, alt: pair.alt, credit: pair.credit }
  ]));
  state.activity = { deck, open: [], matched: [], moves: 0, locked: false };
  const draw = () => {
    const a = state.activity;
    const found = task.pairs.map(pair => `<span class="memory-token ${a.matched.includes(pair.id) ? 'found' : ''}" style="--pair-color:${pair.color}"><img src="${pair.image}" alt="" aria-hidden="true">${a.matched.includes(pair.id) ? escapeHTML(pair.label) : '• • •'}</span>`).join('');
    const sources = task.pairs.map(pair => `<li><strong>${escapeHTML(pair.label)}</strong> — ${escapeHTML(pair.credit)} <a href="${pair.sourceUrl}" target="_blank" rel="noopener">abrir fonte</a></li>`).join('');
    refs.challengeContent.innerHTML = `${heading}<section class="memory-mission"><div><span class="context-label">MISSÃO VISUAL CAA</span><h2>Arquivo das pistas reais</h2><p>Abra dois cartões e encontre fotografias iguais. As cartas não exibem palavras: a descrição acessível e os créditos ficam no painel abaixo.</p></div><div class="memory-meter" aria-label="${a.matched.length} de ${task.pairs.length} pares encontrados"><strong>${a.matched.length}</strong><span>/ ${task.pairs.length}</span></div></section><div class="memory-found" aria-label="Pistas encontradas">${found}</div><div class="memory-grid" role="group" aria-label="Jogo da memória com fotografias reais">${a.deck.map((card, index) => { const visible = a.open.includes(index) || a.matched.includes(card.pair); const face = `<img class="memory-photo" src="${card.image}" alt="${escapeHTML(card.alt)}">`; return `<button type="button" class="memory-card ${visible ? 'open' : ''} ${a.matched.includes(card.pair) ? 'matched' : ''}" style="--pair-color:${card.color}" data-memory="${index}" data-pair="${card.pair}" data-kind="${card.kind}" aria-label="${visible ? escapeHTML(card.label) : 'Cartão de fotografia fechado'}" ${a.matched.includes(card.pair) ? 'disabled' : ''}><span class="memory-back"><i aria-hidden="true">✦</i><b>FOTO</b><small>${String(index + 1).padStart(2,'0')}</small></span><span class="memory-face">${face}</span></button>`; }).join('')}</div><p class="memory-status" aria-live="polite"><strong>${a.matched.length} de ${task.pairs.length}</strong> pares encontrados · ${a.moves} tentativas</p><details class="memory-sources"><summary>Descrição acessível, créditos e fontes das imagens</summary><p>As fotografias mostram situações, pessoas e lugares específicos. Elas não representam todos os povos nem autorizam conclusões pela aparência.</p><ul>${sources}</ul></details>`;
    $$('[data-memory]').forEach(button => button.addEventListener('click', () => {
      const index = Number(button.dataset.memory);
      if (a.locked || a.open.includes(index)) return;
      a.open.push(index);
      if (a.open.length === 2) {
        a.moves++;
        const [first, second] = a.open.map(i => a.deck[i]);
        a.locked = true;
        draw();
        setTimeout(() => { if (first.pair === second.pair && first.kind !== second.kind) a.matched.push(first.pair); a.open = []; a.locked = false; draw(); }, first.pair === second.pair ? 350 : 750);
      } else draw();
    }));
  };
  draw();
}

function renderNewsroom(task, heading) {
  state.activity = { selected: null, placements: {}, order: shuffleArray(task.cards.map(card => card.id)) };
  const draw = () => {
    const placedIds = Object.values(state.activity.placements);
    const orderedCards = state.activity.order.map(id => task.cards.find(card => card.id === id));
    refs.challengeContent.innerHTML = `${heading}<p>Os recortes foram embaralhados. 1. Selecione um. 2. Escolha a seção em que ele deve ser publicado.</p><div class="newsroom-board"><div class="clipping-tray"><h2>Recortes apurados</h2>${orderedCards.map(card => `<button type="button" class="news-clipping ${state.activity.selected===card.id?'selected':''} ${placedIds.includes(card.id)?'placed':''}" data-card="${card.id}" aria-pressed="${state.activity.selected===card.id}"><span aria-hidden="true">✂</span>${escapeHTML(card.text)}</button>`).join('')}</div><div class="bulletin-layout"><h2>Boletim da comunidade</h2>${task.slots.map(slot => { const cardId=state.activity.placements[slot.id]; const card=task.cards.find(item=>item.id===cardId); return `<button type="button" class="bulletin-slot ${card?'filled':''}" data-slot="${slot.id}"><strong>${escapeHTML(slot.label)}</strong><small>${escapeHTML(slot.help)}</small><span>${card?escapeHTML(card.text):'Colocar recorte aqui'}</span></button>`; }).join('')}</div></div>`;
    $$('[data-card]').forEach(button => button.addEventListener('click', () => { state.activity.selected=button.dataset.card; draw(); }));
    $$('[data-slot]').forEach(button => button.addEventListener('click', () => {
      if (!state.activity.selected) return toast('Primeiro, selecione um recorte apurado.');
      Object.keys(state.activity.placements).forEach(key => { if(state.activity.placements[key]===state.activity.selected) delete state.activity.placements[key]; });
      state.activity.placements[button.dataset.slot]=state.activity.selected; state.activity.selected=null; draw();
    }));
  };
  draw();
}

function renderOnca(task, heading) {
  const rounds = [
    { onca:12, dogs:[7,11,13,17], correct:2 },
    { onca:2, dogs:[6,7,1,3], correct:10 },
    { onca:10, dogs:[11,5,15,6], correct:12 }
  ];
  state.activity = { round: 0, captures: 0, message: 'Observe a onça, a peça vizinha e a casa vazia depois dela.' };
  const draw = () => {
    const a = state.activity; const round = rounds[Math.min(a.round, rounds.length - 1)];
    const board = Array.from({length:25}, (_, index) => {
      const isOnca = index === round.onca; const isDog = round.dogs.includes(index); const isTarget = !isOnca && !isDog;
      return `<button type="button" class="onca-cell ${isTarget ? 'target' : ''}" data-cell="${index}" aria-label="${isOnca ? 'Onça' : isDog ? 'Cachorro' : 'Casa vazia'}" ${isOnca || isDog || a.round >= rounds.length ? 'disabled' : ''}>${isOnca ? '🐆' : isDog ? '🐕' : '·'}</button>`;
    }).join('');
    refs.challengeContent.innerHTML = `${heading}<div class="onca-game"><div class="onca-board" role="grid" aria-label="Tabuleiro didático simplificado do desafio Adugo">${board}</div><aside><h2>Rodada ${Math.min(a.round + 1, 3)} de 3</h2><p>A onça salta sobre um cachorro vizinho e pousa na casa vazia seguinte.</p><div class="onca-score">🐆 Capturas: <strong>${a.captures}</strong></div><p class="simulation-note" aria-live="polite">${escapeHTML(a.message)}</p><a class="source-link" href="${task.sourceUrl}" target="_blank" rel="noopener noreferrer">↗ ${escapeHTML(task.sourceLabel)}</a></aside></div>`;
    $$('[data-cell]').forEach(button => button.addEventListener('click', () => {
      if (Number(button.dataset.cell) === round.correct) {
        a.captures++; a.round++;
        a.message = a.round === rounds.length ? 'Treino concluído! Você identificou três saltos de captura.' : 'Captura realizada! O tabuleiro mudou: procure o próximo salto.';
      } else a.message = 'Essa casa não completa um salto sobre uma peça vizinha. Tente outra.';
      draw();
    }));
  };
  draw();
}

function renderEarthBuild(task, heading) {
  state.activity = { sequence: [] };
  const shuffled = [task.pieces[2], task.pieces[0], task.pieces[3], task.pieces[1]];
  refs.challengeContent.innerHTML = `${heading}<p>Toque nas camadas na ordem correta. O modelo crescerá a cada escolha.</p><div class="earth-lab"><div class="earth-stack" id="earthStack" role="img" aria-label="Modelo da Terra em construção"><span>Modelo vazio</span></div><div class="piece-tray">${shuffled.map(piece => `<button type="button" class="layer-piece" data-layer="${piece.id}"><span aria-hidden="true">${piece.icon}</span><strong>${piece.label}</strong><small>${piece.text}</small></button>`).join('')}</div></div>`;
  $$('.layer-piece').forEach(button => button.addEventListener('click', () => {
    const expected = task.order[state.activity.sequence.length]; const id = button.dataset.layer;
    if (id !== expected) return showFeedback('error', 'Observe a posição', 'Essa camada ainda não entra. Pense do exterior para o interior e tente outra peça.');
    state.activity.sequence.push(id); button.disabled = true; button.classList.add('placed');
    const labels = state.activity.sequence.map(layerId => task.pieces.find(piece => piece.id === layerId).label);
    $('#earthStack').className = `earth-stack built-${state.activity.sequence.length}`;
    $('#earthStack').innerHTML = labels.map(label => `<span>${label}</span>`).join(''); refs.feedback.hidden = true;
  }));
}

function renderRestoration(task, heading) {
  const actions = [
    { id:'native', icon:'🌳', title:'Replantar espécies nativas', effect:{water:20,soil:18,bio:28}, note:'Raízes protegem o solo e a diversidade retorna.' },
    { id:'protect', icon:'🛡️', title:'Proteger a faixa da nascente', effect:{water:30,soil:10,bio:12}, note:'O pisoteio diminui e a margem fica protegida.' },
    { id:'cover', icon:'🍂', title:'Cobrir o solo', effect:{water:12,soil:30,bio:8}, note:'A umidade permanece e a erosão diminui.' },
    { id:'corridor', icon:'🐝', title:'Criar corredor de biodiversidade', effect:{water:8,soil:12,bio:30}, note:'Animais e sementes voltam a circular.' },
    { id:'concrete', icon:'⬜', title:'Concretar toda a margem', effect:{water:-15,soil:0,bio:-20}, note:'A água deixa de infiltrar e os habitats diminuem.' },
    { id:'burn', icon:'🔥', title:'Queimar a vegetação restante', effect:{water:-20,soil:-25,bio:-25}, note:'O solo fica exposto e muitas formas de vida são afetadas.' }
  ];
  state.activity = { water:30, soil:28, bio:25, used:[] };
  const draw = note => {
    const a = state.activity; const meter = (label,key,icon) => `<div class="eco-meter"><span>${icon} ${label}</span><div><i style="width:${Math.max(0,Math.min(100,a[key]))}%"></i></div><b>${a[key]}%</b></div>`;
    refs.challengeContent.innerHTML = `${heading}<div class="restoration-layout"><div class="river-scene ${a.water>=70&&a.soil>=70&&a.bio>=70?'healthy':''}" role="img" aria-label="Nascente em recuperação"><span class="scene-water">〰</span><span class="scene-plants">${a.bio >= 70 ? '🌳🌿🌳' : '🪵  🌱'}</span></div><div class="eco-dashboard">${meter('Água','water','💧')}${meter('Solo','soil','🟫')}${meter('Biodiversidade','bio','🦋')}</div></div><p class="simulation-note">${escapeHTML(note || 'Meta: leve os três indicadores a pelo menos 70%. Você pode testar e reiniciar.')}</p><div class="action-deck">${actions.map(action => `<button type="button" class="eco-action ${a.used.includes(action.id)?'used':''}" data-eco="${action.id}" ${a.used.includes(action.id)?'disabled':''}><span>${action.icon}</span><strong>${action.title}</strong></button>`).join('')}</div><button type="button" class="secondary-button compact" id="resetSimulation">↻ Reiniciar simulação</button>`;
    $$('[data-eco]').forEach(button => button.addEventListener('click', () => { const action = actions.find(item => item.id === button.dataset.eco); a.used.push(action.id); Object.keys(action.effect).forEach(key => a[key] = Math.max(0, Math.min(100, a[key] + action.effect[key]))); draw(action.note); }));
    $('#resetSimulation').addEventListener('click', () => { state.activity = {water:30,soil:28,bio:25,used:[]}; renderRestoration(task, heading); });
  };
  draw();
}

function renderMapScale(task, heading) {
  state.activity = { width: task.original[0], height: task.original[1] };
  const draw = () => {
    const {width,height} = state.activity;
    refs.challengeContent.innerHTML = `${heading}<div class="scale-workbench"><div class="scale-canvas"><div class="resizable-plot" style="width:${width*30}px;height:${height*30}px" role="img" aria-label="Área atual com ${width} por ${height} quadrados"><span>${width} × ${height}</span></div></div><div class="dimension-controls"><p>Original: <b>${task.original[0]} × ${task.original[1]}</b></p><p>Fator: <b>× ${task.factor}</b></p><div><span>Largura</span><button type="button" data-dim="width" data-delta="-1" aria-label="Diminuir largura">−</button><b>${width}</b><button type="button" data-dim="width" data-delta="1" aria-label="Aumentar largura">+</button></div><div><span>Altura</span><button type="button" data-dim="height" data-delta="-1" aria-label="Diminuir altura">−</button><b>${height}</b><button type="button" data-dim="height" data-delta="1" aria-label="Aumentar altura">+</button></div><p>Objetivo: construir uma figura semelhante.</p></div></div>`;
    $$('[data-dim]').forEach(button => button.addEventListener('click', () => { const key=button.dataset.dim; state.activity[key]=Math.max(1,Math.min(12,state.activity[key]+Number(button.dataset.delta))); draw(); }));
  };
  draw();
}

function renderIrrigation(task, heading) {
  state.activity = { index:0, results:[] };
  const draw = () => {
    refs.challengeContent.innerHTML = `${heading}<div class="irrigation-field">${task.plots.map((plot,index) => { const result=state.activity.results[index]; return `<div class="plot ${result ? 'processed '+result.action : ''}"><span aria-hidden="true">${result?.action==='watered'?'💦':'🌱'}</span><strong>${plot.name}</strong><small>Umidade: ${plot.moisture}%</small><b>${result ? result.message : index===state.activity.index ? 'Sensor pronto' : 'Aguardando'}</b></div>`; }).join('')}</div><div class="algorithm-console"><strong>Registro do algoritmo</strong><ol>${state.activity.results.map(result => `<li>${escapeHTML(result.log)}</li>`).join('') || '<li>Aguardando a primeira leitura.</li>'}</ol></div><button type="button" class="primary-button" id="runSensor" ${state.activity.index>=task.plots.length?'disabled':''}>${state.activity.index>=task.plots.length?'Ciclo concluído ✓':'Verificar próximo canteiro'}</button>`;
    $('#runSensor').addEventListener('click', () => { const plot=task.plots[state.activity.index]; const result=plot.dry ? {action:'watered',message:'Irrigado 5 min',log:`${plot.name}: solo seco → irrigar por 5 minutos.`} : {action:'skipped',message:'Água preservada',log:`${plot.name}: solo úmido → avançar sem irrigar.`}; state.activity.results.push(result); state.activity.index++; draw(); });
  };
  draw();
}

function renderQuiz(task, heading, type) {
  let visual = '';
  if (type === 'earth') visual = `<div class="earth-model" role="img" aria-label="Modelo simplificado em corte das camadas da Terra"><span>${task.label}</span></div>`;
  if (type === 'math') visual = `<div class="grid-visual" role="img" aria-label="Malha de 12 por 6 quadrados com um retângulo de 4 por 3 destacado"><span class="grid-shape"></span></div>`;
  refs.challengeContent.innerHTML = `${visual}${heading}<div class="options" role="group" aria-label="Opções de resposta">${task.options.map((option, index) => `<button type="button" class="option" data-index="${index}" aria-pressed="false"><span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${escapeHTML(option)}</span></button>`).join('')}</div>`;
  $$('.option').forEach(button => button.addEventListener('click', () => selectSingle(button)));
}

function selectSingle(button) {
  state.selected = Number(button.dataset.index);
  $$('.option').forEach(item => { const selected = item === button; item.classList.toggle('selected', selected); item.setAttribute('aria-pressed', String(selected)); });
  refs.feedback.hidden = true;
}

function renderMulti(task, heading) {
  refs.challengeContent.innerHTML = `${heading}<p><strong>Selecione ${task.required} ações.</strong></p><div class="choice-grid" role="group" aria-label="Ações possíveis">${task.options.map((option, index) => `<button type="button" class="choice-card" data-index="${index}" aria-pressed="false"><strong>${escapeHTML(option.title)}</strong><span>${escapeHTML(option.text)}</span></button>`).join('')}</div>`;
  $$('.choice-card').forEach(button => button.addEventListener('click', () => {
    const index = Number(button.dataset.index);
    if (state.selected.includes(index)) state.selected = state.selected.filter(item => item !== index);
    else if (state.selected.length < task.required) state.selected.push(index);
    else return toast(`Escolha exatamente ${task.required} ações. Retire uma para trocar.`);
    button.classList.toggle('selected', state.selected.includes(index));
    button.setAttribute('aria-pressed', String(state.selected.includes(index)));
    refs.feedback.hidden = true;
  }));
}

function renderAlgorithm(task, heading) {
  const blocksById = Object.fromEntries(task.blocks.map(block => [block.id, block]));
  const draw = () => {
    refs.challengeContent.innerHTML = `${heading}<p class="context-box">Seleção = escolher uma ação conforme uma condição. Repetição = executar uma sequência mais de uma vez.</p><div class="algorithm-list" aria-label="Blocos do algoritmo">${state.algorithm.map((id, index) => `<div class="algorithm-block"><span class="block-number">${index + 1}</span><strong>${escapeHTML(blocksById[id].text)}</strong><span class="move-buttons"><button type="button" data-move="up" data-index="${index}" aria-label="Mover ${escapeHTML(blocksById[id].text)} para cima" ${index === 0 ? 'disabled' : ''}>↑</button><button type="button" data-move="down" data-index="${index}" aria-label="Mover ${escapeHTML(blocksById[id].text)} para baixo" ${index === state.algorithm.length - 1 ? 'disabled' : ''}>↓</button></span></div>`).join('')}</div>`;
    $$('[data-move]').forEach(button => button.addEventListener('click', () => {
      const from = Number(button.dataset.index); const to = button.dataset.move === 'up' ? from - 1 : from + 1;
      [state.algorithm[from], state.algorithm[to]] = [state.algorithm[to], state.algorithm[from]];
      draw();
      const focusables = $$(`[data-index="${to}"]`); (focusables.find(x => x.dataset.move === button.dataset.move) || focusables[0])?.focus();
    }));
  };
  draw();
}

function renderSequence(task, heading) {
  state.activity = { order: shuffleArray(task.cards.map(card => card.id)) };
  const draw = () => {
    const byId = Object.fromEntries(task.cards.map(card => [card.id, card]));
    refs.challengeContent.innerHTML = `${heading}<p><strong>Jogo de ordenar:</strong> toque nas cartas na sequência que faz sentido. Use a leitura, as imagens e as pistas CAA para justificar sua escolha.</p><div class="sequence-game" role="list" aria-label="Cartas para ordenar">${state.activity.order.map((id,index) => `<button type="button" class="sequence-card" data-seq-index="${index}" role="listitem"><span>${index + 1}</span><strong>${escapeHTML(byId[id].title)}</strong><small>${escapeHTML(byId[id].text)}</small></button>`).join('')}</div><div class="sequence-order" aria-live="polite"><strong>Ordem escolhida:</strong> ${state.activity.order.map(id => escapeHTML(byId[id].title)).join(' → ')}</div><button type="button" class="secondary-button compact" id="shuffleSequence">↻ Embaralhar novamente</button>`;
    $$('[data-seq-index]').forEach(button => button.addEventListener('click', () => {
      const index = Number(button.dataset.seqIndex); if (index === 0) return;
      [state.activity.order[index - 1], state.activity.order[index]] = [state.activity.order[index], state.activity.order[index - 1]]; draw();
    }));
    $('#shuffleSequence').addEventListener('click', () => { state.activity.order = shuffleArray(task.cards.map(card => card.id)); draw(); });
  };
  draw();
}

function showFeedback(kind, title, message) {
  refs.feedback.className = `feedback ${kind === 'success' ? 'success' : kind === 'error' ? 'error' : ''}`;
  refs.feedback.innerHTML = `<h3>${escapeHTML(title)}</h3><p>${escapeHTML(message)}</p>`;
  refs.feedback.hidden = false;
  refs.feedback.scrollIntoView({ behavior: document.body.classList.contains('reduce-motion') ? 'auto' : 'smooth', block: 'nearest' });
}

function checkAnswer() {
  const phase = PHASES[state.currentPhase];
  const task = phase.tasks[state.currentTask];
  let correct = false;
  if (task.type === 'explore') {
    correct = state.activity.visited.length === task.spots.length;
    if (!correct) return showFeedback('error', 'A missão ainda está acontecendo', `Você participou de ${state.activity.visited.length} de ${task.spots.length} ações. Visite os espaços restantes.`);
  } else if (task.type === 'memory') {
    correct = state.activity.matched.length === task.pairs.length;
    if (!correct) return showFeedback('error', 'Ainda há pares escondidos', `Você encontrou ${state.activity.matched.length} de ${task.pairs.length} pares. Continue virando os cartões.`);
  } else if (task.type === 'newsroom') {
    correct = task.cards.every(card => state.activity.placements[card.target] === card.id);
    if (!correct) return showFeedback('error', 'O boletim precisa de revisão', 'Alguns recortes estão em seções inadequadas ou ainda não foram publicados. Releia as funções de cada seção e reorganize.');
  } else if (task.type === 'onca') {
    correct = state.activity.captures === 3;
    if (!correct) return showFeedback('error', 'A rodada continua', `Você realizou ${state.activity.captures} de 3 capturas. Procure a casa vazia depois do cachorro.`);
  } else if (task.type === 'earthBuild') {
    correct = state.activity.sequence.join('|') === task.order.join('|');
    if (!correct) return showFeedback('error', 'Modelo ainda incompleto', `Você posicionou ${state.activity.sequence.length} de ${task.order.length} camadas. Continue a construção.`);
  } else if (task.type === 'restoration') {
    correct = state.activity.water >= 70 && state.activity.soil >= 70 && state.activity.bio >= 70;
    if (!correct) return showFeedback('error', 'O território ainda precisa de cuidado', `Indicadores atuais: água ${state.activity.water}%, solo ${state.activity.soil}% e biodiversidade ${state.activity.bio}%. Teste outras ações ou reinicie a simulação.`);
  } else if (task.type === 'mapScale') {
    correct = state.activity.width === task.target[0] && state.activity.height === task.target[1];
    if (!correct) return showFeedback('error', 'A proporção ainda não foi alcançada', `Sua área está com ${state.activity.width} × ${state.activity.height}. Aplique o fator ${task.factor} às duas dimensões originais.`);
  } else if (task.type === 'irrigation') {
    correct = state.activity.results.length === task.plots.length;
    if (!correct) return showFeedback('error', 'O ciclo ainda não terminou', `Você verificou ${state.activity.results.length} de ${task.plots.length} canteiros. Execute a próxima leitura.`);
  } else if (task.type === 'multi') {
    if (state.selected.length !== task.required) return showFeedback('error', 'Complete sua escolha', `Selecione exatamente ${task.required} ações antes de confirmar.`);
    correct = state.selected.every(index => task.options[index].good);
  } else if (task.type === 'algorithm') correct = state.algorithm.join('|') === task.order.join('|');
  else if (task.type === 'sequence') correct = state.activity.order.join('|') === task.order.join('|');
  else {
    if (state.selected === null) return showFeedback('error', 'Escolha uma resposta', 'Selecione uma opção antes de confirmar.');
    correct = state.selected === task.correct;
  }
  const key = `${state.currentPhase}-${state.currentTask}`;
  state.attempts[key] = (state.attempts[key] || 0) + 1;
  if (!correct) {
    showFeedback('error', 'Ainda não. Vamos pensar juntos.', task.explanation);
    return;
  }
  const points = state.reviewMode ? 0 : state.attempts[key] === 1 ? 100 : state.attempts[key] === 2 ? 75 : 60;
  showFeedback('success', state.reviewMode ? 'Revisão concluída!' : `Muito bem! +${points} pontos`, task.explanation);
  refs.challengeActions.innerHTML = `<button class="primary-button" type="button" id="nextTaskButton">${state.currentTask < phase.tasks.length - 1 ? 'Próximo desafio' : 'Concluir fase'} →</button>`;
  $('#nextTaskButton').addEventListener('click', () => advance(points));
}

function advance(points) {
  const phase = PHASES[state.currentPhase];
  state.score += points;
  state.phaseScores[state.currentPhase] = (state.phaseScores[state.currentPhase] || 0) + points;
  if (state.currentTask < phase.tasks.length - 1) {
    state.currentTask += 1;
    renderChallenge();
    $('.challenge-main').scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else completePhase();
  updateHeader();
}

function completePhase() {
  const phase = PHASES[state.currentPhase];
  if (!state.completed.includes(state.currentPhase)) state.completed.push(state.currentPhase);
  state.completed.sort((a,b) => a-b);
  saveProgress();
  $('#phaseCompleteTitle').textContent = `${phase.title}: fase concluída!`;
  $('#phaseCompleteMessage').textContent = `Você restaurou o símbolo de ${phase.subject} e mobilizou a habilidade ${phase.skill}.`;
  $('#phasePoints').textContent = state.phaseScores[state.currentPhase];
  $('#totalPoints').textContent = state.score;
  $('#masteryBox').innerHTML = `<strong>Evidência de aprendizagem observada</strong><br>${phase.evidence}<br><small>Objeto de conhecimento: ${phase.object}. Progressão cognitiva: ${phase.bloom}.</small>`;
  $('#continueButton').textContent = state.completed.length === PHASES.length ? 'Ver resultado e certificado' : 'Voltar ao mapa';
  showScreen('phaseCompleteScreen');
}

function showFinal() {
  state.player = $('#playerName').value.trim() || state.player || 'Jovem Guardião';
  const max = PHASES.reduce((sum, phase) => sum + phase.tasks.length * 100, 0);
  const percent = Math.round(state.score / max * 100);
  $('#finalStats').innerHTML = `<span><small>Pontuação</small><strong>${state.score}/${max}</strong></span><span><small>Aproveitamento</small><strong>${percent}%</strong></span><span><small>Habilidades</small><strong>6/6</strong></span>`;
  $('#certificateName').textContent = state.player;
  $('#certificateScore').textContent = state.score;
  $('#certificateDate').textContent = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(new Date());
  saveProgress();
  showScreen('finalScreen');
}

function resetJourney() {
  if (!confirm('Deseja apagar a pontuação e recomeçar toda a jornada?')) return;
  Object.assign(state, { score: 0, completed: [], phaseScores: {}, attempts: {}, currentPhase: 0, currentTask: 0, selected: null, algorithm: [] });
  localStorage.removeItem('guardioes-kalunga-yara-v7');
  renderMap();
  showScreen('startScreen');
  toast('Jornada reiniciada.');
}

function setupAccessibility() {
  const panel = $('#accessibilityPanel'); const scrim = $('#scrim'); const trigger = $('#accessibilityButton');
  const close = () => { panel.hidden = true; scrim.hidden = true; trigger.setAttribute('aria-expanded', 'false'); trigger.focus(); };
  trigger.addEventListener('click', () => { panel.hidden = false; scrim.hidden = false; trigger.setAttribute('aria-expanded', 'true'); $('#closeAccessibility').focus(); });
  $('#closeAccessibility').addEventListener('click', close); scrim.addEventListener('click', close);
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !panel.hidden) close(); });
  const setFont = step => { state.fontStep = Math.max(-1, Math.min(3, step)); document.documentElement.style.setProperty('--base-font', `${16 + state.fontStep * 2}px`); toast(`Tamanho do texto: ${16 + state.fontStep * 2} pixels`); };
  $('#fontIncrease').addEventListener('click', () => setFont(state.fontStep + 1)); $('#fontDecrease').addEventListener('click', () => setFont(state.fontStep - 1)); $('#fontReset').addEventListener('click', () => setFont(0));
  [['highContrast','high-contrast'],['simpleMode','simple-mode'],['reduceMotion','reduce-motion']].forEach(([id, cls]) => $(`#${id}`).addEventListener('change', event => document.body.classList.toggle(cls, event.target.checked)));
  $('#readPage').addEventListener('click', () => {
    if (!('speechSynthesis' in window)) return toast('A leitura em voz alta não está disponível neste navegador.');
    speechSynthesis.cancel(); const text = document.querySelector('.screen.active').innerText; const utterance = new SpeechSynthesisUtterance(text); utterance.lang = 'pt-BR'; utterance.rate = .92; speechSynthesis.speak(utterance); toast('Leitura iniciada. Use o botão novamente para reiniciar.');
  });
}

function init() {
  try {
    const saved = JSON.parse(localStorage.getItem('guardioes-kalunga-yara-v7'));
    if (saved && Array.isArray(saved.completed)) {
      state.player = saved.player || '';
      state.score = Number(saved.score) || 0;
      state.completed = saved.completed.filter(index => Number.isInteger(index) && index >= 0 && index < PHASES.length);
      state.phaseScores = saved.phaseScores || {};
      $('#playerName').value = state.player;
      if (state.completed.length) toast('Seu progresso anterior está salvo. Selecione a marca para abrir o mapa.');
    }
  } catch (error) {
    localStorage.removeItem('guardioes-kalunga-yara-v7');
  }
  setupAccessibility();
  $('#startButton').addEventListener('click', () => { state.player = $('#playerName').value.trim(); showScreen('storyScreen'); });
  $('#openMapButton').addEventListener('click', () => { renderMap(); showScreen('mapScreen'); });
  $('#backToMap').addEventListener('click', () => { renderMap(); showScreen('mapScreen'); });
  $('#continueButton').addEventListener('click', () => { if (state.completed.length === PHASES.length) showFinal(); else { renderMap(); showScreen('mapScreen'); } });
  $('#resetButton').addEventListener('click', resetJourney);
  $('#printCertificate').addEventListener('click', () => window.print());
  $('#reviewJourney').addEventListener('click', () => { renderMap(); showScreen('mapScreen'); });
  $('#brandHome').addEventListener('click', event => { event.preventDefault(); renderMap(); showScreen(state.completed.length ? 'mapScreen' : 'startScreen'); });
  updateHeader();
}

init();
