import "./WhatsAppButton.css";

const phoneNumber = "573118378010";
const message =
  "¡Hola Kimberly! Quiero cotizar tus servicios de marketing digital y estrategia de redes para mi marca. ¿Me puedes dar más información?";
const whatsappHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbeme por WhatsApp para cotizar servicios de marketing digital"
    >
      <span className="whatsapp-ping" aria-hidden="true" />
      <svg className="whatsapp-icon" viewBox="0 0 32 32" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.004 3C9.376 3 4 8.373 4 15c0 2.386.702 4.608 1.912 6.47L4 29l7.73-1.876A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.818a9.77 9.77 0 0 1-4.98-1.36l-.357-.212-4.588 1.114 1.227-4.47-.233-.366A9.78 9.78 0 0 1 5.9 15c0-5.577 4.532-10.09 10.104-10.09 5.573 0 10.105 4.513 10.105 10.09 0 5.577-4.532 9.818-10.105 9.818Zm5.51-7.352c-.302-.152-1.784-.882-2.06-.983-.276-.101-.477-.152-.678.152s-.778.983-.954 1.185c-.176.202-.352.227-.653.076-.302-.152-1.274-.47-2.427-1.502-.897-.802-1.503-1.792-1.679-2.094-.176-.303-.019-.467.132-.618.136-.135.303-.353.454-.53.151-.176.201-.303.302-.505.101-.202.05-.379-.025-.53-.076-.152-.678-1.643-.929-2.25-.245-.588-.494-.508-.678-.518l-.578-.01c-.202 0-.53.076-.807.379-.277.303-1.057 1.034-1.057 2.523s1.082 2.926 1.233 3.128c.151.202 2.13 3.25 5.16 4.559.72.31 1.283.495 1.722.634.723.23 1.382.198 1.902.12.58-.087 1.784-.729 2.036-1.433.252-.703.252-1.306.176-1.433-.075-.126-.276-.202-.578-.353Z"
        />
      </svg>
      <span className="whatsapp-tooltip">Cotiza tus servicios de Marketing</span>
    </a>
  );
}
