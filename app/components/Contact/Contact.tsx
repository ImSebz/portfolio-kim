import "./Contact.css";

export function Contact() {
  return (
    <section className="contact" id="contacto">
      <p>Empresas · Agencias · Marcas</p>
      <h2>
        Let’s make
        <em>something happen.</em>
      </h2>
      <div className="contact-links">
        <a href="mailto:kimberllypulido@gmail.com">
          kimberllypulido@gmail.com <span>↗</span>
        </a>
        <a
          href="https://www.linkedin.com/in/kimberly-pulido-b03698240/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <span>↗</span>
        </a>
      </div>
    </section>
  );
}
