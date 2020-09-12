import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona.model';
import { HttpService } from '../../services/http.service';
import { Pais } from '../../models/pais.model';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styles: [
  ]
})
export class BienvenidoComponent implements OnInit {
  url: string;

  paisespadre: Pais[] = [];
  constructor(private http: HttpService) {

    this.getPaises();
  }

  getPaises() {
    const  url = `${environment.endpointPaises}`;
    this.http.get<Pais>(url).subscribe(paises => {
      debugger
      this.paisespadre = paises;
    });
  }

  ngOnInit(): void {
  }

}
