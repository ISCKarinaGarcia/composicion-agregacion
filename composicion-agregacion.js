class PlanEstudio {
    constructor(nombre, duracionMeses) {
        this._nombre = nombre;  //nombre del plan de estudios
        this._duracionMeses = duracionMeses;
    }



    getNombre() {
        return this._nombre;
    }

    getDuracionMeses() {
        return this._duracionMeses;
    }
}

class EstudianteMaestria {
    constructor(nombre, id) {
        this._nombre = nombre;
        this._id = id;
    }

    getNombre() {
        return this._nombre;
    }

    getId() {
        return this._id;
    }
}

class ProgramaMeastria {
    constructor(nombrePlan, duracionMeses) {
        // Composición
        this.planEstudio = new PlanEstudio(nombrePlan, duracionMeses);
        // Agregación 
        this.estudiantes = []; 
    }

    
    agregarEstudiantes(estudiantes) {
        estudiantes.forEach(estudiante => {
            this.estudiantes.push(estudiante); 
        });
    }

    getPlanEstudio() {
        return this.planEstudio;
    }

    getEstudiantes() {
        return this.estudiantes;
    }
}


const programa = new ProgramaMeastria("Maestría en Sistemas Computacionales", 24);

//estudiantes
let estudiantes = [
    new EstudianteMaestria("Fatima MariJose", 1),
    new EstudianteMaestria("Jose Miguel", 2),
    new EstudianteMaestria("Irma Karina", 3),
    new EstudianteMaestria("Roberto Emiliano", 4),
    new EstudianteMaestria("Jazmin", 5),
    new EstudianteMaestria("Brayan Alexis", 6),
    new EstudianteMaestria("Diego Rafael", 7),
    new EstudianteMaestria("Christian Adan", 8),
    new EstudianteMaestria("Emilio", 9)
];


programa.agregarEstudiantes(estudiantes);


console.log("Programa de Maestría: " + programa.getPlanEstudio().getNombre());
console.log("Duración: " + programa.getPlanEstudio().getDuracionMeses() + " meses");
console.log("Estudiantes inscritos:");
programa.getEstudiantes().forEach(est => {
    console.log("- " + est.getNombre());
});
