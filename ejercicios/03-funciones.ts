

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/
function sumar(a:number,b: number){
   // return (a + b).toString();
   return a + b;
}

const sumarFlecha = (a:number, b:number):number => {
    return a + b;
}

function multiplicar(numero: number, otroNumero?:number, base:number = 2):number {
    return numero*base;
}

// const resultado = multiplicar(10, 0,30);
// console.log(resultado);
interface PersonajeLOR{
    nombre: string;
    pv: number;
    mostrarHp:() => void;
}


function curar(personaje, curarx): void {
    personaje.pv+= curarx;
    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR={
    nombre: "Agustin",
    pv:50,
    mostrarHp(){
        console.log("Puntos de vida: ",this.pv);
    }
}

curar(nuevoPersonaje,20);