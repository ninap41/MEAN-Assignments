import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyanTwoComponentComponent } from './super-saiyan-two-component.component';

describe('SuperSaiyanTwoComponentComponent', () => {
  let component: SuperSaiyanTwoComponentComponent;
  let fixture: ComponentFixture<SuperSaiyanTwoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyanTwoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyanTwoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
