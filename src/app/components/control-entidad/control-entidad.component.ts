import { Persona } from './../../models/persona.model';
import { environment } from './../../../environments/environment';
import { Component, OnInit, Input } from '@angular/core';
import { Pais } from '../../models/pais.model';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styles: [
  ]
})
export class ControlEntidadComponent implements OnInit {
  @Input() paises: Pais[];
  personaspadre: Persona[] = [];
  personaDetalle: Persona;
  constructor(private http: HttpService) {
    this.getPersonas();
  }

  ngOnInit(): void {
  }
  getPersonas() {
    const  url = `${environment.endpointPersonas}`;
    this.http.get<Persona>(url).subscribe(personas => {
      this.personaspadre = personas;
    });
  }
  personaClicked($event) {
    debugger
    this.personaDetalle = $event;
  }
}
