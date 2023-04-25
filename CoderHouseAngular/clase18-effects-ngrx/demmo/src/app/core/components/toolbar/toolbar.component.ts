import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Session } from 'src/app/models/sesion';
import { SessionService } from '../../services/session.service';
import { selectSessionActiva } from '../../state/session.selectors';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  session$!:Observable<Session>;
  constructor(
    private sessionService: SessionService,
    private store: Store<Session>
    ) { }

  ngOnInit(): void {
    this.session$ = this.store.select(selectSessionActiva);
    // this.session$ = this.sessionService.obtenerSession();
  }

}
