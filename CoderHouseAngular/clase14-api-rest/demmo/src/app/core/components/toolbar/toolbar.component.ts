import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Session } from 'src/app/models/sesion';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  session$!:Observable<Session>;
  constructor(
    private sessionService: SessionService
    ) { }

  ngOnInit(): void {
    this.session$ = this.sessionService.obtenerSession();
  }

}
