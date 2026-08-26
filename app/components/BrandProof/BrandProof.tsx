import { brandLogos } from "@/app/data/brand-logos";
import "./BrandProof.css";

export function BrandProof() {
  return (
    <section className="brand-proof" aria-labelledby="brand-proof-title">
      <div className="brand-proof-heading">
        <p className="kicker">Brand proof</p>
        <h2 id="brand-proof-title">
          Marcas con las que
          <br />
          <em>he hecho que pase.</em>
        </h2>
      </div>
      <div className="brand-logo-wall">
        {brandLogos.map((brand) => (
          <figure
            className={brand.dark ? "logo-card logo-card-dark" : "logo-card"}
            key={brand.name}
          >
            {brand.instagram ? (
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver Instagram de ${brand.name}`}
              >
                <img src={brand.src} alt={`Logo de ${brand.name}`} />
                <span className="logo-hover" aria-hidden="true">
                  Ver Instagram
                </span>
              </a>
            ) : (
              <img src={brand.src} alt={`Logo de ${brand.name}`} />
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
