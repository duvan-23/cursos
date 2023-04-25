import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {
  formularioUsuario: FormGroup;
  contrasenasIguales!: boolean;
  constructor(private fb: FormBuilder) {
    this.formularioUsuario = fb.group({
      nombre: new FormControl('',[Validators.required]),
      correo: new FormControl('',[Validators.pattern('^[a-z0-9]+@[a-z]+\\.[a-z]{2,3}$'), Validators.required]),
      contraseña: new FormControl('',[Validators.required, Validators.minLength(5), Validators.pattern('^.*[A-Z]+.*$')]),
      contraseña2: new FormControl('',[Validators.required, Validators.minLength(5), Validators.pattern('^.*[A-Z]+.*$')]),
      admin: new FormControl(false,[])
    });
  }

  ngOnInit(): void {
  }
  agregarUsuario(){
    // console.log(this.formularioUsuario);
    const contraseña1= this.formularioUsuario.value.contraseña;
    const contraseña2= this.formularioUsuario.value.contraseña2;

    this.contrasenasIguales = contraseña1 === contraseña2;
    console.log(this.formularioUsuario);
    this.formularioUsuario.addControl('control1', new FormControl('',[]))
  }
}
