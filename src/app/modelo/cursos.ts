import { Horario } from "./horario";

export interface Cursos {
    id: string;
    nombreCurso: string;
    profesorAsignado: string;
    clases: Horario[];
}