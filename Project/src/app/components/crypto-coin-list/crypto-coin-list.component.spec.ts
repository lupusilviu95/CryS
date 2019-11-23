import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoCoinListComponent } from './crypto-coin-list.component';

describe('CryptoCoinListComponent', () => {
  let component: CryptoCoinListComponent;
  let fixture: ComponentFixture<CryptoCoinListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoCoinListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoCoinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
