import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarlyHtmlComponent } from './scholarly-html.component';

describe('ScholarlyHtmlComponent', () => {
  let component: ScholarlyHtmlComponent;
  let fixture: ComponentFixture<ScholarlyHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScholarlyHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholarlyHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
