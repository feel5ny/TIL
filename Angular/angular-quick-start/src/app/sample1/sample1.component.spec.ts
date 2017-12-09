import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample1Component } from './sample1.component';

describe('Sample1Component', () => {
  let component: Sample1Component;
  let fixture: ComponentFixture<Sample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
