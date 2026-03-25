"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Persona {
    nombre;
    apellido;
    constructor() {
        this.nombre = "";
        this.apellido = "";
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    setApellido(apellido) {
        this.apellido = apellido;
    }
    getApellido() {
        return this.apellido;
    }
    getNombreCompleto() {
        return `Nombre: ${this.getNombre()} - Apellido: ${this.getApellido()}`;
    }
    mostrarPersona() {
        return this.getNombreCompleto();
    }
}
exports.default = Persona;
//# sourceMappingURL=persona.js.map