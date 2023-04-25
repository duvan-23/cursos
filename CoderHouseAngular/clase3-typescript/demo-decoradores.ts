function decorador1(){
    console.log("Decorador 1 definido");
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        console.log("Decorador esta siendo llamado ",target,propertyKey,descriptor);
    }
}

class Ejemplo{
    @decorador1()
    metodo(){}
}

//tsc demo-decoradores.ts --target ES5 --experimentalDecorators