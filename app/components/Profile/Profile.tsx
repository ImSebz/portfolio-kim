import "./Profile.css";

export function Profile() {
  return (
    <section className="profile" id="perfil">
      <div className="profile-copy">
        <p className="kicker">Behind the work</p>
        <h2>
          No solo gestiono proyectos.
          <br />
          <em>Los hago avanzar.</em>
        </h2>
        <p>
          Trabajo entre la estrategia y la ejecución: entiendo el objetivo,
          organizo a las personas correctas y cuido cada detalle hasta la
          entrega.
        </p>
        <div className="profile-facts">
          <div>
            <strong>7+</strong>
            <span>años de experiencia</span>
          </div>
          <div>
            <strong>15+</strong>
            <span>marcas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
