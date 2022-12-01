import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoEstadoListComponent } from './candidato-estado-list.component';

describe('CandidatoEstadoListComponent', () => {
  let component: CandidatoEstadoListComponent;
  let fixture: ComponentFixture<CandidatoEstadoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatoEstadoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatoEstadoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
