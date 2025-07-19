
const Contacto = ({ t }) => (

<div>
<section id="contacto" style={{ padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', background: 'black', backgroundSize: 'cover', backgroundPosition: 'center', marginTop: '-15rem', marginLeft: '5rem' }}>
  <div className="overlay" style={{ backgroundColor: 'rgba(0,0,0,0.5)', width: '90%', height: '100%', fontSize: '1.5rem', lineHeight: '0.6', color: 'white', padding: '1rem', borderRadius: '1rem' }}>
    <h2>{t.contactTitle}</h2>
    <p className="hover-brillo3">📩 {t.contactEmail}: <a href="mailto:romulo.castro@gmail.com" style={{ color: '#00ffff' }}>romulo.castro@gmail.com</a></p>
    <p className="hover-brillo3">💼 {t.contactLinkedIn}: <a href="https://linkedin.com/romulocastrogame" target="_blank" rel="noopener noreferrer" style={{ color: '#00ffff' }}>linkedin.com/romulocastrogame</a></p>
    <p className="hover-brillo3">💬 {t.contactWhatsapp}: <a href="https://wa.me/593998621150" target="_blank" rel="noopener noreferrer" style={{ color: '#00ffff' }}>WhatsApp</a></p>
  </div> 
  </section>
  <footer
      style={{
        backgroundColor: 'black',
        color: '#ccc',
        textAlign: 'center',
        padding: '1rem',
        fontSize: '1rem',
        marginTop: '-5rem',
        zIndex: '10',
        position: 'relative'

      }}
    >
      Desarrollado por <strong>FullDeveloper Rómulo</strong> © 2023
    </footer>
  
    </div>


);

export default Contacto;
