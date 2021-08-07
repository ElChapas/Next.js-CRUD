import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es necesario"],
        maxLength: [50, "Nombre demasiado largo"]
    },
    apellido: {
        type: String,
        maxLength: [50, "Apellido demasiado largo"]
    },
    telefono: {
        type: String,
        validate: {
            validator: function (v) {
                return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: (props) => `${props.value} no es un numero telefonico!`,
        },
        required: [true, "El telefono es necesario"],
        unique: true
    },
});

export default models.User || model("User", userSchema);