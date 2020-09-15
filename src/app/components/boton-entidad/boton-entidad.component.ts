import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pais } from '../../models/pais.model';
import { Persona } from '../../models/persona.model';

@Component({
  selector: 'app-boton-entidad',
  templateUrl: './boton-entidad.component.html',
  styleUrls: ['./boton-entidad.component.scss']
})
export class BotonEntidadComponent implements OnInit {
  @Input() pais: Pais;
  @Input() persona: Persona;
  @Output() removerPais = new EventEmitter<Pais>();
  @Output() removerPersona = new EventEmitter<Persona>();
  constructor() { }

  ngOnInit(): void {
  }
  onDeletePais() {
    this.removerPais.emit(this.pais);
  }
  onDeletePersona() {
    this.removerPersona.emit(this.persona);
  }
}
