import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsAndC0nditionsComponent } from './terms-and-c0nditions.component';

describe('TermsAndC0nditionsComponent', () => {
  let component: TermsAndC0nditionsComponent;
  let fixture: ComponentFixture<TermsAndC0nditionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermsAndC0nditionsComponent]
    });
    fixture = TestBed.createComponent(TermsAndC0nditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
