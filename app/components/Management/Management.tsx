"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
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

const bodytechVideos = [
  { src: "/videos/gym_bodytech_parte1.mp4", label: "Parte 1" },
  { src: "/videos/gym_bodytech_parte2.mp4", label: "Parte 2" },
];

export function Management() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const total = bodytechVideos.length;
  const current = bodytechVideos[index];

  const goTo = (i: number) => setIndex(((i % total) + total) % total);
  const goPrev = () => goTo(index - 1);
  const goNext = () => goTo(index + 1);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isPlaying) return;
    video.play().catch(() => setIsPlaying(false));
  }, [index, isPlaying]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleEnded = () => {
    goNext();
    setIsPlaying(true);
  };

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
                className={[
                  "management-logo",
                  brand.dark && "logo-card-dark",
                  brand.large && "logo-card-large",
                ]
                  .filter(Boolean)
                  .join(" ")}
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
          className="bodytech-video-wrap"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <div
            className="bodytech-video-slot"
            aria-label="Videos de campaña Bodytech"
          >
            <video
              ref={videoRef}
              key={current.src}
              className="bodytech-video"
              src={current.src}
              playsInline
              onClick={togglePlay}
              onEnded={handleEnded}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
            {!isPlaying && (
              <button
                type="button"
                className="video-play-overlay"
                onClick={togglePlay}
                aria-label="Reproducir video"
              >
                <span className="play-mark">▶</span>
                <p>BODYTECH · GYM PARTNER</p>
                <small>{current.label} · Video de campaña</small>
              </button>
            )}
            <p className="sr-only" aria-live="polite">
              Video {index + 1} de {total}: {current.label}
            </p>
          </div>
          <div className="video-nav">
            <button
              type="button"
              className="video-arrow"
              onClick={goPrev}
              aria-label="Video anterior"
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
            <div className="video-dots">
              {bodytechVideos.map((video, i) => (
                <button
                  key={video.src}
                  type="button"
                  className={`video-dot${i === index ? " is-active" : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Ir al video ${video.label}`}
                  aria-current={i === index}
                />
              ))}
            </div>
            <button
              type="button"
              className="video-arrow"
              onClick={goNext}
              aria-label="Video siguiente"
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
      </div>
    </section>
  );
}
