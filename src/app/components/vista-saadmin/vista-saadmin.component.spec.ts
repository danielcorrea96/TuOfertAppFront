import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaSAAdminComponent } from './vista-saadmin.component';

describe('VistaSAAdminComponent', () => {
  let component: VistaSAAdminComponent;
  let fixture: ComponentFixture<VistaSAAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaSAAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaSAAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
