import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import {cursos} from '../../cursos';
@Component({
  selector: 'app-demo-cards',
  templateUrl: './demo-cards.component.html',
  styleUrls: ['./demo-cards.component.css']
})
export class DemoCardsComponent implements OnInit {
  filtro: string="";
  cursos: Curso[]=cursos;
  constructor() { }

  ngOnInit(): void {
  }
}
