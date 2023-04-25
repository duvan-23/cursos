"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Usuario = void 0;
var persona_1 = require("./persona");
var Usuario = /** @class */ (function (_super) {
    __extends(Usuario, _super);
    function Usuario(nombre, apellido, edad, correo, contraseña) {
        var _this = _super.call(this, nombre, apellido, edad) || this;
        _this.correo = correo;
        _this.contraseña = contraseña;
        return _this;
    }
    //polimorfismo dos metodos con el mismo nombre pero diferente funcionalidad en  clase Persona y clase hija Usuario,
    //posible con protected variable de clase padre, seran privadas pero se podran llamar en clases hijas
    Usuario.prototype.obtenerNombre = function () {
        return this.nombre + " " + this.apellido;
    };
    Usuario.prototype.inscribir = function () {
        return "Inscribiendo Usuario";
    };
    Usuario.prototype.obtenerCorreo = function () {
        return this.correo;
    };
    return Usuario;
}(persona_1.Persona));
exports.Usuario = Usuario;
