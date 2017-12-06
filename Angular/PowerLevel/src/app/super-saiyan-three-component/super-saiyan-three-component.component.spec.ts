import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyanThreeComponentComponent } from './super-saiyan-three-component.component';

describe('SuperSaiyanThreeComponentComponent', () => {
  let component: SuperSaiyanThreeComponentComponent;
  let fixture: ComponentFixture<SuperSaiyanThreeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyanThreeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyanThreeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
