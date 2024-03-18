import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderFormDialogComponent} from './reminder-form-dialog.component';

describe('ReminderFormDialogComponent', () => {
  let component: ReminderFormDialogComponent;
  let fixture: ComponentFixture<ReminderFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReminderFormDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReminderFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});