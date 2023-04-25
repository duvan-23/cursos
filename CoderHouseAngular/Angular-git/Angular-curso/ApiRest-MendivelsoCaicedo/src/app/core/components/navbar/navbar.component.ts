import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Session } from 'src/app/models/session';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  session$!:Observable<Session>;
  constructor(
    private sessionService: SessionService
    ) { }

  ngOnInit(): void {
    this.session$ = this.sessionService.obtenerSession();
  }

}
