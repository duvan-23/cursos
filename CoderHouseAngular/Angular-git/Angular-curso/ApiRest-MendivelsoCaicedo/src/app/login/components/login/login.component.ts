import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup
  constructor(
    private sessionService: SessionService,
    private router:Router
  ) {
    this.formulario = new FormGroup({
      usuario: new FormControl('Duvan'),
      contrasena: new FormControl('asd.123'),
      admin: new FormControl(true)
    })
  }

  ngOnInit(): void {
  }
  login(){
    console.log(this.formulario.value);
    this.sessionService.login(this.formulario.value.usuario,this.formulario.value.contrasena,this.formulario.value.admin);
    this.router.navigate(['inicio']);
  }
}
