
import español from '../language/español';
import ingles from '../language/ingles';
import aleman from '../language/aleman';
import './SobreMi.css';

const Encabezado = ({ t }) => (
  <>
  
    <nav style={{
      position: 'fixed',
      width: '100%',
      backgroundColor: 'black',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
    
  
    }}>
    
      <div>
  <img src="/logo.png" alt="Logo" className="logo-hover"  style={{ height: '30px', width: '50px', borderRadius: '10px',  objectFit: 'cover' }} />
</div>

     <div style={{ display: 'flex', gap: '1.5rem' }}>
      <a href="#about" className="linkStyle">{t.nabout}</a>
     <a href="#servicios" className="linkStyle">{t.nservices}</a>
        <a href="#proyectos" className="linkStyle">{t.nprojects}</a>
      <a href="#contacto" className="linkStyle">{t.ncontact}</a>
    </div>
     
    <div style={{ display: 'flex', gap: '1rem', marginRight: '15vw' }}>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" >🔗</a>
  <a href="https://github.com" target="_blank" rel="noopener noreferrer" >💻</a>
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" >📘</a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" >📷</a>
</div>
    </nav>

   
    <section
  className="hero"
  style={{
    paddingTop: '0.8rem',
    backgroundImage: `url("${t.background}")`,
  
    color: 'white',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '100vw',
    height: '50vh',
    backgroundSize: 'contain',
    alignItems: 'center',
    backgroundSize: 'cover', 

  }}
>
  <div className="overlay" style={{backgroundColor: 'rgba(0,0,0,0.5)',  width: '100%', height: '100%', fontSize: '1.5rem',}}>
  
    <h1>{t.welcome}</h1>

    <div  style={{fontSize: '4.2rem', width: '100%', marginTop: '-50px'}}>
    <p>{t.subtitle}</p>
    <p>{t.subtitle1}</p>
    <p>{t.subtitle2}</p>
  </div>
  </div>
</section>
  </>
);



const language = localStorage.getItem('language') || 'español';

const translations = {
  español,
  ingles,
  aleman,
};

const t = translations[language];

export default Encabezado;
