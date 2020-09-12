import { Persona } from './../../models/persona.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-entidad',
  templateUrl: './detalle-entidad.component.html',
  styles: [
  ]
})
export class DetalleEntidadComponent implements OnInit {
  @Input() persona: Persona;
  constructor() { }

  ngOnInit(): void {
  }

}
