import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalydePlateComponent } from './analyde-plate.component';

describe('AnalydePlateComponent', () => {
  let component: AnalydePlateComponent;
  let fixture: ComponentFixture<AnalydePlateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalydePlateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalydePlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
