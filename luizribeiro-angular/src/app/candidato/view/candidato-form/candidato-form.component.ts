import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'src/app/shared/components/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { CandidatoService } from '../../service/candidato.service';

@Component({
  selector: 'app-candidato-form',
  templateUrl: './candidato-form.component.html',
  styleUrls: ['./candidato-form.component.css']
})
export class CandidatoFormComponent {
  form = this.formBuilder.group({
    nome: ['', [Validators.minLength(4), Validators.maxLength(60)]],
    cpf: ['', [Validators.maxLength(14)]],
    rg: ['', [Validators.maxLength(12)]],
    nascimento: [''],
    sexo: [''],
    mae: ['', [Validators.minLength(4), Validators.maxLength(60)]],
    pai: ['', [Validators.minLength(4), Validators.maxLength(60)]],
    email: [''],
    cep: [''],
    endereco: [''],
    numero: [],
    bairro: [''],
    cidade: [''],
    estado: [''],
    telefone_fixo: [''],
    celular: [''],
    altura: [],
    peso: [],
    tipo_sanguineo: ['']
  });

  constructor (
    private formBuilder: NonNullableFormBuilder,
    private service: CandidatoService,
    private location: Location,
    public dialog: MatDialog
  ) {

  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(
      ret =>{
        this.dialog.open(SuccessDialogComponent, {data: "Novos dados armazenados."});
      },
      err => {
        this.dialog.open(ErrorDialogComponent, {data: err.message});
      }
    );
  }

  onCancel() {
    this.location.back;
  }

  getErrorMessage(fieldName: string) {
    const field = this.form.get(fieldName);

    if (field?.hasError('required')) {
      return 'Campo obrigatório';
    }

    if (field?.hasError('minlength')) {
      const requiredLength: number = field.errors ? field.errors['minlength']['requiredLength'] : 5;
      return `Tamanho mínimo: ${requiredLength} caracteres.`;
    }

    if (field?.hasError('maxlength')) {
      const requiredLength: number = field.errors ? field.errors['maxlength']['requiredLength'] : 200;
      return `Tamanho máximo: ${requiredLength} caracteres.`;
    }

    return 'Campo Inválido';
  }
}
