import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainChanceComponent } from './rain-chance.component';

describe('RainChanceComponent', () => {
  let component: RainChanceComponent;
  let fixture: ComponentFixture<RainChanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RainChanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RainChanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
