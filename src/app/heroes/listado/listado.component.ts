import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  colaboradores: string[] = ['Luis', 'Miguel', 'Charly', 'Nidya', 'Dulce'];
  borrados: string = '';
  borrar(){
    this.borrados = this.colaboradores.pop() || '';
  }

}
