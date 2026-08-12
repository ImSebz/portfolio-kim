import "./SocialWork.css";

export function SocialWork() {
  return (
    <section className="social-work">
      <div className="section-heading">
        <p className="kicker">04 / Social &amp; launch strategy</p>
        <h2>
          Marcas que construí
          <br />
          <em>desde la conversación.</em>
        </h2>
      </div>
      <div className="social-grid">
        <article>
          <div className="social-logo-visual">
            <img
              src="/brand-logos/ana-taborda-home.png"
              alt="Logo de Ana Taborda Home"
            />
          </div>
          <div className="social-copy">
            <p className="case-index">Ana Taborda Home</p>
            <h3>Estrategia y redes para vestir la mesa.</h3>
            <p>
              Planeación estratégica, comunicación y gestión de redes para una
              marca colombiana de manteles con diseños únicos.
            </p>
            <a
              href="https://www.instagram.com/anatabordahome?igsh=MzFuY2xueWlyZzU1"
              target="_blank"
              rel="noreferrer"
            >
              Ver Instagram ↗
            </a>
          </div>
        </article>
        <article>
          <div className="social-logo-visual">
            <img src="/brand-logos/aurum.png" alt="Logo de Aurum Eventos" />
          </div>
          <div className="social-copy">
            <p className="case-index">Aurum Eventos</p>
            <h3>Expectativa, contenido y registro.</h3>
            <p>
              Estrategia para redes, campaña de expectativa del evento de
              Yeison Jiménez y landing page de registro.
            </p>
            <div className="project-links">
              <a
                href="https://www.instagram.com/aurum_eventos_?igsh=eGdrYnVsNnhtZGc1"
                target="_blank"
                rel="noreferrer"
              >
                Instagram ↗
              </a>
              <a
                href="https://www.tiktok.com/@aurum.eventos?_r=1&amp;_t=ZS-98XFzMdpfIl"
                target="_blank"
                rel="noreferrer"
              >
                TikTok ↗
              </a>
              <a
                href="https://www.aurumeventos.com/yeisonjimenez"
                target="_blank"
                rel="noreferrer"
              >
                Landing ↗
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
