import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TunegocioComponent } from './tunegocio.component';

describe('TunegocioComponent', () => {
  let component: TunegocioComponent;
  let fixture: ComponentFixture<TunegocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TunegocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TunegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
