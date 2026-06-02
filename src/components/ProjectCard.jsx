import React from 'react';
import PropTypes from 'prop-types';
import SkillBadge from './SkillBadge';

// PASO: Completar el componente ProjectCard
// Debe recibir un objeto "proyecto" por props con: id, nombre, descripcion, imagen, tecnologías, link
const ProjectCard = ({ proyecto }) => {
  return (
    <div className="card h-100 shadow-sm">
      {proyecto.imagen && (
        <img src={proyecto.imagen} className="card-img-top" alt={proyecto.nombre} />
      )}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{proyecto.nombre}</h5>
        <p className="card-text flex-grow-1">{proyecto.descripcion}</p>
        <div className="mb-3">
          {proyecto.tecnologias.map((tecnologia, index) => (
            <SkillBadge key={index} nombre={tecnologia} />
          ))}
        </div>
      </div>
      <div className="card-footer bg-transparent border-top-0">
        {proyecto.link ? (
          <a
            href={proyecto.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary w-100"
          >
            Ver proyecto
          </a>
        ) : (
          <span className="text-muted">Sin enlace disponible</span>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  proyecto: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    imagen: PropTypes.string,
    tecnologias: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;