// definición de una clase en javascript

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
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

    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy un desarrollador/a`);
    }
}

mone = new Desarrollador('Moné', 'Salazar', 1.50)