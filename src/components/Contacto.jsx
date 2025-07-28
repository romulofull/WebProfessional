import './Contacto.css';

const Contacto = ({ t }) => (
  <div>
    <section id="contacto" className="contacto-section">
      <div className="overlay4">
        <h2>{t.contactTitle}</h2>
        <p className="hover-brillo3">
          📩 {t.contactEmail}:
          <a href="mailto:romulo.castro@gmail.com"> romulo.castro@gmail.com</a>
        </p>
        <p className="hover-brillo3">
          💼 {t.contactLinkedIn}:
          <a href="https://linkedin.com/romulocastrogame" target="_blank" rel="noopener noreferrer">
            linkedin.com/romulocastrogame
          </a>
        </p>
        <p className="hover-brillo3">
          💬 {t.contactWhatsapp}:
          <a href="https://wa.me/593998621150" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </p>
      </div>
    </section>

    <footer className="contact-footer">
      {t.footer}<strong> FullDeveloper Rómulo</strong> © 2023
    </footer>
  </div>
);

export default Contacto;
