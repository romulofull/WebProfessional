import './SobreMi.css';

const SobreMi = ({ t }) => (
  <section id="about"  className="sobreMi"
    style={{
      paddingTop: '5rem',
      background: 'black',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white', 
     
    }}
  >
    <div  className="overlay6" >
    <h2 >{t.aboutMeTitle}</h2>
   <p className="hover-brillo" style={{lineHeight: '1' }}>{t.aboutMeText}</p>
<p className="hover-brillo" style={{lineHeight: '1' }}>{t.aboutMeText2}</p>
<p className="hover-brillo" style={{lineHeight: '1' }}>{t.aboutMeText3}</p>
    </div>



    
  </section>
);

export default SobreMi;