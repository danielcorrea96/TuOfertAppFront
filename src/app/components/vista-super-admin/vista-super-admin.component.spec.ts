import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaSuperAdminComponent } from './vista-super-admin.component';

describe('VistaSuperAdminComponent', () => {
  let component: VistaSuperAdminComponent;
  let fixture: ComponentFixture<VistaSuperAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaSuperAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
