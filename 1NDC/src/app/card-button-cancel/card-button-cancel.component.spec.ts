import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardButtonCancelComponent } from './card-button-cancel.component';

describe('CardButtonCancelComponent', () => {
  let component: CardButtonCancelComponent;
  let fixture: ComponentFixture<CardButtonCancelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardButtonCancelComponent]
    });
    fixture = TestBed.createComponent(CardButtonCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
