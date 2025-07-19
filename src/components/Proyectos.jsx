
import React from 'react';
import './projects.css';

const Proyectos = ({ t }) => (
  <section id="proyectos" style={{ padding: '8rem', color: 'white',    background: 'black',
      backgroundSize: 'cover',
      backgroundPosition: 'center', marginTop: '-6rem' }}>
    <h2 style={{fontSize: '2rem', marginLeft: '3rem'}}>{t.projects}</h2>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '2rem',
        marginTop: '2rem'
      }}
    >
      <div className="project-container">
        <img src="/foto20.png" alt="Proyecto 1" style={{
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '20px'
  }} className="project-image"/>
        <p className="project-text">{t.project1}</p>
      </div>
      <div className="project-container">
        <img src="/foto17.png" alt="Proyecto 2"  style={{
    width: '100%',
    height: '180px',
    objectFit: 'cover',
     borderRadius: '20px'
  }} className="project-image" />
        <p className="project-text">{t.project2}</p>
      </div>
      <div className="project-container">
        <img src="/foto13.png" alt="Proyecto 3" style={{
    width: '100%',
    height: '180px',
    objectFit: 'cover',
     borderRadius: '20px'
  }} className="project-image" />
        <p className="project-text">{t.project3}</p>
      </div>
      <div className="project-container">
        <img src="/foto6.png" alt="Proyecto 4" style={{
    width: '100%',
    height: '180px',
    objectFit: 'cover',
     borderRadius: '20px'}} className="project-image"/>
        <p className="project-text">{t.project4}</p>
      </div>

      <div className="project-container">
        <img src="/foto2.png" alt="Proyecto 5"  style={{
    width: '100%',
    height: '180px',
    objectFit: 'cover',
     borderRadius: '20px'}} className="project-image"/>
        <p className="project-text">{t.project5}</p>
      </div>
      <div className="project-container">
        <img src="/foto11.png" alt="Proyecto 6" style={{
    width: '100%',
    height: '180px',
    objectFit: 'cover',
     borderRadius: '20px'}} className="project-image" />
        <p className="project-text">{t.project6}</p>
      </div>
      <div className="project-container">
        <img src="/foto12.png" alt="Proyecto 7"  style={{
    width: '100%',
    height: '180px',
    objectFit: 'cover',
     borderRadius: '20px'}} className="project-image"/>
        <p className="project-text">{t.project7}</p>
      </div>
      <div className="project-container">
        <img src="/foto19.png" alt="Proyecto 8"  style={{
    width: '100%',
    height: '180px',
    objectFit: 'cover',
     borderRadius: '20px'}} className="project-image"/>
        <p className="project-text">{t.project8}</p>
      </div>

      <div className="project-container">
        <img src="/foto30.png" alt="Proyecto 9"  style={{
    width: '100%',
    height: '180px',
    objectFit: 'cover',
     borderRadius: '20px'}} className="project-image"/>
        <p className="project-text">{t.project9}</p>
      </div>
      <div className="project-container">
        <img src="/foto21.png" alt="Proyecto 10"  style={{
    width: '100%',
    height: '180px',
    objectFit: 'cover',
     borderRadius: '20px'}} className="project-image" />
        <p className="project-text">{t.project10}</p>
      </div>
      <div className="project-container">
        <img src="/images.jpeg" alt="Proyecto 11"  style={{
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '20px'}}  className="project-image"/>
        <p className="project-text">{t.project11}</p>
      </div>
      <div className="project-container">
        <img src="/foto16.png" alt="Proyecto 12" style={{
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '20px'}} className="project-image"/>
        <p className="project-text">{t.project12}</p>
      </div>

      <div className="project-container">
        <img src="/foto8.png" alt="Proyecto 13" style={{
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '20px'}} className="project-image"/>
        <p className="project-text">{t.project13}</p>
      </div>
      <div className="project-container">
        <img src="/correospam.jpg" alt="Proyecto 14"  style={{
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '20px'}} className="project-image"/>
        <p className="project-text">{t.project14}</p>
      </div>
      <div className="project-container">
        <img src="/mundial.jpg" alt="Proyecto 15" style={{
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '20px'}} className="project-image"/>
        <p className="project-text">{t.project15}</p>
      </div>
      <div className="project-container">
        <img src="/morosidad.jpg" alt="Proyecto 16"  style={{
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '20px'}} className="project-image"/>
        <p className="project-text">{t.project16}</p>
      </div>
    </div>
  </section>
);

export default Proyectos;
