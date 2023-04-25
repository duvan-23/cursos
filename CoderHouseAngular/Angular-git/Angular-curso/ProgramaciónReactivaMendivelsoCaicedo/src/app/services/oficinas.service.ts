import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, filter, from, map, of } from 'rxjs';
import { personas } from '../datos/personas';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class OficinasService implements OnInit{
  personas: Persona[]=personas;
  personasOrden!: Persona[];
  personasSubject: BehaviorSubject<Persona[]>;
  constructor() {
    this.ordenar();
    this.personasSubject = new BehaviorSubject<Persona[]>(this.personasOrden);
  }

  ngOnInit(): void{
  }
  ordenar(){
    of(this.personas).pipe(
      map((personas: Persona[])=>personas.filter((persona: Persona)=>persona.cargo === 'Jefe'))
    )
    .subscribe((persona)=>{
      this.personasOrden=[...persona];
    });
    of(this.personas).pipe(
      map((personas: Persona[])=>personas.filter((persona: Persona)=>persona.cargo === 'Encargado'))
    )
    .subscribe((persona)=>{
      this.personasOrden=[...this.personasOrden,...persona];
    });
    of(this.personas).pipe(
      map((personas: Persona[])=>personas.filter((persona: Persona)=>persona.cargo != 'Jefe' && persona.cargo != 'Encargado'))
    )
    .subscribe((persona)=>{
      this.personasOrden=[...this.personasOrden,...persona];
    });
  }

  obtenerPersonasObservable(){
    return this.personasSubject.asObservable();
  }
  agregarCurso(persona: Persona){
    this.personas.push(persona);
    this.ordenar();
    this.personasSubject.next(this.personasOrden);
  }
}
