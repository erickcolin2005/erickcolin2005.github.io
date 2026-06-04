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

const MENU = [
  { label: 'Quiero contratarte', action: hire },
  { label: 'Enlaces profesionales', action: links },
  { label: 'Solo vine a saludar 👋', action: hello, ghost: true },
];

function reset() {
  setTimeout(() => setOptions([
    { label: 'Quiero contratarte', action: hire },
    { label: 'Enlaces profesionales', action: links },
    { label: 'Otra cosa', action: () => { addMsg('¡Claro! ¿Qué necesitas?', 'bot'); setOptions(MENU); }, ghost: true },
  ]), 50);
}

function hire() {
  addMsg('Quiero contratarte', 'user');
  typing(() => {
    addMsg(
      '¡Genial! Erick siempre está abierto a nuevas oportunidades. Puedes contactarlo directamente:' +
      `<div class="field"><b>Email</b><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></div>` +
      `<div class="field"><b>Teléfono</b><a href="tel:${CONTACT.phone.replace(/\s/g, '')}">${esc(CONTACT.phone)}</a></div>` +
      `<div class="field"><b>WhatsApp</b><a href="https://wa.me/${CONTACT.phone.replace(/[^0-9]/g, '')}" target="_blank" rel="noopener">Escribir por WhatsApp</a></div>`
    );
    reset();
  });
}

function links() {
  addMsg('Enlaces profesionales', 'user');
  typing(() => {
    addMsg(
      'Aquí están sus perfiles y repositorios:' +
      `<div class="field"><b>LinkedIn</b><a href="${CONTACT.linkedin.url}" target="_blank" rel="noopener">${CONTACT.linkedin.label}</a></div>` +
      `<div class="field"><b>GitHub</b><a href="${CONTACT.github.url}" target="_blank" rel="noopener">${CONTACT.github.label}</a></div>`
    );
    reset();
  });
}

function hello() {
  addMsg('Solo vine a saludar 👋', 'user');
  typing(() => {
    addMsg(
      '¡Hola! 👋 Erick agradece que pases por aquí. Si quieres conversar, escríbele un correo cuando gustes:' +
      `<div class="field"><b>Email</b><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></div>`
    );
    reset();
  });
}

// Arranque
addMsg('¡Hola! Soy el asistente virtual de Erick (EAx). 🤖');
addMsg('Puedo ayudarte a contactarlo o darte sus enlaces profesionales. ¿Qué buscas?');
setOptions(MENU);
