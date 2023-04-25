import { Estudiante } from "./estudiante";

export interface Curso{
  nombre: string;
  comision: string;
  profesor: string;
  fechaInicio: Date;
  fechaFinal: Date;
  inscripcionAbierta: boolean;
  imagen: string;
  estudiantes: Estudiante[];
}
