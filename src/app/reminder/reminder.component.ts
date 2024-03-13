import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reminder',
  standalone: true,
  imports: [],
  templateUrl: './reminder.component.html',
  styleUrl: './reminder.component.css'
})
export class ReminderComponent implements OnInit{
  reminder: string = "MyReminder"; 

  ngOnInit(): void {
    console.log("reminders component init!");
  }

}
