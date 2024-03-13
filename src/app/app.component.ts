import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReminderComponent } from './reminder/reminder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReminderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reminderapp';
}
