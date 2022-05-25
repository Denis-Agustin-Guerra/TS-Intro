

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

//let habilidades: (boolean | string | number) [] = ["Bash", "Counter","Healing",100]; //Evitar este caso, siempre tratar de que los arreglos sean omogeneos

//habilidades.push(true);

let habilidades: string[] = ["Bash", "Counter","Healing"];

interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje={
    nombre:"Shepard",
    hp:100,
    habilidades: ["Bash", "Counter","Healing"]
}

personaje.puebloNatal = "La Tierra";

console.table(personaje);