
import español from '../language/español';
import ingles from '../language/ingles';
import aleman from '../language/aleman';
import './SobreMi.css';

const Encabezado = ({ t }) => {

 

  return (
      <>
    <nav  className="navbar">
    
      <div>
  <img src="/logo.png"  className="logo-hover" />
</div>

     <div className= "navLinks">
      <a href="#about" className="linkStyle">{t.nabout}</a>
     <a href="#servicios" className="linkStyle">{t.nservices}</a>
        <a href="#proyectos" className="linkStyle">{t.nprojects}</a>
      <a href="#contacto" className="linkStyle">{t.ncontact}</a>
    </div>
     
      <div className="socialLinks">
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" >🔗</a>
  <a href="https://github.com" target="_blank" rel="noopener noreferrer" >💻</a>
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" >📘</a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" >📷</a>
</div>
    </nav>

    <section
  className="hero"  style={{
    backgroundImage: `url(${t.background})`
  }}>
  <div className="overlay">
    <h1 className="overlay1">{t.welcome}</h1>
    <div >
    <p className="overlay1">{t.subtitle}</p>
  </div>
  </div>
</section>
  </>
);

};

export default Encabezado;
