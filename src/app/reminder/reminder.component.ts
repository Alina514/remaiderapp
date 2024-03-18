import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ReminderService } from '../service/reminders.service';
import {  ReminderModel } from '../models/reminder.model';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ReminderFormDialogComponent } from '../reminder-form-dialog/reminder-form-dialog.component';



@Component({
  selector: 'app-reminders',
  standalone: true,
  imports: [NgFor,MatButtonModule, MatTableModule, MatPaginatorModule, MatPaginator, MatIconModule],
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'type', 'description', 'date', 'actions'];
  dataSource!: MatTableDataSource<ReminderModel>;

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private reminderService: ReminderService, public dialog: MatDialog) {
    this.reminderService.getAll().subscribe(res =>{
      this.dataSource = new MatTableDataSource<ReminderModel>(res.map((reminder:any) =>{
        return{
          id: reminder.id,
          type: reminder.type,
          description: reminder.description,
          date: reminder.date

        }
      }));

    })
    
  }

  ngAfterViewInit() {
    if(this.dataSource){
       this.dataSource.paginator= this.paginator;
    }
  }

  openDialog(reminder?: ReminderModel): void{
    const dialogRef = this.dialog.open(ReminderFormDialogComponent, {
      width: '500px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: reminder
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      if (res && res.event === 'add') {
        this.reminderService.addReminder(res.data).subscribe();
      } else if (res && res.event === 'update' && reminder) {
        this.reminderService.updateReminder(reminder.id.toString(), res.data).subscribe();
      }
    });
  }
  deleteReminder(id: number): void {
    this.reminderService.deleteReminder(id.toString()).subscribe(res => {
      console.log(res);
      location.reload();
    }); 
  }
}

