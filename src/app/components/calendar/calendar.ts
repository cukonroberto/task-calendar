import { Component, Output, EventEmitter } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';



@Component({
  selector: 'app-calendar',
  standalone: true, 
  imports: [CommonModule, MatCalendar, MatCardModule],
  templateUrl: './calendar.html',
  styleUrl: './calendar.scss'
})
export class Calendar {


  selectedDate: Date = new Date();

  @Output() dateSelected = new EventEmitter<Date>();

  onDateChange(date: Date): void{
    this.selectedDate = date;
    this.dateSelected.emit(date);
  }



}
