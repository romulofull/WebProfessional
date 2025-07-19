import './SobreMi.css';

const SobreMi = ({ t }) => (
  <section id="about"
    style={{
      paddingTop: '5rem',
      padding: '1rem',
      paddingLeft: '10rem',
       background: 'black',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white', // o el color que se vea bien sobre la imagen
    }}
  >
    <div  className="overlay" style={{backgroundColor: 'rgba(0,0,0,0.5)',  width: '90%', height: '100%', fontSize: '1.5rem', lineHeight: '0.6' }}>
    <h2 >{t.aboutMeTitle}</h2>
   <p className="hover-brillo">{t.aboutMeText}</p>
<p className="hover-brillo">{t.aboutMeText2}</p>
<p className="hover-brillo">{t.aboutMeText3}</p>
    </div>



    
  </section>
);

export default SobreMi;