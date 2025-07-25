import './SobreMi.css';

const SobreMi = ({ t }) => (
  <section id="about"  className="sobreMi">
    <div  className="overlay6" >
    <h2 >{t.aboutMeTitle}</h2>
   <p className="hover-brillo">{t.aboutMeText}</p>
<p className="hover-brillo" >{t.aboutMeText2}</p>
<p className="hover-brillo" >{t.aboutMeText3}</p>
    </div>



    
  </section>
);

export default SobreMi;