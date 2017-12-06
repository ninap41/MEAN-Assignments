import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyanFourComponentComponent } from './super-saiyan-four-component.component';

describe('SuperSaiyanFourComponentComponent', () => {
  let component: SuperSaiyanFourComponentComponent;
  let fixture: ComponentFixture<SuperSaiyanFourComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyanFourComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyanFourComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
