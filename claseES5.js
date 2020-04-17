// metodologia previa al lanzamiento de ES6

function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function() {} //Función dummy, anínima, o función noop, que no hacen nada.
    fn.prototype;
    prototipoPadre.prototype // Esa función la volvemos un objeto fn cuyo prototype lo llamamos como padre. prototype.
    prototipoHijo.prototype = new fn // Finalmente creamos un nuevo objeto de fn, para que así herede protipoHijo.
        //Asignamos constructora funcion
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}
Persona.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function() {
    return this.altura > 1.5
}

function Desarrollador(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function() {
    console.log(`Mi nombre es ${this.nombre} y soy un desarrollador/a`)
}



var jota = new Persona('Jonathan', 'Salazar', 1.68)
var mone = new Desarrollador('mone', 'Salazar', 1.40)
    // var violeta = new Persona('violeta', 'Salazar', 0.70)

// jota.saludar()
// mone.saludar()
// violeta.saludar()

// jota.soyAlto()
// mone.soyAlto()
// violeta.soyAlto()

// #################### herencia en javascript #################

// metodologia para el maejo de clases a partir de ES6