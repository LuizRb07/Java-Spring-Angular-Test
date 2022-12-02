import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CandidatoFormComponent } from './view/candidato-form/candidato-form.component';
import { CandidatoMainComponent } from './view/candidato-main/candidato-main.component';

const routes: Routes = [
  {path: '', component: CandidatoMainComponent},
  {path: 'novo', component: CandidatoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatoRoutingModule { }
