import "./SiteHeader.css";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="monogram" href="#inicio" aria-label="Kimberly Pulido, inicio">
        KP
      </a>
      <nav aria-label="Navegación principal">
        <a href="#gestion">Gestión integral</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#perfil">Perfil</a>
      </nav>
      <a className="availability" href="#contacto">
        <span /> Disponible para oportunidades
      </a>
    </header>
  );
}
