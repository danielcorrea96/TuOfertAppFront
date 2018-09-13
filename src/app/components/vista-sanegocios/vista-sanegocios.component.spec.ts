import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaSANegociosComponent } from './vista-sanegocios.component';

describe('VistaSANegociosComponent', () => {
  let component: VistaSANegociosComponent;
  let fixture: ComponentFixture<VistaSANegociosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaSANegociosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaSANegociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
