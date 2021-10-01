import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'colaborador.component.html'
})
export class ColaboradorComponent{

    nombre: string = 'Luis Gilberto Flores Raiz';
    edad: number = 25;
    area: string = 'tecnologias de información'
    puesto: string = 'Analista de programación'
    getNombre(){
        return `${this.puesto}`
    }
    cambiarNombre(): void{
        this.nombre = 'Miguel Silva Padilla';
        this.edad = 26;
    }

    cambiarArea(): void{
        this.area = 'Soporte tecnico'
    }
}