import "./Hero.css";

export function Hero() {
  return (
    <section className="visual-hero" id="inicio">
      <div className="hero-copy">
        <p className="overline">Marketing · Brand Experiences · Content</p>
        <h1>
          Kimberly
          <br />
          <em>Pulido</em>
        </h1>
        <p className="hero-summary">
          Conecto estrategia, creatividad, equipos y ejecución para convertir
          ideas en proyectos que sí pasan.
        </p>
        <div className="hero-meta">
          <div>
            <strong>7+</strong>
            <span>años de experiencia</span>
          </div>
          <div>
            <strong>15+</strong>
            <span>marcas</span>
          </div>
          <a href="#proyectos">Ver proyectos ↓</a>
        </div>
      </div>
      <div className="hero-statement" aria-hidden="true">
        <span>STRATEGY</span>
        <span>CREATIVE</span>
        <span>EXECUTION</span>
        <i>KP</i>
      </div>
    </section>
  );
}
