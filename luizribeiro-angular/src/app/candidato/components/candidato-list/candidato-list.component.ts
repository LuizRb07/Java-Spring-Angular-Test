import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Candidato } from 'src/app/model/candidato';

@Component({
  selector: 'app-candidato-list',
  templateUrl: './candidato-list.component.html',
  styleUrls: ['./candidato-list.component.css']
})
export class CandidatoListComponent {
  @Input() candidato: Candidato[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);
  displayedColumns = ['nome', 'altura', 'peso', 'actions'];

  dataSource = new MatTableDataSource<Candidato>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.candidato);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    var c : any = this.candidato[0];
    if (c && c['candidatos']) {
      this.displayedColumns.length = 0;
      const $c = this.candidato[0];
      if (c['estado'])
        this.displayedColumns.push('estado', 'candidatos');
      else if (c['faixa_etaria'])
        this.displayedColumns.push('faixa_etaria', 'candidatos', 'media_imc');
      else if (c['obesidade'])
        this.displayedColumns.push('sexo', 'candidatos', 'obesidade','obesidade_perc');
      else if (c['media_idade'])
        this.displayedColumns.push('tipo_sanguineo', 'candidatos', 'media_idade');
      else if (c['doadores'])
        this.displayedColumns.push('tipo_sanguineo', 'candidatos', 'doadores');
    }
  }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(candidato: Candidato) {
    this.edit.emit(candidato);
  }

  onDelete(candidato: Candidato) {
    this.remove.emit(candidato);
  }
}
