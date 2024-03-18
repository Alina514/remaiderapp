import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReminderComponent } from './reminder/reminder.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReminderComponent, HttpClientModule, MatSlideToggleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reminders-app';

  clickToggle():void{
    console.log("CLICK on TOGGLE")
  }
}