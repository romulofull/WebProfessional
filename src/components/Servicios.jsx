import './SobreMi.css';
const Servicios = ({ t }) => (
  <section id="servicios"
    style={{
     paddingTop: '3rem',
      padding: '1rem',
      paddingLeft: '8rem',
       background: 'black',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white', // o el color que se vea bien sobre la imagen
    }}
  >
    <div className="overlay" style={{backgroundColor: 'rgba(0,0,0,0.5)',  width: '90%', height: '100%', fontSize: '1.5rem', lineHeight: '1' }}>
    <h2  style={{
      marginLeft: '2.5rem'}}>{t.services}</h2>
    <ul>
      <p className="hover-brillo1">{t.service1}</p>
      <p className="hover-brillo1">{t.service2}</p>
      <p className="hover-brillo1">{t.service3}</p>
      <p className="hover-brillo1">{t.service4}</p>
      <p className="hover-brillo1">{t.service5}</p>
    </ul>
    </div>
  </section>
);
export default Servicios;
