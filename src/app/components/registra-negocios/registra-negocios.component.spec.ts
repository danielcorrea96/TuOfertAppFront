import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraNegociosComponent } from './registra-negocios.component';

describe('RegistraNegociosComponent', () => {
  let component: RegistraNegociosComponent;
  let fixture: ComponentFixture<RegistraNegociosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistraNegociosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraNegociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
