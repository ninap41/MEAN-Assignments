import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaiyanComponentComponent } from './saiyan-component.component';

describe('SaiyanComponentComponent', () => {
  let component: SaiyanComponentComponent;
  let fixture: ComponentFixture<SaiyanComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaiyanComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaiyanComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
