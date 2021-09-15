import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutV2Component } from './about-v2.component';

describe('AboutV2Component', () => {
  let component: AboutV2Component;
  let fixture: ComponentFixture<AboutV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
