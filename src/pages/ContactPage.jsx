import React, { useReducer, useState } from 'react';

const initialState = {
  nombre: '',
  email: '',
  mensaje: '',
};

const contactFormReducer = (state, action) => {
  switch (action.type) {
    case 'ACTUALIZAR_CAMPO':
      return { ...state, [action.campo]: action.valor };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const ContactPage = () => {
  const [formulario, dispatch] = useReducer(contactFormReducer, initialState);
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const validarCampo = (campo, valor) => {
    let error = '';
    if (campo === 'nombre') {
      if (!valor.trim()) error = 'El nombre es obligatorio';
    }
    if (campo === 'email') {
      if (!valor.trim()) error = 'El email es obligatorio';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) error = 'Email inválido';
    }
    if (campo === 'mensaje') {
      if (!valor.trim()) error = 'El mensaje es obligatorio';
      else if (valor.trim().length < 10) error = 'Mínimo 10 caracteres';
    }
    setErrores((prev) => ({ ...prev, [campo]: error }));
    return error === '';
  };

  const validarTodo = () => {
    const ok1 = validarCampo('nombre', formulario.nombre);
    const ok2 = validarCampo('email', formulario.email);
    const ok3 = validarCampo('mensaje', formulario.mensaje);
    return ok1 && ok2 && ok3;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'ACTUALIZAR_CAMPO', campo: name, valor: value });
  };

  const handleBlur = (e) => validarCampo(e.target.name, e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarTodo()) {
      setEnviado(true);
      dispatch({ type: 'RESET' });
      setTimeout(() => setEnviado(false), 3000);
    }
  };

  const handleReset = () => {
    dispatch({ type: 'RESET' });
    setErrores({});
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <h2 className="mb-4">Contacto</h2>

        {enviado && <div className="alert alert-success">¡Mensaje enviado!</div>}

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label className="form-label" htmlFor="nombre">Nombre</label>
            <input
              type="text"
              className={`form-control ${errores.nombre ? 'is-invalid' : formulario.nombre ? 'is-valid' : ''}`}
              id="nombre"
              name="nombre"
              value={formulario.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              type="email"
              className={`form-control ${errores.email ? 'is-invalid' : formulario.email ? 'is-valid' : ''}`}
              id="email"
              name="email"
              value={formulario.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errores.email && <div className="invalid-feedback">{errores.email}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="mensaje">Mensaje</label>
            <textarea
              className={`form-control ${errores.mensaje ? 'is-invalid' : formulario.mensaje ? 'is-valid' : ''}`}
              id="mensaje"
              name="mensaje"
              rows="4"
              value={formulario.mensaje}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errores.mensaje && <div className="invalid-feedback">{errores.mensaje}</div>}
          </div>

          <button type="submit" className="btn btn-primary me-2">Enviar</button>
          <button type="button" className="btn btn-secondary" onClick={handleReset}>Reset</button>
        </form>


      </div>
    </div>
  );
};

export default ContactPage;