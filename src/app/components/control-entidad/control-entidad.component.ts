import { Persona } from './../../models/persona.model';
import { environment } from './../../../environments/environment';
import { Component, OnInit, Input } from '@angular/core';
import { Pais } from '../../models/pais.model';
import { HttpService } from '../../services/http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styles: [
  ]
})
export class ControlEntidadComponent implements OnInit {
  personaspadre: Persona[] = [];
  paisespadre: Pais[] = [];
  personaDetalle: Persona;
  paisDetalle: Pais;
  constructor(private http: HttpService) {
    this.getPersonas();
    this.getPaises();
  }

  ngOnInit(): void {
  }
  getPersonas() {
    const  url = `${environment.endpointPersonas}`;
    this.http.get<Persona>(url).subscribe(personas => {
      debugger
      this.personaspadre = personas;
    });
  }
  getPaises() {
    const  url = `${environment.endpointPaises}`;
    this.http.get<Pais>(url).subscribe(paises => {
      this.paisespadre = paises;
    });
  }
  personaClicked($event) {
    this.personaDetalle = $event;
  }
  paisClicked($event) {
    this.paisDetalle = $event;
  }

  onDeletePersona(persona) {
    const idx = this.personaspadre.findIndex(p => p.id === persona.id);
    this.personaspadre.splice(idx, 1);
  }
  onDeletePais(pais) {
    const idx = this.paisespadre.findIndex(p => p.name === pais.name);
    this.paisespadre.splice(idx, 1);
  }

}
