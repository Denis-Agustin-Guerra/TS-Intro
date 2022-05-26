
console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/
class PersonaNormal{
    constructor(
        public nombre: string,
        public direccion: string,
    ){}
}
class Heroe extends PersonaNormal{
    // alterEgo: string;            //Esta es una forma de hacerlo
    // edad: number;
    // nombreReal: string;

    constructor(                            //Esta es otra directamento todo en el constructor
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ){
        super( nombreReal, "New York USA");
    }
}

const ironman = new Heroe("Ironman",45,"Tony");

console.log(ironman);