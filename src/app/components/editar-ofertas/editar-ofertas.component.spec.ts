import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOfertasComponent } from './editar-ofertas.component';

describe('EditarOfertasComponent', () => {
  let component: EditarOfertasComponent;
  let fixture: ComponentFixture<EditarOfertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarOfertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
