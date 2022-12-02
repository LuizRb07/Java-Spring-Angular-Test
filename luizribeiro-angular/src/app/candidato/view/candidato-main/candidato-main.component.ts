import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { AskDialogComponent } from '../../../shared/components/ask-dialog/ask-dialog.component';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { CandidatoService } from '../../service/candidato.service';
import { CandidatoFormComponent } from '../candidato-form/candidato-form.component';
import { Candidato } from './../../../model/candidato';


@Component({
  selector: 'app-candidato-main',
  templateUrl: './candidato-main.component.html',
  styleUrls: ['./candidato-main.component.css']
})
export class CandidatoMainComponent {
  candidato$: Observable<Candidato[]> | null = null;

  constructor (
      private candidatoService: CandidatoService,
      private router: Router, private aroute: ActivatedRoute,
      private snackBar: MatSnackBar,
      public dialog: MatDialog
    ) {
      this.updateTable("Todos");
  }

  updateTable(by: String) {
    if (by == "Todos")
      this.candidato$ = this.candidatoService.list()
      .pipe(catchError(e=>{this.onError(null); return of([])}));
    else if (by == "Estado")
      this.candidato$ = this.candidatoService.listGroupByEstado()
      .pipe(catchError(e=>{this.onError(null); return of([])}));
    else if (by == "FaixaEtaria")
      this.candidato$ = this.candidatoService.listGroupByFaixaEtaria()
      .pipe(catchError(e=>{this.onError(null); return of([])}));
    else if (by == "Genero")
      this.candidato$ = this.candidatoService.listGroupByGenero()
      .pipe(catchError(e=>{this.onError(null); return of([])}));
    else if (by == "Sangue")
      this.candidato$ = this.candidatoService.listGroupBySangue()
      .pipe(catchError(e=>{this.onError(null); return of([])}));
    else if (by == "Receptor")
      this.candidato$ = this.candidatoService.listGroupByReceptor()
      .pipe(catchError(e=>{this.onError(null); return of([])}));
  }

  onError(errorMsg: String | null) {
    if (!errorMsg)
      errorMsg = "Falha ao carregar lista de candidatos.";
    this.dialog.open(ErrorDialogComponent, {data: errorMsg});
  }

  openForm(candidato: Candidato | null) {
    const dialogRef = this.dialog.open(CandidatoFormComponent, {data: candidato});
    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.updateTable('Todos');
    });
  }
  onAdd() {
    this.openForm(null);
  }

  onEdit(candidato: Candidato) {
    this.openForm(candidato);
  }

  onDelete(candidato: Candidato) {
    const dialogRef = this.dialog.open(AskDialogComponent, {
      data: 'Tem certeza que deseja remover esse candidato?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.candidatoService.remove(candidato.id).subscribe(
          () => {
            this.updateTable("Todos");
            this.snackBar.open('Candidato removido com sucesso!', 'X', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          },
          () => this.onError('Erro ao tentar remover candidato.')
        );
      }
    });
  }
}
