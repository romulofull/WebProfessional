
import React from 'react';
import './projects.css';

const Proyectos = ({ t }) => (
  <section id="proyectos" >
    <h2 className="nameProyectos">{t.projects}</h2>
    <div className="nameProyectos2">
      <div className="project-container">
        <img src="/foto20.png" alt="Proyecto 1" className="project-image"/>
        <p className="project-text">{t.project1}</p>
      </div>
      <div className="project-container">
        <img src="/foto17.png" alt="Proyecto 2"   className="project-image" />
        <p className="project-text">{t.project2}</p>
      </div>
      <div className="project-container">
        <img src="/foto13.png" alt="Proyecto 3"  className="project-image" />
        <p className="project-text">{t.project3}</p>
      </div>
      <div className="project-container">
        <img src="/foto6.png"  className="project-image"/>
        <p className="project-text">{t.project4}</p>
      </div>

      <div className="project-container">
        <img src="/foto2.png"  className="project-image"/>
        <p className="project-text">{t.project5}</p>
      </div>
      <div className="project-container">
        <img src="/foto11.png" className="project-image" />
        <p className="project-text">{t.project6}</p>
      </div>
      <div className="project-container">
        <img src="/foto12.png" alt="Proyecto 7"  className="project-image"/>
        <p className="project-text">{t.project7}</p>
      </div>
      <div className="project-container">
        <img src="/foto19.png" alt="Proyecto 8" className="project-image"/>
        <p className="project-text">{t.project8}</p>
      </div>

      <div className="project-container">
        <img src="/foto30.png" alt="Proyecto 9"  className="project-image"/>
        <p className="project-text">{t.project9}</p>
      </div>
      <div className="project-container">
        <img src="/foto21.png" alt="Proyecto 10"  className="project-image" />
        <p className="project-text">{t.project10}</p>
      </div>
      <div className="project-container">
        <img src="/images.jpeg" alt="Proyecto 11" className="project-image"/>
        <p className="project-text">{t.project11}</p>
      </div>
      <div className="project-container">
        <img src="/foto16.png" alt="Proyecto 12" className="project-image"/>
        <p className="project-text">{t.project12}</p>
      </div>

      <div className="project-container">
        <img src="/foto8.png" alt="Proyecto 13"className="project-image"/>
        <p className="project-text">{t.project13}</p>
      </div>
      <div className="project-container">
        <img src="/correospam.jpg" alt="Proyecto 14" className="project-image"/>
        <p className="project-text">{t.project14}</p>
      </div>
      <div className="project-container">
        <img src="/mundial.jpg" alt="Proyecto 15" className="project-image"/>
        <p className="project-text">{t.project15}</p>
      </div>
      <div className="project-container">
        <img src="/morosidad.jpg" alt="Proyecto 16"  className="project-image"/>
        <p className="project-text">{t.project16}</p>
      </div>
    </div>
  </section>
);

export default Proyectos;
