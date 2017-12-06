import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyanComponentComponent } from './super-saiyan-component.component';

describe('SuperSaiyanComponentComponent', () => {
  let component: SuperSaiyanComponentComponent;
  let fixture: ComponentFixture<SuperSaiyanComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyanComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyanComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
