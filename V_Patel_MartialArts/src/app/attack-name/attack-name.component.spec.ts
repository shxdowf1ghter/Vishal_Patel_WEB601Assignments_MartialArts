import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackNameComponent } from './attack-name.component';

describe('AttackNameComponent', () => {
  let component: AttackNameComponent;
  let fixture: ComponentFixture<AttackNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttackNameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttackNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
