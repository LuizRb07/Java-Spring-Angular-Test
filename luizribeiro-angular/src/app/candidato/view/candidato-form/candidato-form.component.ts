import { Candidato } from 'src/app/model/candidato';
import { Location } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'src/app/shared/components/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { CandidatoService } from '../../service/candidato.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidato-form',
  templateUrl: './candidato-form.component.html',
  styleUrls: ['./candidato-form.component.css']
})
export class CandidatoFormComponent {
  form = this.formBuilder.group({
    id: [''],
    nome: ['', [Validators.minLength(4), Validators.maxLength(60)]],
    cpf: ['', [Validators.maxLength(14)]],
    rg: ['', [Validators.maxLength(12)]],
    data_nasc: [''],
    sexo: [''],
    mae: ['', [Validators.minLength(4), Validators.maxLength(60)]],
    pai: ['', [Validators.minLength(4), Validators.maxLength(60)]],
    email: [''],
    cep: [''],
    endereco: [''],
    numero: [''],
    bairro: [''],
    cidade: [''],
    estado: [''],
    telefone_fixo: [''],
    celular: [''],
    altura: [''],
    peso: [''],
    tipo_sanguineo: ['']
  });
  availableOptions: [
    {id: '1', name: 'Option A'},
    {id: '2', name: 'Option B'},
    {id: '3', name: 'Option C'}
  ];
  constructor (
    private formBuilder: NonNullableFormBuilder,
    @Inject(MAT_DIALOG_DATA) public candidato: Candidato,
    private service: CandidatoService,
    private aroute: ActivatedRoute,
    private location: Location,
    public dialog: MatDialog
  ) {
    console.log(candidato);
    this.form.setValue({
      id: candidato.id, nome: candidato.nome, cpf: candidato.cpf, rg: candidato.rg,
      data_nasc: candidato.data_nasc, sexo: candidato.sexo, mae: candidato.mae,
      pai: candidato.pai, email: candidato.email, cep: candidato.cep,
      endereco: candidato.endereco, numero: candidato.numero, bairro: candidato.bairro,
      cidade: candidato.cidade, estado: candidato.estado,
      telefone_fixo: candidato.telefone_fixo, celular: candidato.celular,
      altura: candidato.altura, peso: candidato.peso, tipo_sanguineo: candidato.tipo_sanguineo
    });
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe({
      next: (v) => this.dialog.open(SuccessDialogComponent, {data: "Novos dados armazenados."}),
      error: (e) => this.dialog.open(ErrorDialogComponent, {data: e.message})
    });
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
