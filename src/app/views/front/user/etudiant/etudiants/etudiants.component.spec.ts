import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantComponent } from './etudiants.component';

describe('EtudiantsComponent', () => {
  let component: EtudiantComponent;
  let fixture: ComponentFixture<EtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
