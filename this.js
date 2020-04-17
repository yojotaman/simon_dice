function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}


// Persona.prototype.saludar = function() {
//     console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
// }

// Persona.prototype.soyAlto = function() {
//     return this.altura > 1.5
// }

// en las siguientes funciones reescribiremos los metodos saludar y soyAlto 
// empleando la notacion de arrow functions y veremos el efecto generado a causa del significado de this dentro de estas


Persona.prototype.saludar = () => {
    debugger // al verificar la salidad del debugger nos damos cuenta de la referencia del objeto this
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = () => this.altura > 1.5

// dentro de las arrow functions el objeto this hace referencia al objeto global que en el caso del navegador es window



var jota = new Persona('Jonathan', 'Salazar', 1.68)