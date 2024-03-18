import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';
import { ReminderModel } from '../models/reminder.model';

@Component({
  selector: 'app-reminder-form-dialog',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, ReactiveFormsModule, MatDividerModule],
  templateUrl: './reminder-form-dialog.component.html',
  styleUrl: './reminder-form-dialog.component.css'
})
export class ReminderFormDialogComponent implements OnInit{
  reminderForm = new FormGroup({
    type: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required)
  });

  currentReminder: ReminderModel;
  constructor(
    public dialogRef: MatDialogRef<ReminderFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){
    console.log(data);
    this.currentReminder = data;
  }

  ngOnInit():void{
    if(this.currentReminder){
      this.reminderForm.controls.type.setValue(this.currentReminder.type);
      this.reminderForm.controls.description.setValue(this.currentReminder.description);
      this.reminderForm.controls.date.setValue(this.currentReminder.date);
    }
  }

  onSubmit(){
    const newReminder = {
      type: this.reminderForm.controls.type.getRawValue(),
      description: this.reminderForm.controls.description.getRawValue(),
      date: this.reminderForm.controls.date.getRawValue()
    }

    console.log(newReminder);
    if(this.currentReminder){
      this.dialogRef.close({
        event:"update",
        data:newReminder
       })
    } else {
      this.dialogRef.close({
        event:"add",
        data:newReminder
       })
    }
  }

  close():void{
    console.log("Cancel")
    this.dialogRef.close({
      event:"cancel"
     });
  }
}