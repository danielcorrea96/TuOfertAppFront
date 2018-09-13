import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaSAUsuarioComponent } from './vista-sausuario.component';

describe('VistaSAUsuarioComponent', () => {
  let component: VistaSAUsuarioComponent;
  let fixture: ComponentFixture<VistaSAUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaSAUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaSAUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
