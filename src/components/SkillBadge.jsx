import React from 'react';
import PropTypes from 'prop-types';

// PASO: Completar el componente SkillBadge
// Debe recibir un string "nombre" por props y mostrar un badge Bootstrap
const SkillBadge = ({ nombre }) => {
  return (
    // PASO: Usar un badge de Bootstrap con className dinámico si querés colores por categoría
    <span className="badge bg-primary me-1">
      {/* nombre */}
    </span>
  );
};

SkillBadge.propTypes = {
  nombre: PropTypes.string.isRequired,
};

export default SkillBadge;