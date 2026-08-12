import "./EventsSection.css";

export function EventsSection() {
  return (
    <section className="events-section">
      <div className="section-heading">
        <p className="kicker">03 / BTL &amp; eventos</p>
        <h2>
          Experiencias que viven
          <br />
          <em>fuera de la pantalla.</em>
        </h2>
      </div>
      <div className="events-grid">
        <article>
          <div className="event-brand-logo">
            <img src="/brand-logos/ahk.png" alt="Logo de AHK Colombia" />
          </div>
          <h3>AHK Colombia</h3>
          <p>Identidad 90 años · Lanzamiento · Evento corporativo</p>
        </article>
        <article>
          <div className="event-brand-logo">
            <img
              src="/brand-logos/chalela-abogados.png"
              alt="Logo de Chalela Abogados"
            />
          </div>
          <h3>Chalela Abogados</h3>
          <p>Rebranding · Plan integral · Lanzamiento</p>
        </article>
        <article className="large-events">
          <span>LIVE</span>
          <h3>Eventos de gran formato</h3>
          <p>
            Coordinación de montajes, desmontajes y operación para Estéreo
            Picnic, Rock al Parque, Cordillera, conciertos, ferias y
            activaciones.
          </p>
        </article>
      </div>
    </section>
  );
}
