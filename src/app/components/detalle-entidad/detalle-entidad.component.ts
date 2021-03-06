import { Persona } from './../../models/persona.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pais } from '../../models/pais.model';

@Component({
  selector: 'app-detalle-entidad',
  templateUrl: './detalle-entidad.component.html',
  styles: [
  ]
})
export class DetalleEntidadComponent implements OnInit {
  @Input() persona: Persona;
  @Input() pais: Pais;
  @Output() removerPais = new EventEmitter<Pais>();
  @Output() removerPersona = new EventEmitter<Persona>();
  constructor() { }

  ngOnInit(): void {
  }
  onDeletePais() {
    this.removerPais.emit(this.pais);
    this.pais = null;
  }
  onDeletePersona() {
    this.removerPersona.emit(this.persona);
    this.persona = null;
  }
}
