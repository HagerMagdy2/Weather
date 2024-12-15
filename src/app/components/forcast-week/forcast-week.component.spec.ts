import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcastWeekComponent } from './forcast-week.component';

describe('ForcastWeekComponent', () => {
  let component: ForcastWeekComponent;
  let fixture: ComponentFixture<ForcastWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForcastWeekComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForcastWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
