import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CandidatoMainComponent } from './view/candidato-main/candidato-main.component';
import { CandidatoFormComponent } from './view/candidato-form/candidato-form.component';

const routes: Routes = [
  {path: '', component: CandidatoMainComponent},
  {path: 'novo', component: CandidatoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatoRoutingModule { }
