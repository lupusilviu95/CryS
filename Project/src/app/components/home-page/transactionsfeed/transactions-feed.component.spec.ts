import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsFeedComponent } from './transactions-feed.component';

describe('TransactionsfeedComponent', () => {
  let component: TransactionsFeedComponent;
  let fixture: ComponentFixture<TransactionsFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
