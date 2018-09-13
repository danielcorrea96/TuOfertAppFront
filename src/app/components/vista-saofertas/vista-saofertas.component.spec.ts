import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaSAOfertasComponent } from './vista-saofertas.component';

describe('VistaSAOfertasComponent', () => {
  let component: VistaSAOfertasComponent;
  let fixture: ComponentFixture<VistaSAOfertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaSAOfertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaSAOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
