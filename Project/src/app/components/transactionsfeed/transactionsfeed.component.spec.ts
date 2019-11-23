import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsfeedComponent } from './transactionsfeed.component';

describe('TransactionsfeedComponent', () => {
  let component: TransactionsfeedComponent;
  let fixture: ComponentFixture<TransactionsfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
