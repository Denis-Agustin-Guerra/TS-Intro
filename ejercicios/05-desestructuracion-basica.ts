

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: "Mes",
    detalles: {
        autor:"Ed Sheran",
        anio:2015
    }
}
// Una forma de imprimir los valores de los objetos
// console.log("El volumen actual de ", reproductor.volumen);
// console.log("El segundo actual de ", reproductor.segundo);
// console.log("La cancion actual de ", reproductor.cancion);
// console.log("El autor es ", reproductor.detalles.autor);


//Otra forma y la recomendada

const {volumen, segundo, cancion, detalles} = reproductor;
const {autor, anio} = detalles;

console.log("El volumen actual de ", volumen);
console.log("El segundo actual de ", segundo);
console.log("La cancion actual de ", cancion);
console.log("El autor es ", autor);
console.log("En el anio ", anio);


const dbz: string[] = ["Goku","Vegueta","Trunks"];
const [p1,p2,p3] = dbz; // En la desestructuracion de arreglos es importante la posicion
const [ , ,p03] = dbz; // si no se requieren las posiciones anteriores se pueden dejar vacias pero respetando los lugares

console.log("Personaje 1: ", dbz[0]);
console.log("Personaje 2: ", p2);
console.log("Personaje 3: ", p03);

