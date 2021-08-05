import React from "react";
// import { useForm } from 'react-hook-form';

const FormCard = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hola');
  }


  return (
    <div className="card">
      <form className="form" onSubmit={(e) => handleSubmit(e)} >
        <div className="form-input">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            className="input"
            id="nombre"
            placeholder="Nombre"
          />
        </div>
        <div className="form-input">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            className="input"
            id="apellido"
            placeholder="Apellido"
          />
        </div>
        <div className="form-input">
          <label htmlFor="telefono">Telefono</label>
          <input
            type="text"
            className="input"
            id="telefono"
            placeholder="Telefono"
          />
        </div>
        <div className="form-action">
          <button type='submit' className="button-add">Agregar</button>
        </div>
      </form>

    </div>
  );
};

export default FormCard;
