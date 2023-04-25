import { Curso } from "./models/curso";

export let cursos: Curso[]=[
  {nombre:"Angular",comision:"32310",profesor:"Keven",fechaInicio: new Date(2022, 0, 1),fechaFinal: new Date(2022, 0, 1),inscripcionAbierta:true,imagen:"https://parentesis.com/imagesPosts/coder00.jpg"},
  {nombre:"Angular",comision:"32320",profesor:"Fernando",fechaInicio: new Date(2022, 2, 1),fechaFinal: new Date(2022, 3, 30),inscripcionAbierta:true,imagen:"https://parentesis.com/imagesPosts/coder00.jpg"},
  {nombre:"ReactJS",comision:"33310",profesor:"Arturo",fechaInicio: new Date(2022, 1, 1),fechaFinal: new Date(2022, 4, 28),inscripcionAbierta:false,imagen:"https://parentesis.com/imagesPosts/coder00.jpg"},
  {nombre:"VueJs",comision:"34310",profesor:"Lautaro",fechaInicio: new Date(2022, 5, 1),fechaFinal: new Date(2022, 6, 30),inscripcionAbierta:false,imagen:"https://parentesis.com/imagesPosts/coder00.jpg"},
];
