import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { CursosComponent } from './cursos.component';

describe('Pruebas unitarias de cursos CursosComponent', () => {
  let component: CursosComponent;
  let fixture: ComponentFixture<CursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosComponent ],
      imports:[
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario se mantiene invalido cuando ingreso unicamente la comision del curso', () => {
    const formulario =component.formulario;
    const comision = formulario.controls['comision'];
    comision.setValue('32350');
    expect(formulario.valid).toBeFalse();
  });

  it('El formulario se mantiene valido cuando ingreso el nombre del curso', () => {
    const formulario =component.formulario;
    const comision = formulario.controls['comision'];
    const nombre = formulario.controls['nombre'];
    comision.setValue('32350');
    nombre.setValue('Angular');
    expect(formulario.valid).toBeTrue();
  });

  it('Se renderiza el objeto de cursos cuando doy click al boton del formulario', () => {
    const formulario =component.formulario;
    const comision = formulario.controls['comision'];
    const nombre = formulario.controls['nombre'];

    comision.setValue('32350');
    nombre.setValue('Angular');

    const boton = fixture.debugElement.query(By.css("#btnAgregar"));
    boton.nativeElement.click();
    fixture.detectChanges();//para detectar los cambios al dar click al boton

    const listaCursosRef = fixture.debugElement.query(By.css("#lista-cursos"));

    expect(listaCursosRef).toBeTruthy();
  });

  it('Se agrega la informacion al arreglo', () => {
    const formulario =component.formulario;
    const comision = formulario.controls['comision'];
    const nombre = formulario.controls['nombre'];

    comision.setValue('32350');
    nombre.setValue('Angular');

    const boton = fixture.debugElement.query(By.css("#btnAgregar"));
    boton.nativeElement.click();
    fixture.detectChanges();//para detectar los cambios al dar click al boton

    const cursos = component.cursos;

    expect(cursos[cursos.length-1]).toEqual({ nombre: 'Angular', comision: '32350' });
  });
});
