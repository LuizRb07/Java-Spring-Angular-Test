import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoMainComponent } from './candidato-main.component';

describe('CandidatoMainComponent', () => {
  let component: CandidatoMainComponent;
  let fixture: ComponentFixture<CandidatoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatoMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
