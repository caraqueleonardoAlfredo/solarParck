const contact = {
  whatsapp:
    "https://wa.me/5493865310014?text=Hola%20Leonardo%2C%20me%20gustar%C3%ADa%20conversar%20sobre%20las%20posibilidades%20de%20mejora%20para%20los%20parques%20solares.",
  email:
    "mailto:caraqueleonardo@gmail.com?subject=Conversaci%C3%B3n%20sobre%20mejoras%20para%20los%20parques%20solares",
  linkedin: "https://linkedin.com/in/caraque-leonardo",
  github: "https://github.com/caraqueleonardoAlfredo",
};

const perspectives = [
  {
    initials: "RF",
    name: "Robin Fernando",
    role: "Conocimiento operativo",
    points: [
      "Supervisor y conocedor de los procesos cotidianos",
      "Necesidades y dificultades del equipo",
      "Validación práctica en campo",
    ],
    tone: "operational",
  },
  {
    initials: "LC",
    name: "Leonardo Alfredo Caraque",
    role: "Capacidad tecnológica",
    points: [
      "Ingeniero Electrónico y AI Engineer",
      "Software, datos e inteligencia artificial",
      "IoT, sensores, automatización e integración",
    ],
    tone: "technological",
  },
];

const opportunityGroups = [
  {
    label: "Recursos que ya existen",
    title: "Una base valiosa",
    items: ["Registros, Excel y formularios", "Experiencia del personal", "Dron y cámaras", "Información de tres parques"],
  },
  {
    label: "Capacidad que puede construirse",
    title: "Información conectada",
    items: ["Acceso móvil e historial", "Seguimiento e inspecciones", "Alertas priorizadas", "Comparación y automatización"],
  },
];

const improvementAreas = [
  {
    number: "01",
    title: "Información y organización",
    points: ["Registros y formularios de los tres parques", "Acceso móvil e historial por activo", "Reportes con menos carga manual"],
  },
  {
    number: "02",
    title: "Mantenimiento e inspecciones",
    points: ["Intervenciones e inspecciones", "Dron, fotografías y anomalías", "Seguimiento de fallas repetitivas"],
  },
  {
    number: "03",
    title: "Monitoreo y seguridad",
    points: ["Eventos de cámaras y sensores", "Alertas y supervisión remota", "Validación humana siempre"],
  },
  {
    number: "04",
    title: "Datos e inteligencia",
    points: ["Comparación entre parques", "Manuales, históricos y patrones", "Reportes y predicción progresiva"],
  },
];

const process = [
  ["Observar", "Escuchar al personal."],
  ["Identificar", "Elegir una necesidad."],
  ["Desarrollar", "Crear una herramienta útil."],
  ["Validar", "Probarla en campo."],
  ["Escalar", "Extender lo que funciona."],
];

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>

      <header className="site-header">
        <a className="identity" href="#inicio" aria-label="Iniciativa de mejora para parques solares, inicio">
          <span className="monogram" aria-hidden="true">R+L</span>
          <span><strong>Operación + Tecnología</strong><small>Iniciativa de mejora para parques solares</small></span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#perspectivas">Perspectivas</a>
          <a href="#oportunidades">Oportunidades</a>
          <a href="#enfoque">Enfoque</a>
        </nav>
        <a className="header-cta" href="#contacto">Explorar posibilidades <Arrow /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-image" role="img" aria-label="Profesional observando la operación de un parque solar con una tablet" />
        <div className="hero-overlay" />
        <div className="hero-content" id="contenido">
          <p className="eyebrow light"><span /> Conocimiento operativo + capacidad tecnológica</p>
          <h1>Una oportunidad para impulsar la evolución tecnológica de los parques</h1>
          <p className="hero-lead">El conocimiento operativo de Robin Fernando y la experiencia tecnológica de Leonardo Caraque pueden combinarse para detectar necesidades y desarrollar mejoras concretas.</p>
          <p className="hero-note">Tecnología aplicada solo donde mejore la organización, el mantenimiento, la seguridad o las decisiones.</p>
          <div className="hero-actions">
            <a className="button primary" href="#oportunidades">Explorar las oportunidades <Arrow /></a>
            <a className="button ghost" href="#enfoque">Conocer el enfoque</a>
          </div>
        </div>
        <aside className="collaboration-card" aria-label="Combinación entre conocimiento operativo y capacidad tecnológica">
          <p>UNA COMBINACIÓN COMPLEMENTARIA</p>
          <div className="collab-person"><span className="avatar operational">RF</span><div><small>ROBIN FERNANDO</small><b>Conocimiento operativo</b></div></div>
          <div className="collab-connector"><i /><span>+</span><i /></div>
          <div className="collab-person"><span className="avatar technological">LC</span><div><small>LEONARDO CARAQUE</small><b>Capacidad tecnológica</b></div></div>
          <div className="collab-result"><small>POSIBLE RESULTADO</small><strong>Necesidades reales → mejoras concretas</strong></div>
        </aside>
      </section>

      <section className="section perspectives" id="perspectivas">
        <div className="section-heading compact-heading">
          <div><p className="eyebrow"><span /> La iniciativa</p><h2>Dos perspectivas que <em>se complementan</em></h2></div>
          <p>Una iniciativa nacida de mejoras observadas en la operación; no es un proyecto aprobado.</p>
        </div>
        <div className="perspective-grid">
          {perspectives.map((person, index) => (
            <article className={`perspective-card ${person.tone}`} key={person.name}>
              <div className="person-head"><span>{person.initials}</span><div><small>{person.role}</small><h3>{person.name}</h3></div></div>
              <ul>{person.points.map((point) => <li key={point}><span>✓</span>{point}</li>)}</ul>
              {index === 0 && <i className="visual-plus" aria-hidden="true">+</i>}
            </article>
          ))}
        </div>
        <div className="combined-statement"><span>RF + LC</span><p><strong>Robin aporta conocimiento operativo.</strong> Leonardo convierte necesidades en herramientas que se validan con sus usuarios.</p></div>
      </section>

      <section className="section opportunities" id="oportunidades">
        <div className="section-heading compact-heading light-heading">
          <div><p className="eyebrow light"><span /> La oportunidad existente</p><h2>Conectar mejor lo que <em>ya existe.</em></h2></div>
          <p>Conectar la información y la experiencia existentes puede abrir nuevas posibilidades.</p>
        </div>
        <div className="opportunity-flow">
          {opportunityGroups.map((group, index) => (
            <article key={group.label} className={index === 1 ? "future" : ""}>
              <small>{group.label}</small><h3>{group.title}</h3>
              <div>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
          <div className="flow-arrow" aria-hidden="true"><span>+</span><small>APROVECHAR MEJOR</small></div>
        </div>
        <div className="areas-intro"><p className="eyebrow light"><span /> Áreas donde podríamos generar mejoras</p><h2>Cuatro líneas para explorar, <em>no cuatro productos.</em></h2></div>
        <div className="area-grid">
          {improvementAreas.map((area) => (
            <article className="area-card" key={area.title}><div className="area-number">{area.number}</div><h3>{area.title}</h3><ul>{area.points.map((point) => <li key={point}><span>✓</span>{point}</li>)}</ul></article>
          ))}
        </div>
        <p className="areas-note">Son áreas de exploración, no productos cerrados.</p>
      </section>

      <section className="section approach" id="enfoque">
        <div className="approach-top">
          <div className="starting-copy">
            <p className="eyebrow"><span /> Una posibilidad inicial</p>
            <h2>Una vista común para <em>los tres parques</em></h2>
            <p>Una vista común podría reunir información y sumar análisis, inspección o monitoreo progresivamente.</p>
            <small>Una idea visual, no una plataforma desarrollada.</small>
          </div>
          <div className="dashboard" aria-label="Visualización conceptual de una vista unificada de los tres parques">
            <div className="dash-top"><div><span className="dash-mark">R+L</span><b>Vista conjunta</b></div><i>● Datos ilustrativos</i></div>
            <div className="dash-summary"><div><small>VISIÓN GENERAL</small><strong>Tres parques</strong><span>Información organizada en un mismo lugar</span></div><div className="mini-ring"><b>2</b><small>perspectivas<br />conectadas</small></div></div>
            <div className="park-list"><article><i /><div><b>Parque 1</b><small>Información disponible</small></div><span>Ver contexto</span></article><article><i className="watch" /><div><b>Parque 2</b><small>Elemento para revisión</small></div><span>Ver contexto</span></article><article><i /><div><b>Parque 3</b><small>Historial organizado</small></div><span>Ver contexto</span></article></div>
            <div className="dash-modules"><span>Mantenimientos</span><span>Inspecciones</span><span>Alertas</span><span>Documentos</span></div>
            <div className="phone-preview" aria-hidden="true"><i /><small>PARQUES</small><b>Estado general</b><div><span>1</span><em>Disponible</em></div><div><span>2</span><em>Revisar</em></div><div><span>3</span><em>Disponible</em></div></div>
            <p>Visualización conceptual — datos ilustrativos</p>
          </div>
        </div>
        <div className="process-block">
          <div><p className="eyebrow"><span /> Forma de avanzar</p><h2>Pequeño, útil y <em>progresivo.</em></h2></div>
          <ol>{process.map(([title, description], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{description}</p></li>)}</ol>
        </div>
      </section>

      <section className="section closing" id="leonardo">
        <div className="leonardo-card">
          <div className="leonardo-id"><span>LC</span><div><p>CAPACIDAD TECNOLÓGICA</p><h2>Leonardo Alfredo Caraque</h2><h3>Ingeniero Electrónico y AI Engineer</h3></div></div>
          <div className="leonardo-copy"><p>Conecto electrónica, sensores, software, datos, IA y automatización para transformar necesidades operativas en herramientas concretas.</p><p>Primero comprendo el problema; después elijo la tecnología.</p></div>
          <div className="skill-line"><span>Python y software</span><span>IA aplicada</span><span>Bases de datos y APIs</span><span>IoT y sensores</span><span>Dashboards</span><span>Integración de sistemas</span></div>
        </div>
        <div className="contact-panel" id="contacto">
          <div><p className="eyebrow"><span /> Una conversación para comenzar</p><h2>El primer paso es descubrir dónde esta combinación puede generar más valor</h2><p>Podemos comenzar por una necesidad concreta, demostrar una mejora y construir desde allí.</p></div>
          <div className="contact-actions"><a className="button dark" href={contact.whatsapp} target="_blank" rel="noreferrer">Conversemos sobre las posibilidades <Arrow /></a><a href={contact.email}>Contactar a Leonardo <Arrow /></a><a href={contact.linkedin} target="_blank" rel="noreferrer">Ver LinkedIn <Arrow /></a><a href={contact.github} target="_blank" rel="noreferrer">Ver GitHub <Arrow /></a></div>
        </div>
        <footer><div><strong>Operación + Tecnología</strong><span>Una iniciativa para explorar mejoras concretas</span></div><p>Robin Fernando · Leonardo Alfredo Caraque</p><a href="mailto:caraqueleonardo@gmail.com">caraqueleonardo@gmail.com</a></footer>
      </section>
    </main>
  );
}
