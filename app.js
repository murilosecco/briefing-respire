// ---------------- ÍCONES PHOSPHOR (SVG inline) ----------------
const ICONS={
  "ph-palette":'<path d="M128,24A104,104,0,0,0,24,128c0,43,35.51,64,66.72,64A24,24,0,0,0,115,168a23.76,23.76,0,0,0-6.16-16,8,8,0,0,1,6-13.35H176a56,56,0,0,0,56-56C232,68.75,185.83,24,128,24Zm48,80H114.83A24,24,0,0,0,97,144a7.77,7.77,0,0,1,2,5.25A8,8,0,0,1,91,157.25C67.53,157.25,40,143.4,40,128a88,88,0,0,1,176,0A40,40,0,0,1,176,104ZM68,104a12,12,0,1,1,12,12A12,12,0,0,1,68,104Zm24-40a12,12,0,1,1,12,12A12,12,0,0,1,92,64Zm56,0a12,12,0,1,1,12,12A12,12,0,0,1,148,64Zm40,40a12,12,0,1,1,12,12A12,12,0,0,1,188,104Z"/>',
  "ph-compass":'<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm50.34-133.66a8,8,0,0,0-8.68-1.74l-56,24a8,8,0,0,0-4.2,4.2l-24,56A8,8,0,0,0,93.66,175.66a8,8,0,0,0,8.68,1.74l56-24a8,8,0,0,0,4.2-4.2l24-56A8,8,0,0,0,178.34,82.34ZM149.05,149.05l-36.31,15.56,15.56-36.31,36.31-15.56Z"/>',
  "ph-book-open":'<path d="M224,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z"/>',
  "ph-plant":'<path d="M247.63,39.89a8,8,0,0,0-7.52-7.52c-51.76-3-93.32,12.74-111.18,42.22-11.8,19.49-11.78,43.16-.16,65.74a71.34,71.34,0,0,0-14.17,26L98.33,143.53c7.82-16.33,7.52-33.35-1-47.49-13.28-21.92-44.24-33.6-82.83-31.24a8,8,0,0,0-7.52,7.52c-2.36,38.59,9.32,69.55,31.24,82.83a45.24,45.24,0,0,0,23.63,6.7A54.29,54.29,0,0,0,90,167.11l18,18V216a8,8,0,0,0,16,0V186.83a55.28,55.28,0,0,1,12.42-34.34c.42.14.85.28,1.29.4a70.86,70.86,0,0,0,18.36,2.43c19,0,38.11-7.36,52.62-21.87C243.44,113.9,250.65,80.85,247.63,39.89ZM46.51,141.65C31.88,132.79,23.13,111.75,23.83,84.7c27-.68,48.09,8.05,56.95,22.69,4.6,7.61,5.71,16.63,3.32,26L57,106.34a8,8,0,0,0-11.31,11.32l27.2,27.19C63.14,147.36,54.12,146.25,46.51,141.65Zm150.29-27.46c-13.23,13.23-31.35,19.49-49,17.5l45.71-45.72a8,8,0,0,0-11.31-11.31L126.45,120.9c-2-17.68,4.25-35.8,17.49-49,13.57-13.56,34.42-20.68,58.44-20.14C202.94,79.78,210.36,100.63,196.8,114.19Z"/>',
  "ph-trophy":'<path d="M232,64H208V56a16,16,0,0,0-16-16H64A16,16,0,0,0,48,56v8H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8Zm144-8.9c0,35.52-28.49,64.64-63.51,64.9H128a64,64,0,0,1-64-64V56H192ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z"/>',
  "ph-lightning":'<path d="M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62.46,132.71l84.16-90.14L136.15,94.9a8,8,0,0,0,5,9.06l52.39,19.65Z"/>',
  "ph-sparkle":'<path d="M208,144a15.78,15.78,0,0,1-10.42,14.94l-51.65,19-19,51.61a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88L78,110l19-51.65a15.92,15.92,0,0,1,29.88,0l19,51.65,51.65,19A15.78,15.78,0,0,1,208,144Zm-56-96h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z"/>',
  "ph-smiley":'<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.07,48c-10.29,17.79-27.4,28-46.93,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.07-20a8,8,0,0,1,13.86,8Z"/>',
  "ph-heart":'<path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"/>',
  "ph-hand-heart":'<path d="M223.44,110.79a24,24,0,0,0-23.9-22.15c.36-2.17.55-4.4.55-6.64a40.55,40.55,0,0,0-40.5-40.5A40.09,40.09,0,0,0,128,55.94a40.09,40.09,0,0,0-31.59-14.44A40.55,40.55,0,0,0,55.91,82c0,2.24.19,4.47.55,6.64a24,24,0,0,0-23.9,22.15A192.29,192.29,0,0,0,32,128a8,8,0,0,0,16,0,176.32,176.32,0,0,1,.5-16.14A8,8,0,0,1,56.42,104h.16a8,8,0,0,0,7.7-10.19A24.47,24.47,0,0,1,63.5,82a24.53,24.53,0,0,1,24.5-24.5A24.09,24.09,0,0,1,110.9,73.66a8,8,0,0,0,15,0A24.09,24.09,0,0,1,148.9,57.5,24.53,24.53,0,0,1,173.4,82a24.47,24.47,0,0,1-.78,11.85,8,8,0,0,0,7.7,10.19h.16a8,8,0,0,1,7.92,7.83A176,176,0,0,1,189,142.85c-8,49.29-46,79.6-58.5,88.15a4,4,0,0,1-4.9,0c-6.87-4.7-21.9-16-35.65-33a8,8,0,1,0-12.44,10.05c16.53,20.48,34.9,33.24,41,37.41a20,20,0,0,0,23,0c14-9.56,55.61-43.09,64.29-96.36A192.29,192.29,0,0,0,223.44,110.79ZM120,152a8,8,0,0,0,16,0V138.29l17.5-11.66a8,8,0,0,0-8.88-13.32L128,124.39l-16.62-11.08a8,8,0,0,0-8.88,13.32L120,138.29Z"/>',
  "ph-crown":'<path d="M248,80a28,28,0,1,0-51.12,15.77l-26.79,33L146,73.4a28,28,0,1,0-36.06,0L85.91,128.74l-26.79-33a28,28,0,1,0-24.6,4.53l14.71,73.56A16,16,0,0,0,64.91,192H191.09a16,16,0,0,0,15.68-12.87l14.71-73.56A28,28,0,0,0,248,80ZM128,40a12,12,0,1,1-12,12A12,12,0,0,1,128,40ZM24,80A12,12,0,1,1,36,92,12,12,0,0,1,24,80ZM191.09,176H64.91L52.51,114,88,157.71a8,8,0,0,0,13.66-1.75L128,101.19l26.33,54.77a8,8,0,0,0,13.66,1.75L203.49,114ZM232,92a12,12,0,1,1,12-12A12,12,0,0,1,232,92Z"/>',
  "ph-users-three":'<path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"/>',
  "ph-copy":'<path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"/>',
  "ph-rocket":'<path d="M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224Zm71.6-96.32L192,164.28V184a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V164.28L32.4,127.68A15.94,15.94,0,0,1,28,113.29l14.94-64A16,16,0,0,1,58.53,37h.4a16,16,0,0,1,7.65,2.29L128,72.29l61.42-33A16,16,0,0,1,197.07,37h.4a16,16,0,0,1,15.63,12.29l14.94,64A15.94,15.94,0,0,1,223.6,127.68ZM128,144a20,20,0,1,0-20-20A20,20,0,0,0,128,144Z"/>',
  "ph-target":'<path d="M128,72a56,56,0,1,0,56,56A56.06,56.06,0,0,0,128,72Zm0,96a40,40,0,1,1,40-40A40,40,0,0,1,128,168Zm0-64a24,24,0,1,0,24,24A24,24,0,0,0,128,104Zm0,32a8,8,0,1,1,8-8A8,8,0,0,1,128,136Zm104-16A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"/>',
};
function icon(name,cls){return `<svg class="ico ${cls||''}" viewBox="0 0 256 256" fill="currentColor" xmlns="http://www.w3.org/2000/svg">${ICONS[name]||''}</svg>`;}

// ---------------- DADOS ----------------
const TAXO={
  tom:["Próxima","Inspiradora","Profissional","Aspiracional","Amiga","Prestativa","Educadora","Intimista","Respeitosa","Sábia"],
  personalidade:["Criativa","Confiável","Técnica","Inovadora","Sensível","Determinada","Ambiciosa","Livre","Rebelde","Elegante","Minimalista","Visionária","Alegre","Séria","Brincalhona","Sofisticada","Divertida","Confiante","Misteriosa","Aconchegante","Racional","Emocional","Romântica","Empolgante","Tranquila"],
  atmosfera:["Leve","Orgânica","Digital","Retrô","Futurista","Vibrante","Urbana","Natural","Luxuosa","Simples","Discreta"],
  relacionamento:["Próxima","Inspiradora","Profissional","Aspiracional","Amiga","Prestativa","Educadora","Intimista","Respeitosa"],
};
const FAIXAS=["13-17 Gen Z 2","18-24 Gen Z","25-34 Millennials","35-44 Millennials","45-60 Gen X","60+ Boomers"];
const CLASSES=["A","B","C","D-E"];
const ESTILOS=["Estudantes","Profissionais criativos","Empreendedores","CLT / Executivos","Autônomos / liberais","Aposentados","Outros"];
const INTERESSES=["Moda / Estilo","Tecnologia","Saúde e bem-estar","Sustentabilidade","Pets","Viagens","Música / Cultura pop","Esporte","Gastronomia","Espiritualidade"];
const RELACOES=["Cliente recorrente","Compra por impulso","Indicação","Descobre online","Loja física","Eventos / feiras"];
const TERMO=[
  ["Tradicional","Moderna"],["Séria","Divertida"],["Acessível","Exclusiva"],["Feminina","Masculina"],
  ["Jovem","Madura"],["Discreta","Ousada"],["Técnica","Intuitiva"],["Rebelde","Disciplinada"],
  ["Luxuosa","Popular"],["Artesanal","Industrial"],["Delicada","Robusta"],["Corporativa","Descontraída"],
];
const SEGMENTOS=["Calçados","Moda","Alimentos","Outro"];
const MOMENTOS=["Lançamento","Rebrand","Crescimento"];
const CANAIS=["Loja própria","Multimarcas","E-commerce","Atacado","Representantes","Marketplace","Redes sociais / WhatsApp","Eventos / feiras"];
const APLICACOES=["Embalagem","Ponto de venda","Loja física","Redes sociais","Site / e-commerce","Material impresso","Uniformes","Veículos / sinalização"];
const EXISTENTES=["Logo atual","Embalagens","Fotos de produto","Manual de marca","Site","Materiais impressos"];

const ARQ={
  criador:{n:"O Criador",g:"ph-palette",t:"Inovação · expressão · autenticidade",d:"Existe para criar algo de valor duradouro. Movida pela imaginação."},
  explorador:{n:"O Explorador",g:"ph-compass",t:"Liberdade · descoberta",d:"Busca o novo, o autêntico, o caminho ainda não trilhado."},
  sabio:{n:"O Sábio",g:"ph-book-open",t:"Conhecimento · clareza · verdade",d:"Guiada pela busca da verdade. Ajuda o mundo a enxergar com mais clareza."},
  inocente:{n:"O Inocente",g:"ph-plant",t:"Pureza · otimismo · simplicidade",d:"Acredita no bem e na simplicidade. Transmite otimismo e honestidade."},
  heroi:{n:"O Herói",g:"ph-trophy",t:"Coragem · superação · maestria",d:"Prova seu valor com coragem. Inspira a superar limites."},
  foralei:{n:"O Fora-da-Lei",g:"ph-lightning",t:"Ruptura · revolução · liberdade",d:"Questiona o que está posto e rompe convenções."},
  mago:{n:"O Mago",g:"ph-sparkle",t:"Transformação · visão · emoção",d:"Transforma sonhos em realidade. Cria experiências que mudam quem as vive."},
  bobo:{n:"O Bobo-da-Corte",g:"ph-smiley",t:"Leveza · alegria · espontaneidade",d:"Vive o presente com humor. Faz da vida algo mais divertido."},
  cuidador:{n:"O Cuidador",g:"ph-hand-heart",t:"Empatia · acolhimento · proteção",d:"Cuida do outro com generosidade. Protege e faz sentir-se seguro."},
  governante:{n:"O Governante",g:"ph-crown",t:"Liderança · confiança · excelência",d:"Assume o controle com autoridade. Cria ordem e referência de excelência."},
  amante:{n:"O Amante",g:"ph-heart",t:"Desejo · intimidade · beleza",d:"Celebra a beleza e o prazer. Cria desejo e experiências memoráveis."},
  amigo:{n:"O Amigo",g:"ph-users-three",t:"Proximidade · pertencimento",d:"É próxima, honesta e sem pretensão. Faz as pessoas se sentirem pertencentes."},
};
const ARQ_NOME={criador:"Criador",explorador:"Explorador",sabio:"Sábio",inocente:"Inocente",heroi:"Herói",foralei:"Fora-da-Lei",mago:"Mago",bobo:"Bobo-da-Corte",cuidador:"Cuidador",governante:"Governante",amante:"Amante",amigo:"Amigo"};
const DUELS=[
  {q:"A marca prefere...",a:{emo:"ph-lightning",txt:"Quebrar a regra e abrir um caminho novo",pts:{foralei:2,explorador:1,mago:1}},b:{emo:"ph-hand-heart",txt:"Ser o porto seguro em que todos confiam",pts:{cuidador:2,governante:1,inocente:1}}},
  {q:"Numa conversa, ela é a que...",a:{emo:"ph-book-open",txt:"Explica, ensina e traz clareza",pts:{sabio:2,governante:1,criador:1}},b:{emo:"ph-smiley",txt:"Descontrai, provoca risada e leveza",pts:{bobo:2,amigo:1,amante:1}}},
  {q:"O que move a marca é...",a:{emo:"ph-trophy",txt:"Superar desafios e provar seu valor",pts:{heroi:2,governante:1,explorador:1}},b:{emo:"ph-heart",txt:"Criar beleza, desejo e conexão",pts:{amante:2,criador:1,mago:1}}},
  {q:"Se pudesse escolher um poder...",a:{emo:"ph-sparkle",txt:"Transformar a realidade das pessoas",pts:{mago:2,heroi:1,criador:1}},b:{emo:"ph-plant",txt:"Manter tudo simples, puro e otimista",pts:{inocente:2,cuidador:1,amigo:1}}},
  {q:"A marca se sente mais em casa...",a:{emo:"ph-compass",txt:"Na estrada, no novo, no desconhecido",pts:{explorador:2,foralei:1,heroi:1}},b:{emo:"ph-crown",txt:"No topo, referência do seu mercado",pts:{governante:2,sabio:1,amante:1}}},
  {q:"Como quer ser lembrada?",a:{emo:"ph-palette",txt:"Como original — ninguém faz como ela",pts:{criador:2,foralei:1,mago:1}},b:{emo:"ph-users-three",txt:"Como próxima — sempre esteve do seu lado",pts:{amigo:2,cuidador:1,inocente:1}}},
];
const MOODS=[
  {id:"Orgânico Terroso",words:["Orgânica","Natural","Simples"],cols:["#8a7355","#b8a284","#d9cbb3","#6b7a5e","#48412f"]},
  {id:"Minimalista Sereno",words:["Leve","Discreta","Simples"],cols:["#f4f3ee","#e2e0d8","#c9c7bd","#a8a69c","#ffffff"]},
  {id:"Luxo Silencioso",words:["Luxuosa","Discreta","Elegante"],cols:["#1a1a1a","#2e2a24","#7c6a4f","#c2a878","#0d0d0d"]},
  {id:"Futurista Tech",words:["Digital","Futurista","Urbana"],cols:["#0a0e14","#1b2838","#2f6fed","#00d4ff","#5a5f6e"]},
  {id:"Vibrante Expressivo",words:["Vibrante","Urbana","Retrô"],cols:["#e63946","#f4a261","#ffd60a","#2a9d8f","#e76f51"]},
];

// painéis de estilo (proxies projetivos). label + tradução discreta da Archetype Consultant
const PANELS={
  arquitetura:{ campo:"pArquitetura", titulo:"Arquitetura", pergunta:"Que arquitetura tem a alma da marca?", sub:"Estilos construtivos revelam valores. Marque os que ressoam.", img:true,
    opts:[
      {l:"Clássica",t:"Respeitosa · Elegante · Confiável",img:IMGS.arq_classica},
      {l:"Neoclássica",t:"Sofisticada · Aspiracional · Refinada",img:IMGS.arq_neoclassica},
      {l:"Barroca",t:"Luxuosa · Vibrante · Emocional",img:IMGS.arq_barroca},
      {l:"Moderna",t:"Minimalista · Simples · Racional",img:IMGS.arq_moderna},
      {l:"Brutalista",t:"Rebelde · Urbana · Determinada",img:IMGS.arq_brutalista},
      {l:"Contemporânea",t:"Inovadora · Leve · Visionária",img:IMGS.arq_contemporanea},
    ]},
  materiais:{ campo:"pMateriais", titulo:"Materiais", pergunta:"De que a marca é feita?", sub:"Materiais carregam textura e temperatura. Marque os que combinam.",
    opts:[
      {l:"Madeira",t:"Orgânica · Natural · Aconchegante"},
      {l:"Aço",t:"Técnica · Urbana · Determinada"},
      {l:"Alumínio",t:"Digital · Futurista · Minimalista"},
      {l:"Vidro",t:"Leve · Transparente · Sofisticada"},
      {l:"Concreto",t:"Bruta · Urbana · Discreta"},
      {l:"Latão / Cobre",t:"Luxuosa · Retrô · Elegante"},
    ]},
  tipografia:{ campo:"pTipografia", titulo:"Tipografia", pergunta:"Como a marca fala por escrito?", sub:"O proxy mais direto de identidade. Cada opção está escrita na própria fonte.", typo:true,
    opts:[
      {l:"Serifada clássica",t:"Respeitosa · Tradicional · Sábia",font:"'Playfair Display', serif"},
      {l:"Grotesca / sans moderna",t:"Minimalista · Racional · Técnica",font:"'Inter', sans-serif"},
      {l:"Display expressiva",t:"Criativa · Vibrante · Rebelde",font:"'Anton', sans-serif"},
      {l:"Manuscrita / script",t:"Emocional · Romântica · Intimista",font:"'Dancing Script', cursive"},
      {l:"Serifada editorial",t:"Sofisticada · Elegante · Luxuosa",font:"'Cormorant Garamond', serif"},
      {l:"Slab serif",t:"Confiável · Robusta · Urbana",font:"'Roboto Slab', serif"},
      {l:"Geométrica arredondada",t:"Amigável · Acessível · Leve",font:"'Poppins', sans-serif"},
      {l:"Mono / técnica",t:"Técnica · Digital · Precisa",font:"'Space Mono', monospace"},
    ]},
  caes:{ campo:"pCaes", titulo:"Personalidade", pergunta:"Se a marca fosse um cão, qual seria?", sub:"O proxy mais projetivo — e o mais divertido. Marque os que combinam.", img:true,
    opts:[
      {l:"Galgo",t:"Elegante · Refinada · Veloz",img:IMGS.cao_galgo},
      {l:"Bulldog",t:"Confiável · Determinada · Rústica",img:IMGS.cao_bulldog},
      {l:"Border Collie",t:"Inteligente · Ativa · Técnica",img:IMGS.cao_border},
      {l:"Golden Retriever",t:"Amiga · Acolhedora · Aconchegante",img:IMGS.cao_golden},
      {l:"Husky",t:"Livre · Aventureira · Selvagem",img:IMGS.cao_husky},
      {l:"Poodle",t:"Sofisticada · Elegante · Refinada",img:IMGS.cao_poodle},
    ]},
};
// quais painéis estão ativos (fácil desligar um depois)
const PANELS_ATIVOS=["arquitetura","materiais","tipografia","caes"];

// ---------------- ESTADO ----------------
const D={
  nome:"",responsavel:"",email:"",celular:"",tagline:"",produto:"",proposito:"",visao:"",percDes:"",percEvit:"",
  valores:"",
  segmento:[],momento:[],momentoPorque:"",naoMostra:"",
  diferencial:"",canais:[],faixaPreco:"",
  aplicacoes:[],existentes:[],manterAbandonar:"",
  faixa:[],classe:[],estilo:[],interesses:[],relacaoMarca:[],
  concorrentes:"",admiradas:"",referencias:"",
  tom:[],personalidade:[],atmosfera:[],relacionamento:[],essencia:[],
  arqScores:{},arqPrincipal:"",arqSecundario:"",_arqP:"",_arqS:"",
  moodPrincipal:"",moodSecundario:"",
  pArquitetura:[],pMateriais:[],pTipografia:[],pCaes:[],
  termo:TERMO.map(()=>0),
};
Object.keys(ARQ).forEach(k=>D.arqScores[k]=0);
try{const m=new URLSearchParams(location.search).get('marca');if(m)D.nome=m.slice(0,120);}catch(e){}

// ---------------- MOTOR DE TELAS ----------------
// Cada tela é {title, render() -> html, valid() -> bool, custom?:bool}
const SCREENS=[
  { title:"Início", welcome:true, render:()=>`
    <div class="welcome">
      <div class="qnum" style="justify-content:center">Briefing de Identidade Visual</div>
      <div class="big">Vamos conhecer<br>a sua marca.</div>
      <p class="lead">Um passo de cada vez. Responda com as palavras do cliente — no fim, tudo vira o briefing pronto pro Notion.</p>
      <div class="field" style="margin-top:26px;max-width:420px;margin-left:auto;margin-right:auto">
        <input type="text" data-model="nome" value="${esc(D.nome)}" placeholder="Nome da marca" style="text-align:center;font-size:18px">
      </div>
    </div>`, valid:()=>D.nome.trim()!=="" },

  { title:"Contato", render:()=>`
    <h1 class="q">Quem fala pela marca?</h1>
    <p class="q-sub">Para eu guardar o contato e enviar uma cópia das respostas, com a leitura do briefing.</p>
    <div class="field"><label class="fl">Nome do responsável</label><input type="text" data-model="responsavel" value="${esc(D.responsavel)}" placeholder="Com quem estou falando" autocomplete="name"></div>
    <div class="field"><label class="fl">E-mail</label><input type="email" data-model="email" value="${esc(D.email)}" placeholder="nome@marca.com.br" autocomplete="email" inputmode="email"></div>
    <div class="field"><label class="fl">Celular / WhatsApp</label><input type="tel" data-model="celular" value="${esc(D.celular)}" placeholder="(16) 99999-9999" autocomplete="tel" inputmode="tel"></div>
    <div class="limit">Obrigatório: o e-mail recebe a cópia das respostas.</div>`,
    valid:()=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(D.email.trim()) },

  { title:"Abertura · O momento", render:()=>`
    <h1 class="q">Em que momento a marca está?</h1>
    <p class="q-sub">O ponto de virada define o escopo e a urgência do projeto.</p>
    <div class="field"><label class="fl">Segmento</label>${chipGroup('segmento',SEGMENTOS)}</div>
    <div class="field"><label class="fl">Momento</label>${chipGroup('momento',MOMENTOS)}</div>
    <div class="field"><label class="fl">Por que agora?</label><textarea data-model="momentoPorque" placeholder="O que está acontecendo no negócio?">${esc(D.momentoPorque)}</textarea></div>
    <div class="field"><label class="fl">O que você sabe sobre a marca e ainda não consegue mostrar?</label><textarea data-model="naoMostra" placeholder="A ideia que está na cabeça do fundador">${esc(D.naoMostra)}</textarea></div>`, chips:true },

  { title:"Abertura · Sobre a marca", render:()=>`
    <h1 class="q">O que a marca faz?</h1>
    <p class="q-sub">Produto, onde vende e um slogan se houver.</p>
    <div class="field"><label class="fl">Tagline / slogan</label><input type="text" data-model="tagline" value="${esc(D.tagline)}" placeholder="Opcional"></div>
    <div class="field"><label class="fl">Produto ou serviço</label><textarea data-model="produto" placeholder="O que a marca entrega?">${esc(D.produto)}</textarea></div>
    <div class="field"><label class="fl">Onde vende</label>${chipGroup('canais',CANAIS)}</div>
    <div class="field"><label class="fl">Faixa de preço</label><input type="text" data-model="faixaPreco" value="${esc(D.faixaPreco)}" placeholder="Ex.: premium, médio, acessível"></div>`, chips:true },

  { title:"Semente · Propósito", render:()=>`
    <h1 class="q">Por que ela existe?</h1>
    <p class="q-sub">Além de vender — o que a marca muda no mundo.</p>
    <div class="field"><textarea data-model="proposito" placeholder="Qual incômodo ela resolve?" style="min-height:110px">${esc(D.proposito)}</textarea></div>
    <div class="field"><label class="fl">O que a marca não negocia</label><textarea data-model="valores" placeholder="Três valores ou limites inegociáveis">${esc(D.valores)}</textarea></div>` },

  { title:"Semente · Visão", render:()=>`
    <h1 class="q">Onde ela quer chegar?</h1>
    <p class="q-sub">A visão de futuro e as percepções.</p>
    <div class="field"><label class="fl">Visão em 3 anos</label><textarea data-model="visao" placeholder="Se der tudo certo, como falam dela?">${esc(D.visao)}</textarea></div>
    <div class="field"><label class="fl">Percepção desejada</label><input type="text" data-model="percDes" value="${esc(D.percDes)}" placeholder="Como quer ser vista"></div>
    <div class="field"><label class="fl">Percepção a evitar</label><input type="text" data-model="percEvit" value="${esc(D.percEvit)}" placeholder="O que dá calafrio de ouvir"></div>` },

  { title:"Fotossíntese · Público", render:()=>`
    <h1 class="q">Quem é o cliente?</h1>
    <p class="q-sub">Faixa etária e classe social.</p>
    <div class="field"><label class="fl">Faixa etária</label>${chipGroup('faixa',FAIXAS)}</div>
    <div class="field"><label class="fl">Classe social</label>${chipGroup('classe',CLASSES)}</div>`, chips:true },

  { title:"Fotossíntese · Público", render:()=>`
    <h1 class="q">Como esse cliente vive?</h1>
    <p class="q-sub">Ocupação, interesses e como chega até a marca.</p>
    <div class="field"><label class="fl">Estilo de vida / ocupação</label>${chipGroup('estilo',ESTILOS)}</div>
    <div class="field"><label class="fl">Interesses</label>${chipGroup('interesses',INTERESSES)}</div>
    <div class="field"><label class="fl">Relação com a marca</label>${chipGroup('relacaoMarca',RELACOES)}</div>`, chips:true },

  { title:"Fotossíntese · Concorrência", render:()=>`
    <h1 class="q">O território ao redor.</h1>
    <p class="q-sub">Concorrentes, inspirações e referências.</p>
    <div class="field"><label class="fl">Concorrentes diretos</label><textarea data-model="concorrentes" placeholder="Quem disputa o mesmo espaço?">${esc(D.concorrentes)}</textarea></div>
    <div class="field"><label class="fl">Por que o cliente escolhe a marca e não o concorrente?</label><textarea data-model="diferencial" placeholder="O diferencial real, nas palavras do cliente">${esc(D.diferencial)}</textarea></div>
    <div class="field"><label class="fl">Marcas que admira</label><textarea data-model="admiradas" placeholder="De qualquer segmento — e o que atrai nelas">${esc(D.admiradas)}</textarea></div>
    <div class="field"><label class="fl">Referências visuais</label><textarea data-model="referencias" placeholder="Links ou descrições">${esc(D.referencias)}</textarea></div>` },

  { title:"Fotossíntese · Alma da marca", render:()=>`
    <h1 class="q">Se a marca fosse uma pessoa...</h1>
    <p class="q-sub">Como ela fala e como ela é. Até 5 de cada.</p>
    <div class="field"><label class="fl">Tom da marca</label>${chipGroup('tom',TAXO.tom,5)}</div>
    <div class="field"><label class="fl">Personalidade</label>${chipGroup('personalidade',TAXO.personalidade,5)}</div>`, chips:true },

  { title:"Fotossíntese · Alma da marca", render:()=>`
    <h1 class="q">A atmosfera dela.</h1>
    <p class="q-sub">Clima visual e como se relaciona. Até 5 de cada.</p>
    <div class="field"><label class="fl">Atmosfera visual</label>${chipGroup('atmosfera',TAXO.atmosfera,5)}</div>
    <div class="field"><label class="fl">Relacionamento com o público</label>${chipGroup('relacionamento',TAXO.relacionamento,5)}</div>`, chips:true },

  { title:"Fotossíntese · Essência", render:()=>`
    <h1 class="q">As 3 palavras principais.</h1>
    <p class="q-sub">De tudo que apareceu, quais 3 são a alma da marca?</p>
    <div id="essZone"></div>`, chips:true, ess:true,
    valid:()=>D.essencia.length===3 },

  // duelos: 6 telas geradas dinamicamente
  ...DUELS.map((d,i)=>({title:"Fotossíntese · Arquétipo", duel:i, custom:true})),

  { title:"Fotossíntese · Arquétipo", reveal:true, custom:true },

  { title:"Crescimento · Território visual", mood:true, custom:true,
    valid:()=>D.moodPrincipal!=="" },

  // painéis de estilo (proxies projetivos) — um por tela, gerados dos ativos
  ...PANELS_ATIVOS.map(key=>({title:"Crescimento · Estilo", panel:key})),

  { title:"Crescimento · Termômetro", thermo:true, custom:true },

  { title:"Balanço · Aplicações", render:()=>`
    <h1 class="q">Onde a marca vai aparecer.</h1>
    <p class="q-sub">As aplicações e o que já existe.</p>
    <div class="field"><label class="fl">Onde a marca aparece primeiro</label>${chipGroup('aplicacoes',APLICACOES)}</div>
    <div class="field"><label class="fl">O que já existe</label>${chipGroup('existentes',EXISTENTES)}</div>
    <div class="field"><label class="fl">O que manter e o que abandonar da marca atual</label><textarea data-model="manterAbandonar" placeholder="Em caso de rebrand">${esc(D.manterAbandonar)}</textarea></div>`, chips:true },

  { title:"Resultado", result:true, custom:true, last:true },
];

let cur=0;
const viewport=document.getElementById('viewport');
const pf=document.getElementById('pf');
const secTitle=document.getElementById('secTitle');
const stepNum=document.getElementById('stepNum');
const foot=document.getElementById('foot');
const backBtn=document.getElementById('backBtn');
const nextBtn=document.getElementById('nextBtn');

function esc(s){return (s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
function toast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1700);}

function chipGroup(field,list,limit){
  return `<div class="chips">${list.map(w=>`<span class="chip ${D[field].includes(w)?'on':''}" data-f="${field}" data-w="${w}">${w}</span>`).join('')}</div>${limit?`<div class="limit">até ${limit} · <b class="cnt-${field}">${D[field].length}</b></div>`:''}`;
}

function paint(dir){
  const sc=SCREENS[cur];
  secTitle.textContent=sc.title;
  // progresso
  pf.style.width=(cur/(SCREENS.length-1)*100)+'%';
  stepNum.textContent=(cur+1)+' / '+SCREENS.length;

  // monta html
  let html;
  if(sc.duel!==undefined) html=duelHTML(sc.duel);
  else if(sc.reveal) html=revealHTML();
  else if(sc.mood) html=moodHTML();
  else if(sc.panel) html=panelHTML(sc.panel);
  else if(sc.thermo) html=thermoHTML();
  else if(sc.result) html=resultHTML();
  else html=`<div class="inner">${sc.render()}</div>`;

  // cria tela nova com animação
  const el=document.createElement('div');
  el.className='screen '+(dir>=0?'enter-next':'enter-prev');
  el.innerHTML = (sc.duel!==undefined||sc.reveal||sc.mood||sc.panel||sc.thermo||sc.result)?`<div class="inner">${html}</div>`:html;
  // remove QUALQUER tela existente (evita sobreposição em transições rápidas de duelo)
  viewport.querySelectorAll('.screen').forEach(o=>{
    if(o.classList.contains('exit-next')||o.classList.contains('exit-prev')){ o.remove(); return; }
    o.className='screen '+(dir>=0?'exit-next':'exit-prev');
    setTimeout(()=>o.remove(),300);
  });
  viewport.appendChild(el);

  // binds
  bindInputs(el);
  if(sc.chips) bindChips(el, sc);
  if(sc.ess) renderEss(el);
  if(sc.duel!==undefined) bindDuel(el,sc.duel);
  if(sc.mood) bindMood(el);
  if(sc.panel) bindPanel(el,sc.panel);
  if(sc.thermo) bindThermo(el);

  // footer
  updateFoot();
}

function updateFoot(){
  const sc=SCREENS[cur];
  backBtn.style.visibility = cur>0 ? 'visible':'hidden';
  if(sc.custom && (sc.duel!==undefined || sc.reveal)){ // duelo/reveal controlam avanço sozinhos (duelo por clique)
    nextBtn.style.display = sc.reveal ? 'inline-flex':'none';
    if(sc.reveal){nextBtn.innerHTML='Território visual →';nextBtn.disabled=false;}
  } else if(sc.result){
    nextBtn.style.display='none';
  } else {
    nextBtn.style.display='inline-flex';
    nextBtn.innerHTML = sc.last?'':(SCREENS[cur+1]&&SCREENS[cur+1].result?'Ver resultado →':'Avançar →');
    nextBtn.disabled = sc.valid ? !sc.valid() : false;
  }
}

function go(dir){
  const sc=SCREENS[cur];
  if(dir>0 && sc.valid && !sc.valid()){ toast('Complete antes de avançar'); return; }
  const nx=cur+dir;
  if(nx<0||nx>=SCREENS.length) return;
  cur=nx; paint(dir);
  viewport.scrollTop=0;
}

// ---- binds ----
function bindInputs(el){
  el.querySelectorAll('[data-model]').forEach(inp=>{
    inp.addEventListener('input',()=>{ D[inp.dataset.model]=inp.value; updateFoot(); });
  });
}
function bindChips(el,sc){
  el.querySelectorAll('.chip[data-f]').forEach(c=>{
    c.onclick=()=>{
      const f=c.dataset.f,w=c.dataset.w;
      const lim = (f==='tom'||f==='personalidade'||f==='atmosfera'||f==='relacionamento')?5:0;
      const i=D[f].indexOf(w);
      if(i>-1){D[f].splice(i,1);c.classList.remove('on');}
      else{ if(f==='momento'){D[f].length=0;el.querySelectorAll('.chip[data-f="momento"]').forEach(x=>x.classList.remove('on'));} if(lim&&D[f].length>=lim){toast('Máximo '+lim);return;} D[f].push(w);c.classList.add('on'); }
      const cnt=el.querySelector('.cnt-'+f); if(cnt)cnt.textContent=D[f].length;
      updateFoot();
    };
  });
}
function renderEss(el){
  const zone=el.querySelector('#essZone'); if(!zone)return;
  const pool=[...new Set([...D.tom,...D.personalidade,...D.atmosfera,...D.relacionamento])];
  D.essencia=D.essencia.filter(w=>pool.includes(w));
  if(pool.length===0){zone.innerHTML='<div class="limit">Volte e marque palavras nas etapas de Alma da marca primeiro.</div>';updateFoot();return;}
  zone.innerHTML=`<div class="chips">${pool.map(w=>`<span class="chip ess ${D.essencia.includes(w)?'on':''}" data-e="${w}">${w}</span>`).join('')}</div><div class="limit">exatamente 3 · <b id="essCnt">${D.essencia.length}</b></div>`;
  zone.querySelectorAll('.chip[data-e]').forEach(c=>{
    c.onclick=()=>{
      const w=c.dataset.e,i=D.essencia.indexOf(w);
      if(i>-1){D.essencia.splice(i,1);c.classList.remove('on');}
      else{if(D.essencia.length>=3){toast('Só 3');return;}D.essencia.push(w);c.classList.add('on');}
      const cnt=el.querySelector('#essCnt'); if(cnt)cnt.textContent=D.essencia.length;
      updateFoot();
    };
  });
}

// ---- duelo ----
function duelHTML(i){
  const d=DUELS[i];
  return `<div class="qnum" style="justify-content:center"><span class="ln"></span>Duelo ${i+1} de ${DUELS.length}<span class="ln"></span></div>
    <h1 class="q" style="text-align:center;margin-bottom:24px">${d.q}</h1>
    <div class="duel">
      <button class="opt" data-side="a"><div class="emo">${icon(d.a.emo)}</div><div class="txt">${d.a.txt}</div></button>
      <div class="vs">ou</div>
      <button class="opt" data-side="b"><div class="emo">${icon(d.b.emo)}</div><div class="txt">${d.b.txt}</div></button>
    </div>
    <div class="dots">${DUELS.map((_,k)=>`<i class="${k<i?'done':(k===i?'on':'')}"></i>`).join('')}</div>`;
}
function bindDuel(el,i){
  const d=DUELS[i];
  el.querySelectorAll('.opt').forEach(o=>{
    o.onclick=()=>{
      o.classList.add('pick');
      const pts=d[o.dataset.side].pts;
      Object.keys(pts).forEach(k=>D.arqScores[k]+=pts[k]);
      setTimeout(()=>{
        if(i===DUELS.length-1) computeArq();
        go(1);
      },220);
    };
  });
}
function computeArq(){
  const r=Object.keys(D.arqScores).sort((a,b)=>D.arqScores[b]-D.arqScores[a]);
  D._arqP=r[0];D._arqS=r[1];D.arqPrincipal=ARQ_NOME[r[0]];D.arqSecundario=ARQ_NOME[r[1]];
}
function resetArq(){
  D.arqPrincipal="";D.arqSecundario="";D._arqP="";D._arqS="";
  Object.keys(ARQ).forEach(k=>D.arqScores[k]=0);
  // volta pro primeiro duelo
  cur = SCREENS.findIndex(s=>s.duel===0);
  paint(-1);
}
function revealHTML(){
  const W=ARQ[D._arqP],S=ARQ[D._arqS];
  return `<div class="qnum" style="justify-content:center">O arquétipo da marca é</div>
    <div class="card">
      <div class="glyph">${icon(W.g)}</div><div class="aname">${W.n}</div>
      <div class="atag">${W.t}</div><div class="adesc">${W.d}</div>
    </div>
    <div class="second"><div class="g">${icon(S.g)}</div><div><div class="l">Traço secundário</div><div class="n">${S.n}</div></div></div>
    <div class="reveal-hint">Não bateu? <a href="#" onclick="resetArq();return false;">Refazer o duelo</a></div>`;
}

// ---- moodboard ----
function moodHTML(){
  const cards=MOODS.map(m=>{
    const sw=m.cols.map(c=>`<span style="background:${c}"></span>`).join('');
    const isP=D.moodPrincipal===m.id,isS=D.moodSecundario===m.id;
    return `<div class="mood ${(isP||isS)?'sel':''}" data-id="${m.id}">
      <span class="rank">${isP?'Principal':(isS?'Secundário':'')}</span><div class="tick">${isP?'1':(isS?'2':'✓')}</div>
      <div class="sw">${sw}</div><div class="body"><div class="mname">${m.id}</div><div class="mwords">${m.words.join(' · ')}</div></div></div>`;
  }).join('');
  return `<h1 class="q">Qual mundo visual é o dela?</h1>
    <p class="q-sub">Escolha o principal — e um segundo, se for uma mistura.</p>
    <div class="mb-grid">${cards}</div>`;
}
function bindMood(el){
  el.querySelectorAll('.mood').forEach(m=>{
    m.onclick=()=>{
      const id=m.dataset.id;
      if(D.moodPrincipal===id){D.moodPrincipal=D.moodSecundario;D.moodSecundario="";}
      else if(D.moodSecundario===id){D.moodSecundario="";}
      else if(!D.moodPrincipal){D.moodPrincipal=id;}
      else if(!D.moodSecundario){D.moodSecundario=id;}
      else{D.moodSecundario=id;}
      // repinta só o moodboard (sem trocar de tela)
      const inner=el.querySelector('.inner'); inner.innerHTML=moodHTML(); bindMood(el); updateFoot();
    };
  });
}

// ---- painéis de estilo ----
function panelHTML(key){
  const P=PANELS[key], f=P.campo;
  const cards=P.opts.map(o=>{
    const on=D[f].includes(o.l);
    const imgTop = o.img ? `<div class="scard-img"><img src="${o.img}" alt="${o.l}" loading="lazy" onerror="this.parentNode.classList.add('noimg')"><div class="img-fallback">${o.l}</div></div>` : '';
    const styleAttr = o.font ? ` style="font-family:${o.font}"` : '';
    const slClass = o.font ? 'sl sl-typo' : 'sl';
    return `<div class="scard ${on?'on':''} ${o.img?'has-img':''} ${o.font?'has-typo':''}" data-l="${o.l}">
      <div class="stick">✓</div>
      ${imgTop}
      <div class="scard-body"><div class="${slClass}"${styleAttr}>${o.l}</div><div class="st">${o.t}</div></div></div>`;
  }).join('');
  return `<div class="qnum">${icon('ph-palette')} ${P.titulo}</div>
    <h1 class="q">${P.pergunta}</h1>
    <p class="q-sub">${P.sub}</p>
    <div class="style-grid">${cards}</div>
    <div class="panel-note">As traduções em cinza são só sugestões — a escolha fica registrada como referência pro seu olhar.</div>`;
}
function bindPanel(el,key){
  const f=PANELS[key].campo;
  el.querySelectorAll('.scard').forEach(c=>{
    c.onclick=()=>{
      const l=c.dataset.l,i=D[f].indexOf(l);
      if(i>-1){D[f].splice(i,1);c.classList.remove('on');}
      else{D[f].push(l);c.classList.add('on');}
    };
  });
}


// ---- termômetro de atributos ----
function thermoHTML(){
  const rows=TERMO.map((p,i)=>{
    const v=D.termo[i];
    return `<div class="th-row ${v?'set':''}" data-i="${i}">
      <div class="th-ends"><span class="th-l ${v&&v<4?'hot':''}">${p[0]}</span><span class="th-r ${v>4?'hot':''}">${p[1]}</span></div>
      <input type="range" class="th-range" min="1" max="7" step="1" value="${v||4}" aria-label="${p[0]} ou ${p[1]}">
      <div class="th-ticks">${[1,2,3,4,5,6,7].map(n=>`<i class="${v===n?'on':''}"></i>`).join('')}</div>
    </div>`;
  }).join('');
  return `<div class="qnum">${icon('ph-target')} Termômetro</div>
    <h1 class="q">Onde a marca se posiciona?</h1>
    <p class="q-sub">Arraste cada barra para o lado que mais combina. O centro é neutro. Pode deixar em branco o que não fizer sentido.</p>
    <div class="th-list">${rows}</div>
    <div class="panel-note"><a href="#" onclick="resetThermo();return false;">Limpar todos</a></div>`;
}
function thermoMark(row,i,v){
  D.termo[i]=v;
  row.classList.add('set');
  row.querySelector('.th-l').classList.toggle('hot',v<4);
  row.querySelector('.th-r').classList.toggle('hot',v>4);
  row.querySelectorAll('.th-ticks i').forEach((t,k)=>t.classList.toggle('on',k+1===v));
}
function bindThermo(el){
  el.querySelectorAll('.th-row').forEach(row=>{
    const i=+row.dataset.i, r=row.querySelector('.th-range');
    const mark=()=>thermoMark(row,i,+r.value);
    r.addEventListener('input',mark);
    r.addEventListener('change',mark);
    r.addEventListener('pointerup',mark);   // toque no ponto central também conta
    r.addEventListener('keydown',e=>{ if(e.key.startsWith('Arrow')) setTimeout(mark,0); });
  });
}
function resetThermo(){
  D.termo=TERMO.map(()=>0);
  const inner=document.querySelector('.screen:last-child .inner'); if(inner){inner.innerHTML=thermoHTML();bindThermo(inner);}
}
function termoLinhas(){
  return TERMO.map((p,i)=>{
    const v=D.termo[i]; if(!v) return '';
    const bar=[1,2,3,4,5,6,7].map(n=>n===v?'●':'○').join('');
    return `${p[0]} ${bar} ${p[1]}`;
  }).filter(Boolean);
}
function termoResultHTML(){
  const rows=TERMO.map((p,i)=>{
    const v=D.termo[i]; if(!v) return '';
    return `<div class="rrow th-res"><div class="rv th-rl">${p[0]}</div><div class="th-mini">${[1,2,3,4,5,6,7].map(n=>`<i class="${n===v?'on':''}"></i>`).join('')}</div><div class="rv th-rr">${p[1]}</div></div>`;
  }).filter(Boolean).join('');
  if(!rows) return '';
  return `<div class="result-box"><h3>${icon('ph-target')} Termômetro de atributos</h3>${rows}</div>`;
}

// ---- resultado ----
function atmosferaFinal(){
  const s=[...D.atmosfera];
  [D.moodPrincipal,D.moodSecundario].forEach(id=>{ if(!id)return; MOODS.find(m=>m.id===id).words.forEach(w=>{if(!s.includes(w))s.push(w);}); });
  return s;
}
function resultHTML(){
  const atm=atmosferaFinal();
  const row=(k,v)=>`<div class="rrow"><div class="rk">${k}</div><div class="rv">${v||'—'}</div></div>`;
  const attr=s=>String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
  const prow=(k,v)=>{const arr=Array.isArray(v)?v:[v||''];const shown=arr.map(esc).join(' · ');const txt=arr.join(', ');return `<div class="rrow"><div class="rk">${k}</div><div class="rv">${shown||'—'}</div>${txt.trim()?`<button class="cpy" data-copy="${attr(txt)}" onclick="copyProp(this)">copiar</button>`:''}</div>`;};
  return `<div class="qnum">${icon('ph-rocket')} Pronto</div>
    <h1 class="q">Briefing de ${esc(D.nome)||'—'}</h1>
    <p class="q-sub">Confira e leve pro Notion.</p>
    <div class="hint-box"><b>Como salvar:</b> toque em <b>Enviar briefing</b> e ele cai direto na base Briefings do Notion. Se o envio falhar, use <b>Copiar tudo</b> e cole numa página nova da base.</div>
    <div class="result-box"><h3>Propriedades (filtráveis)</h3>
      ${prow('Marca',D.nome)}${prow('Segmento',D.segmento)}${prow('Momento',D.momento)}${prow('Arquétipo principal',D.arqPrincipal)}${prow('Arquétipo secundário',D.arqSecundario)}
      ${prow('Essência',D.essencia)}${prow('Atmosfera',atm)}${prow('Tom',D.tom)}${prow('Personalidade',D.personalidade)}${prow('Relacionamento',D.relacionamento)}
      ${prow('Público — faixa',D.faixa)}${prow('Público — classe',D.classe)}${prow('Moodboard',D.moodPrincipal)}</div>
    <div class="result-box"><h3>Corpo da página</h3>
      ${row('Momento · por que agora',esc(D.momentoPorque))}${row('O que ainda não consegue mostrar',esc(D.naoMostra))}
      ${row('Produto/serviço',esc(D.produto))}${row('Propósito',esc(D.proposito))}${row('Valores',esc(D.valores))}${row('Visão 3 anos',esc(D.visao))}
      ${row('Percepção desejada',esc(D.percDes))}${row('Percepção a evitar',esc(D.percEvit))}
      ${row('Estilo de vida',D.estilo.join(' · '))}${row('Interesses',D.interesses.join(' · '))}${row('Relação',D.relacaoMarca.join(' · '))}
      ${row('Concorrentes',esc(D.concorrentes))}${row('Diferencial',esc(D.diferencial))}${row('Marcas admiradas',esc(D.admiradas))}${row('Referências',esc(D.referencias))}
      ${row('Onde vende',D.canais.join(' · '))}${row('Faixa de preço',esc(D.faixaPreco))}
      ${row('Aplicações',D.aplicacoes.join(' · '))}${row('O que já existe',D.existentes.join(' · '))}${row('Manter / abandonar',esc(D.manterAbandonar))}</div>
    ${panelResultHTML()}
    ${termoResultHTML()}
    <div class="copybar">
      <button class="btn" id="sendBtn" onclick="sendBriefing()">${icon('ph-rocket')} Enviar briefing</button>
      <button class="btn ghost" onclick="copyAll()">${icon('ph-copy')} Copiar tudo</button>
      <button class="btn ghost" onclick="location.reload()">↺ Novo</button>
    </div>`;
}
function panelResultHTML(){
  const rows=PANELS_ATIVOS.map(k=>{
    const P=PANELS[k], v=D[P.campo];
    if(!v.length)return '';
    return `<div class="rrow"><div class="rk">${P.titulo}</div><div class="rv">${v.join(' · ')}</div></div>`;
  }).filter(Boolean).join('');
  if(!rows)return '';
  return `<div class="result-box"><h3>${icon('ph-palette')} Referências de estilo</h3>${rows}
    <div class="panel-note" style="margin-top:12px">Escolhas cruas, pro seu olhar de direção. As traduções ficam no seu bolso, não impostas.</div></div>`;
}
function buildText(){
  const atm=atmosferaFinal();
  const J=a=>a.join(', ')||'—', T=v=>(v||'').trim()||'—';
  return `## Propriedades
- **Marca:** ${T(D.nome)}
- **Segmento:** ${J(D.segmento)}
- **Momento:** ${J(D.momento)}
- **Arquétipo principal:** ${T(D.arqPrincipal)}
- **Arquétipo secundário:** ${T(D.arqSecundario)}
- **Essência:** ${J(D.essencia)}
- **Atmosfera:** ${J(atm)}
- **Tom:** ${J(D.tom)}
- **Personalidade:** ${J(D.personalidade)}
- **Relacionamento:** ${J(D.relacionamento)}
- **Público — faixa:** ${J(D.faixa)}
- **Público — classe:** ${J(D.classe)}
- **Moodboard:** ${D.moodPrincipal?D.moodPrincipal+(D.moodSecundario?' + '+D.moodSecundario:''):'—'}

## O momento
- **Por que agora:** ${T(D.momentoPorque)}
- **O que ainda não consegue mostrar:** ${T(D.naoMostra)}

## Semente
- **Propósito:** ${T(D.proposito)}
- **Valores (o que não negocia):** ${T(D.valores)}
- **Visão em 3 anos:** ${T(D.visao)}
- **Percepção desejada:** ${T(D.percDes)}
- **Percepção a evitar:** ${T(D.percEvit)}

## Fotossíntese
- **Estilo de vida:** ${J(D.estilo)}
- **Interesses:** ${J(D.interesses)}
- **Relação com a marca:** ${J(D.relacaoMarca)}
- **Concorrentes:** ${T(D.concorrentes)}
- **Diferencial:** ${T(D.diferencial)}
- **Marcas admiradas:** ${T(D.admiradas)}
- **Referências:** ${T(D.referencias)}
- **Onde vende:** ${J(D.canais)}
- **Faixa de preço:** ${T(D.faixaPreco)}

## Crescimento (referências de estilo, escolhas cruas)
- **Arquitetura:** ${J(D.pArquitetura)}
- **Materiais:** ${J(D.pMateriais)}
- **Tipografia:** ${J(D.pTipografia)}
- **Cão-personalidade:** ${J(D.pCaes)}${termoLinhas().length?'\n- **Termômetro de atributos:**\n'+termoLinhas().map(l=>'  - '+l).join('\n'):''}

## Balanço e Sementes
- **Aplicações:** ${J(D.aplicacoes)}
- **O que já existe:** ${J(D.existentes)}
- **Manter / abandonar:** ${T(D.manterAbandonar)}

## Base para o Golden Circle (respostas do briefing, a síntese é sua)
- **Por quê** (propósito, valores, visão): ${[D.proposito,D.valores,D.visao].map(x=>(x||'').trim()).filter(Boolean).join(' | ')||'—'}
- **Como** (diferencial, essência, arquétipo): ${[D.diferencial&&D.diferencial.trim(),D.essencia.join(', '),[D.arqPrincipal,D.arqSecundario].filter(Boolean).join(' + ')].filter(Boolean).join(' | ')||'—'}
- **O quê** (produto, segmento, canais): ${[D.produto&&D.produto.trim(),D.segmento.join(', '),D.canais.join(', ')].filter(Boolean).join(' | ')||'—'}`;
}
function copyText(txt,msg){
  const done=()=>toast(msg||'Copiado');
  const fb=()=>{const ta=document.createElement('textarea');ta.value=txt;ta.style.cssText='position:fixed;opacity:0;top:0;left:0';document.body.appendChild(ta);ta.select();try{document.execCommand('copy');done();}catch(e){toast('Selecione e copie manualmente');}ta.remove();};
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(done).catch(fb);}else fb();
}
function copyAll(){copyText(buildText(),'Copiado — cole no Notion');}
function copyProp(b){copyText(b.dataset.copy,'Copiado');}


// ---------------- ENVIO PARA O NOTION (via Make) ----------------
const CONFIG={ ENDPOINT:"https://hook.us2.make.com/wvxo590kh9r8zgz4z25t1gyvnc1mpgur" };
let _enviado=false, _enviando=false;
function sendBriefing(){
  if(_enviando) return;
  if(_enviado && !confirm_novo()) return;
  const btn=document.getElementById('sendBtn');
  const setBtn=(t,dis)=>{ if(btn){btn.innerHTML=t;btn.disabled=!!dis;} };
  _enviando=true; setBtn('Enviando…',true);
  const J=a=>(a||[]).join('|');
  const secs=buildText().split(/\n(?=## )/).slice(1); // pula "Propriedades"
  const p=new URLSearchParams();
  p.set('marca',D.nome.trim());
  p.set('responsavel',D.responsavel.trim());
  p.set('email',D.email.trim());
  p.set('whatsapp',D.celular.trim());
  const AQ=ARQ[D._arqP]||{t:'',d:''};
  p.set('arq_tag',AQ.t||''); p.set('arq_desc',AQ.d||'');
  const AS=ARQ[D._arqS]||{t:''}; p.set('arq2_tag',AS.t||'');
  const MP=MOODS.find(m=>m.id===D.moodPrincipal); p.set('mood_palavras',MP?MP.words.join(' · '):'');
  [0,1,2,3,4].forEach(k=>p.set('mc'+(k+1),MP?MP.cols[k]:''));
  p.set('termo_on',D.termo.some(v=>v)?'1':'');
  p.set('essencia_txt',D.essencia.join(' · '));
  p.set('atmosfera_txt',atmosferaFinal().join(' · '));
  p.set('tom_txt',D.tom.join(' · ')); p.set('pers_txt',D.personalidade.join(' · ')); p.set('rel_txt',D.relacionamento.join(' · '));
  p.set('publico_txt',[D.faixa.join(', '),D.classe.length?'classe '+D.classe.join(', '):''].filter(Boolean).join(' · '));
  TERMO.forEach((t,i)=>{ const v=D.termo[i]; p.set('tb'+(i+1), v?[1,2,3,4,5,6,7].map(n=>n===v?'●':'○').join(''):''); });
  p.set('segmento',J(D.segmento));
  p.set('momento',D.momento[0]||'');
  p.set('arq_principal',D.arqPrincipal||'');
  p.set('arq_secundario',D.arqSecundario||'');
  p.set('essencia',J(D.essencia));
  p.set('atmosfera',J(atmosferaFinal()));
  p.set('tom',J(D.tom));
  p.set('personalidade',J(D.personalidade));
  p.set('relacionamento',J(D.relacionamento));
  p.set('faixa',J(D.faixa));
  p.set('classe',J(D.classe));
  p.set('moodboard',D.moodPrincipal||'');
  p.set('moodboard2',D.moodSecundario||'');
  p.set('total_secoes',String(secs.length));
  secs.forEach((s,i)=>{
    const nl=s.indexOf('\n'); const titulo=s.slice(3,nl).trim(); const corpo=s.slice(nl+1).replace(/\*\*/g,'').trim().slice(0,1900);
    p.set('s'+(i+1)+'_titulo',titulo); p.set('s'+(i+1)+'_texto',corpo);
  });
  p.set('data',new Date().toISOString());
  const ctl=new AbortController(); const to=setTimeout(()=>ctl.abort(),20000);
  fetch(CONFIG.ENDPOINT,{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:p.toString(),signal:ctl.signal})
    .then(r=>{ if(!r.ok) throw new Error('status '+r.status); _enviado=true; setBtn('✓ Enviado ao Notion',true); toast('Briefing enviado'); })
    .catch(()=>{ setBtn(icon('ph-rocket')+' Tentar enviar de novo',false); toast('Não foi possível enviar. Use Copiar tudo.'); })
    .finally(()=>{ clearTimeout(to); _enviando=false; });
}
function confirm_novo(){return false;}

// teclado: Enter avança em inputs de texto simples
document.addEventListener('keydown',e=>{
  if(e.key==='Enter' && e.target.tagName==='INPUT'){ e.preventDefault(); go(1); }
});

paint(1);
