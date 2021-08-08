import React, { useState, useEffect, useContext } from "react";
import { UsersContext } from "../../context/UsersContext";

const FormCard = () => {
    const { users, setEditMode, editMode, actualUser, setUsers, getUsers } =
        useContext(UsersContext);

    const [user, setUser] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
    });

    useEffect(() => {
        if (editMode) {
            setUser(actualUser);
        }
    }, [actualUser]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { nombre, apellido, telefono } = user;
        const validate = validateForm(nombre, apellido, telefono);

        if (validate) {
            try {
                if (editMode && user._id !== '') {
                    // Edit User
                    const res = await fetch(`/api/users/${user._id}`, {
                        method: "PUT",
                        headers: {
                            "Content-type": "application/json",
                        },
                        body: JSON.stringify(user),
                    });
                    const data = await res.json();

                    if(data.success){
                        getUsers()                        
                        resetForm();
                    }


                } else {
                    // New User
                    const res = await fetch("/api/users", {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json",
                        },
                        body: JSON.stringify(user),
                    });
                    const data = await res.json();
                    if(data.success){
                        getUsers()
                        resetForm();
                    }
                }
            } catch (error) {
                alert(error);
            }
        } else {
            alert("Algun dato incorrecto");
        }
    };

    const validateForm = (nombre, apellido, telefono) => {
        if (nombre.length > 50 || nombre == false || nombre == null)
            return false;
        if (apellido.length > 50 || apellido == null) return false;
        const result = /\d{3}-\d{3}-\d{4}/.test(telefono);
        if (result) {
            return true; //Validation ends here
        } else {
            return false;
        }
    };

    const handleOnChangeInput = (e) => {
        const id = e.target.id;
        let content = e.target.value;

        setUser((prev) => {
            return {
                ...prev,
                [id]: content,
            };
        });
    };

    const resetForm = () => {
        setEditMode(false);
        setUser({
            nombre: "",
            apellido: "",
            telefono: "",
        });
    };

    const handleDelete = async () => {
        if (editMode && user._id) {
            const res = await fetch(`api/users/${user._id}`, {
                method: "DELETE",
            });
            const data = await res.json()
            if(data.success){
                if(data.success){
                    getUsers()
                }
                resetForm();

            }
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
                        value={user.nombre}
                        onChange={(e) => handleOnChangeInput(e)}
                        required
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="apellido">Apellido</label>
                    <input
                        type="text"
                        className="input"
                        id="apellido"
                        placeholder="Apellido"
                        value={user.apellido}
                        onChange={(e) => handleOnChangeInput(e)}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="telefono">Telefono</label>
                    <input
                        type="tel"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        className="input"
                        id="telefono"
                        required
                        placeholder="123-456-1234"
                        value={user.telefono}
                        onChange={(e) => handleOnChangeInput(e)}
                    />
                </div>
                <div className="form-action">
                    <div className="">
                        {editMode && (
                            <i
                                className="fas fa-trash form-action-icon"
                                onClick={() => handleDelete()}
                            ></i>
                        )}
                    </div>
                    <div className="form-action-options">
                        {editMode && (
                            <span
                                className="cancel-option"
                                onClick={() => resetForm()}
                            >
                                Cancelar
                            </span>
                        )}

                        <button type="submit" className="button-add">
                            {editMode ? "Guardar" : "Agregar"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormCard;
