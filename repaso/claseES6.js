// definición de una clase en javascript

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn) {
        let { nombre, apellido } = this
        // console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
        console.log(`Hola me llamo ${nombre} ${apellido}`);
        if (fn) {
            fn(nombre, apellido, false)
        }
    }

    soyAlto() {
        return this.altura > 1.5
    }
}

jota = new Persona('Jonathan', 'Salazar', 2.00)


// manejo de la herencia en javascript

class Desarrollador extends Persona {

    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn) {
        let { nombre, apellido } = this
        console.log(`Hola me llamo ${nombre} ${apellido} y soy un desarrollador/a`);
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
}



function responderSaludo(nombre, apellido, esDev) {
    console.log(`Hola ${nombre} ${apellido}`);
    if (esDev) {
        console.log('Me alegro que seas desarrollador');
    }

}

mone = new Desarrollador('Moné', 'Salazar', 1.50)
jota = new Persona('Jonathan', 'Salazar', 2.00)
violeta = new Persona('Violeta', 'Salazar', 0.80)



jota.saludar(responderSaludo)
mone.saludar(responderSaludo)
violeta.saludar()