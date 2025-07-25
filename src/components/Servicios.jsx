import './SobreMi.css';
const Servicios = ({ t }) => (
  <section id="servicios">
    <div className="overlay9" >
    <h2  className="hover-brillo1"  >{t.services}</h2>
      <p className="hover-brillo1"  >{t.service1}</p>
      <p className="hover-brillo1" >{t.service2}</p>
      <p className="hover-brillo1" >{t.service3}</p>
      <p className="hover-brillo1" >{t.service4}</p>
      <p className="hover-brillo1" >{t.service5}</p>
   
    </div>
  </section>
);
export default Servicios;
