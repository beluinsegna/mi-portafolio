import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ tema, toggleTema }) => {
  const nombre = 'Insegna Noelia Belén';
  const titulo = 'Estudiante de Analista de Sistemas de Computación';
  const skills = ['Paquete Office (Excel avanzado, Word)', 'Bases de Datos (SQL Server)', 'Metodologías Ágiles', 'Programación (JS, C#, HTML)'];

  return (
    <div className="d-flex justify-content-center">
      <div className="w-100" style={{ maxWidth: '760px' }}>
        <section className="text-center py-5">
          <h1>{nombre}</h1>
          <p className="lead">{titulo}</p>
        </section>

        <section className="mb-5 text-center">
          <h2>Habilidades principales</h2>
          <div className="mt-3">
            {skills.map((s, i) => (
              <p key={i} className="mb-2 text-secondary">{s}</p>
            ))}
          </div>
        </section>

        <section className="mb-5 text-center">
          <h2>Contacto</h2>
          <div className="mt-4">
            <h3 className="h5">Correo electrónico</h3>
            <p className="mb-3">beluinsegna123@gmail.com</p>
            <h3 className="h5">Github</h3>
            <p className="mb-0">github.com/beluinsegna</p>
          </div>
          <div className="mt-4 d-flex justify-content-center gap-2 flex-wrap">
            <Link to="/contact" className="btn btn-primary">Ir a contacto</Link>
            <a
              href="https://calendly.com/beluinsegna123/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary"
            >
              Agendar 30 min
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;