import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        <div class="text-center">
            <h1 class="display-1 blan">{{ title }}</h1>
            <h5 class="display-6 blan">La base es: <strong>{{ base }}</strong></h5>
            <button class="btn btn-sm btn-outline-light" (click)="acumular(-base);">-{{base}}</button>&nbsp;
            <span class="display-6 blan">{{ number }}</span>&nbsp;
            <button class="btn btn-sm btn-outline-light" (click)="acumular(base);">+{{base}}</button>
        </div>
        <hr class="blan">
    `
})

export class ContadorComponent{
    title : string = 'Contador App';
    number: number = 0;
    base  : number = 5;
    acumular(valor: number){
      this.number += valor; 
    }
}