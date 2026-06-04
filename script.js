// ---- Datos de contacto (edita aquí) ----
const CONTACT = {
  email: 'ercoalhe2@gmail.com',
  phone: '+57 315 604 2115',
  linkedin: { label: 'erick-albornoz', url: 'https://www.linkedin.com/in/erick-albornoz' },
  github: { label: 'erickcolin2005', url: 'https://github.com/erickcolin2005' },
};

// ---- Nav: scroll state + menú móvil ----
const nav = document.getElementById('nav');
const navLinks = document.querySelector('.nav-links');
const navToggle = document.getElementById('navToggle');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 8));
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.addEventListener('click', e => { if (e.target.tagName === 'A') navLinks.classList.remove('open'); });

// ---- Reveal on scroll ----
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ---- Año footer ----
document.getElementById('year').textContent = new Date().getFullYear();

// ---- Certificados: call to action ----
const certToggle = document.getElementById('certToggle');
const certGroups = document.getElementById('certGroups');
certToggle.addEventListener('click', () => {
  const open = certGroups.hasAttribute('hidden');
  if (open) certGroups.removeAttribute('hidden'); else certGroups.setAttribute('hidden', '');
  certToggle.classList.toggle('open', open);
  certToggle.setAttribute('aria-expanded', String(open));
  certToggle.innerHTML = I18N[lang][open ? 'certs.ctaOpen' : 'certs.cta'];
});

// ---- i18n ----
const I18N = {
  es: {
    'nav.work': 'Inicio', 'nav.about': 'Sobre mí', 'nav.projects': 'Proyectos', 'nav.certs': 'Certificados', 'nav.contact': 'Contacto',
    'banner.tagline': 'TECNOLOGÍA APLICADA AL NEGOCIO',
    'hero.role': 'Desarrollador Full Stack · Ingeniero de Sistemas',
    'hero.lede': 'Construyo sistemas backend donde <b>la lógica de negocio define la arquitectura</b> — no al revés. Traduzco complejidad técnica en soluciones que funcionan en producción.',
    'hero.cta1': 'Hablemos →', 'hero.cta2': 'Ver proyectos',
    'about.title': 'Sobre mí',
    'about.quote': '“La mayoría de los sistemas backend no fallan por mal código — fallan porque no entienden el negocio al que sirven.”',
    'about.body': 'Soy estudiante de <b>Ingeniería de Sistemas (9.º semestre)</b> en la Universidad Cooperativa de Colombia, en Cali. Diseño backends que sobreviven condiciones reales de producción, automatizo operaciones con IA y convierto datos crudos en decisiones. Empiezo <b>mapeando el negocio antes de escribir código</b>: identifico qué se rompe, qué escala mal y dónde se pierden los datos.',
    'stack.backend': 'Backend &amp; APIs', 'stack.data': 'Datos &amp; Distribuido', 'stack.devops': 'DevOps &amp; IA', 'stack.langs': 'Lenguajes',
    'projects.title': 'Proyectos', 'projects.featuredTag': '⭐ Destacado',
    'projects.aiDesc': 'Le preguntas a tu base de datos en español — <i>“¿cuánto vendí esta semana?”</i> — y devuelve la respuesta. Convierte lenguaje natural en SQL, lo ejecuta contra una base real y entrega <i>insights</i> automáticos. La IA no reemplaza al equipo, le quita la fricción.',
    'projects.repo': 'Repositorio ↗', 'projects.post': 'Ver publicación ↗',
    'projects.tourvistaDesc': 'Aseguramiento de calidad: 5 fallas como síntoma de una sola causa. ISO/IEC 25010, AHP y quality gates con IA.', 'projects.goPres': 'Ver presentación ↗',
    'projects.optipymeDesc': 'Formulación de un SaaS de pronóstico de demanda para PYMES del Valle, con PMBOK 7, Monte Carlo y SROI.',
    'projects.cybereyeTitle': 'CyberEye — Product Manager', 'projects.cybereyeDesc': 'Como PM recuperé 12 días por paralelismo ante un atraso del 70 % y sostuve la fecha final.',
    'projects.criptoTitle': 'Cripto — Minería de datos', 'projects.criptoDesc': 'Pipeline ML sobre 23 criptomonedas con CRISP-DM: clasificación y regresión sin <i>data leakage</i>.',
    'projects.uribiaTitle': 'Uribia — NASA POWER', 'projects.uribiaDesc': 'Validación y simulación de radiación solar en Uribia (La Guajira) con datos de NASA POWER 2018–2025.',
    'projects.goDoc': 'Ver documento ↗',
    'projects.terminalTitle': 'Terminal de Transporte Municipal', 'projects.terminalDesc': 'Sistema integral en Java con <b>+12 patrones de diseño GoF</b>: venta de tiquetes, rutas dinámicas, seguimiento GPS en tiempo real con hilos concurrentes, auditoría e informes normativos, con interfaz web responsiva.',
    'projects.kafkaTitle': 'Seguimiento de Equipajes — Kafka', 'projects.kafkaDesc': 'Simulación en tiempo real con arquitectura <i>producer–consumer</i> en Apache Kafka y Python: tópicos distribuidos y mensajes JSON asíncronos. Aplicable a logística, aeropuertos y retail.',
    'projects.relacionalesTitle': 'Sistemas Relacionales · PostgreSQL + Docker', 'projects.relacionalesDesc': '4 sistemas completos (banca, seguros, vuelos y proyectos) con Enterprise Architect, PostgreSQL, Python y Docker: <b>+12 diagramas UML</b>, +40 clases POO y <b>−50 % de tiempo de configuración</b> gracias a Docker.',
    'projects.eduTitle': 'Plataforma de Educación en Línea', 'projects.eduDesc': 'Base de datos relacional para educación online: usuarios, cursos, progreso, evaluaciones, certificados y auditoría. MER en DBeaver e implementación en phpMyAdmin con claves foráneas, triggers y reportes.',
    'certs.title': 'Certificados',
    'certs.intro': '25 certificaciones en desarrollo, nube, datos, IA y gobernanza digital — de Código Facilito, Santander Open Academy (MIT), AWS, MinTIC, Capacítate, MathWorks, COPNIA y más.',
    'certs.cta': 'Ver mis 25 certificados ↓', 'certs.ctaOpen': 'Ocultar certificados ↑', 'certs.see': 'Ver ↗',
    'certs.cfSub': '9 cursos · Desarrollo', 'certs.cfArq': 'Fundamentos de Arquitectura de Software', 'certs.cfDatos': 'Bases y conceptos de la Ciencia de Datos', 'certs.cfMet': 'Metodologías para Solución de Problemas', 'certs.cfTypes': 'Anotaciones y Type Hints con Python',
    'certs.saSub': '3 cursos · Contenido MIT',
    'certs.awsSub': '3 cursos · Nube', 'certs.awsNube': 'Fundamentos de Nube <span class="cert-date">sep 2025</span>',
    'certs.capDb': 'Administrador de Bases de Datos <span class="cert-date">may 2025</span>', 'certs.capIa': 'Fundamentos de Inteligencia Artificial <span class="cert-date">oct 2025</span>',
    'certs.minticSub': '4 cursos · Gobierno Digital', 'certs.minticIa': 'Inteligencia Artificial Aplicada <span class="cert-date">dic 2024</span>', 'certs.minticInfra': 'Plan Nacional de Infraestructura de Datos <span class="cert-date">dic 2024</span>', 'certs.minticRev': 'Cuarta Revolución Industrial <span class="cert-date">dic 2024</span>', 'certs.minticCiudades': 'Ciudades Inteligentes <span class="cert-date">dic 2024</span>',
    'certs.otherTitle': 'Otras credenciales', 'certs.otherSub': '4 · Ingeniería, datos e inglés', 'certs.etica': 'Ética Profesional <span class="cert-date">COPNIA · oct 2023</span>', 'certs.ingles': 'Inglés B2 (Upper-intermediate) <span class="cert-date">SmallTalk · dic 2024</span>', 'certs.apps': 'Desarrollo de Apps Móviles <span class="cert-date">dic 2025</span>',
    'contact.title': 'Contacto', 'contact.sub': 'Pregúntale al asistente cómo ponerte en contacto conmigo.', 'contact.botSub': 'Pregúntame lo que sea',
    'footer.tag': 'Traduzco tecnología compleja en soluciones claras, útiles y vendibles.',
  },
  en: {
    'nav.work': 'Home', 'nav.about': 'About', 'nav.projects': 'Projects', 'nav.certs': 'Certificates', 'nav.contact': 'Contact',
    'banner.tagline': 'TECHNOLOGY APPLIED TO BUSINESS',
    'hero.role': 'Full Stack Developer · Systems Engineer',
    'hero.lede': 'I build backend systems where <b>business logic drives the architecture</b> — not the other way around. I turn technical complexity into solutions that run in production.',
    'hero.cta1': "Let's talk →", 'hero.cta2': 'See projects',
    'about.title': 'About',
    'about.quote': '“Most backend systems don’t fail because of bad code — they fail because they don’t understand the business they serve.”',
    'about.body': 'I’m a <b>Systems Engineering student (9th semester)</b> at Universidad Cooperativa de Colombia, in Cali. I design backends that survive real production conditions, automate operations with AI, and turn raw data into decisions. I start by <b>mapping the business before writing code</b>: I find what breaks, what scales poorly, and where data gets lost.',
    'stack.backend': 'Backend &amp; APIs', 'stack.data': 'Data &amp; Distributed', 'stack.devops': 'DevOps &amp; AI', 'stack.langs': 'Languages',
    'projects.title': 'Projects', 'projects.featuredTag': '⭐ Featured',
    'projects.aiDesc': 'You ask your database in plain language — <i>“how much did I sell this week?”</i> — and it answers. It turns natural language into SQL, runs it against a real database, and delivers automatic <i>insights</i>. AI doesn’t replace the team, it removes the friction.',
    'projects.repo': 'Repository ↗', 'projects.post': 'View post ↗',
    'projects.tourvistaDesc': 'Quality assurance: 5 failures as symptoms of a single root cause. ISO/IEC 25010, AHP and AI-assisted quality gates.', 'projects.goPres': 'View presentation ↗',
    'projects.optipymeDesc': 'Formulation of a demand-forecasting SaaS for SMEs in Valle del Cauca, using PMBOK 7, Monte Carlo and SROI.',
    'projects.cybereyeTitle': 'CyberEye — Product Manager', 'projects.cybereyeDesc': 'As PM I recovered 12 days through parallelism after a 70% delay and held the final deadline.',
    'projects.criptoTitle': 'Crypto — Data Mining', 'projects.criptoDesc': 'ML pipeline over 23 cryptocurrencies with CRISP-DM: classification and regression with no <i>data leakage</i>.',
    'projects.uribiaTitle': 'Uribia — NASA POWER', 'projects.uribiaDesc': 'Validation and simulation of solar radiation in Uribia (La Guajira) using NASA POWER data 2018–2025.',
    'projects.goDoc': 'View document ↗',
    'projects.terminalTitle': 'Municipal Transport Terminal', 'projects.terminalDesc': 'End-to-end system in Java with <b>12+ GoF design patterns</b>: ticket sales, dynamic routing, real-time GPS tracking with concurrent threads, auditing and regulatory reports, plus a responsive web interface.',
    'projects.kafkaTitle': 'Baggage Tracking — Kafka', 'projects.kafkaDesc': 'Real-time simulation with a <i>producer–consumer</i> architecture on Apache Kafka and Python: distributed topics and asynchronous JSON messages. Applicable to logistics, airports and retail.',
    'projects.relacionalesTitle': 'Relational Systems · PostgreSQL + Docker', 'projects.relacionalesDesc': '4 complete systems (banking, insurance, flights and projects) with Enterprise Architect, PostgreSQL, Python and Docker: <b>12+ UML diagrams</b>, 40+ OOP classes and <b>−50% setup time</b> thanks to Docker.',
    'projects.eduTitle': 'Online Learning Platform', 'projects.eduDesc': 'Relational database for online education: users, courses, progress, assessments, certificates and auditing. ER model in DBeaver and implementation in phpMyAdmin with foreign keys, triggers and reports.',
    'certs.title': 'Certificates',
    'certs.intro': '25 certifications in development, cloud, data, AI and digital governance — from Código Facilito, Santander Open Academy (MIT), AWS, MinTIC, Capacítate, MathWorks, COPNIA and more.',
    'certs.cta': 'View my 25 certificates ↓', 'certs.ctaOpen': 'Hide certificates ↑', 'certs.see': 'View ↗',
    'certs.cfSub': '9 courses · Development', 'certs.cfArq': 'Software Architecture Fundamentals', 'certs.cfDatos': 'Data Science Basics &amp; Concepts', 'certs.cfMet': 'Problem-Solving Methodologies', 'certs.cfTypes': 'Annotations &amp; Type Hints with Python',
    'certs.saSub': '3 courses · MIT content',
    'certs.awsSub': '3 courses · Cloud', 'certs.awsNube': 'Cloud Fundamentals <span class="cert-date">Sep 2025</span>',
    'certs.capDb': 'Database Administrator <span class="cert-date">May 2025</span>', 'certs.capIa': 'Artificial Intelligence Fundamentals <span class="cert-date">Oct 2025</span>',
    'certs.minticSub': '4 courses · Digital Government', 'certs.minticIa': 'Applied Artificial Intelligence <span class="cert-date">Dec 2024</span>', 'certs.minticInfra': 'National Data Infrastructure Plan <span class="cert-date">Dec 2024</span>', 'certs.minticRev': 'Fourth Industrial Revolution <span class="cert-date">Dec 2024</span>', 'certs.minticCiudades': 'Smart Cities <span class="cert-date">Dec 2024</span>',
    'certs.otherTitle': 'Other credentials', 'certs.otherSub': '4 · Engineering, data &amp; English', 'certs.etica': 'Professional Ethics <span class="cert-date">COPNIA · Oct 2023</span>', 'certs.ingles': 'English B2 (Upper-intermediate) <span class="cert-date">SmallTalk · Dec 2024</span>', 'certs.apps': 'Mobile App Development <span class="cert-date">Dec 2025</span>',
    'contact.title': 'Contact', 'contact.sub': 'Ask the assistant how to get in touch with me.', 'contact.botSub': 'Ask me anything',
    'footer.tag': 'I translate complex technology into clear, useful and sellable solutions.',
  },
};

let lang = localStorage.getItem('eax-lang') || 'es';

function applyLang(l) {
  lang = l;
  localStorage.setItem('eax-lang', l);
  document.documentElement.lang = l;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = I18N[l][el.getAttribute('data-i18n')];
    if (v != null) el.innerHTML = v;
  });
  document.getElementById('langToggle').textContent = l.toUpperCase();
  document.documentElement.style.setProperty('--see-label', JSON.stringify(I18N[l]['certs.see']));
  // refrescar CTA de certificados según estado actual
  const open = !certGroups.hasAttribute('hidden');
  certToggle.innerHTML = I18N[l][open ? 'certs.ctaOpen' : 'certs.cta'];
  initBot();
}

document.getElementById('langToggle').addEventListener('click', () => applyLang(lang === 'es' ? 'en' : 'es'));

// ---- Tema claro / oscuro ----
let theme = localStorage.getItem('eax-theme') || 'dark';
const themeToggle = document.getElementById('themeToggle');
function applyTheme(t) {
  theme = t;
  localStorage.setItem('eax-theme', t);
  document.body.classList.toggle('light', t === 'light');
  themeToggle.textContent = t === 'light' ? '☀️' : '🌙';
}
themeToggle.addEventListener('click', () => applyTheme(theme === 'dark' ? 'light' : 'dark'));

// ---- Bot de contacto ----
const body = document.getElementById('botBody');
const optionsEl = document.getElementById('botOptions');

const esc = s => s.replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));

function addMsg(html, who = 'bot') {
  const div = document.createElement('div');
  div.className = `msg ${who}`;
  div.innerHTML = html;
  body.appendChild(div);
  body.scrollTop = body.scrollHeight;
  return div;
}

function setOptions(opts) {
  optionsEl.innerHTML = '';
  opts.forEach(o => {
    const b = document.createElement('button');
    b.className = 'opt' + (o.ghost ? ' ghost' : '');
    b.textContent = o.label;
    b.addEventListener('click', () => o.action());
    optionsEl.appendChild(b);
  });
}

function typing(then) {
  const t = addMsg('<span class="typing"><span></span><span></span><span></span></span>');
  optionsEl.innerHTML = '';
  setTimeout(() => { t.remove(); then(); }, 650);
}

const BOT = {
  es: {
    greet1: '¡Hola! Soy el asistente virtual de Erick (EAx). 🤖',
    greet2: 'Puedo ayudarte a contactarlo o darte sus enlaces profesionales. ¿Qué buscas?',
    more: '¿Algo más en lo que pueda ayudarte?',
    hireLabel: 'Quiero contratarte',
    hireMsg: '¡Genial! Erick siempre está abierto a nuevas oportunidades. Puedes contactarlo directamente:',
    fEmail: 'Email', fPhone: 'Teléfono', fWa: 'WhatsApp', waCta: 'Escribir por WhatsApp',
    linksLabel: 'Enlaces profesionales',
    linksMsg: 'Aquí están sus perfiles y repositorios:',
    helloLabel: 'Solo vine a saludar 👋',
    helloMsg: '¡Hola! 👋 Erick agradece que pases por aquí. Si quieres conversar, escríbele un correo cuando gustes:',
  },
  en: {
    greet1: "Hi! I'm Erick's virtual assistant (EAx). 🤖",
    greet2: 'I can help you reach him or share his professional links. What are you looking for?',
    more: 'Anything else I can help with?',
    hireLabel: 'I want to hire you',
    hireMsg: 'Great! Erick is always open to new opportunities. You can contact him directly:',
    fEmail: 'Email', fPhone: 'Phone', fWa: 'WhatsApp', waCta: 'Message on WhatsApp',
    linksLabel: 'Professional links',
    linksMsg: 'Here are his profiles and repositories:',
    helloLabel: 'Just saying hello 👋',
    helloMsg: 'Hi! 👋 Erick appreciates you stopping by. If you want to chat, drop him an email anytime:',
  },
};

function buildActions() {
  const t = BOT[lang];
  return {
    hire: {
      label: t.hireLabel,
      run() {
        addMsg(t.hireMsg +
          `<div class="field"><b>${t.fEmail}</b><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></div>` +
          `<div class="field"><b>${t.fPhone}</b><a href="tel:${CONTACT.phone.replace(/\s/g, '')}">${esc(CONTACT.phone)}</a></div>` +
          `<div class="field"><b>${t.fWa}</b><a href="https://wa.me/${CONTACT.phone.replace(/[^0-9]/g, '')}" target="_blank" rel="noopener">${t.waCta}</a></div>`);
      },
    },
    links: {
      label: t.linksLabel,
      run() {
        addMsg(t.linksMsg +
          `<div class="field"><b>LinkedIn</b><a href="${CONTACT.linkedin.url}" target="_blank" rel="noopener">${CONTACT.linkedin.label}</a></div>` +
          `<div class="field"><b>GitHub</b><a href="${CONTACT.github.url}" target="_blank" rel="noopener">${CONTACT.github.label}</a></div>`);
      },
    },
    hello: {
      label: t.helloLabel,
      ghost: true,
      run() {
        addMsg(t.helloMsg +
          `<div class="field"><b>${t.fEmail}</b><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></div>`);
      },
    },
  };
}

let ACTIONS = {};
let used = new Set();
let askedMore = false;

function showOptions(keys) {
  setOptions(keys.map(k => ({ label: ACTIONS[k].label, ghost: ACTIONS[k].ghost, action: () => pick(k) })));
}

function pick(key) {
  addMsg(ACTIONS[key].label, 'user');
  used.add(key);
  const rest = Object.keys(ACTIONS).filter(k => !used.has(k));
  typing(() => {
    ACTIONS[key].run();
    if (rest.length) {
      if (!askedMore) { addMsg(BOT[lang].more); askedMore = true; }
      showOptions(rest);
    } else {
      optionsEl.innerHTML = '';
    }
  });
}

function initBot() {
  ACTIONS = buildActions();
  used = new Set();
  askedMore = false;
  body.innerHTML = '';
  optionsEl.innerHTML = '';
  addMsg(BOT[lang].greet1);
  addMsg(BOT[lang].greet2);
  showOptions(Object.keys(ACTIONS));
}

// ---- Arranque ----
applyTheme(theme);
applyLang(lang);
