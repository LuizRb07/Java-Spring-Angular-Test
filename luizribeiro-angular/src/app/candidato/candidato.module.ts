import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { CandidatoRoutingModule } from './candidato-routing.module';
import { CandidatoEstadoListComponent } from './components/candidato-estado-list/candidato-estado-list.component';
import { CandidatoListComponent } from './components/candidato-list/candidato-list.component';
import { CandidatoFormComponent } from './view/candidato-form/candidato-form.component';
import { CandidatoMainComponent } from './view/candidato-main/candidato-main.component';

@NgModule({
  declarations: [
    CandidatoMainComponent,
    CandidatoFormComponent,
    CandidatoListComponent,
    CandidatoEstadoListComponent
  ],
  imports: [
    CommonModule,
    CandidatoRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class CandidatoModule { }
