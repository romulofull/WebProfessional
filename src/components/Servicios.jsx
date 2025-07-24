import './SobreMi.css';
const Servicios = ({ t }) => (
  <section id="servicios"
    style={{
     paddingTop: '3rem',
      padding: '1rem',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white', // o el color que se vea bien sobre la imagen
    }}
  >
    <div className="overlay9" style={{height: '100%', fontSize: '1.5rem', }}>
    <h2  className="hover-brillo1" style={{lineHeight: '1' }} >{t.services}</h2>
      <p className="hover-brillo1" style={{lineHeight: '1' }}>{t.service1}</p>
      <p className="hover-brillo1" style={{lineHeight: '1' }}>{t.service2}</p>
      <p className="hover-brillo1" style={{lineHeight: '1' }}>{t.service3}</p>
      <p className="hover-brillo1" style={{lineHeight: '1' }}>{t.service4}</p>
      <p className="hover-brillo1" style={{lineHeight: '1' }}>{t.service5}</p>
   
    </div>
  </section>
);
export default Servicios;
