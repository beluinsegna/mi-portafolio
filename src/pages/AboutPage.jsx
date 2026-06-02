import React from 'react';

const AboutPage = () => {
  const descripcion = 'Estudiante de tercer año de Analista de Sistemas, con sólida capacidad analítica y orientación a la resolución de problemas. Cuento con experiencia laboral en atención al cliente y ventas en Call Center, donde desarrollé habilidades de comunicación efectiva, escucha activa y trabajo bajo presión. Poseo dominio avanzado del Paquete Office y gran predisposición para el aprendizaje continuo. Busco incorporarme al sector tecnológico para aportar compromiso, proactividad y continuar desarrollando mis conocimientos y experiencia profesional.';

  const experiencia = [
    {
      id: 1,
      puesto: 'Asesor Back Office',
      empresa: 'VN Global',
      periodo: '2020 - Presente',
      descripcion: 'Analisis y seguimiento de gestion de Ventas.'
    },
  ];

  const educacion = [ 
    {
      id: 1,
      titulo: 'Analista de Sistemas de Computación',
      institucion: 'Institucion Cervantes',
      periodo: '2024 - Presente'
    }
  ];

  const skills = ['Paquete Office (Excel avanzado, Word)', 'Bases de Datos (SQL Server)', 'Fundamentos de metodología Agile', 'Programación (JS, C#, HTML, etc.)'];

  return (
    <div className="border rounded-4 p-4">
      <section className="mb-5">
        <h2>Sobre mí</h2>
        <p>{descripcion}</p>
      </section>

      {experiencia && experiencia.length > 0 && (
        <section className="mb-5">
          <h2>Experiencia</h2>
          {experiencia.map((exp, index) => (
            <div key={exp.id} className={`mb-3 pb-3 ${index < experiencia.length - 1 ? 'border-bottom' : ''}`}>
              <h5>{exp.puesto} <small className="text-muted">- {exp.empresa}</small></h5>
              <p className="mb-1"><em>{exp.periodo}</em></p>
              <p className="mb-0 text-secondary">{exp.descripcion}</p>
            </div>
          ))}
        </section>
      )}

      {educacion && educacion.length > 0 && (
        <section className="mb-5">
          <h2>Educación</h2>
          {educacion.map((edu) => (
            <div key={edu.id} className="mb-3">
              <h5>{edu.titulo}</h5>
              <p className="mb-0"><strong>{edu.institucion}</strong></p>
              <p className="text-muted"><em>{edu.periodo}</em></p>
            </div>
          ))}
        </section>
      )}

      {skills && skills.length > 0 && (
        <section>
          <h2>Habilidades</h2>
          <div className="mt-3">
            {skills.map((s, i) => (
              <p key={i} className="mb-2 text-secondary">{s}</p>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default AboutPage;