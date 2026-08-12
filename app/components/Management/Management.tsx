import { managementBrands } from "@/app/data/brand-logos";
import "./Management.css";

const managementSkills = [
  "Coordinación de equipos multidisciplinarios",
  "Estrategia y seguimiento de campañas",
  "Plan de rodaje, producción y shooting",
  "Coordinación de diseño y contenidos",
  "Gestión de proveedores y presupuestos",
  "Presentación de resultados e indicadores",
];

export function Management() {
  return (
    <section className="management" id="gestion">
      <div className="management-heading">
        <p className="kicker kicker-light">01 / Manejo y gestión integral</p>
        <h2>
          Una visión completa.
          <br />
          <em>Del brief a la entrega.</em>
        </h2>
      </div>
      <div className="management-layout">
        <div>
          <div
            className="management-brand-wall"
            aria-label="Marcas de gestión integral"
          >
            {managementBrands.map((brand) => (
              <figure
                className={
                  brand.dark ? "management-logo logo-card-dark" : "management-logo"
                }
                key={brand.name}
              >
                <img src={brand.src} alt={`Logo de ${brand.name}`} />
              </figure>
            ))}
          </div>
          <div className="skill-grid">
            {managementSkills.map((skill, index) => (
              <p key={skill}>
                <b>0{index + 1}</b>
                {skill}
              </p>
            ))}
          </div>
        </div>
        <div
          className="bodytech-video-slot"
          aria-label="Espacio para video de Bodytech"
        >
          <span className="play-mark">▶</span>
          <p>BODYTECH · GYM PARTNER</p>
          <small>Video de campaña</small>
        </div>
      </div>
    </section>
  );
}
