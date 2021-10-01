import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ColaboradorComponent } from './colaborador/colaborador.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        ColaboradorComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]
})

export class colaboradorModule{} 