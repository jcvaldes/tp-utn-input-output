import { Persona } from './../../models/persona.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styles: [
  ]
})
export class ListadoEntidadComponent implements OnInit {
  @Input() personas: Persona[];
  @Output() personaClicked = new EventEmitter<Persona>();
  constructor() { }

  ngOnInit(): void {
  }
  clickPersona(persona: Persona) {
    debugger
    this.personaClicked.emit(persona);
  }
}
