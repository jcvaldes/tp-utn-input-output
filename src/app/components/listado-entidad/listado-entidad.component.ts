import { Persona } from './../../models/persona.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pais } from '../../models/pais.model';

@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styles: [
  ]
})
export class ListadoEntidadComponent implements OnInit {
  @Input() personas: Persona[];
  @Input() paises: Pais[];
  @Output() personaClicked = new EventEmitter<Persona>();
  @Output() paisClicked = new EventEmitter<Pais>();
  constructor() { }

  ngOnInit(): void {
  }
  clickPersona(persona: Persona) {
    debugger
    this.personaClicked.emit(persona);
  }

  clickPais(pais: Pais) {
    this.paisClicked.emit(pais);
  }
}
