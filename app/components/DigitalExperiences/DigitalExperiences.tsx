"use client";

import { useState, type CSSProperties, type KeyboardEvent } from "react";
import "./DigitalExperiences.css";

const promos = [
  {
    brand: "Budweiser",
    kicker: "BudX World Tour",
    stat: "47.537",
    statLabel: "Registros totales",
    description:
      "Promo phigital que combinó interacción online y offline: los participantes acumulaban puntos Bud para redimir en un marketplace exclusivo con experiencias en Lollapalooza, Tomorrowland y los VMA.",
    tags: "Duración 1 año · 4.561 participantes · 1.323 redenciones",
    image: "/brand-logos/big-promos/promo_budx_tour.jpg",
    alt: "Promo BudX World Tour de Budweiser",
    accent: "#e6394f",
  },
  {
    brand: "Stella Artois",
    kicker: "The Perfect Serve",
    stat: "7.118",
    statLabel: "Registros totales",
    description:
      "Los participantes registraban sus facturas de compra y servían la cerveza en la copa icónica para sumar puntos y redimir premios exclusivos.",
    tags: "Duración 2 meses · 579 participantes · 495 redenciones",
    image: "/brand-logos/big-promos/promo_stella.jpg",
    alt: "Promo The Perfect Serve de Stella Artois",
    accent: "#cbb26a",
  },
  {
    brand: "Corona",
    kicker: "Paraísos Corona",
    stat: "3.635",
    statLabel: "Registros totales",
    description:
      "Big Promo en la que los participantes sumaban puntos al registrar sus facturas de compra en puntos de venta autorizados, desbloqueando experiencias como Sunset Sessions.",
    tags: "Duración 2 meses · 1.876 participantes · 723 redenciones",
    image: "/brand-logos/big-promos/promo_corona.jpg",
    alt: "Promo Paraísos Corona",
    accent: "#f5c518",
  },
  {
    brand: "Newell Brands",
    kicker: "Expresa tus Colores",
    stat: "5.731",
    statLabel: "Registros en 2 meses",
    description:
      "Promo Regreso al Cole con landing de participación y registro de compras para redención de premios, potenciando el sell out de Sharpie, Paper Mate y Prismacolor.",
    tags: "Chatbot con 434 conversaciones · 359 redenciones",
    image: "/brand-logos/big-promos/promo_regreso_al_cole.jpg",
    alt: "Promo Regreso al Cole de Newell Brands",
    accent: "#ff7a3d",
  },
];

export function DigitalExperiences() {
  const [index, setIndex] = useState(0);
  const total = promos.length;
  const current = promos[index];

  const goTo = (i: number) => setIndex(((i % total) + total) % total);
  const goPrev = () => goTo(index - 1);
  const goNext = () => goTo(index + 1);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  };

  return (
    <section className="digital-experiences" id="proyectos">
      <div className="section-heading dark-heading">
        <p className="kicker">02 / Experiencias digitales</p>
        <h2>
          Ideas que conectaron.
          <br />
          <em>Experiencias que convirtieron.</em>
        </h2>
      </div>

      <div
        className="promo-carousel"
        style={{ "--accent": current.accent } as CSSProperties}
        role="region"
        aria-roledescription="carousel"
        aria-label="Casos de promociones digitales"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div className="promo-viewport">
          <div
            className="promo-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {promos.map((promo, i) => (
              <article
                className="promo-slide"
                key={promo.brand}
                aria-hidden={i !== index}
                style={{ "--accent": promo.accent } as CSSProperties}
              >
                <div className="promo-copy">
                  <p className="promo-kicker">{promo.kicker}</p>
                  <span className="promo-stat">{promo.stat}</span>
                  <p className="promo-stat-label">{promo.statLabel}</p>
                  <h3>{promo.brand}</h3>
                  <p className="promo-description">{promo.description}</p>
                  <p className="promo-tags">{promo.tags}</p>
                </div>
                <div className="promo-media">
                  <img src={promo.image} alt={promo.alt} loading="lazy" />
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Mostrando promoción {index + 1} de {total}: {current.brand}
        </p>

        <div className="promo-controls">
          <button
            type="button"
            className="promo-arrow"
            onClick={goPrev}
            aria-label="Promoción anterior"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="promo-progress">
            <div className="promo-dots">
              {promos.map((promo, i) => (
                <button
                  key={promo.brand}
                  type="button"
                  className={`promo-dot${i === index ? " is-active" : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Ir a la promoción de ${promo.brand}`}
                  aria-current={i === index}
                />
              ))}
            </div>
            <span className="promo-counter">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>

          <button
            type="button"
            className="promo-arrow"
            onClick={goNext}
            aria-label="Promoción siguiente"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M9 18l6-6-6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <p className="digital-note">
        Estrategia digital · CRM · Landings · Promociones · Registro ·
        Redenciones · Seguimiento de resultados
      </p>
    </section>
  );
}
