import React, { useState, useEffect, useContext } from "react";
import { UsersContext } from "../../context/UsersContext";

const FormCard = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target.nombre.value);

        const { nombre, apellido, telefono } = e.target;

        const validate = validateForm(
            nombre.value,
            apellido.value,
            telefono.value
        );

        if (validate) {
        }
    };

    const validateForm = (nombre, apellido, telefono) => {
        if (nombre.length > 50 || nombre == false || nombre == null)
            return false;
        if (nombre.length > 50 || nombre == false || nombre == null)
            return false;
        const result = /\d{3}-\d{3}-\d{4}/.test(cadena);
        if (result) {
            return true; //Validation ends here
        } else {
            return false;
        }
    };

    return (
        <div className="card">
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
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
                    <button type="submit" className="button-add">
                        Agregar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormCard;
