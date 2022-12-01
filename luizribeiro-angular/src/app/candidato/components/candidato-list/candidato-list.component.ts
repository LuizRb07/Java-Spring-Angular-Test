import { Candidato } from './../../../model/candidato';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

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

  readonly displayedColumns = ['nome', 'altura', 'peso', 'actions'];
  dataSource = new MatTableDataSource<Candidato>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.candidato);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
