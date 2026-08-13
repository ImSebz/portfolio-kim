"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import "./EventsSection.css";

type GalleryKey = "ahk" | "chalela" | "gran-formato";

const galleries: Record<GalleryKey, { title: string; images: string[] }> = {
  ahk: {
    title: "AHK Colombia",
    images: [
      "/eventos/ahk/ahk1.jpg",
      "/eventos/ahk/ahk2.jpg",
      "/eventos/ahk/ahk3.jpg",
    ],
  },
  chalela: {
    title: "Chalela Abogados",
    images: [
      "/eventos/chalela-abogados/chalela1.jpg",
      "/eventos/chalela-abogados/chalela2.jpg",
      "/eventos/chalela-abogados/chalela3.jpg",
      "/eventos/chalela-abogados/chalela4.jpg",
      "/eventos/chalela-abogados/chalela5.jpg",
    ],
  },
  "gran-formato": {
    title: "Eventos de gran formato",
    images: [
      "/eventos/gran-formato/evento1.jpg",
      "/eventos/gran-formato/evento2.jpg",
      "/eventos/gran-formato/evento3.jpg",
      "/eventos/gran-formato/evento4.jpg",
    ],
  },
};

export function EventsSection() {
  const [activeGallery, setActiveGallery] = useState<GalleryKey | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const total = activeGallery ? galleries[activeGallery].images.length : 0;

  const openLightbox = (key: GalleryKey, index: number) => {
    setActiveGallery(key);
    setActiveIndex(index);
  };

  const closeLightbox = useCallback(() => setActiveGallery(null), []);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % total);
  }, [total]);

  useEffect(() => {
    if (!activeGallery) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      else if (event.key === "ArrowLeft") goPrev();
      else if (event.key === "ArrowRight") goNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeGallery, closeLightbox, goPrev, goNext]);

  const renderCollage = (key: GalleryKey) => (
    <div className={`event-collage collage-${key}`}>
      {galleries[key].images.map((src, i) => (
        <button
          type="button"
          key={src}
          className={`event-collage-item item-${i + 1}`}
          onClick={() => openLightbox(key, i)}
          aria-label={`Ver imagen ${i + 1} de ${galleries[key].title}`}
        >
          <img
            src={src}
            alt={`${galleries[key].title} · imagen ${i + 1}`}
            loading="lazy"
          />
        </button>
      ))}
    </div>
  );

  const activeSrc = activeGallery
    ? galleries[activeGallery].images[activeIndex]
    : null;

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
          {renderCollage("ahk")}
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
          {renderCollage("chalela")}
        </article>
        <article className="large-events">
          <span>LIVE</span>
          <h3>Eventos de gran formato</h3>
          <p>
            Coordinación de montajes, desmontajes y operación para Estéreo
            Picnic, Rock al Parque, Cordillera, conciertos, ferias y
            activaciones.
          </p>
          {renderCollage("gran-formato")}
        </article>
      </div>

      {activeGallery && activeSrc && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Galería de ${galleries[activeGallery].title}`}
        >
          <button
            type="button"
            ref={closeButtonRef}
            className="lightbox-close"
            onClick={(event) => {
              event.stopPropagation();
              closeLightbox();
            }}
            aria-label="Cerrar galería"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {total > 1 && (
            <button
              type="button"
              className="lightbox-arrow lightbox-prev"
              onClick={(event) => {
                event.stopPropagation();
                goPrev();
              }}
              aria-label="Imagen anterior"
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
          )}

          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img
              key={activeSrc}
              src={activeSrc}
              alt={`${galleries[activeGallery].title} · imagen ${activeIndex + 1}`}
              className="lightbox-image"
            />
            <p className="lightbox-caption">
              {galleries[activeGallery].title} · {activeIndex + 1} /{" "}
              {total}
            </p>
          </div>

          {total > 1 && (
            <button
              type="button"
              className="lightbox-arrow lightbox-next"
              onClick={(event) => {
                event.stopPropagation();
                goNext();
              }}
              aria-label="Imagen siguiente"
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
          )}
        </div>
      )}
    </section>
  );
}
