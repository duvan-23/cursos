var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decorador1() {
    console.log("Decorador 1 definido");
    return function (target, propertyKey, descriptor) {
        console.log("Decorador esta siendo llamado ", target, propertyKey, descriptor);
    };
}
var Ejemplo = /** @class */ (function () {
    function Ejemplo() {
    }
    Ejemplo.prototype.metodo = function () { };
    __decorate([
        decorador1()
    ], Ejemplo.prototype, "metodo", null);
    return Ejemplo;
}());
//tsc demo-decoradores.ts --target ES5 --experimentalDecorators
