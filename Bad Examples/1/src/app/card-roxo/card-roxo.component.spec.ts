import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRoxoComponent } from './card-roxo.component';

describe('CardRoxoComponent', () => {
  let component: CardRoxoComponent;
  let fixture: ComponentFixture<CardRoxoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardRoxoComponent]
    });
    fixture = TestBed.createComponent(CardRoxoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
